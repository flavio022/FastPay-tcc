function produtoController(){
};
produtoController.prototype.get = async(req,res)=>{
    res.status(200).send('Rota produtos funcionando');
};
produtoController.prototype.getById = async(req,res)=>{
    res.status(200).send(`Produto com o id ${req.params.id}`)
};
produtoController.prototype.post = async(req,res)=>{
    
};
produtoController.prototype.put = async(req,res)=>{

};
produtoController.prototype.delete = async(req,res)=>{

};

module.exports = produtoController;