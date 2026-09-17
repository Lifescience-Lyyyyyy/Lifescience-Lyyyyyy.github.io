---
layout: post
title: "Protein Function: Oxygen-Binding Proteins"
date: 2023-10-17
permalink: /notes/biochemistry/oxygen-binding-proteins/
description: "Ligand binding, myoglobin, hemoglobin cooperativity, allosteric regulation, oxygen transport, and hemoglobin disorders."
tags: [biochemistry, hemoglobin, allostery, oxygen]
categories: [course-notes]
course: Biochemistry
part: "II. Protein Function and Enzymes"
chapter: 5
related_posts: false
---

[Biochemistry]({{ '/notes/biochemistry/' | relative_url }}) / Chapter 5

## Reversible ligand binding

For a protein $P$ binding ligand $L$,

$$
P+L\rightleftharpoons PL,
\qquad
K_d=\frac{[P][L]}{[PL]}=\frac{k_{\mathrm{off}}}{k_{\mathrm{on}}}.
$$

Let $Y$ be the fraction of binding sites occupied. Since $[P]_{\mathrm{tot}}=[P]+[PL]$,

$$
Y=\frac{[PL]}{[P]_{\mathrm{tot}}}
=\frac{[L]}{K_d+[L]}.
$$

At $[L]=K_d$, half the sites are occupied. A smaller $K_d$ means tighter binding. This equilibrium measure must be distinguished from kinetics: two ligands can have the same affinity but different association and dissociation rates.

## Heme and myoglobin

Free iron can catalyze damaging redox chemistry, so oxygen-binding proteins coordinate iron in heme. Ferrous iron is held by four porphyrin nitrogens, a proximal histidine, and oxygen at the sixth coordination position. A distal histidine stabilizes bound oxygen and reduces carbon monoxide's otherwise extreme preference for free heme.

Myoglobin is a monomeric oxygen-storage protein in muscle. Its hyperbolic binding curve follows the single-site equation. It has high affinity and releases substantial oxygen only when local oxygen pressure becomes low, making it suited to storage and diffusion rather than systemic delivery.

## Hemoglobin cooperativity

Adult hemoglobin is an $\alpha_2\beta_2$ tetramer. Oxygen binding changes the position of iron relative to the porphyrin plane, pulls the proximal histidine and its helix, and rearranges subunit interfaces. These changes shift the tetramer from a low-affinity T state toward a high-affinity R state.

Because one binding event changes the affinity of the remaining sites, hemoglobin has a sigmoidal saturation curve. A phenomenological description is the Hill equation:

$$
Y=\frac{(p\mathrm O_2)^{n_H}}
{P_{50}^{n_H}+(p\mathrm O_2)^{n_H}}.
$$

$P_{50}$ is the oxygen pressure at half saturation, and $n_H$ reports the steepness near the midpoint. It is not generally equal to the literal number of binding sites. Positive cooperativity allows high loading in lungs and efficient unloading over the oxygen range found in tissues.

## Heterotropic regulation

Protons, carbon dioxide, and 2,3-bisphosphoglycerate stabilize the T state and lower oxygen affinity.

- **Bohr effect:** active tissues generate acid, so lower pH promotes oxygen release. Protonation strengthens T-state ion pairs.
- **Carbon dioxide:** some carbon dioxide forms carbamates at amino termini and also produces bicarbonate and protons, further favoring unloading.
- **2,3-BPG:** this negatively charged metabolite binds the central cavity of deoxyhemoglobin. The cavity narrows in the R state, so BPG selectively stabilizes the T state.

Fetal hemoglobin binds 2,3-BPG less strongly than adult hemoglobin and therefore has higher oxygen affinity. This difference promotes oxygen transfer across the placenta.

## Carbon monoxide and pathological variants

Carbon monoxide occupies heme sites and also shifts remaining subunits toward the R state, preventing oxygen unloading. Its danger therefore combines loss of capacity with abnormally high affinity at unoccupied sites.

In sickle-cell disease, replacement of beta-chain Glu6 by Val creates a hydrophobic patch. Deoxygenated hemoglobin S polymerizes into fibers that deform erythrocytes, damage membranes, obstruct small vessels, and shorten cell lifetime. The mutation illustrates how a single surface substitution can create a concentration- and state-dependent quaternary interaction.

## Heme turnover

Old erythrocytes are engulfed by macrophages. Globin is recycled to amino acids, iron is recovered, and the porphyrin is converted through biliverdin to bilirubin. Bilirubin travels bound to albumin, is conjugated in the liver, and is excreted in bile. Excess bilirubin produces jaundice; defects can occur in hemolysis, hepatic processing, or bile flow.

## Illustrated reference

{% include biochemistry-gallery.liquid slug="oxygen-binding-proteins" title="Protein Function: Oxygen-Binding Proteins" %}

## Takeaways

- Myoglobin illustrates single-site binding; hemoglobin adds cooperative allostery.
- T-to-R coupling converts microscopic binding events into efficient physiological transport.
- Protons, carbon dioxide, and 2,3-BPG tune affinity to tissue needs.
- Hemoglobin disorders connect molecular structure directly to organismal physiology.
