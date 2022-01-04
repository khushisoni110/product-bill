const { privateDecrypt } = require("crypto")

function getamt()
{
    var pn=product.value
    var rate=0
    if(pn=="Amul Ghee")
    {rate=600 }
    else if(pn=="Amul Paneer")
    {rate=300}
    else if(pn=="Amul Milk")
    {rate=58}

    amt=rate*qty.value
    pv.innerHTML="Product:"+pn
    pr.innerHTML="Rate:"+rate
    pq.innerHTML="Quantity:"+qty.value
    pa.innerHTML="Amount:"+amt
    pic.src=pn+".jpg"

}