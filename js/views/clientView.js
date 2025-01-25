const ClientView = Backbone.View.extend({
    tagName: "li",
    template: _.template('<span class="client-name"><%= name %></span> <button class="edit">Edit</button> <button class="delete">Delete</button>'),
    events: {
        "click .delete": "deleteClient",
        "click .edit": "editClient"
    },
    initialize() {
        this.listenTo(this.model, "change", this.render);
    },
    render() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },
    deleteClient() {
        this.model.destroy();
        this.remove();
    },
    editClient() {
        const newName = prompt("Edit client name:", this.model.get("name"));
        if (newName) {
            this.model.set("name", newName);
        }
    }
});