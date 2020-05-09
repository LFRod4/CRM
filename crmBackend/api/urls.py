from django.contrib import admin
from django.urls import path, include
from .views import LeadListAPIView, CreateUserAPIView

urlpatterns = [
    path('leads/', LeadListAPIView.as_view(), name="lead-list"),
    path('create/', CreateUserAPIView.as_view(), name="create-user")
]
