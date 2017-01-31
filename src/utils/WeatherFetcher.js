import axios from 'axios'

const dailyWeather = "http://api.openweathermap.org/data/2.5/weather?q="
const tail = "&type=accurate&APPID=77daca205bfae5e907047d08b22a3b65"

const fiveDayWeather = "http://api.openweathermap.org/data/2.5/forecast/daily?q="
const fiveDayTail = "&cnt=5"

let WeatherFetcher = {
	fetchDailyWeather: function(city) {
		let url = dailyWeather + city + tail;
		return axios.get(url);
	},
	fetchFiveDayWeather: function(city) {
		let url = fiveDayWeather + city + tail + fiveDayTail;
		return axios.get(url);
	}
}

export default WeatherFetcher;