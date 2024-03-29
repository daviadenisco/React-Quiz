import React from 'react';
import PropTypes from 'prop-types';

function QuestionCount(props) {
  return (
    <div className="questionCount">
      Q <span>{props.counter}</span> of
      <span> {props.total}</span>
    </div>
  );
}

QuestionCount.propTypes = {
  counter: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

export default QuestionCount;
