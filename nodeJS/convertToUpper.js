//Convert input to uppercase and try for exiting the i/p


/*process.stdout.write("Enter the string\n");

process.stdin.setEncoding("utf-8")

process.stdin.on('readable',()=>{
	
	let inp = process.stdin.read();
	if(inp!==null){
	if(inp.trim())
		process.stdout.write(inp.toUpperCase());
		process.exit(0);
	}
})*/



process.stdout.write("Enter the string\n");

process.stdin.setEncoding("utf-8")

process.stdin.on('readable',()=>{
	
	let inp = process.stdin.read();
	if(inp!==null){
		process.exit(process.stdout.write(inp.toUpperCase()));
	}
})

for(let i=0;i<10;i++)		//Asynchronous programming In this program first it prints nums form 0-9 & then waits for user to enter input
	console.log(i);
