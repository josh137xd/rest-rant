const router = require('express').Router()

// More code here in a moment
router.get('/new', (req, res) => {
    res.render('places/new')
  })
  router.post('/', (req, res) => {
   console.log (req, res)
    res.send('POST /places')
  });
router.get('/', (req, res) => {
    let places = [{
     name: 'high-end',
     city: 'Seattle',
     state: 'WA',
     cuisines: 'argetinan, american',
     pic: '/images/steak-house.jpg'
    }, 
     {
        name: 'eifel Cafe',
     city: 'Phoenix',
     state: 'AZ',
     cuisines: 'Coffee, french bakery',
     pic: '/images/french-caffe.jpg'
     }]

 res.render('places/index', { places })
})

module.exports = router
