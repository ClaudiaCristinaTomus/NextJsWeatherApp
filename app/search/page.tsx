"use client";
import React,{useState} from "react";
import SearchInput from "../components/SearchInput";
import WeatherForecast from "../components/WeatherForecast";
import{
    CurrentWeather as CurrentWeatherType,
    Forecast,
} from "../modules/weather";

import fetchWeatherData from "../services/weather";

const SearchPage: React.FC = () =>{
    const [forecast,setForecast]=useState<Forecast[] | null>(null);
    const handleSearch = async (city:string) =>{
        try{
            const{forecast}=await fetchWeatherData(city);
            setForecast(forecast);

        }catch(error){
            console.error(error);
        }
    };
    return(
        <div>
            <SearchInput onSearch={handleSearch} /><WeatherForecast/>
        </div>
    );
};

export default SearchPage;