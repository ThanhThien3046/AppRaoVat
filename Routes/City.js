const City = require("../Models/City");

module.exports = function(app){

    app.get("/city", function(req,res){
        res.render("admin_master",{content:"./city/city.ejs"});
    })

    app.post("/city/add", function(req, res){
        var newCity = City({
            Name: req.body.Name
        });
        newCity.save(function(err){
            if(err){
                res.json({kq:0, errMsg:err});
            }else{
                res.json({kq:1});
            }
        });
    });
}