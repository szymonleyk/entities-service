import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Site from 'App/Models/Site'

export default class Customer extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  public name: string
  public email: string
  public vat: string
  
  @hasMany(() => Site)
  public sites: HasMany<typeof Site>

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime
}
