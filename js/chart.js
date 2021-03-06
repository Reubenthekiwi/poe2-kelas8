// the ultimate function to  create a new chart
function createChart(context, islandName, islandData) {
	console.log("Creating chart for: " + islandName);
	return new Chart(context, {
		type: "pie",
		data: {
			labels: [
				"Islam",
				"Kristen",
				"Katolik",
				"Buddha",
				"Hindu",
				"Konghucu",
			],
			datasets: [
				{
					label: "Data agama-agama di " + islandName,
					data: islandData,
					backgroundColor: [
						"rgb(255, 154, 162)",
						"rgb(255, 183, 178)",
						"rgb(255, 218, 193)",
						"rgb(226, 240, 203)",
						"rgb(181, 234, 215)",
						"rgb(199, 206, 234)",
					]
				},
			],
		},
	});
}

// the chart data for every islands
const DATA = {
	Sumatra: [66.3, 26.9, 4.31, 2.35, 0.11, 0.03],
	Jawa: [97.26, 1.7, 0.76, 0.18, 0.11, 0.01],
	Kalimantan: [78.23, 8.99, 8.86, 1.94, 0.27, 0.23],
	Sulawesi: [80.89, 15.7, 1.56, 0.17, 1.36, 0.01],
	SundaKecil: [38.76, 12.7, 18.2, 0.33, 29.77, 0.01],
	KepulauanMaluku: [63.57, 32.15, 3.7, 0.01, 0.17, 0.01],
	Papua: [20.65, 63.0, 15.42, 0.06, 0.09, 0.003],
};

Chart.defaults.color = "#F8F9ED";

// create the chart itself
var chartElement = document.getElementById("chart");
var context = chartElement.getContext("2d"),
	elementName = chartElement.getAttribute("Name");
const chart = createChart(context, elementName, DATA[elementName]);
