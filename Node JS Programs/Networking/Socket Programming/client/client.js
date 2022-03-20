let net = require("net");
let readline = require("readline");
let obj = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

let client = net.createConnection(3000,"localhost",()=> {
  
    // This message display on client machine console. 
    console.log(" I am client");
    // this code is use to send the data to server node. 
    client.write("Hello Server, I am client...");
})
// This code is use to receive the message from server node.
client.on("data",(msg)=> {
    console.log(msg.toString())
})
// This code execute again and again whenever we hit enter key. 
// And send data to server 
obj.on("line",(input)=> {
    client.write(`From client : ${input}`);
})