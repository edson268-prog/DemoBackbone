const AppRouter = Backbone.Router.extend({
    routes: {
      '': 'index'
    },
  
    index() {
      const items = new ItemsCollection([
        { title: 'Item 1', description: 'Description 1' },
        { title: 'Item 2', description: 'Description 2' },
        { title: 'Item 3', description: 'Description 3' }
      ]);
  
      const itemsListView = new ItemsListView({ collection: items });
      itemsListView.render();
    }
  });