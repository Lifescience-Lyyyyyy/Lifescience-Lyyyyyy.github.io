---
layout: post
title: "Linear and Logistic Regression"
date: 2024-09-18
permalink: /notes/machine-learning/linear-and-logistic-regression/
description: "Least squares, regularization, probabilistic classification, softmax regression, and the bias-variance trade-off."
tags: [machine-learning, regression, classification]
categories: [course-notes]
course: Machine Learning
chapter: 1
related_posts: false
---

[Machine Learning]({{ '/notes/machine-learning/' | relative_url }}) / Chapter 1

> These notes reorganize Lectures 1-3 of my machine learning course. Notation and several derivations have been standardized, and conceptual errors in the handwritten version have been corrected.

## Model selection

The purpose of model selection is to estimate how well a trained model will generalize to unseen data.

- **Training set:** used to fit model parameters.
- **Validation set:** used to choose hyperparameters and compare models.
- **Test set:** used once, after model selection, to estimate final performance.

A common split is 80%/10%/10%, although the best proportions depend on dataset size. For time-dependent data, a chronological split is usually more appropriate than a random split because it better represents prediction on future observations.

Without reliable validation evidence, a simpler model is often preferable. This is the practical form of Occam's razor: do not add complexity unless it improves out-of-sample performance.

## Linear regression

Given a dataset

$$
\mathcal D=\{(x_i,y_i)\}_{i=1}^n,\qquad x_i\in\mathbb R^d,
$$

we use an affine predictor

$$
f(x)=w^\top x+b.
$$

The empirical squared-error objective is

$$
L(w,b)=\sum_{i=1}^n\left(y_i-w^\top x_i-b\right)^2.
$$

The intercept can be absorbed into the parameter vector by defining

$$
\tilde x_i=\begin{bmatrix}x_i\\1\end{bmatrix},\qquad
\tilde w=\begin{bmatrix}w\\b\end{bmatrix}.
$$

Let $X\in\mathbb R^{n\times(d+1)}$ contain the row vectors $\tilde x_i^\top$ and let $y=(y_1,\ldots,y_n)^\top$. Then

$$
L(\tilde w)=\lVert y-X\tilde w\rVert_2^2.
$$

Setting the gradient to zero gives the normal equations

$$
X^\top X\tilde w=X^\top y.
$$

If $X^\top X$ is invertible,

$$
\hat{\tilde w}=(X^\top X)^{-1}X^\top y.
$$

In practice, one should solve the least-squares problem with QR decomposition or SVD instead of explicitly forming the inverse. When columns are redundant or $d>n$, the minimum-norm solution is $\hat{\tilde w}=X^+y$, where $X^+$ is the Moore-Penrose pseudoinverse.

## Gradient descent

For an objective $L(\theta)$, gradient descent updates

$$
\theta_{t+1}=\theta_t-\eta_t\nabla_\theta L(\theta_t),
$$

where $\eta_t>0$ is the learning rate. The sign is important: moving in the negative gradient direction locally decreases the objective.

## Ridge regression

Ridge regression adds an $L_2$ penalty:

$$
L_\lambda(w)=\lVert y-Xw\rVert_2^2+\lambda\lVert w\rVert_2^2,
\qquad \lambda\ge 0.
$$

Its solution is

$$
\hat w=(X^\top X+\lambda I)^{-1}X^\top y.
$$

The penalty improves conditioning and shrinks coefficients. It does not normally force coefficients to be exactly zero. Under a Bayesian interpretation, ridge regression is maximum a posteriori estimation with an isotropic Gaussian prior on $w$.

## Lasso regression

Lasso uses an $L_1$ penalty:

$$
L_\lambda(w)=\lVert y-Xw\rVert_2^2+\lambda\lVert w\rVert_1.
$$

The corners of the $L_1$ constraint region make exact zeros common, so lasso can perform feature selection. Unlike ridge regression, it has no general closed-form solution and is usually optimized by coordinate descent, proximal-gradient methods, or related algorithms.

{% include figure.liquid path="assets/img/notes/machine-learning/regularization-geometry.png" class="img-fluid rounded z-depth-1" alt="Handwritten sketches comparing ridge and lasso constraint geometry" caption="Handwritten geometric view of ridge and lasso regularization. The corners of the L1 region make sparse solutions more likely." %}

## Binary logistic regression

For $y\in\{0,1\}$, logistic regression models a conditional probability:

$$
p(y=1\mid x)=\sigma(w^\top x+b),\qquad
\sigma(z)=\frac{1}{1+e^{-z}}.
$$

A hard prediction at threshold $0.5$ is equivalent to testing whether $w^\top x+b\ge 0$. Thus $w^\top x+b=0$ is the decision hyperplane.

The Bernoulli likelihood is

$$
p(y_i\mid x_i)=p_i^{y_i}(1-p_i)^{1-y_i},
\qquad p_i=\sigma(w^\top x_i+b).
$$

Maximum likelihood is equivalent to minimizing binary cross-entropy:

$$
L(w,b)=-\sum_{i=1}^n\left[y_i\log p_i+(1-y_i)\log(1-p_i)\right].
$$

With augmented vectors $\tilde x_i$ and $\tilde w$, the gradient is

$$
\nabla_{\tilde w}L
=\sum_{i=1}^n(p_i-y_i)\tilde x_i
=X^\top(p-y),
$$

and the Hessian is

$$
\nabla^2_{\tilde w}L=X^\top R X,
\qquad R=\operatorname{diag}\bigl(p_i(1-p_i)\bigr)\succeq 0.
$$

