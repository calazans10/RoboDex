import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.state = {
      robots: [],
      searchTerm: '',
      isPending: true
    }
  }

  componentDidMount() {
    axios.get('http://jsonplaceholder.typicode.com/users')
      .then((response) => {
        this.setState({
          robots: response.data,
          isPending: false
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onSearchChange(e) {
    this.setState({searchTerm: e.target.value});
  }

  render() {
    const { robots, searchTerm, isPending } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
      <div className="tc">
        <h1>RoboDex</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <Scroll>
          {isPending ? <h2>Loading...</h2> : <CardList robots={filteredRobots} />}
        </Scroll>
      </div>
    );
  }
}

export default App;
