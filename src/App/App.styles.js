// Packages
import styled, {createGlobalStyle} from "styled-components"

import Reset from "../Styles/Reset";
import Fonts from "../Styles/Fonts";

const GlobalStyles = createGlobalStyle`
	${Reset}
	
	#root{
		background: #161616;
	}
`

const AppName = styled.h1`
	font-size: 2rem;
	font-weight: 900;
	text-align: center;
	margin-block: 1em;
	color: #A51327;
	font-family: 'Montserrat', sans-serif;
	span{
		color: #fff;
	}
`
const Main = styled.main`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	justify-items: center;
	grid-gap: 2em 1em;
	margin: 2.5em;
`

const $ = {
	Fonts,
	GlobalStyles,
	AppName,
	Main,
}

export default $
