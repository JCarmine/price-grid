'use strict';

/* eslint-disable require-jsdoc, no-var */
var product = {
  conditionNames: ['fair', 'good', 'excellent'],
  conditionValues: [100, 110, 120],
  conditionPrices: [222, 555, 777],
  colorNames: ['black', 'white', 'purple', 'blue'],
  colorValues: [52, 64, 77, 90],
  stockLevels: [[100, 110, 120, 52, 64],
    [100, 110, 120, 52, 64, 77, 90],
    [110, 120, 90]],
};
var conditionNames = product.conditionNames;
var conditionValues = product.conditionValues;
var conditionPrices = product.conditionPrices;
var colorNames = product.colorNames;
var colorValues = product.colorValues;
var stockLevels = product.stockLevels;

// Self-executing function to kick-off the build
(function buildGrid() {
  var priceGridContainer = document.createElement('div');
  priceGridContainer.className = 'priceGrid';
  buildHeader(priceGridContainer);
  buildColorColumn(priceGridContainer);
  buildGridBody(priceGridContainer);
  document.getElementById('main').appendChild(priceGridContainer);
})(); // Build the header


function buildHeader(priceGridContainer) {
  var gridHeader = conditionNames.slice();
  gridHeader.unshift('');
  var headerDiv = document.createElement('div');
  headerDiv.id = 'priceGridHeader';
  var i;

  for (i = 0; i < gridHeader.length; i++) {
    var headerDivItem = document.createElement('div');
    headerDivItem.className = 'priceGridHeaderItem';
    headerDivItem.innerHTML = gridHeader[i];
    headerDiv.appendChild(headerDivItem);
  }

  priceGridContainer.appendChild(headerDiv);
  return priceGridContainer;
} // Build the color column


function buildColorColumn(priceGridContainer) {
  var colorDiv = document.createElement('div');
  colorDiv.id = 'priceGridColorColumn';

  for (var i = 0; i < colorNames.length; i++) {
    var colorDivItem = document.createElement('div');
    colorDivItem.className = 'priceGridColorItem ' + colorNames[i];
    colorDivItem.innerHTML = colorNames[i];
    colorDiv.appendChild(colorDivItem);
  }

  priceGridContainer.appendChild(colorDiv);
  return priceGridContainer;
} // Build the grid


function buildGridBody(priceGridContainer) {
  var numberOfItems = conditionNames.length * colorNames.length;
  var columnCount = conditionNames.length;
  var columnIndex = 0;
  var rowIndex = 0;
  var bodyDiv = document.createElement('div');
  bodyDiv.id = 'priceGridBody';

  for (var i = 0; i < numberOfItems; i++) {
    var priceGridItem = document.createElement('div');
    priceGridItem.className = 'priceGridItem';
    priceGridItem.innerHTML = '$' + conditionPrices[columnIndex];
    var dataRef = conditionValues[columnIndex] + ',' + colorValues[rowIndex];
    priceGridItem.setAttribute('data-reference', dataRef);

    for (var t = 0; t < stockLevels[columnIndex].length; t++) {
      if (stockLevels[columnIndex][t] == colorValues[rowIndex]) {
        priceGridItem.className += ' inStock';
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
