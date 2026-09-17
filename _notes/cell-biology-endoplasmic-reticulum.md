---
layout: post
title: "The Endoplasmic Reticulum"
date: 2024-04-08
permalink: /notes/cell-biology/endoplasmic-reticulum/
description: "ER translocation, membrane-protein topology, glycosylation, folding quality control, the unfolded-protein response, and lipid synthesis."
tags: [cell-biology, endoplasmic-reticulum, protein-folding, glycosylation]
categories: [course-notes]
course: Cell Biology
part: "II. Cellular Architecture and Transport"
chapter: 8
related_posts: false
---

[Cell Biology]({{ '/notes/cell-biology/' | relative_url }}) / Chapter 8

## One network, specialized regions

The ER is a continuous membrane system. Rough sheets carry ribosomes and produce secreted, luminal, and many membrane proteins. Smooth tubules synthesize lipids, detoxify compounds, and store calcium. Transitional ER generates carriers bound for the Golgi. In muscle, the sarcoplasmic reticulum specializes in rapid calcium release and uptake.

## Cotranslational translocation

An N-terminal ER signal peptide emerges from a ribosome and binds the signal-recognition particle. SRP pauses elongation long enough to dock the ribosome–nascent-chain complex at the SRP receptor. The ribosome then engages the Sec61 channel, translation resumes, and the growing chain passes into the ER lumen. Signal peptidase may cleave the targeting sequence.

Some proteins enter after translation with chaperone assistance. In both cases, the translocator must move a polar polymer across the bilayer without allowing uncontrolled ion leakage.

## Membrane-protein topology

A hydrophobic start-transfer sequence opens Sec61 and can remain as a transmembrane helix. A stop-transfer segment halts transfer and exits laterally into the bilayer. Repeated start- and stop-transfer signals generate multipass proteins. Orientation follows the positive-inside tendency: the side of a signal anchor flanked by more positive residues usually remains cytosolic. Tail-anchored proteins, whose C-terminal membrane helix emerges only after translation, use a separate guided-entry pathway.

Because membrane orientation is preserved through vesicular traffic, domains facing the ER lumen will later face the Golgi lumen, vesicle lumen, or extracellular space.

## Glycosylation and folding quality control

Oligosaccharyl transferase attaches a preassembled oligosaccharide to suitable asparagine residues as the chain enters the lumen. Sequential glucose removal creates a folding code. Calnexin and calreticulin retain incompletely folded glycoproteins; reglucosylation gives them another cycle. Disulfide-isomerase and other chaperones promote correct structure.

Persistently misfolded proteins are retrotranslocated, ubiquitylated, and destroyed by cytosolic proteasomes through ER-associated degradation. If the burden exceeds capacity, IRE1, PERK, and ATF6 activate the unfolded-protein response. Together they reduce new protein entry, increase chaperone and degradation capacity, and—if stress cannot be resolved—can promote cell death.

## Lipids and membrane anchors

Most phospholipids are synthesized on the cytosolic ER leaflet and redistributed between leaflets. Ceramide and cholesterol pathways begin or proceed in the ER before products are modified elsewhere. Some luminal protein domains receive a glycosylphosphatidylinositol anchor, replacing a transmembrane segment and targeting the protein to the noncytosolic leaflet.

## Illustrated reference

{% include cell-biology-gallery.liquid slug="endoplasmic-reticulum" title="The Endoplasmic Reticulum" %}

## Takeaways

- SRP couples translation to delivery at Sec61.
- Start- and stop-transfer signals encode membrane topology.
- Glycan processing is both a modification pathway and a folding-quality-control system.
- The unfolded-protein response balances repair, reduced load, and terminal stress responses.
