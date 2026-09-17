---
layout: post
title: "Production and Growth I: Malthus and Solow"
date: 2023-03-13
permalink: /notes/macroeconomics/production-growth-malthus-solow/
description: "Growth measurement, compound growth, the Malthusian trap, capital accumulation, and the Solow steady state."
tags: [macroeconomics, economic-growth, malthus, solow-model]
categories: [course-notes]
course: Macroeconomics
part: "II. Long-Run Growth, Finance, and Labor"
chapter: 6
related_posts: false
---

[Macroeconomics]({{ '/notes/macroeconomics/' | relative_url }}) / Chapter 6

## Measuring sustained growth

For small rates, per-capita output growth is approximately aggregate-output growth minus population growth. Compounding makes persistent differences powerful: if output grows at (g) percent per year, the rule of 70 gives an approximate doubling time of (70/g) years. Exact compounding uses (Y_t=Y_0(1+g)^t).

Growth theory asks whether per-capita growth can persist, why some economies stagnate, whether adjustment is smooth, and whether poorer economies converge toward richer ones.

## The Malthusian trap

In the Malthusian model, land is fixed and labor faces diminishing average product. Let total output be (Y=F(N)) and living standards be (y=Y/N). Population growth depends on births minus deaths:

$$
\frac{\dot N}{N}=b(y)-d(y).
$$

When higher living standards reduce mortality or raise fertility, temporary productivity gains support a larger population. Diminishing returns then push income per person back toward a subsistence level (y_s), at which population is stationary. The long-run gain appears mainly as population rather than per-capita income.

The model describes much of preindustrial history but not modern sustained growth. A permanent escape requires technological progress faster than the population response, a demographic transition, human-capital accumulation, institutions that support investment, or other changes in the model's mechanisms—not merely a one-time rise in land or output.

## The Solow production framework

The Solow model introduces reproducible capital and technology. With constant returns,

$$
Y=F(K,AL), \qquad y=f(k),
$$

where (A) is labor-augmenting technology and lowercase variables are per unit of effective labor. A Cobb–Douglas example is (Y=K^\alpha(AL)^{1-\alpha}), with (0<\alpha<1). Diminishing marginal product of capital is essential.

If a constant share (s) of output is saved, population grows at (n), technology at (g), and capital depreciates at (delta), then capital per effective worker evolves as

$$
\dot k=sf(k)-(n+g+\delta)k.
$$

The first term is actual investment; the second is break-even investment required to equip new workers, keep pace with efficiency growth, and replace depreciation.

## The steady state

At the steady state (k^\*),

$$
sf(k^*)=(n+g+\delta)k^*.
$$

Capital and output per effective worker are constant. Output per worker grows at the technological-progress rate (g), while total output grows at (n+g). A higher saving rate raises the steady-state level of capital and income but, without technological progress, does not permanently raise their long-run growth rate. Because of diminishing returns, the transition growth effect fades.

The Golden Rule steady state maximizes consumption per effective worker. Its condition is

$$
f'(k_{GR})=n+g+\delta.
$$

An economy below this level can raise future consumption through more saving; an economy above it has overaccumulated capital and can increase both current and steady-state consumption by saving less.

## Illustrated reference

{% include macroeconomics-gallery.liquid slug="production-growth-malthus-solow" title="Production and Growth I: Malthus and Solow" %}

## Takeaways

- Compound growth makes small persistent rate differences economically large.
- The Malthusian mechanism converts productivity gains into population under diminishing returns.
- In Solow, saving determines the long-run income level, while technology determines sustained per-capita growth.
- The steady state balances actual investment with dilution and depreciation.
