var conditionNames  = ["fair", "good", "excellent"];
var conditionValues = [100, 110, 120];
var conditionPrices = [222, 555, 777];

var colorNames  = ["black", "white", "purple", "blue"];
var colorValues = [52, 64, 77, 90];

var stockLevels = [  [100, 110, 120, 52, 64]
                    ,[100, 110, 120, 52, 64, 77, 90]
                    ,[110, 120, 90]
                  ];

// Set the row, column, and item counts
var numberOfItems = conditionNames.length * colorNames.length;
var columnCount = conditionNames.length;
var columnIndex = 0;
var rowCount = colorNames.length;
var rowIndex = 0;

(function buildGrid() {
  var priceGridContainer = document.createElement("div");
  priceGridContainer.className = "priceGrid";
  buildHeader(priceGridContainer);

  document.getElementById("main").appendChild(priceGridContainer);
})();

// Build the header
function buildHeader(priceGridContainer) {
  var gridHeader = conditionNames;
  gridHeader.unshift("");

  var headerDiv = document.createElement("div");
  headerDiv.id = "priceGridHeader";

  for (i = 0; i < gridHeader.length; i++) {
    var headerDivItem = document.createElement("div");
    headerDivItem.className = "priceGridHeaderItem";
    headerDivItem.innerHTML = gridHeader[i];
    headerDiv.appendChild(headerDivItem);
  }

  priceGridContainer.appendChild(headerDiv);
  buildColorColumn(priceGridContainer);
}


// Build the color column
function buildColorColumn(priceGridContainer) {
  var colorDiv = document.createElement("div");
  colorDiv.id = "priceGridColorColumn";

  for (i = 0; i < colorNames.length; i++) {
    var colorDivItem = document.createElement("div");
    colorDivItem.className = "priceGridColorItem " + colorNames[i];
    colorDivItem.innerHTML = colorNames[i];
    colorDiv.appendChild(colorDivItem);
  }

  priceGridContainer.appendChild(colorDiv);
  buildGridBody(priceGridContainer);
}

// Build the grid
function buildGridBody(priceGridContainer) {
  var bodyDiv = document.createElement("div");
  bodyDiv.id = "priceGridBody";

  for (i = 0; i < numberOfItems; i++) {

    var priceGridItem = document.createElement("div");

    priceGridItem.className = "priceGridItem";
    priceGridItem.innerHTML = "$" + conditionPrices[columnIndex];
    priceGridItem.setAttribute('data-reference', conditionValues[columnIndex] + "," + colorValues[rowIndex]);

    for (t = 0; t < stockLevels[columnIndex].length; t++) {
      if (stockLevels[columnIndex][t] == colorValues[rowIndex]) {
        priceGridItem.className += " inStock";
      }
    }

    bodyDiv.appendChild(priceGridItem);

    columnIndex++;

    if (columnIndex == columnCount) {
      rowIndex++;
      columnIndex = 0;
    }
  }

  priceGridContainer.appendChild(bodyDiv);
  return priceGridContainer;
}
