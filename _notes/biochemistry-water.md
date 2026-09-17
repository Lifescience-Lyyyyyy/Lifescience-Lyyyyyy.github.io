---
layout: post
title: "Water, Weak Interactions, and Buffers"
date: 2023-09-19
permalink: /notes/biochemistry/water/
description: "Hydrogen bonding, the hydrophobic effect, acid-base equilibria, buffers, osmosis, and water in biochemical reactions."
tags: [biochemistry, water, buffers, thermodynamics]
categories: [course-notes]
course: Biochemistry
part: "I. Molecular Foundations"
chapter: 2
related_posts: false
---

[Biochemistry]({{ '/notes/biochemistry/' | relative_url }}) / Chapter 2

## Why water is unusual

Water is bent and polar. Oxygen bears a partial negative charge, while the hydrogens bear partial positive charges. Each molecule can donate two hydrogen bonds and accept two, producing a dynamic network. Hydrogen bonds continuously break and reform, yet their collective effect gives water high heat capacity, high surface tension, and an unusually high boiling point for such a small molecule.

Water also weakens electrostatic interactions. Coulombic attraction in a medium is approximately

$$
F=\frac{1}{4\pi\varepsilon_0\varepsilon_r}\frac{q_1q_2}{r^2}.
$$

Because water has a large relative dielectric constant, hydrated ions interact more weakly than the same ions in vacuum. Polar and charged solutes are stabilized by ion-dipole and hydrogen-bonding interactions with hydration shells.

## The hydrophobic effect

Nonpolar molecules cannot replace water-water hydrogen bonds with comparably favorable interactions. Water near a small nonpolar surface becomes more ordered. When nonpolar groups cluster, the exposed hydrophobic surface area decreases and some ordered water returns to the bulk. The resulting entropy gain is a major driver of micelle formation, membrane assembly, protein folding, and ligand binding.

The hydrophobic effect is therefore not a special attractive force between hydrocarbons. It is mainly a solvent-mediated consequence of reducing the disruption of water's network. van der Waals contacts then stabilize the packed nonpolar interior.

## Ionization of water and pH

Water undergoes autoionization:

$$
2\mathrm{H_2O}\rightleftharpoons \mathrm{H_3O^+}+\mathrm{OH^-}.
$$

At 25 degrees Celsius,

$$
K_w=[\mathrm{H^+}][\mathrm{OH^-}]=10^{-14},
\qquad
\mathrm{pH}=-\log_{10}[\mathrm{H^+}].
$$

For a weak acid $\mathrm{HA}\rightleftharpoons\mathrm{H^+}+\mathrm{A^-}$,

$$
K_a=\frac{[\mathrm{H^+}][\mathrm{A^-}]}{[\mathrm{HA}]},
\qquad
pK_a=-\log_{10}K_a.
$$

Rearranging gives the Henderson-Hasselbalch equation:

$$
\mathrm{pH}=pK_a+\log_{10}\frac{[\mathrm{A^-}]}{[\mathrm{HA}]}.
$$

At $\mathrm{pH}=pK_a$, acid and conjugate base are present at equal concentrations. Buffer capacity is greatest near this point and is practically useful over roughly $pK_a\pm1$.

## Physiological buffers

The phosphate pair $\mathrm{H_2PO_4^-}/\mathrm{HPO_4^{2-}}$ helps buffer intracellular fluid. Histidine side chains can buffer proteins because their $pK_a$ values are close to neutral pH. Blood relies strongly on the bicarbonate system:

$$
\mathrm{CO_2}+\mathrm{H_2O}
\rightleftharpoons \mathrm{H_2CO_3}
\rightleftharpoons \mathrm{H^+}+\mathrm{HCO_3^-}.
$$

This is an open buffer system: lungs regulate carbon dioxide and kidneys regulate bicarbonate and proton excretion. Carbonic anhydrase rapidly equilibrates dissolved carbon dioxide with bicarbonate.

## Osmosis and tonicity

A semipermeable membrane allows water but not every solute to cross. Water moves toward the side with the greater effective solute concentration. For an ideal dilute solution, osmotic pressure is

$$
\Pi=i cRT,
$$

where $i$ is the van 't Hoff factor. A cell in a hypotonic medium gains water and may lyse; a cell in a hypertonic medium loses water and shrinks. Tonicity depends only on solutes that do not readily cross the membrane.

## Water as reactant and product

Water is chemically active. Hydrolysis cleaves bonds by adding the elements of water, while condensation creates bonds with water as a product. Oxidation-reduction reactions can also generate or consume water. ATP hydrolysis, peptide-bond hydrolysis, glycosidic-bond cleavage, and the terminal reduction of oxygen in respiration all depend on this chemistry.

## Illustrated reference

{% include biochemistry-gallery.liquid slug="water" title="Water, Weak Interactions, and Buffers" %}

## Takeaways

- Water's polarity and hydrogen-bond network explain both solvation and many bulk properties.
- The hydrophobic effect is a solvent-driven force behind biological self-assembly.
- Buffer behavior follows directly from acid-base equilibrium and concentration ratios.
- Osmosis, hydrolysis, condensation, and proton transfer make water an active participant in biology.
