import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balance: 2000}
  denominationButton = id => {
    const {balance} = this.state
    this.setState(prevState => ({
      balance: prevState.balance - eachItem.value,
    }))
  }
  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    return (
      <div className="outer-container">
        <div className="big-container">
          <div className="logo-container">
            <div className="logo">S</div>
            <h1 className="top-main-heading">Sara Williams</h1>
          </div>
          <div className="balance-visible-container">
            <p className="balance-heading">Your Balance</p>
            <div>
              <p className="amount">{balance}</p>
              <p className="in-rupees-heading">In Rupees</p>
            </div>
          </div>
          <div>
            <h1 className="withdraw-heading">Withdraw</h1>
            <p className="choose-sum-description">CHOOSE SUM(IN RUPEES)</p>
            <ul className="list-container">
              {denominationsList.map(each => (
                <DenominationItem
                  eachItem={each}
                  key={each.id}
                  denominationButton={this.denominationButton}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
