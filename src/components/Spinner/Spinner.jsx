import React from 'react'
import $ from './Spinner.styles'

function Spinner() {
	return (
		<$.Container>
			<$.Name>Loading</$.Name>
			<$.Spinner />
		</$.Container>
	)
}

export default Spinner