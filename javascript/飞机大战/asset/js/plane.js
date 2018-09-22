// 获取Html页面所有元素
var content = document.getElementById('content');
var start = document.getElementById('start');
var main = document.getElementById('main');
var scorediv = document.getElementById('score');
var suspend = document.getElementById('suspend');
var continuediv = document.getElementById('continue')
var restart = document.getElementById('restart')
var settlement = document.getElementById('settlement')


// var contentclass = content.currentStyle? content.currentStyle: window.getComputedStyle(content, null);
var contentclass = window.getComputedStyle(content);
var stagesSizeY = parseInt(contentclass.height);
var stageSizeX = parseInt(contentclass.width);
// 创建不同型号的飞机对象
var enemyPlanes = {
      width:34 , height:24,
      imgSrc:'./asset/images/enemy-plane-s.png',
      boomSrc:'./asset/images/enemy-plane-s-boom.gif',
      boomTime:100,
      hp: 1
};
 
var enemyPlaneM = {
    width:46 , height:60,
    imgSrc:'./asset/images/enemy-plane-m.png',
    boomSrc:'./asset/images/enemy-plane-m-boom.gif',
    boomTime:100,
    hp: 3
    // hitSrc:
};
var enemyPlaneL = {
    width:110 , height:164,
    imgSrc:'./asset/images/enemy-plane-l.png',
    boomSrc:'./asset/images/enemy-plane-l-boom.gif',
    boomTime:100,
    hp: 7
};
var ourplaneA = {
    width:66 , height:80,
    imgSrc:'./asset/images/our-plane.gif',
    boomSrc:'./asset/images/our-plane-boom.gif',
    boomTime:100,
    hp: 1
};
var bulletA = {
    width:6 , height:14,
    imgSrc:'./asset/images/our-bullet.png',
    speed:20
};

var Plan = function(centerX, centerY, planeModel, speed){
      this.centerX = centerX;
      this.centerY = centerY;
      this.planeModel = planeModel;
      this.speed = speed;
      this.sizeX = planeModel.width;
      this.sizeY = planeModel.height;
      this.imgSrc =planeModel.imgSrc;
      this.boomSrc = planeModel.boomSrc;
      this. boomTime =planeModel.boomTime;
      this.hp = planeModel.hp;

    //  获取游戏界面的宽高
      this.currentX = this.centerX -this.sizeX/2;
      this.currentY = this.centerY -this.sizeY/2;
}


Plan.prototype.draw = function(){
    this.imgNode = document.createElement('img') ;
    this.imgNode.src = this.imgSrc;
    this.imgNode.style.top =  this.centerY -this.sizeY/2 + 'px';
    this.imgNode.style.left = this.centerX -this.sizeX/2 + 'px';
    main.appendChild(this.imgNode);
}
Plan.prototype.move = function(){
    this.centerY = this.currentY + this.sizeY/2;
    this.currentY += this.speed;
    this.imgNode.style.top = this.currentY  + 'px';
    this.checkOverRange();  
}
// 飞机超出画布 removeChild自己 
// 添加isBottomRange属性
Plan.prototype.checkOverRange = function(){
    // if (this.currentY > (stagesSizeY - this.sizeY)) {
	// 	// console.log(' 撞到了');
	// 	main.removeChild(this.imgNode);
    // }
    this.isBottomRange = this.currentY > (stagesSizeY -this.sizeY );
    this.isTopRange = this.currentY < 0;
}

// 敌机的构造函数 所以敌机都丢在一个数组
var Enemy = function(){
    this.segments = [];
    this.generatedCount = 0;
};

