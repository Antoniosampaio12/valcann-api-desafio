// app/Controllers/Http/UsersController.ts
import type { HttpContext } from '@adonisjs/core/http'
import UserService from './../Services/UserService.js'

export default class UsersController {
  private userService = new UserService()

  public async index({ request, response }: HttpContext) {
    const page = Number(request.input('page', 1))
    const pageSize = Math.min(Number(request.input('page_size', 10)), 50)

    const filters = {
      q: request.input('q'),
      role: request.input('role'),
      is_active: request.input('is_active'),
    }

    // aplica filtros
    let users = this.userService.listUsers(filters)

    // paginação simples em memória
    const total = users.length
    const start = (page - 1) * pageSize
    const end = start + pageSize
    const data = users.slice(start, end)

    return response.ok({
      data,
      pagination: {
        total,
        page,
        page_size: pageSize,
        total_pages: Math.ceil(total / pageSize),
      },
    })
  }

  public async show({ params, response }: HttpContext) {
    const user = this.userService.getUser(Number(params.id))

    if (!user) {
      return response.notFound({ error: 'User not found' })
    }

    return response.ok(user)
  }
}
