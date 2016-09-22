import React from 'react';

class WeatherClock extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div>
        <Clock/>
        <Weather/>
      </div>
    );
  };
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  };

  componentDidMount() {
    setInterval(() => this.setState({date: new Date()}), 100)
  }

  render() {
    return (
      <div>
        {this.state.date.toString()}
      </div>
    );
  };
}

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: '',
      temp: ''
    }
  };

  componentDidMount() {
    const geo = navigator.geolocation;
    geo.getCurrentPosition(
      pos => {
        const coords = pos.coords;
        const request = new XMLHttpRequest();
        request.open('GET', "http://api.openweathermap.org/data/2.5/weather?lat=" + coords.latitude + "&lon=" + coords.longitude + "&APPID=645c5d39c7603f17e23fcaffcea1a3c1", true);

        request.onload = () => {
          if (request.status >= 200 && request.status < 400) {
            this.setState({weather: request.responseText});
          }
        };
        request.send();
      }
    );
  }

  render() {
    return (
      <div>
        {this.state.weather}
        {this.state.temp}
      </div>
    );
  };
}

export default WeatherClock;
