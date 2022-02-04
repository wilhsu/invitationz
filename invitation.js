let a = "";
a = window.prompt("Enter your name:");
document.getElementById("name").innerHTML = a;

function randomlinks(){
	var myrandom=Math.round(Math.random()*2)
	var links=new Array()
	links[0]="https://docs.google.com/document/d/19TIYkHFn4CcI0odmcIelIVa1YrpVhGNeioJ8HMQDNLE/edit?usp=sharing"
	links[1]="https://docs.google.com/document/d/1aa340_RNU04udoaigxgPRI2DkVlNSonCa57dQnaSuBg/edit?usp=sharing"
	links[2]="https://docs.google.com/document/d/1TO9zhAaObEW7yc1uNrCLvMBame6iOalXilDDenPyF2E/edit?usp=sharing"

	window.location=links[myrandom]
}