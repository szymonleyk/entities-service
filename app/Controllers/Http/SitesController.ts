import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import SiteService from 'App/Services/SiteService'

export default class SitesController {
  public async index({response}: HttpContextContract) {
    const sites = await SiteService.findAll()
    return response.ok(sites)
  }

  public async store({request, response}: HttpContextContract) {
    const siteData = request.only(['name', 'coordinates', 'address', 'postCode', 'customerId'])
    const site = await SiteService.create(siteData)
    return response.created(site)
  }

  public async show({params, response}: HttpContextContract) {
    const site = await SiteService.findById(params.id)
    return response.ok(site)
  }

  public async update({params, request, response}: HttpContextContract) {
    const siteData = request.only(['name', 'coordinates', 'address', 'postCode', 'customerId'])
    const site = await SiteService.update(params.id, siteData)
    return response.ok(site)
  }

  public async destroy({params, response}: HttpContextContract) {
    await SiteService.delete(params.id)
    return response.noContent()
  }
}
