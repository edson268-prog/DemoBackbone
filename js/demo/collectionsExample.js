StudentModel = Backbone.Model.extend({
    default: {
        name: "unknown"
    }
});

StudentCollection = Backbone.Collection.extend({
    model: StudentModel,
    initialize: function () {
        this.bindEvents();
    },
    bindEvents: function () {
        this.on("change:name", function (model) {
            alert("hey, the name changed!! " + model.get("name"));
        });
        this.on("add", function (model) {
            alert("We just added a student!! " + model.get("name"));
        });
        this.on("remove", function (model) {
            alert("We lost a student!! " + model.get("name"));
        });
    }
});

$(document).ready(function () {
    // addRemoveItems();
    // ModifyItems();
    collectionEvents();
});

function addRemoveItems() {
    var jhonny = new StudentModel({ name: "Jhonny", id: 0 });
    var vicky = new StudentModel({ name: "Vicky", id: 1 });
    var lola = new StudentModel({ name: "Lola", id: 2 });
    var class_1 = new StudentCollection([jhonny, vicky]);
    // console.log("Class_1 size " + class_1.size());
    displayCollectionContents("Two elements: ", class_1);
    var pepe = new StudentModel({ name: "Pepe", id: 3 });
    class_1.add([lola, pepe]);
    displayCollectionContents("Four elements: ", class_1);
    class_1.remove([vicky, pepe]);
    displayCollectionContents("Two elements: ", class_1);
}

function ModifyItems() {
    var jhonny = new StudentModel({ name: "Jhonny", id: 0 });
    var vicky = new StudentModel({ name: "Vicky", id: 1 });
    var studentGroup = new StudentCollection([jhonny, vicky]);
    displayCollectionContents("Before", studentGroup);
    var student = studentGroup.get(0);
    student.set({ name: "Lopez" });
    displayCollectionContents("After_1", studentGroup);
    jhonny.set({ name: "Jhonny" });
    displayCollectionContents("After_2", studentGroup);
}

function collectionEvents() {
    var jhonny = new StudentModel({ name: "Jhonny", id: 0 });
    var vicky = new StudentModel({ name: "Vicky", id: 1 });
    var studentGroup = new StudentCollection([jhonny]);
    studentGroup.add([vicky]);
    studentGroup.remove([vicky]);
    jhonny.set({ name: "sandwich" });
}


function displayCollectionContents(string, collection) {
    console.log(string + " " + JSON.stringify(collection.toJSON()))
}