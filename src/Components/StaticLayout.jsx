import React from 'react';
import { Route } from 'react-router-dom';
import BeachContainer from '../Containers/BeachContainer';
import WorldMap from './worldmap/WorldMap';

const StaticLayout = props => {


  // async componentDidMount(){
  //   let response = await fetch("http://localhost:3000/api/v1/beaches");
  //   let data = await response.json();
  //   this.setState({ ...this.state, beachOptions: data });
  // }

  // beachSearchHandler = (searchValue) => {
  //   this.setState({...this.state, beachSearch: searchValue})
  // }


  return (
    <>
      <Route path='/forecast' render={() => <BeachContainer beach={props.beach} />} />
      <WorldMap />

    </>
  );
  
}

export default StaticLayout;