---
layout: post
title: "Schrödinger Dynamics and One-Dimensional Potentials"
date: 2025-05-13
permalink: /notes/introduction-to-modern-physics/schrodinger-dynamics-and-one-dimensional-potentials/
description: "Time evolution, stationary states, probability current, wave packets, infinite wells, delta potentials, barriers, and tunnelling."
tags: [modern-physics, schrodinger-equation, tunnelling]
categories: [course-notes]
course: Introduction to Modern Physics
part: Quantum Mechanics
chapter: 7
related_posts: false
---

[Introduction to Modern Physics]({{ '/notes/introduction-to-modern-physics/' | relative_url }}) / Chapter 7

> These notes reorganize the lectures on quantum dynamics and one-dimensional model potentials. Boundary conditions and the distinction between bound and scattering states have been made explicit.

## Time-dependent Schrödinger equation

For a nonrelativistic particle in a potential $V(x,t)$,

$$
i\hbar\frac{\partial\psi}{\partial t}
=\left[-\frac{\hbar^2}{2m}\frac{\partial^2}{\partial x^2}+V(x,t)\right]\psi.
$$

The equation is first order in time, so specifying the initial wavefunction determines later evolution. Its linearity produces the superposition principle.

## Stationary states

If $V$ is time independent, separation of variables gives

$$
\psi_n(x,t)=\phi_n(x)e^{-iE_nt/\hbar},
$$

where

$$
\left[-\frac{\hbar^2}{2m}\frac{d^2}{dx^2}+V(x)\right]\phi_n(x)
=E_n\phi_n(x).
$$

The probability density of an energy eigenstate is time independent:

$$
\lvert\psi_n(x,t)\rvert^2=\lvert\phi_n(x)\rvert^2.
$$

A general state is a superposition

$$
\psi(x,t)=\sum_n c_n\phi_n(x)e^{-iE_nt/\hbar},
$$

or an integral over energy for a continuous spectrum.

## Probability conservation

The probability density and current are

$$
\rho=\lvert\psi\rvert^2,
\qquad
j=\frac{\hbar}{m}\operatorname{Im}
\left(\psi^{\ast}\frac{\partial\psi}{\partial x}\right).
$$

They satisfy the continuity equation

$$
\frac{\partial\rho}{\partial t}
+\frac{\partial j}{\partial x}=0.
$$

For suitable boundary conditions, integration over space proves conservation of total probability.

## Free-particle wave packets

A localized free particle is built from momentum eigenstates:

$$
\psi(x,t)
=\frac{1}{\sqrt{2\pi\hbar}}
\int\phi(p)e^{i(px-E_pt)/\hbar}\,dp,
\qquad
E_p=\frac{p^2}{2m}.
$$

Because $E_p$ is nonlinear in $p$, different Fourier components accumulate phase at different rates and a free wave packet generally spreads.

{% include figure.liquid path="assets/img/notes/modern-physics/wave-packet.png" class="img-fluid rounded z-depth-1" alt="Handwritten plane-wave envelope and wave-packet sketch" caption="A localized matter wave is an envelope formed by superposing plane waves with nearby momenta." %}

## Infinite square well

For

$$
V(x)=
\begin{cases}
0,&0<x<L,\\
\infty,&\text{otherwise},
\end{cases}
$$

the boundary conditions $\phi(0)=\phi(L)=0$ give

$$
\phi_n(x)=\sqrt{\frac2L}\sin\frac{n\pi x}{L},
\qquad
E_n=\frac{n^2\pi^2\hbar^2}{2mL^2},
$$

with $n=1,2,\ldots$. The nonzero ground-state energy follows from confinement and the uncertainty principle.

## Finite wells and bound states

For a finite well, a bound state has oscillatory behavior in the classically allowed region and exponential decay outside. The wavefunction and its first derivative are continuous at finite potential discontinuities.

A symmetric potential has eigenfunctions of definite parity. In one dimension, bound-state energy eigenvalues of a regular potential are nondegenerate.

## Attractive delta potential

For

$$
V(x)=-g\delta(x),
\qquad g>0,
$$

