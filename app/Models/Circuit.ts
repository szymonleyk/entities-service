import { BaseModel, column, BelongsTo, belongsTo } from '@ioc:Adonis/Lucid/Orm'

export default class Circuit extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  public name: string
  public installation_date: Date
  public is_main: boolean
  public parent_id: number

  @belongsTo(() => Circuit, { foreignKey: 'parent_id' })
  public parent: BelongsTo<typeof Circuit>

}
