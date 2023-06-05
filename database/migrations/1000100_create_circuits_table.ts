import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'circuits'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name').notNullable()
      table.dateTime('installation_date').notNullable()
      table.boolean('is_main').defaultTo(false)
      table.integer('parent_id').unsigned().references('id').inTable(this.tableName).onDelete('CASCADE')
      table.integer('mater_id').unsigned().references('id').inTable('maters').onDelete('CASCADE')
      table.timestamps(true, true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
