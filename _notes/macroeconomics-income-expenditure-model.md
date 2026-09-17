---
layout: post
title: "The Income–Expenditure Model"
date: 2023-05-15
permalink: /notes/macroeconomics/income-expenditure-model/
description: "Planned expenditure, inventory adjustment, the Keynesian cross, fiscal multipliers, and open-economy leakages."
tags: [macroeconomics, keynesian-cross, aggregate-expenditure, multiplier]
categories: [course-notes]
course: Macroeconomics
part: "IV. Short-Run Fluctuations and Policy"
chapter: 14
related_posts: false
---

[Macroeconomics]({{ '/notes/macroeconomics/' | relative_url }}) / Chapter 14

## Planned and realized expenditure

The income–expenditure model explains short-run output when the price level is fixed and firms can meet additional demand. In a simple closed economy without government,

$$
C=A+cY_d,
$$

where (A) is autonomous consumption and (c) is the marginal propensity to consume. Planned investment (ar I) is initially treated as autonomous, so planned aggregate expenditure is

$$
AE^p=A+cY+\bar I.
$$

Realized expenditure always equals realized output because unplanned inventory accumulation is counted as investment. Equilibrium requires planned expenditure to equal output:

$$
Y=AE^p.
$$

If planned spending is below output, inventories rise unexpectedly and firms cut production. If spending exceeds output, inventories fall and firms expand production. Inventories therefore transmit expenditure surprises into later output decisions.

## The Keynesian cross and multiplier

Substituting the consumption function gives

$$
Y^*=\frac{A+\bar I}{1-c}.
$$

An autonomous-spending increase creates successive rounds of income and consumption. The simple expenditure multiplier is

$$
k=\frac{1}{1-c}.
$$

This is not a universal empirical constant. It is a result of a particular model with fixed prices, idle capacity, no interest-rate response, and stable behavior. Taxes, imports, financial crowding out, expectations, capacity constraints, and monetary policy reduce or alter the response.

## Government and foreign trade

With government purchases, taxes, exports, and imports,

$$
AE=C+I+G+X-M.
$$

Let taxes be (T=T_0+tY), transfers be (TR), and imports (M=M_0+mY). Disposable income is (Y_d=Y-T+TR). The equilibrium multiplier becomes

$$
k=\frac{1}{1-c(1-t)+m}.
$$

The proportional tax rate (t), marginal propensity to import (m), and saving leakage all reduce the multiplier. Exports and autonomous investment shift expenditure directly. Imports are a leakage from domestic income generation, although they remain a benefit to consumers and an export for another economy.

## Fiscal multipliers

In the simplest fixed-tax model, the government-purchase multiplier is (1/(1-c)), while a lump-sum tax change has multiplier (-c/(1-c)). A transfer change has the same first-round effect as the opposite tax change when households treat both as disposable income.

If (G) and lump-sum taxes rise equally, the balanced-budget multiplier equals one in the elementary model. This result relies on the same restrictive assumptions and changes when taxes distort supply, consumers are forward-looking, government purchases have different import content, or interest rates respond.

## Limits and interpretation

The Keynesian cross describes demand-determined output over a horizon with sticky prices. It does not determine potential output and cannot analyze inflation or supply shocks by itself. Expectations can also weaken mechanical multipliers: households may save temporary transfers, firms may delay investment, and central banks may offset fiscal stimulus. Nevertheless, the model provides a clear accounting mechanism linking autonomous expenditure, inventories, and short-run production.

## Illustrated reference

{% include macroeconomics-gallery.liquid slug="income-expenditure-model" title="The Income–Expenditure Model" %}

## Takeaways

- Realized expenditure equals output through unplanned inventory investment.
- Equilibrium requires planned expenditure to equal production.
- The multiplier arises from repeated induced spending and is reduced by leakages.
- The model is a short-run demand framework, not a theory of long-run productive capacity.
