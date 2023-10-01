const Invoice = require('../models/Invoice')

async function index(req, res) {
    try{
        const invoices = await Invoice.find()
        res.json(invoices)
    }catch (e){
        res.status(500).json({message: e.message})
    }
}

function create(req, res)  {
    res.send('CREATE')
}

function show(req, res)  {
    res.send(`GET BY ID - ${req.params.id}`)
}

function update(req, res)  {
    res.send(`UPDATE BY ID - ${req.params.id}`)
}

function destroy(req, res)  {
    res.send(`DELETE BY ID - ${req.params.id}`)
}

module.exports = {
    index,
    create,
    show,
    update,
    destroy
};
