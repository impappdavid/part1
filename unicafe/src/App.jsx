import { useState } from 'react'

const Header = ({ text }) => <h1>{text}</h1>

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>



const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  const average = (good - bad) / total
  const positive = (good / total) * 100

  if (total === 0) {
    return <p>No feedback given</p>
  }

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={average.toFixed(1)} />
        <StatisticLine text="positive" value={positive.toFixed(1) + " %"} />
      </tbody>
    </table>
  )
}

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleFeedback = (type) => {
    const updatedTotal = total + 1
    setTotal(updatedTotal)

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