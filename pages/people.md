---
layout: page
title: People
permalink: /people/
weight: 2
---

# People

<div class="people-section">
{% for group in site.data.people %}
  {% assign group_name = group[0] %}
  {% assign members = group[1] %}
  <h2>{{ group_name }}</h2>
  <div class="people-row">
  {% for person in members %}
    <div class="person-card">
      {% assign parts = person.name | split: ' ' %}
      {% assign initials = '' %}
      {% assign initials = initials | append: parts[0] | slice: 0,1 %}
      {% if parts.size > 1 %}
        {% assign initials = initials | append: parts[1] | slice: 0,1 %}
      {% endif %}
      {% if person.photo %}
        <img class="person-photo" src="{{ '/assets/images/people/' | append: person.photo }}" alt="{{ person.name }}">
      {% else %}
        <div class="avatar-initials">{{ initials }}</div>
      {% endif %}
      <div class="person-name">{{ person.name }}</div>
      <div class="person-title">{{ person.title }}</div>
    </div>
  {% endfor %}
  </div>
{% endfor %}
</div>
