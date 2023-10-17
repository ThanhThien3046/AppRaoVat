$(document).ready(function(){
    var url = "http://localhost:3000";

    $("#btn_AddNewCity").click(function(){
        $.post(url + "/city/add",{Name:$("#cityName").val()}, function(data){
            console.log(data);
        });
    });
});