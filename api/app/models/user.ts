import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'



export default class User extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string 

  @column()
  declare email: string

  @column()
  declare role: string

  @column()
  declare is_active: boolean

  @column.dateTime()
  declare createdAt: DateTime

  //base do Model
  //  {
  //   "id": 1,
  //   "name": "Bruno Nogueira",
  //   "email": "bnogueira1@widgets.org",
  //   "role": "manager",
  //   "is_active": true,
  //   "created_at": "2024-05-26T17:11:48Z"
  // },

}