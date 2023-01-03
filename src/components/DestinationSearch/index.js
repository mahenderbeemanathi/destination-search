// Write your code here
import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChanging = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const filteredList = destinationsList.filter(each =>
      each.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="container">
        <h1>Destination Search</h1>
        <input type="search" onChange={this.onChanging} />
        <ul className="container-card">
          {filteredList.map(each => (
            <DestinationItem key={each.id} item={each} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
