function solve (jsstring) {
let stingvhe = JSON.parse(jsstring)
let entries = Object.entries(stingvhe)
for (let [key, value] of entries)
console.log(`${key}: ${value}`);
}

solve ('{"name": "George", "age": 40, "town": "Sofia"}')