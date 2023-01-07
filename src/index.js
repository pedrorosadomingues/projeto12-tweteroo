import express from 'express';
import cors from 'cors';

const server = express();

server.use(express.json());
server.use(cors());

const users = [];
const tweets = [];

server.post('/sign-up', (req, res) => {
    const user = req.body;
    console.log(req.body);
    const id = users.length + 1;

    user.id = id;

    users.push(user);
    console.log(users);
    res.send('OK');
});

server.post('/tweets', (req, res) => {
    if (users.find(user => user.username === req.body.username) === undefined) {
        res.status(401).send('UNAUTHORIZED');
        return;
    }
    const tweet = req.body;
    console.log(req.body);
    const id = tweets.length + 1;

    tweet.id = id;

    tweets.push(tweet);
    console.log(tweets);
    res.send('OK');
});

server.get('/tweets', (req, res) => {
    
    res.send(tweets.splice(0, 10));
});

const PORT = 5000;

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));