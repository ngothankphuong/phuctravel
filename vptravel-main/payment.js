var itemList = {
    "pl1":{ 	"name":"Phú Quốc", 
                "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quae accusantium soluta mollitia nisi id incidunt aspernatur veritatis at cupiditate? Quasi dolor temporibus esse optio Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quae accusantium soluta mollitia nisi id incidunt aspernatur veritatis at cupiditate? Quasi dolor temporibus esse optio ",
                "duration":"3 ngày - 2 đêm",
                "price":"4.899.000 VNĐ", 
                "int_price": 4899000,
                 "photo":"img/phuquoc.jpg",
                "rate": "5.0"},
    "pl2":{ 	"name":"Đà Nẵng", 
                "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quae accusantium soluta mollitia nisi id incidunt aspernatur veritatis at cupiditate? Quasi dolor temporibus esse optio ",
                "duration":"3 ngày - 2 đêm",
                "price":"5.499.000 VNĐ", 
                "int_price": 5499000,
                 "photo":"img/danang.jpg",
                "rate": "5.0"},
    "pl3":{ 	"name":"Hạ Long", 
                "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quae accusantium soluta mollitia nisi id incidunt aspernatur veritatis at cupiditate? Quasi dolor temporibus esse optio ",
                "duration":"3 ngày - 2 đêm",
                "price":"3.990.000 VNĐ", 
                "int_price": 3990000,
                 "photo":"img/halong.jpg",
                "rate": "5.0"},
    "pl4":{ 	"name":"Hội An", 
                "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quae accusantium soluta mollitia nisi id incidunt aspernatur veritatis at cupiditate? Quasi dolor temporibus esse optio ",
                "duration":"4 ngày - 3 đêm",
                "price":"5.899.000 VNĐ", 
                "int_price": 5899000,
                 "photo":"img/hoian.jpg",
                "rate": "4.5"},
    "pl5":{ 	"name":"Nha Trang", 
                "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quae accusantium soluta mollitia nisi id incidunt aspernatur veritatis at cupiditate? Quasi dolor temporibus esse optio ",
                "duration":"2 ngày - 1 đêm",
                "price":"2.499.000 VNĐ", 
                "int_price": 2499000,
                 "photo":"img/nhatrang.jpg",
                "rate": "5.0"},
    "pl6":{ 	"name":"Đà Lạt", 
                "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quae accusantium soluta mollitia nisi id incidunt aspernatur veritatis at cupiditate? Quasi dolor temporibus esse optio ",
                "duration":"4 ngày - 3 đêm",
                "price":"4.499.000 VNĐ", 
                "int_price": 4499000,
                 "photo":"img/dalat.jpg",
                "rate": "5.0"},
    "pl7":{ 	"name":"Ninh Bình", 
                "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quae accusantium soluta mollitia nisi id incidunt aspernatur veritatis at cupiditate? Quasi dolor temporibus esse optio ",
                "duration":"3 ngày - 2 đêm",
                "price":"5.499.000 VNĐ", 
                "int_price": 5499000,
                 "photo":"img/ninhbinh.jpg",
                "rate": "5.0"},
    "pl8":{ 	"name":"Sapa", 
                "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quae accusantium soluta mollitia nisi id incidunt aspernatur veritatis at cupiditate? Quasi dolor temporibus esse optio ",
                "duration":"3 ngày - 2 đêm",
                "price":"3.499.000 VNĐ", 
                "int_price": 3499000,
                 "photo":"img/sapa.jpg",
                "rate": "4.5"},
    "pl9":{ 	"name":"Cần Thơ", 
                "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quae accusantium soluta mollitia nisi id incidunt aspernatur veritatis at cupiditate? Quasi dolor temporibus esse optio ",
                "duration":"3 ngày - 2 đêm",
                "price":"2.899.000 VNĐ", 
                "int_price": 2899000,
                 "photo":"img/cantho.jpg",
                "rate": "4.5"}
    
}

function doit(){
    let list = Object.entries(localStorage)
    let code = localStorage.code
    let photo = itemList[code].photo
    let name = itemList[code].name
    let dura = itemList[code].duration
    let rate = itemList[code].rate
    let price = itemList[code].price
    let sub = itemList[code].description  
    let intP = itemList[code].int_price 

    let showName = document.getElementById("pmt_place_name")
    let showPhoto = document.getElementById("pmt_img")
    let showDura = document.getElementById("dura_text")
    let showRate = document.getElementById("rate_text")
    let showPrice = document.getElementById("pmt_price")
    let showSub = document.getElementById("pmt_place_sub")
    let ttt_text = document.getElementById("ttt_text")
    let btn = document.getElementById("commit_am")
    let more = document.getElementById("more_tt")
    let pay = document.getElementById("pay")
    let pbtn = document.getElementById("pay_btn")


    let visaC = document.getElementById("visa")
    let mastercardC = document.getElementById("mastercard")
    let paypalC = document.getElementById("paypal")
    let bankC = document.getElementById("bank")


    showName.innerHTML = name 
    showPhoto.innerHTML = "<img class='pmt_img' src='"+photo+"'>"
    showDura.innerHTML = dura
    showRate.innerHTML = rate
    showSub.innerHTML = sub
    showPrice.innerHTML = price

    function isCheckPayment(){
        if (!visaC.checked && !mastercardC.checked && !paypalC.checked && !bankC.checked){
            return 0
        } else return 1
    }

    function isFilledInfo(){
        let usname = document.getElementById("username").value
        let usnum = document.getElementById("usernum").value
        let valid = document.getElementById("validdate").value
        let cvv = document.getElementById("cvv").value
        let usid = document.getElementById("userid").value
        let uscountry = document.getElementById("usercountry").value
        if (usname=='') alert("Chưa nhập tên chủ thẻ")
        else if (usnum=='') alert("Chưa nhập số thẻ")
            else if (valid=='') alert("Chưa nhập ngày hết hạn thẻ")
                else if (cvv=='') alert("Chưa nhập CVV")
                    else if (usid=='') alert("Chưa nhập CMND/CCCD")
                        else if (uscountry=='') alert("Chưa chọn quốc tịch")
                            else alert("Bạn sẽ được chuyển đến trang thanh toán đã chọn")
    }

    pay.style.display = "none";

    btn.addEventListener('click',function(){

        let ad = parseInt(document.getElementById("adult_am").value)
        let k = parseInt(document.getElementById("kid_am").value)

        if ((isNaN(ad)) || (isNaN(k))){
            alert("Chưa nhập số lượng hành khách")
        } else {

            pay.style.display = "block";
        
            let ttt = (intP * ad) + (0.6*intP*k) + (0.1*intP*(ad+k))
        
            ttt_text.innerHTML = ttt.toLocaleString()
    
            more.innerHTML = "Giá đã bao gồm 10% VAT, gồm "+ad+" người lớn và "+k+" trẻ em"
        }


    })

    
    pbtn.addEventListener('click',function(){
        if (!isCheckPayment()){
            alert("Chưa chọn phương thức thanh toán")
        } else {
            isFilledInfo()
        }
        
    })
}

doit()