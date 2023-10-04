import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <header className='navbar' style={{backgroundColor:'#aaa',position:'relative'}}>

     <div style={{backgroundColor:'rgb(89 187 232)',position:'fixed',width:'100%',zIndex:'10'}}>
     <div className="container-header"  >
        <div className="inner-content" style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <div className="brand">
            <Link style={{textDecoration:'none'}} to="/" >Aflam</Link>
          </div>
          <ul className="nav-links" style={{display:'flex',alignItems:'center',textDecoration:'none'}}>
              <li>
                <Link to="/" style={{textDecoration:'none'}}>Watch List</Link>
              </li>
              <li>
                <Link to="/Watched" style={{textDecoration:'none'}}>Watched </Link>
              </li>
              <li>
                <Link to="/Add" style={{textDecoration:'none'}} className='btn'>Add</Link>
              </li>
          </ul>
        </div>
      </div>
     </div>

    </header>
  )
}

export default Header