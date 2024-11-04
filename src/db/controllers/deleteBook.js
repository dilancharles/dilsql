const Book = require("../../models/bookmodel");

async function deletebook(req,res) {

try {
await Book.destroy({where:{title:req.body.title
}})
res.status(200).send(`Book ${req.body.title} as been dealte`)
}  catch (error) {
    console.log(error);
    res.status(500).json(error)
}

}


module.exports = deletebook;