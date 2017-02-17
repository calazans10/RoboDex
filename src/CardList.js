import React, { Component } from 'react';
import Card from './Card';

class CardList extends Component {
  render() {
    return (
      <ul>
        {this.props.robots.map((robot) =>
          <Card
            key={robot.id}
            id={robot.id}
            name={robot.name}
            email={robot.email} />
        )}
      </ul>
    );
  }
}

CardList.propTypes = {
  robots: React.PropTypes.array.isRequired
};

export default CardList;

