import { Sequelize, Dialect, Model } from 'sequelize';
import CONFIG from './configs/db';


const sequelize = new Sequelize(CONFIG.MYSQL_DATABASE!, CONFIG.MYSQL_USER!, CONFIG.MYSQL_PASSWORD!, {
  host: CONFIG.HOST!,
  dialect: CONFIG.dialect! as Dialect,

  define: {
    freezeTableName: true
  },

  pool: {
    max: CONFIG.pool.max,
    min: CONFIG.pool.min,
    acquire: CONFIG.pool.acquire,
    idle: CONFIG.pool.idle
  }
});

export class BaseModel extends Model{

    static json(result: any){
        if (result === null) return
        if (Array.isArray(result)){
            return result.map(obj => obj.get({plain: true}))
        }
        return result.get({plain: true})
    }

}

export default sequelize