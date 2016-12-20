import React, { PropTypes } from 'react';

// thanks
const ThanksCounter = (props) => {
  const { onIncrement, thanksCount = 0 } = props;

  return (
    <div>
      <p>
        Say thank you!&nbsp;
        {thanksCount > 0 &&
          <span>(you said this: {thanksCount} times)</span>
        }
        {thanksCount === 0 &&
          <span>(you haven't said this... )</span>
        }
      </p>
      <button onClick={onIncrement}>Thanks!</button>
    </div>
  );
};

ThanksCounter.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  thanksCount: PropTypes.number.isRequired,
};

export default ThanksCounter;
