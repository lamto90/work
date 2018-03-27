window.onload = function(){
		
       var first = document.getElementById('first') 
       var lis = first.getElementsByTagName('li')
       var next = document.getElementById('next')
       var prev = document.getElementById('prev')
       var html = document.documentElement
       var fengche = document.getElementById('fengche')
       var num = 0
   	   var point = 0
       var timer
       var timer1
<<<<<<< HEAD
	   
	   window.onbeforeunload = function(){
          //刷新后页面自动回到顶部
        html.scrollTop = 0;  //ie下
        document.body.scrollTop = 0;  //非ie
 		}
   	   lis[0].style.backgroundColor = 'green'
=======
       
     
       	lis[num].style.backgroundColor = 'green'

>>>>>>> 5a11278fe52ac9065bde535215e187f26574e60d
       for (var i = 0; i < lis.length; i++) {
       		lis[i].index = i
       		lis[i].onclick = function  () { 
       			clearInterval(timer)
       			clearInterval(timer1)
	     		num = this.index
	     		for (var i = 0; i < lis.length; i++) {
       				lis[i].style.backgroundColor = ''
       			}
	     		lis[num].style.backgroundColor = 'green'
				timer = setInterval(function  () {
 				if (html.scrollTop < document.body.clientHeight*num) {
 						html.scrollTop += 20
 					if (html.scrollTop >= document.body.clientHeight*num) {
 						html.scrollTop = document.body.clientHeight*num
 					}
 				} else if(html.scrollTop > document.body.clientHeight*num){
 						html.scrollTop -= 20
 					if (html.scrollTop <= document.body.clientHeight*num) {
 						html.scrollTop = document.body.clientHeight*num
 					}
 				}
 				},1000/60)
				this.style.backgroundColor = 'green'
				point = num
				return false
				
			}
   		}
       
   	   next.onclick = function  () {
   			clearInterval(timer)
   			clearInterval(timer1)
   			point++
   			if (point>3) {
   				point = 3
   			}
   			var flag = html.scrollTop
   			timer1 = setInterval(function  () {
   					html.scrollTop += 20
   				if (html.scrollTop > flag + document.body.clientHeight) {
   					html.scrollTop = flag + document.body.clientHeight
   				}
   			},1000/60)
   			for (var i = 0; i < lis.length; i++) {
   				lis[i].style.backgroundColor = ''
   			}
   			lis[point].style.backgroundColor = 'green'
   		
   		}	
   		
   	   prev.onclick = function  () {
   			clearInterval(timer)
   			clearInterval(timer1)
   			point--
   			if (point<0) {
   				point = 0
   			}
   			var flag = html.scrollTop
   			timer1 = setInterval(function  () {
				html.scrollTop -= 20
				if (html.scrollTop < flag - document.body.clientHeight) {
					html.scrollTop = flag - document.body.clientHeight
				}
   			},1000/60)
   			for (var i = 0; i < lis.length; i++) {
   				lis[i].style.backgroundColor = ''
   			}
   			lis[point].style.backgroundColor = 'green'
   		}	
		
		setTimeout(function  () {
			fengche.style.transform = 'rotate(432000deg)'
		},2000)
}
