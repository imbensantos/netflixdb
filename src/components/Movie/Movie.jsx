// Packages
import React from "react"

// Styles
import $ from "./Movie.styles"

const MISSING_POSTER = "https://via.placeholder.com/400"

function Movie({ data }) {
	if (data === undefined) return null

	const { Poster, Year, Title, Type } = data
	const imgSrc = Poster === "N/A" ? MISSING_POSTER : Poster

	return (
		<$.Container>
			<$.Overlay>
				<$.Date>{Year}</$.Date>
			</$.Overlay>
			<$.Image src={imgSrc} alt={Title} />
			<$.Details>
				<$.Category>{Type}</$.Category>
				<$.Name>{Title}</$.Name>
			</$.Details>
		</$.Container>
	)
}

export default Movie
