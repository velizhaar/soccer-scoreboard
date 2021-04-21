import React from "react"
import { GiSoccerField } from "react-icons/gi"
import { IoIosFootball } from "react-icons/io"
import { IoCalendarOutline } from "react-icons/io5"
import { RiAccountCircleLine } from "react-icons/ri"

export default function Footer() {
  return (
    <footer>
      <button className="active">
        <GiSoccerField size="2.4rem" />
        Matches
      </button>
      <button>
        <IoIosFootball size="2.4rem" />
        Team
      </button>
      <button>
        <IoCalendarOutline size="2.4rem" />
        Calendar
      </button>
      <button>
        <RiAccountCircleLine size="2.4rem" />
        Profile
      </button>
    </footer>
  )
}
