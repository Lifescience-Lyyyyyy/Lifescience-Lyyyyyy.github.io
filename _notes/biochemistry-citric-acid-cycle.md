---
layout: post
title: "Pyruvate Oxidation and the Citric Acid Cycle"
date: 2023-11-24
permalink: /notes/biochemistry/citric-acid-cycle/
description: "Pyruvate dehydrogenase, the eight reactions of the citric acid cycle, regulation, amphibolic function, and anaplerosis."
tags: [biochemistry, citric-acid-cycle, acetyl-coa, anaplerosis]
categories: [course-notes]
course: Biochemistry
part: "IV. Central and Oxidative Metabolism"
chapter: 16
related_posts: false
---

[Biochemistry]({{ '/notes/biochemistry/' | relative_url }}) / Chapter 16

## Pyruvate dehydrogenase complex

In aerobic metabolism, mitochondrial pyruvate dehydrogenase converts pyruvate to acetyl-CoA:

$$
\mathrm{Pyruvate}+\mathrm{CoA}+\mathrm{NAD^+}
\rightarrow\mathrm{Acetyl\!\!-\!CoA}+\mathrm{CO_2}+\mathrm{NADH}+\mathrm{H^+}.
$$

Three enzymes coordinate five cofactors. E1 uses thiamine pyrophosphate to decarboxylate pyruvate. E2 transfers the hydroxyethyl group to lipoamide, oxidizes it to an acetyl group, and transfers it to CoA. E3 reoxidizes reduced lipoamide through FAD and NAD+.

The swinging lipoyl arm channels intermediates between active sites. This increases effective concentration, prevents side reactions, and coordinates the sequence.

PDH is inhibited by NADH and acetyl-CoA. PDH kinase phosphorylates and inactivates E1; PDH phosphatase reactivates it. High ATP, NADH, and acetyl-CoA favor the kinase, while pyruvate inhibits it. Calcium activates phosphatase in working muscle.

## The eight reactions

1. **Citrate synthase:** oxaloacetate and acetyl-CoA form citrate. Thioester hydrolysis drives the condensation.
2. **Aconitase:** citrate is rearranged through cis-aconitate to isocitrate.
3. **Isocitrate dehydrogenase:** oxidative decarboxylation yields alpha-ketoglutarate, carbon dioxide, and NADH.
4. **Alpha-ketoglutarate dehydrogenase:** a PDH-like complex forms succinyl-CoA, carbon dioxide, and NADH.
5. **Succinyl-CoA synthetase:** thioester energy drives GTP or ATP formation by substrate-level phosphorylation.
6. **Succinate dehydrogenase:** succinate becomes fumarate and FAD is reduced. The enzyme is also respiratory Complex II.
7. **Fumarase:** water adds stereospecifically to fumarate, producing malate.
8. **Malate dehydrogenase:** malate is oxidized to oxaloacetate and NADH.

Oxaloacetate is regenerated, so the pathway is a cycle. The net result per acetyl-CoA is

$$
\mathrm{Acetyl\!\!-\!CoA}+3\mathrm{NAD^+}+\mathrm{FAD}+\mathrm{GDP}+\mathrm{P_i}+2\mathrm{H_2O}
\rightarrow2\mathrm{CO_2}+3\mathrm{NADH}+\mathrm{FADH_2}+\mathrm{GTP}+\mathrm{CoA}.
$$

## Carbon accounting

The two carbons entering as acetyl-CoA are not necessarily the two released in the first turn. Symmetry and mixing at succinate complicate isotope fate. Repeated turns eventually release acetyl-derived carbon. This distinction prevents a common misconception that acetyl-CoA carbon is immediately oxidized on entry.

## Regulation

Citrate synthase, isocitrate dehydrogenase, and alpha-ketoglutarate dehydrogenase are major control points. ATP, NADH, succinyl-CoA, and citrate signal adequate energy or product accumulation. ADP and calcium stimulate flux in active muscle. Respiratory reoxidation of NADH is essential; when the electron-transport chain slows, high NADH inhibits the cycle.

## Amphibolic function and anaplerosis

Cycle intermediates support biosynthesis: citrate exports acetyl units for lipids, alpha-ketoglutarate and oxaloacetate form amino acids, succinyl-CoA supports porphyrin synthesis, and oxaloacetate feeds gluconeogenesis.

Withdrawal must be balanced by anaplerotic reactions. Pyruvate carboxylase is especially important:

$$
\mathrm{Pyruvate}+\mathrm{HCO_3^-}+\mathrm{ATP}
\rightarrow\mathrm{Oxaloacetate}+\mathrm{ADP}+\mathrm{P_i}.
$$

Acetyl-CoA activates this biotin-dependent enzyme, ensuring that oxaloacetate is replenished when acetyl units accumulate.

## Illustrated reference

{% include biochemistry-gallery.liquid slug="citric-acid-cycle" title="Pyruvate Oxidation and the Citric Acid Cycle" %}

## Takeaways

- PDH links glycolysis to acetyl-CoA through a multienzyme, cofactor-rich mechanism.
- One cycle turn produces three NADH, one FADH2, one GTP, and two carbon dioxide molecules.
- Flux responds to energy state, redox state, calcium, and product abundance.
- The cycle is amphibolic; anaplerotic reactions maintain its intermediates.
