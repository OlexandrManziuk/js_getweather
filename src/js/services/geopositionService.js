import axios from 'axios';
import backgroundImageService from '../services/background-image-service';
import { defaultReqWeather } from '../render/renderOneDay';
import { setBackgroundImage } from '../components/background-image';

navigator.geolocation.getCurrentPosition(success, defaultData);

function defaultData() {
  defaultReqWeather('Kyiv');
}

function success(position) {
  const apiKey = 'd4683b09d0c94ec0aebf0b2e043decbf';
  const coordinates = position.coords;
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${coordinates.latitude}+${coordinates.longitude}&key=${apiKey}`;

  axios
    .get(url)
    .then(response => {
      return response.data.results[0].components.city
        ? response.data.results[0].components.city
        : response.data.results[0].components.village;
    })
    .then(location => {
      defaultReqWeather(location);
      setBackground(location);
    });
}

function setBackground(location) {
  backgroundImageService.query = location;
  backgroundImageService
    .makeQuery()
    .then(setBackgroundImage)
    .catch(() => {
      backgroundImageService.query = 'cloudy';
      backgroundImageService.makeQuery().then(setBackgroundImage);
    });
}
