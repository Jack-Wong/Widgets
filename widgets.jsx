import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './tabs';
import WeatherClock from './weather-clock';
import AutoComplete from './autocomplete';

class Widgets extends React.Component {
  constructor(props) {
    super(props);
  }

  tabs() {
    return [
      {
        title: "Tab 1",
        content: "In tab 1"
      },
      {
        title: "Tab 2",
        content: "In tab 2"
      },
      {
        title: "Tab 3",
        content: "In tab 3"
      }
    ]
  }

  names() {
    return [
      'Jack',
      'Aaron',
      'Tim',
      'Howie'
    ]
  }

  render () {
    return (
      <div>
        <Tabs tabs={this.tabs()}/>
        <WeatherClock/>
        <AutoComplete names={this.names()}/>
      </div>
    );
  }
}


document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector("#root");
  ReactDOM.render(<Widgets/>, root);
});
