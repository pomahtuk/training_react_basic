import React, { Component, PropTypes } from 'react';
import ThanksCounter from './ThanksCounter';


// main component
class GreeterThanker extends Component {
  constructor(props) {
    super(props);

    // intial state
    this.state = {
      thanksCount: 0,
    };

    // autobinding
    this.updateThanksCounter = this.updateThanksCounter.bind(this);
  }

  updateThanksCounter(evt) {
    const { thanksCount } = this.state;
    this.setState({
      thanksCount: thanksCount + 1,
    });
  }

  componentDidMount() {
    console.log('mounted', this.state);
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('will update', nextProps, nextState);
  }

  render() {
    const { props: { message = 'Hello', name = 'stranger' }, state: { thanksCount } } = this;

    return (
      <div>
        <h1>{message}, {name}</h1>
        <ThanksCounter thanksCount={thanksCount} onIncrement={this.updateThanksCounter} />
      </div>
    );
  }
}

GreeterThanker.propTypes = {
  message: PropTypes.string.isRequired,
  name: PropTypes.string,
};

export default GreeterThanker;
