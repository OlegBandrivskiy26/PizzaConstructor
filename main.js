let price = 50;
let priceFeta = 30;
let priceMoza = 40;
let priceBlu = 50;
let priceCheder = 45;
let priceParm = 25;
let priceChiken = 70;
let priceBekon = 83;
let priceShynka = 68;
let pricePaperoni = 55;
let priceAlfredo = 15;
let priceBarbequ = 20;
let priceChasnyk = 10;
let priceKukurudza = 33;
let priceAnanas = 50;
let priceTomato = 50;
let priceGrub = 50;
let priceShpunat = 50;
let pricePerets = 50;
let priceMargarita = 248;
let priceKarbonara = 180;
let price4Chesse = 155;


$('.total').text('До сплати: '+ price);

$('.choseOpen').hide(0);
$('.item1').hide(0);
$('.chosePizza').hide(0);


$('#chease').click(function(){
    $('#chooseChease').slideToggle(300);
})
$('#meet').click(function(){
    $('#chooseMeet').slideToggle(300);
})
$('#sous').click(function(){
    $('#chooseSous').slideToggle(300);
})
$('#veg').click(function(){
    $('#choseVeg').slideToggle(300);
})
$('#add').click(function(){
    $('#choseAdd').slideToggle(300);
})
// ------------
$('.fetaGroup').click(function(){
    $('.fetaGroup').hide(0);
    $('#fetaHide').show(50);
    price+=priceFeta;
    $('.total').text('До сплати: '+ price);
})
$('#fetaHide').click(function(){
    $('.fetaGroup').show(50);
    $('#fetaHide').hide(0);
    price-=priceFeta;
    $('.total').text('До сплати: '+ price);
})
$('.mozaGroup').click(function(){
    $('.mozaGroup').hide(0);
    $('#mozaHide').show(50);
    price+=priceMoza;
    $('.total').text('До сплати: '+ price);
})
$('#mozaHide').click(function(){
    $('.mozaGroup').show(50);
    $('#mozaHide').hide(0);
    price-=priceMoza;
    $('.total').text('До сплати: '+ price);
})

$('.bluGroup').click(function(){
    $('.bluGroup').hide(0);
    $('#bluHide').show(50);
    price+=priceBlu;
    $('.total').text('До сплати: '+ price);
})
$('#bluHide').click(function(){
    $('.bluGroup').show(50);
    $('#bluHide').hide(0);
    price-=priceBlu;
    $('.total').text('До сплати: '+ price);
})

$('.chederGroup').click(function(){
    $('.chederGroup').hide(0);
    $('#chederHide').show(50);
    price+=priceCheder;
    $('.total').text('До сплати: '+ price);
})
$('#chederHide').click(function(){
    $('.chederGroup').show(50);
    $('#chederHide').hide(0);
    price-=priceCheder;
    $('.total').text('До сплати: '+ price);
})

$('.parmGroup').click(function(){
    $('.parmGroup').hide(0);
    $('#parmHide').show(50);
    price+=priceParm;
    $('.total').text('До сплати: '+ price);
})
$('#parmHide').click(function(){
    $('.parmGroup').show(50);
    $('#parmHide').hide(0);
    price-=priceParm;
    $('.total').text('До сплати: '+ price);
})

