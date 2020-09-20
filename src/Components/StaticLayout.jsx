import React from 'react';
import BeachContainer from '../Containers/BeachContainer';

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
      <BeachContainer beach={props.beach} />
    </>
  );
  
}

export default StaticLayout;