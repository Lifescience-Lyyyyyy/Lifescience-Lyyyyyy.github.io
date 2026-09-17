---
layout: post
title: "Intracellular Compartments and Protein Sorting"
date: 2024-03-19
permalink: /notes/cell-biology/intracellular-compartments-protein-sorting/
description: "Organelle topology and protein targeting to the nucleus, mitochondria, chloroplasts, and peroxisomes."
tags: [cell-biology, organelles, protein-sorting, nuclear-transport]
categories: [course-notes]
course: Cell Biology
part: "II. Cellular Architecture and Transport"
chapter: 7
related_posts: false
---

[Cell Biology]({{ '/notes/cell-biology/' | relative_url }}) / Chapter 7

## Compartment identity and transport routes

Eukaryotic organelles create chemically distinct environments while remaining coordinated. The cytosol and nucleus communicate through gated nuclear pores. Proteins cross mitochondrial, chloroplast, peroxisomal, or endoplasmic-reticulum membranes through protein translocators. Vesicles transfer cargo between topologically equivalent compartments of the endomembrane system.

A sorting signal is recognized by a receptor that delivers its cargo to the appropriate translocation machinery. Signals may be removable N-terminal peptides, internal surface patches, transmembrane segments, or short C-terminal motifs. A protein without an active targeting signal generally remains in the cytosol. Organelle inheritance also matters: many compartments enlarge and divide from pre-existing organelles rather than being assembled without a template.

## Nuclear transport

The nuclear envelope consists of inner and outer membranes; the outer membrane is continuous with the ER. Nuclear pore complexes are enormous assemblies of about thirty nucleoporin types arranged with eightfold symmetry. Small molecules diffuse, whereas large macromolecules require selective transport receptors.

Importins recognize basic nuclear-localization signals and interact transiently with phenylalanine-glycine-rich nucleoporins. Directionality comes from Ran, not from a one-way pore. Ran-GTP is enriched in the nucleus and Ran-GDP in the cytosol. Ran-GTP releases imported cargo in the nucleus; after export, GTP hydrolysis releases export cargo in the cytosol. Proteins can shuttle repeatedly because localization signals are usually not cleaved.

## Mitochondrial and chloroplast import

Most mitochondrial proteins are encoded in the nucleus and synthesized on free ribosomes. An amphipathic N-terminal presequence is recognized by the TOM complex. Matrix proteins pass through TOM and TIM23 while maintained in an unfolded state by cytosolic chaperones. Membrane potential across the inner membrane helps pull the positively charged signal inward, and ATP-driven mitochondrial Hsp70 completes import.

Other routes sort beta barrels to the outer membrane through SAM, multipass carriers through TIM22, and mitochondrially encoded or selected imported proteins through OXA into the inner membrane. Chloroplasts use related TOC and TIC translocators, followed by additional targeting to thylakoids when required. These bacterial-like systems support the endosymbiotic origin of both organelles.

## Peroxisomes

Peroxisomes oxidize very-long-chain fatty acids, detoxify hydrogen peroxide through catalase, and synthesize plasmalogens important in myelin. A common targeting signal is the C-terminal tripeptide Ser-Lys-Leu. Unlike mitochondrial import, peroxisomal receptors can carry fully folded and even oligomeric proteins across the membrane and then recycle.

Peroxisomes grow and divide, while membrane components can also arise from the ER. Defective peroxisome assembly or transport causes severe neurological disease. In X-linked adrenoleukodystrophy, impaired very-long-chain-fatty-acid handling damages myelin.

## Illustrated reference

{% include cell-biology-gallery.liquid slug="intracellular-compartments-protein-sorting" title="Intracellular Compartments and Protein Sorting" %}

## Takeaways

- Sorting signals are molecular addresses interpreted by receptors and translocators.
- Ran-GTP asymmetry gives nuclear transport directionality.
- Mitochondrial and chloroplast import preserves signatures of bacterial ancestry.
- Peroxisomes import folded proteins and are central to lipid metabolism and redox control.
