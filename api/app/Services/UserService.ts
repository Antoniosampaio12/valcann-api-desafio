import UserRepository from '../Repositories/UserRepository.js'

export default class UserService {
  private userRepository = new UserRepository()

  public listUsers(filters: any) {
    let users = this.userRepository.getAll()

    if (filters.q) {
      users = users.filter(
        (u) =>
          u.name.toLowerCase().includes(filters.q.toLowerCase()) ||
          u.email.toLowerCase().includes(filters.q.toLowerCase())
      )
    }

    if (filters.role) {
      users = users.filter((u) => u.role === filters.role)
    }

    if (filters.is_active !== undefined) {
      users = users.filter((u) => u.is_active === (filters.is_active === 'true'))
    }

    return users
  }

  public getUser(id: number) {
    return this.userRepository.getById(id)
  }
}
