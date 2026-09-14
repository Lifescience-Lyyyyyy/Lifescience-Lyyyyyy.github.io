---
layout: post
title: "Constrained Optimization, SVMs, and Kernels"
date: 2024-10-16
description: "KKT conditions, maximum-margin classification, duality, soft-margin SVMs, kernels, RKHSs, and the representer theorem."
tags: [machine-learning, optimization, kernels]
categories: [course-notes]
related_posts: false
---

> These notes reorganize Lectures 3-6. Signs, scaling conventions, and several statements about duality have been corrected.

## Equality constraints and Lagrange multipliers

Consider

$$
\min_x f(x)\quad\text{subject to}\quad h(x)=0.
$$

At a regular local optimum $x^*$, feasible first-order directions are tangent to the constraint surface, while $\nabla h(x^*)$ is normal to it. Therefore

$$
\nabla f(x^*)+\lambda^*\nabla h(x^*)=0
$$

for some multiplier $\lambda^*$. Define the Lagrangian

$$
\mathcal L(x,\lambda)=f(x)+\lambda h(x).
$$

Stationary candidates satisfy $\nabla_x\mathcal L=0$ and $h(x)=0$.

## Inequality constraints and KKT conditions

For

$$
\min_x f(x)
\quad\text{subject to}\quad
h_j(x)=0,\quad g_i(x)\le 0,
$$

define

$$
\mathcal L(x,\lambda,\mu)
=f(x)+\sum_j\lambda_jh_j(x)+\sum_i\mu_i g_i(x).
$$

Under an appropriate constraint qualification, a local optimum satisfies:

1. **Primal feasibility:** $h_j(x^*)=0$ and $g_i(x^*)\le 0$.
2. **Dual feasibility:** $\mu_i^*\ge 0$.
3. **Stationarity:** $\nabla_x\mathcal L(x^*,\lambda^*,\mu^*)=0$.
4. **Complementary slackness:** $\mu_i^*g_i(x^*)=0$.

An inactive inequality has $g_i(x^*)<0$ and therefore $\mu_i^*=0$.

## Linear support vector machines

For labels $y_i\in\{-1,+1\}$, the hyperplane $w^\top x+b=0$ defines a linear classifier. The signed functional margin is $y_i(w^\top x_i+b)$, while the geometric margin is

$$
\gamma_i=\frac{y_i(w^\top x_i+b)}{\lVert w\rVert_2}.
$$

Because multiplying $(w,b)$ by a positive constant leaves the decision boundary unchanged, we fix the scale by requiring

$$
y_i(w^\top x_i+b)\ge 1.
$$

The hard-margin SVM is

$$
\min_{w,b}\frac12\lVert w\rVert_2^2
\quad\text{subject to}\quad
y_i(w^\top x_i+b)\ge 1\quad\forall i.
$$

Minimizing $\lVert w\rVert_2$ maximizes the distance between the two supporting hyperplanes, which is $2/\lVert w\rVert_2$.

## The SVM dual

Introduce multipliers $\alpha_i\ge 0$:

$$
\mathcal L(w,b,\alpha)
=\frac12\lVert w\rVert_2^2
+\sum_i\alpha_i\left[1-y_i(w^\top x_i+b)\right].
$$

Stationarity gives

$$
w=\sum_i\alpha_i y_i x_i,
\qquad
\sum_i\alpha_i y_i=0.
$$

Substitution yields

$$
\max_{\alpha}
\sum_i\alpha_i-rac12\sum_{i,j}\alpha_i\alpha_jy_i y_j x_i^\top x_j
$$

subject to $\alpha_i\ge 0$ and $\sum_i\alpha_i y_i=0$.

Complementary slackness implies

$$
\alpha_i\left[1-y_i(w^\top x_i+b)\right]=0.
$$

Only points with $\alpha_i>0$ contribute to $w$; these are the support vectors. For any support vector lying exactly on the margin,

