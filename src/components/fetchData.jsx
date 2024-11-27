import { useEffect, useState } from "react";
import axios from 'axios'
import WeatherCard from "./weatherCard";

export default function FetchData({place}) {
    const [lat, setLat] = useState('');
    const [long, setLong] = useState('');
    const [countryName, setCountryName] = useState('')
    const [weatherCardInfo, setWeatherCardInfo] = useState(["1", ["2024-01-01"], [1], [1]]);
    const [loading, setLoading] = useState(false);

    // format user input so it is accepted in google format "place+place+"
    const formatPlace = (place_input) => {
        var newPlace= '';
        var arr;
        if (place_input.includes(',')) {
            arr = place_input.split(',');
        } else if (place_input.includes(' ')) {
            arr = place_input.split(' ');
        }
        if (arr.length > 0) {
            for (const word of arr) {
                newPlace += word + "+";
            }
        } else {
            newPlace += place_input;
        }
        return newPlace;
    }

    useEffect(() => {
        const fetchGeoLocation = async () => {
            try {
                setLoading(true);
                const locationParameters = formatPlace(place);
                // get geolocation from user search
                const geolocationData = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${locationParameters}&key=${process.env.MAPS_GOOGLE_APIS_GEOCODE_KEY}`);
                setLat(geolocationData.data.results[0].geometry.location.lat);
                setLong(geolocationData.data.results[0].geometry.location.lng);
                setCountryName(
                    geolocationData.data.results[0].formatted_address,
                );

            } catch (err) {
                console.log("Geolocation api errors");
                console.log(err);
            } finally {
            }
        };
        fetchGeoLocation();
    }, [place]);

    useEffect(() => { 
        const fetchData = async () => { 
            try { 
                var dates = [];
                // get weather data
                // no api key required
                const weatherData = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&models=metno_seamless&forecast_days=6&current=temperature_2m&daily=temperature_2m_min,temperature_2m_max`);
                // push dates from response into dates array bcse weatherData data isn't in an array
                for (const date of weatherData.data.daily.time) {
                    dates.push(date);
                }
                setWeatherCardInfo([
                    countryName,
                    dates,
                    weatherData.data.daily.temperature_2m_min,
                    weatherData.data.daily.temperature_2m_max
                ]);
                setLoading(false);
            } catch (err) { 
                console.log("weatherData api errors");
                console.log(err);
            } finally { 
                
            } 
        };
        if (lat && long && countryName) {
            fetchData();
        }
    }, [lat, long, countryName]);
    
    return (
        <WeatherCard info={weatherCardInfo} isLoading={loading}/>        
    )
}