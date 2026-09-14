---
layout: post
title: "Decision Trees, Ensembles, and Graphical Models"
date: 2024-11-20
permalink: /notes/machine-learning/trees-ensembles-and-graphical-models/
description: "Tree splitting criteria, bagging, random forests, boosting, Bayesian networks, naive Bayes, and hidden Markov models."
tags: [machine-learning, decision-trees, graphical-models]
categories: [course-notes]
course: Machine Learning
chapter: 4
related_posts: false
---

[Machine Learning]({{ '/notes/machine-learning/' | relative_url }}) / Chapter 4

> These notes reorganize Lectures 9-10. The ensemble formulas and conditional-independence statements have been normalized and corrected.

## Decision trees

A decision tree contains internal decision nodes, directed branches, and leaf nodes. Each internal node partitions the input space using a feature test. A leaf returns a class label, class distribution, or regression value.

Tree construction is usually greedy: at each node, choose the split that gives the largest immediate reduction in impurity. Greedy construction is computationally practical but does not guarantee a globally optimal tree.

{% include figure.liquid path="assets/img/notes/machine-learning/decision-tree-sketch.png" class="img-fluid rounded z-depth-1" alt="Handwritten examples of decision trees and leaf predictions" caption="A handwritten decision-tree example: internal nodes test features and leaves return predictions." %}

### Entropy and information gain

For a dataset $D$ with class proportions $p_k$,

$$
H(D)=-\sum_k p_k\log p_k.
$$

For a discrete split on feature $A$,

$$
H(D\mid A)=\sum_a\frac{|D_a|}{|D|}H(D_a),
$$

and the information gain is

$$
\operatorname{IG}(D,A)=H(D)-H(D\mid A).
$$

Information gain is mutual information between the label and the split outcome. It can favor features with many possible values, including identifier-like features.

The gain ratio partly compensates for this bias:

$$
\operatorname{GainRatio}(D,A)
=\frac{\operatorname{IG}(D,A)}{H(A)},
$$

when $H(A)>0$.

### Gini impurity

$$
\operatorname{Gini}(D)=1-\sum_k p_k^2.
$$

The weighted impurity after a split is

$$
\operatorname{Gini}(D,A)
=\sum_a\frac{|D_a|}{|D|}\operatorname{Gini}(D_a).
$$

A split minimizes the weighted child impurity, or equivalently maximizes its reduction relative to the parent.

### Regression trees

For squared-error regression, each leaf predicts the mean response of its samples:

$$
\bar y_R=\frac1{|R|}\sum_{i:x_i\in R}y_i.
$$

The split is selected to minimize the sum of squared residuals over the resulting regions.

## Bagging

Bagging trains base learners on bootstrap samples and averages their predictions:

$$
\hat f_{\text{bag}}(x)=\frac1B\sum_{b=1}^B\hat f_b(x).
$$

For identically distributed estimators with variance $\sigma^2$ and pairwise correlation $\rho$,

$$
\operatorname{Var}\left(\frac1B\sum_b\hat f_b\right)
=\rho\sigma^2+\frac{1-\rho}{B}\sigma^2.
$$

Thus averaging is most effective when base learners are both accurate and weakly correlated. Bagging mainly reduces variance; it does not generally drive variance to zero because bootstrap models remain correlated.

## Random forests

A random forest combines:

1. A bootstrap sample for each tree.
2. A random subset of candidate features at each split.
3. Aggregation by majority vote or averaging.

Random feature selection decorrelates trees and can improve the variance reduction achieved by averaging.

## Boosting and AdaBoost

Boosting builds an additive model sequentially:

$$
F_T(x)=\sum_{t=1}^T\alpha_t h_t(x).
$$

For binary labels $y_i\in\{-1,+1\}$, AdaBoost maintains sample weights $w_i^{(t)}$. At iteration $t$:

1. Fit a weak classifier $h_t$ using the current weights.
2. Compute its weighted error

   $$
   \varepsilon_t=\frac{\sum_i w_i^{(t)}\mathbf 1\{h_t(x_i)\ne y_i\}}
   {\sum_i w_i^{(t)}}.
   $$

3. Set

   $$
   \alpha_t=\frac12\log\frac{1-\varepsilon_t}{\varepsilon_t}.
   $$

4. Update and normalize

   $$
   w_i^{(t+1)}\propto
   w_i^{(t)}\exp\left[-\alpha_t y_i h_t(x_i)\right].
   $$

Misclassified points receive more weight. AdaBoost can be interpreted as forward stagewise minimization of the exponential loss

$$
\sum_i e^{-y_iF(x_i)}.
$$

Bagging builds models independently and mainly reduces variance. Boosting builds them sequentially and often reduces bias, although its behavior depends on the base learner, loss, noise, and regularization.

For squared-error gradient boosting, each new learner is fitted to the current residuals, which are negative gradients of the loss.

## Bayesian networks

A Bayesian network is a directed acyclic graph whose nodes are random variables. The joint distribution factorizes as

$$
p(x_1,\ldots,x_m)=\prod_{j=1}^m p(x_j\mid\operatorname{pa}(x_j)),
$$

where $\operatorname{pa}(x_j)$ denotes the parents of node $x_j$.

Each node is conditionally independent of its nondescendants given its parents. More general conditional independences are determined by **d-separation**.

A path is blocked by a conditioning set $C$ when it contains:

- a chain or fork whose middle node is in $C$; or
- a collider for which neither the collider nor any descendant is in $C$.

Conditioning on a collider, or one of its descendants, can open a path and create dependence. This is the opposite of what happens in a chain or fork.

## Naive Bayes

Naive Bayes assumes features are conditionally independent given the class:

$$
p(x_1,\ldots,x_d\mid y)=\prod_{j=1}^d p(x_j\mid y).
$$

Then

$$
p(y\mid x)\propto p(y)\prod_{j=1}^d p(x_j\mid y).
$$

Prediction selects the class with the largest log-posterior score. The independence assumption is often false, but the classifier may still perform well when its decision boundary is estimated adequately.

## Hidden Markov models

An HMM contains hidden states $z_1,\ldots,z_T$ and observations $x_1,\ldots,x_T$. Its assumptions are:

$$
p(z_t\mid z_{1:t-1})=p(z_t\mid z_{t-1}),
$$

$$
p(x_t\mid z_{1:T},x_{1:t-1})=p(x_t\mid z_t).
$$

The joint distribution factorizes as

$$
p(z_1)\prod_{t=2}^T p(z_t\mid z_{t-1})
\prod_{t=1}^T p(x_t\mid z_t).
$$

The forward-backward algorithm computes state marginals, the Viterbi algorithm finds the most likely state sequence, and Baum-Welch is the EM algorithm specialized to HMM parameter learning.

## Takeaways

- Tree splits aim to reduce label impurity or regression error.
- Bagging averages diverse estimators to reduce variance.
- Random forests decorrelate trees through feature subsampling.
- Boosting builds an additive model that concentrates on current errors.
- Graph structure encodes a factorization, while d-separation determines conditional independence.

## Further reading

- Breiman, L. [Random Forests](https://doi.org/10.1023/A:1010933404324), 2001.
- Freund, Y. and Schapire, R. E. [A decision-theoretic generalization of on-line learning and an application to boosting](https://doi.org/10.1007/3-540-59119-2_166), 1995.
