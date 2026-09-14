---
layout: post
title: "Scattering, Oscillators, Angular Momentum, and Identical Particles"
date: 2025-06-10
permalink: /notes/introduction-to-modern-physics/scattering-oscillator-angular-momentum-and-identical-particles/
description: "Reflection and transmission, the harmonic oscillator, three-dimensional central potentials, hydrogen, and exchange symmetry."
tags: [modern-physics, harmonic-oscillator, angular-momentum, identical-particles]
categories: [course-notes]
course: Introduction to Modern Physics
part: Quantum Mechanics
chapter: 8
related_posts: false
---

[Introduction to Modern Physics]({{ '/notes/introduction-to-modern-physics/' | relative_url }}) / Chapter 8

> These notes combine the final model systems of the course. The original derivations have been shortened to emphasize reusable structures: flux conservation, dimensionless reduction, separation of variables, and exchange symmetry.

## One-dimensional scattering

For a stationary scattering state incident from the left,

$$
\psi(x)=
\begin{cases}
Ae^{ikx}+Be^{-ikx},&x\to-\infty,\\
Ce^{iqx},&x\to+\infty.
\end{cases}
$$

Reflection and transmission must be defined using probability currents:

$$
R=\frac{\lvert j_{\mathrm{ref}}\rvert}{j_{\mathrm{in}}},
\qquad
T=\frac{j_{\mathrm{trans}}}{j_{\mathrm{in}}}.
$$

For a real time-independent potential with no absorption,

$$
R+T=1.
$$

The ratio $T=\lvert C/A\rvert^2$ is valid only when the incident and transmitted wave numbers are equal; otherwise a velocity factor is required.

## Harmonic oscillator

The one-dimensional oscillator Hamiltonian is

$$
\hat H
=\frac{\hat p^2}{2m}+\frac12m\omega^2\hat x^2.
$$

Define ladder operators

$$
\hat a
=\sqrt{\frac{m\omega}{2\hbar}}\hat x
+\frac{i}{\sqrt{2m\hbar\omega}}\hat p,
$$

$$
\hat a^\dagger
=\sqrt{\frac{m\omega}{2\hbar}}\hat x
-\frac{i}{\sqrt{2m\hbar\omega}}\hat p.
$$

They satisfy $[\hat a,\hat a^\dagger]=1$, and

$$
\hat H=\hbar\omega\left(\hat a^\dagger\hat a+\frac12\right).
$$

Therefore

$$
E_n=\hbar\omega\left(n+\frac12\right),
\qquad n=0,1,2,\ldots
$$

The ground state is Gaussian, and excited states are Gaussian envelopes multiplied by Hermite polynomials.

{% include figure.liquid path="assets/img/notes/modern-physics/scattering-and-oscillator.png" class="img-fluid rounded z-depth-1" alt="Handwritten finite-well, scattering, and harmonic-oscillator sketches" caption="Potential profiles, scattering behavior, and the parabolic harmonic-oscillator model in the original notes." %}

## Three-dimensional separation

For a separable Cartesian potential

$$
V(x,y,z)=V_x(x)+V_y(y)+V_z(z),
$$

the wavefunction factorizes and the energies add. For a central potential $V(r)$, spherical coordinates separate the wavefunction as

$$
\psi(r,\theta,\phi)=R_{n\ell}(r)Y_\ell^m(\theta,\phi).
$$

The angular functions satisfy

$$
\hat L^2Y_\ell^m
=\hbar^2\ell(\ell+1)Y_\ell^m,
\qquad
\hat L_zY_\ell^m
=\hbar mY_\ell^m,
$$

with $\ell=0,1,2,\ldots$ and $m=-\ell,\ldots,\ell$.

## Radial equation

Writing $u(r)=rR(r)$ gives

$$
-\frac{\hbar^2}{2m}\frac{d^2u}{dr^2}
+\left[V(r)+\frac{\hbar^2\ell(\ell+1)}{2mr^2}\right]u
=Eu.
$$

The second term is the centrifugal barrier. Regularity requires $u(0)=0$ for nonsingular physical states.

## Hydrogen atom

For

$$
V(r)=-\frac{e^2}{4\pi\varepsilon_0r},
$$

the bound-state energies are

$$
E_n=-\frac{13.6\ \mathrm{eV}}{n^2},
\qquad n=1,2,\ldots
$$

In the nonrelativistic Coulomb problem, the energy depends only on $n$, producing degeneracy across allowed $\ell$ and $m$. Fine structure, external fields, and spin interactions lift parts of this degeneracy.

