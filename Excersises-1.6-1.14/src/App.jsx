import { useState } from "react";
const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const Statistics = (props) => {
  const { good, neutral, bad, all, average, positive } = props;
  if (all === 0) return <h3>No feedback given</h3>;
  return (
    <div>
      <h3>good: {good}</h3>
      <h3>neutral: {neutral}</h3>
      <h3>bad: {bad}</h3>
      <h3>all: {all}</h3>
      <h3>average: {average}</h3>
      <h3>positive: {positive} %</h3>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  if (good + neutral + bad === 0) {
  }
  const all = good + neutral + bad;
  const average = all === 0 ? 0 : (good - bad) / all;
  const positive = all === 0 ? 0 : (good / (good + neutral + bad)) * 100;

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" onClick={() => setGood(good + 1)} />
      <Button text="neutral" onClick={() => setNeutral(neutral + 1)} />
      <Button text="bad" onClick={() => setBad(bad + 1)} />
      <h1>statistics</h1>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </div>
  );
};

export default App;
