import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Message from '../components/Message';

class MessageContainer extends Component {
  render() {
    const {message} = this.props;
    return <Message message={message} />;
  }
}

MessageContainer.propTypes = {
  message: PropTypes.string.isRequired,
};
const mapStatetopProps = (state) => {
  return {
    message: state.reducerMessage,
  };
};

export default connect(
  mapStatetopProps,
  null
)(MessageContainer);
