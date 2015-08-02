---
layout: default
title: Labs
permalink: /labs/
heading: The Lab.
subheading: Powered by energy drinks and pizza.
image: /assets/images/posts/the-lab.jpg
image: /assets/images/gifs/dexterslab.gif
image: /assets/images/gifs/bb-dancing.gif
bodyClass: labs-page
heroClasses: dark cover-bg
midnight: dark-bg
---

{% include hero.html %}

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
				<p>{{ lab.description }}</p>
			</div>
		</a>
	</article>
	{% endfor %}

</div>
