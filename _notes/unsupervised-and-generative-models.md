---
layout: post
title: "Unsupervised Learning and Generative Models"
date: 2024-12-25
permalink: /notes/machine-learning/unsupervised-and-generative-models/
description: "PCA, k-means, Gaussian mixtures, EM, variational autoencoders, and denoising diffusion models."
tags: [machine-learning, unsupervised-learning, generative-models]
categories: [course-notes]
course: Machine Learning
chapter: 5
related_posts: false
---

[Machine Learning]({{ '/notes/machine-learning/' | relative_url }}) / Chapter 5

> These notes reorganize Lectures 11-14. The PCA scaling, EM objective, VAE ELBO, and DDPM notation have been corrected and completed.

## Unsupervised learning

Unsupervised learning uses observations $x$ without target labels $y$. Common goals include dimensionality reduction, clustering, density estimation, and generative modeling.

## Principal component analysis

Let $x_1,\ldots,x_n\in\mathbb R^d$ and define

$$
\bar x=\frac1n\sum_{i=1}^n x_i,
\qquad
S=\frac1n\sum_{i=1}^n(x_i-\bar x)(x_i-\bar x)^\top.
$$

The first principal direction solves

$$
\max_{\lVert u\rVert_2=1}u^\top S u.
$$

Using a Lagrange multiplier gives

$$
Su=\lambda u.
$$

Therefore the first principal component is the eigenvector of $S$ with the largest eigenvalue. Later components are the next eigenvectors, constrained to be mutually orthogonal.

If the centered data matrix $X_c\in\mathbb R^{n\times d}$ has rows $(x_i-\bar x)^\top$ and

$$
X_c=U\Sigma V^\top,
$$

then the columns of $V$ are principal directions. Projection to $k$ dimensions is

$$
Z=X_cV_k.
$$

PCA can equivalently be characterized as the rank-$k$ linear reconstruction minimizing squared error. The normalization $1/n$ versus $1/(n-1)$ changes eigenvalues but not eigenvectors.

{% include figure.liquid path="assets/img/notes/machine-learning/pca-and-clustering-sketch.png" class="img-fluid rounded z-depth-1" alt="Handwritten PCA projection and clustering sketches" caption="Handwritten intuition for projection onto a principal direction and grouping observations around cluster centers." %}

## K-means clustering

K-means minimizes within-cluster squared distances:

$$
\min_{r,\mu}
\sum_{i=1}^n\sum_{k=1}^K
r_{ik}\lVert x_i-\mu_k\rVert_2^2,
$$

subject to $r_{ik}\in\{0,1\}$ and $\sum_k r_{ik}=1$.

Lloyd's algorithm alternates:

1. **Assignment:**

   $$
   r_{ik}=1\quad\text{for }k=\arg\min_j\lVert x_i-\mu_j\rVert_2^2.
   $$

2. **Update:**

   $$
   \mu_k=\frac{\sum_i r_{ik}x_i}{\sum_i r_{ik}}.
   $$

Every step does not increase the objective, so the algorithm converges in finitely many assignments. It is not guaranteed to find the global optimum. Multiple initializations or k-means++ are useful in practice.

## Gaussian mixture models

A $K$-component Gaussian mixture has latent assignment $z_i$ and density

$$
p(x_i)=\sum_{k=1}^K\pi_k\,
\mathcal N(x_i\mid\mu_k,\Sigma_k),
$$

where $\pi_k\ge0$ and $\sum_k\pi_k=1$.

Unlike k-means, a Gaussian mixture produces soft assignments and models a probability density. The log-likelihood

$$
\sum_i\log\sum_k\pi_k\mathcal N(x_i\mid\mu_k,\Sigma_k)
$$

contains a log of a sum, which motivates the expectation-maximization algorithm.

## Expectation-maximization

For observed data $X$, latent variables $Z$, and parameters $\theta$, EM alternates:

### E-step

Compute the posterior over latent variables under the current parameters:

$$
q^{(t)}(Z)=p(Z\mid X,\theta^{(t)}).
$$

### M-step

Maximize the expected complete-data log-likelihood:

$$
\theta^{(t+1)}
=\arg\max_\theta
\mathbb E_{q^{(t)}(Z)}[\log p(X,Z\mid\theta)].
$$

For a Gaussian mixture, the responsibilities are

$$
r_{ik}=p(z_i=k\mid x_i)
=\frac{\pi_k\mathcal N(x_i\mid\mu_k,\Sigma_k)}
{\sum_j\pi_j\mathcal N(x_i\mid\mu_j,\Sigma_j)}.
$$

Let $N_k=\sum_i r_{ik}$. The updates are

$$
\pi_k=\frac{N_k}{n},
\qquad
\mu_k=\frac1{N_k}\sum_i r_{ik}x_i,
$$

