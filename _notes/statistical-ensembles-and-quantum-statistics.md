---
layout: post
title: "Statistical Ensembles and Quantum Statistics"
date: 2025-04-08
permalink: /notes/introduction-to-modern-physics/statistical-ensembles-and-quantum-statistics/
description: "Microcanonical, canonical, and grand-canonical ensembles; partition functions; ideal gases; Bose-Einstein and Fermi-Dirac statistics."
tags: [modern-physics, ensembles, quantum-statistics]
categories: [course-notes]
course: Introduction to Modern Physics
part: Thermal and Statistical Physics
chapter: 4
related_posts: false
---

[Introduction to Modern Physics]({{ '/notes/introduction-to-modern-physics/' | relative_url }}) / Chapter 4

> These notes reorganize the statistical-mechanics lectures from ensembles to quantum gases. The distinction between a many-body state, a one-particle level, and its occupation number is kept explicit.

## Microcanonical ensemble

An isolated system has fixed $E,V,N$. If all accessible microstates in a narrow energy shell are equally likely,

$$
p_i=\frac1\Omega,
\qquad
S=k_B\log\Omega(E,V,N).
$$

Temperature and pressure emerge from entropy derivatives:

$$
\frac1T=\left(\frac{\partial S}{\partial E}\right)_{V,N},
\qquad
\frac PT=\left(\frac{\partial S}{\partial V}\right)_{E,N}.
$$

## Canonical ensemble

A system weakly coupled to a heat bath has fixed $T,V,N$. The probability of energy eigenstate $i$ is

$$
p_i=\frac{e^{-\beta E_i}}{Z},
\qquad
Z=\sum_i e^{-\beta E_i},
\qquad
\beta=\frac1{k_BT}.
$$

The partition function contains the thermodynamics:

$$
F=-k_BT\log Z,
\qquad
U=-\frac{\partial\log Z}{\partial\beta},
$$

$$
S=k_B(\log Z+\beta U),
\qquad
C_V=k_B\beta^2\operatorname{Var}(E).
$$

The heat capacity is nonnegative in the canonical ensemble because it is proportional to an energy variance.

## Classical ideal gas

For $N$ indistinguishable, noninteracting particles,

$$
Z_N=\frac{z_1^N}{N!},
$$

where the translational one-particle partition function is

$$
z_1=\frac{V}{\lambda_T^3},
\qquad
\lambda_T=\frac{h}{\sqrt{2\pi mk_BT}}.
$$

The factor $1/N!$ prevents the Gibbs paradox in the classical dilute limit. Stirling's approximation then produces the Sackur-Tetrode entropy up to the chosen convention for the phase-space cell.

## Grand-canonical ensemble

When both energy and particles can be exchanged, $T,V,\mu$ are fixed. The grand partition function is

$$
\Xi=\sum_{N=0}^{\infty}e^{\beta\mu N}Z_N,
$$

and the grand potential is

$$
\Phi_G=-k_BT\log\Xi=-PV.
$$

The mean particle number is

$$
\langle N\rangle
=\frac1\beta\left(\frac{\partial\log\Xi}{\partial\mu}\right)_{T,V}.
$$

## Bose-Einstein and Fermi-Dirac distributions

For a one-particle level of energy $\varepsilon$, the mean occupation is

$$
\bar n_{\mathrm B}(\varepsilon)
=\frac{1}{e^{\beta(\varepsilon-\mu)}-1}
$$

for bosons and

$$
\bar n_{\mathrm F}(\varepsilon)
=\frac{1}{e^{\beta(\varepsilon-\mu)}+1}
$$

for fermions. At low occupation, both reduce to the Maxwell-Boltzmann form $e^{-\beta(\varepsilon-\mu)}$.

{% include figure.liquid path="assets/img/notes/modern-physics/quantum-statistics.png" class="img-fluid rounded z-depth-1" alt="Handwritten derivation of Bose-Einstein and Fermi-Dirac occupation factors" caption="The original comparison of bosonic and fermionic occupation numbers in the grand-canonical ensemble." %}

## Bose-Einstein condensation

For a three-dimensional ideal Bose gas, the excited states can hold at most

$$
N_{\mathrm{ex}}
=\frac{V}{\lambda_T^3}\zeta\left(\frac32\right)
$$

particles when $\mu\to0^-$. Below the critical temperature,

$$
T_c
=\frac{2\pi\hbar^2}{mk_B}
\left[\frac{n}{\zeta(3/2)}\right]^{2/3},
$$

and the macroscopic remainder occupies the ground state:

$$
\frac{N_0}{N}=1-\left(\frac{T}{T_c}\right)^{3/2}.
$$

This is condensation in momentum space, not an attractive-force collapse.

## Fermi gas and the Fermi energy

At $T=0$, fermions fill all one-particle states up to the Fermi energy. For a spin-$1/2$ ideal gas in three dimensions,

$$
k_F=(3\pi^2n)^{1/3},
\qquad
E_F=\frac{\hbar^2k_F^2}{2m}.
$$

Only particles within an energy window of order $k_BT$ around $E_F$ respond thermally when $T\ll T_F$.

## Photon gas and blackbody thermodynamics

Photons have zero chemical potential because their number is not conserved in thermal equilibrium. Planck's spectrum leads to

$$
u(T)=aT^4,
\qquad
P=\frac13u,
$$

and hence a heat capacity proportional to $T^3$. The same low-temperature power law appears for three-dimensional acoustic phonons in the Debye model.

## Takeaways

- Each ensemble corresponds to a different set of externally controlled variables.
- Derivatives of the logarithm of a partition function generate thermodynamic averages and fluctuations.
- Bose and Fermi statistics differ by the allowed occupation of identical-particle states.
- Quantum statistics becomes essential when the thermal wavelength is comparable to the interparticle spacing.
