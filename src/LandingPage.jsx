// LandingPage.js
import React,{useState} from 'react';
// import { Link } from 'react-router-dom';
import './LandingPage.css';
import SearchResults from './SearchResults'; // Adjust the path based on your project structure
import axios from 'axios';

const LandingPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async ()=>{
    try{
        const response = await axios.get(`https://pixabay.com/api/?key=41942027-3335e4313213e3ebb9a8d84bc&q=${searchTerm}&image_type=photo`);
        setResults(response.data.hits);
    }catch(error){
        console.error('Error fetching results:', error);
    }
    };


  return (
    <div className="landing-page">
      <div className="navbar">
        <h3>Homepage</h3>
        <div>
          <button>Login</button>
          <a href="/create-account">
            <button>Create Account</button>
          </a>
        </div>
      </div>
      <div className="headline">
        <h1>Discover Over 2,00,000 stock images here</h1>
      </div>
      <div className="search-bar">
          <input
            type="text"
            placeholder="Search "
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-button" onClick={handleSearch}>GO!</button>
      </div>
      {results.length > 0 && <SearchResults searchTerm={searchTerm} results={results} />}
    </div>
  );
}

export default LandingPage;
