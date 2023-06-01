import Site from 'App/Models/Site'

export default class SiteService {
  public static async create(data: Partial<Site>) {
    return Site.create(data)
  }

  public static async findAll() {
    return Site.all()
  }

  public static async findById(id: number) {
    return Site.findOrFail(id)
  }

  public static async update(id: number, data: Partial<Site>) {
    const site = await Site.findOrFail(id)
    site.merge(data)
    await site.save()
    return site
  }

  public static async delete(id: number) {
    const site = await Site.findOrFail(id)
    await site.delete()
  }
}
