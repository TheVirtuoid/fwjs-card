import { terser } from "rollup-plugin-terser";

export default {
	input: "src/Card/Card.js",
	output: [
		{ file: "dist/Cards.min.js", format: "umd", name: "Cards", plugins: [terser()] },
	]
}