Therefore the unregularized logistic loss is convex, although it may fail to attain a finite minimizer when the data are perfectly linearly separable. Regularization resolves this divergence and improves generalization.

Squared loss is usually a poor choice for probabilistic classification: it ignores the Bernoulli likelihood, can be sensitive to outliers, and does not naturally enforce probabilities in $[0,1]$.

## Multiclass softmax regression

For classes $k\in\{1,\ldots,K\}$, define logits

$$
z_k(x)=w_k^\top x+b_k.
$$

The softmax probabilities are

$$
p(y=k\mid x)=\frac{e^{z_k(x)}}{\sum_{j=1}^K e^{z_j(x)}}.
$$

Training minimizes multiclass cross-entropy. For numerical stability, subtract $\max_j z_j(x)$ from every logit before exponentiation. Binary softmax is equivalent to logistic regression after fixing the redundant common offset between the two class logits.

## Maximum likelihood for linear regression

Assume

$$
y_i=w^\top x_i+b+\varepsilon_i,
\qquad \varepsilon_i\overset{\text{i.i.d.}}{\sim}\mathcal N(0,\sigma^2).
$$

Then maximizing the Gaussian likelihood is equivalent to minimizing squared error. This explains why least squares is natural under homoscedastic Gaussian noise.

## Bias-variance decomposition

Let $\hat f_D(x)$ be the predictor learned from a random training set $D$, and assume

$$
y=f(x)+\varepsilon,\qquad \mathbb E[\varepsilon]=0,
\qquad \operatorname{Var}(\varepsilon)=\sigma^2.
$$

At a fixed $x$,

$$
\mathbb E_D\mathbb E_{y\mid x}
\left[(y-\hat f_D(x))^2\right]
=\underbrace{\left(f(x)-\mathbb E_D[\hat f_D(x)]\right)^2}_{\text{bias}^2}
+\underbrace{\operatorname{Var}_D[\hat f_D(x)]}_{\text{variance}}
+\underbrace{\sigma^2}_{\text{irreducible noise}}.
$$

Increasing model capacity often reduces bias but increases variance. More representative training data usually reduces variance, while regularization trades a controlled increase in bias for lower variance.

{% include figure.liquid path="assets/img/notes/machine-learning/bias-variance-sketch.png" class="img-fluid rounded z-depth-1" alt="Handwritten target sketch illustrating high bias and high variance" caption="A visual mnemonic for the bias-variance trade-off from the original lecture notes." %}

## Derivation notebook

### Normal equations from least squares

For the matrix objective

$$
J(\mathbf w)=\frac12(\mathbf y-X\mathbf w)^\top(\mathbf y-X\mathbf w),
$$

expand before differentiating:

$$
J(\mathbf w)=\frac12\mathbf y^\top\mathbf y-\mathbf w^\top X^\top\mathbf y
+\frac12\mathbf w^\top X^\top X\mathbf w.
$$

Because $X^\top X$ is symmetric,

$$
\nabla_{\mathbf w}J=-X^\top\mathbf y+X^\top X\mathbf w.
$$

Setting the gradient to zero gives the normal equations

$$
X^\top X\widehat{\mathbf w}=X^\top\mathbf y.
$$

Thus $\widehat{\mathbf w}=(X^\top X)^{-1}X^\top\mathbf y$ only when the inverse exists; in computation, solving the linear system or using a pseudoinverse is preferable.

### Ridge regression as MAP estimation

Assume Gaussian observation noise and a zero-mean isotropic Gaussian prior:

$$
p(\mathbf y\mid\mathbf w)\propto
\exp\!\left[-\frac{1}{2\sigma^2}\lVert\mathbf y-X\mathbf w\rVert_2^2\right],
\qquad
p(\mathbf w)\propto
\exp\!\left[-\frac{1}{2\tau^2}\lVert\mathbf w\rVert_2^2\right].
$$

Bayes' rule shows that maximizing the posterior is equivalent to minimizing its negative logarithm:

$$
-\log p(\mathbf w\mid\mathbf y)
=\frac{1}{2\sigma^2}\lVert\mathbf y-X\mathbf w\rVert_2^2
+\frac{1}{2\tau^2}\lVert\mathbf w\rVert_2^2+C.
$$

Multiplying by $2\sigma^2$ produces ridge regression with $\lambda=\sigma^2/\tau^2$. Differentiating then gives

$$
(X^\top X+\lambda I)\widehat{\mathbf w}=X^\top\mathbf y.
$$

### Logistic gradient and curvature

Let $p_i=\sigma(\mathbf w^\top\mathbf x_i)$. Since $\sigma'(z)=\sigma(z)[1-\sigma(z)]$, differentiating one binary cross-entropy term yields

$$
\frac{\partial}{\partial z_i}
\left[-y_i\log p_i-(1-y_i)\log(1-p_i)\right]=p_i-y_i.
$$

The chain rule therefore gives

$$
\nabla_{\mathbf w}J=X^\top(\mathbf p-\mathbf y),
\qquad
\nabla_{\mathbf w}^2J=X^\top R X,
$$

where $R=\operatorname{diag}(p_i(1-p_i))$. Because $R$ is positive semidefinite, the loss is convex; this is why Newton or iteratively reweighted least-squares updates have a unique optimum when the data are not perfectly separable.

## Takeaways

- Least squares has a closed-form characterization, but stable numerical solvers are preferable to explicit matrix inversion.
- Ridge shrinks coefficients; lasso can set coefficients exactly to zero.
- Cross-entropy follows directly from maximum likelihood for categorical outcomes.
- Convexity does not guarantee that an unregularized finite optimum exists.
- Model complexity should be selected using validation performance, not training error.
