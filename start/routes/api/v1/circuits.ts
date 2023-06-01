import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.group(() => {
        Route.group(() => {
            Route.get('/', 'CircuitsController.index')
            Route.get('/:id', 'CircuitsController.show')
            Route.post('/', 'CircuitsController.store')
            Route.put('/:id', 'CircuitsController.update')
            Route.delete('/:id', 'CircuitsController.destroy')
        }).prefix('/circuits')
    }).prefix('/v1')
}).prefix('/api')