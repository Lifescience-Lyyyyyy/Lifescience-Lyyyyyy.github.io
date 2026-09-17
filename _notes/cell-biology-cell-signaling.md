---
layout: post
title: "Cell Signaling"
date: 2024-04-18
permalink: /notes/cell-biology/cell-signaling/
description: "Signal modes, molecular switches, GPCRs, RTKs, MAPK, PI3K, JAK–STAT, TGF-β, Notch, Wnt, Hedgehog, and NF-κB."
tags: [cell-biology, cell-signaling, gpcr, receptor-kinases]
categories: [course-notes]
course: Cell Biology
part: "III. Information, Signaling, and Cell Fate"
chapter: 12
related_posts: false
---

[Cell Biology]({{ '/notes/cell-biology/' | relative_url }}) / Chapter 12

## Communication strategies

Cells communicate by endocrine, paracrine, autocrine, synaptic, contact-dependent, and gap-junction-mediated routes. Bacteria use quorum sensing to couple gene expression to population density; yeast mating factors coordinate partners. A signal's meaning depends on the receptor and internal state of the receiving cell, so the same ligand can trigger different outcomes.

Fast responses modify existing proteins by allostery, phosphorylation, ion movement, or GTP binding. Slower responses change transcription and cell identity. Scaffold proteins assemble pathway components, adaptors connect them, and docking domains such as SH2, SH3, PTB, and PH domains read phosphorylation, proline-rich motifs, or membrane lipids.

## Reversible switches

Kinases add phosphate and phosphatases remove it. Small GTPases cycle between GTP-bound active and GDP-bound inactive states: GEFs promote nucleotide exchange, GAPs accelerate hydrolysis, and GDIs can retain inactive proteins in the cytosol. Feedback, receptor internalization, inhibitory phosphorylation, and protein degradation terminate signals and set sensitivity.

## G-protein-coupled receptors

GPCRs contain seven transmembrane helices. Activated receptors act as GEFs for heterotrimeric G proteins. Gs stimulates adenylyl cyclase and cAMP production; Gi inhibits it; Gq activates phospholipase C-beta, producing diacylglycerol and IP3. IP3 releases ER calcium, while diacylglycerol and calcium activate protein kinase C. Calcium–calmodulin converts transient calcium increases into enzyme regulation.

Specialized GPCR circuits detect odors, tastes, and photons. In photoreceptors, rhodopsin activates transducin, lowering cGMP and closing channels. Receptor phosphorylation, arrestin binding, GTP hydrolysis, and calcium-dependent feedback support rapid adaptation. Cholera toxin locks Gs signaling on by preventing normal GTPase cycling.

## Enzyme-coupled receptors

Receptor tyrosine kinases dimerize or rearrange after ligand binding and phosphorylate cytosolic tails. Grb2 and Sos activate Ras; Ras recruits Raf, initiating the Raf–MEK–ERK kinase cascade. Scaffold proteins increase efficiency and limit cross-talk. PI3K converts PIP2 to PIP3, recruiting PH-domain proteins such as Akt and PDK1 to promote growth and survival. Lipid phosphatases such as PTEN reverse the signal.

Cytokine receptors recruit JAK kinases, which phosphorylate STAT transcription factors. TGF-beta-family receptors are serine/threonine kinases that activate receptor-regulated Smads and Smad4; inhibitory Smads and ubiquitin ligases restrain the pathway.

## Developmental and inflammatory pathways

- **Notch:** a membrane-bound ligand on one cell triggers receptor proteolysis in its neighbor; the intracellular domain enters the nucleus. Lateral inhibition converts small differences into distinct fates.
- **Wnt:** Wnt inhibits the beta-catenin destruction complex, allowing beta-catenin to regulate transcription.
- **Hedgehog:** ligand relieves Patched inhibition of Smoothened, altering Gli transcription factors.
- **NF-kappaB:** inflammatory inputs promote inhibitor degradation and nuclear entry; newly synthesized inhibitors create negative feedback and can generate oscillations.

Pathways converge on common effectors and diverge into multiple branches. Duration, frequency, localization, and pathway history can therefore matter as much as signal amplitude.

## Illustrated reference

{% include cell-biology-gallery.liquid slug="cell-signaling" title="Cell Signaling" %}

## Takeaways

- Receptors interpret context rather than assigning one universal meaning to a ligand.
- Phosphorylation and GTPase cycles create controllable molecular switches.
- GPCR and RTK pathways use modular second messengers and kinase cascades.
- Feedback and pathway cross-talk shape the timing, specificity, and adaptation of responses.
