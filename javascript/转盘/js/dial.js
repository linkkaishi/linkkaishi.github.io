var turntable = document.getElementById("turntable");
var pointer = document.getElementById("pointer");

var rotate = function() {
	var x = lottery();
	console.log();

	var currentAngle = 30 + (360 / 7) * (x.code - 1);
	turntable.style.transition = "all 2s";
	turntable.style.transform = 'rotate(' + (currentAngle + 360 * 3) + 'deg)';
	setTimeout(function() {
		turntable.style.transition = 'all 0s';
		turntable.style.transform = 'rotate(' + currentAngle + 'deg)';
		alert(x.text);
		canClick=true;
	}, 2000);
}
var lottery = function() {
	var random = Math.floor(Math.random() * 100);
	//	console.log(lottery); 
//	var code = code;
	if(random < 1) {
		return {
			code:1,
			text:"一等奖"
		};
	} else if(random < 5) {
		return {
			code:2,
			text:"免单50元"
		}; 
	} else if(random < 13) {
		return {
			code:3,
			text:"免单10元"
		};
	} else if(random < 21) {
		return {
			code:4,
			text:"免单5元"
		};
	} else if(random < 35) {
		return {
			code:5,
			text:"免分期服务费"
		};
	} else if(random < 50) {
		return {
			code:6,
			text:"提高白条额度"
		};
	} else {
		return {
			code:7,
			text:"下次见"
		};
	}

}
var canClick = true;
pointer.onclick = function() {
	if (canClick === true) {
		rotate();
	}
      canClick = false;
      console.log(canClick);
}