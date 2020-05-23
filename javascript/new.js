function sayhello() {
	var name=document.getElementById("name").value;
	var message="<h2>Hello "+name+"!</h2>";
	document.querySelector("#content").innerHTML=message;
	document.querySelector("#info").innerHTML="";
	
}