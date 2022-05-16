const router = require('express').Router();
const { json } = require('express/lib/response');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({
    attributes:['id','category_name'],
    include:[
      {
        model: Product,
        attributes:['id','product_name','price','stock','category_id']
      }
    ]
  })
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err=>{
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  
});

//router.post('/', (req, res) => {
  // create a new category
//});

//router.put('/:id', (req, res) => {
  // update a category by its `id` value
//});

////router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
//});

module.exports = router;
