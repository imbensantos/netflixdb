// Packages
import styled from "styled-components"

// Styles
import styles from "../../Styles"
const {color: {getRGB}, breakpoints: {media}} = styles

// Styles
const Container = styled.article`
	position: relative;
	max-width: 250px;
	height: auto;
	transition: all 0.1s ease;
	cursor: pointer;

	&:hover {
		scale: 1.05;
	}
`
const Overlay = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	z-index: 1;

	background: rgba(${getRGB("#000")}, 0.5);
	backdrop-filter: blur(0.15rem);
	padding: 1em;
	opacity: 0;
	transition: all 0.1s ease;

	${Container}:hover & {
		opacity: 1;
	}
`
const Date = styled.p`
	text-align: left;
	margin-block: 1em;
	font-size: 0.8rem;

	${Container}:hover &{
		color: #fff;
		font-family: 'Work Sans'
	}
`
const Image = styled.img`
	margin-inline: auto;
	width: 100%;
	height: 100%;
	object-fit: fill;
`
const Details = styled.section`
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 2;
	padding: .5em;
	background: #14282D;
	transition: all 0.1s ease;

	${Container}:hover & {
		background: none;
	}
`
const Category = styled.span`
	text-transform: uppercase;
	font-family: 'Work Sans';
	font-size: 0.7rem;
	color: #fff;
`
const Name = styled.h3`
	font-weight: 600;
	margin-top: 0.25em;
	font-size: 1.2rem;
	transition: all 0.1s ease;
	color: #A24451;
	font-family: 'Montserrat';
`

const $ = {
	Container,
	Overlay,
	Date,
	Image,
	Details,
	Category,
	Name,
}

export default $
