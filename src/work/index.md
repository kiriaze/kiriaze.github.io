---
layout: default
title: Work
permalink: /work/
---

<section class="work-title-list" data-midnight="dark-bg" data-scroll-target="work">
	<div class="container">

		{% assign counter = '0.1' %}

		{% assign sorted_pages = site.categories.work | sort:'order' %}

		{% for project in sorted_pages %}
			{% capture counter %}{{ counter | plus:'0.1' }}{% endcapture %}
			<a href="{{ project.url | prepend: site.baseurl }}" class="js-ajax-link {{ project.status }}" data-sr='enter left wait {{ counter }}s'>{{ project.title }}.</a>
			{% if project.video %}
				<video class="work-title-bg work-title-video" preload="auto" poster="{{ project.image }}" autoplay="" loop="" muted="">
					<source src="{{ project.video }}" type="video/mp4">
				</video>
			{% else %}
				<div class="work-title-bg" style="background-image:url({{ project.image }})"></div>
			{% endif %}
		{% endfor %}

	</div>
</section>

{% comment %}
<!-- commenting out the old work page layout for now, using the home page style work title list above instead -->

{% for project in site.categories.work limit:1 %}
{% include hero.html %}
{% endfor %}

<div class="post-list">
	{% for project in site.categories.work offset:1 %}
	<article class="post dark {% if project.image %} has-image {% endif %}">
		<a href="{{ project.url | prepend: site.baseurl }}">
			{% if project.image %}
			<div class="post-bg" style="background-image: url({{ project.image }});"></div>
			{% endif %}
			<div class="container">
				<h2>{{ project.title }}</h2>
				<div class="post-meta">
					{% if project.tags.size > 0 %}<span class="tags">{{ project.tags | join:" / " }}</span>{% endif %}
				</div>
				<p>{{ project.lead }}</p>
			</div>
		</a>
	</article>
	{% endfor %}
</div>


{% endcomment %}
