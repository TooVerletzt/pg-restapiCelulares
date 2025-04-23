const models = require('../database/models');

const createCelular = async (req, res) => {
  console.log('Creando celular...');
  try {
    const celular = await models.Celular.create(req.body);
    return res.status(201).json({ celular });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const deleteCelular = async (req, res) => {
  console.log('Eliminando celular...');
  try {
    const celular = await models.Celular.findOne({ where: { id: req.params.id } });
    if (celular) {
      await celular.destroy();
      return res.status(200).json({ deleted: req.params.id });
    } else {
      return res.status(404).json({ error: `El celular con ID ${req.params.id} no existe.` });
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const updateCelular = async (req, res) => {
  console.log('Actualizando celular...');
  try {
    const celular = await models.Celular.findOne({ where: { id: req.params.id } });
    if (celular) {
      // Actualiza campos (ajusta según tus columnas reales)
      celular.marca = req.body.marca;
      celular.modelo = req.body.modelo;
      celular.precio = req.body.precio;
      celular.stock = req.body.stock;
      celular.color = req.body.color;
      celular.descripcion = req.body.descripcion;
      await celular.save();

      return res.status(200).json({ updated: celular });
    } else {
      return res.status(404).json({ error: `El celular con ID ${req.params.id} no existe.` });
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const getAllCelulares = async (req, res) => {
  console.log('Obteniendo celulares...');
  try {
    const celulares = await models.Celular.findAll();
    return res.status(200).json({ celulares });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  createCelular,
  getAllCelulares,
  deleteCelular,
  updateCelular,
};
