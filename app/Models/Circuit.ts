import { BaseModel, column, BelongsTo, belongsTo } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Mater from './Mater'

export default class Circuit extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column.dateTime()
  public installationDate: DateTime

  @column()
  public isMain: boolean

  @column()
  public parentId: number

  @column()
  public materId: number

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime

  @belongsTo(() => Circuit, { foreignKey: 'parent_id' })
  public parent: BelongsTo<typeof Circuit>

  @belongsTo(() => Mater, { foreignKey: 'mater_id' })
  public mater: BelongsTo<typeof Mater>
}
