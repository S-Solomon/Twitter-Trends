import React from "react";
import logo from "./twitter.svg";
import { FaCrosshairs } from "react-icons/fa";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

const App = () => {
    const [trends, setTrends] = useState([]);
    const [woeid, setWoeid] = useState(1);

    useEffect(() => getTrends(), [woeid]);

    function getTrends() {
        axios
            .get("/api/trends", {
                params: {
                    woeid,
                },
            })
            .then((response) => {
                // console.log(response.data);
                setTrends(response.data[0].trends)
            })
            .catch((error) => console.log(error.message));
    }

    function handleLocation() {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                axios.get('/api/near-me', {
                    params: {
                        lat: position.coords.latitude,
                        long: position.coords.longitude,
                    },
                }).then(response => { 
                    // console.log(response.data[0].woeid)
                    setWoeid(response.data[0].woeid);
                })
                .catch(error => console.log(error.message))
            }, 
            (error) => {
                console.log(error.message)
            })
        }else {
            alert(`Geolocation not supported`)
        }
    }
    function listTrends() {
        return (
            <ul>
                {trends.map((trend, index) => (
                    <li key={index}>
                        <a href={trend.url} target="_blank" rel="noreferrer">
                            {trend.name}
                        </a>
                        {trend.tweet_volume && (
                            <span className="tweet_volume">
                                {trend.tweet_volume}
                            </span>
                        )}
                    </li>
                ))}
            </ul>
        );
    }
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} alt="twitter" className="logo" />
                <h3>Twitter Trends</h3>
            </header>
            <div className="menu">
                <select
                    name="trending-place"
                    onChange={(e) => setWoeid(e.target.value)}
                >
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
                    <option value="23424960">Thailand</option>
                    <option value="2295019">New Delhi</option>
                    <option value="2171688">Zhangjiakou, China</option>
                    <option value="1180689">Makati City, Philippines</option>
                </select>
                <div className="location" onClick={handleLocation}>
                    <FaCrosshairs />
                </div>
            </div>
            <div className="content">{listTrends()}</div>
        </div>
    );
};

export default App;
