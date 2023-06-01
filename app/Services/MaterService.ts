import Mater from 'App/Models/Mater'

export default class MaterService {
  public static async create(data: Partial<Mater>) {
    return Mater.create(data)
  }

  public static async findAll() {
    return Mater.all()
  }

  public static async findById(id: number) {
    return Mater.findOrFail(id)
  }

  public static async update(id: number, data: Partial<Mater>) {
    const mater = await Mater.findOrFail(id)
    mater.merge(data)
    await mater.save()
    return mater
  }

  public static async delete(id: number) {
    const mater = await Mater.findOrFail(id)
    await mater.delete()
  }
}
