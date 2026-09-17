---
layout: post
title: "Enzyme Mechanisms and Regulation"
date: 2023-10-27
permalink: /notes/biochemistry/enzyme-mechanisms-regulation/
description: "Transition-state stabilization, catalytic strategies, specificity, cofactors, and multiple layers of enzyme regulation."
tags: [biochemistry, enzymes, catalysis, regulation]
categories: [course-notes]
course: Biochemistry
part: "II. Protein Function and Enzymes"
chapter: 8
related_posts: false
---

[Biochemistry]({{ '/notes/biochemistry/' | relative_url }}) / Chapter 8

## What an enzyme changes

For a reaction $S\rightleftharpoons P$, an enzyme lowers the activation free energy $\Delta G^\ddagger$ for both directions. It does not change $\Delta G$, the equilibrium constant, or the final equilibrium composition. Transition-state theory relates rate to the barrier:

$$
k\approx\frac{k_BT}{h}e^{-\Delta G^\ddagger/(RT)}.
$$

Even a modest decrease in $\Delta G^\ddagger$ can therefore produce a large rate enhancement.

## Binding energy and transition-state complementarity

An active site positions substrates, excludes or organizes water, changes local electrostatics, and stabilizes the transition state. The strongest complementarity should be to the transition state rather than the ground-state substrate. If an enzyme bound the substrate too tightly without stabilizing the transition state, it would deepen the starting well and could slow catalysis.

Binding energy pays for entropy loss, substrate distortion, desolvation, and precise alignment of catalytic groups. Induced fit and conformational selection are compatible descriptions: enzymes populate ensembles, and ligand binding shifts those populations while further rearrangement can follow.

## General catalytic strategies

### Acid-base catalysis

Side chains donate or accept protons. Histidine is common because its protonation can change near physiological pH, but Asp, Glu, Lys, Tyr, Cys, and bound water also participate. Proton relays can move charge across several residues.

### Covalent catalysis

An enzyme forms a transient covalent bond with the substrate, creating an alternative pathway. Serine, cysteine, lysine, and cofactors such as pyridoxal phosphate can act as nucleophiles. The intermediate must be easier to form and break than the uncatalyzed transition state.

### Metal-ion catalysis

Metals can orient substrates, stabilize charge, activate water, or participate in redox chemistry. Zinc in carbonic anhydrase lowers the $pK_a$ of bound water, generating a hydroxide nucleophile. Iron, copper, manganese, and molybdenum frequently support electron transfer.

### Proximity and orientation

Bringing reacting groups together at the correct angle reduces the entropic cost of productive collision. Active sites also destabilize unproductive conformations and can shield reactive intermediates from solvent.

## Cofactors and coenzymes

Apoenzyme plus required cofactor forms the active holoenzyme. Metal ions are inorganic cofactors; coenzymes are organic. Tightly bound prosthetic groups remain associated through many cycles, whereas cosubstrates bind and leave. Many vitamins are precursors of coenzymes, explaining why small dietary molecules can be essential for broad classes of reactions.

## Specificity and catalytic networks

Specificity is rarely based on a single contact. Multiple weak interactions recognize size, stereochemistry, charge, hydrogen-bond pattern, and induced conformation. Catalytic residues function as a network whose apparent $pK_a$ values can differ greatly from those of free amino acids because the protein microenvironment changes solvation and electrostatics.

## Regulation

Enzymes are regulated by:

- substrate and product concentrations;
- competitive or allosteric ligands;
- reversible phosphorylation, acetylation, or other modifications;
- proteolytic activation of zymogens;
- association with regulatory subunits;
- compartmentation and controlled transport;
- changes in synthesis and degradation.

Allosteric enzymes often contain multiple subunits or domains. Ligand binding shifts the population between conformations with different activity. Feedback inhibition allows a pathway product to reduce flux through an early committed step, conserving resources while avoiding interference with shared upstream reactions.

## Illustrated reference

{% include biochemistry-gallery.liquid slug="enzyme-mechanisms-regulation" title="Enzyme Mechanisms and Regulation" %}

## Takeaways

- Enzymes accelerate approach to equilibrium by stabilizing transition states.
- Binding energy enables orientation, desolvation, distortion, and electrostatic catalysis.
- Acid-base, covalent, metal-ion, and proximity effects frequently cooperate.
- Regulation controls enzyme activity across timescales from milliseconds to hours.
