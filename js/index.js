



$(document).ready(function(){
	var page_wrap = $(".scrollLayout"); // 홈페이지 전체를 감싸는 영역의 이름
	var page_name = $(".fullpage");
	var page_inner_name = $(".cts_wrapper"); // 위아래 가운데 배치될 영역의 이름
	var page_css = "on"; // 각 섹션이 보일때 추가될 class명
	var window_h = $(window).height();
	var window_w = $(window).width();
	var index_wrap_name = $("aside"); // 퀵메뉴의 이름
	var index_name = $("aside ul li"); // 퀵메뉴 하나의 이름
	//var index_length = index_name.length;
	var index_css = "on"; // 퀵메뉴에 현재 메뉴에 추가되는 클래스명 
	var mobile_size = 640; //모바일에서도 패럴랙스가 적용되므로 의미없는 값
	var footer_use = true;//footer의 존재여부 (true - 존재함, false - 존재하지 않음)
	var footer_name = $("footer");//footer이름
	var footer_use_h;//footer의 높이값
	var header_name = $("#header"); //header의 이름
	var header_fix_use = false;//header에 fixed를 준 경우 (만약 absolute나 주지 않은 경우는 false을 줘야 한다.)
	var header_fix_h;//header의 높이값 
	var page_index = 1;//현재 페이지번호
	var prev_index;
	var page_total;

	page_h();
	page_total = page_name.length;
	prev_index = page_total;
	index_labeling();
	index_reset();

	if(footer_use == true){
		footer_name.css("z-index",1);
	}
	
	function index_reset(){
		if(page_index<page_total){
			for(i=0;i<page_total;i++){
				page_name.eq(i).css("z-index",page_total-i+1);
			}
			page_name.eq(page_index-1).css("z-index",page_total+2);
		}
	}

	function index_labeling(){
		page_name.removeClass(page_css);
		page_name.eq(page_index-1).addClass(page_css);
		index_name.removeClass(index_css);
		index_name.eq(page_index-1).addClass(index_css);
		
		index_wrap_name.removeClass();
		index_wrap_name.addClass("sec"+page_index);
		header_name.removeClass();
		header_name.addClass("sec"+page_index);
	}

	function page_h(){
		page_name.height(window_h);
		page_wrap.height(window_h);
	}

	function inner_padding(){
		for(var i=0;i<page_total;i++){
			if(header_fix_use == true){
				page_name.eq(i).find(page_inner_name).css("padding-top", ((window_h  - page_name.eq(i).find(page_inner_name).height() - header_fix_h)/2)+header_fix_h);
			}else{
				page_name.eq(i).find(page_inner_name).css("padding-top", (window_h  - page_name.eq(i).find(page_inner_name).height())/2);
			}
		}
	}

	$(window).resize(function(){
		window_w = $(window).width();
		window_h = $(window).height();
		header_fix_h = header_name.height();
		footer_use_h = footer_name.height();
		page_h();
		index_labeling();
		inner_padding();
	})

	$(window).load(function(){
		header_fix_h = header_name.height();
		footer_use_h = footer_name.height();
		index_labeling();
		inner_padding();
	});

	$(index_name).on("click", function(){
		if($(this).index()+1 != page_index){
			prev_index = page_index;
			page_index = $(this).index()+1;
			if(Math.abs(page_index-prev_index) > 1){
				page_name.eq(page_index-1).css("z-index",page_total+2);
				page_name.eq(prev_index-1).css("z-index",page_total+2);
			}
			if(prev_index>page_total){
				if(page_index == page_total){
					page_name.eq(page_index-1).css("top",-footer_use_h+"px");
					footer_name.animate({
						top : window_h+"px"
					},1000,"easeOutQuint", index_reset);
					page_name.eq(page_index-1).animate({
						top : 0
					},1000,"easeOutQuint");
				}else{
					page_name.eq(page_index-1).css("z-index",page_total+3);
					page_name.eq(page_index-1).css("top",-window_h+"px");
					page_name.eq(page_total-1).css("top",-footer_use_h+"px");
					footer_name.animate({
						top : window_h+"px"
					},800,"easeOutQuint");
					page_name.eq(page_total-1).animate({
						top : 0
					},800,"easeOutQuint");
					page_name.eq(page_index-1).delay(300).animate({
						top : 0
					},800,"easeOutQuint", index_reset);
				}
			}else{
				if(page_index>prev_index){//아래로 스크롤
					page_name.eq(page_index-1).css("top",window_h+"px");
					page_name.eq(prev_index-1).animate({
						top : - window_h+"px"
					},1000,"easeOutQuint", index_reset);
					page_name.eq(page_index-1).animate({
						top : 0
					},1000,"easeOutQuint");
				}else{//위로 스크롤
					page_name.eq(page_index-1).css("top",-window_h+"px");
					page_name.eq(prev_index-1).animate({
						top : window_h+"px"
					},1000,"easeOutQuint", index_reset);
					page_name.eq(page_index-1).animate({
						top : 0
					},1000,"easeOutQuint");
				}
			}
			index_labeling();
		}
	});

	//마우스 스크롤을 감지해서 한페이지씩 이동
	$("html, body").on("mousewheel DOMMouseScroll", function scroll_check(e){
		if(window_w > mobile_size){
			var E = e.originalEvent;
			var delta = 0;
			if (E.detail) {
				delta = E.detail * -40;
			}else{
				delta = E.wheelDelta;
			};
			$("html, body").off("mousewheel DOMMouseScroll");
			$("html, body").on("mousewheel DOMMouseScroll", function(e){
				e.preventDefault();
				e.stopPropagation();
				return false;
			},function(){passive: false});


			if(delta > 0){//위로 스크롤
				if((page_index > page_total)&&(footer_use == true)){//footer에 간경우
					prev_index = page_index;
					page_index = page_total;
				}else if(page_index > 1){
					prev_index = page_index;
					page_index--;
				}else{
					prev_index = page_index;
					page_index = 1;
				}
			}else{//아래로 스크롤
				if(page_index<page_total){
					prev_index = page_index;
					page_index++;
				}else if((page_index<page_total+1)&&(page_index!=prev_index)&&(footer_use == true)){
					prev_index = page_index;
					page_index++;
				}else{
					prev_index = page_index;
				}
			}
			if((page_index != prev_index)&&(page_index <= page_total)&&(prev_index <= page_total)){//일반 움직임.
				if(page_index>prev_index){//아래로 내려갈때
					page_name.eq(page_index-1).css("top",window_h+"px");
					page_name.eq(prev_index-1).animate({
						top : - window_h+"px"
					},1000,"easeOutQuint");
					page_name.eq(page_index-1).animate({
						top : 0
					},1000,"easeOutQuint", function(){$("html, body").off();$("html, body").on("mousewheel DOMMouseScroll", scroll_check); $("html, body").stop();index_reset();});
				}else{//위로 올라갈때
					page_name.eq(page_index-1).css("top",-window_h+"px");
					page_name.eq(prev_index-1).animate({
						top : window_h+"px"
					},1000,"easeOutQuint");
					page_name.eq(page_index-1).animate({
						top : 0
					},1000,"easeOutQuint", function(){$("html, body").off();$("html, body").on("mousewheel DOMMouseScroll", scroll_check); $("html, body").stop();index_reset();});
				}
				index_labeling();
			}else if((page_index > page_total)||(prev_index > page_total)){//footer가 올라오는 animation
				footer_name.css("z-index",page_total+2);
				if(page_index > prev_index){//footer가 나타나는 효과
					footer_name.css("top",window_h+"px");
					page_name.eq(prev_index-1).animate({
						top : - footer_use_h+"px"
					},1000,"easeOutQuint");
					footer_name.animate({
						top : window_h - footer_use_h+"px"
					},1000,"easeOutQuint", function(){$("html, body").off();$("html, body").on("mousewheel DOMMouseScroll", scroll_check); $("html, body").stop();index_reset();});
				}else if(page_index < prev_index){//footer가 사라지는 효과
					page_name.eq(page_index-1).css("top",-footer_use_h+"px");
					footer_name.animate({
						top : window_h+"px"
					},1000,"easeOutQuint");
					page_name.eq(page_index-1).animate({
						top : 0
					},1000,"easeOutQuint", function(){$("html, body").off();$("html, body").on("mousewheel DOMMouseScroll", scroll_check); $("html, body").stop();index_reset();footer_name.css("z-index",1);});
				}else{
					$("html, body").off();$("html, body").on("mousewheel DOMMouseScroll", scroll_check); $("html, body").stop();
				}
				index_labeling();
			}else{
				$("html, body").off();$("html, body").on("mousewheel DOMMouseScroll", scroll_check); $("html, body").stop();
			}
		}
	});


	var obj_drag = false;
	var startY = null;
	var prevY = null;
	var currY = null;
	//var moveY = null;
	//var afterY = null;
	var evt = null;
	//터치를 인색해서 한페이지씩 이동 
	$("html, body").on("touchstart", function(a){
		obj_drag = true;
		evt = a.originalEvent;
		currY = evt.touches[0].pageY
		startY = evt.touches[0].pageY;
		$("html, body").on("touchmove", function(b){
			if(obj_drag ==  true){
				evt = b.originalEvent;
				prevY = currY;
				currY = evt.touches[0].pageY;
				moveY = prevY - currY;
			}
		});
	});
	$(document).on("touchend", function(){
		if((obj_drag == true) && (Math.abs(startY) != (Math.abs(currY)))){
			//console.log(currY-startY);
			page_count(currY-startY);
			
		}
	});

	var direct;
	function page_count(direct){
		//console.log(direct);
		if(direct > 0){//위로 스크롤
			if((footer_use == true)&&(page_index>page_total)){
				prev_index = page_index;
				page_index--;
				//console.log("footer빠이빠이"+page_index);
				page_name.eq(page_index-1).css("top",-footer_use_h+"px");
				footer_name.animate({
					top : window_h+"px"
				},1000,"easeOutQuint");
				page_name.eq(page_index-1).animate({
					top : 0
				},1000,"easeOutQuint", function(){index_reset();footer_name.css("z-index",1);});
			}else if(page_index>1){
				prev_index = page_index;
				page_index--;
				//console.log(page_index);
				page_name.eq(page_index-1).css("top",-window_h+"px");
				page_name.eq(prev_index-1).animate({
					top : window_h+"px"
				},1000,"easeOutQuint");
				page_name.eq(page_index-1).animate({
					top : 0
				},1000,"easeOutQuint", index_reset);
			}
		}else{//아래로 스크롤
			if(page_index<page_total){
				prev_index = page_index;
				page_index++;
				//console.log(page_index);
				page_name.eq(page_index-1).css("top",window_h+"px");
				page_name.eq(prev_index-1).animate({
					top : - window_h+"px"
				},1000,"easeOutQuint");
				page_name.eq(page_index-1).animate({
					top : 0
				},1000,"easeOutQuint", index_reset);
			}else if((footer_use == true)&&(page_index==page_total)){
				footer_name.css("z-index",page_total+2);
				prev_index = page_index;
				page_index++;
				//console.log("footer다"+page_index);
				footer_name.css("top",window_h+"px");
				page_name.eq(prev_index-1).animate({
					top : - footer_use_h+"px"
				},1000,"easeOutQuint");
				footer_name.animate({
					top : window_h - footer_use_h+"px"
				},1000,"easeOutQuint", function(){index_reset});
			}
		}
		index_labeling();
	}
	
});



