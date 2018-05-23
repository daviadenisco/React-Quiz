import React from 'react';
import PropTypes from 'prop-types';

// why aren't we using the class syntax for this component?
// because it is a stateless presentation component, so we don't need to use a class to create the component, in fact, it's best practice not to since it allows you to eliminate a lot of boilerplate code this way

function Question(props) {
  return (
    <h2 className="question">{props.content}</h2>
  );
}

Question.propTypes = {
  content: PropTypes.string.isRequired
};

export default Question;
