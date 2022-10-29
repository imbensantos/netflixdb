// Packages
import React, { useState, useCallback } from "react"

// Styles
import $ from "./App.styles.js"

// Components
import Searchbar from "../components/Searchbar"
import Movie from "../components/Movie"

// Constants
const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=8f5525d1"

function App() {
	const [searchResults, setSearchResults] = useState([])

	let movies
	const hasResults = searchResults?.length > 0
	movies = hasResults ? searchResults.map(movieData => <Movie key={movieData.imdbID} data={movieData} />) : null

	/**
	 * We need to wrap this in a useCallback because otherwise it will keep
	 * re-rendering <Searchbar />. Why? Because Searchbar uses it as a prop and
	 * every time Searchbar renders, it calls on "onSearch/handleSearch" in its
	 * useEffect, which will then run this function again and then re-renders
	 * Searchbar once again, and so on and so forth.
	 * 
	 * So wrap this in a useCallback to avoid unending loops.
	 */
	const handleSearch = useCallback(async (title) => {
		const response = await fetch(`${API_URL}&s=${title}`)
		const data = await response.json()
		setSearchResults(data.Search)
	}, [])

	return (
		<>
			<$.GlobalStyles />
			<$.Fonts />
			<$.AppName>Movie<span>DB</span></$.AppName>
			<Searchbar onSearch={handleSearch} />
			<$.Main>{movies}</$.Main>
		</>
	)
}

export default App
