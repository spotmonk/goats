import React from 'react';
import PropTypes from 'prop-types';
import './Goat.scss';
import goatShape from '../../helpers/goatShape';

class Goat extends React.Component {
  static propTypes = {
    goat: goatShape.goatShape,
    takeAGoat: PropTypes.func,
  }

  toggleGoatEvent = (e) => {
    console.warn("button clicked");
    e.preventDefault();
    const { goat, takeAGoat } = this.props
    takeAGoat(goat.id)
  }

  render() {
    const { goat } = this.props;
    return (
      <div className="card">
       <img src={goat.imgUrl} className="card-img-top" alt="a goat" />
       <div className="card-body">
         <h5 className="card-title">{goat.name}</h5>
         <p className="card-text">This goat is {goat.age} years old and is as described: "{goat.description}"</p>
       </div>
    <div className="card-footer">{goat.isTaken ? <button className="btn-danger col-12" onClick={this.toggleGoatEvent} >Free the Goat</button> : <button className="btn-success col-12" onClick={this.toggleGoatEvent}>Take the Goat</button>}</div>
      </div>
    )
  }
}

export default Goat;
