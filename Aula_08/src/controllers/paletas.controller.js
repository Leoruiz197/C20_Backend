const { options } = require('../routes/paletas.route');
const paletasService = require('../services/paletas.service');

const findPaletasController = async (req, res) => {
  res.send(await paletasService.findPaletasService());
};

const findPaletaByIdController = async (req, res) => {

  if (!req.params.id) {
    return res.status(400).send({ message: "ID não informado!" })
  }

  const chosenPaleta = await paletasService.findPaletaByIdService(req.params.id);

  if (!chosenPaleta) {
    return res.status(404).send({ message: "Paleta não encontrada!" })
  }

  res.send(chosenPaleta);
};

const createPaletaController =  async (req, res) => {
  if (
    !req.body ||
    !req.body.sabor ||
    !req.body.descricao ||
    !req.body.foto ||
    !req.body.preco
  ) {
    return res.status(400).send({ mensagem: "Você não preencheu todos os dados para adicionar uma nova paleta ao cardápio!" });
  }
  res.send(await paletasService.createPaletaService(req.body));
};
  
const updatePaletaController = async (req, res) => {
  if (!req.params.id) {
    return res.status(404).send({ message: "Paleta não encontrada!" })
  }

  if (!req.body || !req.body.sabor || !req.body.descricao || !req.body.foto || !req.body.preco) {
    return res.status(400).send({ message: "Você não preencheu todos os dados para editar a paleta!" });
  }

  res.send(await paletasService.updatePaletaService(req.params.id, req.body));
};

const deletePaletaController = async (req, res) => {
  if (!req.params.id) {
    return res.status(400).send({ message: "Id invalido, tente novamente!" });
  }
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