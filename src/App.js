import React from 'react'
import Cardlist from './Cardlist'
import SearchBox from './SearchBox'
import { cyclists } from './cyclists'

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			cyclists: cyclists,
			searchField: '',
		}
	}
	onSearchChange = (e) => {
		this.setState({ searchField: e.target.value })
	}
	render() {	
		const filteredCyclists = this.state.cyclists.filter(cyclist => {
			return cyclist.name.toLowerCase().includes(this.state.searchField.toLowerCase())
		})
		return (
			<div className="near-black bg-washed-green">
				<h1 className='tc ttu'>Cycling Greats</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Cardlist cyclists={filteredCyclists} />
			</div>
		)
	}
}

export default App