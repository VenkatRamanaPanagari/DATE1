import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'Date';
  text = 'Weather and time';
  update='Every second';
  Weather ='OpenWeatherMap';
  API_KEY = 'd586997381dc1b5e675e594118f5f003';
  Icons = 'fontawesome';
  city ='Toronto';
  Test = 'Unit Testing';
  CI = 'Travis';

  today: number = Date.now();
  WeatherData:any;
  ngOnInit(): void {
    setInterval(() => {
      this.today = Date.now();
      console.log(this.today);
    }, 1000);

    this.WeatherData = {
      main : {},
      isDay: true
    };

    this.getWeatherData();
    console.log(this.WeatherData);
  };
  getWeatherData(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=toronto&appid=d586997381dc1b5e675e594118f5f003')
    .then(response=>response.json())
    .then(data=>{this.setWeatherData(data);})

    // let data = JSON.parse('{"coord":{"lon":72.85,"lat":19.01},"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50n"}],"base":"stations","main":{"temp":297.15,"feels_like":297.4,"temp_min":297.15,"temp_max":297.15,"pressure":1013,"humidity":69},"visibility":3500,"wind":{"speed":3.6,"deg":300},"clouds":{"all":20},"dt":1580141589,"sys":{"type":1,"id":9052,"country":"IN","sunrise":1580089441,"sunset":1580129884},"timezone":19800,"id":1275339,"name":"Mumbai","cod":200}');
    // this.setWeatherData(data);
  }

  setWeatherData(data: any){
    this.WeatherData = data;
    let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
    this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
  }


}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAh1NeStCv-pkZK21JqecNtsdxUHNaN9y8",
  authDomain: "angular8448.firebaseapp.com",
  projectId: "angular8448",
  storageBucket: "angular8448.appspot.com",
  messagingSenderId: "779505909761",
  appId: "1:779505909761:web:6c12a6943b23a9946ac000",
  measurementId: "G-2D9Z5CRFQ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
