import { XoAxis, YoAxis } from './utils.js'

const sinFunction = (a, step, chart, color) => {

	chart.data.labels.length = 0
	chart.data.datasets.length = 0
	chart.data.datasets.push({
		label: 'F(x)',
		data: [],
		borderColor: color,
		borderWidth: 1,
		showLine: true
	})



	const fx = math.evaluate('f(x) = sin(x)')

	let minX = -math.pi * a
	let maxX = math.pi * a

	let maxY = -Infinity,
		minY = Infinity
	for (let x = minX; x <= maxX; x += step) {
		chart.data.labels.push(x)

		let y = fx(x)
		chart.data.datasets[0].data.push(y)

		maxY = Math.max(maxY, y)
		minY = Math.min(minY, y)
	}


	chart.options.plugins = {
		annotation: {
			annotations: {
				XoAxis,
				YoAxis
			}
		},
		legend: {
			display: false
		}
	}

	chart.options.scales = {
		x: {
			display: true,
			title: {
				display: true,
				text: 'X'
			},
			min: minX > 1 ? -1 : minX - 1,
			max: maxX + 1,
			grid: {
				display: false
			}
		},
		y: {
			display: true,
			title: {
				display: true,
				text: 'Y'
			},
			min: minY > 1 ? -1 : minY - 1,
			max: maxY + 1,
			grid: {
				display: false
			}
		}
	}

	chart.update()


}





const cosFunction = (a, step, chart, color) => {
	chart.data.labels.length = 0
	chart.data.datasets.length = 0
	chart.data.datasets.push({
		label: 'F(x)',
		data: [],
		borderColor: color,
		borderWidth: 1,
		showLine: true
	})

	const fx = math.evaluate('f(x) = cos(x)')

	let minX = -math.pi * a
	let maxX = math.pi * a

	let maxY = -Infinity,
		minY = Infinity
	for (let x = minX; x <= maxX; x += step) {
		chart.data.labels.push(x)

		let y = fx(x)
		chart.data.datasets[0].data.push(y)

		maxY = Math.max(maxY, y)
		minY = Math.min(minY, y)
	}

	chart.options.plugins = {
		annotation: {
			annotations: {
				XoAxis,
				YoAxis
			}
		},
		legend: {
			display: false
		}
	}

	chart.options.scales = {
		x: {
			display: true,
			title: {
				display: true,
				text: 'X'
			},
			min: minX > 1 ? -1 : minX - 1,
			max: maxX + 1,
			grid: {
				display: false
			}
		},
		y: {
			display: true,
			title: {
				display: true,
				text: 'Y'
			},
			min: minY > 1 ? -1 : minY - 1,
			max: maxY + 1,
			grid: {
				display: false
			}
		}
	}

	chart.update()


}




const tanFunction = (a, step, chart, color) => {
	let labels = []
	let data = []

	chart.data.datasets.length = 0
	chart.data.labels.length = 0


	const fx = math.evaluate('f(x) = tan(x)')


	let minX = -math.pi * a
	let maxX = math.pi * a


	let maxY = -Infinity,
		minY = Infinity,
		prev = 0
	for (let x = minX; x <= maxX; x += step) {

		let y = fx(x)

		if (math.evaluate('abs( abs(a) - abs(b))', { a: y, b: prev }) > 10) continue

		if (prev > 0 && y < 0) {
			chart.data.datasets.push({
				label: ``,
				data: [...data],
				borderColor: color,
				borderWidth: 1,
				showLine: true
			})

			data.length = 0
		}
		prev = y

		data.push({
			x: x,
			y: y
		})

		maxY = Math.max(maxY, y)
		minY = Math.min(minY, y)
	}



	chart.options = {
		maintainAspectRatio: false,
		responsive: true,
		interaction: {
			mode: 'point',
			intersect: true
		},
		scales: {
			x: {
				display: true,
				title: {
					display: true,
					text: 'X'
				},
				min: minX > 1 ? -1 : minX - 1,
				max: maxX + 1,
				grid: {
					display: false
				}
			},
			y: {
				display: true,
				title: {
					display: true,
					text: 'Y'
				},
				min: minY > 1 ? -1 : minY - 1,
				max: maxY + 1,
				grid: {
					display: false
				}
			}
		},
		elements: {
			line: {
				cubicInterpolationMode: 'monotone'
			}
		},
		plugins: {
			annotation: {
				annotations: {
					XoAxis,
					YoAxis
				}
			},
			legend: {
				display: false
			}
		},

	}

	chart.update()




}


export { sinFunction, cosFunction, tanFunction }