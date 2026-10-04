"use client";

/**
 * The application menu bar.
 *
 * Dense app chrome, the way a native desktop puts it: menu groups on the left,
 * the 2D/3D switch and the layout presets in the middle, the keyboard map at
 * the right end. 13px labels, 24px tall, no chrome that is not doing something.
 *
 * The menus are real menus - they open, they close on Escape and on an outside
 * click, the pointer and the keyboard both move through them, and the item
 * under the cursor is highlighted before it is committed.
 *
 * Nothing here is a dead control. `HorosAppShell` decides which commands it can
 * perform itself (invert, full screen) and which it has to forward to the page.
 * A command it cannot perform is drawn disabled, with the reason in its tooltip,
 * rather than drawn live and ignoring the click.
 */

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Box, Rows3, Scan } from "lucide-react";
import {
  HOROS_ACTION_SHORTCUTS,
  HOROS_COLORS,
  HOROS_FONT,
  HOROS_MENU_BAR_HINTS,
  HOROS_SIZE,
  HOROS_SPACE,
} from "./horosTokens";
import type { HorosLayoutMode, HorosMenuAvailability, HorosMenuCommand } from "./horosTypes";
import { HorosLayoutPicker } from "./HorosLayoutPicker";

const C = HOROS_COLORS;
const F = HOROS_FONT;
const S = HOROS_SIZE;
const P = HOROS_SPACE;

export interface HorosMenuBarProps {
  layoutMode: HorosLayoutMode;
  onLayoutChange: (mode: HorosLayoutMode) => void;
  /** 3D volume rendering is on. The 3D engine is a viewport concern. */
  is3d: boolean;
  onToggle3d: () => void;
  /** Fired when a command this bar cannot perform itself is chosen. */
  onCommand: (command: HorosMenuCommand) => void;
  /** Per-command enablement. A command mapped to `false` is drawn disabled. */
  availability?: HorosMenuAvailability;
  /** A study is open, so study-scoped commands can act. */
  hasStudy: boolean;
  /** A viewport holds a decoded image, so view commands can act. */
  hasPixels: boolean;
  /** The viewer's own filter box is non-empty, so "clear filters" can act. */
  hasFilters: boolean;
  className?: string;
}

interface MenuItem {
  command: HorosMenuCommand;
  label: string;
  shortcut?: string;
  /** Why the item is disabled, shown in the tooltip. */
  disabledReason?: string;
}

interface MenuGroup {
  id: string;
  label: string;
  items: readonly MenuItem[];
}

