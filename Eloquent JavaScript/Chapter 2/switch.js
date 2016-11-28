/**
 * Created by pollo_000 on 11/28/2016.
 */

var databaseClient = "mysql";
databaseClient = "sql server";
databaseClient = "Oracle";

switch (databaseClient.trim().toUpperCase()) {
    case "MYSQL":
        console.log("CHOSE " + databaseClient);
        break;
    case "SQL SERVER":
        console.log("CHOSE " + databaseClient);
        break;
    case "ORACLE":
        console.log("CHOSE " + databaseClient);
        break;
    default:
        console.log("CHOSE NOTING");
        break;//Not necessary
}
