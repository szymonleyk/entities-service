import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.group(() => {
        Route.group(() => {
            Route.get('/', 'CustomersController.index')
            Route.get('/:id', 'CustomersController.show')
            Route.post('/', 'CustomersController.store')
            Route.put('/:id', 'CustomersController.update')
            Route.delete('/:id', 'CustomersController.destroy')
        }).prefix('/customers').as('customers')
    }).prefix('/v1').as('v1')
}).prefix('/api').as('api')