interface IUserService {
  users: number;
  getUsersInDatabase(): number;
}

@CreatedAt
class UserService implements IUserService {
  users: number = 1000;
  getUsersInDatabase(): number {
    return this.users;
  }
}

function CreatedAt<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    createdAt = new Date();
  };
}

// if we have call createdAt

type CreatedAt = {
  createdAt: Date;
};

console.log((new UserService() as IUserService & CreatedAt).createdAt);
