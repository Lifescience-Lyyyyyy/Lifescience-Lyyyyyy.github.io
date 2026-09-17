---
layout: post
title: "Principles of Metabolism"
date: 2023-11-14
permalink: /notes/biochemistry/metabolism-principles/
description: "Free energy, ATP, phosphoryl transfer, redox cofactors, pathway organization, and metabolic control."
tags: [biochemistry, metabolism, bioenergetics, cofactors]
categories: [course-notes]
course: Biochemistry
part: "IV. Central and Oxidative Metabolism"
chapter: 13
related_posts: false
---

[Biochemistry]({{ '/notes/biochemistry/' | relative_url }}) / Chapter 13

## Pathways as organized chemical systems

Metabolism is a network, but pathways remain useful because they identify functional sequences, committed steps, compartments, and control points. Catabolic pathways are often convergent: many nutrients become acetyl-CoA and reducing equivalents. Anabolic pathways are often divergent: a smaller set of precursors supplies many products.

Opposing pathways are not exact reversals. Near-equilibrium reactions can often be shared, whereas strongly favorable reactions require different bypass enzymes. Spatial separation and reciprocal regulation prevent simultaneous high flux through futile cycles.

## Actual free energy

For a reaction $aA+bB\rightleftharpoons cC+dD$,

$$
\Delta G=\Delta G^{\circ\prime}+RT\ln Q,
\qquad
Q=\frac{[C]^c[D]^d}{[A]^a[B]^b}.
$$

$\Delta G^{\circ\prime}$ uses biochemical standard conditions, including buffered pH 7. The cellular $\Delta G$ can differ substantially because concentrations are not standard. At equilibrium, $\Delta G=0$ and $\Delta G^{\circ\prime}=-RT\ln K_{\mathrm{eq}}$.

Flux depends on enzyme amount, kinetic regulation, substrate supply, product removal, and pathway coupling. A large negative $\Delta G$ often marks a physiologically irreversible control point, but thermodynamics alone does not identify the rate-limiting enzyme.

## ATP and phosphoryl transfer

ATP hydrolysis is favorable because products have reduced electrostatic repulsion, greater resonance stabilization, better hydration, and increased entropy. ATP has an intermediate phosphoryl-transfer potential: compounds such as phosphoenolpyruvate and 1,3-bisphosphoglycerate can phosphorylate ADP, while ATP can phosphorylate many lower-potential acceptors.

ATP is frequently used through group transfer rather than simple heat release. Kinases transfer phosphoryl groups; ligases may form adenylated intermediates; acyl-CoA synthetases cleave ATP to AMP and pyrophosphate. Hydrolysis of pyrophosphate makes the latter reactions strongly directional and costs two high-energy phosphate equivalents.

## Redox cofactors

Oxidation is loss of electrons; reduction is gain. NAD+ commonly accepts a hydride in catabolism:

$$
\mathrm{NAD^+}+2e^-+\mathrm{H^+}\rightleftharpoons\mathrm{NADH}.
$$

NADPH is chemically similar but is maintained in a more reduced cellular pool and is used mainly for biosynthesis, antioxidant defense, and specialized oxidations. FAD and FMN can accept one or two electrons and are often tightly bound to enzymes. Their ability to handle single electrons helps connect two-electron metabolism to electron-transfer chains.

Electron transfer is favorable when electrons move toward a couple with a more positive reduction potential:

$$
\Delta G^{\circ\prime}=-nF\Delta E^{\circ\prime}.
$$

## Activated carriers and compartmentation

Coenzyme A carries acyl groups as reactive thioesters. Thiamine pyrophosphate stabilizes carbon-centered intermediates. Pyridoxal phosphate supports amino-acid chemistry. Biotin carries activated carbon dioxide. Tetrahydrofolate and S-adenosylmethionine transfer one-carbon units at different oxidation states.

Compartments create distinct metabolite pools and regulatory environments. Glycolysis occurs in cytosol, beta oxidation in mitochondria and peroxisomes, fatty-acid synthesis mainly in cytosol, and oxidative phosphorylation at the mitochondrial inner membrane. Transport is therefore part of pathway control.

## Illustrated reference

{% include biochemistry-gallery.liquid slug="metabolism-principles" title="Principles of Metabolism" %}

## Takeaways

- Cellular free energy depends on concentrations as well as standard thermodynamics.
- ATP and activated carriers couple reactions by transferring chemical groups.
- NADH and NADPH serve different cellular redox economies.
- Irreversible steps, compartmentation, and reciprocal regulation organize pathway flux.
