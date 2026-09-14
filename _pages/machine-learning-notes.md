---
layout: default
permalink: /notes/machine-learning/
title: Machine Learning
description: "Course notes covering the mathematical foundations and core methods of machine learning."
nav: false
---

<div class="post content-index">
  <header class="post-header page-hero-header">
    <p class="eyebrow"><a href="{{ '/notes/' | relative_url }}">NOTES</a> · COURSE</p>
    <h1 class="post-title">Machine Learning</h1>
    <p class="post-description">Course notes from Fall 2024, reorganized from handwritten lectures and revised for mathematical accuracy.</p>
  </header>

{% assign course_notes = site.notes | where: 'course', 'Machine Learning' | sort: 'chapter' %}

<div class="content-entry-list">
{% for note in course_notes %}
<article class="content-entry">
<span>Chapter {{ note.chapter }}</span>
<div>
<h2><a href="{{ note.url | relative_url }}">{{ note.title }}</a></h2>
{% if note.description %}<p>{{ note.description }}</p>{% endif %}
{% if note.tags.size > 0 %}
<ul class="entry-tags" aria-label="Chapter topics">
{% for tag in note.tags %}{% unless tag == 'machine-learning' %}<li>{{ tag }}</li>{% endunless %}{% endfor %}
</ul>
{% endif %}
</div>
</article>
{% endfor %}
</div>

</div>
