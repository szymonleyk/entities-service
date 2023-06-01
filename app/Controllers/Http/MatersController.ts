import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import MaterService from 'App/Services/MaterService'

export default class MatersController {
  public async index({response}: HttpContextContract) {
    const maters = await MaterService.findAll()
    return response.ok(maters)
  }

  public async store({request, response}: HttpContextContract) {
    const materData = request.only(['name', 'email', 'vat'])
    const mater = await MaterService.create(materData)
    return response.created(mater)
  }

  public async show({params, response}: HttpContextContract) {
    const mater = await MaterService.findById(params.id)
    return response.ok(mater)
  }

  public async update({params, request, response}: HttpContextContract) {
    const materData = request.only(['name', 'email', 'vat'])
    const mater = await MaterService.update(params.id, materData)
    return response.ok(mater)
  }

  public async destroy({params, response}: HttpContextContract) {
    await MaterService.delete(params.id)
    return response.noContent()
  }
}