$$
\Sigma_k=\frac1{N_k}
\sum_i r_{ik}(x_i-\mu_k)(x_i-\mu_k)^\top.
$$

EM monotonically improves or preserves the observed-data log-likelihood, but it may converge to a local optimum or saddle point. K-means is recovered as a limiting hard-assignment case of a spherical equal-variance Gaussian mixture as the variance approaches zero.

## Variational inference and the ELBO

For a latent-variable model $p_\theta(x,z)=p_\theta(x\mid z)p(z)$, the marginal likelihood

$$
p_\theta(x)=\int p_\theta(x,z)\,dz
$$

may be intractable. Introduce an approximate posterior $q_\phi(z\mid x)$. Then

$$
\log p_\theta(x)
=\mathcal L(\theta,\phi;x)
+D_{\mathrm{KL}}\left(q_\phi(z\mid x)\,\Vert\,p_\theta(z\mid x)\right),
$$

where the evidence lower bound is

$$
\mathcal L(\theta,\phi;x)
=\mathbb E_{q_\phi(z\mid x)}[\log p_\theta(x\mid z)]
-D_{\mathrm{KL}}\left(q_\phi(z\mid x)\,\Vert\,p(z)\right).
$$

Since KL divergence is nonnegative, $\mathcal L\le\log p_\theta(x)$. The first term rewards reconstruction under the probabilistic decoder; the second regularizes the approximate posterior toward the prior.

## Variational autoencoders

A VAE uses neural networks to parameterize the encoder $q_\phi(z\mid x)$ and decoder $p_\theta(x\mid z)$. For a diagonal Gaussian encoder,

$$
q_\phi(z\mid x)=\mathcal N\left(z\mid\mu_\phi(x),
\operatorname{diag}(\sigma_\phi^2(x))\right).
$$

The reparameterization trick writes

$$
\varepsilon\sim\mathcal N(0,I),
\qquad
z=\mu_\phi(x)+\sigma_\phi(x)\odot\varepsilon.
$$

Randomness is isolated in $\varepsilon$, allowing gradients to flow through $\mu_\phi$ and $\sigma_\phi$. For the standard normal prior $p(z)=\mathcal N(0,I)$,

$$
D_{\mathrm{KL}}(q_\phi(z\mid x)\Vert p(z))
=\frac12\sum_j
\left(\mu_j^2+\sigma_j^2-\log\sigma_j^2-1\right).
$$

Unlike a deterministic autoencoder, a VAE learns a regularized latent distribution from which new samples can be drawn.

{% include figure.liquid path="assets/img/notes/machine-learning/vae-sketch.png" class="img-fluid rounded z-depth-1" alt="Handwritten VAE encoder decoder and reparameterization diagrams" caption="VAE architecture and reparameterization: noise is sampled separately, while gradients pass through the encoder parameters." %}

## Denoising diffusion probabilistic models

Let $x_0$ denote data. A DDPM defines a fixed forward noising process

$$
q(x_t\mid x_{t-1})
=\mathcal N\left(x_t;
\sqrt{\alpha_t}x_{t-1},(1-\alpha_t)I\right),
$$

where $\alpha_t=1-\beta_t$ and $0<\beta_t<1$. Define

{% include figure.liquid path="assets/img/notes/machine-learning/diffusion-sketch.png" class="img-fluid rounded z-depth-1" alt="Handwritten diffusion forward and reverse process sketch" caption="A diffusion model gradually corrupts data in the forward chain and learns a reverse denoising process." %}

$$
\bar\alpha_t=\prod_{s=1}^t\alpha_s.
$$

Then the closed-form marginal is

$$
q(x_t\mid x_0)
=\mathcal N\left(x_t;
\sqrt{\bar\alpha_t}x_0,
(1-\bar\alpha_t)I\right),
$$

or equivalently

$$
x_t=\sqrt{\bar\alpha_t}x_0
+\sqrt{1-\bar\alpha_t}\,\varepsilon,
\qquad \varepsilon\sim\mathcal N(0,I).
$$

The reverse process is learned:

$$
p_\theta(x_{t-1}\mid x_t)
=\mathcal N\left(x_{t-1};
\mu_\theta(x_t,t),\Sigma_\theta(x_t,t)\right).
$$

Although $q(x_{t-1}\mid x_t)$ is generally intractable because it depends on the unknown data distribution, conditioning additionally on $x_0$ gives a tractable Gaussian:

$$
q(x_{t-1}\mid x_t,x_0)
=\mathcal N(x_{t-1};\tilde\mu_t(x_t,x_0),\tilde\beta_t I),
$$

with

$$
\tilde\mu_t
=\frac{\sqrt{\bar\alpha_{t-1}}\beta_t}{1-\bar\alpha_t}x_0
+\frac{\sqrt{\alpha_t}(1-\bar\alpha_{t-1})}{1-\bar\alpha_t}x_t,
$$

