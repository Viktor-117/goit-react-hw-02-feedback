import React, { Component } from 'react';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Section from 'components/Section';
import Notification from 'components/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercent: 0,
  };

  handleFeedback = option => {
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    this.setState(prevState => {
      return { total: prevState.total + 1 };
    });
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => {
      return {
        positivePercent: 100 * (prevState.good / prevState.total),
      };
    });
  };

  render() {
    const { good, neutral, bad, total, positivePercent } = this.state;
    return (
      <div
        style={{
          height: '100vh',
          marginTop: 50,
          display: 'flex',
          justifyContent: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <div>
          <Section title={'Please leave feedback'}>
            <FeedbackOptions
              options={['Good', 'Neutral', 'Bad']}
              onLeaveFeedback={this.handleFeedback}
            />
          </Section>
          <Section title={'Statistics'}>
            {good > 0 || neutral > 0 || bad > 0 ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positivePercent}
              ></Statistics>
            ) : (
              <Notification message="There is no feedback" />
            )}
          </Section>
        </div>
      </div>
    );
  }
}

export { App };
