import { Link } from 'react-router-dom'
import React from 'react';
import './Home.css';

function Home(props) {
  return (
    <div className="home-container">
      <div className="home-title">Political Workers</div>
      <div className="home-description">
        Political workers aim to influence government policy and legislation through campaigning, lobbying, and community organizing. They work to elect candidates, promote specific issues, and advocate for the interests of their political party or organization.
      </div>
      <Link to='/insights' className="home-link">Learn More</Link>
    </div>
  );
}

export default Home;
