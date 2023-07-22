let aboutOffsetTop = $("#about").offset().top;	// topبطول ب ال aboutده بيجيب المسافه م بين اول الموقع و ال offset

$(window).scroll(function(){	// scroll يعمل userانا كده بقول لم ال 
	let wScroll = $(window).scrollTop();

	if(wScroll > aboutOffsetTop - 50){	// main-nav بتاع backgroundColorغير ال aboutOffsetTop ويوصل scroll انا كده بقول لم يعمل 
		$("#main-nav").css("backgroundColor", "rgba(0, 0, 0,0.7)");
	}
	else{	// transparent ولم يطلع تاني اعمل 
		$("#main-nav").css("backgroundColor", "transparent");
	}
})

//=============================================
//ده علشان لم اضغط علي السهم يطلع ل فوق 
let arrowOffsetTop = $("#about").offset().top;

$(window).scroll(function(){	// scroll يعمل userانا كده بقول لم ال 
	let wScroll = $(window).scrollTop();

	if(wScroll > arrowOffsetTop - 50){	// اظهر السهم about لم انزل ع 
		$("#btnUp").fadeIn(500);
	}
	else{	// لم اطلع اخفي السهم 
		$("#btnUp").fadeOut(500);
	}
})
$("#btnUp").click(function(){	// لم اضغط ع السهم اطلع ع اول الموقع في 3 ثواني 
	$("html,body").animate({scrollTop:0} , 3000);
})

//=============================================
//يتحرك بشكل جميل navbarده علشان لم اضغط علي اي لينك في ال
 $("a[href^='#']").click(function() {
	let aHref = $(this).attr("href");
	let sectionOffset = $(aHref).offset().top;
	$("html,body").animate({scrollTop:sectionOffset} , 2000);
});

//=============================================
// ده علشان بوكس الالوان

let colorBoxWidth = $ ("#colorBox").outerWidth(); //colorBoxWidth واحطها في colorBoxانا كده بجيب عرض ال innerWidth

$("#sideBar").css({left:`-${colorBoxWidth}`}); // يبقي جوه اول م افتح الموقع Boxده علشان ال

$("#sideBarToggle").click(function(){

	if($('#sideBar').css("left")=="0px") {
		$("#sideBar").animate({left:`-${colorBoxWidth}`}, 2000);//left ب السالب ل colorBoxWidthكده لم اضغط علي الاعدادت داخل ال
	}
	else {
		$('#sideBar').animate({left:`0px`}, 2000);//ده كده يبقي بره	0 = left ب sideBar انا كده بقول لو البوكس
	}
})


// تغير اللون في البوكس 
let colorBox = $(".color-item")
for(let i =0; i< colorBox.length; i++) {
	let red = Math.round(Math.random()*255);
	let green = Math.round(Math.random()*255);
	let blue = Math.round(Math.random()*255);

	colorBox.eq(i).css("backgroundColor" , `rgb(${red} ,${green} ,${blue} )`);
}

//بيغير بقي الالون اللي انت عايزه boxلم اضغط علي لون من الالون في ال
colorBox.click(function(){
	let bkgColor = $ (this).css("backgroundColor");
	$(".boxBackgroundColor").css("backgroundColor" , bkgColor)
	$(".boxColor").css("color" , bkgColor)
})

//==================================
$(document).ready(function(){
	$("#loading").fadeOut(2000 , function(){
		$("body").css("overflow" , "auto")
	});
});

