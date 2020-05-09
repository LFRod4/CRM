from rest_framework import serializers
from . import models

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.User
        fields = ('id', 'first_name', 'last_name', 'email', 'signed_up')

class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Lead
        fields = ('__all__')
