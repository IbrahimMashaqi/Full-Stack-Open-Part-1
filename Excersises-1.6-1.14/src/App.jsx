import { useState } from "react";
const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  // // const [average, setAverage] = useState(0);
  // // const [positive, setPositive] = useState(0);
  // // const [all, setAll] = useState(0);
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
      <h3>good: {good}</h3>
      <h3>neutral: {neutral}</h3>
      <h3>bad: {bad}</h3>
      <h3>all: {all}</h3>
      <h3>average: {average}</h3>
      <h3>positive: {positive} %</h3>
    </div>
  );
};

export default App;
