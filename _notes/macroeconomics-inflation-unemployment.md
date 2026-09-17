---
layout: post
title: "Inflation and Unemployment"
date: 2023-06-19
permalink: /notes/macroeconomics/inflation-unemployment/
description: "The Phillips curve, inflation expectations, supply shocks, disinflation, the sacrifice ratio, rational expectations, and hysteresis."
tags: [macroeconomics, inflation, unemployment, phillips-curve]
categories: [course-notes]
course: Macroeconomics
part: "IV. Short-Run Fluctuations and Policy"
chapter: 17
related_posts: false
---

[Macroeconomics]({{ '/notes/macroeconomics/' | relative_url }}) / Chapter 17

## From the Phillips curve to aggregate supply

The original Phillips curve described a negative empirical relation between wage inflation and unemployment. In the short run, stronger aggregate demand can raise output, lower unemployment, and increase price inflation. The relation is not a permanent menu of choices, however. It depends on expectations and supply conditions.

An expectations-augmented Phillips curve is

$$
\pi_t=\pi_t^e-\beta(u_t-u_n)+\nu_t,
$$

where $\pi_t$ is inflation, $\pi_t^e$ expected inflation, $u_t$ unemployment, $u_n$ the natural rate, $\beta>0$, and $\nu_t$ a supply shock. If unemployment is below its natural rate, labor and product markets are tight and inflation tends to exceed what people expected. An adverse supply shock, such as an unexpected rise in energy costs, raises inflation at any unemployment rate.

This equation is another form of short-run aggregate supply. Okun's law links the unemployment gap to the output gap, so low unemployment corresponds to output above potential. Both formulations say that actual inflation differs from expected inflation when activity departs from its sustainable level or supply is disturbed.

## Expectations and the long run

Suppose policymakers create an unexpected demand expansion. Unemployment initially falls below $u_n$, while inflation rises above expectations. Workers and firms eventually revise their expectations upward. Wage and price setting then incorporates the higher expected inflation, shifting the short-run Phillips curve upward. Maintaining unemployment below $u_n$ requires ever-rising inflation.

When expectations are correct and supply shocks average to zero,

$$
\pi_t=\pi_t^e \quad\Longrightarrow\quad u_t=u_n.
$$

The long-run Phillips curve is therefore vertical at the natural rate. Monetary policy can choose the long-run inflation rate but cannot permanently choose a lower unemployment rate. The natural rate itself can change through demographics, matching efficiency, labor-market institutions, taxes, benefits, and technological reallocation; it is not a universal constant.

## Supply shocks and stagflation

An adverse supply shock makes production more costly. In the AD–AS model, short-run aggregate supply shifts left: output falls while the price level rises. In the Phillips-curve representation, $\nu_t>0$ shifts the curve upward, producing both higher inflation and higher unemployment—stagflation.

Policymakers face a difficult choice. Accommodating the shock with stronger demand limits the recession but validates more inflation. Resisting inflation limits the price response but deepens the output and employment loss. The appropriate response depends on how persistent the shock is, how firmly expectations are anchored, and whether second-round wage and price effects develop.

## Disinflation and the sacrifice ratio

Reducing inflation usually requires actual inflation to fall below expected inflation for a time. With no favorable supply shock, the Phillips curve implies

$$
u_t-u_n=\frac{\pi_t^e-\pi_t}{\beta}>0.
$$

Restrictive monetary policy lowers aggregate demand, raises unemployment above its natural rate, and gradually reduces wage and price growth. The sacrifice ratio summarizes the cumulative percentage loss of annual output associated with reducing inflation by one percentage point. It is an empirical statistic, not a structural constant: credibility, wage contracts, indexation, openness, and the speed of adjustment all affect it.

If expectations are adaptive, they move mainly after observed inflation changes, making disinflation gradual and costly. With rational expectations, credible policy can alter beliefs before the full contraction occurs. Yet rational expectations do not guarantee a costless disinflation: contracts are staggered, credibility may be incomplete, and agents may be uncertain about the central bank's objective.

## Credibility and the Volcker disinflation

Time inconsistency creates an inflation bias when policymakers promise low inflation but later have an incentive to exploit a short-run trade-off. A transparent rule, an independent central bank, or a strong reputation can make low-inflation commitments more credible. Credibility reduces the amount of unemployment needed to bring expectations down.

The U.S. disinflation under Federal Reserve Chair Paul Volcker illustrates both the possibility and the cost of breaking entrenched inflation. Tight monetary policy sharply reduced demand and inflation, but the economy experienced severe recessions and high unemployment. The episode supports the expectations-augmented model rather than the claim that credibility alone eliminates real adjustment costs.

## Hysteresis

The natural-rate model treats cyclical unemployment as temporary, but a long recession may leave lasting damage. Workers can lose skills and professional networks; insiders may protect wages while outsiders remain detached; firms may reduce investment and matching capacity. These mechanisms are called hysteresis.

If hysteresis is important, prolonged weak demand can raise the future natural rate or reduce potential output. Stabilization then has longer-run benefits, while an excessively delayed response may permanently reduce employment. The evidence varies across countries and episodes, so hysteresis modifies rather than replaces the natural-rate framework.

## Illustrated reference

{% include macroeconomics-gallery.liquid slug="inflation-unemployment" title="Inflation and Unemployment" %}

## Takeaways

- The short-run inflation–unemployment trade-off depends on expected inflation and supply shocks.
- Once expectations adjust, unemployment returns toward its natural rate and the long-run Phillips curve is vertical.
- Disinflation generally imposes temporary output and employment costs; credibility can reduce, but not necessarily erase, them.
- Supply shocks create stagflation, while hysteresis can make a sufficiently long recession affect potential output itself.
