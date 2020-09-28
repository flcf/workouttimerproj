import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';

import CountdownBox from './CountdownBox';

let interval;

const Countdown = ({ duration }) => {


  const secondsLeft =duration;

  const secondsLeftOutput = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
  
  const [completed, setCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    seconds: secondsLeft > 0 ? secondsLeftOutput : '00'
  });

  useEffect(() => { 
    if(completed) {
      clearInterval(interval);
    }
  }, [completed]);

  useEffect(() => {
    if(!completed) {
      interval = setInterval(() => {
        if(duration > 0) {
          setTimeLeft({
            seconds: secondsLeftOutput
          });
        }else {
          setTimeLeft({
            seconds: '00'
          });
          setCompleted(true);
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    }
  }, [duration, completed, secondsLeft, secondsLeftOutput]);

  return(
    <Fragment>
      <div className="countdown">
        <CountdownBox 
          left={timeLeft.seconds}
          divideBy={60}
          label="seconds"
        />
      </div>
    </Fragment>
  );
}

Countdown.propTypes = {
  duration: PropTypes.number.isRequired
}

export default Countdown;