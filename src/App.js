import Navbar from "./components/Navbar"
import Matches from "./components/Matches"
import Footer from "./components/Footer"
import "./App.scss"
import axios from "axios"
import { currentDate } from "./utils/Time"
import { useEffect, useState } from "react"

function App() {
  const [upcomingMatches, setUpcomingMatches] = useState([])
  const [finishedMatches, setFinishedMatches] = useState([])
  const [runningMatch, setRunningMatch] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  async function getData(date) {
    try {
      let response = await axios({
        method: "get",
        url: `https://client.elevenscore.com/api/football/match/matchfixtures?date=${date}&utc=7`,
        headers: {
          "X-Api-Key": "24578cdb-fc01-4794-9bb0-865dd8ac405c",
        },
      })
      setUpcomingMatches(
        response.data.result.filter((match) => match.status === 1).slice(0, 7)
      )
      setFinishedMatches(
        response.data.result.filter((match) => match.status === 8).slice(0, 7)
      )
      setRunningMatch(
        response.data.result
          .filter((match) => match.status > 1 && match.status < 4)
          .slice(0, 7)
      )
      setIsLoading(false)
    } catch (err) {
      console.err(err)
    }
  }
  useEffect(() => {
    getData(currentDate)
  }, [])

  if (isLoading) {
    return <div className="loading">Loading...</div>
  }
  return (
    <>
      <section className="App">
        <Navbar />
        {runningMatch.length !== 0 ? <h2>Running Match</h2> : null}
        {runningMatch.map((data, index) => (
          <Matches key={index} data={data} />
        ))}
        <h2>Upcoming Match</h2>
        {upcomingMatches.map((data, index) => (
          <Matches key={index} data={data} />
        ))}
        <h2>Finished Match</h2>
        {finishedMatches.map((data, index) => (
          <Matches key={index} data={data} />
        ))}
        <Footer />
      </section>
    </>
  )
}

export default App
