import React,  { useState, useEffect } from "react"
import Searchbar from "./components/Searchbar"

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=8f5525d1'

function App() {

	const [searchInput, setSearchInput] = useState('')

	async function getSearchResults(title){
		const response = await fetch(`${API_URL}&s=${title}`)
		const data = await response.json()
		return data.Search
	}

	useEffect(()=>{
		console.log(searchInput)
		// getSearchResults(searchInput)
	}, [])

	return (
		<main>
			<h1>App</h1>
			<Searchbar value={searchInput} onInput={setSearchInput} />
		</main>
	)
}

export default App
