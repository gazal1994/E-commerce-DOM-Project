
const CartPage = () => {
    let arryC = [];
    let imgsC = [];
    let para = [];
    let removeFromCartBtn = [];
    function get_rand_color() {
        var color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
        while (color.length < 6) {
            color = "0" + color;
        }
        return "#" + color;
    }


    const getElement = () => {

        for (i = 0; i < e.getCart().length; i++) {
            arryC[i] = document.createElement('div');
            arryC[i].style.backgroundColor = get_rand_color();
            arryC[i].style.height = 300 + "px";
            arryC[i].style.width = 700 + "px";
            arryC[i].setAttribute('id', 'divC' + i);


            imgsC[i] = document.createElement("IMG");
            imgsC[i].setAttribute("src", e.getCart()[i].img);
            imgsC[i].setAttribute("width", "304");
            imgsC[i].setAttribute("height", "228");
            imgsC[i].setAttribute("alt", "The Pulpit Rock");


            para[i] = document.createElement("p");
            para[i].setAttribute('id', 'p' + i);
            para[i].setAttribute("height", "200");
            para[i].setAttribute("width", "200");
            para[i].style.marginLeft = 320 + 'px';
            para[i].style.color = get_rand_color();
            //para[i].fontSize(7);
            let str = ("name : " + e.getCart()[i].name + "  price : " + e.getCart()[i].price);
            //str = str.fontsize(7);
            para[i].innerText = str;

            removeFromCartBtn[i] = document.createElement("BUTTON");
            removeFromCartBtn[i].setAttribute('id', 'btn' + i);
            removeFromCartBtn[i].innerHTML = "remove from cart";
            removeFromCartBtn[i].addEventListener("click", function () {
                e.getCart().splice(e.getCart()[i], 1);

            });


            document.getElementById('container1').appendChild(arryC[i]);
            document.getElementById('divC' + i).appendChild(para[i]);
            document.getElementById('divC' + i).appendChild(imgsC[i]);
            document.getElementById('divC' + i).appendChild(removeFromCartBtn[i]);

        }


    }



   



    return { getElement, get_rand_color}
}

const c = CartPage();

document.getElementById("CarBtn").addEventListener("click", c.getElement);

//c.getElement();