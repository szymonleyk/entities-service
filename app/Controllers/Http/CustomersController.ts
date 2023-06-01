import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CustomerService from 'App/Services/CustomerService'

export default class CustomersController {
  public async index({response}: HttpContextContract) {
    const customers = await CustomerService.findAll()
    return response.ok(customers)
  }

  public async store({request, response}: HttpContextContract) {
    const customerData = request.only(['name', 'email', 'vat'])
    const customer = await CustomerService.create(customerData)
    return response.created(customer)
  }

  public async show({params, response}: HttpContextContract) {
    const customer = await CustomerService.findById(params.id)
    return response.ok(customer)
  }

  public async update({params, request, response}: HttpContextContract) {
    const customerData = request.only(['name', 'email', 'vat'])
    const customer = await CustomerService.update(params.id, customerData)
    return response.ok(customer)
  }

  public async destroy({params, response}: HttpContextContract) {
    await CustomerService.delete(params.id)
    return response.noContent()
  }
}
