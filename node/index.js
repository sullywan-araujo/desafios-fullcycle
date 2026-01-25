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

app.get('/', (req, res) => {
    const nomes = [['Sullywan'], ['Wesley'], ['Rodrigo']];
    const sql = `INSERT INTO people(name) values ?`

    // SEMPRE verifique o erro no primeiro parâmetro do callback
    connection.query(sql, [nomes], (error, results) => {
        if (error) {
            console.error('Erro ao inserir:', error.message)
            return res.status(500).send('Erro no banco: ' + error.message)
        }

        // Se chegou aqui, o 'results' GARANTIDAMENTE tem o insertId
        console.log('ID Inserido:', results.insertId)

        // Vamos listar quem está no banco para você ver o resultado
        connection.query('SELECT  DISTINCT name FROM people', (err, rows) => {
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
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})