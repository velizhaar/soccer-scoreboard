import React from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { BsSearch } from "react-icons/bs"

export default function Navbar() {
  return (
    <nav>
      <button>
        <GiHamburgerMenu size="2rem" />
      </button>
      <h1 className="logo">Matches</h1>
      <button>
        <BsSearch size="1.7rem" color="rgb(255, 153, 0)" />
      </button>
    </nav>
  )
}
