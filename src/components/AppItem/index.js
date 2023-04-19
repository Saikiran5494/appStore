// Write your code here
import './index.css'

const AppItem = props => {
  const {appsList} = props
  const {appName, imageUrl} = appsList

  return (
    <li className="list">
      <img src={imageUrl} alt={appName} className="image" />
      <p className="appName">{appName}</p>
    </li>
  )
}

export default AppItem
