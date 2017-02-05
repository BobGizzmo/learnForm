$(document).ready(function(){
	var dieu = ["Zeus", "Aphrodite", "Apollon", "Poséidon", "Hestia", "Arès", "Artémis", "Héra", "Athéna", "Héphaïstos", "Hermès", "Hadès"];
	dieu.sort(function() { return 0.5 - Math.random() });

	$("#age").on("input", function(){
		if(!isNaN($("#age").val()) && $("#age").val() != null){
			$("#erreurSaisie").css("display", "none");
			$(".questions3.2").show(2000);
		}else{
			$("#erreurSaisie").css("display", "block");
		}	
	});
	for(i = 1; i <= 30; i++){
		if(i <= 2){
			$("#"+i).click(function(){
				$(".questions3.1").show(2000);
			});
		}else if(i <= 6){
			$("#"+i).click(function(){
				$(".questions3.3").show(2000);
			});
		}else if(i <= 10){
			$("#"+i).click(function(){
				$("#divButton").css("display", "block");
			});
		}else if(i <= 14){
			$("#"+i).click(function(){
				$(".questions3.5").show(2000);
			});
		}else if(i <= 18){
			$("#"+i).click(function(){
				$(".questions3.6").show(2000);
			});
		}else if(i <= 22){
			$("#"+i).click(function(){
				$(".questions3.7").show(2000);
			});
		}else if(i <= 26){
			$("#"+i).click(function(){
				$(".questions3.8").show(2000);
			});
		}else if(i <= 30){
			$("#"+i).click(function(){
				alert("Felicitations, tu es le dieu "+dieu[0]+" !");
			});
		}						
	}
	$("#next").click(function(){
		$(".questions").css("display", "none");
		$(".questions2").css("display", "none");
		$(".questions2.4").show(2000);
		$("#next").css("display", "none");
	});
});