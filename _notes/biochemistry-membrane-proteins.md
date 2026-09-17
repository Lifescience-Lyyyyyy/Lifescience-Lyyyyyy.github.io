---
layout: post
title: "Protein Function: Membrane Proteins and Transport"
date: 2023-10-24
permalink: /notes/biochemistry/membrane-proteins/
description: "Membrane-protein architecture, electrochemical gradients, channels, carriers, pumps, and receptor signaling."
tags: [biochemistry, membranes, transport, receptors]
categories: [course-notes]
course: Biochemistry
part: "II. Protein Function and Enzymes"
chapter: 7
related_posts: false
---

[Biochemistry]({{ '/notes/biochemistry/' | relative_url }}) / Chapter 7

## How proteins associate with membranes

Integral membrane proteins insert hydrophobic surfaces into the bilayer. Alpha-helical bundles are common; beta barrels occur in bacterial outer membranes and in mitochondrial and chloroplast outer membranes. Peripheral proteins bind membrane surfaces or other proteins, while lipid-anchored proteins are covalently attached to fatty acyl, prenyl, or glycosylphosphatidylinositol groups.

Hydropathy plots help identify long hydrophobic segments, but topology requires experimental evidence. Positive-inside rules, signal peptides, glycosylation sites, protease accessibility, and structural methods distinguish orientation and membrane-spanning architecture.

## Electrochemical potential

Moving an ion of charge $z$ across a membrane changes free energy by

$$
\Delta G=RT\ln\frac{C_2}{C_1}+zF(\psi_2-\psi_1).
$$

The first term is chemical; the second is electrical. Transport is passive when it follows the combined electrochemical gradient and active when it moves against that gradient using another energy source.

## Channels and carriers

Channels form selective pores and can move ions rapidly down electrochemical gradients. Selectivity filters discriminate by size, charge, and dehydration energetics. Gates respond to voltage, ligands, mechanical stress, phosphorylation, or other signals.

Carriers alternate access between two sides of the membrane. They bind solute, undergo a conformational change, and release it. Because each cycle requires binding and rearrangement, carrier transport is saturable and slower than open-channel conduction.

- Uniport moves one solute.
- Symport couples two solutes in the same direction.
- Antiport exchanges solutes in opposite directions.

Facilitated diffusion uses a channel or carrier but does not directly consume energy.

## Primary and secondary active transport

Primary pumps couple uphill transport directly to ATP hydrolysis, light, or redox chemistry. The Na+/K+-ATPase exports three sodium ions and imports two potassium ions per ATP, maintaining gradients used for membrane potential, osmotic balance, nutrient uptake, and electrical signaling.

Secondary transport uses the stored energy of an ion gradient. The intestinal sodium-glucose symporter brings glucose into epithelial cells by coupling it to sodium entry. A basolateral Na+/K+-ATPase restores the sodium gradient, while a glucose uniporter allows glucose to leave toward blood.

The gastric H+/K+-ATPase, Ca2+-ATPases, vacuolar proton pumps, and ATP-binding cassette transporters illustrate distinct pump families. ABC proteins contain conserved nucleotide-binding domains coupled to diverse membrane domains; some export drugs or lipids, while CFTR functions as an ATP-regulated chloride channel.

## Transport kinetics and physiological coupling

Carrier flux often follows a saturation curve resembling enzyme kinetics:

$$
v=\frac{V_{\max}[S]}{K_T+[S]}.
$$

This does not mean every transporter uses the Michaelis-Menten mechanism, but it reflects finite binding sites and cycle rates. In epithelia, polarized placement of transporters creates directional flux across a tissue. A gradient established at one membrane surface can drive uptake at another.

## Receptors as membrane information processors

Membrane proteins also convert extracellular signals into intracellular changes. G-protein-coupled receptors activate heterotrimeric G proteins by promoting GDP-GTP exchange. Receptor tyrosine kinases dimerize or rearrange, phosphorylate cytosolic sites, and recruit signaling proteins. Ligand-gated channels convert binding directly into ion flow.

Signal termination is as important as activation: GTP hydrolysis, phosphatases, second-messenger degradation, receptor desensitization, endocytosis, and recycling prevent indefinite responses.

## Illustrated reference

{% include biochemistry-gallery.liquid slug="membrane-proteins" title="Protein Function: Membrane Proteins and Transport" %}

## Takeaways

- Membrane-protein topology follows from the energetic contrast between bilayer core and aqueous surfaces.
- Ion transport depends on both concentration and electrical potential.
- Pumps create gradients; channels and coupled carriers exploit them.
- Receptors use conformational changes to transmit information without transporting the ligand itself.
