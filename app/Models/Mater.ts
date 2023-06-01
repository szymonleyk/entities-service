import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Circuit from 'App/Models/Circuit'
import { DateTime } from 'luxon'

export default class Mater extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  public name: string
  public serial_number: string
  public installation_date: DateTime

  @hasMany(() => Circuit)
  public circuits: HasMany<typeof Circuit>

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime
}
