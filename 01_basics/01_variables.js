const accountId = 74747
let accountEmail = "dd@dd.com"
var accountPassword = "12345"
accountCity = "Chennai" // not advised to use the variable in this way...
let accountState;

// accountId = 2 // this is not allowed


accountEmail = "hc@hc.com"
accountPassword = "212121"
accountCity = "Mumbai"


console.log(accountId)

/*
Prefer not to use VAR becoz of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


