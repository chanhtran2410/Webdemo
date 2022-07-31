/*$(document).ready(function() {
		$(document).delegate('.open', 'click', function(event){
			$(this).addClass('oppenned');
			$(this).removeClass('open');
			event.stopPropagation();
		})
		$(document).delegate('.oppenned', 'click', function(event){
			$(this).addClass('open');
			$(this).removeClass('oppenned');
			event.stopPropagation();
		})
		$(document).delegate('body', 'click', function(event) {
			$('.oppenned').addClass('open')
			$('.oppenned').removeClass('oppenned');
		})
		$(document).delegate('.cls', 'click', function(event){
			$('.oppenned').addClass('open')
			$('.oppenned').removeClass('oppenned');
			event.stopPropagation();
		});
	});
 */

const toggle =document.querySelector(".open");

toggle.addEventListener("click", function(){
	if(toggle.classList.contains("oppenned")){
		toggle.classList.remove("oppenned");
		toggle.classList.add("open")
	}else{
		toggle.classList.remove("open");
		toggle.classList.add("oppenned")
	}
})