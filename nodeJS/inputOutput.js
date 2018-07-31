process.stdin.setEncoding("utf-8")

process.stdin.on('readable',()=>{
	
	let inp = process.stdin.read();		//It continuously go no taking value from the user there is no end
	console.log(typeof(inp));

	if(inp!==null)
	process.stdout.write(inp);
})
