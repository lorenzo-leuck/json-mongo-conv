const fs = require('fs');
//let EJSON = require('mongodb-extjson')

let rawdata = fs.readFileSync('deputados.json');
let deputados = JSON.parse(rawdata);
let formatado = JSON.stringify(deputados);

var regex = /(?<=}),/g;
var subst = "\n";
// var subst = "$&\n"; mantem o elemento
var result = formatado.replace(regex, subst);


var regex2 = /}]}/g;
var subst2 = "}";
var result2 = result.replace(regex2, subst2);

var string3 = "{\"dados\":["
var subst3 = "";
var result3 = result2.replace(string3, subst3);

// var regex = /(?<=}),/g;
// var subst = "\n";
// var result = formatado.replace(regex, subst);

fs.writeFile('deputados-formatado.json', result3, (err) => {
    if (err) throw err;
    console.log('É os guri');
});