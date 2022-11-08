// Packages
import React, { useState, useEffect } from "react"

// Styles
import $ from "./Searchbar.styles"

function Searchbar({className, onSearch}) {
	const [input, setInput] = useState("")

	function handleInput(e) {
		const { value } = e.target
		setInput(value)
	}

	function handleClick(){
		onSearch(input)
	}

	/**
	 * We place the API call (onSearch) inside a useEffect because
	 * we need to clear the timer after. Otherwise, the timers will overlap.
	 * 
	 * We can't do that inside the handleInput.
	 */ 
	useEffect(() => {
		let timeoutID 
		
		// We wrap the API call (onSearch) inside a timeout
		// so it doesn't fire on each keystroke, but just the last one.
		timeoutID = setTimeout(()=>{
			onSearch(input)
		}, 500)
		
		return () => clearTimeout(timeoutID)
	}, [onSearch, input])

	return (
		<$.Container className={className}>
			<$.Input onInput={handleInput} value={input} type="text" placeholder="Search for movies" />
			<$.Icon onClick={handleClick} />
		</$.Container>
	)
}

export default Searchbar
