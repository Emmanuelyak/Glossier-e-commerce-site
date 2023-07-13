function load(id) {
    $.ajax({
        type: "get",
        url: "http://159.65.21.42:9000/product/" + id,
        success: function (res) {
            $(".product_name").html(res.name)
            $(".product_descrpt").html(res.description)
            $(".select_amount").html(res.quantity)
            $(".product_price").html(res.price)
            $("#product_img").attr('src', "http://159.65.21.42:9000" + res.image)
            $(".bag").attr('data-id',res._id)
        },
        error: function (err) {
            console.log(err)
        }
    })
}

let url = location.href
let arr = url.split('=');
load(arr[1])


$('.add_to_cart').click(function () {
    $('.add_to_bag').css({
        'display': 'block'
    })
})

$('#cancel_bag').click(function () {
    $('.add_to_bag').fadeOut()
})

$('.cartdisplay').click(function(){
    $('.add_to_bag').css({
        'display': 'block'
    })
})



$(".bag").click(function (){
    let id = $(this).attr('data-id')
    $.ajax({
        url:"http://159.65.21.42:9000/product/"+id,
        type: "get",
        success: function (res){

            let carts = []
            if(localStorage.getItem('cart') != null){
                carts= JSON.parse(localStorage.getItem('cart'))
                carts.push(res)
            }
            else{
                carts.push(res)
            }
            localStorage.setItem('cart', JSON.stringify(carts))
            alert("added")
        }
    })
})


function rendercart(data) {
    return `
    <div class="bag_body3_sub">
    <div>
         <img class="bag_body3_img" src="http://159.65.21.42:9000${data.image}" alt="">
    </div>
                            <div>
                                <div class="flex bag_bag">
                                    <div>${data.name}</div>
                                    <div class="bag3price">$${data.price}</div>
                                </div>
                                <div class="mini_bag">
                                    <img class="bag_mini"
                                    src="./media/swatch_shade-brown.jpeg" alt="">
                                    <div class="brown">Brown</div>
                                </div>
                                <div class="flex">
                                    <button type="" class="bag_qantity">${data.quantity}</button>
                                    <a class="remov" href="">Remove</a>
                                </div>
                            </div>

    </div>`
}

function loadcart() {
    let carts = []
    if (localStorage.getItem('cart') != null) {
        carts = JSON.parse(localStorage.getItem('cart'))
        for (let i = 0; i < carts.length; i++) {
            let p = carts[i]
            let data = rendercart(p)
            $('.bag_body3_sub').append(data)
            console.log(data)

        }
    }
}

loadcart()

$(document).on('click', '.remov', function(){
    $('.bag_body3_sub').localStorage.removeItem('cart')
} )