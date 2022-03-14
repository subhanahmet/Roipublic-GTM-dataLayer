 # Sipariş Takibi & Dönüşüm Kodu
 
 ```javascript
<script>
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  'event': 'transaction',
  'ecommerce': {
    'currency': 'TRY',
    'value': '{total}',
    'tax': '{tax}',
    'shipping': '{cargo}',
    'transaction_id': '{orderId}',
  }
});
</script> 
```

#  Ürün Takip Kodu

 ```javascript
<script>
var valueWithoutTax = Number('{productPrice}')
var valueTax = Number('{productPrice}') * Number('{productTax}') / 100
var value = String(valueWithoutTax + Number(valueTax))
var sumValue = value.split('.')[0] + '.' + value.split('.')[1].slice(0,2)

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'view_item',
    'ecommerce': {
        'items': [{
            'item_id': '{productId}',
            'item_name': '{productName}',
            'currency': 'TRY',
            'item_category': '{productCategory}',
            'price': sumValue,
            'quantity': 1
      }]
    }
});
</script> 
```


# YUKARDAKİ SİPARİŞ KONU SCRİPT BUNULA DEĞİŞECEK.

 ```javascript
<!-- Facebook Pixel Code -->
<script>
var FBurunler = new Array();
var Prices = new Array();
var Ids = new Array();
var Names = new Array();
var Quantity = new Array();
[loop_product]
FBurunler.push("{productId}");
Prices.push("{productPrice}");
Ids.push("{productPrice}");
Names.push("{productPrice}");
Quantity.push("{productPrice}");
[/loop_product]
var FBurunler = JSON.parse('[' + FBurunler.toString() + ']');
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');

fbq('init', '1647040358831492'); 
fbq('track', 'Purchase', { content_type: 'Product', content_ids: FBurunler, value:eval({total}), currency: 'TRY'});
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=1647040358831492&ev=PageView&noscript=1"
/></noscript>
<!-- End Facebook Pixel Code -->
                          
<script> 
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){ (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m) })(window,document,'script','//www.google-analytics.com/analytics.js','ga'); 
ga('create', 'UA-154428702-1', 'auto'); 
ga('require', 'ecommerce'); 
ga('ecommerce:addTransaction', { 'id': '{orderId}', 'affiliation': '{companyName}', 'revenue': '{total}', 'shipping': '{cargo}', 'tax': '{tax}' }); 
ga('ecommerce:addItem', { 'id': '{orderId}', 'name': '{productName}', 'sku': '{productId}', 'category': '{variant}', 'price': '{productPrice}', 'quantity': '{productAmount}' }); ga('ecommerce:send'); 
</script>

<script>

var products = [];

for (var i = 0; i < FBurunler.length; i++) {
    products.push({
        'item_name': Names[i],
        'item_id': Ids[i],
        'price': Prices[i],
        'quantity': Quantity[i]
      });
    
}

window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  'event': 'purchase',
  'transaction_id': '{orderId}',
   'currency': 'TRY',
    'value': '{total}',
    'tax': '{tax}',
    'shipping': '{cargo}',
    'items': products
});
</script>
```

DÜZENLENECEK - Sepete kelemede iki türlü element visiblty var. Kalıcı Pop-up için CSS. div.shopping-information-cart, gelip giden pop-up için ID cart-popup-container

