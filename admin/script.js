function send(a){
    return`
    <tr>
                <th>${a.name}</th>
                <th>${a.price}</th>
                <th>${a.quantity}</th>
                <th><img src="http://159.65.21.42:9000${a.image}" height="50" width="50"/> </th>
                <th>${a.description}</th>
                <th>
                    <a href="edit.html?id=${a._id}" class="edit"><button >Edit</button></a>
                    <a data-id=${a._id} class="delete"><button>Delete</button></a>
                </th>
            </tr>`
}

function loadProduct(){

    $.ajax({
        type:"get",
        url:"http://159.65.21.42:9000/products",
        success: function(res){
            
            for(let i=0; i<res.length; i++){
                let d = res[i]
               if(d.category == "shop-all"){
                let product = send(d)
                $("#products").append(product)
                console.log(product);
               }
            }
        },
        error: function(err){
            console.log(err)
        }
    })

}

loadProduct();


// delete

$(document).on('click','.delete',function(){
    let id = $(this).attr('data-id')
    let res = confirm("Are you sure you what to delete")
    if(res == true){
        
    $.ajax({
        type:"delete",
        url:"http://159.65.21.42:9000/product/"+id,
        success: function(res){
            alert("Item deleted")
        },
        error: function(err){
            console.log(err)
        }
    })
    }

})

function users(q){
    return`
    <tr>
                // <th>${q._id}</th>
                <th>${q.name}</th>
                <th>${q.phone}</th>
                <th>${q.email}</th>
                <th>${q.password}</th>
                <th>
                    <a href="edit_user.html?id=${q._id}" class="edit"><button >Edit</button></a>
                    <a data1-id=${q._id} class="delete1"><button>Delete</button></a>
                </th>
            </tr>`
}

function usersData(){

    $.ajax({
        type:"get",
        url:"http://159.65.21.42:9000/users",
        success: function(res){
            console.log(res);
            for(let i=0; i<res.length; i++){
                let d = res[i]
                let product = users(d)
                $("#products1").append(product)
            }
        },
        error: function(err){
            console.log(err)
        }
    })

}

usersData()


$(document).on('click','.delete1',function(){
    let id = $(this).attr('data1-id')
    let res = confirm("Are you sure you what to delete")
    if(res == true){
        
    $.ajax({
        type:"delete",
        url:"http://159.65.21.42:9000/user/"+id,
        success: function(res){
            alert("Item deleted")
        },
        error: function(err){
            console.log(err)
        }
    })
    }

})


function getUser(id){

    $.ajax({
        type:"get",
        url:"http://159.65.21.42:9000/user/"+id,
        success: function(res){
           
            $('.Name').val(res.name)
            $(".Phone").val(res.phone)
            $(".E_mail").val(res.email)
            $(".PassWord").val(res.password)
            $('#form').attr('action',"http://159.65.21.42:9000/users/"+id)
          
        },
        error: function(err){
            console.log(err)
        }
    })

}

let url = location.href
let arr = url.split('=')
let id = arr[1]
getUser(id)

$('.btn_edit_user').click(function(){
    $.ajax({
        type:"put",
        url:"http://159.65.21.42:9000/user/"+id,
        data:{
            name:$('.Name').val(),
            phone:$(".Phone").val(),
            email: $(".E_mail").val(),
            password:$(".PassWord").val()
        },
        success: function(res){
           
            $('.Name').val('')
            $(".Phone").val('')
            $(".E_mail").val('')
            $(".PassWord").val('')
            alert("Updated")
          
        },
        error: function(err){
            console.log(err)
        }
    })
})