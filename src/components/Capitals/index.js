import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {userInput: countryAndCapitalsList[0].id}

  onChangeUserInput = event => {
    console.log(event.target.value)
    this.setState({userInput: event.target.value})
  }

  getFilteredResults = () => {
    const {userInput} = this.state
    // console.log(userInput)
    const filteredResults = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === userInput,
    )
    // console.log(filteredResults)
    return filteredResults
  }

  render() {
    const countryObject = this.getFilteredResults()

    return (
      <div className="app-container">
        <div className="capitals-container">
          <h1 className="heading">Countries and Capitals</h1>
          <select onChange={this.onChangeUserInput} className="option">
            {countryAndCapitalsList.map(eachCountry => (
              <option key={eachCountry.id} value={eachCountry.id}>
                {eachCountry.capitalDisplayText}
              </option>
            ))}
          </select>
          <span className="text"> is capital of which country?</span>
          <h1 className="country-name">{countryObject.country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
