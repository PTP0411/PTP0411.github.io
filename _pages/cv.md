---
layout: archive
title: "CV"
permalink: /cv-oo/
author_profile: true
redirect_from:
  - /resume-oo
---

{% include base_path %}

Education
======
* B.S. in Computer Science, Gettysburg College, 2025

Work experience
======
* Present: Research Assistant
  * Fulbright University Vietnam
  * Supervisor: Dr. Quan Nguyen

  
Skills
======
* Skill 1
* Skill 2
  * Sub-skill 2.1
  * Sub-skill 2.2
  * Sub-skill 2.3
* Skill 3

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>
  
Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Service and leadership
======
* Currently signed in to 43 different slack teams
