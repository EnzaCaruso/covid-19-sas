const labelColor = 'rgb(180,180,180)'

export function horizontalChartOptions(marketShareInterest, admissionRate, icuRate, ventRate, fatalityRate) {
	const marketShareInterestObj = {
		y: marketShareInterest,
		color: '#0378CD',
		tooltipDescription: 'Anticipated share in region addmitted to hospital of interest'
	}
	const admissionRateObj = {
		y: admissionRate,
		color: '#FFCC32',
		tooltipDescription: 'Percentage of Infected in region who will be hospitalized'
	}
	const icuRateObj = {
		y: icuRate,
		tooltipDescription: 'Percentage of hospitalized patients who will require ICU',
		color: '#FF8224'

	}
	const ventRateObj = {
		tooltipDescription: 'Percentage of hospitalized patients who will require Ventilators',
		y: ventRate,
		color: '#DD5757'

	}
	const fatalityRateObj = {
		tooltipDescription: 'Percentage of hospitalized patients who will die',
		y: fatalityRate,
		color: '#86134F'

	}
	return ({
		chart: {
			type: 'bar',
			height: 100,
			width: 200,
		},
		plotOptions: {
			series: {
				pointMargin: -0.5,
				pointWidth: 10
			}
		},
		credits: {
			enabled: false
		},
		title: {
			text: null,
			style: {
				color: labelColor,
				fontSize: 1
			}
		},
		subtitle: false,
		xAxis: {
			height: 80,
			categories: ['Admitted', 'Hospitalized', "ICU", "Ventilators", "Die"],
			title: {
				enabled: false
			},
			labels: {
				enabled: true,
				style: {
					color: labelColor
				}
			}
		},
		yAxis: {
			min: 0,
			max: 100,
			labels: {
				enabled: false
			},
			title: {
				enabled: false
			},
			gridLineWidth: 0
		},
		legend: {
			enabled: false
		},
		tooltip: {
			enabled: true,
			formatter: function () {
				let tooltipMessage = `${this.point.tooltipDescription}: <b>${this.y}%</b>`
				return tooltipMessage;
			}
		},
		series: [
			{
				data: [marketShareInterestObj, admissionRateObj, icuRateObj, ventRateObj, fatalityRateObj]

			}]
	})
}
