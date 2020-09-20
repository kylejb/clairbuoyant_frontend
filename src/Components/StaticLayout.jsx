import React from 'react';
import BeachContainer from '../Containers/BeachContainer';
import BeachSearch from './BeachSearch';

class StaticLayout extends React.Component {
  state = {
    beachSearch: "",
    beachOptions: []
  }

  async componentDidMount(){
    let response = await fetch("http://localhost:3000/api/v1/beaches");
    let data = await response.json();
    this.setState({ ...this.state, beachOptions: data }, () => console.log("StaticLayout ", this.state.beachOptions));
  }

  beachSearchHandler = (searchValue) => {
    this.setState({...this.state, beachSearch: searchValue})
  }

  render(){
    return (
      <>
        <BeachSearch beachSearch={this.beachSearchHandler} beachOptions={this.state.beachOptions} />
        <BeachContainer beach={this.state.beachSearch} />
      </>
    );
  }
}

export default StaticLayout;