// Packages
import React, { useState } from "react"

// Styles
import $ from "./Movie.styles"

const MISSING_POSTER = "https://via.placeholder.com/400"

function Movie({ data }) {
	const [hasLoaded, setHasLoaded] = useState(false)

	if (data === undefined) return null

	const handleImageLoad = () => {
		setHasLoaded(true)
	}

	const { Poster, Year, Title, Type } = data
	const imgSrc = Poster === "N/A" ? MISSING_POSTER : Poster

	/**
	 * We wrap it in a hasLoaded condition so text won't display
	 * while images are loading. This way, it won't look wonky since
	 * there's no set width, just max-width. 
	 */
	const details = hasLoaded ? (
		<$.Details>
			<$.Category>{Type}</$.Category>
			<$.Name>{Title}</$.Name>
		</$.Details>
	) : null

	return (
		<$.Container>
			<$.Overlay>
				<$.Date>{Year}</$.Date>
			</$.Overlay>
			<$.Image src={imgSrc} alt={Title} onLoad={handleImageLoad} />
			{details}
		</$.Container>
	)
}

export default Movie
