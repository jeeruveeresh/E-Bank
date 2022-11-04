import Cookies from 'js-cookie'

import {Link} from 'react-router-dom'

import './index.css'

const Home = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }

  return (
    <div className="home-container">
      <nav className="nav-header">
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
            alt="website logo"
            className="img"
          />
        </Link>
        <button type="button" className="log-btn" onClick={onClickLogout}>
          Logout
        </button>
      </nav>
      <div className="display-container">
        <h1 className="head">Your Flexibility, Our Excellence</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
          alt="digital card"
          className="image"
        />
      </div>
    </div>
  )
}
export default Home