export function HorosMenuBar({
  layoutMode,
  onLayoutChange,
  is3d,
  onToggle3d,
  onCommand,
  availability,
  hasStudy,
  hasPixels,
  hasFilters,
  className,
}: HorosMenuBarProps) {
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [activeItem, setActiveItem] = useState(0);
  const [menuLeft, setMenuLeft] = useState(0);
  const barRef = useRef<HTMLDivElement | null>(null);

  const enabled = useCallback(
    (item: MenuItem): boolean => {
      if (availability && availability[item.command] === false) return false;
      return !item.disabledReason;
    },
    [availability],
  );

  // Group composition depends on what is actually open, so the menus never offer
  // an action that the current state cannot support.
  const groups = useMemo<MenuGroup[]>(() => {
    const notForPixels = "No image is loaded in a viewport.";
    const noStudy = "No study is open.";
    return [
      {
        id: "file",
        label: "File",
        items: [
          { command: "file.openStudy", label: "Open Study", shortcut: "Ctrl+O" },
          {
            command: "file.closeStudy",
            label: "Close Study",
            shortcut: "Ctrl+W",
            disabledReason: hasStudy ? undefined : noStudy,
          },
          { command: "query.refresh", label: "Query PACS", shortcut: HOROS_ACTION_SHORTCUTS.refresh },
        ],
      },
      {
        id: "query",
        label: "Query",
        items: [
          { command: "query.patient", label: "Query by Patient" },
          { command: "query.accession", label: "Query by Accession" },
          {
            command: "query.clearFilters",
            label: "Clear Filters",
            shortcut: "Ctrl+K",
            disabledReason: hasFilters ? undefined : "The study filter is already empty",
          },
        ],
      },
      {
        id: "import",
        label: "Import",
        items: [
          { command: "import.dicomFolder", label: "Import DICOM Folder" },
          {
            command: "import.orthanc",
            label: "Send to PACS",
            disabledReason: hasStudy ? undefined : noStudy,
          },
        ],
      },
      {
        id: "export",
        label: "Export",
        items: [
          {
            command: "export.dicom",
            label: "Export Study as DICOM",
            disabledReason: hasStudy ? undefined : noStudy,
          },
          {
            command: "export.image",
            label: "Export View as Image",
            disabledReason: hasPixels ? undefined : notForPixels,
          },
          { command: "export.studyListCsv", label: "Export Study List as CSV" },
        ],
      },
      {
        id: "send",
        label: "Send",
        items: [
          {
            command: "send.study",
            label: "Send Study",
            disabledReason: hasStudy ? undefined : noStudy,
          },
          {
            command: "send.series",
            label: "Send Series",
            disabledReason: hasStudy ? undefined : noStudy,
          },
          {
            command: "send.report",
            label: "Send Structured Report",
            disabledReason: hasStudy ? undefined : noStudy,
          },
        ],
      },
      {
        id: "view",
        label: "View",
        items: [
          {
            command: "view.actualSize",
            label: "Actual Size",
            shortcut: HOROS_ACTION_SHORTCUTS.actualSize,
            disabledReason: hasPixels ? undefined : notForPixels,
          },
          {
            command: "view.fitToWindow",
            label: "Fit to Window",
            shortcut: HOROS_ACTION_SHORTCUTS.zoomToFit,
            disabledReason: hasPixels ? undefined : notForPixels,
          },
          {
            command: "view.reset",
            label: "Reset View",
            shortcut: HOROS_ACTION_SHORTCUTS.windowLevelReset,
            disabledReason: hasPixels ? undefined : notForPixels,
          },
          {
            command: "view.rotateReset",
            label: "Reset Rotation",
            disabledReason: hasPixels ? undefined : notForPixels,
          },
          {
            command: "view.invert",
            label: "Invert Greyscale",
            shortcut: HOROS_ACTION_SHORTCUTS.invert,
            disabledReason: hasPixels ? undefined : notForPixels,
          },
          {
            command: "view.fullScreen",
            label: "Full Screen",
            shortcut: HOROS_ACTION_SHORTCUTS.fullScreen,
          },
        ],
      },
    ];
  }, [hasFilters, hasPixels, hasStudy]);

  // A click anywhere outside the bar closes whatever menu is open.
  useEffect(() => {
    if (!openGroup) return undefined;
    const onPointerDown = (event: MouseEvent) => {
      const node = barRef.current;
      if (node && event.target instanceof Node && !node.contains(event.target)) {
        setOpenGroup(null);
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [openGroup]);

  const openMenu = (id: string, trigger: HTMLButtonElement | null) => {
    setActiveItem(0);
    // The dropdown is painted under the bar, so it needs the trigger's own
    // offset or it would open at the far left of the window.
    setMenuLeft(trigger ? trigger.offsetLeft : 0);
    setOpenGroup((current) => (current === id ? null : id));
  };

  const activeGroup = groups.find((group) => group.id === openGroup) ?? null;

  const commit = (item: MenuItem) => {
    if (!enabled(item)) return;
    setOpenGroup(null);
    onCommand(item.command);
  };

  const onBarKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!activeGroup) return;
    if (event.key === "Escape") {
      event.preventDefault();
      setOpenGroup(null);
      return;
    }
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      const step = event.key === "ArrowDown" ? 1 : -1;
      setActiveItem((current) => {
        const count = activeGroup.items.length;
        return (current + step + count) % count;
      });
      return;
    }
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      const item = activeGroup.items[activeItem];
      if (item) commit(item);
    }
  };

  return (
    <div
      ref={barRef}
      onKeyDown={onBarKeyDown}
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        gap: P.xs,
        height: S.menuBar,
        flex: "0 0 auto",
        padding: `0 ${P.sm}px`,
        backgroundColor: C.chromeRaised,
        borderBottom: `1px solid ${C.hairline}`,
        color: C.text,
        fontFamily: F.sans,
        fontSize: F.medium,
        userSelect: "none",
        zIndex: 20,
      }}
      className={className}
    >
      {/* Menu groups. */}
      {groups.map((group) => {
        const isOpen = group.id === openGroup;
        return (
          <button
            key={group.id}
            type="button"
            onClick={(event) => openMenu(group.id, event.currentTarget)}
            aria-haspopup="menu"
            aria-expanded={isOpen}
            className="horos-menu-trigger"
            style={{
              height: S.controlDense,
              padding: `0 ${P.xs}px`,
              backgroundColor: isOpen ? C.controlPressed : "transparent",
              border: "none",
              borderRadius: S.radius,
              color: C.text,
              fontFamily: F.sans,
              fontSize: F.medium,
              cursor: "pointer",
              flex: "0 0 auto",
            }}
          >
            {group.label}
          </button>
        );
      })}

      {/* 1px rule between the menus and the toolbar controls. */}
      <span
        style={{
          width: 1,
          height: S.controlDense,
          backgroundColor: C.hairline,
          flex: "0 0 auto",
          margin: `0 ${P.xxs}px`,
        }}
      />

      {/* 2D / 3D switch. */}
      <div
        role="radiogroup"
        aria-label="Rendering mode"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          padding: 1,
          backgroundColor: C.panelSunken,
          border: `1px solid ${C.hairline}`,
          borderRadius: S.radius,
          flex: "0 0 auto",
        }}
      >
        <ModeButton
          label="2D"
          icon={<Scan style={{ width: 10, height: 10 }} aria-hidden="true" />}
          active={!is3d}
          onClick={() => {
            if (is3d) onToggle3d();
          }}
        />
        <ModeButton
          label="3D"
          icon={<Box style={{ width: 10, height: 10 }} aria-hidden="true" />}
          active={is3d}
          onClick={() => {
            if (!is3d) onToggle3d();
          }}
        />
      </div>

      <span
        style={{
          width: 1,
          height: S.controlDense,
          backgroundColor: C.hairline,
          flex: "0 0 auto",
          margin: `0 ${P.xxs}px`,
        }}
      />

      {/* Layout presets. */}
      <HorosLayoutPicker layoutMode={layoutMode} onLayoutChange={onLayoutChange} />

      <span
        style={{
          display: "flex",
          alignItems: "center",
          gap: P.xs,
          width: 13,
          height: 13,
          color: C.textDim,
          flex: "0 0 auto",
          marginLeft: P.xxs,
        }}
        title="Split the selected series across viewports"
        aria-hidden="true"
      >
        <Rows3 style={{ width: 13, height: 13 }} />
      </span>

      {/* Keyboard map, right aligned. */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: P.md,
          marginLeft: "auto",
          color: C.textDim,
          fontFamily: F.mono,
          fontSize: F.micro,
          whiteSpace: "nowrap",
          overflow: "hidden",
        }}
      >
        {HOROS_MENU_BAR_HINTS.map((hint) => (
          <span key={hint}>{hint}</span>
        ))}
      </div>

      {/* The open dropdown, painted last so it sits over the toolbar. */}
      {activeGroup ? (
        <div
          role="menu"
          aria-label={activeGroup.label}
          style={{
            position: "absolute",
            top: S.menuBar,
            left: menuLeft,
            minWidth: 216,
            padding: 2,
            backgroundColor: C.panel,
            border: `1px solid ${C.hairline}`,
            boxShadow: "none",
            zIndex: 30,
          }}
        >
          {activeGroup.items.map((item, index) => {
            const isEnabled = enabled(item);
            const isActive = index === activeItem;
            return (
              <button
                key={item.command}
                type="button"
                role="menuitem"
                disabled={!isEnabled}
                onMouseEnter={() => setActiveItem(index)}
                onClick={() => commit(item)}
                title={item.disabledReason ?? item.label}
                className="horos-menu-item"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: P.md,
                  width: "100%",
                  height: S.menuItem,
                  padding: `0 ${P.sm}px`,
                  backgroundColor: isActive && isEnabled ? C.accent : "transparent",
                  border: "none",
                  color: isEnabled ? (isActive ? C.accentText : C.text) : C.textFaint,
                  fontFamily: F.sans,
                  fontSize: F.small,
                  textAlign: "left",
                  cursor: isEnabled ? "pointer" : "default",
                }}
              >
                <span className="horos-truncate" style={{ flex: "1 1 auto" }}>
                  {item.label}
                </span>
                {item.shortcut ? (
                  <span
                    style={{
                      flex: "0 0 auto",
                      fontFamily: F.mono,
                      fontSize: F.micro,
                      color: isActive && isEnabled ? C.accentTextMuted : C.textDim,
                    }}
                  >
                    {item.shortcut}
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

/** One half of the 2D / 3D switch. */
function ModeButton({
  label,
  icon,
  active,
  onClick,
}: {
  label: string;
  icon: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={active}
      onClick={onClick}
      title={`${label} rendering`}
      className={`horos-btn${active ? " horos-btn--active" : ""}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 3,
        height: S.controlDense - 4,
        padding: `0 ${P.xs}px`,
        backgroundColor: active ? C.accent : "transparent",
        border: "none",
        borderRadius: 1,
        color: active ? C.accentText : C.textMuted,
        fontFamily: F.sans,
        fontSize: F.micro,
        fontWeight: F.weightBold,
        letterSpacing: F.trackWide,
        cursor: "pointer",
      }}
    >
      {icon}
      {label}
    </button>
  );
}

export default HorosMenuBar;
