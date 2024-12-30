const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

const users = [];
app.post('/register_user', (req, res) => {
    const { name, age, email, password, phone } = req.body;

    if (!name || !age || !email || !password || !phone) {
        return res.status(400).json({ message: "All fields are required" });
    }

    let user_id = users.length === 0 ? 1 : users[users.length - 1].id + 1;
    const new_user = { id: user_id, name, age, email, password, phone };
    users.push(new_user);

    console.log(new_user);
    res.status(201).json({ message: "User Registered..." });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        res.status(200).json({ message: "Login successful", user });
    } else {
        res.status(401).json({ message: "Invalid email or password" });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}...`);
});
