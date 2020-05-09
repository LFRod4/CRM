from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

class User(models.Model):
    id = models.AutoField(primary_key=True)
    signed_up = models.DateTimeField(default=timezone.now)

    email = models.EmailField(verbose_name='email',
                              max_length=255, unique=True)
    REQUIRED_FIELDS = ['username', 'first_name', 'last_name']
    USERNAME_FIELD = 'email'

    def __str__(self):
        return self.first_name

class Lead(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    lead_first_name = models.CharField(max_length=125)
    lead_last_name = models.CharField(max_length=125)
    email = models.CharField(max_length=125)
    phone = models.IntegerField()
    source = models.CharField(max_length=125)

    def __str__(self):
        return self.email
