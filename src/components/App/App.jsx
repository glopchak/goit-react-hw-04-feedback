import { useState } from 'react';
import { GlobalStyle } from 'components/GlobalStyle';
import { Container } from 'components/App/App.styled';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import {countTotalFeedback, countPositiveFeedbackPercentage} from 'components/CountFeedback/CountFeedback';
import { Statistics } from 'components/Statistics/Statistics';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = countTotalFeedback(good, neutral, bad);
  const positive = countPositiveFeedbackPercentage(total, good);

  const feedbackData  = ['good', 'neutral', 'bad'];

  const handleIncrement = option  => {
    switch (option ) {
      case 'good':
        return setGood(prevState  => prevState  + 1);

      case 'neutral':
        return setNeutral(prevState  => prevState  + 1);

      case 'bad':
        return setBad(prevState  => prevState  + 1);

      default:
        return;
    }
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={feedbackData}
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
