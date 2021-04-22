import { useState } from "react"
import axios from "axios"
import { getMonth } from "../utils/Time"
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri"
import { IoAnalyticsOutline } from "react-icons/io5"

export default function Matches({ data }) {
  const [matchStatistics, setMatchStatistics] = useState(null)
  const [isActive, setIsActive] = useState(false)
  const years = data.matchTime.split("-")
  const dates = years[2].split("T")
  const months = getMonth(years[1])
  const startTime = dates[1].slice(0, 5)
  const handleGetStatistics = async () => {
    setIsActive(!isActive)
    if (!isActive && matchStatistics == null) {
      let response = await axios({
        method: "get",
        url: `https://client.elevenscore.com/api/football/match/live/${data.gameId}`,
        headers: {
          "X-Api-Key": process.env.REACT_APP_API_KEY,
        },
      })
      setMatchStatistics(response.data.techStats)
    }
  }

  return (
    <div className="matches">
      <h4 className="dates">{`${dates[0]} ${months} ${years[0]}`}</h4>
      <h5 className="location">{data.countryName}</h5>
      <p className="status">At {startTime}</p>
      <div className="score">
        <h3 className="home_team_score">{data.homeTeamEvent.score}</h3>
        <h3> - </h3>
        <h3 className="away_team_score">{data.awayTeamEvent.score}</h3>
      </div>
      <div className="matches_logo">
        <div className="home_team_logo">
          <img
            src={data.homeTeamEvent.logoUrl}
            alt="home_logo"
            onError={(e) =>
              (e.target.src =
                "http://vaishalibookcentre.com/images/no-image-large.png")
            }
          />
          <p className="home_team_name">{data.homeTeamEvent.name}</p>
        </div>
        <div className="away_team_logo">
          <img
            src={data.awayTeamEvent.logoUrl}
            alt="away_logo"
            onError={(e) =>
              (e.target.src =
                "http://vaishalibookcentre.com/images/no-image-large.png")
            }
          />
          <p className="away_team_name">{data.awayTeamEvent.name}</p>
        </div>
      </div>
      <>
        {matchStatistics == null ? (
          " "
        ) : (
          <div className={isActive ? "statistics-data" : "hide"}>
            <p>
              {matchStatistics.map((m, index) => (
                <div className="statistics-data_details" key={index}>
                  <p>Away: {m.away}</p>
                  <p>Home: {m.home}</p>
                  <p>Event: {m.typeName}</p>
                </div>
              ))}
            </p>
          </div>
        )}
        <div className="statistics" onClick={() => handleGetStatistics()}>
          <p>
            <IoAnalyticsOutline size="1rem" />
            Statistics
          </p>
          <button>
            {isActive ? (
              <RiArrowUpSLine size="1.5rem" color="rgb(165, 165, 165)" />
            ) : (
              <RiArrowDownSLine size="1.5rem" />
            )}
          </button>
        </div>
      </>
    </div>
  )
}
