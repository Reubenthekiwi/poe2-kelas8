// the ultimate function to  create a new chart
function createChart(context, islandName, islandData) {
    console.log("Creating chart for: " + islandName)
    return new Chart(context, {
        type: "pie",
        data: {
            labels: ["Islam", "Kristen", "Katolik", "Buddha", "Hindu", "Konghucu"],
            datasets: [
                {
                    label: "Data agama-agama di " + islandName,
                    data: islandData,
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
}

const DATA = {
    Sumatra: [66.3, 26.9, 4.31, 2.35, 0.11, 0.03],
    Jawa: [97.26, 1.7, 0.76, 0.18, 0.11, 0.01]
}

var chartElement = document.getElementById("chart")
var context = chartElement.getContext("2d"), elementName = chartElement.getAttribute("Name");
const chartcreateChart = createChart(context, elementName, DATA[elementName]);