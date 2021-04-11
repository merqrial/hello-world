import { Link } from "gatsby"
import React from "react"

export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <Link to="/contact/">Contact</Link>
      <h1>Hello Gatsby!</h1>
      <p>What a world.</p>
    </div>
  )
}
