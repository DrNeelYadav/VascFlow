"use client";

import React, { useEffect, useRef } from "react";

interface BranchNode {
  x: number;
  y: number;
  angle: number;
  length: number;
  depth: number;
  thickness: number;
  heat: number; // 0.0 (emerald laminar flow) -> 1.0 (crimson procedural zone)
  children: BranchNode[];
}

interface BloodParticle {
  branchIndex: number;
  progress: number;
  speed: number;
  size: number;
  alpha: number;
  heatColor: string;
}

export function VascularTreeHeatmapCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse tracking for proximity sway
    let mouse = {
      x: width * 0.5,
      y: height * 0.4,
      targetX: width * 0.5,
      targetY: height * 0.4,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleResize = () => {
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      width = canvas.width = window.innerWidth * dpr;
      height = canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    handleResize();

    // 1. Procedural Vascular Tree Generator
    const buildVascularTree = (
      x: number,
      y: number,
      angle: number,
      length: number,
      depth: number,
      maxDepth: number
    ): BranchNode => {
      const thickness = Math.max(1.2, (maxDepth - depth + 1) * 2.2);
      // Heat mapping: central conduit is laminar (0.05-0.2), bifurcations spike to 0.7-1.0
      const heat = Math.min(1.0, 0.15 + (depth / maxDepth) * 0.65 + (Math.sin(depth * 1.5) > 0.4 ? 0.25 : 0));

      const node: BranchNode = {
        x,
        y,
        angle,
        length,
        depth,
        thickness,
        heat,
        children: [],
      };

      if (depth < maxDepth) {
        const numBranches = depth === 0 ? 2 : Math.random() > 0.15 ? 2 : 3;
        const baseSpread = 0.38 + depth * 0.04;

        for (let i = 0; i < numBranches; i++) {
          const deltaAngle =
            numBranches === 2
              ? (i === 0 ? -1 : 1) * (baseSpread + (Math.random() * 0.12 - 0.06))
              : (i - 1) * (baseSpread * 0.9);

          const childAngle = angle + deltaAngle;
          const childLength = length * (0.76 + Math.random() * 0.12);
          const endX = x + Math.cos(childAngle) * childLength;
          const endY = y + Math.sin(childAngle) * childLength;

          node.children.push(
            buildVascularTree(endX, endY, childAngle, childLength, depth + 1, maxDepth)
          );
        }
      }

      return node;
    };

    // Flatten all branch segments for particle transit
    interface Segment {
      startX: number;
      startY: number;
      endX: number;
      endY: number;
      depth: number;
      heat: number;
    }

    const segments: Segment[] = [];
    const collectSegments = (node: BranchNode, currentX: number, currentY: number) => {
      for (const child of node.children) {
        segments.push({
          startX: currentX,
          startY: currentY,
          endX: child.x,
          endY: child.y,
          depth: child.depth,
          heat: child.heat,
        });
        collectSegments(child, child.x, child.y);
      }
    };

    // Build central aortic tree
    const rootX = window.innerWidth * 0.5;
    const rootY = window.innerHeight * 0.88;
    const vascularTree = buildVascularTree(rootX, rootY, -Math.PI / 2, window.innerHeight * 0.18, 0, 6);
    collectSegments(vascularTree, rootX, rootY);

    // 2. Pulse Flow Particles along branch vectors
    const particles: BloodParticle[] = Array.from({ length: 90 }).map(() => ({
      branchIndex: Math.floor(Math.random() * segments.length),
      progress: Math.random(),
      speed: 0.004 + Math.random() * 0.008,
      size: 1.5 + Math.random() * 2.5,
      alpha: 0.4 + Math.random() * 0.6,
      heatColor: Math.random() > 0.4 ? "#06B6D4" : "#F59E0B",
    }));

    // Heat gradient color interpolator: Emerald -> Cyan -> Amber -> Crimson
    const getHeatColor = (heat: number, pulse: number) => {
      const activeHeat = Math.min(1.0, Math.max(0.0, heat + pulse * 0.2));
      if (activeHeat < 0.35) {
        // Emerald to Cyan (Laminar Flow)
        return `rgba(16, 185, 129, ${0.55 + activeHeat * 0.4})`;
      } else if (activeHeat < 0.7) {
        // Cyan to Amber (Bifurcation Shear)
        return `rgba(6, 182, 212, ${0.65 + activeHeat * 0.35})`;
      } else if (activeHeat < 0.88) {
        // Amber (Procedural High-Density Zone)
        return `rgba(245, 158, 11, ${0.75 + activeHeat * 0.25})`;
      } else {
        // Crimson / Coral (Stenosis / Target Intervention)
        return `rgba(239, 68, 68, ${0.85 + pulse * 0.15})`;
      }
    };

    // 3. Render Animation Loop
    let time = 0;
    const render = () => {
      time += 0.015;

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      const screenW = window.innerWidth;
      const screenH = window.innerHeight;

      // Clear with soft trails for glow retention
      ctx.fillStyle = "rgba(3, 7, 18, 0.28)"; // Deep obsidian
      ctx.fillRect(0, 0, screenW, screenH);

      // Pulse wave traveling outward from root
      const cardiacPulse = Math.sin(time * 3);

      // Recursive tree drawer with mouse sway
      const drawBranch = (
        node: BranchNode,
        parentX: number,
        parentY: number,
        inheritedSway: number
      ) => {
        // Proximity to cursor calculates dynamic branch sway
        const dx = parentX - mouse.x;
        const dy = parentY - mouse.y;
        const distToMouse = Math.hypot(dx, dy);
        const mouseInfluence = Math.max(0, 1 - distToMouse / (screenW * 0.45));

        const sway =
          inheritedSway +
          Math.sin(time * 1.5 + node.depth * 0.6) * 0.018 +
          (mouse.x - screenW * 0.5) * 0.00008 * mouseInfluence;

        for (const child of node.children) {
          const effectiveAngle = child.angle + sway;
          const endX = parentX + Math.cos(effectiveAngle) * child.length;
          const endY = parentY + Math.sin(effectiveAngle) * child.length;

          // Localized systolic pulse
          const branchPulse = Math.sin(time * 4 - child.depth * 0.8);
          const color = getHeatColor(child.heat, branchPulse);

          ctx.save();
          ctx.beginPath();
          ctx.moveTo(parentX, parentY);
          ctx.lineTo(endX, endY);
          ctx.strokeStyle = color;
          ctx.lineWidth = Math.max(1.0, child.thickness * (1 + branchPulse * 0.15));
          ctx.lineCap = "round";

          // Arterial wall glow
          ctx.shadowColor = child.heat > 0.6 ? "#EF4444" : "#06B6D4";
          ctx.shadowBlur = 8 + child.heat * 12;
          ctx.stroke();
          ctx.restore();

          // Capillary node indicator at terminal arterioles
          if (child.children.length === 0) {
            ctx.beginPath();
            ctx.arc(endX, endY, 2.5 + Math.abs(branchPulse) * 1.5, 0, Math.PI * 2);
            ctx.fillStyle = child.heat > 0.5 ? "#F59E0B" : "#10B981";
            ctx.shadowColor = ctx.fillStyle;
            ctx.shadowBlur = 10;
            ctx.fill();
          }

          drawBranch(child, endX, endY, sway * 1.05);
        }
      };

      // Draw Main Conduits
      drawBranch(vascularTree, rootX, rootY, 0);

      // Render Blood Flow Particles
      for (const p of particles) {
        p.progress += p.speed;
        if (p.progress >= 1.0) {
          p.progress = 0;
          p.branchIndex = Math.floor(Math.random() * segments.length);
        }

        const seg = segments[p.branchIndex];
        if (seg) {
          const px = seg.startX + (seg.endX - seg.startX) * p.progress;
          const py = seg.startY + (seg.endY - seg.startY) * p.progress;

          ctx.save();
          ctx.beginPath();
          ctx.arc(px, py, p.size, 0, Math.PI * 2);
          ctx.fillStyle = seg.heat > 0.6 ? "rgba(245, 158, 11, 0.9)" : "rgba(6, 182, 212, 0.85)";
          ctx.shadowColor = ctx.fillStyle;
          ctx.shadowBlur = 12;
          ctx.fill();
          ctx.restore();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none w-full h-full z-0 opacity-80"
    />
  );
}
