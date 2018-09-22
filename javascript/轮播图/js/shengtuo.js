var big = document.getElementsByClassName("big");
var 左 = document.getElementById("but1");
var 右= document.getElementById("but2");


var imgs = big[0].getElementsByTagName("img");
var i =0;
var items = document.querySelectorAll('.paganation i');
var intImgs = function () {
	
	for (var i = 0; i < imgs.length; i++) {
		imgs[i].style.opacity = '0';
	}
}

but2.onclick = function () {
	i++;
	if (i> imgs.length-1){
		i = 0;	
	}
	
	console.log(i);

	for (var j = 0; j < imgs.length; j++) {
		imgs[j].style.opacity = "0";
	}
	
	imgs[i].style.opacity = "1";

}
but1.onclick = function (){
	i--;
	if(i < 0){
		i = imgs.length-1;
	}
	for (var j = 0; j < imgs.length; j++) {
		imgs[j].style.opacity = "0";
	}
	
	imgs[i].style.opacity = "1";
}


var intItems = function () {
	
	for (var i = 0; i < items.length; i++) {
		items[i].style.background = '#53a6e2';
	}
}

for (var h = 0; h < items.length; h++) {
	items[h].index = h;
}

for (var j = 0; j < items.length; j++) {
	items[j].onclick = function () {
		
		intItems();
		this.style.background = 'white';
		
		console.log(this.innerText - 1);
		
		intImgs();
		imgs[this.index].style.opacity = '1';
	}
	
}