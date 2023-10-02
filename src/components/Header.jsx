import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <header>
      <div className="container" >
        <div className="inner-content" style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <div className="brand">
            <Link style={{textDecoration:'none'}} to="/" >Aflam</Link>
          </div>
          <ul className="nav-links" style={{display:'flex',alignItems:'center',textDecoration:'none'}}>
              <li>
                <Link to="/" style={{textDecoration:'none'}}>Watch List</Link>
              </li>
              <li>
                <Link to="/Watched" style={{textDecoration:'none'}}>Watched</Link>
              </li>
              <li>
                <Link to="/Add" style={{textDecoration:'none'}} className='btn'>Add</Link>
              </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header