---
layout: default
permalink: /notes/
title: Notes
description: Structured learning notes on neuroscience, machine learning, mathematics, and biology.
nav: true
nav_order: 3
---

<div class="post content-index">
  <header class="post-header page-hero-header">
    <p class="eyebrow">LEARNING · CONNECTING · REVISING</p>
    <h1 class="post-title">Notes</h1>
    <p class="post-description">Structured learning notes on neuroscience, machine learning, mathematics, and biology — written to make ideas easier to revisit and connect.</p>
  </header>

{% assign machine_learning_notes = site.notes | where: 'course', 'Machine Learning' %}
{% if machine_learning_notes.size > 0 %}

<div class="content-entry-list">
<article class="content-entry">
<span>COURSE · {{ machine_learning_notes.size }} CHAPTERS</span>
<div>
<h2><a href="{{ '/notes/machine-learning/' | relative_url }}">Machine Learning</a></h2>
<p>Mathematical foundations and core methods, from linear models and kernels to Gaussian processes, ensembles, and generative models.</p>
<ul class="entry-tags" aria-label="Course topics">
<li>Fall 2024</li>
<li>Supervised learning</li>
<li>Unsupervised learning</li>
<li>Generative models</li>
</ul>
</div>
</article>
</div>
{% else %}
<div class="notes-empty">
<span class="notes-empty-icon"><i class="fa-regular fa-pen-to-square"></i></span>
<h2>Notes are on the way.</h2>
<p>I am preparing learning notes on neuroscience, machine learning, mathematics, and biology. This page will grow alongside what I study.</p>
</div>
{% endif %}

</div>
