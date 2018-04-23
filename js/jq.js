$(function  () {
	var $lis = $('#first>ul>li')
	var point = Math.floor($(document).scrollTop()/$(document.body).height())
	var left = ($('body').width()-$('#prev').width())/2
	var top = 0 
	$lis.eq(point).css('background','green')
	
	$lis.each(function  (index,item) {
		$(this).click(function  (event) {
			$lis.css('background','')
		    $(this).css('background','green')
		    point = index
		move($(document.body).height(),index)
		event.preventDefault()
		})
	})
	
	function move (target,flag) {
		clearInterval(intervalId)
		var current = $(document).scrollTop()
		var targetTotal = target*flag
		//每次scrolltop移动的距离为speed
		var speed= 15
		if (current > targetTotal) {
			speed = -speed
		}
		var intervalId = setInterval(function  () {
			current += speed
			if ((current >= targetTotal && speed > 0) || (current <= targetTotal  && speed <0) ) {
				current = targetTotal
			}
			if (current === targetTotal) {
			clearInterval(intervalId)
			}
			$(document).scrollTop(current)
		},1000/60)
	}
	
	$('#prev').click(function  () {
		point--
		if (point < 0 ) {
			point = 0
		}
		$lis.css('background','')
		$lis.eq(point).css('background','green')
		move($(document).scrollTop()-$(document.body).height(),1)
	})
	$('#next').click(function  () {
		point++
		if (point > 3 ) {
			point = 3
		}
		$lis.css('background','')
		$lis.eq(point).css('background','green')
		move($(document).scrollTop()+$(document.body).height(),1)
	})
	
	$('#prev').css('left',left)
	$('#next').css('left',left)
	
	setInterval(function  () {
		top--
		if (top<=-600) {
			top = 0
		}
		$('#first .inner').css('top',top)
	},1000/60)
	
	
	skill()
	function skill () {
		var $divS = $('#second .skill>div')
		$divS.each(function  (index,item) {
			$(this).css('animation','box .5s '+(index*300)+'ms infinite alternate linear')
		})
	}
	

	
})