$('.chickenGroup').click(function(){
    $('.chickenGroup').hide(0);
    $('#chikenHide').show(50);
    price+=priceChiken;
    $('.total').text('До сплати: '+ price);
})
$('#chikenHide').click(function(){
    $('.chickenGroup').show(50);
    $('#chikenHide').hide(0);
    price-=priceChiken;
    $('.total').text('До сплати: '+ price);
})
$('.bekonGroup').click(function(){
    $('.bekonGroup').hide(0);
    $('#bekonHide').show(50);
    price+=priceBekon;
    $('.total').text('До сплати: '+ price);
})
$('#bekonHide').click(function(){
    $('.bekonGroup').show(50);
    $('#bekonHide').hide(0);
    price-=priceBekon;
    $('.total').text('До сплати: '+ price);
})
$('.shynkaGroup').click(function(){
    $('.shynkaGroup').hide(0);
    $('#shynkaHide').show(50);
    price+=priceShynka;
    $('.total').text('До сплати: '+ price);
})
$('#shynkaHide').click(function(){
    $('.shynkaGroup').show(50);
    $('#shynkaHide').hide(0);
    price-=priceShynka;
    $('.total').text('До сплати: '+ price);
})
$('.paperoniGroup').click(function(){
    $('.paperoniGroup').hide(0);
    $('#paperoniHide').show(50);
    price+=pricePaperoni;
    $('.total').text('До сплати: '+ price);
})
$('#paperoniHide').click(function(){
    $('.paperoniGroup').show(50);
    $('#paperoniHide').hide(0);
    price-=pricePaperoni;
    $('.total').text('До сплати: '+ price);
})
// 
$('.alfredoGroup').click(function(){
    $('.alfredoGroup').hide(0);
    $('#alfredoHide').show(50);
    price+=priceAlfredo;
    $('.total').text('До сплати: '+ price);
})
$('#alfredoHide').click(function(){
    $('.alfredoGroup').show(50);
    $('#alfredoHide').hide(0);
    price-=priceAlfredo;
    $('.total').text('До сплати: '+ price);
})
$('.barbequGroup').click(function(){
    $('.barbequGroup').hide(0);
    $('#barbequHide').show(50);
    price+=priceBarbequ;
    $('.total').text('До сплати: '+ price);
})
$('#barbequHide').click(function(){
    $('.barbequGroup').show(50);
    $('#barbequHide').hide(0);
    price-=priceBarbequ;
    $('.total').text('До сплати: '+ price);
})
$('.chasnykGroup').click(function(){
    $('.chasnykGroup').hide(0);
    $('#chasnykHide').show(50);
    price+=priceChasnyk;
    $('.total').text('До сплати: '+ price);
})
$('#chasnykHide').click(function(){
    $('.chasnykGroup').show(50);
    $('#chasnykHide').hide(0);
    price-=priceChasnyk;
    $('.total').text('До сплати: '+ price);
})
// 
$('.kukurudzaGroup').click(function(){
    $('.kukurudzaGroup').hide(0);
    $('#kukurudzaHide').show(50);
    price+=priceKukurudza;
    $('.total').text('До сплати: '+ price);
})
$('#kukurudzaHide').click(function(){
    $('.kukurudzaGroup').show(50);
    $('#kukurudzaHide').hide(0);
    price-=priceKukurudza;
    $('.total').text('До сплати: '+ price);
})
$('.ananasGroup').click(function(){
    $('.ananasGroup').hide(0);
    $('#ananasHide').show(50);
    price+=priceAnanas;
    $('.total').text('До сплати: '+ price);
})
$('#ananasHide').click(function(){
    $('.ananasGroup').show(50);
    $('#ananasHide').hide(0);
    price-=priceAnanas;
    $('.total').text('До сплати: '+ price);
})
$('.tomatoGroup').click(function(){
    $('.tomatoGroup').hide(0);
    $('#tomatoHide').show(50);
    price+=priceTomato;
    $('.total').text('До сплати: '+ price);
})
$('#tomatoHide').click(function(){
    $('.tomatoGroup').show(50);
    $('#tomatoHide').hide(0);
    price-=priceTomato;
    $('.total').text('До сплати: '+ price);
})
$('.grubGroup').click(function(){
    $('.grubGroup').hide(0);
    $('#grubHide').show(50);
    price+=priceGrub;
    $('.total').text('До сплати: '+ price);
})
$('#grubHide').click(function(){
    $('.grubGroup').show(50);
    $('#grubHide').hide(0);
    price-=priceGrub;
    $('.total').text('До сплати: '+ price);
})
$('.shpunatGroup').click(function(){
    $('.shpunatGroup').hide(0);
    $('#shpunatHide').show(50);
    price+=priceShpunat;
    $('.total').text('До сплати: '+ price);
})
$('#shpunatHide').click(function(){
    $('.shpunatGroup').show(50);
    $('#shpunatHide').hide(0);
    price-=priceShpunat;
    $('.total').text('До сплати: '+ price);
})
$('.peretsGroup').click(function(){
    $('.peretsGroup').hide(0);
    $('#peretsHide').show(50);
    price+=pricePerets;
    $('.total').text('До сплати: '+ price);
})
$('#peretsHide').click(function(){
    $('.peretsGroup').show(50);
    $('#peretsHide').hide(0);
    price-=pricePerets;
    $('.total').text('До сплати: '+ price);
})
$('.margaritaGroup').click(function(){
    $('.margaritaGroup').hide(0);
    $('#margaritaHide').show(50);
    $('#peretsHide').show(50);
    $('.peretsGroup').hide(0);
    $('#chederHide').show(50);
    $('.chederGroup').hide(0);
    $('#tomatoHide').show(50);
    $('.tomatoGroup').hide(0);
    $('#barbequHide').show(50);
    $('.barbequGroup').hide(0);
    $('#bekonHide').show(50);
    $('.bekonGroup').hide(0);
    price+=priceMargarita;
    $('.total').text('До сплати:' + price);
})
$('#margaritaHide').click(function(){
    $('.margaritaGroup').show(50);
    $('#margaritaHide').hide(0);
    $('#peretsHide').hide(0);
    $('.peretsGroup').show(50);
    $('#chederHide').hide(0);
    $('.chederGroup').show(50);
    $('#tomatoHide').hide(0);
    $('.tomatoGroup').show(50);
    $('#barbequHide').hide(0);
    $('.barbequGroup').show(50);
    $('#bekonHide').hide(0);
    $('.bekonGroup').show(50);
    price-=priceMargarita;
    $('.total').text('До сплати:' + price);
})
$('.karbonaraGroup').click(function(){
    $('.karbonaraGroup').hide(0);
    $('#karbonaraHide').show(50);
    $('#shpunatHide').show(50);
    $('.shpunatGroup').hide(0);
    $('#alfredoHide').show(50);
    $('.alfredoGroup').hide(0);
    $('#chederHide').show(50);
    $('.chederGroup').hide(0);
    $('#fetaHide').show(50);
    $('.fetaGroup').hide(0);
    $('#mozaHide').show(50);
    $('.mozaGroup').hide(0);
    price+=priceKarbonara;
    $('.total').text('До сплати' + price);
})
$('#karbonaraHide').click(function(){
    $('.karbonaraGroup').show(50);
    $('#karbonaraHide').hide(0);
    $('#shpunatHide').hide(0);
    $('.shpunatGroup').show(50);
    $('#alfredoHide').hide(0);
    $('.alfredoGroup').show(50);
    $('#chederHide').hide(0);
    $('.chederGroup').show(50);
    $('#fetaHide').hide(0);
    $('.fetaGroup').show(50);
    $('#mozaHide').hide(0);
    $('.mozaGroup').show(50);
    price-=priceKarbonara;
    $('.total').text('До сплати' + price);
})
$('.4cheeseGroup').click(function(){
    $('.4cheeseGroup').hide(0);
    $('#4cheeseHide').show(50);
    $('#mozaHide').show(50);
    $('.mozaGroup').hide(0);
    $('#parmHide').show(50);
    $('.parmGroup').hide(0);
    $('#fetaHide').show(50);
    $('.fetaGroup').hide(0);
    $('#bluHide').show(50);
    $('.bluGroup').hide(0);
    $('#chasnykHide').show(50);
    $('.chasnykShow').hide(0);
    price+=price4Chesse;
    $('.total').text('До сплати' + price);
})
$('#4cheeseHide').click(function(){
    $('.4cheeseGroup').show(50);
    $('#4cheeseHide').hide(0);
    $('#mozaHide').hide(0);
    $('.mozaGroup').show(50);
    $('#parmHide').hide(0);
    $('.parmGroup').show(50);
    $('#fetaHide').hide(0);
    $('.fetaGroup').show(50);
    $('#bluHide').hide(0);
    $('.bluGroup').show(50);
    $('#chasnykHide').hide(0);
    $('.chasnykShow').show(50);
    price-=price4Chesse;
    $('.total').text('До сплати' + price);
})



