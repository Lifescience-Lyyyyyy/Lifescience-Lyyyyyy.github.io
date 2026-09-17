---
layout: default
permalink: /notes/
title: Notes
description: Structured learning notes on neuroscience, machine learning, physics, mathematics, and biology.
nav: true
nav_order: 3
---

<div class="post content-index">
  <header class="post-header page-hero-header">
    <p class="eyebrow">LEARNING · CONNECTING · REVISING</p>
    <h1 class="post-title">Notes</h1>
    <p class="post-description">Structured learning notes on neuroscience, machine learning, physics, mathematics, and biology — written to make ideas easier to revisit and connect.</p>
  </header>

{% assign machine_learning_notes = site.notes | where: 'course', 'Machine Learning' %}
{% assign modern_physics_notes = site.notes | where: 'course', 'Introduction to Modern Physics' %}
{% assign biochemistry_notes = site.notes | where: 'course', 'Biochemistry' %}
{% assign cell_biology_notes = site.notes | where: 'course', 'Cell Biology' %}
{% if machine_learning_notes.size > 0 or modern_physics_notes.size > 0 or biochemistry_notes.size > 0 or cell_biology_notes.size > 0 %}

<div class="content-entry-list">
{% if machine_learning_notes.size > 0 %}
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
{% endif %}
{% if modern_physics_notes.size > 0 %}
<article class="content-entry">
<span>COURSE · {{ modern_physics_notes.size }} CHAPTERS</span>
<div>
<h2><a href="{{ '/notes/introduction-to-modern-physics/' | relative_url }}">Introduction to Modern Physics</a></h2>
<p>Thermal and statistical physics followed by the foundations and central models of quantum mechanics.</p>
<ul class="entry-tags" aria-label="Course topics">
<li>Spring 2025</li>
<li>Thermodynamics</li>
<li>Statistical mechanics</li>
<li>Quantum mechanics</li>
</ul>
</div>
</article>
{% endif %}
{% if biochemistry_notes.size > 0 %}
<article class="content-entry">
<span>COURSE · {{ biochemistry_notes.size }} CHAPTERS</span>
<div>
<h2><a href="{{ '/notes/biochemistry/' | relative_url }}">Biochemistry</a></h2>
<p>An illustrated route from molecular structure and enzyme kinetics to metabolism, biosynthesis, and whole-body metabolic regulation.</p>
<ul class="entry-tags" aria-label="Course topics">
<li>Fall 2023</li>
<li>Biomolecules</li>
<li>Enzymes</li>
<li>Metabolism</li>
<li>Biosynthesis</li>
</ul>
</div>
</article>
{% endif %}
{% if cell_biology_notes.size > 0 %}
<article class="content-entry">
<span>COURSE · {{ cell_biology_notes.size }} CHAPTERS</span>
<div>
<h2><a href="{{ '/notes/cell-biology/' | relative_url }}">Cell Biology</a></h2>
<p>An illustrated course on cellular architecture, membrane dynamics, gene control, signaling, development, cancer, stem cells, and immunity.</p>
<ul class="entry-tags" aria-label="Course topics">
<li>Spring 2024</li>
<li>Cellular organization</li>
<li>Signaling</li>
<li>Development</li>
<li>Disease</li>
</ul>
</div>
</article>
{% endif %}
</div>
{% else %}
<div class="notes-empty">
<span class="notes-empty-icon"><i class="fa-regular fa-pen-to-square"></i></span>
<h2>Notes are on the way.</h2>
<p>I am preparing learning notes on neuroscience, machine learning, physics, mathematics, and biology. This page will grow alongside what I study.</p>
</div>
{% endif %}

</div>
