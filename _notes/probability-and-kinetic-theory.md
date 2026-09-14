---
layout: post
title: "Probability and Kinetic Theory"
date: 2025-02-18
permalink: /notes/introduction-to-modern-physics/probability-and-kinetic-theory/
description: "Probability distributions, information entropy, phase-space averages, and the Maxwell-Boltzmann velocity distribution."
tags: [modern-physics, probability, kinetic-theory]
categories: [course-notes]
course: Introduction to Modern Physics
part: Thermal and Statistical Physics
chapter: 1
related_posts: false
---

[Introduction to Modern Physics]({{ '/notes/introduction-to-modern-physics/' | relative_url }}) / Chapter 1

> These notes reorganize the opening lectures on probability and kinetic theory. The original Chinese notation has been translated and standardized, with normalization factors and thermodynamic interpretations checked explicitly.

## Random variables and distributions

A continuous random variable $X$ with probability density $p(x)$ satisfies

$$
p(x)\ge 0,
\qquad
\int_{-\infty}^{\infty}p(x)\,dx=1.
$$

For any function $g(X)$,

$$
\mathbb E[g(X)]=\int g(x)p(x)\,dx.
$$

The mean and variance are

$$
\mu=\mathbb E[X],
\qquad
\sigma^2=\mathbb E[(X-\mu)^2]
=\mathbb E[X^2]-\mu^2.
$$

For jointly distributed variables $X$ and $Y$, independence means

$$
p(x,y)=p_X(x)p_Y(y).
$$

Uncorrelated variables have zero covariance, but zero covariance alone does not generally imply independence.

## Gaussian distributions

The one-dimensional normal distribution is

$$
p(x)=\frac{1}{\sqrt{2\pi\sigma^2}}
\exp\left[-\frac{(x-\mu)^2}{2\sigma^2}\right].
$$

In $d$ dimensions, with mean vector $\mu$ and covariance matrix $\Sigma$,

$$
p(x)=\frac{1}{(2\pi)^{d/2}\lvert\Sigma\rvert^{1/2}}
\exp\left[-\frac12(x-\mu)^\top\Sigma^{-1}(x-\mu)\right].
$$

Gaussian distributions arise naturally when a macroscopic observable is a sum of many weakly dependent microscopic contributions.

## Information entropy

For discrete probabilities $p_i$, Shannon entropy is

$$
H=-\sum_i p_i\log p_i.
$$

Entropy measures uncertainty in a probability distribution. It is maximized by the uniform distribution when only the number of possible states is fixed. Statistical mechanics connects this probabilistic quantity to thermodynamic entropy through

$$
S=k_B\log\Omega
$$

for a macrostate with $\Omega$ equally likely microstates.

## Phase-space description

For $N$ classical particles, a microstate is a point in the $6N$-dimensional phase space

$$
\Gamma=(q_1,\ldots,q_{3N},p_1,\ldots,p_{3N}).
$$

A normalized phase-space density $\rho(\Gamma)$ gives ensemble averages:

$$
\langle A\rangle
=\int A(\Gamma)\rho(\Gamma)\,d\Gamma.
$$

The microscopic state changes in time, whereas equilibrium thermodynamics describes stable averages of macroscopic observables.

## Maxwell-Boltzmann velocities

For a dilute classical ideal gas at temperature $T$, each Cartesian velocity component is Gaussian:

$$
p(v_x)=\sqrt{\frac{m}{2\pi k_BT}}
\exp\left(-\frac{mv_x^2}{2k_BT}\right).
$$

Independence of the three components gives

$$
p(\mathbf v)
=\left(\frac{m}{2\pi k_BT}\right)^{3/2}
\exp\left(-\frac{m\lVert\mathbf v\rVert^2}{2k_BT}\right).
$$

Integrating over solid angle yields the speed distribution

$$
f(v)=4\pi\left(\frac{m}{2\pi k_BT}\right)^{3/2}
v^2\exp\left(-\frac{mv^2}{2k_BT}\right),
\qquad v\ge0.
$$

The characteristic speeds are

$$
v_{\mathrm{mp}}=\sqrt{\frac{2k_BT}{m}},
\qquad
\langle v\rangle=\sqrt{\frac{8k_BT}{\pi m}},
\qquad
v_{\mathrm{rms}}=\sqrt{\frac{3k_BT}{m}}.
$$

They are different summaries of the same asymmetric speed distribution.

## Equipartition

Every independent quadratic term in the classical Hamiltonian contributes $k_BT/2$ to the mean energy. Thus a monatomic ideal gas has

$$
\langle E\rangle=\frac32Nk_BT,
\qquad
C_V=\frac32Nk_B.
$$

Equipartition is a classical high-temperature result. It fails when quantum energy-level spacings are not small compared with $k_BT$.

## Derivation notebook

### Maxwell speed distribution from component velocities

Thermal equilibrium makes the three Cartesian components independent Gaussians:

$$
p(v_x,v_y,v_z)=\left(\frac{m}{2\pi k_BT}\right)^{3/2}
\exp\!\left[-\frac{m(v_x^2+v_y^2+v_z^2)}{2k_BT}\right].
$$

All directions with speed between $v$ and $v+dv$ occupy a spherical shell of volume $4\pi v^2dv$ in velocity space. Integrating over direction therefore gives

$$
f(v)=4\pi\left(\frac{m}{2\pi k_BT}\right)^{3/2}
v^2e^{-mv^2/(2k_BT)},\qquad v\ge0.
$$

For the most probable speed, differentiate $\log f(v)$:

$$
\frac{d}{dv}\log f(v)=\frac2v-\frac{mv}{k_BT}=0
\quad\Rightarrow\quad
v_{\mathrm{mp}}=\sqrt{\frac{2k_BT}{m}}.
$$

Using Gaussian integrals gives $\langle v^2\rangle=3k_BT/m$ and hence
$v_{\mathrm{rms}}=\sqrt{3k_BT/m}$.

### Equipartition from a Gaussian integral

For one quadratic degree of freedom with energy $\epsilon=ax^2/2$, let

$$
Z_x=\int_{-\infty}^{\infty}e^{-\beta ax^2/2}\,dx
=\sqrt{\frac{2\pi}{\beta a}}.
$$

Then

$$
\langle\epsilon\rangle
=-\frac{\partial}{\partial\beta}\log Z_x
=\frac{1}{2\beta}=\frac12k_BT.
$$

Each independent quadratic coordinate or momentum therefore contributes $k_BT/2$ to the mean energy.

## Takeaways

- Probability distributions translate microscopic uncertainty into measurable averages.
- Gaussian component velocities produce the Maxwell distribution of speeds.
- Information entropy and thermodynamic entropy share the same logarithmic structure.
- Equipartition is useful but has a limited domain of validity.
