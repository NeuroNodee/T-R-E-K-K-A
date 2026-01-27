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
def getAllTravelKitInfo(request):
    """Get all travel kit info"""
    travel_kits = TravelKit.objects.all().values()
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

@api_view(['GET'])
@permission_classes([AllowAny])
def getTravelKitItemsByLocation(request):
    """Get specific travel kit items by location, returns list of item in nested dictionary"""
    location = request.GET.get('location')
    if not location:
        return Response({ "message": "Location is required" })
    travel_kit = TravelKit.objects.filter(locations__name=location).first()
    if not travel_kit:
        return Response({ "message": "Travel kit not found" })
    travel_kit_items = travel_kit.items.values()
    return Response({ "message": "Success", "data": list(travel_kit_items) })

@api_view(['GET'])
@permission_classes([AllowAny])
def getTravelKitItemsByName(request):
    name = request.GET.get('name')

    if not name:
        return Response(
            {"message": "Name is required"},
            status=400
        )

    travel_kit_items = TravelKitItem.objects.filter(
        name__icontains=name
    )

    if not travel_kit_items.exists():
        return Response(
            {"message": "Travel kit item not found"},
            status=404
        )

    return Response(
        {
            "message": "Success",
            "data": travel_kit_items.values()
        },
        status=200
    )

    
