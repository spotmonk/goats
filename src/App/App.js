import React from 'react';
import goatData from '../helpers/data/goatData';

import './App.scss';
import GoatCorral from '../components/GoatCorral/GoatCorral';

class App extends React.Component {
  state = {
    goats: []
  }

  componentDidMount() {
    const goats = goatData.getGoats();
    this.setState({ goats });
  }

  takeAGoat = (goatId) => {
    goatData.takeGoat(goatId);
    const goats = goatData.getGoats();
    this.setState({ goats });
  }

  render() {
    const { goats } = this.state;

    return (
      <div className="App">
        <GoatCorral takeAGoat={this.takeAGoat} goats={goats}/>
      </div>
    );
  }
}

export default App;
