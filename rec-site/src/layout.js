import * as React from 'react'
import {Link} from "react-router-dom";

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <nav>
        <ul>
          <li key="home"><Link to="/">Home</Link></li>
          <li key="about"><Link to="/about">About</Link></li>
          <li key="contact"><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout