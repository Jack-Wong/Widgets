import React from 'react'

class AutoComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
    this.inputName = this.inputName.bind(this);
  }

  inputName(event) {
    return(event => this.setState({query: event.currentTarget.value}));
  }

  render() {
    const autoComplete = [];
    for (var i = 0; i < this.props.names.length; i++) {
      if (this.state.query.length === 0) {
        autoComplete.push(<li key={i}>{this.props.names[i]}</li>)
      } else if (this.props.names[i].startsWith(this.state.query, 0)) {
        autoComplete.push(<li key={i}>{this.props.names[i]}</li>)
      };
    }
    return (
      <div>
        <input onChange={this.inputName()} value={this.state.query}/>
        <ul>
          {autoComplete}
        </ul>
      </div>
    );
  };
}

export default AutoComplete;
