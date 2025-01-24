// Model example
WebsiteModel = Backbone.Model.extend({
    defaults: {
        name: "An unknown website",
        barcode: -1
    },
    initialize: function(){
        
    }
})

$(document).ready(function(){
    // var page_1 = new WebsiteModel({name: "The best website ever", barcode: 1});
    var page_1 = new WebsiteModel();
    // page_1.set({name: "An ever cooler website"});
    // page_1.set({barcode: 61});
    alert("Page's 1 title is: " + page_1.get("name") + " and it's barcode is: " + page_1.get("barcode"));
});