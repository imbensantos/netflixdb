import React, {useEffect} from 'react'
import WebFont from 'webfontloader'

function Fonts() {

	// This is for loading the Font Families
	useEffect(()=>{
		WebFont.load({
			google: {
				families: ['Montserrat:black', 'Work Sans:light']
			}
		})
	}, [])

	return <></>
}

export default Fonts