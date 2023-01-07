import express from 'express';
import cors from 'cors';

const server = express();

server.use(express.json());
server.use(cors());

const users = [];

server.post('/sign-up', (req, res) => {
    const user = req.body;
    console.log(req.body);
    const id = users.length + 1;

    user.id = id;

    users.push(user);
    console.log(users);
    res.send('OK');
});

const PORT = 5000;

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));