<body>
<ul id="main"></ul>
</body>

#main {
  width: 100%;
}

#priceGridHeader {
  width: 100%;
}

.priceGridHeaderItem {
  width: 25%;
  display: inline-block;
  text-align: center;
}

#priceGridColorColumn {
  width: 25%;
  display: inline-block;
}

#priceGridBody {
  width: 75%;
  display: inline-block;
}

.priceGridItem {
  display: inline-block;
  width: 33%;
  opacity: 0.3;
  text-align: center;
}

.inStock {
  opacity: 1;
}


var conditionNames  = ["fair", "good", "excellent"];
var conditionValues = [100, 110, 120];
var conditionPrices = [222, 555, 777];

var colorNames  = ["black", "white", "purple", "blue"];
var colorValues = [52, 64, 77, 90];

var stockLevels = [  [100, 110, 120, 52, 64]
                    ,[100, 110, 120, 52, 64, 77, 90]
                    ,[110, 120, 90]
                  ];

(function(){

  // Set the row, column, and item counts
  var numberOfItems = conditionNames.length * colorNames.length;
  var columnCount = conditionNames.length;
  var columnIndex = 0;
  var rowCount = colorNames.length;
  var rowIndex = 0;
  

  // Create the PriceGrid element
  var priceGridDiv = document.createElement("div");
  priceGridDiv.className = "priceGrid";
  

  // Build the header
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
  
  priceGridDiv.appendChild(headerDiv);
  
  
  // Build the color column
  var colorDiv = document.createElement("div");
  colorDiv.id = "priceGridColorColumn";
  
  for (i = 0; i < colorNames.length; i++) { 
    var colorDivItem = document.createElement("div");
    colorDivItem.className = "priceGridColorItem " + colorNames[i];
    colorDivItem.innerHTML = colorNames[i];
    colorDiv.appendChild(colorDivItem);
  }
  
  priceGridDiv.appendChild(colorDiv);
  
  
  
  // Build the grid
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
  
  priceGridDiv.appendChild(bodyDiv);
  
  // Write the PriceGrid element to the DOM
  document.getElementById("main").appendChild(priceGridDiv);
})(); 