// from data.js
var tableData = data;

// Your code here
var tbody = d3.select("tbody");


function buildTable(data) {
    tbody.html("");

    data.forEach((dataRow) => {
    
    var row = tbody.append("tr");

    Object.values(dataRow).forEach((val) => {
        var cell = row.append("td");
        cell.text(val);
        }
    );
    });
}


function handleClick() {

    var date = d3.select("#datetime").property("value");
    var filteredtable = tableData;


   
    if (date) {

    filteredtable = filteredtable.filter(row => row.datetime === date);
    }
    
    buildTable(filteredtable);
}

d3.selectAll("#filter-btn").on("click", handleClick);

buildTable(tableData);