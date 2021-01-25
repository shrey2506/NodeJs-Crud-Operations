const {check}=require('express-validator');

exports.userValidator=[
    check('userId').not()
    .isEmpty()
    .withMessage('UserId is Required')
    .isLength({max: 3})
    .withMessage('UserId should not be more than 3 characters long'),
    

    check('personName').not()
    .isEmpty()
    .withMessage('Name is Required')
    .isLength({max: 10})
    .withMessage('Name should not be more than 10 characters long')
   

]