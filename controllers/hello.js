function getHello(req, res) {
    res.status(200).send({
        msg: "Todo va de lokos"
    });
};


module.exports = {
    getHello,
};