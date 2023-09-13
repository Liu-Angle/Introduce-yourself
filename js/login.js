function displayimg(){
			var bodyBgs = [];  //图片地址
			bodyBgs[0] = "./img/beijing/1.jpg";
			bodyBgs[1] = "./img/beijing/2.jpg";
			bodyBgs[2] = "./img/beijing/3.jpg";
			bodyBgs[3] = "./img/beijing/4.jpg";
			bodyBgs[4] = "./img/beijing/5.jpg";
			bodyBgs[5] = "./img/beijing/6.jpg";
			bodyBgs[6] = "./img/beijing/7.jpg";
			bodyBgs[7] = "./img/beijing/8.jpg";
	        bodyBgs[8] = "../img/beijing/9.jpg";
			var randomBgIndex = Math.round( Math.random() * 8 ); //去随机数
			var obj= document.getElementById('myarea');
	        obj.innerHTML = '<style>body{background:url(' + bodyBgs[randomBgIndex] +');background-size: cover;}</style>';
			}
