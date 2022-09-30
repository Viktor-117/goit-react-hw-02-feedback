import React, { Component } from 'react';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Section from 'components/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercent: 0,
  };

  handleFeedback = event => {
    this.setState(prevState => {
      const buttonName = event.target.textContent.toLowerCase();
      return (
        (buttonName === 'good' && { good: prevState.good + 1 }) ||
        (buttonName === 'neutral' && { neutral: prevState.neutral + 1 }) ||
        (buttonName === 'bad' && { bad: prevState.bad + 1 })
      );
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
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercent}
            ></Statistics>
          </Section>
        </div>
      </div>
    );
  }
}

export { App };
