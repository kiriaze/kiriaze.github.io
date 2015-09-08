---
layout: default
title: Work
permalink: /work/
---

<section class="work-title-list" data-midnight="dark-bg" data-scroll-target="work">
	<div class="container">

		{% assign counter = '0.1' %}
		{% assign works = site.data.work | sort:'order' %}

		{% for work in works %}

			{% capture counter %}{{ counter | plus:'0.125' }}{% endcapture %}

			<a href="{{ work.url | prepend: site.baseurl }}" class="js-ajax-link wow fadeIn {{ work.status }}" data-wow-delay='{{ counter }}s'>{{ work.name }}.</a>
			{% if work.status == 'completed' %}
				{% if work.video %}
					<video class="work-title-bg work-title-video" preload="auto" poster="{{ work.image }}" autoplay="" loop="" muted="">
						<source src="{{ work.video }}" type="video/mp4">
					</video>
				{% else %}
					<div class="work-title-bg" style="background-image:url({{ work.image }})"></div>
				{% endif %}
			{% endif %}
		{% endfor %}

	</div>
</section>


{% comment %}
<section class="work-title-list" data-midnight="dark-bg" data-scroll-target="work">
	<div class="container">

		{% assign counter = '0.1' %}

		{% assign sorted_pages = site.categories.work | sort:'order' %}

		{% for project in sorted_pages %}
			{% capture counter %}{{ counter | plus:'0.125' }}{% endcapture %}
			<a href="{{ project.url | prepend: site.baseurl }}" class="js-ajax-link wow fadeIn {{ project.status }}" data-wow-delay='{{ counter }}s'>{{ project.title }}.</a>
			{% if project.status == 'completed' %}
				{% if project.video %}
					<video class="work-title-bg work-title-video" preload="auto" poster="{{ project.image }}" autoplay="" loop="" muted="">
						<source src="{{ project.video }}" type="video/mp4">
					</video>
				{% else %}
					<div class="work-title-bg" style="background-image:url({{ project.image }})"></div>
				{% endif %}
			{% endif %}
		{% endfor %}

	</div>
</section>
{% endcomment %}


{% comment %}
<!-- grid view like blog/labs -->

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
