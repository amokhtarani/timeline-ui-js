import React from 'react';
import PropTypes from 'prop-types'
import { useLocation , Link} from 'react-router-dom'
import Button from './Button'
import "bootstrap/dist/css/bootstrap.min.css";

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation()

  return (
    <header className='header'>

<nav className="navbar navbar-expand navbar-dark bg-dark">
           <Link to={"/home"} className="navbar-brand">
          {title}
          </Link> 
          <div className="navbar-nav mr-auto">
          <li className="nav-item">
              <Link to={"/timeline"} className="nav-link">
              Timeline
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/addEvent"} className="nav-link">
              Add New Event
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/addPerson"} className="nav-link">
              Add New Person
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/about"} className="nav-link">
              About
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/search"} className="nav-link">
              Search
              </Link>
            </li>
           </div>
        </nav>
        

        {/* {location.pathname === '/' && (
        <Button
          color={showAdd ? 'red' : 'green'}
          text={showAdd ? 'Close' : 'Add'}
          onClick={onAdd}
        />
      )}  */}
    </header>
  )
}

Header.defaultProps = {
  title: 'Timeline',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }

export default Header
