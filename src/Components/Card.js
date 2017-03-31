import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <li className="bg-light-green dib pa3 ma2 tc br2 grow">
        <img
          role="presentation"
          src={`//robohash.org/${this.props.id}?size=200x200`} />
        <h2>{this.props.name}</h2>
        <p>{this.props.email || '(no email found)'}</p>
      </li>
    );
  }
}

Card.propTypes = {
  id: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  email: React.PropTypes.string
};

export default Card;
