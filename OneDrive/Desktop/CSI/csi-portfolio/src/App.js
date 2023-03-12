import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import Insight from './Insight';
import Reflection from './Reflection';
import { Link } from 'react-router-dom';
import Personas from './Persona'
const PersonaComponent = ({image, name}) => {
  return (
      <div>
        <h4>{'Personas'}</h4>
        <h3>{'Sally Super Campaigner'}</h3>
          <img className="persona-image" src={"./Sally.png"} alt='persona'/>
          <h3>{'Gemma Gen-Z Activist'}</h3>
          <img className="persona-image2" src={"./Gemma.png"} alt='persona'/>
          <h3>{'Parker Policy Worker'}</h3>
          <img className="persona-image3" src={"./Parker.png"} alt='persona'/>
          <Link to='/' className="home-link2"> Go Home </Link>

      </div>
  )
}

function App() {
  return (
    <div className="content" >
      <div className='nav'>
        <div className='left-column'>
        <NavLink to="/" className='author-name' > Peter Harris </NavLink>
        </div>
        <div className='right-column'>
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' }>Home</NavLink>
          <NavLink to="/personas" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' }>Personas</NavLink>
          <NavLink to="/insights" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' }>Insight Statements</NavLink>
          <NavLink to="/reflection" className={({ isActive }) => isActive ? 'reflection-link nav-link active' : 'reflection-link nav-link' }>⭐ Reflection </NavLink>
        </div>
      </div>
      <Routes>
      <Route exact path='/insight1' element={<Insight text="Digital platforms were often glitchy, which made it harder to campaign." />}></Route>
        <Route exact path='/insight2' element={<Insight text="Local campaigns have had trouble funding a technological approach to outreach and mobilization due to a high cost of entry, leading to less efficient canvassing and a lack of analytics. The campaigns that used digital tools were typically national and had much bigger budgets." />}></Route>
        <Route exact path='/insights' element={<Insight text="First Insight" />}></Route>
        <Route exact path='/Reflection' element={<Reflection text="First Insight" />}></Route>
        <Route exact path='/personas' element={<PersonaComponent />}></Route>
        <Route exact path='/'     element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
