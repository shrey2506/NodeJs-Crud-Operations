const {check}=require('express-validator');

exports.userValidator=[
    check('blogId').not()
    .isEmpty()
    .withMessage('BlogId is Required')
    .isLength({max: 3})
    .withMessage('BlogId should not be more than 3 characters long'),
    

    check('blogTitle').not()
    .isEmpty()
    .withMessage('Name is Required')
    .isLength({max: 10})
    .withMessage('Name should not be more than 10 characters long'),

    check('Date').not()
    .isEmpty()
    .withMessage('Date is Required'),
    

    check('content').not()
    .isEmpty()
    .withMessage('Content is Required')
    .isLength({min: 10})
    .withMessage('Content should be more than 10 characters long')
   

]