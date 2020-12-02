const User = require('./order');

class OderController{
    async index(req, res){
        const names = await User.find();
        res.json(names);
    }

    async store(req, res) {
        const { name, idade } = req.body;

        if(!name || !idade) {
            return res.send({ error: "Digite algo" });
        }

        const user = await User.create({
            name, idade,
        });

        req.io.emit('newUser', user);
        res.json(user);
    }
}

module.exports = new OderController();