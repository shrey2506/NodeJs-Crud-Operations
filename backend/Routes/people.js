const express = require('express')
const router=express.Router()

const {time,createPerson, getPeople, getPerson, deletePerson, updatePerson} =require('../Controllers/peopleControllers')

//validators
const {runValidation} =require('../Validators/')
const {userValidator} =require('../Validators/peopleValidator')


router.get('/',time)

router.post('/people',userValidator ,runValidation , createPerson)

router.get('/people', getPeople)

router.get('/people/:slug', getPerson)

router.delete('/remove/:slug', deletePerson)

router.put('/people/:slug', updatePerson)

module.exports = router