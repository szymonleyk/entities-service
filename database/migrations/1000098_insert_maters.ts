import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'maters'

  public async up() {
    const meterData = [
      {
        name: 'Meter 1',
        serial_number: 'ABC123',
        installation_date: new Date(),
        site_id: 1,
      },
      {
        name: 'Meter 2',
        serial_number: 'DEF456',
        installation_date: new Date(),
        site_id: 2,
      },
      {
        name: 'Meter 3',
        serial_number: 'GHI789',
        installation_date: new Date(),
        site_id: 2,
      },
      {
        name: 'Meter 4',
        serial_number: 'JKL012',
        installation_date: new Date(),
        site_id: 1,
      },
      {
        name: 'Meter 5',
        serial_number: 'MNO345',
        installation_date: new Date(),
        site_id: 2,
      },
    ]

    await this.db.table(this.tableName).insert(meterData)
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
