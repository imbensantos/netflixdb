// Packages
import React, { useState, useCallback } from "react"

// Styles
import $ from "./App.styles.js"

// Components
import Spinner from "../components/Spinner"
import Searchbar from "../components/Searchbar"
import Movie from "../components/Movie"

// Constants
const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=8f5525d1"

function App() {
	const [searchResults, setSearchResults] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [isInputEmpty, setIsInputEmpty] = useState(true)

	const hasResults = searchResults?.length > 0
	const movies = hasResults && searchResults.map(movieData => <Movie key={movieData.imdbID} data={movieData} />)
	const empty = isInputEmpty ? null : (
		<$.Empty>
			<h2>No Movies Found</h2>
		</$.Empty>
	)

	const handleClick = () => {
		setSearchResults([])
		setIsInputEmpty(true)
		/**
		 * TODO: Add search reset when home is clicked
		 */
	}

	/**
	 * We need to wrap this in a useCallback because otherwise it will keep
	 * re-rendering <Searchbar />. Why? Because Searchbar uses it as a prop and
	 * every time Searchbar renders, it calls on "onSearch/handleSearch" in its
	 * useEffect, which will then run this function again and then re-renders
	 * Searchbar once again, and so on and so forth.
	 *
	 * So wrap this in a useCallback to avoid unending loops.
	 */
	const handleSearch = useCallback(async title => {

		// If the title is empty, we reset the searchResults array
		// and setIsInputEmpty to true so empty = null instead of 'No Movies Found'.
		if (title === "") {
			setSearchResults([])
			setIsInputEmpty(true)
			return
		}
		
		setIsLoading(true)

		const response = await fetch(`${API_URL}&s=${title}`)
		const data = await response.json()

		if (data) {
			setIsLoading(false)
			setIsInputEmpty(false)
			setSearchResults(data?.Search)
		}
	}, [])

	return (
		<>
			<$.GlobalStyles />
			<$.Fonts />

			<$.AppName onClick={handleClick}>
				Movie<span>DB</span>
			</$.AppName>
			<Searchbar onSearch={handleSearch} />
			{hasResults ? (
				<$.Main>{isLoading ? <Spinner /> : movies}</$.Main>
			) : empty}
		</>
	)
}

export default App
