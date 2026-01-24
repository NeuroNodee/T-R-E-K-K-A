from django.urls import path
from . import views

urlpatterns = [
    path('AllLocation/', views.getAllLocation, name='getAllLocation'),
    path('AllTravelKitItems/', views.getAllTravelKitItems, name='getAllTravelKitItems'),
]