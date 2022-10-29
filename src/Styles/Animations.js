import { keyframes } from "styled-components";

const growShrink = keyframes`
	0% { transform: scale(1); }
 	50% { transform: scale(1.01); }
 	100% { transform: scale(1); }
`

export {
	growShrink
}