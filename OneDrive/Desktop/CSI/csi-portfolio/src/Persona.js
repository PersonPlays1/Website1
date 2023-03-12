import React from 'react';
import { Link } from 'react-router-dom';


const Personas = ({image, name}) => {
  return (
      <div>
        <h4>{'Personas'}</h4>
        <h3>{'Sally Super Campaigner'}</h3>
          <img className="persona-image" src={"./Sally.png"} alt='persona'/>
          <h3>{'Gemma Gen-Z Activist'}</h3>
          <img className="persona-image2" src={"./Gemma.png"} alt='persona'/>
          <h3>{'Parker Policy Worker'}</h3>
          <img className="persona-image3" src={"./Parker.png"} alt='persona'/>
          <Link to='/' className="home-link3"> Go Home </Link>
      </div>
  )
}

export default Personas
