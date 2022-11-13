const router = require('express').Router();
const { getAdidas, getAdidasById,PostAdidas,PutAdidas,DeleteAdidas } = require('../controllers/adidas-control');


router.get('/',getAdidas);
router.post('/create',PostAdidas)
router.get('/byid/:id',getAdidasById)
router.put('/update/:id',PutAdidas)
router.delete('/delete/:id', DeleteAdidas)


module.exports = router;