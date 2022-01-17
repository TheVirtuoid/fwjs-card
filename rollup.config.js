import { terser } from "rollup-plugin-terser";

export default {
	input: "src/Card/Card.js",
	output: {
		file: "dist/Cards.min.js",
		format: "es",
		generatedCode: "es2015",
		minifyInternalExports: false,
		plugins: [terser({
			keep_classnames: true
		})],
		exports: "named"
	}

}