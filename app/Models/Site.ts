import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Mater from 'App/Models/Mater'
import { DateTime } from 'luxon'
import Customer from './Customer'

export default class Site extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public coordinates: string

  @column()
  public address: string

  @column()
  public post_code: string

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime

  @belongsTo(() => Customer)
  public customer: BelongsTo<typeof Customer>
  
  @hasMany(() => Mater)
  public maters: HasMany<typeof Mater>

}
