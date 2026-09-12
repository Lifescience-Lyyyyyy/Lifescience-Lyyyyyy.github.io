---
layout: default
permalink: /blog/
title: Blog
description: Reflections on research, learning, and life at the intersection of biology and AI.
nav: true
nav_order: 4
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 10
  sort_field: date
  sort_reverse: true
---

<div class="post content-index">
  <header class="post-header page-hero-header">
    <p class="eyebrow">IDEAS · REFLECTIONS · LIFE</p>
    <h1 class="post-title">Blog</h1>
    <p class="post-description">Longer-form reflections on research, learning, and life at the intersection of biology and artificial intelligence.</p>
  </header>

{% assign blog_posts = paginator.posts | default: site.posts %}
{% if blog_posts.size > 0 %}
<div class="content-entry-list">
{% for post in blog_posts %}

<article class="content-entry">
<time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: '%B %d, %Y' }}</time>
<div>
<h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
{% if post.description %}<p>{{ post.description }}</p>{% endif %}
{% if post.tags.size > 0 %}
<ul class="entry-tags" aria-label="Post topics">
{% for tag in post.tags %}<li>{{ tag }}</li>{% endfor %}
</ul>
{% endif %}
</div>
</article>
      {% endfor %}
    </div>
    {% if paginator.total_pages > 1 %}{% include pagination.liquid %}{% endif %}
{% else %}
<div class="notes-empty">
<span class="notes-empty-icon"><i class="fa-regular fa-message"></i></span>
<h2>Writing in progress.</h2>
<p>I am preparing longer reflections on research, interdisciplinary learning, and the questions that stay with me beyond the lab.</p>
</div>
{% endif %}

</div>
