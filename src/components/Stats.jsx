import React from 'react';

const Stats = () => {
  return (
    <div className="stats">
      <div className="stat-items">
        <div className="stat-item">
          <h2 className="stat-title">$89,914</h2>
          <p className="stat-description">of $100,000 backed</p>
          <div className="stat-separator"></div>
        </div>
        <div className="stat-item">
          <h2 className="stat-title">5,007</h2>
          <p className="stat-description">total backers</p>
          <div className="stat-separator"></div>
        </div>
        <div className="stat-item">
          <h2 className="stat-title">56</h2>
          <p className="stat-description">days left</p>
        </div>
      </div>
      <div className="progress">
        <progress value="80" max="100"></progress>
      </div>
    </div>
  );
};

export default Stats;
