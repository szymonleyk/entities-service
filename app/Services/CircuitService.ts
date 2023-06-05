import Circuit from 'App/Models/Circuit'

export default class CircuitService {
  public static async create(data: Partial<Circuit>) {
    return Circuit.create(data)
  }

  public static async findAll() {
    return Circuit.all()
  }

  public static async findById(id: number) {
    return Circuit.findOrFail(id)
  }

  public static async update(id: number, data: Partial<Circuit>) {
    const circuit = await Circuit.findOrFail(id)
    circuit.merge(data)
    await circuit.save()
    return circuit
  }

  public static async delete(id: number) {
    const circuit = await Circuit.findOrFail(id)
    await circuit.delete()
  }
}
