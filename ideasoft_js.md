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

DÜZENLENECEK - Sepete kelemede iki türlü element visiblty var. Kalıcı Pop-up için CSS. div.shopping-information-cart, gelip giden pop-up için ID cart-popup-container

