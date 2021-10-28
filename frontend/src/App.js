import React from 'react'
import logo from './twitter.svg'
import { FaCrosshairs } from 'react-icons/fa'
import './App.css'

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} alt="twitter" className="logo" />
                <h3>Twitter Trends</h3>
            </header>
            <div className="menu">
                <select name="trending-place">
                    <option value="1">Worldwide</option>
                    <option value="26734">Liverpool</option>
                    <option value="28218">Manchester</option>
                    <option value="44418">London</option>
                    <option value="21125">Glasgow</option>
                    <option value="15127">Cardiff</option>
                    <option value="26062">Leicester</option>
                    <option value="2459115">New York</option>
                    <option value="2442047">Los Angeles</option>
                    <option value="1105779">Sydney</option>
                    <option value="1100968">Canberra</option>
                    <option value="615702">Paris</option>
                    <option value="753692">Barcelona</option>
                    <option value="638242">Berlin</option>
                    <option value="721943">Rome</option>
                    <option value="718345">Milan</option>
                    <option value="946738">Athens</option>
                    <option value="963291">Thessaloniki</option>
                </select>
                <div className="location">
                    <FaCrosshairs />
                </div>
            </div>
        </div>
    );
}

export default App
