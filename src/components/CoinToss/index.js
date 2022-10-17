import {Component} from 'react'
import './index.css'

const HeadImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TailImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {head: 0, tail: 0, tossImageUrl: HeadImage}

  onClickingTossCoin = () => {
    const {head, tail} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    let tossImage = ''
    let tossHead = head
    let tossTail = tail

    if (tossResult === 0) {
      tossImage = HeadImage
      tossHead += 1
    } else {
      tossImage = TailImage
      tossTail += 1
    }
    this.setState({
      tossImageUrl: tossImage,
      tail: tossTail,
      head: tossHead,
    })
  }

  render() {
    const {tossImageUrl, head, tail} = this.state
    const total = head + tail

    return (
      <div className="home-container">
        <div className="game-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="details">Heads (or) Tails</p>

          <img src={tossImageUrl} alt="toss result" className="coin-image" />

          <button
            className="button"
            type="button"
            onClick={this.onClickingTossCoin}
          >
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count">Total: {total}</p>
            <p className="count">Heads: {head}</p>
            <p className="count">Tails: {tail}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
