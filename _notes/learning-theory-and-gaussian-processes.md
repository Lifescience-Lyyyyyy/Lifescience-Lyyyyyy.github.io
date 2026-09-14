---
layout: post
title: "Learning Theory and Gaussian Processes"
date: 2024-11-06
permalink: /notes/machine-learning/learning-theory-and-gaussian-processes/
description: "PAC-style generalization bounds, growth functions, VC dimension, Gaussian process regression, and Bayesian optimization."
tags: [machine-learning, learning-theory, gaussian-processes]
categories: [course-notes]
course: Machine Learning
chapter: 3
related_posts: false
---

[Machine Learning]({{ '/notes/machine-learning/' | relative_url }}) / Chapter 3

> These notes reorganize Lectures 7-8. Probability statements and Gaussian process covariance formulas have been corrected and made explicit.

## Empirical and population risk

For binary classification with $0$-$1$ loss, the empirical risk of $h$ is

$$
\widehat R_n(h)=\frac1n\sum_{i=1}^n\mathbf 1\{h(x_i)\ne y_i\},
$$

while the population risk is

$$
R(h)=\mathbb E_{(x,y)\sim P}\left[\mathbf 1\{h(x)\ne y\}\right].
$$

The generalization gap is $R(h)-\widehat R_n(h)$. A useful guarantee controls this gap uniformly over all hypotheses that the learning algorithm might select.

## Hoeffding's inequality

If $Z_1,\ldots,Z_n$ are independent and $Z_i\in[a_i,b_i]$, then

$$
\Pr\left(\left|\frac1n\sum_i Z_i-mathbb E\left[\frac1n\sum_i Z_i\right]\right|\ge\varepsilon\right)
\le 2\exp\left(-\frac{2n^2\varepsilon^2}{\sum_i(b_i-a_i)^2}\right).
$$

For Bernoulli losses, this becomes

$$
\Pr\left(|R(h)-\widehat R_n(h)|\ge\varepsilon\right)
\le 2e^{-2n\varepsilon^2}
$$

for a fixed, data-independent $h$.

## Finite hypothesis classes

For a finite class $\mathcal H$ with $|\mathcal H|=M$, a union bound yields

$$
\Pr\left(\sup_{h\in\mathcal H}|R(h)-\widehat R_n(h)|\ge\varepsilon\right)
\le 2M e^{-2n\varepsilon^2}.
$$

Therefore, with probability at least $1-\delta$, every $h\in\mathcal H$ satisfies

$$
|R(h)-\widehat R_n(h)|
\le
\sqrt{\frac{\log(2M/\delta)}{2n}}.
$$

The dependence is logarithmic in the number of hypotheses and decreases as $1/\sqrt n$.

## Growth function and VC dimension

For inputs $x_1,\ldots,x_n$, each binary classifier produces a dichotomy $(h(x_1),\ldots,h(x_n))$. The growth function is

$$
m_{\mathcal H}(n)=
\max_{x_1,\ldots,x_n}
\left|\{(h(x_1),\ldots,h(x_n)):h\in\mathcal H\}\right|.
$$

A set of $n$ points is shattered when all $2^n$ binary labelings can be realized. The VC dimension is the largest $n$ for which some set of $n$ points is shattered.

The Sauer-Shelah lemma states that if $d_{\mathrm{VC}}<n$, then

$$
m_{\mathcal H}(n)
\le \sum_{i=0}^{d_{\mathrm{VC}}}\binom ni
\le \left(\frac{en}{d_{\mathrm{VC}}}\right)^{d_{\mathrm{VC}}}.
$$

Thus a finite VC dimension replaces the raw cardinality of an infinite hypothesis class with an effective combinatorial complexity. A typical uniform bound has order

$$
\sup_{h\in\mathcal H}|R(h)-\widehat R_n(h)|
=O\left(\sqrt{\frac{d_{\mathrm{VC}}\log(n/d_{\mathrm{VC}})+\log(1/\delta)}{n}}\right).
$$

Exact constants depend on the theorem used. Linear separators in $\mathbb R^d$ with an intercept have VC dimension $d+1$.

## Gaussian processes

A stochastic process is a collection of random variables indexed by an arbitrary set. A Gaussian process (GP) is a collection for which every finite subcollection has a joint Gaussian distribution:

$$
f\sim\mathcal{GP}(m,k),
$$

where

$$
m(x)=\mathbb E[f(x)],
\qquad
k(x,x')=\operatorname{Cov}(f(x),f(x')).
$$

For inputs $X=(x_1,\ldots,x_n)$,

$$
f(X)\sim\mathcal N(m(X),K),
\qquad K_{ij}=k(x_i,x_j).
$$

The kernel expresses prior assumptions about similarity, smoothness, periodicity, and other structure.

## Gaussian process regression

Assume noisy observations

$$
y_i=f(x_i)+\varepsilon_i,
\qquad \varepsilon_i\sim\mathcal N(0,\sigma_n^2).
$$

Let $K=K(X,X)$, $k_*=K(X,x_*)$, and $k_{**}=k(x_*,x_*)$. With a zero mean function,

$$
\begin{bmatrix}y\\f_*\end{bmatrix}
\sim
\mathcal N\left(
0,
\begin{bmatrix}
K+\sigma_n^2I & k_*\\
k_*^\top & k_{**}
\end{bmatrix}
\right).
$$

Conditioning gives

$$
\mathbb E[f_*\mid X,y,x_*]
=k_*^\top(K+\sigma_n^2I)^{-1}y,
$$

$$
\operatorname{Var}(f_*\mid X,y,x_*)
=k_{**}-k_*^\top(K+\sigma_n^2I)^{-1}k_*.
$$

For the predictive distribution of a noisy future observation $y_*$, add $\sigma_n^2$ to the variance. The posterior mean is a kernel expansion over training points, and the posterior variance quantifies epistemic uncertainty under the model.

Gaussian process regression can also be derived as Bayesian linear regression in a feature space. The function-space view becomes especially useful when the feature map is implicit or infinite-dimensional.

## Bayesian optimization

Bayesian optimization is useful when evaluating an objective is expensive and gradients are unavailable. A GP surrogate models the unknown objective, and an acquisition function balances exploitation and exploration.

Two common acquisition functions are:

$$
\operatorname{UCB}(x)=\mu_t(x)+\sqrt{\beta_t}\,\sigma_t(x)
$$

for maximization, and expected improvement

$$
\operatorname{EI}(x)=\mathbb E\left[\max\bigl(f(x)-f_{\text{best}},0\bigr)\right].
$$

A standard loop is:

1. Fit or update the GP using observed evaluations.
2. Maximize the acquisition function.
3. Evaluate the true objective at the selected point.
4. Add the observation and repeat until the budget is exhausted.

## Takeaways

- A bound for one fixed model cannot automatically be applied to a model chosen from the same training data.
- Uniform convergence accounts for the complexity of the entire hypothesis class.
- VC dimension measures the largest sample that can be labeled in every possible way.
- A GP is a distribution over functions, completely specified by its mean and covariance functions.
- GP regression provides both a predictive mean and a principled uncertainty estimate.

## Further reading

- Rasmussen, C. E. and Williams, C. K. I. [Gaussian Processes for Machine Learning](https://gaussianprocess.org/gpml/), 2006.
