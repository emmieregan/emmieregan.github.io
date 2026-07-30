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
  <h2 class="text-center">{{ group_name }}</h2>
  <div class="row justify-content-center">
  {% for person in members %}
    <div class="col-6 col-sm-4 col-md-3 mb-4">
      <div class="card h-100 text-center">
        <div class="card-body d-flex flex-column align-items-center">
          {% assign parts = person.name | split: ' ' %}
          {% assign initials = '' %}
          {% assign initials = initials | append: parts[0] | slice: 0,1 %}
          {% if parts.size > 1 %}
            {% assign initials = initials | append: parts[1] | slice: 0,1 %}
          {% endif %}
          {% if person.photo %}
            <img class="rounded-circle mb-3" src="{{ '/assets/images/people/' | append: person.photo }}" alt="{{ person.name }}" style="width:96px;height:96px;object-fit:cover;">
          {% else %}
            <div class="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mb-3" style="width:96px;height:96px;font-weight:700;font-size:28px;">{{ initials }}</div>
          {% endif %}
          <h5 class="card-title mb-1">{{ person.name }}</h5>
          <p class="card-text text-muted mb-0">{{ person.title }}</p>
        </div>
      </div>
    </div>
  {% endfor %}
  </div>
{% endfor %}
</div>
