


var super_map = document.getElementById("super_map");

//游戏加载
var game_Time = document.getElementById("game_Time");

var meter_01 = document.getElementById("meter_scroll");
var loader_01 = document.getElementById("loader_01");
var set = 0;
gameTime();
function gameTime(){
	loader_01.style.opacity = 1.0125;
	set = setInterval(function(){
    if(meter_01.value == 90){
        clearInterval(set);
        game_Time.style.zIndex = 0;
        maker.style.zIndex = 1;
        maker.style.opacity = 2.0125;
        gamemaker();
    }
    loader_01.style.opacity-=0.0125;
    meter_01.value+=1;
	},30);
}

//制作商
var maker = document.getElementById("maker");
var makerSet = 0;
function gamemaker(){
	smakerSet = setInterval(function(){
		if(maker.style.zIndex == 1){
			setTimeout(null,50);
	    	maker.style.opacity-=0.0225;
	    }
	    if(maker.style.opacity < 0){
	    	maker.style.opacity = 0;
	    	maker.style.zIndex = 0;
	    	menus.style.zIndex = 1;
	    	menus.style.opacity = 0;
	    	clearInterval(makerSet);
	    	menus_time();
	    }
	},30);
}

//游戏菜单
var menus = document.getElementById("menus");
var items = menus.getElementsByTagName("a");
var opacity_arg = 0;
var menuTime = 0;
function menus_time(){
	menuTime = setInterval(function(){
		if(opacity_arg >= 1){
			clearInterval(menuTime);
			menus.style.zIndex = 3;
			menus.style.opacity = 1;
			return;
		}
		opacity_arg+=0.01;
		menus.style.opacity = opacity_arg;
	},30);
}

//游戏说明


//开始游戏
/* 游戏中的地图大小16行16列
 * 0.表示过道
 * 1.表示围墙
 * 2.表示玩家
 * 3.表示小怪1
 * 4.表示小怪2
 * 5.表示小怪3
 * 6.表示小怪4
 * 7.表示血瓶加500血量
 * 8.表示上一层
 * 9.表示下一层
 * a.表示加5点攻击
 * b.表示加3点防御
 * c.表示加25点攻击
 * d.表示加30点防御
 */
