---
layout: post
title: "Measuring the Cost of Living"
date: 2023-03-06
permalink: /notes/macroeconomics/measuring-cost-of-living/
description: "Consumer price indexes, inflation, alternative deflators, indexation, real interest rates, substitution bias, and quality adjustment."
tags: [macroeconomics, cpi, inflation, price-indexes]
categories: [course-notes]
course: Macroeconomics
part: "I. Foundations and Measurement"
chapter: 5
related_posts: false
---

[Macroeconomics]({{ '/notes/macroeconomics/' | relative_url }}) / Chapter 5

## Constructing a consumer price index

The consumer price index measures the cost of purchasing a representative household basket. A basic fixed-basket index requires five steps: select the basket and weights, collect prices, calculate the basket cost in each period, choose a base period, and calculate inflation.

$$
\mathrm{CPI}_t=100\times\frac{\sum_i p_{it}q_{i0}}{\sum_i p_{i0}q_{i0}},
\qquad
\pi_t=100\times\frac{\mathrm{CPI}_t-\mathrm{CPI}_{t-1}}{\mathrm{CPI}_{t-1}}.
$$

The base-period quantities (q\_{i0}) hold consumption structure fixed so the index isolates price change. Statistical agencies use detailed strata, rotating samples, expenditure surveys, and periodic weight updates rather than one literal basket.

## Comparing price measures

The GDP deflator covers domestically produced final goods and services and uses a changing production basket. CPI covers household consumption and includes imports. The producer price index follows prices received by producers at earlier stages of production and can be more volatile; pass-through to consumer prices is incomplete and depends on margins, productivity, contracts, and demand.

The personal-consumption-expenditure price index uses broader expenditure data and chain weighting. Because weights adjust as households substitute, it commonly grows more slowly than a fixed-basket CPI. Core inflation excludes selected volatile components, typically food and energy, to reveal persistence; it is an analytical signal, not a claim that excluded goods do not matter to households.

## Indexation and real values

Wages, pensions, tax brackets, and contracts can be indexed through cost-of-living adjustments. To convert a historical nominal value into base-period purchasing power, divide by the relevant price index and multiply by the base index.

The exact Fisher relation is

$$
1+i=(1+r)(1+\pi^e),
$$

where (i) is the nominal interest rate, (r) the real rate, and (pi^e) expected inflation. For modest rates, (r\approx i-\pi^e). Ex post analysis substitutes realized inflation but should not confuse it with the expectation governing the original contract.

## Sources of measurement bias

A fixed basket overstates cost-of-living growth when consumers voluntarily substitute toward relatively cheaper goods. New products expand choice before entering the basket. Outlet substitution and changes in shopping technology also matter. Quality improvement should be treated as more real product, not pure inflation, but separating quality from price is difficult.

Hedonic methods estimate how product attributes contribute to price and are useful for rapidly changing goods such as computers or housing. Forced substitution caused by rationing or disappearance differs from welfare-improving substitution and may not be captured well by ordinary indexes.

No single index answers every question. The appropriate deflator depends on whose consumption, which goods, what substitution concept, and which policy purpose are relevant.

## Illustrated reference

{% include macroeconomics-gallery.liquid slug="measuring-cost-of-living" title="Measuring the Cost of Living" %}

## Takeaways

- CPI fixes expenditure weights to track a representative consumer basket.
- GDP, CPI, PPI, and PCE indexes differ in scope and weighting, not merely in name.
- Real interest rates depend on expected inflation at the time decisions are made.
- Substitution, new goods, outlets, and quality change make cost-of-living measurement intrinsically approximate.
