import * as UserRepository from './../../../database/models/user/user.repository';

const findAll = async () => {
  const users = await UserRepository.findAll();
  return users;
};

export { findAll };
