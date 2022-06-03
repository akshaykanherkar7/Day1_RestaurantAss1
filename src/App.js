import './App.css';
import Filter from './components/Filter';
import Navbar from './components/Navbar';
import Offer from './components/Offer';
import Restaurants from './components/Restaurants';
import userinfo from './data/userinfo.json';
import restaurants from './data/restaurants.json'
import offers from './data/offers.json'
import { useState } from 'react';

function App() {
  const [filterBy, setFilterBy] = useState("");
  const [data, setData] = useState([]);
  const updateFilter = (newFilter) => {
    // some code will be written here
  }
  return (
    <div>
      <Navbar {...userinfo.location}/>
      <Offer offers={offers} />
      <section className='near-you'>
        <Filter currentFilteredBy={filterBy} updateFilter={updateFilter} />
        <Restaurants restaurants={restaurants}/>
      </section>
    </div>
  );
}

export default App;
