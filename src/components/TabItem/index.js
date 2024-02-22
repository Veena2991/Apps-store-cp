// Write your code here
import './index.css'

const TabItem = props => {
  const {eachTab, updateActiveTabId, isActive} = props
  const {tabId, displayText} = eachTab

  const onClickTabItem = () => {
    updateActiveTabId(tabId)
  }

  const activeTabBtnClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container">
      <button
        type="button"
        className={`tab-btn ${activeTabBtnClassName}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
