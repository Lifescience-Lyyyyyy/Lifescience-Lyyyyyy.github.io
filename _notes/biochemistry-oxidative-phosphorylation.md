---
layout: post
title: "Oxidative Phosphorylation"
date: 2023-12-08
permalink: /notes/biochemistry/oxidative-phosphorylation/
description: "Electron-transfer complexes, proton-motive force, ATP synthase, transport shuttles, inhibitors, uncoupling, and reactive oxygen species."
tags: [biochemistry, mitochondria, electron-transport, atp-synthase]
categories: [course-notes]
course: Biochemistry
part: "IV. Central and Oxidative Metabolism"
chapter: 20
related_posts: false
---

[Biochemistry]({{ '/notes/biochemistry/' | relative_url }}) / Chapter 20

## Redox energy and the respiratory chain

Mitochondrial respiration transfers electrons from NADH or FAD-linked substrates to oxygen. The favorable redox span is converted into a proton gradient across the inner membrane. The standard free energy of electron transfer is

$$
\Delta G^{\circ\prime}=-nF\Delta E^{\circ\prime}.
$$

Electrons flow toward carriers with more positive reduction potentials, but protein environments tune those potentials and couple transfer to conformational changes.

## Complexes and mobile carriers

**Complex I** accepts a hydride from NADH at FMN, passes single electrons through iron-sulfur centers to ubiquinone, and pumps protons. **Complex II**, succinate dehydrogenase, transfers electrons from succinate through FAD and iron-sulfur centers to ubiquinone but does not pump protons.

Ubiquinone is lipid soluble and carries two electrons plus two protons within the membrane. **Complex III** uses the Q cycle to transfer electrons one at a time to cytochrome c while moving protons across the membrane. Cytochrome c is a soluble intermembrane-space protein carrying one electron. **Complex IV** transfers four electrons to oxygen, producing water, and pumps protons.

Approximate proton pumping is 4 H+ at Complex I, 4 H+ at Complex III, and 2 H+ at Complex IV per two electrons. Electrons entering through Complex II bypass the first pumping site and therefore yield less ATP.

## Proton-motive force

The electrochemical potential for protons combines membrane voltage and pH difference:

$$
\Delta p=\Delta\psi-\frac{2.303RT}{F}\Delta\mathrm{pH}.
$$

The inner membrane is highly impermeable to ions, allowing respiration to store free energy as a proton-motive force. Proton return can drive ATP synthesis, metabolite transport, heat generation, and other work.

## ATP synthase mechanism

F0 forms the membrane rotor and proton pathway; F1 contains catalytic nucleotide-binding sites. Protonation and deprotonation of c-ring subunits rotate the ring and central gamma shaft. Rotation forces the three beta subunits through loose, tight, and open conformations. The tight state forms ATP; energy is used mainly to change affinity and release ATP.

One full gamma rotation produces three ATP. The proton cost depends on c-ring size, and additional proton-motive force is used for phosphate import and ATP/ADP exchange. Common estimates give about 2.5 ATP per matrix NADH and 1.5 ATP per FAD-linked electron pair.

## Cytosolic NADH shuttles

The inner membrane lacks an NADH transporter. The malate-aspartate shuttle transfers reducing equivalents to matrix NADH and preserves the larger yield. The glycerol 3-phosphate shuttle transfers them to a flavin and then ubiquinone, bypassing Complex I and yielding less ATP. Tissue-specific expression determines which route dominates.

## Inhibitors and uncouplers

Rotenone and related inhibitors block Complex I; antimycin A blocks Complex III; cyanide and carbon monoxide inhibit Complex IV; oligomycin blocks ATP synthase proton flow. Blocking the chain stops both electron transfer and ATP synthesis once gradients accumulate.

Uncouplers carry protons across the membrane, allowing electron transfer to continue while ATP synthesis falls and energy becomes heat. UCP1 in brown adipose tissue is a regulated physiological uncoupler. Chemical protonophores can collapse gradients dangerously.

## Reactive oxygen species

Electron leakage, especially from highly reduced carriers, can partially reduce oxygen to superoxide. Superoxide dismutase forms hydrogen peroxide; catalase and glutathione peroxidase remove peroxide. Reactive oxygen species can damage lipids, proteins, and DNA but also function in signaling. Risk rises when electron input is high while downstream flow is restricted.

## Illustrated reference

{% include biochemistry-gallery.liquid slug="oxidative-phosphorylation" title="Oxidative Phosphorylation" %}

## Takeaways

- Respiratory complexes convert redox energy into a transmembrane proton-motive force.
- Ubiquinone carries two electrons; cytochrome c carries one.
- ATP synthase is a rotary machine whose stoichiometry depends on both rotor size and transport costs.
- Inhibition blocks electron flow, whereas uncoupling permits flow but dissipates the gradient as heat.
