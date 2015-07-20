---
layout: default
title: Labs
permalink: /labs/
heading: The Lab.
subheading: Where I tinker and shit. Science bitch.
image: http://images7.alphacoders.com/300/300002.jpg
bodyClass: labs-page
heroClasses: dark cover-bg
midnight: dark-bg
---

<section class="hero hero-mod {{ page.heroClasses }}" {% if page.midnight %} data-midnight="{{ page.midnight }}" {% endif %}>
	<div class="hero-bg" style="background-image: url({{ page.image }});"></div>
	<div class="container hero-blurb">
		<h1 class="title" data-sr="enter bottom">
			{{ page.heading }}
		</h1>
		<h6 class="subtitle" data-sr="enter bottom">
			{{ page.subheading }}
		</h6>
	</div>
</section>

<div class="post-list">
	{% for lab in site.categories.labs %}
	<article class="post dark">
		<a href="{{ lab.url | prepend: site.baseurl }}">
			<div class="post-bg" style="background-image: url({{ lab.image }});"></div>
			<div class="container">
				<h2>{{ lab.title }}</h2>
				<div class="post-meta">
					<!-- 1.30.2015 -->
					<span class="date">{{ lab.date | date: "%m.%d.%Y" }}</span>
					{% if lab.categories.size > 0 %}<span class="categories">{{ lab.categories | join:" / " }}</span>{% endif %}
				</div>
				<p>{{ lab.excerpt }}</p>
			</div>
		</a>
	</article>
	{% endfor %}

</div>
