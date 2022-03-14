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

