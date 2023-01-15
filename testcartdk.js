const product = [
    {
        id: 0,
        image: 'js2.png',
        title: 'Hawa Mahal',
        price: 200,
        link:'hawamahal.html',
    },
    {
        id: 1,
        image: 'js1.jpg',
        title: 'Jal Mahal',
        price: 300,
        link:'jalmahal.html',
    },
    {
        id: 2,
        image: 'js4.jpg',
        title: 'Birla Mandir',
        price: 0,
        link:'birlamandir.html',
    },
    {
        id: 3,
        image: 'js3.jpg',
        title: 'Albert Hall',
        price: 250,
        link:'albert hall.html',
    },
    {
        id: 4,
        image: 'js5.jpg',
        title: 'Amer Mahal',
        price: 250,
        link:'amer.html',
    },
    {
        id: 5,
        image: 'js6.jpg',
        title: 'Choki Dhani',
        price: 1000,
        link:'chokhidhani.html',
    },
    {
        id: 6,
        image: 'js7.jpg',
        title: 'Jantar Mantar',
        price: 150,
        link:'jantar mantar.html',
    },
    {
        id: 7,
        image: 'js8.jpg',
        title: 'Patrika Gate',
        price: 0,
        link:"patrika gate.html",
    },
    {
        id: 8,
        image: 'js9.jpg',
        title: 'Akshar Dham',
        price: 100,
        link:'akshar dham.html',
    },
    {
        id: 9,
        image: 'js10.jpg',
        title: 'GaltaJi',
        price: 50,
        link:'galtaji.html',
    },
    {
        id: 10,
        image: 'js11.jpg',
        title: 'WTP',
        price: 500,
        link:'wtp.html',
    },
    {
        id: 11,
        image: 'js12.jpg',
        title: 'Albert Hall',
        price: 100,
        link:'albert hall.html',
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {id,image, title, price,link} = item;
    
    return(
        
        `<div class='box'>
        <p class='pad'>${title}</p>
            <div class='img-box'>
            <a href=${link}><img class='images' src=${image} ></a>
                
            </div>
        <div class='bottom'>
        
        <h2>₹ ${price}.00</h2>`+
        "<button class='ok' onclick='addtocart("+(i++)+")'>+</button>"+
        `</div>
        </div>`
    )}
  
).join('')

var cart =[];

function addtocart(a){
     cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }
}




