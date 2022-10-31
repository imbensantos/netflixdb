import { keyframes } from "styled-components";

const growShrink = keyframes`
	0% { transform: scale(1); }
 	50% { transform: scale(1.01); }
 	100% { transform: scale(1); }
`
const rotate360 = keyframes`
	0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`
const animations = {
	growShrink,
	rotate360
}

export default animations