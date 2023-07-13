$(".button1").click(function(){
    if($("#email").val() == ""){
        $("#output").html("This feild can not be empty..!!!")
        
    }else {
        $("#output").html("")
    }


    if($("#passowrd").val() == ""){
        $("#output1").html("This feild can not be empty..!!!")
        
    }else{
        $("#output1").html("")
    }

    $.ajax({
    type:"post",
    url:"http://159.65.21.42:9000/login",
    data:{
        "email":$("#email").val(),
        "password":$("#passowrd").val()
        },
        
    success: function(res){
        if(res.error){
            $("#output1").html(res.error)
            console.log(res.error)
        }else{
            $("#output1").html("login successfully.....!!!!!")
            $("#output1").css({"color":"blue"})
            localStorage.setItem("user", JSON.stringify(res))
            console.log(res)
        }
        console.log(data)
    },
    error: function(err){
        $("#output1").html(err)
        console.log(err);
    }
})
})

