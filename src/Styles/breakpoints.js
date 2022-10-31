import styled from "styled-components";

const sizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

const media = {
  mobileS: `@media (min-width: ${sizes.mobileS})`,
  mobileM: `@media (min-width: ${sizes.mobileM})`,
  mobileL: `@media (min-width: ${sizes.mobileL})`,
  tablet: `@media (min-width: ${sizes.tablet})`,
  laptop: `@media (min-width: ${sizes.laptop})`,
  laptopL: `@media (min-width: ${sizes.laptopL})`,
  desktop: `@media (min-width: ${sizes.desktop})`,
};

const breakpoints = {
	sizes,
	media
}

export default breakpoints