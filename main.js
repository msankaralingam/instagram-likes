					var btn1=document.getElementsByClassName("ma")[0];
					var btn2=document.getElementsByClassName("jo")[0];
					var count=document.getElementsByTagName("p")[0];



					btn1.addEventListener("click",function()
					{
						
						this.parentNode.getElementsByClassName("jo")[0].classList.toggle("hide");
						this.parentNode.getElementsByClassName("ma")[0].classList.toggle("hide");
						var likes=count.innerText;
						var numLike=parseInt(likes);
						numLike+=1;
						document.getElementsByTagName("p")[0].innerHTML=numLike+" Likes";
					});
						btn2.addEventListener("click",function()
						{
						this.parentNode.getElementsByClassName("ma")[0].classList.toggle("hide");
						this.parentNode.getElementsByClassName("jo")[0].classList.toggle("hide");
						var likes=count.innerText;
						var numLike=parseInt(likes);
						numLike-=1;
						document.getElementsByTagName("p")[0].innerHTML=numLike+" Likes";
						});	 
	 