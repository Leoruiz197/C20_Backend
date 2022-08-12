const paletasService = require('../services/paletas.service');

const findPaletasController = async (req, res) => {
  res.send(await paletasService.findPaletasService());
};

const findPaletaByIdController = async (req, res) => {
  const chosenPaleta = await paletasService.findPaletaByIdService(req.params.id);

  if (!chosenPaleta) {
    return res.status(404).send({ message: "Paleta não encontrada!" })
  }

  res.send(chosenPaleta);
};

const createPaletaController =  async (req, res) => {
  res.send(await paletasService.createPaletaService(req.body));
};
  
const updatePaletaController = async (req, res) => {
  res.send(await paletasService.updatePaletaService(req.params.id, req.body));
};

const deletePaletaController = async (req, res) => {
  const paleta = await paletasService.deletePaletaService(req.params.id);

  if(!paleta){
    return res.status(404).send({ message: "Paleta não encontrada" });
  }

  res.send({ message: `Paleta ${paleta.sabor} deletada com sucesso!` });
};
module.exports = {
  findPaletasController,
  findPaletaByIdController,
  createPaletaController,
  updatePaletaController,
  deletePaletaController
};