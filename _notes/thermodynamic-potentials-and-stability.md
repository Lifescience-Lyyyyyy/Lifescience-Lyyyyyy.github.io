---
layout: post
title: "Thermodynamic Potentials, Stability, and Phase Equilibrium"
date: 2025-03-18
permalink: /notes/introduction-to-modern-physics/thermodynamic-potentials-and-stability/
description: "Legendre transforms, Maxwell relations, response functions, stability criteria, chemical potential, and phase coexistence."
tags: [modern-physics, thermodynamic-potentials, phase-equilibrium]
categories: [course-notes]
course: Introduction to Modern Physics
part: Thermal and Statistical Physics
chapter: 3
related_posts: false
---

[Introduction to Modern Physics]({{ '/notes/introduction-to-modern-physics/' | relative_url }}) / Chapter 3

> These notes collect the equilibrium and stability arguments from the middle thermodynamics lectures. Natural variables and signs have been made consistent across all potentials.

## Fundamental relation

For a one-component simple compressible system,

$$
dU=T\,dS-P\,dV+\mu\,dN.
$$

The intensive variables follow from derivatives of $U(S,V,N)$:

$$
T=\left(\frac{\partial U}{\partial S}\right)_{V,N},
\qquad
P=-\left(\frac{\partial U}{\partial V}\right)_{S,N},
\qquad
\mu=\left(\frac{\partial U}{\partial N}\right)_{S,V}.
$$

## Legendre transforms

Different experimental constraints motivate different thermodynamic potentials:

$$
H=U+PV,
\qquad
F=U-TS,
\qquad
G=U+PV-TS.
$$

Their differentials are

$$
dH=T\,dS+V\,dP+\mu\,dN,
$$

$$
dF=-S\,dT-P\,dV+\mu\,dN,
$$

$$
dG=-S\,dT+V\,dP+\mu\,dN.
$$

At fixed $T,V,N$, equilibrium minimizes $F$. At fixed $T,P,N$, it minimizes $G$. These minimum principles include the environment implicitly and are more useful than maximizing the entropy of the system alone under non-isolated conditions.

## Maxwell relations

Equality of mixed partial derivatives produces Maxwell relations. From $F(T,V,N)$,

$$
S=-\left(\frac{\partial F}{\partial T}\right)_{V,N},
\qquad
P=-\left(\frac{\partial F}{\partial V}\right)_{T,N},
$$

so

$$
\left(\frac{\partial S}{\partial V}\right)_{T,N}
=\left(\frac{\partial P}{\partial T}\right)_{V,N}.
$$

From $G(T,P,N)$,

$$
\left(\frac{\partial S}{\partial P}\right)_{T,N}
=-\left(\frac{\partial V}{\partial T}\right)_{P,N}.
$$

## Response functions

Important measurable response functions include

$$
C_V=T\left(\frac{\partial S}{\partial T}\right)_V,
\qquad
C_P=T\left(\frac{\partial S}{\partial T}\right)_P,
$$

$$
\kappa_T=-\frac1V\left(\frac{\partial V}{\partial P}\right)_T,
\qquad
\alpha=\frac1V\left(\frac{\partial V}{\partial T}\right)_P.
$$

For a stable ordinary system, $C_V>0$ and $\kappa_T>0$. A negative isothermal compressibility would make a homogeneous state mechanically unstable.

## Stability as curvature

Entropy is concave in its extensive variables, while energy is convex. For two subsystems exchanging energy at fixed total energy,

$$
\delta S_{\mathrm{tot}}=0
$$

at equilibrium, giving $T_A=T_B$. Stability additionally requires

$$
\delta^2S_{\mathrm{tot}}<0.
$$

Analogous arguments for volume exchange give mechanical equilibrium $P_A=P_B$. The Hessian of the relevant potential determines whether a stationary state is a stable minimum or maximum under the imposed constraints.

## Euler and Gibbs-Duhem relations

Extensivity gives the Euler relation

$$
U=TS-PV+\mu N.
$$

Differentiating and comparing with the fundamental relation yields

$$
S\,dT-V\,dP+N\,d\mu=0.
$$

This Gibbs-Duhem equation shows that the intensive variables are not all independent.

## Phase coexistence

Two phases $\alpha$ and $\beta$ coexist at equilibrium when

$$
T_\alpha=T_\beta,
\qquad
P_\alpha=P_\beta,
\qquad
\mu_\alpha=\mu_\beta.
$$

Along a coexistence curve, the Clapeyron equation is

$$
\frac{dP}{dT}
=\frac{\Delta S}{\Delta V}
=\frac{L}{T\Delta V},
$$

where $L=T\Delta S$ is the latent heat per particle or per mole, consistently with the chosen normalization.

## Takeaways

- A thermodynamic potential is selected by the variables controlled by the environment.
- Maxwell relations convert difficult entropy derivatives into measurable equations of state.
- Equilibrium requires stationarity; stability requires the correct curvature.
- Phase coexistence requires equal temperature, pressure, and chemical potential.
