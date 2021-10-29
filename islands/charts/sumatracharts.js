const context = document
	.getElementById("sumatra-religions-chart")
	.getContext("2d");
const sumatraReligionsChart = new Chart(context, {
	type: "pie",
	data: {
		labels: ["Islam", "Kristen", "Katolik", "Buddha", "Hindu", "Konghucu"],
		datasets: [
			{
				label: "Data agama-agama di Sumatra",
				data: [66.3, 26.9, 4.31, 2.35, 0.11, 0.03],
				backgroundColor: [
					"rgb(175, 153, 255)",
					"rgb(202, 173, 255)",
					"rgb(255, 194, 226)",
					"rgb(255, 173, 199)",
					"rgb(255, 153, 182)",
					"rgb(248, 202, 207)",
				],
			},
		],
	},
});
