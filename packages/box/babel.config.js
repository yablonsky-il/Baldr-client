module.exports = {
	"presets": [
		"@babel/preset-env",
		"@babel/preset-react"
	],
	"plugins": [
		"@babel/plugin-proposal-class-properties",
		"@babel/transform-runtime",
		"@babel/plugin-syntax-dynamic-import",
		["module-resolver", {
			"root": ["./"],
			"alias": {
				"modules": "./node_modules",
				"core": "./node_modules/@baldr/core/src",
				"components": "./src/components",
        "constants": "./src/constants",
			}
		}]
	]
}
