$(".btn11").click(function(){
    if($(".full_name").val() ==""){
        $("#output").html("Invalid data provided..!!!")
    }else{
        $("#output").html("") 
    }

    if($(".phone_number").val() ==""){
        $("#output1").html("Invalid data provided..!!!")
    }else{
        $("#output1").html("") 
    }


    if($(".email").val() ==""){
        $("#output2").html("Invalid data provided..!!!")
    }else{
         $("#output2").html("") 
    }

    if($(".password").val() ==""){
        $("#output3").html("Invalid data provided..!!!")
        
    }else{
        $("#output3").html("") 
    }


    $.ajax({
        type:"post",
        url:"http://159.65.21.42:9000/register",
        data:{
            "name":$(".full_name").val(),
            "phone":$(".phone_number").val(),
            "email":$(".email").val(),
            "password":$(".password").val()
        },
        success: function(res){
            if(res.error){
                $("#output3").html(res.error)
            }else{
                $("#output3").html("Account created successfully..!!!")
                $("#output3").css({
                    "color":"blue",
                    "margin-bottom":"10px"
                })
            }
        },
        error: function(err){
            $("#output3").html(err),
            $("#output3").css({"color":"red",
            "margin-bottom":"10px"
        })
        }
    })
})