there is exactly one bound state,

$$
\phi(x)=\sqrt{\kappa}e^{-\kappa\lvert x\rvert},
\qquad
\kappa=\frac{mg}{\hbar^2},
$$

with energy

$$
E=-\frac{mg^2}{2\hbar^2}.
$$

The wavefunction is continuous, but integrating the Schrödinger equation across the delta function gives a derivative jump.

{% include figure.liquid path="assets/img/notes/modern-physics/quantum-wells.png" class="img-fluid rounded z-depth-1" alt="Handwritten infinite-well and delta-potential solutions" caption="The original comparison of quantized well states and the localized bound state of an attractive delta potential." %}

## Barriers and tunnelling

For a rectangular barrier with $E<V_0$, the wavefunction decays within the barrier but does not vanish. Matching the wavefunction and its derivative produces a nonzero transmission probability. In the thick-barrier limit,

$$
T\propto e^{-2\kappa a},
\qquad
\kappa=\frac{\sqrt{2m(V_0-E)}}{\hbar}.
$$

Quantum tunnelling is therefore exponentially sensitive to barrier width, particle mass, and the energy deficit $V_0-E$.

## Derivation notebook

### Continuity equation from Schrödinger dynamics

Start with the Schrödinger equation and its complex conjugate:

$$
i\hbar\partial_t\psi=-\frac{\hbar^2}{2m}\partial_x^2\psi+V\psi,
\qquad
-i\hbar\partial_t\psi^{\ast}=-\frac{\hbar^2}{2m}\partial_x^2\psi^{\ast}+V\psi^{\ast}.
$$

Multiply the first by $\psi^{\ast}$, the second by $\psi$, and subtract. The real-potential terms cancel, leaving

$$
\partial_t\lvert\psi\rvert^2
=-\partial_x\!\left[
\frac{\hbar}{2mi}(\psi^{\ast}\partial_x\psi-\psi\partial_x\psi^{\ast})
\right].
$$

Thus $\partial_t\rho+\partial_xj=0$, with

$$
\rho=\lvert\psi\rvert^2,
\qquad
j=\frac{\hbar}{m}\operatorname{Im}(\psi^{\ast}\partial_x\psi).
$$

### Infinite-well quantization

Inside a well $0<x<L$, the stationary equation is

$$
\psi''+k^2\psi=0,
\qquad k^2=\frac{2mE}{\hbar^2},
$$

with solution $\psi=A\sin kx+B\cos kx$. The boundary condition $\psi(0)=0$ forces $B=0$, while $\psi(L)=0$ requires

$$
\sin(kL)=0\quad\Rightarrow\quad kL=n\pi.
$$

Hence

$$
E_n=\frac{\hbar^2k_n^2}{2m}
=\frac{n^2\pi^2\hbar^2}{2mL^2},
\qquad
\psi_n(x)=\sqrt{\frac2L}\sin\frac{n\pi x}{L}.
$$

The discrete spectrum is not an added postulate; it follows from solving the differential equation with both boundary conditions.

### Bound state of an attractive delta potential

For $V(x)=-g\delta(x)$ with $g>0$ and $E=-\hbar^2\kappa^2/(2m)$, normalizability gives
$\psi=Ae^{-\kappa\lvert x\rvert}$. Integrating the Schrödinger equation across an infinitesimal interval around zero gives the derivative jump

$$
\psi'(0^+)-\psi'(0^-)=-\frac{2mg}{\hbar^2}\psi(0).
$$

For the exponential solution the left side is $-2\kappa A$, so

$$
\kappa=\frac{mg}{\hbar^2},
\qquad
E=-\frac{mg^2}{2\hbar^2}.
$$

This shows directly why the one-dimensional attractive delta potential has exactly one bound state.

## Takeaways

- Stationary states acquire only a phase under time evolution.
- Probability conservation follows from the Schrödinger equation and its current.
- Confinement quantizes energy, while finite barriers permit evanescent penetration.
- Tunnelling is a wave effect with no classical trajectory through the forbidden region.
