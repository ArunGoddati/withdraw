import './index.css'

const DenominationItem = props => {
  const {eachItem, key, denominationButton} = props
  const {id, value} = eachItem
  const onClickButton = () => {
    denominationButton(id)
  }
  return (
    <li className="list-item">
      <button className="button" onClick={onClickButton}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
