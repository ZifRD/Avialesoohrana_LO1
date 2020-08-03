//Author: Zaporozhtsev I.F.
//Created: 11.05.2019

javascript:function E(){

var allNames = [];
var allVals = [];

var allElements = document.querySelectorAll('input');
var counter = 0;
for (var i = 0; i < allElements.length; i++) {
  if(allElements[i].className.toString() == "td_normal")
  {	
	allNames.push(allElements[i].name);
	allVals.push(allElements[i].value);
  }
}
var result = '';
for (var index = 0; index < allNames.length; index++){
	result += allNames[index].toString() + ';' + allVals[index].toString()+'\n';
}
var csv = 'data:text/csv;charset=utf-8,' + result;
var data = encodeURI(csv);
var encodedUri = encodeURI(csv);
window.open(encodedUri);

}E()