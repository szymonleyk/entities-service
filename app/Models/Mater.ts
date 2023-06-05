import { BaseModel, belongsTo, BelongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Circuit from 'App/Models/Circuit'
import { DateTime } from 'luxon'
import Site from './Site'

export default class Mater extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string
  
  @column()
  public serialNumber: string
  
  @column()
  public installationDate: DateTime

  @column()
  public siteId: number

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime

  @belongsTo(() => Site, { foreignKey: 'siteId' })
  public site: BelongsTo<typeof Site>

  @hasMany(() => Circuit)
  public circuits: HasMany<typeof Circuit>
}
