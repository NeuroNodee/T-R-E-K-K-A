from django.urls import path
from . import views

urlpatterns = [
    path('AllLocation/', views.getAllLocation, name='getAllLocation'),
    path('AllTravelKitItems/', views.getAllTravelKitItems, name='getAllTravelKitItems'),
    path('AllTravelKitInfo/', views.getAllTravelKitInfo, name='getAllTravelKitInfo'),
    path('TravelKitInfo/', views.getTravelKitInfo, name='getTravelKitInfo'),
    path('TravelKitItemsByLocation/', views.getTravelKitItemsByLocation, name='getTravelKitItemsByLocation'),
    path('TravelKitItemsByName/', views.getTravelKitItemsByName, name='getTravelKitItemsByName'),
]