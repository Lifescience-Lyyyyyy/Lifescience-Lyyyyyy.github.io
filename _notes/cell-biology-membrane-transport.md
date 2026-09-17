---
layout: post
title: "Membrane Transport"
date: 2024-03-12
permalink: /notes/cell-biology/membrane-transport/
description: "Channels, carriers, pumps, electrochemical gradients, action potentials, synaptic transmission, and patch clamp."
tags: [cell-biology, membrane-transport, ion-channels, neurons]
categories: [course-notes]
course: Cell Biology
part: "II. Cellular Architecture and Transport"
chapter: 6
related_posts: false
---

[Cell Biology]({{ '/notes/cell-biology/' | relative_url }}) / Chapter 6

## Electrochemical driving force

A protein-free bilayer is highly impermeable to ions. For an ion of charge (z), transport depends on both concentration and voltage:

$$
\Delta G = RT\ln\!\left(\frac{C_{\mathrm{in}}}{C_{\mathrm{out}}}\right)+zF\Delta\psi.
$$

Passive transport moves down this electrochemical gradient. Active transport moves uphill by coupling transport to ATP hydrolysis, light, or the downhill movement of another solute. Uniport carries one species; symport carries two in the same direction; antiport exchanges them.

## Carriers and pumps

Carriers bind solute and alternate access between the two membrane sides. Inverted structural repeats help create these alternating conformations. Major facilitator, LeuT-fold, and small multidrug-resistance transporters illustrate recurring architectures.

P-type ATPases form a phosphorylated enzyme intermediate. The sarcoplasmic-reticulum Ca2+ pump lowers cytosolic calcium after contraction. The Na+/K+ pump exports three Na+ and imports two K+ per ATP, making the cycle electrogenic and sustaining gradients used for osmotic balance and secondary transport. ATP-binding cassette transporters couple two nucleotide-binding domains to transmembrane domains and transport a wide range of substrates. V-type pumps acidify organelles; the related F-type complex usually uses a proton gradient to synthesize ATP.

Polarized epithelia place different transporters on apical and basolateral surfaces. Their vectorial arrangement converts local transport steps into net movement across the tissue.

## Ion channels and membrane voltage

Channels create selective aqueous pores and can conduct millions of ions per second. Selectivity filters compensate for dehydration of the correct ion; gating controls when the pore opens. Gates respond to voltage, ligand binding, stretch, temperature, or phosphorylation. Bacterial mechanosensitive channels open during sudden osmotic downshift, releasing solute before the cell lyses.

Potassium leak channels make the resting membrane potential negative because K+ tends to leave while impermeant intracellular anions remain. The equilibrium potential for one ion follows the Nernst equation:

$$
E_{\mathrm{ion}}=\frac{RT}{zF}\ln\!\left(\frac{[\mathrm{ion}]_{\mathrm{out}}}{[\mathrm{ion}]_{\mathrm{in}}}\right).
$$

## Excitable cells

Voltage-gated Na+ channels create the rapid action-potential upstroke and then inactivate. Delayed K+ channel opening repolarizes the membrane. Myelin reduces current leak and increases effective membrane resistance, so action potentials regenerate at nodes of Ranvier. Schwann cells myelinate peripheral axons; oligodendrocytes myelinate the central nervous system.

At a chemical synapse, depolarization opens voltage-gated Ca2+ channels. Calcium triggers synaptic-vesicle fusion, neurotransmitter crosses the cleft, and ligand-gated channels alter the postsynaptic voltage. At the neuromuscular junction, acetylcholine receptors initiate a sequence that activates the muscle action potential and calcium release.

Patch-clamp recording resolves current through individual channels. Openings are discrete, but the timing is stochastic; ensemble current reflects open probability, channel number, and single-channel conductance. In hippocampal long-term potentiation, NMDA-receptor opening permits Ca2+ entry only when glutamate binding coincides with sufficient depolarization, providing a molecular coincidence detector.

## Illustrated reference

{% include cell-biology-gallery.liquid slug="membrane-transport" title="Membrane Transport" %}

## Takeaways

- Concentration and voltage combine into an electrochemical gradient.
- Carriers alternate access; channels provide fast gated pores; pumps create nonequilibrium gradients.
- The Na+/K+ pump and K+ permeability underlie resting electrical properties.
- Action potentials and synapses convert controlled ion flow into rapid communication.
