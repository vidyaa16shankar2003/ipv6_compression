var input=prompt("Ipv6 address: ");
var formatcheck=[];

for (var i = 4; i < input.length; i += 5) {
    formatcheck.push(input[i]);
}

console.log(formatcheck);