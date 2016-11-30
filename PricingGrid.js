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
alert(stockLevels[0].length);
(function(){
	var numberOfItems = conditionNames.length * colorNames.length;
  var columnCount = conditionNames.length;
  var columnIndex = 0;
  var rowCount = colorNames.length;
  var rowIndex = 0;
  
  for (i = 0; i < numberOfItems; i++) {

    var li = document.createElement("li");
    li.innerHTML = conditionValues[columnIndex] + " " + colorValues[rowIndex] 
    + " " + conditionPrices[columnIndex];
    
   
   
    document.getElementById("main").appendChild(li);
    columnIndex++;
    
    if (columnIndex == columnCount) {
      rowIndex++;
      columnIndex = 0;
    }
   
	}
 
})();