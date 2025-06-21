import mongoose from 'mongoose';

async function conectaNaDatabase(params) {
    mongoose.connect("mongodb+srv://admin:admin123@dbalura.attgsd0.mongodb.net/livraria?retryWrites=true&w=majority&appName=DBAlura");
    return mongoose.connection;
};

export default conectaNaDatabase;




