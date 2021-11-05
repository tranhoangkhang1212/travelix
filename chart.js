import quadratic from './modules/quadratic.js'
import cubic from './modules/cubic.js'
import quartic from './modules/quartic.js'

import { sinFunction, cosFunction, tanFunction } from './modules/trigonometric.js'

let coeffDics = {
	bacHai: ['a-coeff', 'b-coeff', 'c-coeff'],
	bacBa: ['a-coeff', 'b-coeff', 'c-coeff', 'd-coeff'],
	bacBon: ['a-coeff', 'b-coeff', 'c-coeff'],
	sin: [],
	cos: [],
	tan: []
}


let step = 0.1
let pointRadius = 1.5
let Linecolor = '#000000'
let graphSelected = 'bacHai'

let a = 2
let b = 0
let c = 0
let d = 0


const hashURL = window.location.hash.substring(1)
if (hashURL !== '') {
	const coeffs = hashURL.split(',')
	a = parseFloat(coeffs[0])
	b = parseFloat(coeffs[1])
	c = parseFloat(coeffs[2])
}

for (const input of document.querySelectorAll('input')) {
	switch (input.parentElement.id) {
		case 'a-coeff':
			input.value = String(a)
			break
		case 'b-coeff':
			input.value = String(b)
			break
		case 'c-coeff':
			input.value = String(c)
			break
		case 'd-coeff':
			input.value = String(d)
			break
		case 'step':
			input.value = String(step)
			break
		case 'pointRadius':
			input.value = String(pointRadius)
			break
	}
}

const ctx = document.getElementById('myChart').getContext('2d');
const chart = new Chart(ctx, {
	type: 'scatter',
	data: [],
	options: {
		maintainAspectRatio: false,
		responsive: true,
	},
})

const drawChart = () => {

	for (const coeff of document.querySelector('.coeff-form').querySelectorAll('input')) {
		coeff.disabled = !coeffDics[graphSelected].includes(coeff.parentElement.id)
	}

	if (step === 0) return

	switch (graphSelected) {
		case 'bacHai':
			quadratic(a, b, c, step, chart, Linecolor)
			break
		case 'bacBa':
			cubic(a, b, c, d, step, chart, Linecolor)
			break
		case 'bacBon':
			quartic(a, b, c, step, chart, Linecolor)
			break
		case 'sin':
			sinFunction(a, step, chart, Linecolor)
			break
		case 'cos':
			cosFunction(a, step, chart, Linecolor)
			break
		case 'tan':
			tanFunction(a, step, chart, Linecolor)
	}

	chart.options.elements.point.radius = pointRadius

	chart.update()
}

drawChart()








/* ================= =================  DOM event ================= ================= =================  */







// khi user xóa trống input mà không điền gì, sẽ tự động thêm số 0
window.addEventListener("focusout", event => {
	if (event.target.value === '') {
		event.target.value = '0'
		switch (event.target.parentElement.id) {
			case 'a-coeff':
				a = 0;
				break;
			case 'b-coeff':
				b = 0;
				break;
			case 'c-coeff':
				c = 0;
				break;
			case 'd-coeff':
				d = 0;
				break;
			case 'step':
				event.target.value = step;
				break;
			case 'pointRadius':
				pointRadius = 0;
				break;
		}
		drawChart()
	}
})

// sự kiện thay đổi input value
window.addEventListener("input", event => {

	// regex xóa ký tự không phải chữ số
	event.target.value = event.target.value.replace(/[^-0-9.]/g, '')
	if (event.target.value === '') return


	switch (event.target.parentElement.id) {

		case 'pointRadius':
			pointRadius = parseFloat(event.target.value)
			break
		case 'step':
			step = parseFloat(event.target.value)
			break
		case 'a-coeff':
			a = parseFloat(event.target.value)
			break
		case 'b-coeff':
			b = parseFloat(event.target.value)
			break
		case 'c-coeff':
			c = parseFloat(event.target.value)
			break
		case 'd-coeff':
			d = parseFloat(event.target.value)
			break
	}
	drawChart()
})





// sự kiện click chọn màu
for (let color of document.querySelectorAll('.colorpicker')) color.addEventListener('click', event => {
	Linecolor = '#' + event.target.id
	drawChart()
})

// sự kiện click chọn loại đồ thị
for (let graphSelect of document.querySelectorAll('.graphSelect')) graphSelect.addEventListener('click', event => {

	for (let graphSelect of document.querySelectorAll('.graphSelect')) {
		graphSelect.setAttribute('class', 'graphSelect nav-link')
	}
	event.target.setAttribute('class', 'graphSelect nav-link active')

	graphSelected = event.target.id

	drawChart()
})