import { terser } from "rollup-plugin-terser";

export default {
	input: "src/Card/Card.js",
	output: [
		{ file: "dist/Cards.min.js", format: "iife", name: "Cards", plugins: [terser()] },
	]
}