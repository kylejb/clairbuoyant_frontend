import _ from 'lodash'
import React from 'react'
import { Search, Grid } from 'semantic-ui-react'


// const resultRenderer = ({ name }) => <Label content={name} />

class SearchExampleStandardCustom extends React.Component {
  state = {
    results: [],
    value: ''
  }

  handleSearchChange = (e, data) => {
    this.setState({value: data.value}, () => {
      if (this.state.value !== ''){
        const re = new RegExp(_.escapeRegExp(data.value), 'i')
        const isMatch = (result) => re.test(result.name)
        this.handleResults(this.props.beachOptions.filter(isMatch))
      } else if (this.state.results.length) {
        this.setState({ results: [] })
      }}
    );
  }

  handleResults = (result) => {
    if (result) {
      this.setState({ results: result })
    }
  }

  render(){
    return (
      <>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Grid>
        <Grid.Column width={6}>
          <Search
            loading={this.state.loading}
            onResultSelect={(e, data) => {
              e.preventDefault();
              this.setState({results: data})

            }}
            onSearchChange={this.handleSearchChange}
            // resultRenderer={resultRenderer}
            // results={this.state.results}
            value={this.state.value}
          />
        </Grid.Column>
      </Grid>
      </>
    )
  }
}

export default SearchExampleStandardCustom;