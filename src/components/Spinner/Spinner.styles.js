import styled from "styled-components";

// Styles
import styles from "../../Styles";
const {animations: {rotate360}} = styles

const Container = styled.div``

const Name = styled.span`
	color: #fff;
	display: block;
	font-family: 'Work Sans', sans-serif;
	font-size: 1.2em;
	margin-block: 1em;
`

const Spinner = styled.i`
  animation: ${rotate360} 1.5s linear infinite;
  border: 10px solid #f3f3f3; /* Light grey */
  border-radius: 50%;
  border-top: 10px solid #383636; /* Black */
	display: block;
  height: 50px;
	margin: auto;
	width: 50px;
`

const $ = {
	Container,
	Name,
	Spinner,
}

export default $