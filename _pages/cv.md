---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* B.S. in Computer Science, Gettysburg College, 2025

Work experience
======
* Aug 2026 - Present: Research Assistant
  * Fulbright University Vietnam, AI Institute
  * Supervisor: Dr. Quan Nguyen
  * Joined a newly funded, 12-month AI Institute project coupling active search with online representation adaptation to improve rare-species discovery in ecological image collections
  * Support experiments, dataset expansion (including LILA BC), and development of the final end-to-end system, spanning codebase setup, baseline reproduction, representation-adaptation implementation, benchmarking, and manuscript preparation

* Jun 2023 - Feb 2026: Undergraduate Researcher
  * Gettysburg College
  * Supervisor: Dr. Todd Neller
  * Project: Game-Theoretic Analysis and ML Modeling of Fair Starting Positions in Mancala
    * Solved for fair starting configurations in a modified Mancala variant via exhaustive search, building a 1.2GB endgame database to make exact game-tree search tractable at scale
    * Mined 63M+ unique optimal game states and 195M+ possible moves from perfect-play search trees to characterize strategic patterns
    * Engineered 25+ domain-specific features and trained ML models (CatBoost, Random Forest, logistic regression) to predict move quality and game outcome, reaching up to 94% accuracy and cutting prediction error by ~89% vs. a linear baseline
    * Wrote first-author paper and presented at the Computers and Games conference (Netherlands, 2026)
  * Project: Solving Optimal Strategy for a Stochastic Dice Game via Dynamic Programming
    * Formulated "Great Rolled Ones" as a Markov decision process and derived closed-form recursive win-probability equations over a bounded, high-dimensional state space
    * Solved for the exact optimal policy via value iteration, then computed a fair "komi" adjustment, closing a ~10% second-player advantage to within 1%
    * Designed several human-playable policies and quantified each one's win-rate gap over optimal play (5.4% down to 1%)
    * Co-authored paper and presented at the Advances in Computer Games conference (2023)


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
* President of Vietnamese Student Association, 2023
* First class Boy Scout of Vietnam, 2009-2021
