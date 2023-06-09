import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.group(() => {
        Route.group(() => {
            Route.get('/', 'SitesController.index')
            Route.get('/:id', 'SitesController.show')
            Route.post('/', 'SitesController.store')
            Route.put('/:id', 'SitesController.update')
            Route.delete('/:id', 'SitesController.destroy')
        }).prefix('/sites')
    }).prefix('/v1')
}).prefix('/api')