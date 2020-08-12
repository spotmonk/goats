import React from 'react';
import Goat from '../Goat/Goat'
import PropTypes from 'prop-types';
import goatShape from '../../helpers/goatShape';

class GoatCorral extends React.Component {
  static propTypes = {
    goats: PropTypes.arrayOf(goatShape.goatShape),
    takeAGoat: PropTypes.func,
  }
  
  render() {
    const { goats, takeAGoat } = this.props;
    
    const goatCards = goats.map((goat) => (
    <Goat takeAGoat={takeAGoat} key={goat.id} goat={goat}/>
    ));
    
    return (
      <div>
        <h2>Get Your Goat</h2>
        { goatCards }
      </div>
    )
  }
}

export default GoatCorral;
