import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'sites'

  public async up() {
    const siteData = [
      {
        name: 'Site 1',
        coordinates: JSON.stringify({ latitude: 40.7128, longitude: -74.0060 }),
        address: '123 Main St',
        post_code: '10001',
        customer_id: 1,
      },
      {
        name: 'Site 2',
        coordinates: JSON.stringify({ latitude: 34.0522, longitude: -118.2437 }),
        address: '456 Elm St',
        post_code: '90001',
        customer_id: 2,
      },
    ]

    await this.db.table(this.tableName).insert(siteData)

  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
