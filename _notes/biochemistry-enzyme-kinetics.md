---
layout: post
title: "Enzyme Kinetics"
date: 2023-10-31
permalink: /notes/biochemistry/enzyme-kinetics/
description: "Michaelis-Menten kinetics, derivation, parameter interpretation, inhibition, multisubstrate reactions, and allostery."
tags: [biochemistry, enzyme-kinetics, inhibition, allostery]
categories: [course-notes]
course: Biochemistry
part: "II. Protein Function and Enzymes"
chapter: 9
related_posts: false
---

[Biochemistry]({{ '/notes/biochemistry/' | relative_url }}) / Chapter 9

## Initial-rate experiments

For the minimal mechanism

$$
E+S\mathop{\rightleftharpoons}^{k_1}_{k_{-1}}ES
\mathop{\longrightarrow}^{k_2}E+P,
$$

measure the initial rate so that product is negligible and the reverse product reaction can be ignored. Product formation is

$$
v_0=k_2[ES].
$$

## Steady-state derivation

The steady-state approximation sets formation and loss of $ES$ equal:

$$
\frac{d[ES]}{dt}=k_1[E][S]-(k_{-1}+k_2)[ES]\simeq0.
$$

Define

$$
K_M=\frac{k_{-1}+k_2}{k_1}.
$$

Using enzyme conservation, $[E]\sb{T}=[E]+[ES]$, we obtain

$$
[ES]=\frac{[E]_T[S]}{K_M+[S]}.
$$

Therefore

$$
v_0=\frac{V_{\max}[S]}{K_M+[S]},
\qquad
V_{\max}=k_{\mathrm{cat}}[E]_T.
$$

At $[S]=K_M$, $v_0=V_{\max}/2$. $K_M$ equals a dissociation constant only when product formation is much slower than ES dissociation. In general it is a kinetic composite, not a pure affinity measurement.

At low substrate, $v\sb{0}\simeq(k\sb{\mathrm{cat}}/K\sb{M})[E]\sb{T}[S]$; the specificity constant $k\sb{\mathrm{cat}}/K\sb{M}$ describes productive capture. At saturating substrate, $v\sb{0}\simeq k\sb{\mathrm{cat}}[E]\sb{T}$.

## Linear plots and modern fitting

The Lineweaver-Burk transformation is

$$
\frac1{v_0}=\frac{K_M}{V_{\max}}\frac1{[S]}+\frac1{V_{\max}}.
$$

It is visually useful for recognizing classic inhibition patterns, but it magnifies error at low substrate. Nonlinear regression of the original Michaelis-Menten equation is generally preferable for parameter estimation.

## Reversible inhibition

For competitive inhibition, inhibitor binds free enzyme. The apparent $K_M$ increases, while $V_{\max}$ is unchanged:

$$
v_0=\frac{V_{\max}[S]}{\alpha K_M+[S]},
\qquad
\alpha=1+\frac{[I]}{K_I}.
$$

For pure uncompetitive inhibition, inhibitor binds only $ES$. Both apparent $K_M$ and $V_{\max}$ decrease by the same factor:

$$
v_0=\frac{V_{\max}[S]}{K_M+\alpha'[S]},
\qquad
\alpha'=1+\frac{[I]}{K_I'}.
$$

Mixed inhibition allows binding to both $E$ and $ES$:

$$
v_0=\frac{V_{\max}[S]}{\alpha K_M+\alpha'[S]}.
$$

Pure noncompetitive inhibition is the special case $\alpha=\alpha'$, in which $V_{\max}$ falls but $K_M$ is unchanged. Real inhibitors may also be irreversible, time dependent, substrate dependent, or mechanistically more complex than these ideal models.

## Multisubstrate reactions

Sequential mechanisms form a ternary complex before product release; substrates may bind in an ordered or random sequence. Ping-pong mechanisms release one product before the second substrate binds and pass through a covalently or chemically modified enzyme intermediate. Initial-rate patterns and product inhibition can distinguish these mechanisms.

## Allosteric kinetics

Allosteric enzymes often do not follow Michaelis-Menten kinetics. Cooperative substrate binding can yield a sigmoidal response described empirically by

$$
v=V_{\max}\frac{[S]^{n_H}}{K_{0.5}^{n_H}+[S]^{n_H}}.
$$

Activators and inhibitors may change $K_{0.5}$, $V_{\max}$, or both by shifting conformational populations. The Hill coefficient describes response steepness over a range; it is not a complete molecular mechanism.

## Illustrated reference

{% include biochemistry-gallery.liquid slug="enzyme-kinetics" title="Enzyme Kinetics" %}

## Takeaways

- The Michaelis-Menten equation follows from enzyme conservation and a steady-state approximation.
- $K_M$, $k_{\mathrm{cat}}$, and $k_{\mathrm{cat}}/K_M$ answer different kinetic questions.
- Inhibition patterns reflect which enzyme states the inhibitor binds.
- Multisubstrate and allosteric enzymes require mechanisms beyond the simplest one-substrate model.
