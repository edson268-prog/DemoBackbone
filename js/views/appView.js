const AppView = Backbone.View.extend({
    el: "#app",
    events: {
        "click #add-client": "addClient"
    },
    initialize() {
        this.input = this.$("#client-name");
        this.list = this.$("#client-list");
        this.collection = new ClientCollection();
        this.listenTo(this.collection, "add", this.renderClient);
    },
    addClient() {
        const clientName = this.input.val().trim();
        if (clientName) {
            this.collection.add(new Client({ name: clientName }));
            this.input.val("");
        }
    },
    renderClient(client) {
        const view = new ClientView({ model: client });
        this.list.append(view.render().el);
    }
});