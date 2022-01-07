const sql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
    host: "localhost",
    user: "root",
    password: "cdac",
    database: "message"
};

async function checkConnection() {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    console.log("Connection Success");
    await connection.endAsync();
}

async function addMessage(user) {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    let sql = `insert into user(messsage) values (?)`;
    await connection.queryAsync(sql, [user.message]);
    await connection.endAsync();
    console.log("Record added");
}

async function getMessage() {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    let sql = `select * from user`;
    const list = await connection.queryAsync(sql, []);
    await connection.endAsync();
    console.log(list);
    return list;

}

module.exports = { addMessage, getMessage };