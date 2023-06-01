import Customer from 'App/Models/Customer'

export default class CustomerService {
  public static async create(data: Partial<Customer>) {
    return Customer.create(data)
  }

  public static async findAll() {
    return Customer.all()
  }

  public static async findById(id: number) {
    return Customer.findOrFail(id)
  }

  public static async update(id: number, data: Partial<Customer>) {
    const customer = await Customer.findOrFail(id)
    customer.merge(data)
    await customer.save()
    return customer
  }

  public static async delete(id: number) {
    const customer = await Customer.findOrFail(id)
    await customer.delete()
  }
}
