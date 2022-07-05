import React from 'react';
import Project from '../Project';
import MovingText from 'react-moving-text'

function Portfolio() {
  return (
    <section id="work" className="my-work">
      <div className="work-header">
        <h2 className="section-title primary-border">
        <MovingText
        type="typewriter"
        iteration={1}
          dataText={[
            'Work'
          ]}>
        </MovingText>
        </h2>
      </div>
      <div className="work-flex">
        <Project />
      </div>

    </section>
  );
}

export default Portfolio;