//-----------------------------opacity 캐러셀
$(document).ready(function(){
	//페이드배너를 감싸고 있는 오브젝트의 이름, 이 오브젝트의 넓이가 페이드배너의 넓이가 됨.
	var obj_wrap=$(".sec01");
	//페이드배너 전체를 묶어주는 요소
	var obj_name = $(".sec01 ul");
	//보여질 실제 페이드배너를 감싸고 있는 영역
	var obj_child = $(".sec01 ul li");
	var obj_child_acitve = "active";
	var obj_child_animate = "ani";

	//페이드배너 드래그 이동, 사용여부 (true, false)
	var touch_draging = true;//스마트폰 터치 인식

	//페이드배너 컨트롤버튼
	var ctrl_btn = true;//사용여부 (true, false)
	var ctrl_next = $(".sec01 .next");
	var ctrl_prev = $(".sec01 .prev");
	var ctrl_stop = $(".sec01 .stop");
	var ctrl_play = $(".sec01 .play");

	//현재페이드배너 번호 / 전체 페이드배너번호
	var numbering = true;//사용여부 (true, false)
	var curr_num = $(".sec01 .curr_num");
	var total_num = $(".sec01 .total_num");

	//페이드배너 리스트
	var paging = true;//사용여부 (true, false)
	var paging_obj = $(".sec01 .paging button");
	var paging_curr_class = "active";//현재 선택된 페이드배너를 표시할 class명
	var paging_index;

	//자동플레이 여부(true, false)
	var auto_play = true;
	var auto_time = 4000;
	var refreshInvervalId;
	var auto_status;

	//이 아래 변수는 수정 금지
	var obj_drag = false;
	var obj_index = 0;
	var next_index = obj_index+1;
	//페이드배너의 갯수 계산
	var obj_length = obj_child.length;
	//페이드배너의 넓이 계산
	var obj_width = obj_wrap.width();
	var startX = null;
	var prevX = null;
	var currX = null;
	var moveX = null;
	var afterX = null;
	var e = null;
	
	
	if(touch_draging == true){
		//모바일에서 터치를 인식
		obj_name.on("touchstart", function(a){
			obj_drag = true;
			e = a.originalEvent;
			currX = e.touches[0].pageX
			startX = e.touches[0].pageX;
			obj_name.on("touchmove", function(b){
				if(obj_drag ==  true){
					e = b.originalEvent;
					prevX = currX;
					currX = e.touches[0].pageX;
					moveX = prevX - currX;
					//drag_move(moveX);
				}
			});
			
		});
		$(document).on("touchend", function(){
			if((obj_drag == true) && (Math.abs(startX) != (Math.abs(currX)))){
				drag_end();
			}
			obj_drag = false;
			obj_name.off("touchmove");
		});
	}

	///drag 혹은 touch가 종료되었을때 실행하는 함수
	function drag_end(){
		//console.log(moveX);
		if(moveX > 0){
			next_index = obj_index+1;
		}else{
			next_index = obj_index-1;
		}

		if(next_index > obj_length-1){
			next_index = 0;
		}else if(next_index<0){
			next_index = obj_length-1;
		}
		popup_change(next_index);
		time_reset();
	}
	
	function popup_change(next_index){
		//console.log(obj_index+", "+next_index);
		if(obj_index != next_index){
			obj_child.eq(next_index).show();
			obj_child.eq(obj_index).fadeOut(500, function(){
				obj_child.eq(next_index).addClass(obj_child_acitve);
				obj_child.eq(obj_index).removeClass(obj_child_acitve);
				obj_child.eq(next_index).addClass(obj_child_animate);
				obj_child.eq(obj_index).removeClass(obj_child_animate);
				obj_index = next_index;
				index_change(obj_index);
			});
		}
		
	}//popup_change

	//index 변경 시 변경해야 할 것들 (paging, numbering)
	function index_change(index){
		if(numbering == true){
			curr_num.html(index+1);
		}
		if(paging == true){
			paging_obj.removeClass(paging_curr_class);
			paging_obj.eq(index).addClass(paging_curr_class);
		}
	}

	function auto_next(){
		if(obj_index >= obj_length -1){
			next_index = 0;
		}else{
			next_index = obj_index+1;
		}
		popup_change(next_index);
	}

	function time_reset(){
		if(auto_status == "play"){
			clearInterval(refreshInvervalId);
			refreshInvervalId = setInterval(auto_next, auto_time);
		}
	}

	if(ctrl_btn == true){
		ctrl_prev.on("click", function(){
			if(obj_index < 1){
				next_index = obj_length-1;
			}else{
				next_index = obj_index-1;
			}
			popup_change(next_index);
			time_reset();
		});
		ctrl_next.on("click", function(){
			auto_next();
			time_reset();
		});
		ctrl_stop.on("click", function(){
			auto_status = "stop";
			clearInterval(refreshInvervalId);
		});
		ctrl_play.on("click", function(){
			auto_status = "play";
			refreshInvervalId = setInterval(auto_next, auto_time);
		});
	}

	if(auto_play == true){
		//페이드배너의 수가 1개이하면 실행하지 않음
		if(obj_length > 1){
			obj_child.eq(obj_index).addClass(obj_child_acitve);
			refreshInvervalId = setInterval(auto_next, auto_time);
			auto_status = "play";
		}
	}else{
		obj_child.eq(obj_index).addClass(obj_child_acitve);
	}
	$(window).load(function(){ 
		obj_child.eq(obj_index).addClass(obj_child_animate);
	});

	//페이지번호를 사용할 경우
	if(numbering == true){
		curr_num.html(obj_index+1);
		total_num.html(obj_length);
	}

	//paging을 사용할 경우
	if(paging == true){
		paging_obj.removeClass(paging_curr_class);
		paging_obj.eq(obj_index).addClass(paging_curr_class);
		paging_obj.on("click", function(){
			paging_index = $(this).index();
			//console.log(paging_index);
			popup_change(paging_index);
			time_reset();
		});
	}

	//높이 재설정
	obj_wrap.height(obj_child.height());
	$(window).load(function(){
		obj_wrap.height(obj_child.height());
	});
	$(window).resize(function(){
		obj_wrap.height(obj_child.height());
	});
});


//nav
$(function () {
    $('.hamburger-button').on('click', function (event) {
        event.preventDefault();
        $(this).toggleClass('active');
        $('.overlay').toggleClass('visible');

    });
});

AOS.init();