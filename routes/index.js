const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.send('Welcome to Celulares'));

router.post('/celulares', controllers.createCelular);
router.get('/celulares', controllers.getAllCelulares);
router.put('/celulares/:id', controllers.updateCelular);
router.delete('/celulares/:id', controllers.deleteCelular);

module.exports = router;

