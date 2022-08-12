import { Component } from 'react';
import { GlobalStyle } from 'components/GlobalStyle';
import { Container } from 'components/App/App.styled';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { countTotalFeedback, countPositiveFeedbackPercentage } from "components/CountFeedback/CountFeedback"
import { Statistics } from 'components/Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  stateKeys = () => {
    return Object.keys(this.state);
  };

  handleIncrement = index => {
    const options = this.stateKeys();
    const currentBtn = options[index];

    this.setState(prev => {
      return { [currentBtn]: prev[currentBtn] + 1 };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const { handleIncrement, stateKeys } = this;
    const options = stateKeys();
    const total = countTotalFeedback(good, neutral, bad);
    const positive = countPositiveFeedbackPercentage(total, good);

    return (
      <>
      <GlobalStyle/>
        <Container>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={options}
              onLeaveFeedback={handleIncrement}
            />
          </Section>
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positive}
            />
          </Section>
        </Container>
      </>
     
    
      
      
    );
  }
}
