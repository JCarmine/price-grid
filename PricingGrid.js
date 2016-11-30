<body>
<ul id="main"></ul>
</body>


var conditionNames  = ["fair", "good", "excellent"];
var conditionValues = [100, 110, 120];
var conditionPrices = [222, 555, 777];

var colorNames  = ["black", "white", "purple", "blue"];
var colorValues = [52, 64, 77, 90];

var fairStock      = [100, 110, 120, 52, 64];
var goodStock      = [100, 110, 120, 52, 64, 77, 90];
var excellentStock = [110, 120, 90];


(function(){
	var numberOfItems = conditionNames.length * colorNames.length;
  var columnCount = conditionNames.length;
  var columnIndex = 0;
  var rowCount = colorNames.length;
  var rowIndex = 0;
  
  for (i = 0; i < numberOfItems; i++) {
  	alert(columnIndex);
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