TheView = Backbone.View.extend({
    defaults: {

    },
    initialize: function(){
        // alert("I EXIST NOW!!!");
        console.log(this.el);
        console.log(this.$el);
        this.$el.append("lalalahahahaha");
    }
});

SecondView = Backbone.View.extend({
    // <span class="prettyCake" id="span1"></span>
    tagName: "span",
    className: "prettyCake",
    id: "span1",
    initialize: function(){
        // console.log(this.el);
        // console.log(this.$el);
        $("#unique").append(this.el);
    }
});

RenderView = Backbone.View.extend({
    initialize: function(){
        this.render();
    },
    render: function(){
        var template = _.template($("#renderTemplate").html(), {});
        this.$el.html(template); // put the element of 'renderTemplate' into 'unique'
    },
    events: {
        "click" : "clicked",
        "mouseover .hello" : "mouseover"
    },
    clicked: function(){
        alert("You clicked it");
    },
    mouseover: function(){
        alert("You moused over. It turns me on.");
    }
});

$(document).ready(function(){
    // var aView = new TheView({el: $("#unique")});
    // var sView = new SecondView();
    var rView = new RenderView({el: $("#unique")}); // Set the div tag with ID "unique" into el
});

// el - references a DOM object
// $el - its a jquery object that still references the same DOM object as el