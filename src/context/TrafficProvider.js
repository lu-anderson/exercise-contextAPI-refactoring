import React from 'react';
import TrafficContext from './TrafficContex';
class TrafficProvider extends React.Component {
  constructor() {
    super()

    this.state = {
        signal: { color: 'red' },
    }
  }

  changeSignal = (color) => {
    this.setState({
      signal: {color}
    })
  }

  render() {
    const { children } = this.props;
    return (
      <TrafficContext.Provider value={ {...this.state, changeSignal: this.changeSignal} }>
        { children }
      </TrafficContext.Provider>
    )
  }
}

export default TrafficProvider;