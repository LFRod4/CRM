from django.shortcuts import render
from .serializers import UserSerializer, LeadSerializer
from .models import User, Lead

from rest_framework.response import Response
from rest_framework.generics import ListAPIView, CreateAPIView
# Create your views here.



class LeadListAPIView(ListAPIView):
    queryset = Lead.objects.all()

    def get(self, request, user=None):
        leads = Lead.objects.filter(user=1)
        data = LeadSerializer(leads, many=True).data
        return Response(data)
      
class CreateUserAPIView(CreateAPIView):
     queryset = User.objects.all()
     serializer_class = UserSerializer   

     
