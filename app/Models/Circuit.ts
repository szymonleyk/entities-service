import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Circuit extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public installationDate: Date

  @column()
  public isMain: boolean
}