from rest_framework import serializers
from .models import *
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password
class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ('user','profile_pic', 'address','mobile')
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('name', 'product_image', 'description')
class OrdersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Orders
        fields = ('customer','product','email','address','mobile','order_date','status')
class InventorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Inventory
        fields = ('name','cost_per_item', 'quantity_in_stock', 'quantity_sold', 'sales', 'stock_date','last_sales_date')
class PriceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Price
        fields = ('firstupperrange', 'firstlowerrange', 'secondupperrange', 'secondlowerrange', 'thirdupperrange', 'thirdlowerrange', 'firstprice', 'secondprice', 'thirdprice')
class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = ('order_id', 'quantity')
class RegisterSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
            required=True,
            validators=[UniqueValidator(queryset=User.objects.all())]
            )
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)
    class Meta:
        model = User
        fields = ('username', 'password', 'password2', 'email', 'first_name', 'last_name')
        extra_kwargs = {
            'first_name': {'required': True},
            'last_name': {'required': True}
        }
    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Password fields didn't match."})
        return attrs
    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            # address=validated_data['address'],
            # contact=validated_data['contact']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user