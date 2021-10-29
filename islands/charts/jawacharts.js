const context = document
	.getElementById("jawa-religions-chart")
	.getContext("2d");
const sumatraReligionsChart = new Chart(context, {
	type: "pie",
	data: {
		labels: ["Islam", "Kristen", "Katolik", "Buddha", "Hindu", "Konghucu"],
		datasets: [
			{
				label: "Data agama-agama di Jawa",
				data: [97.26, 1.7, 0.76, 0.18, 0.11, 0.01],
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
