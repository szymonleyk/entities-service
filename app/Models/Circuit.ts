import { BaseModel, column, BelongsTo, belongsTo } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

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

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime

  @belongsTo(() => Circuit, { foreignKey: 'parentId' })
  public parent: BelongsTo<typeof Circuit>
}
