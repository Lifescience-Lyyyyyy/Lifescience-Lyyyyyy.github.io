---
layout: post
title: "Introduction to Biochemistry"
date: 2023-09-12
permalink: /notes/biochemistry/introduction/
description: "The chemical logic of living systems, energy flow, information flow, and the organization of metabolism."
tags: [biochemistry, foundations, metabolism]
categories: [course-notes]
course: Biochemistry
part: "I. Molecular Foundations"
chapter: 1
related_posts: false
---

[Biochemistry]({{ '/notes/biochemistry/' | relative_url }}) / Chapter 1

> These notes were translated and reorganized from my annotated course pages. Terminology has been standardized, and the original visual summary is retained below.

## The chemical unity of life

Biochemistry asks how a limited set of atoms and chemical principles can produce the diversity of living systems. Carbon is central because it forms stable covalent bonds with itself and with hydrogen, oxygen, nitrogen, phosphorus, and sulfur. Those atoms generate a compact molecular vocabulary:

- amino acids form proteins;
- nucleotides form DNA and RNA;
- monosaccharides form oligo- and polysaccharides;
- fatty acids and other hydrophobic molecules form storage lipids and membranes.

The molecules differ across organisms, but their chemical logic is highly conserved. ATP couples energy-releasing reactions to energy-requiring processes; NADH and FADH2 carry electrons in catabolism; NADPH provides reducing power for biosynthesis; and coenzyme A transfers activated acyl groups.

## Structure determines function

Biological function depends on molecular shape and dynamics rather than composition alone. A protein sequence specifies a folding landscape; a folded surface creates binding sites and catalytic environments. A phospholipid's polar head and nonpolar tails drive bilayer formation. Complementary hydrogen-bond donors and acceptors allow nucleic acids to store and copy information.

Most molecular recognition is noncovalent. Hydrogen bonds, ionic interactions, van der Waals forces, and the hydrophobic effect are individually modest but collectively selective and strong. Reversibility is useful: ligands can bind and dissociate, enzymes can release products, and regulatory assemblies can respond to changing conditions.

## Energy, entropy, and coupling

At constant temperature and pressure, a process is thermodynamically favorable when

$$
\Delta G=\Delta H-T\Delta S<0.
$$

This criterion says nothing about rate. A reaction can have negative $\Delta G$ yet proceed imperceptibly slowly because it faces a large activation barrier. Enzymes accelerate reactions by lowering that barrier; they do not change the equilibrium constant or the overall free-energy difference.

Cells often drive an unfavorable reaction by coupling it to a favorable one. If reactions are added, their free-energy changes add:

$$
\Delta G_{\mathrm{coupled}}=\Delta G_1+\Delta G_2.
$$

ATP hydrolysis is a common coupling reaction, but concentration ratios matter. The cellular free energy is

$$
\Delta G=\Delta G^{\circ\prime}+RT\ln Q,
$$

so pathway direction depends on both standard chemistry and the current metabolic state.

## Information flow and regulation

DNA stores hereditary information, RNA provides several informational and catalytic intermediates, and proteins perform most structural and catalytic work. This is not a one-way machine: metabolites and signaling molecules alter transcription, translation, protein modification, localization, and degradation.

Metabolic regulation occurs on several timescales:

1. substrate availability and product removal act immediately;
2. allosteric ligands change enzyme activity within seconds;
3. reversible covalent modification coordinates pathways over seconds to minutes;
4. altered gene expression changes pathway capacity over minutes to hours;
5. tissue specialization and hormonal communication coordinate the whole organism.

## Catabolism and anabolism

Catabolism converts nutrient molecules into smaller products while conserving part of the released energy as ATP and reduced cofactors. Anabolism uses ATP and reducing power to construct cellular components. The two are connected but not simple reversals: opposing pathways use different enzymes at strongly favorable steps, occupy different compartments, and respond reciprocally to regulation.

The course follows this logic from molecular building blocks to proteins and enzymes, then through central metabolism, lipid and amino-acid pathways, oxidative phosphorylation, biosynthesis, and whole-body integration.

## Illustrated reference

{% include biochemistry-gallery.liquid slug="introduction" title="Introduction to Biochemistry" %}

## Takeaways

- Living systems reuse a small set of molecular building blocks, cofactors, and reaction types.
- Thermodynamic favorability, kinetic accessibility, and regulation are distinct questions.
- Structure and noncovalent interactions connect molecular composition to biological function.
- Catabolism and anabolism are coordinated networks rather than isolated reaction lists.
