import React from 'react';
import Project from '../Project';

function Portfolio() {
  return (
    <section id="work" class="my-work">
      <div class="work-header">
        <h2 class="section-title primary-border">Work</h2>
      </div>
      <div class="work-flex">
        <Project />
      </div>

    </section>
  );
}

export default Portfolio;