let display=document.getElementById('display');
//let's change button to array
let buttons=Array.from(document.getElementsByClassName("button"));
//each map in the array will have an event
buttons.map(button=>{
	button.addEventListener('click', (e)=>{
		/*console.log("clicked");
		console.log(e);
		console.log(e.target);*/
		switch(e.target.innerText){
			case 'C':
				display.innerText="";
				break;
			case '←':
				if(display.innerText)
					display.innerText=display.innerText.slice(0,-1);
				break;
					
			case '=':
				try{
					display.innerText=eval(display.innerText);
				}catch{
					display.innerText='Syntax Error';
				}
				
				break;
			default:
				display.innerText += e.target.innerText;
				
		}
			
	});
});
//let's add a little option to change background Color
function color(){
	let display=document.getElementById('display');

	let color=document.getElementById("color");
	let body=document.getElementById("body");
	body.style="background-color:"+color.value+";";
	//display.style="background-color:"+color.value;
}