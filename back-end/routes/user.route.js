const router = require('express').Router();
let User = require('../db').User;

// const {validateBody, schemas} = require('../helpers/routeHelpers')

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

// router.route('/signup').post(validateBody(schemas.authSchema), 
//     (req, res, next) => {
//         console.log('.signup() called')
//     }
// )

// router.route('/login').post(async (req, res, next) => {
//     console.log('.login() called')

// })

// router.route('/secret').get(async (req, res, next) => {
//     console.log('.secret() called')

// })

// router.route('/add').post((req, res) => {
//     const newUser = new User({
//     username : req.body.username,
//     email : req.body.email,
//     firstName : req.body.firstName,
//     lastName : req.body.lastName,
//     profileImage : req.body.image
//     });
   

//     newUser.save()
//         .then(() => res.json('User added!'))
//         .catch(err => res.status(400).json('Error: ' + err));
// })

router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
    .populate({
        path:'posts',
        model:'Recipe',
        populate: {
            path:'author',
            model: 'User'
        }
    })
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id/posts').get((req, res) => {
    User.findById(req.params.id)
    .populate({
        path:'posts',
        model:'Recipe',
        populate: {
            path:'author',
            model: 'User'
        }
    })
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id/saved').get((req, res) => {
    User.findById(req.params.id)
    .populate({
        path:'likedPosts',
        model:'Recipe',
        populate: {
            path:'author',
            model: 'User'
        }
    })
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('User deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').put((req, res) => {
    update = req.body
    console.log(req.body)
    User.findOneAndUpdate({_id:req.params.id},update)

        .then(user => {
            

            user.save()
                .then(() => res.json('User updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;