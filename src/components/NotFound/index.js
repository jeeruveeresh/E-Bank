import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/ebank-not-found-img.png"
      alt="not found"
      className="not-img"
    />
    <h1 className="not-head">Page Not Found</h1>
    <p className="not-des">
      We are sorry, the page you requested could not be found
    </p>
  </div>
)

export default NotFound
