---
layout: post
title: "Amino Acid Oxidation and the Urea Cycle"
date: 2023-12-01
permalink: /notes/biochemistry/amino-acid-oxidation-urea/
description: "Protein turnover, transamination, ammonia transport, oxidative deamination, and the complete urea cycle."
tags: [biochemistry, amino-acids, urea-cycle, nitrogen]
categories: [course-notes]
course: Biochemistry
part: "IV. Central and Oxidative Metabolism"
chapter: 18
related_posts: false
---

[Biochemistry]({{ '/notes/biochemistry/' | relative_url }}) / Chapter 18

## Sources and fates of amino nitrogen

Dietary proteins and continuous intracellular protein turnover supply amino acids. Unlike fat and glycogen, there is no dedicated storage polymer for excess amino acids. Their amino groups must be safely removed and their carbon skeletons oxidized or converted into glucose, ketone bodies, or lipids.

Proteins are degraded by lysosomes and by the ubiquitin-proteasome system. Digestive proteases are synthesized as zymogens, activated in the gastrointestinal tract, and combined with peptidases to produce absorbable amino acids and small peptides.

## Transamination

Aminotransferases transfer an alpha-amino group to an alpha-keto acid, commonly alpha-ketoglutarate:

$$
\mathrm{Amino\ acid}+\alpha\text{-ketoglutarate}
\rightleftharpoons\alpha\text{-keto\ acid}+\mathrm{glutamate}.
$$

Pyridoxal phosphate, derived from vitamin B6, temporarily carries the amino group through a Schiff-base mechanism. Transamination does not release free ammonia; it collects nitrogen mainly in glutamate. Alanine aminotransferase and aspartate aminotransferase are clinically useful markers of tissue injury but are not uniquely liver specific.

## Oxidative deamination and ammonia transport

Mitochondrial glutamate dehydrogenase releases ammonium:

$$
\mathrm{Glutamate}+\mathrm{NAD(P)^+}+\mathrm{H_2O}
\rightleftharpoons\alpha\text{-ketoglutarate}+\mathrm{NH_4^+}+\mathrm{NAD(P)H}.
$$

Most tissues avoid transporting free ammonia. Glutamine synthetase captures it as glutamine using ATP. In liver or kidney, glutaminase releases ammonium. Muscle also transfers nitrogen to pyruvate, forming alanine; the glucose-alanine cycle moves nitrogen to liver while returning glucose carbon to muscle.

## The urea cycle

The liver converts toxic nitrogen to urea. The first two reactions occur in mitochondria; the remaining reactions occur in cytosol.

1. **Carbamoyl phosphate synthetase I:** bicarbonate, ammonium, and two ATP form carbamoyl phosphate. N-acetylglutamate is an obligatory activator.
2. **Ornithine transcarbamylase:** carbamoyl phosphate transfers its carbamoyl group to ornithine, forming citrulline, which exits the mitochondrion.
3. **Argininosuccinate synthetase:** citrulline condenses with aspartate using ATP to AMP, supplying the second urea nitrogen.
4. **Argininosuccinate lyase:** argininosuccinate splits into arginine and fumarate.
5. **Arginase:** arginine hydrolysis releases urea and regenerates ornithine.

Overall,

$$
\mathrm{NH_4^+}+\mathrm{HCO_3^-}+\mathrm{Aspartate}+3\mathrm{ATP}+2\mathrm{H_2O}
\rightarrow\mathrm{Urea}+\mathrm{Fumarate}+2\mathrm{ADP}+\mathrm{AMP}
+4\mathrm{P_i}.
$$

Three ATP molecules are consumed, but four high-energy phosphate bonds are used because one ATP becomes AMP.

## Connection to the citric acid cycle

Fumarate becomes malate and then oxaloacetate; transamination of oxaloacetate regenerates aspartate. This aspartate-argininosuccinate shunt links nitrogen disposal with the citric acid cycle. Cytosolic malate oxidation also produces NADH, partly offsetting the energetic cost of urea formation.

## Regulation and disorders

Arginine stimulates synthesis of N-acetylglutamate, activating carbamoyl phosphate synthetase I when amino-acid catabolism rises. Longer-term high-protein intake or fasting increases urea-cycle enzyme expression.

Defects in cycle enzymes cause hyperammonemia. Neurological toxicity reflects altered neurotransmitter balance, glutamine accumulation, astrocyte swelling, and depletion of citric-acid-cycle intermediates. Treatment strategies reduce nitrogen intake, provide alternative nitrogen-excretion routes, and replace missing intermediates when appropriate.

## Illustrated reference

{% include biochemistry-gallery.liquid slug="amino-acid-oxidation-urea" title="Amino Acid Oxidation and the Urea Cycle" %}

## Takeaways

- Transamination funnels amino nitrogen into glutamate without releasing free ammonia.
- Glutamine and alanine safely transport nitrogen between tissues.
- The urea cycle uses two nitrogen donors and four high-energy phosphate equivalents.
- Its fumarate-aspartate connection integrates nitrogen disposal with central carbon metabolism.
