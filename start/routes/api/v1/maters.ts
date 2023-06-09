import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.group(() => {
        Route.group(() => {
            Route.get('/', 'MatersController.index')
            Route.get('/:id', 'MatersController.show')
            Route.post('/', 'MatersController.store')
            Route.put('/:id', 'MatersController.update')
            Route.delete('/:id', 'MatersController.destroy')
        }).prefix('/maters')
    }).prefix('/v1')
}).prefix('/api')