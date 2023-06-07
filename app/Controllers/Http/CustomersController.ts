import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Customer from 'App/Models/Customer'
import Site from 'App/Models/Site'
import CustomerService from 'App/Services/CustomerService'

export default class CustomersController {
  public async index({ response }: HttpContextContract) {
    const customers = await CustomerService.findAll()
    return response.ok(customers)
  }

  public async store({ request, response }: HttpContextContract) {
    const { customer, sites } = request.only(['customer', 'sites'])

    const createdCustomer = await Customer.create(customer)

    const createdSites = await Site.createMany(sites)
    await createdCustomer.related('sites').saveMany(createdSites)

    return response.created({ customer: createdCustomer, sites: createdSites })
  }

  public async show({ params, response }: HttpContextContract) {
    const customer = await CustomerService.findById(params.id)
    return response.ok(customer)
  }

  public async update({ params, request, response }: HttpContextContract) {
    const customerData = request.only(['name', 'email', 'vat'])
    const customer = await CustomerService.update(params.id, customerData)
    return response.ok(customer)
  }

  public async destroy({ params, response }: HttpContextContract) {
    await CustomerService.delete(params.id)
    return response.noContent()
  }
}
