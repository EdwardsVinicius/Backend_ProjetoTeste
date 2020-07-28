import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes';

class App{
    constructor(){
        this.server = express();

        mongoose.connect('mongodb+srv://ProjetoTesteAdmin:admin@cluster0.pep3a.gcp.mongodb.net/ProjetoTeste?retryWrites=true&w=majority;', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.server.use(cors());

        this.server.use(express.json());
    }

    routes(){
        this.server.use(routes);
    }

}

export default new App().server;