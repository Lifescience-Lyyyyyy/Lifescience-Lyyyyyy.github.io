---
layout: post
title: "Fatty Acid Catabolism"
date: 2023-11-28
permalink: /notes/biochemistry/fatty-acid-catabolism/
description: "Lipid mobilization, mitochondrial entry, beta oxidation, unsaturated and odd-chain fatty acids, ketone bodies, and pathway regulation."
tags: [biochemistry, fatty-acids, beta-oxidation, ketone-bodies]
categories: [course-notes]
course: Biochemistry
part: "IV. Central and Oxidative Metabolism"
chapter: 17
related_posts: false
---

[Biochemistry]({{ '/notes/biochemistry/' | relative_url }}) / Chapter 17

## Mobilizing stored fat

Dietary triacylglycerols are emulsified by bile salts and hydrolyzed by pancreatic lipases. Enterocytes re-esterify fatty acids and package triacylglycerols into chylomicrons. Lipoprotein lipase releases fatty acids for uptake by muscle and adipose tissue.

During fasting or exercise, epinephrine and related signals activate adipose lipolysis through phosphorylation of perilipin and lipases. Nonesterified fatty acids travel in blood bound to serum albumin; glycerol returns mainly to liver.

## Activation and mitochondrial entry

Acyl-CoA synthetase activates a fatty acid:

$$
\mathrm{Fatty\ acid}+\mathrm{CoA}+\mathrm{ATP}
\rightarrow\mathrm{Acyl\!\!-\!CoA}+\mathrm{AMP}+\mathrm{PP_i}.
$$

Because ATP becomes AMP and pyrophosphate is hydrolyzed, activation costs two ATP equivalents.

Long-chain acyl-CoA cannot cross the mitochondrial inner membrane directly. Carnitine acyltransferase I transfers the acyl group to carnitine, a translocase exchanges acylcarnitine for free carnitine, and carnitine acyltransferase II regenerates matrix acyl-CoA. Malonyl-CoA inhibits the first transferase, preventing newly synthesized fatty acids from immediately entering oxidation.

## The beta-oxidation spiral

Each cycle shortens the acyl chain by two carbons:

1. acyl-CoA dehydrogenase forms a trans double bond and FADH2;
2. enoyl-CoA hydratase adds water;
3. beta-hydroxyacyl-CoA dehydrogenase forms a keto group and NADH;
4. thiolase cleaves with CoA, releasing acetyl-CoA and a shortened acyl-CoA.

For a saturated even-chain fatty acid with $n$ carbons, the number of cycles is $n/2-1$ and the number of acetyl-CoA molecules is $n/2$. Palmitoyl-CoA therefore undergoes seven cycles to produce eight acetyl-CoA, seven NADH, and seven FADH2.

Using approximate modern P/O ratios, complete oxidation of palmitate yields about 106 ATP after subtracting activation cost. The precise value depends on coupling and shuttle assumptions.

## Special substrates

Unsaturated fatty acids require isomerase and sometimes reductase reactions to place double bonds in forms compatible with the standard pathway. Existing double bonds bypass an FAD-dependent oxidation step, slightly lowering ATP yield.

Odd-chain fatty acids end with propionyl-CoA. Propionyl-CoA carboxylase, epimerase, and vitamin B12-dependent methylmalonyl-CoA mutase convert it to succinyl-CoA. This pathway gives odd-chain fatty acids a glucogenic component.

Very-long-chain fatty acids begin oxidation in peroxisomes. Their first oxidation transfers electrons directly to oxygen and produces hydrogen peroxide rather than conserved respiratory energy. Shortened products can then move to mitochondria.

## Ketone bodies

During prolonged fasting, diabetes with low effective insulin, or sustained high fat oxidation, hepatic acetyl-CoA can exceed citric-acid-cycle capacity because oxaloacetate is directed toward gluconeogenesis. Liver mitochondria convert acetyl-CoA to acetoacetate and beta-hydroxybutyrate; acetone forms spontaneously from acetoacetate.

Extrahepatic tissues convert ketone bodies back to acetyl-CoA. The liver cannot consume them because it lacks succinyl-CoA:acetoacetate CoA transferase. Ketones provide water-soluble fuel, especially for muscle and, after adaptation, brain. Excess production causes ketoacidosis.

## Regulation and inherited defects

Fatty-acid entry is controlled by malonyl-CoA, while high NADH and acetyl-CoA slow beta oxidation. Hormones coordinate substrate release from adipose tissue and oxidation in consuming tissues. Defects in carnitine transport, acyl-CoA dehydrogenases, or peroxisomal enzymes can cause fasting intolerance, hypoketotic hypoglycemia, lipid accumulation, and organ dysfunction.

## Illustrated reference

{% include biochemistry-gallery.liquid slug="fatty-acid-catabolism" title="Fatty Acid Catabolism" %}

## Takeaways

- Fatty acids are activated before oxidation, and long chains use the carnitine shuttle.
- Each beta-oxidation cycle produces one acetyl-CoA unit, one NADH, and one FADH2, except for the final cleavage pattern.
- Unsaturated, odd-chain, and very-long-chain substrates require accessory pathways.
- Ketone bodies export hepatic acetyl-unit energy during carbohydrate scarcity.
