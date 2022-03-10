# Roipublic Performance Ajansı

![Logo](https://s3-eu-central-1.amazonaws.com/roipublic.com/wp-content/uploads/2020/03/13230345/Roipublic-Black.png)

#  Google Analytics DataLayer Kurulumu Dokümantasyonu
 
Bu belgenin amacı, E-Ticaret siteniz için kullanıcı davranışını ve ürün/hizmet satışlarının ve kullanıcı eylemlerinin Google Analytics GA4’e gönderilmesini sağlamak için gerekli kodları entegre etmeye yardımcı olmaktır.
 
 
## 1. Gelişmiş E-ticaret


dataLayer.push({
    'event': 'addToCart',
    'ecommerce': {
        'currencyCode': 'EUR',
        'add': { // 'add' actionFieldObject measures.
            'products': [{ //  adding a product to a shopping cart.
                'name': 'Triblend Android T-Shirt',
                'id': '12345',
                'price': '15.25',
                'brand': 'Google',
                'category': 'Apparel',
                'variant': 'Gray',
                'quantity': 1
            }]
        },
        'items': [{
            'item_id': "SKU_12345",
        }]
    }
});