$$
b=y_i-w^\top x_i.
$$

Weak duality always gives $d^*\le p^*$. Strong duality requires additional conditions; for convex problems, Slater's condition is a common sufficient condition. It is not true that strong duality holds for every constrained problem.

## Soft-margin SVM

Nonseparable data require slack variables $\xi_i\ge 0$:

$$
\min_{w,b,\xi}
\frac12\lVert w\rVert_2^2+C\sum_i\xi_i
$$

subject to

$$
y_i(w^\top x_i+b)\ge 1-\xi_i.
$$

Eliminating $\xi_i$ gives the equivalent unconstrained form

$$
\min_{w,b}\frac12\lVert w\rVert_2^2
+C\sum_i\max\left(0,1-y_i(w^\top x_i+b)\right).
$$

The second term is the hinge loss. In the dual, the multipliers satisfy the box constraint $0\le\alpha_i\le C$.

## Kernel methods

Suppose a feature map $\phi:\mathcal X\to\mathcal H$ embeds inputs into a possibly high-dimensional space. A kernel computes inner products without explicitly constructing the features:

$$
k(x,z)=\langle\phi(x),\phi(z)\rangle_{\mathcal H}.
$$

Replacing $x_i^\top x_j$ with $k(x_i,x_j)$ in the SVM dual produces a nonlinear decision function

$$
f(x)=\sum_i\alpha_i y_i k(x_i,x)+b.
$$

Common kernels include:

$$
\begin{aligned}
k_{\text{linear}}(x,z)&=x^\top z,\\
k_{\text{poly}}(x,z)&=(x^\top z+c)^p,\\
k_{\text{RBF}}(x,z)&=\exp\left(-\frac{\lVert x-z\rVert_2^2}{2\ell^2}\right).
\end{aligned}
$$

A symmetric function is a valid real-valued kernel precisely when every finite Gram matrix $K_{ij}=k(x_i,x_j)$ is positive semidefinite. Symmetry alone is not sufficient.

For the RBF kernel, a small length scale $\ell$ permits rapid variation and may overfit; a large $\ell$ enforces smoother, more global similarity. This corrects the reversed interpretation in the handwritten notes.

## Reproducing kernel Hilbert spaces

A reproducing kernel Hilbert space (RKHS) $\mathcal H$ is a Hilbert space of functions for which evaluation is continuous and represented by the kernel:

$$
f(x)=\langle f,k(x,\cdot)\rangle_{\mathcal H}.
$$

Every positive-semidefinite kernel defines an RKHS, and every RKHS has a unique reproducing kernel.

## The representer theorem

Consider an objective of the form

$$
\min_{f\in\mathcal H}
\sum_{i=1}^n L\bigl(f(x_i),y_i\bigr)
+\Omega\bigl(\lVert f\rVert_{\mathcal H}\bigr),
$$

where $\Omega$ is strictly increasing. The representer theorem states that a minimizer can be written as

$$
f^*(\cdot)=\sum_{i=1}^n\alpha_i k(x_i,\cdot).
$$

The theorem converts an optimization problem over a potentially infinite-dimensional function space into one over $n$ coefficients. It does not make the method nonparametric in every possible sense, but it makes model complexity depend naturally on the data and kernel.

## Takeaways

- KKT conditions combine feasibility, stationarity, dual feasibility, and complementary slackness.
- SVMs choose a maximum-margin separator; support vectors alone determine the solution.
- Soft margins replace infeasibility with hinge-loss penalties.
- A valid kernel must generate positive-semidefinite Gram matrices.
- The representer theorem explains why many regularized kernel methods have finite expansions over training points.

## Further reading

- Cortes, C. and Vapnik, V. [Support-vector networks](https://doi.org/10.1007/BF00994018), 1995.
- Rasmussen, C. E. and Williams, C. K. I. [Gaussian Processes for Machine Learning](https://gaussianprocess.org/gpml/), 2006.
