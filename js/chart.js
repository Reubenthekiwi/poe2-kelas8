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
                        "rgb(255, 154, 162)",
                        "rgb(255, 183, 178)",
                        "rgb(255, 218, 193)",
                        "rgb(226, 240, 203)",
                        "rgb(181, 234, 215)",
                        "rgb(199, 206, 234)",
                    ],
                },
            ],
        },
    });
}

// the chart data for every islands
const DATA = {
    Sumatra: [66.3, 26.9, 4.31, 2.35, 0.11, 0.03],
    Jawa: [97.26, 1.7, 0.76, 0.18, 0.11, 0.01],
    Kalimantan: [],
    Sulawesi: [],
    SundaKecil: [],
    Maluku: [],
    Papua: [],
}

// create the chart itself
var chartElement = document.getElementById("chart")
var context = chartElement.getContext("2d"), elementName = chartElement.getAttribute("Name");
const chartcreateChart = createChart(context, elementName, DATA[elementName]);