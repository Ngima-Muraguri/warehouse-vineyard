from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Price, Product, Orders, Customer, Inventory, OrderItem

# Register your models here.
admin.site.register(Product)
admin.site.register(Orders)
admin.site.register(Customer)
admin.site.register(Inventory)
admin.site.register(Price)
admin.site.register(OrderItem)
