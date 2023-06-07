import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'circuits'

  public async up() {
    const circuitData = [
      {
        name: 'Circuit 1',
        installation_date: new Date(),
        is_main: true,
        parent_id: null,
        mater_id: 1,
      },
      {
        name: 'Circuit 2',
        installation_date: new Date(),
        is_main: false,
        parent_id: null,
        mater_id: 2,
      },
      {
        name: 'Circuit 3',
        installation_date: new Date(),
        is_main: false,
        parent_id: null,
        mater_id: 3,
      },
      {
        name: 'Circuit 4',
        installation_date: new Date(),
        is_main: false,
        parent_id: null,
        mater_id: 4,
      },
      {
        name: 'Circuit 5',
        installation_date: new Date(),
        is_main: false,
        parent_id: null,
        mater_id: 5,
      },
    ];
    
    await this.db.table(this.tableName).insert(circuitData);

    const circuit = {
      name: 'Circuit 6',
      installation_date: new Date(),
      is_main: false,
      parent_id: 4,
      mater_id: 5,
    };
    
    await this.db.table(this.tableName).insert(circuit)
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
