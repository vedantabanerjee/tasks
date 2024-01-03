const express = require('express');
const jwt = require('jsonwebtoken');

const jwtPassword = 'secret';

const app = express();
app.use(express.json());

const allUsers = [{
    username: 'vedantabanerjee.hit@gmail.com',
    name: 'vedanta banerjee',
    password: '123456'
},{
    username: 'arijitbandhopadhay',
    name: 'arijit bandhopadhay',
    password: '654321'
},{
    username: 'admin',
    name: 'admin',
    password: 'admin'
}];

function userExists(username, password) {
    return allUsers.some(user => user.username === username && user.password === password);
}

app.post('/signin', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (userExists(username, password)) {
        const token = jwt.sign({ username }, jwtPassword, { expiresIn: '1h' });
        res.send({ token });
    } else {
        res.status(401).send({ error: 'Invalid username/password' });
    }
});

app.listen(3000, () => console.log('Server started on port 3000'));