var array_01 = [
	[9,0,0,3,3,7,"b",0,0,"a",7,3,3,0,0,0],
    [1,1,1,3,1,1,1,0,0,1,1,1,4,1,1,1],
    [1,3,3,3,3,3,1,0,0,1,7,7,5,7,7,1],
    [1,3,3,4,3,3,5,0,0,1,7,7,7,7,"a",1],
    [1,"a",7,"b",7,"b",1,0,0,4,5,5,"a",5,5,1],
    [1,"a",7,"b",7,"b",1,0,0,1,7,7,5,"a","a",1],
    [1,1,1,5,1,1,1,0,0,1,1,1,5,1,1,1],
    [1,7,7,"a","b","b",1,0,0,1,7,7,7,7,7,1],
    [1,"b",7,7,3,7,5,0,0,5,6,"a","a","a","a",1],
    [1,5,5,7,5,5,1,0,0,1,"a","a",7,"a","b",1],
    [1,"b","b",5,"b","b",1,0,0,1,1,1,5,1,1,1],
    [1,1,1,5,1,1,1,0,0,1,3,3,3,3,3,1],
    [1,"b",7,"b","b","a",1,0,0,6,4,4,5,7,"a",1],
    [1,5,7,"b","a",5,4,0,0,1,7,7,"b",7,7,1],
    [1,"c",5,7,5,"d",1,0,0,1,"a",7,5,"b",5,"c"],
    [1,1,1,1,1,1,1,2,0,1,1,1,1,1,1,"e"],
];
var array_02 = [
	[1,1,1,1,1,"d","a",1,0,1,0,0,1,0,9,1],
    [1,"b",7,7,1,"a",7,5,0,0,0,3,0,0,0,0],
    [1,4,3,3,1,7,7,1,0,0,0,3,0,0,0,0],
    [1,7,0,0,1,1,1,1,0,0,0,1,5,1,1,1],
    [1,0,7,0,1,"c",5,7,0,0,0,1,4,"a",7,7],
    [1,0,0,0,1,5,7,0,0,0,0,1,4,7,"a","c"],
    [1,1,5,1,1,1,1,1,0,4,1,1,1,1,1,1],
    [1,0,3,4,"c",1,"a",7,3,0,0,1,7,7,7,7],
    ["a",3,4,1,1,1,1,1,0,3,0,1,3,3,3,3],
    [1,0,0,0,"b",0,0,1,1,1,0,4,4,"a","a",5],
    [1,3,1,1,3,7,7,1,7,7,"a",1,"b","b",5,"c"],
    [7,7,3,"b",1,0,0,1,0,0,0,4,1,1,1,1],
    [7,3,"b",4,1,0,0,0,0,0,1,4,"a",3,"a",3],
    [3,"a",4,"a",1,0,0,7,0,0,1,"b",3,"b",3,"b"],
    ["a",4,3,"c",1,0,"b",0,"a",0,1,3,7,3,3,4],
    [1,1,1,1,1,1,1,8,2,1,1,7,3,3,4,"d"],
];
var array_03 = [
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,"a","a","a",3,7,7,7,1,0,0,1,7,"a","b",1],
    [1,"b","b","b",3,3,4,5,1,0,0,1,4,7,5,1],
    [1,9,0,1,1,5,1,1,1,0,0,0,3,3,4,1],
    [1,1,1,1,"a","b",7,0,1,5,1,1,1,1,1,1],
    [1,"b","a",1,0,0,0,0,1,0,0,1,7,7,3,1],
    [1,4,1,1,1,3,1,0,0,4,0,1,3,3,5,1],
    [1,0,0,0,1,4,1,3,3,0,0,1,1,1,0,1],
    [1,5,1,5,1,"d",1,0,0,4,0,0,0,0,0,1],
    [1,0,1,7,1,5,1,1,1,1,0,1,1,1,6,1],
    [1,4,0,0,1,3,1,5,0,0,0,1,"c","d","a",1],
    [1,7,3,0,0,0,0,3,0,0,0,1,1,1,1,1],
    [1,1,1,3,1,3,1,1,1,1,0,1,0,0,7,1],
    [1,7,0,3,1,4,5,0,7,1,0,1,0,0,0,1],
    [1,7,3,0,1,7,4,0,7,1,0,3,0,2,8,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
];
var array_04 = [
	[1,1,1,0,0,0,1,0,0,1,0,0,1,0,9,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
    [1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0],
    [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
    [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,4,1,1,1,1,0,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,1,3,3,0,0,0,0,0,0,0],
    [8,2,0,0,0,0,1,1,0,4,0,0,0,0,0,0],
    [1,0,0,0,"b",0,0,1,1,1,1,1,1,0,0,0],
    [1,0,1,0,3,0,0,1,0,0,"a",0,0,0,0,0],
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,0,7,0,0,0,0,0,0],
    [0,0,0,1,3,4,5,6,0,0,0,0,0,0,0,0],
    [1,0,3,1,0,0,4,0,3,0,1,1,1,1,0,3],
    [1,0,1,1,1,1,"a",0,"b",1,1,1,1,1,1,"b"],
];

var array_05 = [
	[9,6,1,0,0,0,1,0,0,1,0,0,1,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
    [1,0,0,0,1,1,1,1,0,0,0,0,3,0,0,0],
    [1,0,0,0,1,0,0,0,0,0,3,3,4,0,0,0],
    [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,4,1,1,1,1,0,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,1,3,3,0,0,0,0,0,0,0],
    [8,2,0,0,0,0,1,1,0,4,0,0,0,0,0,0],
    [1,0,0,0,"b",0,0,1,1,1,1,1,1,0,0,0],
    [1,0,1,0,3,0,0,1,0,0,"a",0,0,0,0,0],
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,0,7,0,0,0,0,0,0],
    [0,0,0,1,3,4,5,6,0,0,0,0,0,0,0,0],
    [1,0,3,1,0,0,4,0,3,0,1,1,1,1,0,3],
    [1,0,1,1,1,1,"a",0,"b",1,1,1,1,1,1,"b"],
];
var bg_music = document.getElementById("bg_music");
var array_copy = array_01.concat();//拷贝数组(当前楼层的数据)
var ceng = 1;//当前楼的层数
var floor_ceng = document.getElementById("floor_ceng");//显示当前楼的层数

var game_map01 = document.getElementById("game_map01");//地图
var body_elment = document.getElementsByTagName("body")[0];
//怪物动态html元素(顺序：生命值,攻击力,防御力)
var monster_date_elements = document.getElementsByClassName("monster_date_elements");
var person_3s1 = document.getElementById("person_3s1");
var person_3s2 = document.getElementById("person_3s2");
var person_3s3 = document.getElementById("person_3s3");

//玩家动态html元素(顺序：生命值,攻击力,防御力)
var persons_date_elements = document.getElementsByClassName("persons_date_elements");
//对战消息图
var vs_info_map = document.getElementById("vs_info_map");
//拾取物品消息
var game_msg = document.getElementById("game_msg");

//玩家的四个方向图：上 下 左 右
var persons = ["./images/person_t.png","./images/person_b.png","./images/person_l.png","./images/person_r.png"];//坐标
//野怪的种类
var monsters = ["./images/monster1.png","./images/monster2.png","./images/monster3.png","./images/monster4.png"];

//玩家信息(生命值,攻击力,防御力)
var personIofo = {
	being:2600,
	atk:100,
	defense:40
}

//怪物的信息(生命值,攻击力,防御力)
var monsterInfo = {
	being:800,
	atk:95,
	defense:40
}
var monsterInfo2 = {
	being:1500,
	atk:135,
	defense:100
}
var monsterInfo3 = {
	being:2600,
	atk:270,
	defense:150
}
var monsterInfo4 = {
	being:4000,
	atk:400,
	defense:320
}
var monstersInfo = [monsterInfo,monsterInfo2,monsterInfo3,monsterInfo4];
//怪物当前图片
var monster_img = document.getElementById("monster_img");
monster_img.src = monsters[0];
//坐标
var person_x = 0;
	person_y = 0;
//方向按钮
var btn_sd = document.getElementsByClassName("btn_sd");
//开始游戏的点击事件
items[0].onclick = function(){
	bg_music.autoplay = "true";

	menus.style.opacity = 0;
	menus.style.zIndex = 0;
	clearInterval(menuTime);
	game_map01.style.zIndex = 1;
	game_map01.style.opacity = 1;
	btn_event();
	detection_key();
	map_f5(array_copy,1);
}

var bools = true;//键盘的事件是否可以执行

//对战方法
function vs_fun(person_x,person_y,move_num,monster_info){
	var this_monster_being = monster_info.being;//当前怪物的总血量

	initialize();//调用对战初始信息
	function initialize(){
		persons_date_elements[0].innerHTML = personIofo.being;
		persons_date_elements[1].innerHTML = personIofo.atk;
		persons_date_elements[2].innerHTML = personIofo.defense;

		monster_date_elements[0].innerHTML = monster_info.being;
		monster_date_elements[1].innerHTML = monster_info.atk;
		monster_date_elements[2].innerHTML = monster_info.defense;
		setTimeout(timeout,400);
	}

	//对战情况
	function timeout(){
		if(this_monster_being <= 0 ){
			vs_info_map.style.opacity = 0;
			array_copy[person_x][person_y] = 0;
			personIofo.atk++;
			map_f5(array_copy,move_num);
			bools = true;//启动键盘的移动事件
			return;
		}
		if(personIofo.being <= 0){
			game_msg.innerHTML="";
			
			game_msg.innerHTML="<a href='' style='color:#DD6767;text-decoration='underline';' >重新开始</a>";
			game_msg.innerHTML+=" ";

			vs_info_map.style.opacity = 0;
			game_msg.style.opacity = 1;
			game_msg.style.zIndex = 3;
			var element_a = document.createElement("span");
			var text_a = document.createTextNode("继续游戏");
			element_a.style.fontSize="30px";
			element_a.style.color="#21C921";
			element_a.appendChild(text_a);
			element_a.style.cursor="pointer";
			element_a.style.textDecoration="underline";
			element_a.addEventListener("click",function(){
				game_msg.style.opacity = 0;
				personIofo.being = 1000;
				bools = true;//启动键盘的移动事件
				map_f5(array_copy,1);
				//menus_time();
			});
			
			game_msg.appendChild(element_a);
			return;
		}
		if(personIofo.defense < monster_info.atk){
			//玩家的防御力小于怪物的攻击力
			personIofo.being = personIofo.being - (monster_info.atk - personIofo.defense);
			personIofo.being = personIofo.being <= 0 ? 0 : personIofo.being;
		}

		if(monster_info.defense < personIofo.atk){
			this_monster_being = this_monster_being - (personIofo.atk - monster_info.defense);
			this_monster_being = this_monster_being <= 0 ? 0 : this_monster_being;
		}

		persons_date_elements[0].innerHTML = personIofo.being;
		monster_date_elements[0].innerHTML = this_monster_being;

		setTimeout(timeout,150);
	}
}


/*var personIofo = {
	being:8000,//血
	atk:100,//攻击力
	defense:45 //防御力
}*/
//拾取物品方法
function pickup_fun(number){
	var tempPickup = 0.1;
	game_msg.style.opacity = 1;
	switch(number){
		case 7:
			game_msg.innerHTML = "你拾取了一个 血瓶 增加500点血量";
			personIofo.being += 500;
			setTimePickup(150);
			break;
		case "a":
			game_msg.innerHTML = "你拾取了一个 红宝石 增加5点攻击力";
			personIofo.atk += 5;
			setTimePickup(150);
			break;
		case "b":
			game_msg.innerHTML = "你拾取了一个 蓝宝石 增加3点防御力";
			personIofo.defense += 3;
			setTimePickup(150);
			break;
		case "c":
			game_msg.innerHTML = "恭喜你拾取了一个 <span style='font-weight: bolder;font-size:30px;color:red;'>圣剑!!!</span> 增加25点攻击力";
			personIofo.defense += 25;
			setTimePickup(400);
			break;
		case "d":
			game_msg.innerHTML = "恭喜你拾取了一个 <span style='font-weight: bolder;font-size:30px;color:blue;'>圣甲护盾!!!</span> 增加30点防御力";
			personIofo.defense += 30;
			setTimePickup(400);
			break;
		case "e":
			game_msg.innerHTML = "<span style='font-weight: bolder;font-size:30px;color:red;'>德玛西亚的大宝剑!!!</span> 增加15%的属性";
			personIofo.atk += Math.ceil(personIofo.atk * 0.15);
			personIofo.defense += Math.ceil(personIofo.defense * 0.15);
			personIofo.being += Math.ceil(personIofo.being * 0.15);
			setTimePickup(500);
			break;
	}
	function setTimePickup(time_ss){
		if(game_msg.style.opacity >= 1){
			var setIntervalPickup = setInterval(function(){
				if(game_msg.style.opacity <= 0){
					clearInterval(setIntervalPickup);
				}
				game_msg.style.opacity -= tempPickup;
			},time_ss);
		}
	}
}

function btn_event(){
	/*按钮*/
	//上
	btn_sd[0].onmousedown = function(){
		if(bools){
			top_methoda();
		}
	}
	//左
	btn_sd[1].onmousedown = function(){
		if(bools){
			left_methoda();
		}
	}
	//下
	btn_sd[2].onmousedown = function(){
		if(bools){
			bottom_methoda();
		}
	}
	//右
	btn_sd[3].onmousedown = function(){
		if(bools){
			right_methoda();
		}
	}
	// 移动的方法
	// move_super(x坐标,y坐标,当前位置的下一个方向位置,图片路径);
	function move_super(coord_x,coord_y,move_num,monsters_img){
		monster_img.src = monsters[monsters_img];
		vs_info_map.style.opacity = 1;
		vs_fun(coord_x,coord_y,move_num,monstersInfo[monsters_img]);
		bools = false;//禁止移动事件
	}
	//move_super(x坐标,y坐标,人物方向图下标)玩家的四个方向图：上 下 左 右
	function move_person(coord_x,coord_y,move_num){
		// var temp = array_copy[person_x][person_y];
		array_copy[person_x + coord_x][person_y + coord_y] = array_copy[person_x][person_y];
		array_copy[person_x][person_y] = 0;
		map_f5(array_copy,move_num);
	}
	//上下楼(8上一楼,9下一楼)
	function floor(number){
		switch (number){
			case 8:
				if(ceng == 2){
					array_02 = array_copy.concat();
					array_copy = array_01.concat();
					ceng--;
					map_f5(array_copy,1);
				}else if(ceng == 3){
					array_03 = array_copy.concat();
					array_copy = array_02.concat();
					ceng--;
					map_f5(array_copy,1);
				}else if(ceng == 4){
					array_04 = array_copy.concat();
					array_copy = array_03.concat();
					ceng--;
					map_f5(array_copy,1);
				}else if(ceng == 5){
					array_05 = array_copy.concat();
					array_copy = array_04.concat();
					ceng--;
					map_f5(array_copy,1);
				}
				floor_ceng.innerHTML = ceng;
				break;
			case 9:
				if(ceng == 1){
					array_01 = array_copy.concat();
					array_copy = array_02.concat();
					ceng++;
					map_f5(array_copy,1);
				}else if(ceng == 2){
					array_02 = array_copy.concat();
					array_copy = array_03.concat();
					ceng++;
					map_f5(array_copy,1);
				}else if(ceng == 3){
					array_03 = array_copy.concat();
					array_copy = array_04.concat();
					ceng++;
					map_f5(array_copy,1);
				}else if(ceng == 4){
					array_04 = array_copy.concat();
					array_copy = array_05.concat();
					ceng++;
					map_f5(array_copy,1);
				}else if(ceng == 5){
					alert("恭喜通关");
					map_f5(array_copy,1);
				}
				floor_ceng.innerHTML = ceng;
				break;
		}
	}
	// 方向左
	function left_methoda(){
		map_f5(array_copy,2);
		if( person_y - 1 >= 0  ){
			switch(array_copy[person_x][person_y - 1]){
				case 0:
					move_person(0,-1,2);
					break;
				case 3:
					move_super(person_x,person_y-1,2,0);
					break;
				case 4:
					move_super(person_x,person_y-1,2,1);
					break;
				case 5:
					move_super(person_x,person_y-1,2,2);
					break;
				case 6:
					move_super(person_x,person_y-1,2,3);
					break;
				case 8:
					floor(8);
					break;
				case 9:
					floor(9);
					break;
				default:
					//吃到加属性的道具
					var temp_x_y = array_copy[person_x][person_y - 1];
					if(temp_x_y == 7 || temp_x_y == "a" || temp_x_y == "b" || temp_x_y == "c" || temp_x_y == "d" || temp_x_y == "e"){
						pickup_fun( temp_x_y );
						move_person(0,-1,2);
					}
					break;
			}
		}
	}
	//方向上
	function top_methoda(){
		map_f5(array_copy,0);
		if( (person_x - 1) >= 0 ){
			switch(array_copy[person_x - 1][person_y]){
				case 0:
					move_person(-1,0,0);
					break;
				case 3:
					move_super(person_x-1,person_y,0,0);
					break;
				case 4:
					move_super(person_x-1,person_y,0,1);
					break;
				case 5:
					move_super(person_x-1,person_y,0,2);
					break;
				case 6:
					move_super(person_x-1,person_y,0,3);
					break;
				case 8:
					floor(8);
					break;
				case 9:
					floor(9);
					break;
				default:
					//吃到加属性的道具
					var temp_x_y = array_copy[person_x - 1][person_y];
					if(temp_x_y == 7 || temp_x_y == "a" || temp_x_y == "b" || temp_x_y == "c" || temp_x_y == "d" || temp_x_y == "e"){
						pickup_fun( temp_x_y );
						move_person(-1,0,0);
					}
					break;
			}
		}
	}
	//方向下
	function bottom_methoda(){
		map_f5(array_copy,1);
		if( (person_x + 1) < array_copy[person_x].length){
			switch( array_copy[person_x + 1][person_y] ){
				case 0:
					move_person(1,0,1);
					break;
				case 3:
					move_super(person_x + 1,person_y,1,0);
					break;
				case 4:
					move_super(person_x + 1,person_y,1,1);
					break;
				case 5:
					move_super(person_x + 1,person_y,1,2);
					break;
				case 6:
					move_super(person_x + 1,person_y,1,3);
					break;
				case 8:
					floor(8);
					break;
				case 9:
					floor(9);
					break;
				default:
					//吃到加属性的道具
					var temp_x_y = array_copy[person_x + 1][person_y];
					if(temp_x_y == 7 || temp_x_y == "a" || temp_x_y == "b" || temp_x_y == "c" || temp_x_y == "d" || temp_x_y == "e"){
						pickup_fun( temp_x_y );
						move_person(1,0,1);
					}
					break;
			}
		}
	}
	//方向右
	function right_methoda(){
		map_f5(array_copy,3);
		if( (person_y + 1) < array_copy[person_y].length){
			switch(array_copy[person_x][person_y + 1]){
				case 0:
					move_person(0,1,3);
					break;
				case 3:
					move_super(person_x,person_y+1,3,0);
					break;
				case 4:
					move_super(person_x,person_y+1,3,1);
					break;
				case 5:
					move_super(person_x,person_y+1,3,2);
					break;
				case 6:
					move_super(person_x,person_y+1,3,3);
					break;
				case 8:
					floor(8);
					break;
				case 9:
					floor(9);
					break;
				default:
					//吃到加属性的道具
					var temp_x_y = array_copy[person_x][person_y + 1];
					if(temp_x_y == 7 || temp_x_y == "a" || temp_x_y == "b" || temp_x_y == "c" || temp_x_y == "d" || temp_x_y == "e"){
						pickup_fun( temp_x_y );
						move_person(0,1,3);
					}
					break;
			}
		}
	}
	
}
	

//detection_key移动事件
function detection_key(){
	body_elment.onkeydown = function(e){
		if(bools){
			var detection = e.keyCode;
			// 移动的方法
			// move_super(x坐标,y坐标,当前位置的下一个方向位置,图片路径);
			function move_super(coord_x,coord_y,move_num,monsters_img){
				monster_img.src = monsters[monsters_img];
				vs_info_map.style.opacity = 1;
				vs_fun(coord_x,coord_y,move_num,monstersInfo[monsters_img]);
				bools = false;//禁止移动事件
			}
			//move_super(x坐标,y坐标,人物方向图下标)玩家的四个方向图：上 下 左 右
			function move_person(coord_x,coord_y,move_num){
				// var temp = array_copy[person_x][person_y];
				array_copy[person_x + coord_x][person_y + coord_y] = array_copy[person_x][person_y];
				array_copy[person_x][person_y] = 0;
				map_f5(array_copy,move_num);
			}
			//上下楼(8上一楼,9下一楼)
			function floor(number){
				switch (number){
					case 8:
						if(ceng == 2){
							array_02 = array_copy.concat();
							array_copy = array_01.concat();
							ceng--;
							map_f5(array_copy,1);
						}else if(ceng == 3){
							array_03 = array_copy.concat();
							array_copy = array_02.concat();
							ceng--;
							map_f5(array_copy,1);
						}else if(ceng == 4){
							array_04 = array_copy.concat();
							array_copy = array_03.concat();
							ceng--;
							map_f5(array_copy,1);
						}else if(ceng == 5){
							array_05 = array_copy.concat();
							array_copy = array_04.concat();
							ceng--;
							map_f5(array_copy,1);
						}
						floor_ceng.innerHTML = ceng;
						break;
					case 9:
						if(ceng == 1){
							array_01 = array_copy.concat();
							array_copy = array_02.concat();
							ceng++;
							map_f5(array_copy,1);
						}else if(ceng == 2){
							array_02 = array_copy.concat();
							array_copy = array_03.concat();
							ceng++;
							map_f5(array_copy,1);
						}else if(ceng == 3){
							array_03 = array_copy.concat();
							array_copy = array_04.concat();
							ceng++;
							map_f5(array_copy,1);
						}else if(ceng == 4){
							array_04 = array_copy.concat();
							array_copy = array_05.concat();
							ceng++;
							map_f5(array_copy,1);
						}else if(ceng == 5){
							alert("恭喜通关");
							map_f5(array_copy,1);
						}
						floor_ceng.innerHTML = ceng;
						break;
				}
			}
			// 方向左
			function left_method(){
				map_f5(array_copy,2);
				if( person_y - 1 >= 0  ){
					switch(array_copy[person_x][person_y - 1]){
						case 0:
							move_person(0,-1,2);
							break;
						case 3:
							move_super(person_x,person_y-1,2,0);
							break;
						case 4:
							move_super(person_x,person_y-1,2,1);
							break;
						case 5:
							move_super(person_x,person_y-1,2,2);
							break;
						case 6:
							move_super(person_x,person_y-1,2,3);
							break;
						case 8:
							floor(8);
							break;
						case 9:
							floor(9);
							break;
						default:
							//吃到加属性的道具
							var temp_x_y = array_copy[person_x][person_y - 1];
							if(temp_x_y == 7 || temp_x_y == "a" || temp_x_y == "b" || temp_x_y == "c" || temp_x_y == "d" || temp_x_y == "e"){
								pickup_fun( temp_x_y );
								move_person(0,-1,2);
							}
							break;
					}
				}
			}
			//方向上
			function top_method(){
				map_f5(array_copy,0);
				if( (person_x - 1) >= 0 ){
					switch(array_copy[person_x - 1][person_y]){
						case 0:
							move_person(-1,0,0);
							break;
						case 3:
							move_super(person_x-1,person_y,0,0);
							break;
						case 4:
							move_super(person_x-1,person_y,0,1);
							break;
						case 5:
							move_super(person_x-1,person_y,0,2);
							break;
						case 6:
							move_super(person_x-1,person_y,0,3);
							break;
						case 8:
							floor(8);
							break;
						case 9:
							floor(9);
							break;
						default:
							//吃到加属性的道具
							var temp_x_y = array_copy[person_x - 1][person_y];
							if(temp_x_y == 7 || temp_x_y == "a" || temp_x_y == "b" || temp_x_y == "c" || temp_x_y == "d" || temp_x_y == "e"){
								pickup_fun( temp_x_y );
								move_person(-1,0,0);
							}
							break;
					}
				}
			}
			//方向下
			function bottom_method(){
				map_f5(array_copy,1);
				if( (person_x + 1) < array_copy[person_x].length){
					switch( array_copy[person_x + 1][person_y] ){
						case 0:
							move_person(1,0,1);
							break;
						case 3:
							move_super(person_x + 1,person_y,1,0);
							break;
						case 4:
							move_super(person_x + 1,person_y,1,1);
							break;
						case 5:
							move_super(person_x + 1,person_y,1,2);
							break;
						case 6:
							move_super(person_x + 1,person_y,1,3);
							break;
						case 8:
							floor(8);
							break;
						case 9:
							floor(9);
							break;
						default:
							//吃到加属性的道具
							var temp_x_y = array_copy[person_x + 1][person_y];
							if(temp_x_y == 7 || temp_x_y == "a" || temp_x_y == "b" || temp_x_y == "c" || temp_x_y == "d" || temp_x_y == "e"){
								pickup_fun( temp_x_y );
								move_person(1,0,1);
							}
							break;
					}
				}
			}
			//方向右
			function right_method(){
				map_f5(array_copy,3);
				if( (person_y + 1) < array_copy[person_y].length){
					switch(array_copy[person_x][person_y + 1]){
						case 0:
							move_person(0,1,3);
							break;
						case 3:
							move_super(person_x,person_y+1,3,0);
							break;
						case 4:
							move_super(person_x,person_y+1,3,1);
							break;
						case 5:
							move_super(person_x,person_y+1,3,2);
							break;
						case 6:
							move_super(person_x,person_y+1,3,3);
							break;
						case 8:
							floor(8);
							break;
						case 9:
							floor(9);
							break;
						default:
							//吃到加属性的道具
							var temp_x_y = array_copy[person_x][person_y + 1];
							if(temp_x_y == 7 || temp_x_y == "a" || temp_x_y == "b" || temp_x_y == "c" || temp_x_y == "d" || temp_x_y == "e"){
								pickup_fun( temp_x_y );
								move_person(0,1,3);
							}
							break;
					}
				}
			}

			/*键盘方向键*/
			//左
			if(detection == 37){
				left_method();				
			}
			//上
			else if(detection == 38){
				top_method();
			}
			//右
			else if(detection == 39){
				right_method();
			}
			//下
			else if(detection == 40){
				bottom_method();
			}
		}//结束
	}
}

/*---------右边地图--------*/
/* 游戏中的地图大小16行16列
 * 0.表示过道
 * 1.表示围墙
 * 2.表示玩家
 * 3.表示小怪1
 * 4.表示小怪2
 * 5.表示小怪3
 * 6.表示小怪4
 * 7.表示血瓶
 * 8.表示上一层
 * 9.表示下一层
 * a.表示加5点攻击
 * b.表示加5点防御
 */

var map_right = document.getElementById("map_right");
function map_f5(array_copy,move_num){
	/*玩家的三个属性*/
	person_3s1.innerHTML = personIofo.being;
	person_3s2.innerHTML = personIofo.atk;
	person_3s3.innerHTML = personIofo.defense;
	var temp = "";
	for(var i = 0; i < array_copy.length; i++){
	    for(var j = 0; j < array_copy[i].length; j++){
	    	switch(array_copy[i][j]){
	    		case 0:
	    			temp += "<div class='map'></div>";
	    			break;
	    		case 1:
	    			temp += "<div class='wall'></div>";
	    			break;
	    		case 2:
	    			temp += "<img class='person1' src="+ persons[move_num] + ">";
	            	person_x = i;//记录玩家的x坐标
	            	person_y = j;//记录玩家的y坐标
	            	break;
	            case 3:
	            	temp += "<img class='monster' src=" + monsters[0] + ">";
	            	break;
	            case 4:
	            	temp += "<img class='monster' src=" + monsters[1] + ">";
	            	break;
	            case 5:
	            	temp += "<img class='monster' src=" + monsters[2] + ">";
	            	break;
	            case 6:
	            	temp += "<img class='monster' src=" + monsters[3] + ">";
	            	break;
	            case 7:
	            	temp += "<img class='monster' src='./images/blood.png'>";
	            	break;
	            case 8:
	            	temp += "<img class='monster' src='./images/ladder_previous.png'>";
	            	break;
	            case 9:
	            	temp += "<img class='monster' src='./images/ladder_next.png'>";
	            	break;
	            case "a":
	            	temp += "<img class='monster' src='./images/hp.jpg'>";
	            	break;
	            case "b":
	            	temp += "<img class='monster' src='./images/mp.jpg'>";
	            	break;
	            case "c":
	            	temp += "<img class='monster' src='./images/atks.jpg'>";
	            	break;
	            case "d":
	            	temp += "<img class='monster' src='./images/kks.jpg'>";
	            	break;
	            case "e":
	            	temp += "<img class='monster' src='./images/dbj.jpg'>";
	            	break;
	    	}
	    }
	}
	map_right.innerHTML = temp;
}


