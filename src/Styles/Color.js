function getRGB(hex) {
	
	const getChunksFromString = (st, chunkSize) => st.match(new RegExp(`.{${chunkSize}}`, "g"))
	const convertHexUnitTo256 = (hexStr) => parseInt(hexStr.repeat(2 / hexStr.length), 16)

	const chunkSize = Math.floor((hex.length - 1) / 3)
	const hexArr = getChunksFromString(hex.slice(1), chunkSize)
	const [r, g, b,] = hexArr.map(convertHexUnitTo256)

	return `${r},${g},${b}`
}

const color = {
	getRGB
}

export default color