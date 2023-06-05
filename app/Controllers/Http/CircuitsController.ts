import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CircuitService from 'App/Services/CircuitService'

export default class CircuitsController {
  public async index({response}: HttpContextContract) {
    const circuits = await CircuitService.findAll()
    return response.ok(circuits)
  }

  public async store({request, response}: HttpContextContract) {
    const circuitData = request.only(['name', 'installation_date', 'is_main', 'parent_id'])
    const circuit = await CircuitService.create(circuitData)
    return response.created(circuit)
  }

  public async show({params, response}: HttpContextContract) {
    const circuit = await CircuitService.findById(params.id)
    return response.ok(circuit)
  }

  public async update({params, request, response}: HttpContextContract) {
    const circuitData = request.only(['name', 'installation_date', 'is_main', 'parent_id'])
    const circuit = await CircuitService.update(params.id, circuitData)
    return response.ok(circuit)
  }

  public async destroy({params, response}: HttpContextContract) {
    await CircuitService.delete(params.id)
    return response.noContent()
  }
}
