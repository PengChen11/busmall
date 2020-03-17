/* eslint-disable indent */
'use strict';

var itemArray =[];
var totalClicked = 0;

class Item {
    constructor(name, url) {
        this.name = name;
        this.url = url;
        this.timesRendered=0;
        this.numClicked=0;
        itemArray.push(this);
    }
}
new Item ('bag', 'assets/bag.jpg');
new Item ('banana', 'assets/banana.jpg');
new Item ('bathroom', 'assets/bathroom.jpg');
new Item ('boots', 'assets/boots.jpg');
new Item ('breakfast', 'assets/breakfast.jpg');
new Item ('bubblegum', 'assets/bubblegum.jpg');
new Item ('chair', 'assets/chair.jpg');
new Item ('cthulhu', 'assets/cthulhu.jpg');
new Item ('dog-duck', 'assets/dog-duck.jpg');
new Item ('dragon', 'assets/dragon.jpg');
new Item ('pen','assets/pen.jpg');
new Item ('pet-sweep', 'assets/pet-sweep.jpg');
new Item ('scissors', 'assets/scissors.jpg');
new Item ('shark', 'assets/shark.jpg');
new Item ('sweep', 'assets/sweep.png');
new Item ('tauntaun', 'assets/tauntaun.jpg');
new Item ('unicorn', 'assets/unicorn.jpg');
new Item ('usb', 'assets/usb.gif');
new Item ('water-can', 'assets/water-can.jpg');
new Item ('wine-glass', 'assets/wine-glass.jpg');




var image1 = document.getElementById('img1');
var image2 = document.getElementById('img2');
var image3 = document.getElementById('img3');

function genRandomItem(){
    var index = Math.floor(Math.random()* itemArray.length);
    while (
        itemArray[index].name===image1.name ||
        itemArray[index].name===image2.name ||
        itemArray[index].name===image3.name){
        index = Math.floor(Math.random()* itemArray.length);
        }
    return itemArray[index];
}
function renderItems() {
  
    // generate a new image
    // var randomImageIndex = Math.floor(Math.random() * allImages.length);
  
    var newImage1 = genRandomItem();
    image1.src = newImage1.url;
    image1.name = newImage1.name;
    newImage1.timesRendered++;
  
    var newImage2 = genRandomItem();
    image2.src = newImage2.url;
    image2.name = newImage2.name;
    newImage2.timesRendered++;

    var newImage3 = genRandomItem();
    image3.src = newImage3.url;
    image3.name = newImage3.name;
    newImage3.timesRendered++;

}
renderItems();



function getResult() {
    for (var i = 0; i < itemArray.length; i++) {

        var report = document.getElementById('showreport');
        var newline = document.createElement('li');
        newline.textContent = itemArray[i].name + ' is clicked ' + itemArray[i].numClicked + ' times. ' +  Math.floor(itemArray[i].numClicked*100 / itemArray[i].timesRendered) + '% of total times rendered.';
        report.appendChild(newline);
        newline.id = itemArray[i].name;
    }
    var clickEl = document.getElementById('showreport');
    var newClickEl = document.createElement('li');
    newClickEl.style.color = "red";
    newClickEl.textContent = 'You Clicked ' + totalClicked + ' times.';
    clickEl.appendChild(newClickEl);
}
function updateResult() {
    var findReport = document.getElementById('showreport');
    var first = findReport.firstElementChild;
        while (first) {
            first.remove();
            first = findReport.firstElementChild;
        }
    for (var i = 0; i < itemArray.length; i++) {
        var newReport = document.getElementById('showreport');
        var newLine = document.createElement('li');
        newLine.textContent = itemArray[i].name + ' is clicked ' + itemArray[i].numClicked + ' times. ' +  Math.floor(itemArray[i].numClicked*100 / itemArray[i].timesRendered) + '% of total times rendered.';
        newReport.appendChild(newLine);
        newLine.id = itemArray[i].name;
    }
    var clickEl = document.getElementById('showreport');
    var newClickEl = document.createElement('li');
    newClickEl.style.color = "red";
    newClickEl.textContent = 'You Clicked ' + totalClicked + ' times.';
    clickEl.appendChild(newClickEl);

}

function clickHandler(event) {
    totalClicked++;
    for (var i = 0; i < itemArray.length; i++) {
      if (itemArray[i].name === event.target.name) {
        itemArray[i].numClicked++;
      } 
    }
    renderItems();
    if (totalClicked === 25){
        getResult();
    } else if (totalClicked >25){
        updateResult();
    }
    
}
  
image1.addEventListener('click', clickHandler);
image2.addEventListener('click', clickHandler);
image3.addEventListener('click', clickHandler);
