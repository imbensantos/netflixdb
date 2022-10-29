import { css } from "styled-components"

export default css`

	/* Remove default margin */
	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}

	/* General reset from Meyer Web */
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}

	/* Box sizing rules */
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
	}

	/* Set core root defaults */
	html:focus-within {
		scroll-behavior: smooth;
	}

	/* Allow percentage-based heights in the application */
	html, body, #root, #__next {
		height: 100%;
	}

	/* Set core body defaults */
	body {
		text-rendering: optimizeSpeed;
		line-height: 1;
		-webkit-font-smoothing: antialiased;
	}

	/* Create a root stacking context */
	#root, #__next {
		isolation: isolate;
		overflow: auto;
	}

	/* Remove list styles on ul, ol elements without a list role. Assign a list role if you want to retain default styling*/
	ol:not([role='list']), ul:not([role='list']) {
		list-style: none;
	}

	/* Improve media defaults */
	img, picture, video, canvas, svg {
		display: block;
		max-width: 100%;
	}

	/* Remove built-in form typography styles */
	input, button, textarea, select {
		font: inherit;
	}

	/* Removes built-in highlight focus */
	input:focus,
	select:focus,
	textarea:focus,
	button:focus,
	[contenteditable="true"]:focus {
			outline: none;
	}

	/* Avoid text overflows */
	p, h1, h2, h3, h4, h5, h6 {
		overflow-wrap: break-word;
	}

	/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
	@media (prefers-reduced-motion: reduce) {
		html:focus-within {
		scroll-behavior: auto;
		}
		
		*,
		*::before,
		*::after {
			animation-duration: 0.01ms !important;
			animation-iteration-count: 1 !important;
			transition-duration: 0.01ms !important;
			scroll-behavior: auto !important;
		}
	}
`