$$
\tilde\beta_t
=\frac{1-\bar\alpha_{t-1}}{1-\bar\alpha_t}\beta_t.
$$

The common noise-prediction parameterization estimates $\varepsilon_\theta(x_t,t)$ and trains with the simplified objective

$$
\mathbb E_{t,x_0,\varepsilon}
\left[\lVert\varepsilon-
\varepsilon_\theta(x_t,t)\rVert_2^2\right].
$$

The forward process has latent states $x_1,\ldots,x_T$; saying that DDPM has "no hidden space" is therefore misleading. The important distinction from a VAE is that diffusion uses a long Markov chain in data space rather than a single compact latent code.

## Derivation notebook

### PCA as a constrained variance problem

For centered data with covariance $S$, the variance after projection onto a unit vector $\mathbf v$ is $\mathbf v^\top S\mathbf v$. Introduce a multiplier for $\mathbf v^\top\mathbf v=1$:

$$
\mathcal L(\mathbf v,\lambda)=\mathbf v^\top S\mathbf v
-\lambda(\mathbf v^\top\mathbf v-1).
$$

Stationarity gives $2S\mathbf v-2\lambda\mathbf v=0$, hence

$$
S\mathbf v=\lambda\mathbf v.
$$

At an eigenvector the projected variance equals $\lambda$, so the maximum is attained by the eigenvector with the largest eigenvalue. Subsequent components follow by adding orthogonality constraints.

### EM as coordinate ascent on a lower bound

For any distribution $q(z)$,

$$
\begin{aligned}
\log p(x)
&=\log\sum_z q(z)\frac{p(x,z)}{q(z)}\\
&\ge\sum_zq(z)\log\frac{p(x,z)}{q(z)}
=\mathcal L(q,\theta),
\end{aligned}
$$

where Jensen's inequality supplies the bound. More precisely,

$$
\log p(x)=\mathcal L(q,\theta)
+D_{\mathrm{KL}}\!\left(q(z)\,\Vert\,p(z\mid x,\theta)\right).
$$

The E-step sets $q$ to the current posterior, making the KL term zero. The M-step increases $\mathcal L$ with respect to $\theta$. Alternating these steps cannot decrease the data likelihood, although it may converge to a local optimum.

### The VAE evidence lower bound

Insert the approximate posterior $q_\phi(z\mid x)$ into the same identity:

$$
\begin{aligned}
\log p_\theta(x)
&=\mathbb E_{q_\phi}\!\left[
\log\frac{p_\theta(x,z)}{q_\phi(z\mid x)}\right]
+D_{\mathrm{KL}}\!\left(q_\phi(z\mid x)\,\Vert\,p_\theta(z\mid x)\right)\\
&\ge
\mathbb E_{q_\phi(z\mid x)}[\log p_\theta(x\mid z)]
-D_{\mathrm{KL}}\!\left(q_\phi(z\mid x)\,\Vert\,p(z)\right).
\end{aligned}
$$

The first term rewards reconstruction; the second regularizes the encoded distribution toward the prior.

### Closed-form diffusion marginal

Write one forward step as

$$
x_t=\sqrt{\alpha_t}x_{t-1}+\sqrt{1-\alpha_t}\epsilon_t,
\qquad \epsilon_t\sim\mathcal N(0,I).
$$

Substituting the expression for $x_{t-1}$ repeatedly gives a signal coefficient
$\sqrt{\alpha_t\alpha_{t-1}\cdots\alpha_1}=\sqrt{\bar\alpha_t}$. Independent Gaussian noise terms remain Gaussian, and their variances sum to $1-\bar\alpha_t$. Therefore

$$
q(x_t\mid x_0)=\mathcal N\!\left(
\sqrt{\bar\alpha_t}x_0,(1-\bar\alpha_t)I\right),
$$

or equivalently $x_t=\sqrt{\bar\alpha_t}x_0+\sqrt{1-\bar\alpha_t}\epsilon$. This identity permits training at a randomly sampled time step without simulating every earlier step.

## Takeaways

- PCA finds orthogonal directions of maximal variance and is equivalent to optimal linear low-rank reconstruction.
- K-means performs hard assignments; Gaussian mixtures perform probabilistic soft assignments.
- EM alternates posterior inference with expected complete-data likelihood maximization.
- A VAE optimizes an ELBO using amortized inference and reparameterized gradients.
- A DDPM learns to reverse a fixed gradual noising process; $\bar\alpha_t$, not $\alpha_t$, controls the direct distribution of $x_t$ given $x_0$.

## Further reading

- Kingma, D. P. and Welling, M. [Auto-Encoding Variational Bayes](https://arxiv.org/abs/1312.6114), 2013.
- Ho, J., Jain, A., and Abbeel, P. [Denoising Diffusion Probabilistic Models](https://arxiv.org/abs/2006.11239), 2020.
