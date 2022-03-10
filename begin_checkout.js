var itemsGA4;
var itemsUA
var toplam = 0
var currency = ""
var step;
var option;

for (let i = 0; i < dataLayer.length; i++) {
    if (dataLayer[i][1] == 'begin_checkout') {
        if (typeof (dataLayer[i][2].value) == 'string') {
            itemsGA4 = dataLayer[i][2].items
            currency = dataLayer[i][2].currency
            for (let a = 0; a < dataLayer[i][2].items.length; a++) {
                toplam += (Number(dataLayer[i][2].items[a].price) * dataLayer[i][2].items[a].quantity)
            }
        }   
    }
}
toplam = toplam.toFixed(2)
itemsGA4

window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
    'event': 'beginChekoutGA4',
    'currency': currency,
    'value': toplam,
    'items': itemsGA4
})

for (let i = 0; i < dataLayer.length; i++) {
    if (dataLayer[i][1] == 'begin_checkout') {
        if (typeof (dataLayer[i][2].value) != 'string') {
            itemsUA = dataLayer[i][2].items
        }
    }
}

for (let i = 0; i < dataLayer.length; i++) {
    if (dataLayer[i][1] == 'set_checkout_option') {
        step = dataLayer[i][2].checkout_step
        option = dataLayer[i][2].checkout_option
    }
}

window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
    'event': 'beginChekoutUA',
    'ecommerce': {
      'checkout': {
        'actionField': {'step': step, 'option': option},
        'products': itemsUA
     }
   }
})



for (let i = 0; i < dataLayer.length; i++) {
    if (dataLayer[i][1] == 'begin_checkout') {
        if (typeof (dataLayer[i][2].value) == 'string') {

            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                'event': 'product_details',
                'ecommerce': {
                    'currencyCode': currency,
                    'add': {
                        'products': [{
                            'name': name,
                            'id': sku,
                            'price': price,
                            'brand': brand,
                            'category': 'Apparel',
                            'variant': hasVariant,
                            'quantity': 1
                        }]
                    },
                    'value': dataLayer[i][2].value,
                    'items': dataLayer[i][2].items

                }
            })
        }
    }
}