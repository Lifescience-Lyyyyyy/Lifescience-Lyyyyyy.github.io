---
layout: post
title: "Risk, Return, and Asset Markets"
date: 2023-04-03
permalink: /notes/macroeconomics/risk-return-asset-markets/
description: "Expected return, risk aversion, insurance, information asymmetry, market efficiency, and rational or behavioral bubbles."
tags: [macroeconomics, risk, asset-pricing, efficient-markets]
categories: [course-notes]
course: Macroeconomics
part: "II. Long-Run Growth, Finance, and Labor"
chapter: 9
related_posts: false
---

[Macroeconomics]({{ '/notes/macroeconomics/' | relative_url }}) / Chapter 9

## Return and risk

For discrete outcomes, expected return is

$$
E(R)=\sum_s p_sR_s,
$$

and variance is (\operatorname{Var}(R)=\sum_s p_s[R_s-E(R)]^2). Standard deviation measures dispersion in the same units as return, but it treats upside and downside symmetrically and is not a complete description when distributions are skewed or have fat tails.

A risk-averse person has increasing, concave utility of wealth: (u'(W)>0) and (u''(W)<0). The certainty equivalent (CE) satisfies (u(CE)=E[u(W)]). The risk premium is (E(W)-CE), the maximum amount the person would pay to eliminate the risk. Risk neutrality gives linear utility; risk seeking gives locally convex utility.

## Diversification and common shocks

Pooling independent risks reduces variance because losses do not occur simultaneously. Portfolio variance depends on covariance as well as individual volatility. Diversification can remove idiosyncratic risk but not systematic risk shared across assets. Financial crises, macroeconomic contractions, and disasters create correlated losses precisely when insurance capital is strained.

## Insurance, moral hazard, and adverse selection

Insurance transfers risk but changes information and incentives. Adverse selection occurs before contracting: high-risk people are more eager to buy when insurers cannot observe type. The pool deteriorates, premiums rise, and low-risk participants exit. Moral hazard occurs after contracting: protection changes prevention, care, or claims behavior.

Deductibles, copayments, exclusions, experience rating, monitoring, mandates, and risk adjustment address these problems but also reduce insurance or add administrative cost. Adverse selection concerns hidden type; moral hazard concerns hidden action.

## Efficient markets

The efficient-markets hypothesis says prices rapidly incorporate available information, making systematic abnormal profit difficult after risk and cost. Weak-form efficiency concerns past prices and volume; semi-strong efficiency includes public information; strong-form efficiency would include private information and is not a realistic legal or empirical benchmark.

Efficiency does not mean prices are always correct. It means predictable errors are difficult to exploit. Tests face a joint-hypothesis problem: an apparent abnormal return may reflect inefficiency or a misspecified model of normal risk compensation.

## Bubbles and limits to arbitrage

A bubble is a persistent gap between market price and a valuation justified by expected cash flows under an accepted discount model. Feedback trading can make expectations self-reinforcing: investors buy because they expect others to buy. Even rational investors may ride a bubble if its timing is uncertain.

Arbitrage is limited by short-sale constraints, funding risk, synchronization risk, model uncertainty, and the possibility that mispricing worsens before correcting. Behavioral forces—extrapolation, overconfidence, attention, and social imitation—can interact with institutional leverage. A bubble can therefore coexist with informed traders; the important question is whether a safe, scalable, correctly timed arbitrage exists.

## Illustrated reference

{% include macroeconomics-gallery.liquid slug="risk-return-asset-markets" title="Risk, Return, and Asset Markets" %}

## Takeaways

- Expected return alone is insufficient; covariance and tail risk matter.
- Concave utility creates a positive willingness to pay for insurance.
- Adverse selection precedes contracting, while moral hazard follows it.
- Market efficiency is a statement about exploitable information, not perfect valuation.
