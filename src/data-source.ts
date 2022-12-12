import { DataSource } from "typeorm"
import path from "path"
import "dotenv/config"
import "reflect-metadata"

const AppDataSource = new DataSource(
    process.env.NODE_ENV === "test" ?
    {
        type: "sqlite",
        database: ":memory:",
        synchronize: true,
        entities: ["src/entities/*.ts"]
    } :
    {   //tipo de DB que vai usar 
        type: "postgres",
        host: process.env.PGHOST,
        port: parseInt(process.env.PGPORT!),
        username: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        database: process.env.PGDATABASE,
        //CONFIGURAÇÃO DE  CONEXÃO ^
        synchronize: false, //type ORM true faz conversão automatica com DB , com migrations fica falso, para nao sincronizar sempre  
        logging: true,//mostra os comadnos do DB que 

        entities: [path.join(__dirname, "./entities/**.{js,ts}")],
        //cominho dos diretorios 
        migrations: [path.join(__dirname, "./migrations/**.{js,ts}")]
        // //dirname trás o caminho  inteiro do diretorio independente da maguina que esteja rodando . 
    }
)

export default AppDataSource