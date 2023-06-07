import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'customers'

  public async up() {
    const customersData = [
      { name: 'John Doe', email: 'john.doe@gmail.com', vat: '123-456-789' },
      { name: 'Jane Smith', email: 'jane.smith@gmail.com', vat: '987-654-321' },
      { name: 'Michael Johnson', email: 'michael.johnson@gmail.com', vat: '456-789-123' },
      { name: 'Sarah Anderson', email: 'sarah.anderson@gmail.com', vat: '789-123-456' },
      { name: 'David Wilson', email: 'david.wilson@gmail.com', vat: '321-654-987' },
      { name: 'Emily Davis', email: 'emily.davis@gmail.com', vat: '654-987-321' },
      { name: 'Andrew Brown', email: 'andrew.brown@gmail.com', vat: '987-321-654' },
      { name: 'Olivia Taylor', email: 'olivia.taylor@gmail.com', vat: '741-852-963' },
      { name: 'James Miller', email: 'james.miller@gmail.com', vat: '852-963-741' },
      { name: 'Sophia Clark', email: 'sophia.clark@gmail.com', vat: '369-258-147' },
    ]

    await this.db.table(this.tableName).insert(customersData)
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
