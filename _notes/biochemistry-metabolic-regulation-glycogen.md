---
layout: post
title: "Metabolic Regulation and Glycogen Metabolism"
date: 2023-11-21
permalink: /notes/biochemistry/metabolic-regulation-glycogen/
description: "Hormonal control of glycolysis and gluconeogenesis, glycogen synthesis and breakdown, and tissue-specific regulation."
tags: [biochemistry, glycogen, insulin, glucagon]
categories: [course-notes]
course: Biochemistry
part: "IV. Central and Oxidative Metabolism"
chapter: 15
related_posts: false
---

[Biochemistry]({{ '/notes/biochemistry/' | relative_url }}) / Chapter 15

## Principles of reciprocal control

Flux through opposing pathways is coordinated at distinct enzymes that catalyze strongly favorable reactions. Hormones do not simply switch every enzyme on or off; they change phosphorylation, allosteric effectors, transporter abundance, and gene expression so that the whole pathway matches organismal needs.

Insulin generally signals abundant dietary fuel. Glucagon signals low blood glucose, chiefly to liver. Epinephrine prepares liver and muscle for acute demand. The same second messenger can have different outcomes because tissues express different receptors, enzymes, and substrates.

## PFK-2 and fructose 2,6-bisphosphate

The bifunctional liver enzyme PFK-2/FBPase-2 controls fructose 2,6-bisphosphate. This metabolite activates PFK-1 and inhibits fructose 1,6-bisphosphatase, thereby favoring glycolysis over gluconeogenesis.

During fasting, glucagon raises cAMP and activates protein kinase A. Phosphorylation of the liver bifunctional enzyme lowers PFK-2 activity and raises FBPase-2 activity. Fructose 2,6-bisphosphate falls, glycolysis slows, and gluconeogenesis increases. Insulin reverses this state through dephosphorylation. Isoforms in other tissues can respond differently.

## Glycogen synthesis

Phosphoglucomutase converts glucose 6-phosphate to glucose 1-phosphate. UDP-glucose pyrophosphorylase then activates glucose:

$$
\mathrm{Glucose\ 1\!\!-\!phosphate}+\mathrm{UTP}
\rightarrow\mathrm{UDP\!\!-\!glucose}+\mathrm{PP_i}.
$$

Pyrophosphate hydrolysis pulls the reaction forward. Glycogenin autoglycosylates a tyrosine residue to create a primer. Glycogen synthase extends nonreducing ends with $\alpha(1\rightarrow4)$ linkages, and branching enzyme transfers segments to create $\alpha(1\rightarrow6)$ branches.

Branching increases solubility and the number of sites available for rapid synthesis or degradation.

## Glycogen breakdown

Glycogen phosphorylase uses inorganic phosphate to release glucose 1-phosphate from nonreducing ends. It stops near branch points. A debranching enzyme transfers a short oligosaccharide and hydrolyzes the remaining $\alpha(1\rightarrow6)$-linked glucose. Phosphoglucomutase converts glucose 1-phosphate to glucose 6-phosphate.

Muscle sends glucose 6-phosphate into glycolysis. Liver contains glucose 6-phosphatase in the endoplasmic reticulum and can release free glucose into blood. Muscle lacks this enzyme and therefore uses its glycogen locally.

## Covalent and allosteric regulation

Protein kinase A activates phosphorylase kinase, which activates glycogen phosphorylase. The same signaling cascade phosphorylates and inhibits glycogen synthase. Protein phosphatase 1 reverses both effects, favoring storage.

Allosteric signals add local information. AMP activates muscle glycogen phosphorylase when energy is low; ATP and glucose 6-phosphate oppose it. Liver phosphorylase responds strongly to glucose, helping stop hepatic glycogen breakdown after blood glucose rises. Calcium released during muscle contraction activates phosphorylase kinase through calmodulin, coupling contraction to fuel mobilization.

## Insulin signaling and glucose uptake

Insulin receptor signaling recruits GLUT4-containing vesicles to the plasma membrane in muscle and adipose tissue, increasing glucose uptake. It promotes phosphatase activity, glycogen synthesis, glycolysis in appropriate tissues, and lipogenesis while suppressing hepatic glucose output.

The result is coordinated rather than uniform: liver buffers blood glucose, muscle supports work and storage, and adipose tissue stores carbon as triacylglycerol.

## Illustrated reference

{% include biochemistry-gallery.liquid slug="metabolic-regulation-glycogen" title="Metabolic Regulation and Glycogen Metabolism" %}

## Takeaways

- Reciprocal regulation prevents simultaneous high flux through opposing pathways.
- Fructose 2,6-bisphosphate coordinates hepatic glycolysis and gluconeogenesis.
- Glycogen branching permits rapid synthesis and mobilization at many ends.
- Liver glycogen supports blood glucose; muscle glycogen supports local ATP production.
