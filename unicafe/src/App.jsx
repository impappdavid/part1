import { useState } from 'react'

const Header = ({ text }) => <h1>{text}</h1>

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const Statistics = ({ good, neutral, bad }) => <div><p>good: {good}</p><p> neutral: {neutral}</p><p> bad: {bad}</p></div>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleFeedback = (type) => {
    if (type === 'good') {
      const updatedGood = good + 1
      setGood(updatedGood)
    } else if (type === 'neutral') {
      const updatedNeutral = neutral + 1
      setNeutral(updatedNeutral)
    } else if (type === 'bad') {
      const updatedBad = bad + 1
      setBad(updatedBad)
    }
  }

  return (
    <>
      <Header text="give feedback" />
      <Button handleClick={() => handleFeedback('good')} text="good" />
      <Button handleClick={() => handleFeedback('neutral')} text="neutral" />
      <Button handleClick={() => handleFeedback('bad')} text="bad" />

      <Header text="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App