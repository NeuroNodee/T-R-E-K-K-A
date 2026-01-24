from django.shortcuts import render
from .models import Location, TravelKitItem
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework.decorators import permission_classes

# Create your views here.
@api_view(['GET'])
@permission_classes([AllowAny])
def getAllLocation(request):
    locations = Location.objects.all().values()
    return Response({ "message": "Success", "data": list(locations) })

@api_view(['GET'])
@permission_classes([AllowAny])
def getAllTravelKitItems(request):
    travel_kits = TravelKitItem.objects.all().values()
    return Response({ "message": "Success", "data": list(travel_kits) })


