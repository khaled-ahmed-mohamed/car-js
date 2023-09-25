// class list Name 

var allProduct = document.querySelectorAll(".item .item-box h2")
var info = document.querySelector(" .info-date")
var btn = document.querySelector(".btn")
var elPrice = document.querySelector(".price")

var Totalprice = 0;

allProduct.forEach(function (item) {
    item.addEventListener("click" , function(){
        info.innerHTML += item.textContent + "  "
        Totalprice += +(item.getAttribute("price"))
        if(info.innerHTML != ""){
            btn.style.display = "block"
        }
    })
})

btn.addEventListener("click" , function(){
    elPrice.innerHTML = Totalprice
})












