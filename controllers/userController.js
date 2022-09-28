const connection = require("../db/mysql");

// db settings

const table = "users";

function getUsers(req, res) {
    const sql = `SELECT * FROM ${table}`;
    var users = [];

    connection.query(sql, (err, results, fields) => {
        for (let i = 0; results.length > i; i++) {
            users.push({
                id: results[i].id,
                email: results[i].email,
                password: results[i].password,
            });
            console.log(users);
        }

        res.send(users);
    });
}

function addUsers(req, res) {
    let { email, password } = req.body;

    let sql = `INSERT INTO ${table} SET ?`;
    var obj = { email, password };

    connection.query(sql, obj, (err, results, fields) => {
        if (err) throw err;
        else {
            res.send("Usuário cadastrado.");
        }
    });
}

function getDataFromId(req, res) {
    var user = [];
    const { id } = req.params;
    const sql = `SELECT * FROM ${table} WHERE ID=${id}`;

    connection.query(sql, (err, results, fields) => {
        for (let i = 0; results.length > i; i++) {
            user.push({
                id: results[i].id,
                email: results[i].email,
                password: results[i].password,
            });
            console.log(user);
        }

        res.send(user);
    });
}

function deleteUser(req, res) {
    const { id } = req.params;

    const sql = `DELETE FROM ${table} WHERE ID=${id}`;

    connection.query(sql, (err, results, field) => {
        if (err) throw err;
        else {
            res.send("Deletado com sucesso.");
        }
    });
}

function updateUser(req, res) {
    const { id } = req.params;
    let { email, password } = req.body;

    var obj = { email, password };

    const sql = `UPDATE ${table} SET ? WHERE ID=${id}`;

    connection.query(sql, obj, (err, results, field) => {
        if (err) throw err;
        else {
            res.send("Atualizado com sucesso.");
        }
    });
}

module.exports = { getUsers, addUsers, getDataFromId, deleteUser, updateUser };
