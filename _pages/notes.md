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

{% assign sorted_notes = site.notes | sort: 'date' | reverse %}
{% if sorted_notes.size > 0 %}
<div class="content-entry-list">
{% for note in sorted_notes %}
<article class="content-entry">
<time datetime="{{ note.date | date_to_xmlschema }}">{{ note.date | date: '%B %d, %Y' }}</time>
<div>
<h2><a href="{{ note.url | relative_url }}">{{ note.title }}</a></h2>
{% if note.description %}<p>{{ note.description }}</p>{% endif %}
{% if note.tags.size > 0 %}
<ul class="entry-tags" aria-label="Note topics">
{% for tag in note.tags %}<li>{{ tag }}</li>{% endfor %}
</ul>
{% endif %}
</div>
</article>
{% endfor %}
</div>
{% else %}
<div class="notes-empty">
<span class="notes-empty-icon"><i class="fa-regular fa-pen-to-square"></i></span>
<h2>Notes are on the way.</h2>
<p>I am preparing learning notes on neuroscience, machine learning, mathematics, and biology. This page will grow alongside what I study.</p>
</div>
{% endif %}

</div>
