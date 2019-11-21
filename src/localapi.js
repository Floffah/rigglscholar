let express = require('express'),
    app = express(),
    got = require('got'),
    cfg = require('../cfg/gh.json'),
    fs = require('fs'),
    events = require('./events');

app.get('/callback', (req, res) => {
    got.post('https://github.com/login/oauth/access_token', {
        body: `client_id=${cfg.clientid}&client_secret=${cfg.clientsecret}&code=${req.query.code}`
    }).then((response) => {
        var token = "";
        token += response.body.replace("access_token=", "").replace("&scope=user&token_type=bearer", "");
        got.get("https://api.github.com/user?access_token=" + token, {
        }).then((response) => {
            events.emit('login', response.body);
        });
    });
    res.send("<p>authorizing</p><script>window.close()</script>");
});

app.listen(61667);