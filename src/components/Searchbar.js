import React from "react"
import styled from "styled-components"
import { BsSearch } from "react-icons/bs"

const SearchBar = styled.div`
	display: flex;
	justify-content: space-between;
	max-width: 50%;
	margin-inline: auto;
	border: 1px solid #000;
	border-radius: 5rem;
	padding: 1em;

	&:focus-within{
		background: lightgray;
	}
`

const Input = styled.input`
	border: none;
	background: none;
	width: 100%;
`

const SearchIcon = styled(BsSearch)`
	vertical-align: middle;
`

function Searchbar({ searchInput, onInput }) {
	function handleInput(e) {
		const { value } = e.target
		onInput(value)
	}

	return (
		<SearchBar>
			<Input onInput={handleInput} value={searchInput} type="text" placeholder="Search for movies" />
			<SearchIcon />
		</SearchBar>
	)
}

export default Searchbar
