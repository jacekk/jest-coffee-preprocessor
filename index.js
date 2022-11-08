module.exports = {
	process: function (src, path) {
		const coffee = require('coffeescript')

		if (coffee.helpers.isCoffee(path)) {
			const code = coffee.compile(src, {
				bare: true,
				inlineMap: true,
			})
			return { code }
		}

		return null
	},
}
