const mongoose = require('mongoose');



class baseRepository{
    constructor(model){
        this._model = mongoose.model(model);
    }
    async create(data){
        let modelo = new this._model(data);
        let resultado = await modelo.save();
        return resultado;
    }
    async getAll(){
        return await this._model.find();
    }
    async getById(id){
        return await this._model.findById(id);
    }
    async update(id,data){
        await this._model.findByIdAndUpdate(id, { $set: data });
        let resultado = await this._model.findById(id);
        return  resultado;

    }
    async delete(id){
        return await this._model.findByIdAndRemove(id);
        
    }
}

module.exports = baseRepository;
