import { Link } from 'react-router-dom'
import React from 'react';
import './Insight.css';


function Insight(props) {
  return (
    <div className="insight">
      <div className="welcome-message">Welcome to Insights</div>
      <div className="title1"> Insight #1: </div>
      <div className="insight1"> Digital platforms for political workers were often glitchy, which made it harder to campaign.
 </div>
      <div className="title2"> Insight #2: </div>
      <div className="insight2"> We spoke to political workers on national campaigns in which technology played a major role, but many of the local activists said that they prioritized in-person outreach.
 </div>
      <div className="title3"> Insight #3: </div>
      <div className="insight3"> Local campaigns have had trouble funding a technological approach to outreach and mobilization due to a high cost of entry, leading to less efficient canvassing and a lack of analytics. The campaigns that used digital tools were typically national and had much bigger budgets.
 </div>
 <Link to='/' className="home-link2"> Go Home </Link>
    </div>
  );
}


export default Insight;
