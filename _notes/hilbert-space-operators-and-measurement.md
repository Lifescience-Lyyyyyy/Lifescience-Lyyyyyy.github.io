---
layout: post
title: "Hilbert Space, Operators, and Measurement"
date: 2025-05-06
permalink: /notes/introduction-to-modern-physics/hilbert-space-operators-and-measurement/
description: "Quantum states, inner products, Hermitian operators, eigenbasis expansions, measurement, commutators, and uncertainty."
tags: [modern-physics, hilbert-space, quantum-measurement]
categories: [course-notes]
course: Introduction to Modern Physics
part: Quantum Mechanics
chapter: 6
related_posts: false
---

[Introduction to Modern Physics]({{ '/notes/introduction-to-modern-physics/' | relative_url }}) / Chapter 6

> These notes translate the mathematical framework of the quantum-mechanics lectures into standard Dirac and wavefunction notation. Statements about eigenvalues, expectation values, and uncertainty are separated carefully.

## States and inner products

A pure quantum state is represented by a normalized vector $\lvert\psi\rangle$ in a complex Hilbert space:

$$
\langle\psi\vert\psi\rangle=1.
$$

Two nonzero vectors differing only by an overall phase represent the same physical state:

$$
\lvert\psi\rangle
\sim e^{i\alpha}\lvert\psi\rangle.
$$

The inner product is conjugate symmetric and linear in its second argument:

$$
\langle\phi\vert\psi\rangle
=\langle\psi\vert\phi\rangle^{\ast}.
$$

Cauchy-Schwarz gives

$$
\lvert\langle\phi\vert\psi\rangle\rvert^2
\le
\langle\phi\vert\phi\rangle
\langle\psi\vert\psi\rangle.
$$

## Observables and Hermitian operators

An observable is represented by a Hermitian operator $\hat A=\hat A^\dagger$. Its eigenvalue equation is

$$
\hat A\lvert a_n\rangle=a_n\lvert a_n\rangle.
$$

Hermiticity ensures real eigenvalues. Eigenvectors belonging to distinct eigenvalues are orthogonal, and a complete orthonormal eigenbasis satisfies

$$
\sum_n\lvert a_n\rangle\langle a_n\rvert=\hat I.
$$

A state expands as

$$
\lvert\psi\rangle=\sum_n c_n\lvert a_n\rangle,
\qquad
c_n=\langle a_n\vert\psi\rangle.
$$

For a continuous spectrum, sums are replaced by integrals and Kronecker deltas by Dirac deltas.

## Measurement probabilities

Measuring $A$ in state $\lvert\psi\rangle$ yields $a_n$ with probability

$$
P(a_n)=\lvert\langle a_n\vert\psi\rangle\rvert^2.
$$

The expectation value and variance are

$$
\langle A\rangle
=\langle\psi\vert\hat A\vert\psi\rangle,
$$

$$
(\Delta A)^2
=\langle\hat A^2\rangle-\langle\hat A\rangle^2.
$$

An expectation value is an ensemble average of repeated measurements, not necessarily one of the possible individual outcomes.

## Position and momentum representations

In the position representation,

$$
\psi(x)=\langle x\vert\psi\rangle,
\qquad
\hat x=x,
\qquad
\hat p=-i\hbar\frac{d}{dx}.
$$

The momentum-space wavefunction is the Fourier transform

$$
\phi(p)
=\frac{1}{\sqrt{2\pi\hbar}}
\int_{-\infty}^{\infty}
e^{-ipx/\hbar}\psi(x)\,dx.
$$

The inverse transform reconstructs $\psi(x)$. Parseval's theorem guarantees that normalization is the same in either representation.

## Commutators

The commutator is

$$
[\hat A,\hat B]=\hat A\hat B-\hat B\hat A.
$$

Position and momentum obey

$$
[\hat x,\hat p]=i\hbar.
$$

If two Hermitian operators commute, they can be simultaneously diagonalized within the appropriate treatment of degeneracy. Noncommutation signals incompatible sharp values, not merely experimental disturbance.

## Uncertainty relation

For any state,

$$
\Delta A\,\Delta B
\ge
\frac12\lvert\langle[\hat A,\hat B]\rangle\rvert.
$$

Therefore

$$
\Delta x\,\Delta p\ge\frac\hbar2.
$$

The bound concerns the intrinsic statistical spread of measurement outcomes. It does not say that every individual measurement has an error of this size.

## Unitary time evolution

For a time-independent Hamiltonian,

$$
\lvert\psi(t)\rangle
=e^{-i\hat Ht/\hbar}\lvert\psi(0)\rangle.
$$

The evolution operator is unitary, so inner products and total probability are preserved.

## Takeaways

- Physical states are rays in a complex Hilbert space.
- Hermitian operators represent observables and have real spectra.
- Expansion coefficients determine measurement probabilities.
- Commutators control simultaneous measurability and uncertainty bounds.
