const express = require('express');
const path = require('path');
const router = express.Router();

const app = express();

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/page.html'));
});

router.get('/mesh', function (req, res) {
    res.sendFile(path.join(__dirname + '/ilha.glb'));
});
app.use('/', router);
app.listen(process.env.port || 3333);