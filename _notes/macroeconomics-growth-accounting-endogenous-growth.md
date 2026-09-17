---
layout: post
title: "Production and Growth II: Growth Accounting and Endogenous Growth"
date: 2023-03-20
permalink: /notes/macroeconomics/growth-accounting-endogenous-growth/
description: "Growth accounting, total factor productivity, convergence, intertemporal choice, AK growth, and knowledge production."
tags: [macroeconomics, growth-accounting, convergence, endogenous-growth]
categories: [course-notes]
course: Macroeconomics
part: "II. Long-Run Growth, Finance, and Labor"
chapter: 7
related_posts: false
---

[Macroeconomics]({{ '/notes/macroeconomics/' | relative_url }}) / Chapter 7

## Decomposing economic growth

For a Cobb–Douglas production function (Y=AK^\alpha L^{1-\alpha}), logarithmic differentiation gives

$$
\frac{\dot Y}{Y}=\frac{\dot A}{A}+\alpha\frac{\dot K}{K}+(1-\alpha)\frac{\dot L}{L}.
$$

Under competitive factor markets, (alpha) and (1-\alpha) correspond to capital and labor income shares. Growth accounting attributes output growth to capital growth, labor growth, and a residual (\dot A/A). This Solow residual is commonly called total factor productivity growth, but it captures everything not measured as factor quantity: technology, utilization, allocation, institutions, measurement error, and omitted inputs. It is not a pure direct measure of invention.

Per-capita growth subtracts population growth. Capital deepening raises output per worker, while sustained productivity growth shifts the production function and prevents diminishing returns from exhausting growth.

## Convergence

With similar saving, population growth, depreciation, technology, and institutions, a poorer economy has less capital per worker and a higher marginal product of capital. It should grow faster toward the same steady state—absolute convergence. If structural parameters differ, economies approach different steady states; convergence conditional on those determinants can still occur.

Convergence is therefore not automatic. Barriers to technology adoption, weak institutions, poor health and education, conflict, geography, capital misallocation, or low complementary infrastructure can preserve gaps. A temporarily high growth rate during catch-up does not imply convergence to the same ultimate income level.

## Intertemporal choice

Saving trades present consumption for future consumption. For a household maximizing

$$
\sum_{t=0}^{\infty}\beta^t u(c_t),
$$

the Euler condition is

$$
u'(c_t)=\beta(1+R_{t+1})u'(c_{t+1}).
$$

The left side is the marginal utility lost by saving one unit today; the right side is discounted marginal utility from its future return. A larger discount factor means more patience. With constant-relative-risk-aversion utility, the curvature parameter governs both relative risk aversion and willingness to substitute consumption across time; the intertemporal elasticity of substitution is its reciprocal.

## The AK model

The simplest endogenous-growth model removes diminishing returns to accumulable capital:

$$
Y=AK.
$$

If saving is a fraction (s) and depreciation is (delta),

$$
\frac{\dot K}{K}=sA-\delta.
$$

Saving now affects the permanent growth rate. Interpreting (K) broadly—as physical capital, knowledge, human capital, and organizational capacity—makes constant social returns more plausible. Private returns can diminish while spillovers keep social returns high.

## Two-sector endogenous growth

A production sector uses effective labor (AL) and capital to make goods, while a research or education sector increases (A). Allocating more resources to knowledge creation reduces current output but raises future productivity. Ideas are partially nonrival and can generate increasing returns, yet patents, secrecy, congestion, and duplication affect incentives. Policy may therefore influence long-run growth through education, research, competition, intellectual property, infrastructure, and institutions—but only when these interventions actually correct a market failure.

## Illustrated reference

{% include macroeconomics-gallery.liquid slug="growth-accounting-endogenous-growth" title="Production and Growth II: Growth Accounting and Endogenous Growth" %}

## Takeaways

- Growth accounting is a decomposition, not a causal identification strategy.
- Solow predicts conditional convergence when structural determinants are comparable.
- The Euler equation connects saving to marginal utility across time.
- Endogenous-growth models explain how accumulation, spillovers, and knowledge production can sustain growth.
