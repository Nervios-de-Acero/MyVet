import stripe


# global
stripe.api_key = "sk_test_4eC39HqLyjWDarjtT1zdp7dc"

print(stripe.Customer.list())

# funcion para obtener los datos del cliente, recibe dos argumentos id_cliente y la api_key (definida arriba)
#print(stripe.Customer.retrieve('cus_O8yKm0CKlPwlnb')) la api_key es opcional, recibimos un json, parsear
