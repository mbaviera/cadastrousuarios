const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: '123456',
    database: 'testedevelcode',
    port: '5432'
});

const getUsers = async (req, res) => {
    const response = await pool.query('SELECT * FROM users ORDER BY id ASC');
    res.status(200).json(response.rows);
};

const getUserById = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    res.json(response.rows);
};

const createUser = async (req, res) => {
    const { nome, nascimento, foto } = req.body;
    const response = await pool.query('INSERT INTO users ( nome, nascimento, foto) VALUES ($1, $2, $3)', [ nome, nascimento, foto]);
    res.json({
        message: 'Adicionado com sucesso',
        body: {
            user: { nome, nascimento, foto } 
        }
    })
};

const updateUser = async (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, nascimento, foto } = req.body;

    const response = await pool.query('UPDATE users SET nome = $1, nascimento = $2, foto = $3 WHERE id = $4', [        
        nome, 
        nascimento, 
        foto,
        id
    ]);
    res.json('User Updated Successfully');
};

const deleteUser = async (req, res) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM users where id = $1', [
        id
    ]);
    res.json(`User ${id} deleted Successfully`);
};

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};