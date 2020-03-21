import React from 'react';
import './App.css';
import BusinessList from "D:/Git Bash/ravenous/src/components/BusinessList/BusinessList";
import SearchBar from "D:/Git Bash/ravenous/src/components/SearchBar/SearchBar";
import Yelp from "D:/Git Bash/ravenous/src/util/Yelp";
import ErrorBoundary from "D:/Git Bash/ravenous/src/components/ErrorBoundary/ErrorBoundary";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: []
    };
    this.searchYelp = this.searchYelp.bind(this);
  }
  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then(businesses => {
      this.setState({businesses: businesses})
    })
  }
  render () {
    return (
      <div className="App">
    <h1>ravenous</h1>
    <ErrorBoundary>
    <SearchBar searchYelp={this.searchYelp}/>
    <BusinessList businesses={this.state.businesses}/> 
    </ErrorBoundary>
  </div>
    );
  }
  }
export default App;
