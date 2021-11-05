import { XoAxis, YoAxis } from './utils.js'

const logarit = (a, step, chart, color) => {

	if (a < 0 || a == 1) return


	chart.data.labels.length = 0
	chart.data.datasets.length = 0
	chart.data.datasets.push({
		label: 'F(x)',
		data: [],
		borderColor: color,
		borderWidth: 1,
		showLine: true
	})


	let points = [1, a].sort((lhs, rhs) => lhs - rhs)

	let minX = 0.1
	let maxX = Math.max(...points) + 2

	let maxY = -Infinity,
		minY = Infinity
	for (let x = minX; x <= maxX; x += step) {
		chart.data.labels.push(x)

		let y = Math.log(x) / Math.log(a)
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
			min: minX - 1,
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

export default logarit