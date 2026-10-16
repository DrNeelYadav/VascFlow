"""
Clinical Visceral Arterial Tree Generator (Python + Matplotlib)
Generates high-definition, publication-grade black-and-white medical line art
of the normal Celiac Trunk, SMA, and visceral branching for Interventional Radiology.
Pure black contour lines on pure white background, zero shading, zero text labels.
"""

import matplotlib.pyplot as plt
import numpy as np
from scipy.interpolate import splprep, splev
import os

def smooth_curve(pts, num_pts=150, s=0, k=3):
    """Interpolates 2D control points into a smooth organic anatomical spline."""
    pts = np.array(pts)
    # Ensure points are unique consecutive
    diff = np.diff(pts, axis=0)
    dist = np.hypot(diff[:, 0], diff[:, 1])
    keep = np.insert(dist > 1e-4, 0, True)
    pts = pts[keep]
    if len(pts) <= k:
        k = max(1, len(pts) - 1)
    tck, u = splprep([pts[:, 0], pts[:, 1]], s=s, k=k)
    unew = np.linspace(0, 1, num_pts)
    out = splev(unew, tck)
    return out[0], out[1]

def generate_visceral_arterial_tree(output_path="apps/web-app/public/diagrams/normal_celiac_arterial_tree.png"):
    fig, ax = plt.subplots(figsize=(8.5, 11), dpi=300)
    fig.patch.set_facecolor('white')
    ax.set_facecolor('white')
    ax.axis('off')

    # Line styling hierarchy: crisp pure black, zero shading
    kw_aorta = {'color': 'black', 'linewidth': 3.8, 'solid_capstyle': 'round'}
    kw_main = {'color': 'black', 'linewidth': 2.6, 'solid_capstyle': 'round'}
    kw_branch = {'color': 'black', 'linewidth': 1.8, 'solid_capstyle': 'round'}
    kw_sub = {'color': 'black', 'linewidth': 1.3, 'solid_capstyle': 'round'}
    kw_micro = {'color': 'black', 'linewidth': 0.9, 'solid_capstyle': 'round'}

    # 1. Abdominal Aorta (dual contour tubular trunk for realistic vascular catheterization)
    aorta_left = [(47, 95), (47, 80), (47.2, 65), (47.5, 45), (47.8, 15)]
    aorta_right = [(53, 95), (53, 80), (52.8, 65), (52.5, 45), (52.2, 15)]
    ax.plot(*smooth_curve(aorta_left), **kw_aorta)
    ax.plot(*smooth_curve(aorta_right), **kw_aorta)

    # Aortic bifurcation at bottom into Common Iliacs (subtle markers)
    ax.plot(*smooth_curve([(47.8, 15), (44, 8), (40, 3)]), **kw_main)
    ax.plot(*smooth_curve([(52.2, 15), (56, 8), (60, 3)]), **kw_main)
    ax.plot(*smooth_curve([(50, 13), (47, 6), (43, 3)]), **kw_branch)
    ax.plot(*smooth_curve([(50, 13), (53, 6), (57, 3)]), **kw_branch)

    # 2. Celiac Trunk (Origin from anterior aorta at ~y=78)
    celiac_trunk = [(50, 78), (50, 74.5), (49.8, 73)]
    ax.plot(*smooth_curve(celiac_trunk, k=2), **kw_main)

    # Bifurcation / Trifurcation at (49.8, 73):
    # A. Left Gastric Artery (LGA) - ascends superiorly along lesser curve
    lga_pts = [(49.8, 73), (51.5, 77), (53, 82), (52.5, 87), (50, 90), (47, 91.5)]
    ax.plot(*smooth_curve(lga_pts), **kw_branch)
    # LGA ascending esophageal / gastric branches
    ax.plot(*smooth_curve([(52.5, 87), (53.5, 91), (54, 94)]), **kw_sub)
    ax.plot(*smooth_curve([(50, 90), (49, 93), (48, 95)]), **kw_micro)
    ax.plot(*smooth_curve([(47, 91.5), (44, 91), (41, 89.5)]), **kw_micro)

    # B. Splenic Artery - marked undulating tortuosity to anatomical left (viewer's right)
    splenic_pts = [
        (49.8, 73), (54, 71.5), (58, 74), (62, 70.8), (66, 73.5), 
        (71, 69.5), (76, 73), (80, 70), (84, 73), (88, 71.5)
    ]
    ax.plot(*smooth_curve(splenic_pts, num_pts=200), **kw_main)
    # Dorsal pancreatic artery arising from proximal splenic
    ax.plot(*smooth_curve([(56, 72.5), (56, 68), (57, 63), (56.5, 59)]), **kw_sub)
    ax.plot(*smooth_curve([(57, 63), (60, 61), (63, 60)]), **kw_micro)
    # Great pancreatic artery (arteria pancreatica magna)
    ax.plot(*smooth_curve([(71, 69.5), (71.5, 65), (72, 61)]), **kw_sub)
    # Short gastric arteries branching to splenic upper pole
    ax.plot(*smooth_curve([(80, 70), (82, 75), (83.5, 80)]), **kw_sub)
    ax.plot(*smooth_curve([(84, 73), (86, 77), (87, 81)]), **kw_sub)
    # Terminal splenic hilar branches
    ax.plot(*smooth_curve([(88, 71.5), (92, 74), (95, 76)]), **kw_branch)
    ax.plot(*smooth_curve([(88, 71.5), (93, 71), (96, 71)]), **kw_branch)
    ax.plot(*smooth_curve([(88, 71.5), (92, 68), (95, 66)]), **kw_branch)
    # Left gastroepiploic artery
    ax.plot(*smooth_curve([(84, 73), (85, 67), (82, 62), (77, 58), (72, 56)]), **kw_sub)

    # C. Common Hepatic Artery (CHA) - courses to anatomical right (viewer's left)
    cha_pts = [(49.8, 73), (45, 72.2), (39, 71), (34, 71.8)]
    ax.plot(*smooth_curve(cha_pts), **kw_main)

    # Bifurcation of CHA at (34, 71.8) into Proper Hepatic Artery (PHA) and Gastroduodenal Artery (GDA)
    # 1) Proper Hepatic Artery (PHA - ascends towards porta hepatis)
    pha_pts = [(34, 71.8), (32.5, 76), (30.5, 80), (28.5, 83.5)]
    ax.plot(*smooth_curve(pha_pts), **kw_branch)

    # Right Gastric Artery
    ax.plot(*smooth_curve([(32.5, 76), (35, 76.5), (38, 76), (41, 74.5)]), **kw_micro)

    # Division of PHA at (28.5, 83.5) into RHA and LHA:
    # Left Hepatic Artery (LHA)
    lha_pts = [(28.5, 83.5), (29.5, 87), (30.5, 90.5), (31, 94)]
    ax.plot(*smooth_curve(lha_pts), **kw_branch)
    ax.plot(*smooth_curve([(29.5, 87), (27.5, 90), (26, 92.5)]), **kw_sub) # Segment II
    ax.plot(*smooth_curve([(30.5, 90.5), (33, 93), (34, 95.5)]), **kw_sub) # Segment III

    # Right Hepatic Artery (RHA)
    rha_pts = [(28.5, 83.5), (24, 85), (20, 87.5), (16, 90.5)]
    ax.plot(*smooth_curve(rha_pts), **kw_branch)
    # Cystic Artery
    ax.plot(*smooth_curve([(24, 85), (23.5, 89), (22.5, 92)]), **kw_sub)
    ax.plot(*smooth_curve([(23.5, 89), (25, 91.5)]), **kw_micro)
    # Anterior sectoral (Seg V/VIII) and Posterior sectoral (Seg VI/VII)
    ax.plot(*smooth_curve([(20, 87.5), (20, 92), (19.5, 95.5)]), **kw_sub)
    ax.plot(*smooth_curve([(16, 90.5), (13, 93), (10, 94.5)]), **kw_sub)
    ax.plot(*smooth_curve([(16, 90.5), (13.5, 88), (11, 85.5)]), **kw_sub)

    # 2) Gastroduodenal Artery (GDA - descends behind first part of duodenum)
    gda_pts = [(34, 71.8), (34.8, 66), (35, 60), (34.5, 54), (33.5, 48)]
    ax.plot(*smooth_curve(gda_pts), **kw_branch)
    # Supraduodenal branch
    ax.plot(*smooth_curve([(34.8, 66), (38, 66.5)]), **kw_micro)
    # Posterior Superior Pancreaticoduodenal Artery (PSPDA)
    ax.plot(*smooth_curve([(35, 62), (37.5, 58), (39, 53), (39, 48)]), **kw_micro)

    # Terminal division of GDA at (33.5, 48):
    # - Right Gastroepiploic Artery (courses along greater curvature towards left)
    r_gep_pts = [(33.5, 48), (38, 46), (44, 45), (51, 45.5), (58, 47), (65, 50)]
    ax.plot(*smooth_curve(r_gep_pts), **kw_sub)
    # - Anterior Superior Pancreaticoduodenal Artery (ASPDA)
    aspda_pts = [(33.5, 48), (32.5, 43), (32, 38), (32.8, 34)]
    ax.plot(*smooth_curve(aspda_pts), **kw_sub)

    # 3. Bilateral Renal Arteries (arterial landmarks)
    # Right Renal Artery
    ax.plot(*smooth_curve([(47.2, 64), (40, 63.5), (33, 62.5), (26, 61)]), **kw_branch)
    ax.plot(*smooth_curve([(33, 62.5), (31, 65), (28, 67)]), **kw_sub)
    ax.plot(*smooth_curve([(30, 62), (27, 59), (25, 57)]), **kw_sub)
    # Left Renal Artery
    ax.plot(*smooth_curve([(52.8, 63.5), (60, 63), (67, 62), (74, 60.5)]), **kw_branch)
    ax.plot(*smooth_curve([(67, 62), (69, 64.5), (72, 66.5)]), **kw_sub)
    ax.plot(*smooth_curve([(64, 62.5), (67, 59), (70, 56.5)]), **kw_sub)

    # 4. Superior Mesenteric Artery (SMA - Originates from anterior aorta at ~y=66)
    sma_pts = [
        (50, 66), (49.5, 62), (48.8, 55), (47.5, 46), 
        (45.5, 37), (43, 29), (40, 22), (36, 17)
    ]
    ax.plot(*smooth_curve(sma_pts), **kw_main)

    # Inferior Pancreaticoduodenal Artery (IPDA - anastomoses with ASPDA / PSPDA arcades)
    ax.plot(*smooth_curve([(49.5, 62), (44, 58), (38, 52), (35, 46), (32.8, 34)]), **kw_sub)
    # Communicating arcade loops between IPDA and SPDA
    ax.plot(*smooth_curve([(39, 48), (36, 42), (32.8, 34)]), **kw_micro)

    # Middle Colic Artery (MCA)
    mca_pts = [(48.8, 55), (46, 59), (42, 63), (38, 66.5), (34, 69)]
    ax.plot(*smooth_curve(mca_pts), **kw_branch)
    ax.plot(*smooth_curve([(38, 66.5), (41, 70), (43, 73)]), **kw_sub)
    ax.plot(*smooth_curve([(38, 66.5), (34, 67), (30, 66)]), **kw_sub)

    # Right Colic Artery (RCA)
    rca_pts = [(47.5, 46), (41, 46.5), (34, 47), (28, 48)]
    ax.plot(*smooth_curve(rca_pts), **kw_branch)
    ax.plot(*smooth_curve([(34, 47), (32, 51), (30, 55)]), **kw_sub)
    ax.plot(*smooth_curve([(34, 47), (31, 43), (29, 39)]), **kw_sub)

    # Ileocolic Artery (ICA)
    ica_pts = [(45.5, 37), (38, 34), (32, 29), (25, 24)]
    ax.plot(*smooth_curve(ica_pts), **kw_branch)
    ax.plot(*smooth_curve([(32, 29), (30, 24), (29, 19)]), **kw_sub) # Appendicular branch
    ax.plot(*smooth_curve([(32, 29), (28, 33), (25, 36)]), **kw_sub) # Colic branch

    # Intestinal (Jejunal & Ileal) arcade branches - looping to anatomical left (viewer's right)
    arcades = [
        [(49.2, 57), (53, 54), (58, 51), (63, 48)],
        [(48.2, 50), (52, 47), (57, 44), (62, 41)],
        [(46.8, 42), (51, 39), (56, 36), (61, 33)],
        [(44.5, 34), (49, 31), (54, 28), (59, 25)],
        [(41.8, 26), (46, 23), (51, 20), (56, 17)],
    ]
    for arc in arcades:
        ax.plot(*smooth_curve(arc), **kw_branch)
        # Primary arcade anastomosis
        pt_end = arc[-1]
        ax.plot(*smooth_curve([pt_end, (pt_end[0] + 3, pt_end[1] + 1.8), (pt_end[0] + 5, pt_end[1] + 3)]), **kw_sub)
        ax.plot(*smooth_curve([pt_end, (pt_end[0] + 3, pt_end[1] - 1.8), (pt_end[0] + 5, pt_end[1] - 3)]), **kw_sub)
        # Terminal straight vasa recta
        ax.plot(*smooth_curve([(pt_end[0] + 5, pt_end[1] + 3), (pt_end[0] + 8, pt_end[1] + 3.8)]), **kw_micro)
        ax.plot(*smooth_curve([(pt_end[0] + 5, pt_end[1] - 3), (pt_end[0] + 8, pt_end[1] - 3.8)]), **kw_micro)

    # Arcade interconnecting loops
    ax.plot(*smooth_curve([(63, 48), (64.5, 44.5), (62, 41)]), **kw_micro)
    ax.plot(*smooth_curve([(62, 41), (63.5, 37), (61, 33)]), **kw_micro)
    ax.plot(*smooth_curve([(61, 33), (62.5, 29), (59, 25)]), **kw_micro)
    ax.plot(*smooth_curve([(59, 25), (60.5, 21), (56, 17)]), **kw_micro)

    # Frame bounds with clean margins
    ax.set_xlim(5, 100)
    ax.set_ylim(0, 98)

    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    plt.tight_layout(pad=0.2)
    plt.savefig(output_path, dpi=300, facecolor='white', edgecolor='none', bbox_inches='tight')
    plt.close()
    print(f"High-definition visceral arterial line diagram generated at {output_path}")

if __name__ == "__main__":
    generate_visceral_arterial_tree()