{% include figure.liquid path="assets/img/notes/modern-physics/hydrogen-atom.png" class="img-fluid rounded z-depth-1" alt="Handwritten reduction of the hydrogen atom to a radial equation" caption="The hydrogen Hamiltonian and radial reduction, including the Coulomb potential and angular-momentum barrier." %}

## Identical particles

For identical particles, exchanging labels cannot change observable probabilities. Two-particle states obey

$$
\psi(x_1,x_2)=+\psi(x_2,x_1)
$$

for bosons and

$$
\psi(x_1,x_2)=-\psi(x_2,x_1)
$$

for fermions.

Given orthonormal one-particle states $\phi_a$ and $\phi_b$, normalized two-particle states are

$$
\psi_{\pm}(x_1,x_2)
=\frac1{\sqrt2}
\left[
\phi_a(x_1)\phi_b(x_2)
\pm
\phi_b(x_1)\phi_a(x_2)
\right].
$$

For fermions, using the same one-particle state twice makes the antisymmetric state vanish. This is the Pauli exclusion principle.

For $N$ fermions, antisymmetrization is compactly represented by a Slater determinant. Exchange symmetry also changes spatial correlations even when the particles do not interact dynamically.

## Derivation notebook

### Reflection and transmission from probability current

For a plane wave $Ae^{ikx}$, the current is

$$
j=\frac{\hbar k}{m}\lvert A\rvert^2.
$$

If the asymptotic wavefunctions are

$$
\psi_L=Ae^{ik_Lx}+Be^{-ik_Lx},
\qquad
\psi_R=Ce^{ik_Rx},
$$

then incident, reflected, and transmitted current magnitudes are proportional to
$k_L\lvert A\rvert^2$, $k_L\lvert B\rvert^2$, and $k_R\lvert C\rvert^2$. Therefore

$$
R=\frac{\lvert B\rvert^2}{\lvert A\rvert^2},
\qquad
T=\frac{k_R}{k_L}\frac{\lvert C\rvert^2}{\lvert A\rvert^2}.
$$

The factor $k_R/k_L$ is essential: transmission is a ratio of currents, not merely amplitudes.

### Harmonic-oscillator spectrum from ladder operators

Define

$$
a=\sqrt{\frac{m\omega}{2\hbar}}x
+\frac{i}{\sqrt{2m\hbar\omega}}p,
\qquad [a,a^\dagger]=1.
$$

Direct substitution into $H=p^2/(2m)+m\omega^2x^2/2$ gives

$$
H=\hbar\omega\left(a^\dagger a+\frac12\right)
=\hbar\omega\left(N+\frac12\right).
$$

Since $N=a^\dagger a$ is nonnegative, repeated lowering must terminate at a state satisfying $a\lvert0\rangle=0$. The commutator $[N,a^\dagger]=a^\dagger$ then generates eigenstates with integer eigenvalues:

$$
N\lvert n\rangle=n\lvert n\rangle,
\qquad
E_n=\hbar\omega\left(n+\frac12\right).
$$

### Radial reduction for central potentials

Writing $\psi(r,\theta,\phi)=R(r)Y_{\ell m}(\theta,\phi)$ and using
$L^2Y_{\ell m}=\hbar^2\ell(\ell+1)Y_{\ell m}$ gives

$$
-\frac{\hbar^2}{2m}\left[
\frac1{r^2}\frac{d}{dr}\left(r^2\frac{dR}{dr}\right)
-\frac{\ell(\ell+1)}{r^2}R\right]+V(r)R=ER.
$$

Set $u(r)=rR(r)$. Then the first-derivative structure collapses and the equation becomes one-dimensional:

$$
-\frac{\hbar^2}{2m}\frac{d^2u}{dr^2}
+\left[V(r)+\frac{\hbar^2\ell(\ell+1)}{2mr^2}\right]u=Eu.
$$

The second term in brackets is the centrifugal barrier, which explains why states with larger $\ell$ are suppressed near the origin.

### Antisymmetry and the Pauli exclusion principle

For two identical fermions in one-particle states $a$ and $b$, the normalized state is

$$
\Psi(1,2)=\frac1{\sqrt2}
\left[\phi_a(1)\phi_b(2)-\phi_b(1)\phi_a(2)\right].
$$

If $a=b$, the two terms cancel exactly, so $\Psi=0$. Thus two fermions cannot occupy the same complete one-particle state. For electrons, the total state includes spin; a symmetric spin triplet requires an antisymmetric spatial state, while the antisymmetric singlet permits a symmetric spatial state.

## Takeaways

- Scattering probabilities are flux ratios, not always simple amplitude squares.
- The oscillator algebra exposes equally spaced levels and zero-point energy.
- Central potentials separate into radial and angular equations.
- Bosons occupy symmetric states; fermions occupy antisymmetric states and obey Pauli exclusion.
