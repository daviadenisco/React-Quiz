import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


function Result(props) {
  return (
    <ReactCSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
      >

    <div>
      <span>Great teamwork! We scored 100% on the quiz!</span>
      <span> Everyone gets a prize!</span>
    </div>
  </ReactCSSTransitionGroup>

  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;