var randomNumber = function(min,max){
    return Math.round(Math.random()*(max-min)+min);
}
Enemy.prototype.createNewEnemy =function(){
    this.generatedCount++;
    if ( this.generatedCount%17===0) {
        this.newEnemy = new Plan(randomNumber(enemyPlaneL.width/2,stageSizeX-enemyPlaneL.width/2),12,enemyPlaneL,1)    
    }else if(this.generatedCount%5===0){
        this.newEnemy = new Plan(randomNumber(enemyPlaneM.width/2,stageSizeX-enemyPlaneM.width/2),12,enemyPlaneM,randomNumber(1,3))
    }else {
        this.newEnemy = new Plan(randomNumber(enemyPlanes.width/2,stageSizeX-enemyPlanes.width/2),12,enemyPlanes,randomNumber(1,4))
    }
    this.segments.push(this.newEnemy);
    this.newEnemy.draw();
}
var score = 0;
// 
Enemy.prototype.moveAllEnemy = function(){
    for (var i = 0; i < this.segments.length; i++) {
        this.segments[i].move();  
        // 如果超出游戏界面就删除
        if (this.segments[i].isBottomRange) {
            main.removeChild(this.segments[i].imgNode);
            this.segments.splice(i,1);
        }
        // 检测子弹碰撞飞机
        for(var j =0; j < ourplan.segement.length;j++){
            if (this.segments[i].hp >0) {
              var horizontalCollision = Math.abs(this.segments[i].centerX - ourplan.segement[j].centerX) < (this.segments[i].sizeX/2 + ourplan.segement[j].sizeX/2)
              var verticalCollision = Math.abs(this.segments[i].centerY - ourplan.segement[j].centerY) < (this.segments[i].sizeY/2 + ourplan.segement[j].sizeY/2)
              var checkBulletCollision =horizontalCollision && verticalCollision;
              if (checkBulletCollision) {
                //   飞机撞子弹
                score++;
                scorediv.innerHTML = score;
                this.segments[i].imgNode.src = this.segments[i].hitSrc ?this.segments[i].hitSrc: this.segments[i].boomSrc;
                this.segments[i].hp--;

                // 飞机撞子弹后删掉子弹
                main.removeChild(ourplan.segement[j].imgNode);
                ourplan.segement.splice(j,1);
              }
            }
        }
        // 检测我方飞机碰撞
        var ourHorizontalCollision = Math.abs(this.segments[i].centerX - ourplan.centerX) < (this.segments[i].sizeX/2 + ourplan.sizeX/2);
        var ourVerticalCollision = Math.abs(this.segments[i].centerY - ourplan.centerY) < (this.segments[i].sizeY/2 + ourplan.sizeY/2);
        var checkOurCollision = ourHorizontalCollision &&ourVerticalCollision;
        if (checkOurCollision) {
            this.segments[i].hp =0;
            ourplan.hp--;
        }
        // 检测飞机是否死亡
        if (this.segments[i].hp <= 0) {
            this.segments[i].imgNode.src = this.segments[i].boomSrc;
            this.segments[i].boomTime-=10;
            // 把飞机删掉
            if (this.segments[i].boomTime <= 0) {
                main.removeChild(this.segments[i].imgNode);
                this.segments.splice(i,1);
            }
            
        }
    }
}
// 实例化所有敌机
var enemies = new Enemy();

var ourplan = new Plan(stageSizeX/2, stagesSizeY-ourplaneA.height/2, ourplaneA, 0);
ourplan.draw();

// var planeS = new Plan(17,12,enemyPlanes, 10);
// planeS.draw();
// var planeM = new Plan(297,10,enemyPlaneM, 5);
// planeM.draw();
// 我方飞机随鼠标移动
main.onmousemove = function(ev){
      ourplan.centerX = ev.clientX -content.offsetLeft;
      if ( ourplan.centerX < 0) {
          ourplan.centerX =0;
      }
      if (ourplan.centerX >stageSizeX) {
        ourplan.centerX =stageSizeX;
      }
      ourplan.centerY = ev.clientY - content.offsetTop;
      if (ourplan.centerY < 0) {
        ourplan.centerY = 0; 
      }
      if (ourplan.centerY > (stagesSizeY - ourplan.sizeY/2)) {
        ourplan.centerY = (stagesSizeY - ourplan.sizeY/2);
      }
      ourplan.currentX = ourplan.centerX -ourplan.sizeX/2;
      ourplan.currentY = ourplan.centerY -ourplan.sizeY/2;

     ourplan.imgNode.style.left = ourplan.currentX +'px';
     ourplan.imgNode.style.top = ourplan.currentY +'px';
}

// 在ourplan 对象里面添加一个数组，保存发射子弹
ourplan.segement =[];

// 构造子弹函数
var Bullet = Plan;
// 子弹放在函数creatNewBullet内
function creatNewBullet (){
    ourplan.newBullet = new Bullet(ourplan.centerX,ourplan.centerY -ourplan.sizeY/2,bulletA,-10);
    ourplan.segement.push(ourplan.newBullet);
    ourplan.newBullet.draw();
}
// 移动子弹
function moveNewBullet(){
    for (var i = 0; i < ourplan.segement.length; i++) {
      ourplan.segement[i].move();

      if(ourplan.segement[i].isTopRange){
          main.removeChild(ourplan.segement[i].imgNode);
          ourplan.segement.splice(i,1);
      }
        
    }
}

var gameover = function(){
    ourplan.imgNode.src = ourplan.boomSrc;
    clearInterval(timeid);
    settlement.style.display = 'block';
    document.querySelector('p#final-score').innerText=score;

}
var time = 0;
var timeid;
var start = function (){
    // start.style.display = 'none';
    main.style.display = 'block';
    suspend.style.display = 'none';
    settlement.style.display = 'none';


  timeid=setInterval(function(){
 time ++;
 if (time%15===0) {
     enemies.createNewEnemy();
 }
 enemies.moveAllEnemy();
 if (time%5=== 0) {
    creatNewBullet();
}
    moveNewBullet();
    if (ourplan.hp <= 0) {
        gameover();
    }
},30);
}
var restart = function (){
    window.location.reload();
}
continuediv.onclick = function(ev){
      ev.stopPropagation();
      start();
};
main.onclick = function(){
    clearTimeout(timeid);
    suspend.style.display = 'block';
}