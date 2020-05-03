
const Ecommerce = () => {
    const cart = [];
    const arry = [];
    let imgs = [];
    let addToCartBtn = [];
    let addToCartBtnCount = [];
    let para = [];
    let count = 0;
   
    const products = [
        {
            name: "First",
            price: 50,
            id: 0,
            img: "https://s3.scoopwhoop.com/anj/st_anger/289113779.jpg?crop"
        },
        {
            name: "Second",
            price: 40,
            id: 1,
            img: "https://cdn.shopify.com/s/files/1/0347/3225/files/TorsoFit_large.jpg?v=1505579376"
        },
        {
            name: "third",
            price: 30,
            id: 2,
            img: "https://pluspng.com/img-png/guy-in-a-suit-png-suit-png-image-920.png"
        },
        {
            name: "fourth",
            price: 20,
            id: 3,
            img: "https://i.imgur.com/JhwydNl.png"
        }
    ];
 
    
     
    const getProducts = () => products; 
    const getPlength = () => (products.length);
    const getCart = () => cart;
   

    function get_rand_color() {
        var color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
        while (color.length < 6) {
            color = "0" + color;
        }
        return "#" + color;
    }

    for (let h = 0; h < 5 ; h++) {
        addToCartBtnCount[h] = 0;
    }

    const createElement = () => {

        for (i = 0; i < products.length; i++) {
            arry[i] = document.createElement('div');
            arry[i].style.backgroundColor = get_rand_color();
            arry[i].style.height = 300 + "px";
            arry[i].style.width = 700 + "px";
            arry[i].setAttribute('id', 'div' + i);


            imgs[i] = document.createElement("IMG");
            imgs[i].setAttribute("src", products[i].img);
            imgs[i].setAttribute("width", "304");
            imgs[i].setAttribute("height", "228");
            imgs[i].setAttribute("alt", "The Pulpit Rock");


            para[i] = document.createElement("p");
            para[i].setAttribute('id', 'p' + i);
            para[i].setAttribute("height", "200");
            para[i].setAttribute("width", "200");
            para[i].style.marginLeft = 320 + 'px';
            para[i].style.color = get_rand_color();
            //para[i].fontSize(7);
            let str = ("name : " + products[i].name + "  price : " + products[i].price);
            //str = str.fontsize(7);
            para[i].innerText = str;
            
          
            






            addToCartBtn[i] = document.createElement("BUTTON");
            addToCartBtn[i].setAttribute('id', 'btn' + i);
            addToCartBtn[i].innerHTML = "addToCart"  ;
            let x = products[i];
            let b = 0;
            let z = products[i].id

            addToCartBtn[i].addEventListener("click", function () {
                cart[count] = x;
                count++;
                b++;

                document.getElementById('btn' + x.id).innerHTML = "addToCart : " + b;
          
            });
      
         
            
            
           
            
            document.getElementById('container1').appendChild(arry[i]);
            document.getElementById('div' + i).appendChild(para[i]);
            document.getElementById('div' + i).appendChild(imgs[i]);
            document.getElementById('div' + i).appendChild(addToCartBtn[i]);
          
            
            
           // document.getElementById('par').innerHTML = b;


            

           
        }


    }

  

    
  



    
    return { getProducts, getPlength, createElement, get_rand_color, getCart}  
}
const e = Ecommerce();

document.getElementById("myBtn").addEventListener("click", e.createElement);


// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}
$(document).ready(function () {
    $(ggg).click(function () {
        $("#container1").empty();
    });
});