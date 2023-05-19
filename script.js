// your code here
		function submit(){
			console.log("click")
			let name = document.getElementById("name");
			let year = document.getElementById('year');
			if(name.value.length > 0 && year.value.length > 0){
				document.getElementById("url").innerText = `https://localhost:8080/?name=${name.value}&year=${year.value}`
			}else if(name.value.length > 0){
				document.getElementById("url").innerText = `https://localhost:8080/?name=${name.value}`	
			}else if(year.value.length > 0){
				document.getElementById("url").innerText = `https://localhost:8080/?year=${year.value}`	
			}else{
				document.getElementById("url").innerText = `https://localhost:8080/`
			}
			
		}