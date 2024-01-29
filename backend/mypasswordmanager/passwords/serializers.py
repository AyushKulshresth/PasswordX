from rest_framework import serializers
from .models import Customer, Pass

class PassSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pass
        fields = '__all__'

class CustomerSerializer(serializers.ModelSerializer):
    # passes = PassSerializer(many = True, required = False)

    class Meta:
        model = Customer
        fields = '__all__'