const accountId = 144553
let accountEmail = "ankur@gmail.com"
var accountPassword = "123"
accountCity = "Delhi"

// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountEmail,accountId,accountPassword,accountCity]);
