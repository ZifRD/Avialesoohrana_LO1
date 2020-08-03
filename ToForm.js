//Author: Zaporozhtsev I.F.
//Created: 11.05.2019

javascript:function E(){

var inp = document.createElement('input');
inp.type = 'file';
inp.onchange = e => { 
   var file = e.target.files[0]; 
   var reader = new FileReader();
   reader.readAsText(file,'UTF-8');
   reader.onload = readerEvent => {
		var content = readerEvent.target.result;
		var f0 = document.forms[0];		
		var MainArray = content.split('\n');        
		for(var i=0;i<MainArray.length;i++)
		{
			MainArray[i] = MainArray[i].split(';');
			f0[MainArray[i][0]].value = MainArray[i][1]
		}  
	}
};
inp.click();

}E()