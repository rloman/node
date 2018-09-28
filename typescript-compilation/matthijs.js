function greeter(person) {
    return "Hello, " + person;
}
function appender() {
    return "Append";
}
var user = "Jane User";
// document.body.innerHTML = greeter(user);
console.log(greeter(user) + appender);
var testerin = greeter;
testerin = testerin + appender;
console.log(testerin());
