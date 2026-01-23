from django.contrib import admin
from .models import (
    Location,
    TravelKitItem,
    TravelKit,
    UserPersonalizedTravelKit
)

admin.site.register(Location)
admin.site.register(TravelKitItem)
admin.site.register(TravelKit)
admin.site.register(UserPersonalizedTravelKit)
