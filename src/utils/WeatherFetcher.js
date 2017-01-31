import axios from 'axios'

const BASE = "http://api.openweathermap.org/data/2.5/weather?q="
const tail = "&type=accurate&APPID=77daca205bfae5e907047d08b22a3b65"

let WeatherFetcher = {
	fetchWeather: function(city) {
		let url = BASE + city + tail;
		return axios.get(url);
	}
}

export default WeatherFetcher;