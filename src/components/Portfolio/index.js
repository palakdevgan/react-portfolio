import React from 'react';
import Project from '../Project';

function Portfolio() {
  return (
    <section id="work" className="my-work">
      <div className="work-header">
        <h2 className="section-title primary-border">Projects</h2>
      </div>
      <div className="work-flex">
        <Project />
      </div>

    </section>
  );
}

export default Portfolio;