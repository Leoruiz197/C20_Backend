const paletasService = require('../services/paletas.service');

const findPaletasController = (req, res) => {
  res.send(paletasService.findPaletasService());
};

const findPaletaByIdController = (req, res) => {
  res.send(paletasService.findPaletaByIdService(req.params.id));
};

const createPaletaController = (req, res) => {
  res.send(paletasService.createPaletaService(req.body));
};
  
const updatePaletaController = (req, res) => {
  res.send(paletasService.updatePaletaService(+req.params.id, req.body));
};

const deletePaletaController = (req, res) => {
  paletasService.deletePaletaService(+req.params.id);
  res.send({ message: 'Paleta deletada com sucesso!' });
};
module.exports = {
  findPaletasController,
  findPaletaByIdController,
  createPaletaController,
  updatePaletaController,
  deletePaletaController
};