// Packages
import styled from "styled-components"

// Components
import { BsSearch } from "react-icons/bs"

// Styles
import styles from '../../Styles'
const {breakpoints: {media, sizes}} = styles

const Container = styled.div`
	background: #E9E9E9;
	border: 1px solid #A1A6A7;
	border-radius: 5rem;
	color: #000;
	display: flex;
	justify-content: space-between;
	width: max(50%, 250px);
	max-width: ${sizes.laptop};
	margin-inline: auto;
	padding: .5em 1em;
	transition: all ease .15s;
	font-size: 1rem;

	&:focus-within {
		background: #fff;
	}
`

const Input = styled.input`
	border: none;
	background: none;
	width: 100%;
	font-family: 'Work Sans';
`

const Icon = styled(BsSearch)`
	cursor: pointer;
	font-size: 1.1em;
	vertical-align: middle;
`

const $ = {
	Container,
	Input,
	Icon,
}

export default $
