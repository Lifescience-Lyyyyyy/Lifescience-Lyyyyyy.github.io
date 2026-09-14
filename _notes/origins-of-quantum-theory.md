---
layout: post
title: "Origins of Quantum Theory and Matter Waves"
date: 2025-04-15
permalink: /notes/introduction-to-modern-physics/origins-of-quantum-theory/
description: "Blackbody radiation, photons, the photoelectric effect, atomic spectra, the Bohr model, and de Broglie matter waves."
tags: [modern-physics, quantum-theory, matter-waves]
categories: [course-notes]
course: Introduction to Modern Physics
part: Quantum Mechanics
chapter: 5
related_posts: false
---

[Introduction to Modern Physics]({{ '/notes/introduction-to-modern-physics/' | relative_url }}) / Chapter 5

> These notes mark the transition from classical statistical physics to quantum mechanics. Historical models are presented as motivation, while their limitations are stated explicitly.

## Blackbody radiation

A blackbody is an ideal absorber and emitter in thermal equilibrium. Counting electromagnetic modes in a cavity and assigning $k_BT$ to each classical mode gives the Rayleigh-Jeans spectral energy density

$$
u_{\mathrm{RJ}}(\nu,T)
=\frac{8\pi\nu^2}{c^3}k_BT.
$$

It agrees at low frequency but diverges as $\nu\to\infty$, producing the ultraviolet catastrophe.

Planck resolved the problem by quantizing oscillator energies:

$$
E_n=nh\nu,
\qquad n=0,1,2,\ldots
$$

The resulting spectrum is

$$
u(\nu,T)
=\frac{8\pi h\nu^3}{c^3}
\frac{1}{e^{h\nu/(k_BT)}-1}.
$$

It reduces to Rayleigh-Jeans for $h\nu\ll k_BT$ and is exponentially suppressed for $h\nu\gg k_BT$.

## Photons and the photoelectric effect

Einstein interpreted light quanta as photons with

$$
E=h\nu,
\qquad
p=\frac{h}{\lambda}.
$$

For the photoelectric effect,

$$
K_{\max}=h\nu-\Phi,
$$

where $\Phi$ is the material work function. Frequency controls the maximum electron energy; intensity mainly controls the number of emitted electrons once the threshold is exceeded.

## Atomic spectra and the Bohr model

The discrete hydrogen spectrum suggests discrete energy differences:

$$
h\nu=E_i-E_f.
$$

Bohr combined Coulomb attraction with angular-momentum quantization,

$$
mvr=n\hbar,
$$

to obtain

$$
r_n=a_0n^2,
\qquad
E_n=-\frac{13.6\ \mathrm{eV}}{n^2}.
$$

The model reproduces the hydrogen energy spectrum but is not a general theory of dynamics, measurement, or multielectron atoms.

## de Broglie matter waves

de Broglie proposed that material particles also have wavelength

$$
\lambda=\frac{h}{p},
$$

and angular frequency related to energy by

$$
E=\hbar\omega.
$$

Electron diffraction confirms that particles exhibit interference. The relation does not mean a particle follows a classical sinusoidal trajectory; it associates momentum with the phase variation of a quantum state.

{% include figure.liquid path="assets/img/notes/modern-physics/quantum-origins.png" class="img-fluid rounded z-depth-1" alt="Handwritten blackbody spectrum, photoelectric effect, de Broglie relation, and Bohr-model sketches" caption="The original transition from the blackbody problem to photons, matter waves, and early atomic quantization." %}

## From plane waves to wave packets

A momentum eigenstate has the form

$$
\psi(x,t)=Ae^{i(kx-\omega t)},
\qquad
p=\hbar k,
\qquad
E=\hbar\omega.
$$

An exact plane wave is completely delocalized and cannot represent a localized particle. A physical localized state is a superposition

$$
\psi(x,t)=\frac{1}{\sqrt{2\pi}}
\int_{-\infty}^{\infty}\phi(k)e^{i(kx-\omega(k)t)}\,dk.
$$

The phase velocity $\omega/k$ and group velocity $d\omega/dk$ need not coincide. For a nonrelativistic free particle, the group velocity equals the classical velocity $p/m$.

## Born interpretation

The wavefunction is a complex probability amplitude. The probability density is

$$
\rho(x,t)=\lvert\psi(x,t)\rvert^2,
$$

with normalization

$$
\int_{-\infty}^{\infty}\lvert\psi(x,t)\rvert^2\,dx=1.
$$

Superposition occurs at the amplitude level. Consequently, probabilities contain interference cross terms.

## Takeaways

- Planck quantization cures the ultraviolet catastrophe.
- Photon energy explains the frequency threshold in the photoelectric effect.
- The Bohr model is historically useful but conceptually incomplete.
- Quantum states are probability amplitudes, and localized particles require wave packets.
