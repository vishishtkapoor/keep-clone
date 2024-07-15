const express = require('express');
const app = express();
const cors = require ("cors");
const { createTodo, updateTodo } = require('./types.js');
const { todo } = require('./db.js');

app.use(express.json()); // Add this line to parse JSON request bodies
app.use(cors())

app.post('/todo', async function (req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            message: 'Invalid input',
            errors: parsedPayload.error.format(),
        })
        return;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: createPayload.completed,
    })

    res.json({
        msg: 'Todo created',
    });
});

app.get('/todos', async function (req, res) {
    const todos = await todo.find({});
    res.json({
        todos
    });
});

app.put('/completed', async function (req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);

    if (!parsedPayload.success) {
        res.status(400).json({
            message: 'Invalid input',
            errors: parsedPayload.error.format(),
        })
        return;
    }
    await todo.updateOne(
        {
            _id: req.body.id,
        },
        {
            completed: true
        })

    res.json({
        msg: 'Todo updated',
    })
})

app.listen(3000);