---
layout: post
title: "Amino Acids, Peptides, and Proteins"
date: 2023-09-26
permalink: /notes/biochemistry/amino-acids-peptides-proteins/
description: "Amino-acid chemistry, ionization, peptide bonds, sequence, disulfides, and spectroscopic properties."
tags: [biochemistry, amino-acids, proteins, acid-base]
categories: [course-notes]
course: Biochemistry
part: "I. Molecular Foundations"
chapter: 3
related_posts: false
---

[Biochemistry]({{ '/notes/biochemistry/' | relative_url }}) / Chapter 3

## Common architecture and stereochemistry

The standard alpha amino acids contain an amino group, a carboxyl group, a hydrogen, and a side chain attached to the alpha carbon. Except for glycine, the alpha carbon is chiral. Proteins use almost exclusively the L configuration; this designation is relative to glyceraldehyde and does not by itself specify the sign of optical rotation.

Side-chain chemistry organizes the amino acids into useful groups:

- nonpolar aliphatic: Gly, Ala, Val, Leu, Ile, Met, Pro;
- aromatic: Phe, Tyr, Trp;
- polar uncharged: Ser, Thr, Cys, Asn, Gln;
- positively charged near physiological pH: Lys, Arg, and partly protonated His;
- negatively charged: Asp and Glu.

These classes predict, but do not rigidly determine, where residues appear in a folded protein. Nonpolar side chains are often buried, whereas charged and polar groups are often solvent exposed or used in active sites.

## Ionization and titration

Free amino acids are zwitterions near neutral pH. For a simple amino acid without an ionizable side chain, the net charge changes from $+1$ to $0$ to $-1$ as the carboxyl and amino groups deprotonate. The isoelectric point is the pH at which the average net charge is zero:

$$
pI=\frac{pK_{a1}+pK_{a2}}{2}.
$$

For acidic or basic side chains, choose the two $pK_a$ values that flank the neutral species. At any step, the Henderson-Hasselbalch equation connects pH to the ratio of protonation states. Titration curves therefore reveal both buffering regions and the net charge expected at a given pH.

Histidine is especially useful in enzymes because its imidazole group can donate or accept a proton near physiological pH. Cysteine is a nucleophile when deprotonated; tyrosine can participate in proton transfer; lysine, arginine, aspartate, and glutamate provide charged groups for binding and catalysis.

## Peptide-bond formation and geometry

Peptides link the alpha carboxyl group of one residue to the alpha amino group of the next. Sequences are written from the amino terminus to the carboxyl terminus. The peptide bond has resonance between carbonyl and C-N forms, which gives it partial double-bond character. Consequently, the peptide unit is planar and rotation occurs mainly around the neighboring $\phi$ and $\psi$ bonds.

Peptide formation is a condensation reaction in formal chemical bookkeeping, but ribosomes do not directly condense free amino acids. Amino acids are activated as aminoacyl-tRNAs using ATP, and the ribosomal peptidyl-transferase center transfers the growing chain to the incoming amino group.

## Disulfides and post-translational chemistry

Two cysteine thiols can be oxidized to a disulfide:

$$
2\mathrm{RSH}\rightleftharpoons\mathrm{RSSR}+2\mathrm{H^+}+2e^-.
$$

Disulfides are favored in oxidizing extracellular compartments and help stabilize secreted proteins. The cytosol is reducing, so cytosolic disulfides are less common. Proteins also acquire phosphorylation, acetylation, glycosylation, lipidation, hydroxylation, methylation, and many other modifications that change activity, localization, lifetime, or interactions.

## Sequence and analytical principles

Protein primary structure is the covalent sequence plus the positions of covalent cross-links. Sequence determines the available folding landscape, but the cellular environment, chaperones, processing, and modifications influence the final functional state.

Aromatic residues absorb ultraviolet light. Tryptophan contributes most strongly near 280 nm, tyrosine less strongly, and phenylalanine weakly. This permits a rapid estimate of protein concentration when the extinction coefficient is known:

$$
A=\varepsilon c\ell.
$$

Electrophoresis separates molecules by charge and size; chromatography separates by charge, hydrophobicity, size, or specific affinity; and mass spectrometry measures peptide masses and fragmentation patterns.

## Illustrated reference

{% include biochemistry-gallery.liquid slug="amino-acids-peptides-proteins" title="Amino Acids, Peptides, and Proteins" %}

## Takeaways

- Side-chain chemistry determines the interaction repertoire of each residue.
- Protonation state depends on pH and local environment, not on a fixed charge label.
- Peptide-bond resonance constrains backbone geometry.
- Sequence, covalent modification, and cellular context jointly determine protein function.
