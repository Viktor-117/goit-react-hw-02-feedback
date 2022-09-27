import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Title } from './ExpressoFeedback.styled';
import { BtnBox } from 'components/BtnBox/BtnBox';
import { Stats } from 'components/Stats/Stats';

class ExspressoFeedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  };

  handleGoodIncrement = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
    this.countTotalFeedback();
  };

  handleNeutralIncrement = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
    this.countTotalFeedback();
  };

  handleBadIncrement = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
    this.countTotalFeedback();
  };

  countTotalFeedback = () => {
    this.setState(prevState => {
      return { total: prevState.total + 1 };
    });
  };

  render() {
    return (
      <div>
        <Title>Please leave feedback</Title>
        <BtnBox
          onGoodIncrement={this.handleGoodIncrement}
          onNeutralIncrement={this.handleNeutralIncrement}
          onBadIncrement={this.handleBadIncrement}
        ></BtnBox>
        <Title>Statistics</Title>
        <Stats
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.state.total}
        ></Stats>
      </div>
    );
  }
}

export { ExspressoFeedback };

// ExspressoFeedback.propTypes = {};
