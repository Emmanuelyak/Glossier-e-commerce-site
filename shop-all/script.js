function render(data){
    return` 
    <a href="product_page.html?id=${data._id}">
    <div class="log4">
         <div class="log4background">
         </div>
        <div class="log4img"><img src="http://159.65.21.42:9000${data.image}" alt=""></div>

        <a href="#">
             <div class="text1">
            <div class="tx1"><a href="">${data.name}</a></div>
            <div class="tx2"><a href="">${data.description}</a></div>
            </div>
            <div class="flex text2">
             <div>Add to Bag
            </div>
            <div>$${data.price}</div>

         </div>
         </a>

    </div>
</a>

    `
}

function load(){
    $.ajax({
        type:"get",
        url:"http://159.65.21.42:9000/products",
        success: function(res){
            
            for(let i=0; i<res.length; i++){
                let d = res[i]
               if(d.category == "shop-all"){
                let product = render(d)
                $(".fetched_data").append(product)
               }
            }
        },
        error: function(err){
            console.log(err)
        }
    })
}

load()

function rendercart(d){
    if(d.total == undefined){
        d.total = 1
    }
    return`
    

    <div class="product_discription">
        <div class="img_discpt">
            <img id="product_img" src="http://159.65.21.42:9000${d.image}" alt="">
        </div>
        <div class="part3">
            <div class="name">
                <h3 class="product_name">${d.name} </h3>
                <p>film form mascara • 8.5 g / 0.29 oz • 4077 Reviews</p>
            </div>
            <div class="discription">
                <div>
                    <h4>Extensions without the extensions.</h4>
                    What it is: Our best-selling mascara that visibly lengthens and lifts lashes for a baby extensions
                    effect.
                </div>
                <div>
                    <h5>WHY IT'S SPECIAL</h5>
                    <ul>
                        <li class="product_descrpt">${d.description}</li>
                        <li>
                            Now available in a highly-requested Brown and our classic Black
                        </li>
                    </ul>
                </div>
                <div>
                    <h3> Lash Slick</h3>
                    <p>film form mascara • 8.5 g / 0.29 oz • 4077 Reviews</p>
                </div>
                <div>
                    <h4>Extensions without the extensions.</h4>
                    What it is: Our best-selling mascara that visibly lengthens and lifts lashes for a baby extensions
                    effect.
                </div>
                <div>
                    <h5>WHY IT'S SPECIAL</h5>
                    <ul>
                        <li>
                            Now available in a highly-requested Brown and our classic Black
                        </li>
                    </ul>
                </div>
                <div>
                    <h3> Lash Slick</h3>
                    <p>film form mascara • 8.5 g / 0.29 oz • 4077 Reviews</p>
                </div>
            </div>

            <div class="add_to_cart">
                <button type="" class="select_amount">${d.total}</button>
                <a href="#" class="add_bag flex"><button data-id=${d.id} class="bag">
                        <p>Add to Bag - $${d.price}</p>
                        <p class="product_price"></p>
                    </button></a>
            </div>

        </div>
      </div>`
}