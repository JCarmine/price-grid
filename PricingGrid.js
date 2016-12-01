<body>
<ul id="main"></ul>
</body>

#main {
  width: 100%;
}

li {
  display: inline-block;
  width: 33%;
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
  var numberOfItems = conditionNames.length * colorNames.length;
  var columnCount = conditionNames.length;
  var columnIndex = 0;
  var rowCount = colorNames.length;
  var rowIndex = 0;
  
  
  
  var headerDiv = document.createElement("div");
  headerDiv.id = "priceGridHeader";
  document.getElementById("main").appendChild(headerDiv);
  
  var gridHeader = conditionNames;
  gridHeader.unshift("");
  
  for (i = 0; i < gridHeader.length; i++) { 
    var headerDivItem = document.createElement("div");
    headerDivItem.innerHTML = gridHeader[i];
    document.getElementById("priceGridHeader").appendChild(headerDivItem);
  }
  
  
  

  for (i = 0; i < numberOfItems; i++) {

    var priceGridItem = document.createElement("li");

    priceGridItem.className = "priceGridItem";
    priceGridItem.innerHTML = "$" + conditionPrices[columnIndex];
    priceGridItem.setAttribute('data-reference', conditionValues[columnIndex] + "," + colorValues[rowIndex]);
    
    for (t = 0; t < stockLevels[columnIndex].length; t++) {
      if (stockLevels[columnIndex][t] == colorValues[rowIndex]) {
        priceGridItem.className += " inStock";
      }
    }
    
    document.getElementById("main").appendChild(priceGridItem);
   
    columnIndex++;
    
    if (columnIndex == columnCount) {
      rowIndex++;
      columnIndex = 0;
    }
   
  }
})();