window.onload = function(){
       var first = document.getElementById('first') 
       var lis = first.getElementsByTagName('li')
       var next = document.getElementById('next')
       var prev = document.getElementById('prev')
       var html = document.documentElement
       var fengche = document.getElementById('fengche')
       var num = 0
       var timer
       var timer1
       
     
       	

       for (var i = 0; i < lis.length; i++) {
       		lis[i].index = i
       		lis[i].style.backgroundColor =''
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
				return false
			}
   		}
       
   	   next.onclick = function  () {
   			clearInterval(timer)
   			clearInterval(timer1)
   			var flag = html.scrollTop
   			timer1 = setInterval(function  () {
   					html.scrollTop += 20
   				if (html.scrollTop > flag + document.body.clientHeight) {
   					html.scrollTop = flag + document.body.clientHeight
   				}
   			},1000/60)
   		}	
   		
   	   prev.onclick = function  () {
   			clearInterval(timer)
   			clearInterval(timer1)
   			var flag = html.scrollTop
   			timer1 = setInterval(function  () {
				html.scrollTop -= 20
				if (html.scrollTop < flag - document.body.clientHeight) {
					html.scrollTop = flag - document.body.clientHeight
				}
   			},1000/60)
   		}	
		
		setTimeout(function  () {
			fengche.style.transform = 'rotate(432000deg)'
		},2000)
}