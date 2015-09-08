---
layout: default
bodyClass: home-page
title: Home
---

<section class="hero full-height">
	<div class="container hero-blurb cd-intro random">
		<!-- 1st variation -->
 		<h1 class="cd-headline slide wow fadeIn" data-wow-delay=".6s">
			<span class="hello">Hello</span>, I'm CK.
			<br>
			<span class="cd-words-wrapper">
				<!-- <b class="is-visible">I make websites.</b>
				<b>I build solutions.</b> -->
				<b class="is-visible">I build digital products.</b>
				<b>I solve problems.</b>
				<b>I craft experiences.</b>
				<b>I hate country music.</b>
				<b>I make bomb ramen.</b>
				<b>I ride motorcycles.</b>
				<b>I'm a caffeine junky.</b>
			</span>
		</h1>
		<p class="lead wow fadeIn"><span>Interaction.</span> <span>Development.</span> <span>San Diego.</span> <span> Check out my <a href="/work">work</a>.</span></p>
	</div>
	<div class="container hero-blurb cd-intro random">
		<!-- 2nd variation -->
		<h1 class="wow fadeIn" data-wow-delay=".7s">
			Constantine Kiriaze is a <br>Web Engineer &amp; Technical Director based in <a href="javascript:;" class="highlight-text giflinks" data-src="http://media.giphy.com/media/YFCzJPNoDnMEo/giphy.gif">San Diego.</a>
		</h1>
		<p class="lead wow fadeIn" data-wow-delay="1.1s">
			Check out his work on <a href="http://dribbble.com/kiriaze">Dribbble</a> and <a href="http://github.com/kiriaze">Github</a>, random thoughts on <br><a href="http://twitter.com/kiriaze">Twitter</a> and the <a href="/blog">blog</a>, and resume on <a href="https://www.linkedin.com/in/constantinekiriaze">LinkedIn</a>.
		</p>
	</div>
</section>

{% comment %}
<!-- commenting out the old work page layout for now, using the home page style work title list above instead -->
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
{% endcomment %}
