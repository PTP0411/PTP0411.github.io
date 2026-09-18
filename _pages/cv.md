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
* __Aug 2026 - Present: Research Assistant__
  * Fulbright University Vietnam, AI Institute
  * Supervisor: Dr. Quan Nguyen
  * Joined a newly funded, 12-month AI Institute project coupling active search with online representation adaptation to improve rare-species discovery in ecological image collections
  * Support experiments, dataset expansion (including LILA BC), and development of the final end-to-end system, spanning codebase setup, baseline reproduction, representation-adaptation implementation, benchmarking, and manuscript preparation

* __Jun 2023 - Feb 2026: Undergraduate Researcher__
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

* __Summer 2025: Intern__
  * Center for Career Engagement, Gettysburg College
  * Built a Python integration pipeline automating cross-referencing of contacts between Less Annoying CRM (LACRM) and PeopleGrove, identifying users who completed signup on the institution's PeopleGrove platform
  * Developed modular scripts for fetching, matching, and syncing records across both systems (LACRM API pagination handling, PeopleGrove export/report automation, JSON-based contact matching by advancedID/database key), consolidated into a single end-to-end orchestration script
  * Implemented rate-limit handling (HTTP 429 backoff) for PeopleGrove's 50 requests/minute API cap, and designed a fallback CSV-export workflow to bypass rate limits at scale
  * Automated LACRM custom field updates to reflect PeopleGrove signup status, reducing manual cross-referencing for the Center's staff

* __Summer 2022: Intern__
  * DIGINET Corporation
  * Built a JavaScript library converting MSSQL database schemas to MySQL from the ground up, including type mapping across 20+ MSSQL data types (e.g., varbinary, uniqueidentifier, datetimeoffset) with length-dependent branching logic (e.g., varchar → TEXT vs. LONGTEXT by size threshold)
  * Handled edge cases in reserved-keyword collisions, invalid SQL identifier characters, and semantic translation of MSSQL system defaults (e.g., getdate(), newid()) to MySQL equivalents


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
