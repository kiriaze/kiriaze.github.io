---
layout: default
title: Work
permalink: /work/
---

<section class="work-title-list" data-midnight="dark-bg" data-scroll-target="work">
	<div class="container">

		{% assign counter = '0.1' %}
		{% assign works = site.data.work %}

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
