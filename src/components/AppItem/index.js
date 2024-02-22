// Write your code here
import './index.css'

const AppItem = props => {
  const {eachAppItem} = props
  const {appName, imageUrl} = eachAppItem

  return (
    <li className="appItem-container">
      <img src={imageUrl} alt={appName} className="app-img" />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
