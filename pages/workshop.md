---
layout: page
title: Workshop
permalink: /workshop/
weight: 4
---

<div class="row py-4">
  <div class="col-12">
    <h1 class="display-4">The Fellows</h1>
  </div>
</div>

<div class="row py-3 align-items-center">
  <div class="col-md-4">
    <img src="{{ '/assets/images/people/cori_photo.jpg' | relative_url }}" alt="Cori Faklaris" style="width: 100%; max-width: 220px; height: 180px; object-fit: cover; border-radius: 8px; display: block; margin: 0 auto;">
  </div>
  <div class="col-md-8">
    <h4>Cori Faklaris, PhD</h4>
    <p class="text-muted mb-1">Assistant Professor, Dept. of Software and Information Systems, College of Computing and Informatics at UNC – Charlotte; ITIS 4360/5360 Human-Centered AI</p>
  </div>
</div>

<div class="row py-3 align-items-center">
  <div class="col-md-8 order-md-1 order-2">
    <h4>Raj Korpan, PhD</h4>
    <p class="text-muted mb-1">Assistant Professor of Computer Science at Hunter College of the City University of New York (CUNY); CSCI 39536 - Intro to Robotics</p>
  </div>
  <div class="col-md-4 order-md-2 order-1">
    <img src="{{ '/assets/images/people/raj_photo.jpg' | relative_url }}" alt="Raj Korpan" style="width: 100%; max-width: 220px; height: 180px; object-fit: cover; border-radius: 8px; display: block; margin: 0 auto;">
  </div>
</div>

<div class="row py-3 align-items-center">
  <div class="col-md-4">
    <img src="{{ '/assets/images/people/gerald_photo.jpg' | relative_url }}" alt="Gerald Soosairaj" style="width: 100%; max-width: 220px; height: 180px; object-fit: cover; border-radius: 8px; display: block; margin: 0 auto;">
  </div>
  <div class="col-md-8">
    <h4>Gerald Soosairaj, PhD</h4>
    <p class="text-muted mb-1">Associate Teaching Professor in Computer Science and Engineering at the University of California, San Diego; CSE 190: Working with Large Code Bases</p>
  </div>
</div>

<div class="row py-4">
  <div class="col-12">
    <h1 class="display-4">The Workshop</h1>
  </div>
</div>

<div class="row py-4">
  <div class="col-12">
    <div class="timeline-body bg-themed">

      <div class="timeline-item">
        <div class="content">
          <p>The three Faculty Fellows came to Olin for a 4-day experience in June 2026, working in close collaboration with the team of Faculty Researchers and students.</p>

          <p>Our goals were as follows:</p>

          <ul>
            <li>Meet each other and create a sense of community and connection among the group.</li>
            <li>Start to create a “Community of Practice” among the 7 faculty members involved.</li>
            <li>Share information about the SHAPE project’s archive of materials and how we’ve used them so far.</li>
            <li>Learn about the Faculty Fellows’ courses and contexts and where the SHAPE project’s materials may fit in.</li>
            <li>Gain mutual understanding of the SHAPE project’s research questions and the relevance to the Faculty Fellows’ courses and contexts.</li>
            <li>Establish a plan for the summer.</li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</div>

<div class="row py-4">
  <div class="col-12 text-center">
    <h2>Community of Practice</h2>
    <div id="community-carousel" class="carousel slide community-carousel mx-auto my-3" style="max-width: 900px;">
      <div class="carousel-indicators">
        <button type="button" class="active" data-slide-index="0" aria-label="Slide 1"></button>
        <button type="button" data-slide-index="1" aria-label="Slide 2"></button>
        <button type="button" data-slide-index="2" aria-label="Slide 3"></button>
        <button type="button" data-slide-index="3" aria-label="Slide 4"></button>
      </div>
      <div class="carousel-inner rounded shadow-sm">
        <div class="carousel-item active">
          <img src="{{ '/assets/images/faculty fellows/Faculty Fellow Workshop Worksheets - Current Context.png' | relative_url }}" class="d-block w-100" alt="Faculty Fellow workshop current context" style="height: 420px; object-fit: contain; background-color: #f8f9fa;">
        </div>
        <div class="carousel-item">
          <img src="{{ '/assets/images/faculty fellows/Faculty Fellow Workshop Worksheets - Persona Workshop.png' | relative_url }}" class="d-block w-100" alt="Faculty Fellow workshop persona workshop" style="height: 420px; object-fit: contain; background-color: #f8f9fa;">
        </div>
        <div class="carousel-item">
          <img src="{{ '/assets/images/faculty fellows/Faculty Fellow Workshop Worksheets - Spring Cleaning.png' | relative_url }}" class="d-block w-100" alt="Faculty Fellow workshop spring cleaning" style="height: 420px; object-fit: contain; background-color: #f8f9fa;">
        </div>
        <div class="carousel-item">
          <img src="{{ '/assets/images/faculty fellows/Faculty Fellow Workshop Worksheets - Timeline in Course.png' | relative_url }}" class="d-block w-100" alt="Faculty Fellow workshop timeline in course" style="height: 420px; object-fit: contain; background-color: #f8f9fa;">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" aria-label="Previous slide">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button class="carousel-control-next" type="button" aria-label="Next slide">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
    <p class="text-left">The project faculty and the three Faculty Fellows have worked to create the conditions to be an emerging “community of practice,” and to studying our group as an example of how a group of faculty come together as a community of practice around shared interests to develop and implement curricula. We plan to share our experiences and takeaways.</p>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('community-carousel');
    if (!carousel) return;

    const items = Array.from(carousel.querySelectorAll('.carousel-item'));
    const indicators = Array.from(carousel.querySelectorAll('[data-slide-index]'));
    const prev = carousel.querySelector('.carousel-control-prev');
    const next = carousel.querySelector('.carousel-control-next');
    let currentIndex = 0;

    function updateCarousel(index) {
      currentIndex = (index + items.length) % items.length;

      items.forEach((item, i) => {
        item.classList.toggle('active', i === currentIndex);
      });

      indicators.forEach((button, i) => {
        const isActive = i === currentIndex;
        button.classList.toggle('active', isActive);
        button.setAttribute('aria-current', isActive ? 'true' : 'false');
      });
    }

    indicators.forEach((button) => {
      button.addEventListener('click', function () {
        updateCarousel(Number(this.getAttribute('data-slide-index')));
      });
    });

    prev.addEventListener('click', function () {
      updateCarousel(currentIndex - 1);
    });

    next.addEventListener('click', function () {
      updateCarousel(currentIndex + 1);
    });
  });
</script>
