// Write your code here
import './index.css'

const TabItem = props => {
  const {tabsList, isTabClicked, isActive} = props
  const {tabId, displayText} = tabsList
  const applyCss = isActive ? 'button-line' : 'button'
  const line = isActive ? 'line' : ''

  const clickedTab = () => {
    isTabClicked(tabId)
  }

  return (
    <li>
      <button className={applyCss} type="button" onClick={clickedTab}>
        {displayText}
      </button>
      <hr className={line} />
    </li>
  )
}

export default TabItem
