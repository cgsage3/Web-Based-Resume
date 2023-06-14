const Book = require('./model.js')
const router = require('express').Router()

router.route('/new').post((req, res)=>{
    const newBook = new Book(req.body)

    newBook.save()
        .then(user => res.json(user))
        .catch(err => res.status(400).json("Error! " + err))
})
router.route('/').get()

router.route('/delete/:id').delete()

router.route('/update/:id').put()

module.exports = router