import React from 'react';

class Tabs extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      tabsIndex: 0
    };
    this.click = this.click.bind(this);
  }

  click(event) {
    return (event) => {
      event.preventDefault();
      this.setState({tabsIndex: event.currentTarget.value});
    }
  }

  render(){
    return (
      <div>
        <ul>
          <li onClick={this.click()} value={0}>
            <h1>{this.props.tabs[0].title}</h1></li>
          <li onClick={this.click()} value={1}>
            <h1>{this.props.tabs[1].title}</h1></li>
          <li onClick={this.click()} value={2}>
            <h1>{this.props.tabs[2].title}</h1></li>
        </ul>
        <article>{this.props.tabs[this.state.tabsIndex].content}</article>
      </div>
    );
  }
};

export default Tabs;
