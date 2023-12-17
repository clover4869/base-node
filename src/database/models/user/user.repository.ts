import { PostgresDataSource } from './../../data-source';
import { User } from './user.entity';

const findAll = async () => {
  const users = await PostgresDataSource.getRepository(User).find();

  return users;
};

export { findAll };
