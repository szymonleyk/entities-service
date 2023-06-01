import { BaseModel, column, BelongsTo, belongsTo } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Mater from './Mater'

export default class Circuit extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column.dateTime()
  public installation_date: DateTime

  public is_main: boolean
  public parent_id: number

  // @belongsTo(() => Circuit, { foreignKey: 'parent_id' })
  // public parent: BelongsTo<typeof Circuit>

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime

  @belongsTo(() => Mater)
  public mater: BelongsTo<typeof Mater>
}
