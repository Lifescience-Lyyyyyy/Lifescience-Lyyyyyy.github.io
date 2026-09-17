---
layout: default
permalink: /notes/biochemistry/
title: Biochemistry
description: "Illustrated course notes on biomolecular structure, enzymology, metabolism, biosynthesis, and metabolic integration."
nav: false
---

<div class="post content-index">
  <header class="post-header page-hero-header">
    <p class="eyebrow"><a href="{{ '/notes/' | relative_url }}">NOTES</a> · COURSE</p>
    <h1 class="post-title">Biochemistry</h1>
    <p class="post-description">Course notes from Fall 2023, reorganized in English from my annotated OneNote pages. The original visual material is preserved in chapter galleries, and incomplete lectures have been expanded into self-contained notes.</p>
  </header>

{% assign course_notes = site.notes | where: 'course', 'Biochemistry' | sort: 'chapter' %}
{% assign current_part = '' %}

<div class="content-entry-list">
{% for note in course_notes %}
{% if note.part != current_part %}
<div class="content-section-label"><h2>{{ note.part }}</h2></div>
{% assign current_part = note.part %}
{% endif %}
<article class="content-entry">
<span>Chapter {{ note.chapter }}</span>
<div>
<h2><a href="{{ note.url | relative_url }}">{{ note.title }}</a></h2>
{% if note.description %}<p>{{ note.description }}</p>{% endif %}
{% if note.tags.size > 0 %}
<ul class="entry-tags" aria-label="Chapter topics">
{% for tag in note.tags %}{% unless tag == 'biochemistry' %}<li>{{ tag }}</li>{% endunless %}{% endfor %}
</ul>
{% endif %}
</div>
</article>
{% endfor %}
</div>

</div>
