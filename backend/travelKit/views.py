from django.shortcuts import render
from .models import Location, TravelKitItem, TravelKit
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework.decorators import permission_classes

# Create your views here.
@api_view(['GET'])
@permission_classes([AllowAny])
def getAllLocation(request):
    """Get all locations"""
    locations = Location.objects.all().values()
    return Response({ "message": "Success", "data": list(locations) })

@api_view(['GET'])
@permission_classes([AllowAny])
def getAllTravelKitItems(request):
    """Get all travel kit items"""
    travel_kits = TravelKitItem.objects.all().values()
    return Response({ "message": "Success", "data": list(travel_kits) })

@api_view(['GET'])
@permission_classes([AllowAny])
def getTravelKitInfo(request):
    """Get specific travel kit info by location"""
    location = request.GET.get('location')
    if not location:
        return Response({ "message": "Location is required" })
    travel_kit = TravelKit.objects.filter(locations__name=location).values()
    return Response({ "message": "Success", "data": list(travel_kit) })