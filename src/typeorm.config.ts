import { User } from './users/user.entity';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';


export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'saiashish',
  password: 'saiashish',
  database: 'nestjs',
  entities: [User],
  synchronize: true,
};
