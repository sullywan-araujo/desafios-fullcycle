const express = require('express')
const mysql = require('mysql')
const app = express()
const port = 3000

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const connection = mysql.createConnection(config)

const initDB = () => {
    const tableQuery = `CREATE TABLE IF NOT EXISTS people (
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(255),
        PRIMARY KEY(id)
    )`

    connection.query(tableQuery, (err) => {
        if (err) {
            console.error('Erro ao criar tabela:', err);
            return;
        }
        console.log('Tabela pronta');

        connection.query('SELECT COUNT(*) as total FROM people', (err, results) => {
            if (!err && results[0].total === 0) {
                const setupNames = [['Sullywan'], ['Wesley'], ['Rodrigo']];
                connection.query('INSERT INTO people(name) VALUES ?', [setupNames]);
                console.log('Dados iniciais inseridos.');
            }
        });
    });
};

initDB();

app.get('/', (req, res) => {
    connection.query('SELECT name FROM people', (err, rows) => {
        if (err) {
            return res.status(500).send('Erro ao buscar dados.');
        }

        const listaItens = rows.map(r => `<li>${r.name}</li>`).join('')

        res.send(`
            <h1>FullCycle Rocks</h1>
            <h2>Pessoas cadastradas!</h2>
            <ul>
                ${listaItens}
            </ul>
        `)
    })
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})