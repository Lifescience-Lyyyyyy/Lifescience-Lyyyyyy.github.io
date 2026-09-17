---
layout: post
title: "Analyzing Cells, Molecules, and Systems"
date: 2024-02-27
permalink: /notes/cell-biology/analyzing-cells-molecules-systems/
description: "Protein analysis, structural biology, DNA manipulation, sequencing, genetics, and functional perturbation."
tags: [cell-biology, proteomics, genomics, genetics]
categories: [course-notes]
course: Cell Biology
part: "I. Foundations and Experimental Methods"
chapter: 3
related_posts: false
---

[Cell Biology]({{ '/notes/cell-biology/' | relative_url }}) / Chapter 3

## Resolving and identifying proteins

SDS–polyacrylamide gel electrophoresis denatures proteins, gives them an approximately uniform charge-to-mass ratio, and separates them mainly by size. A Western blot transfers the separated proteins to a membrane and detects a target with antibodies. Two-dimensional electrophoresis first separates proteins by isoelectric point and then by size, resolving species that overlap in one dimension.

Mass spectrometry measures mass-to-charge ratios. In a proteomics workflow, proteins are digested into peptides, separated by liquid chromatography, fragmented in tandem mass spectrometry, and matched to sequence databases. Quantitative designs compare peptide abundance across conditions, but interpretation depends on sample preparation, missing values, and normalization.

X-ray crystallography reconstructs electron density from diffraction by an ordered crystal and can achieve atomic resolution. Single-particle cryo-electron microscopy rapidly freezes many copies of a molecule in vitreous ice, classifies their orientations and conformations, and combines them into a three-dimensional reconstruction. Nuclear magnetic resonance and structure prediction provide complementary information, especially about dynamics or inaccessible states.

## Manipulating and measuring DNA

Restriction nucleases cut defined sequences and make reproducible fragments. Agarose gels resolve ordinary DNA fragments; polyacrylamide resolves very short differences; pulsed-field electrophoresis separates extremely long molecules. A genomic library samples an organism's complete DNA, whereas a complementary-DNA library is copied from cellular RNA and is enriched for expressed transcripts.

Polymerase chain reaction cycles through denaturation, primer annealing, and extension. Ideally, one target doubles each cycle, so after (n) cycles the amplification approaches (2^n), before reagents become limiting. Controls are essential because minute contamination is also amplified.

Short tandem repeats vary in repeat number and support identity testing. High-throughput sequencing measures millions of DNA molecules in parallel. Read depth, base quality, mapping ambiguity, and reference bias must be evaluated before biological conclusions are drawn.

## Linking genes to function

Forward genetics begins with a phenotype and searches for its causal gene. Reverse genetics perturbs a chosen gene and asks what phenotype follows. Knockout removes function; knock-in introduces a defined sequence; conditional alleles restrict the perturbation to a tissue or time. RNA interference lowers expression through small-RNA-guided silencing, but incomplete depletion and off-target effects require independent validation.

Human variation includes single-nucleotide polymorphisms, insertions or deletions, and copy-number changes. Nearby variants can form haplotype blocks because recombination is uncommon between them. Mendelian disease may be driven by one gene, while common disorders usually reflect many variants plus environment. Association does not prove mechanism: functional perturbation and rescue are needed to establish causality.

## Illustrated reference

{% include cell-biology-gallery.liquid slug="analyzing-cells-molecules-systems" title="Analyzing Cells, Molecules, and Systems" %}

## Takeaways

- Separation, identification, structure determination, and perturbation answer different questions.
- Genomic and complementary-DNA libraries represent different molecular populations.
- Forward and reverse genetics approach the genotype–phenotype relationship from opposite directions.
- Technical controls and independent validation are part of the evidence, not optional extras.
