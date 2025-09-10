import users from '../../mock/mock-users.json' with { type: 'json' }

export default class UserRepository {
  public getAll() {
    return users
  }

  public getById(id: number) {
    return users.find((u) => u.id === id)
  }
}
