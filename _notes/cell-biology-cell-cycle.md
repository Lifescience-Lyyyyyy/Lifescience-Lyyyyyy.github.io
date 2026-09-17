---
layout: post
title: "The Cell Cycle"
date: 2024-05-07
permalink: /notes/cell-biology/cell-cycle/
description: "Cyclin–CDK control, DNA replication, mitosis, checkpoints, cytokinesis, and extracellular control of proliferation."
tags: [cell-biology, cell-cycle, mitosis, checkpoints]
categories: [course-notes]
course: Cell Biology
part: "III. Information, Signaling, and Cell Fate"
chapter: 13
related_posts: false
---

[Cell Biology]({{ '/notes/cell-biology/' | relative_url }}) / Chapter 13

## A one-way control system

The cell cycle orders DNA replication and chromosome segregation so that each event occurs once. Genetic studies identified the core logic: Hartwell's _cdc_ mutants revealed Start control in budding yeast, Nurse's _cdc2_ defined a central mitotic kinase, and Hunt discovered cyclins whose abundance oscillates.

Cyclin-dependent kinases are present relatively continuously, but cyclin synthesis and destruction create waves of activity. CDK-activating and inhibitory phosphorylation, CDK inhibitors, localization, and substrate availability refine those waves. Positive feedback turns gradual input into switch-like entry into S phase or mitosis.

## Proteolysis makes transitions irreversible

SCF ubiquitin ligases recognize phosphorylated substrates and help remove inhibitors of S-CDK. APC/C associates first with Cdc20 and later with Cdh1. At metaphase, APC/C–Cdc20 destroys securin, releasing separase to cleave cohesin and initiate sister-chromatid separation. APC/C also destroys mitotic cyclins, driving mitotic exit. Because destroyed proteins must be resynthesized, proteolysis gives direction to the cycle.

## Replication and cohesion

Replication origins are licensed in G1 by loading inactive helicase complexes. S-CDK and other kinases activate licensed origins while preventing new licensing, ensuring one replication round per cycle. Cohesin rings hold newly replicated sisters together until anaphase. DNA damage or incomplete replication delays later transitions through checkpoint signaling.

## Building and checking the spindle

M-CDK promotes chromosome condensation, nuclear-envelope breakdown, and spindle assembly. Condensin reorganizes replicated chromosomes. Centrosomes nucleate astral and spindle microtubules; kinesins and dynein slide and focus them. Kinetochores capture microtubule plus ends.

Correct bi-orientation places sister kinetochores under opposing tension. Unattached kinetochores recruit Mad and Bub proteins that inhibit Cdc20. The spindle-assembly checkpoint is satisfied only when every chromosome has a stable bipolar attachment. Anaphase A moves chromosomes toward poles through kinetochore-microtubule shortening; anaphase B separates poles through interpolar sliding, elongation, and cortical pulling.

## Cytokinesis and extracellular control

Signals from the spindle activate RhoA at the equatorial cortex. Formins, actin, and myosin II assemble a contractile ring that ingresses into a midbody, followed by abscission. Spatial cues ensure cleavage occurs between the separated genomes.

Mitogens stimulate division, growth factors increase biosynthesis, and survival factors suppress programmed death. Ras–MAPK signaling increases Myc and cyclin expression. G1-CDK phosphorylates Rb, releasing E2F to activate S-phase genes; further CDK activity creates positive feedback. Anti-mitogenic signals, nutrient limitation, contact, DNA damage, and differentiation counter this drive.

## Illustrated reference

{% include cell-biology-gallery.liquid slug="cell-cycle" title="The Cell Cycle" %}

## Takeaways

- Cyclin–CDK waves order cell-cycle events.
- Ubiquitin-dependent destruction makes key transitions effectively irreversible.
- Origin licensing prevents DNA rereplication, while checkpoints prevent premature segregation.
- The spindle checkpoint monitors attachment, not elapsed time.
