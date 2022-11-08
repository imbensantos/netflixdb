// Packages
import styled, {createGlobalStyle} from "styled-components"

// Styles
import styles from '../Styles'
const {reset, Fonts, breakpoints: {media, sizes}} = styles

const GlobalStyles = createGlobalStyle`
	${reset}
	
	#root{
		background: #161616;
	}
`

const AppName = styled.h1`
	color: #A51327;
	cursor: pointer;
	font-family: 'Montserrat', sans-serif;
	font-size: 2rem;
	font-weight: 900;
	margin-block: 1em;
	position: relative;
	text-align: center;
	span{
		color: #fff;
	}
/* 	// May use again in the future.
	&:before, &:after{
		content: '';
		background: #7f4c00;
		height: 5px;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		width: 40%;
	}
	&:before{
		left: 0;
	}
	&:after{
		right: 0;
	} */
`
const Main = styled.main`
	display: flex;
	flex-flow: row wrap;
	justify-items: center;
	justify-content: center;
	grid-gap: 2em 1em;
	margin: 5em 2.5em;
`
const Empty = styled(Main)`
	color: #fff;
	font-family: 'Work Sans';
	font-size: 1.5rem;
`

const $ = {
	Fonts,
	GlobalStyles,
	AppName,
	Main,
	Empty
}

export default $
