from django.db import models
from django.conf import settings

user = settings.AUTH_USER_MODEL

class Location(models.Model):
    """
    Location model to store location information
    """
    name = models.CharField(max_length=100, db_index=True)
    country = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return self.name


class TravelKitItem(models.Model):
    """
    TravelKitItem model to store travel kit item information
    """
    CATEGORY_CHOICES = [
        ("clothing", "Clothing"),
        ("gear", "Gear"),
        ("medical", "Medical"),
        ("electronics", "Electronics"),
    ]
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES) 
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to='travelkit_items/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class TravelKit(models.Model):
    """
    TravelKit model to store travel kit information: it maps item and location to show recommendations
    """
    name = models.CharField(max_length=150, db_index=True)
    description = models.TextField()
    price = models.DecimalField(max_digits=8, decimal_places=2)

    locations = models.ManyToManyField(
        Location,
        related_name="travel_kits"
    )

    items = models.ManyToManyField(
        TravelKitItem,
        related_name="kits"
    )

    is_active = models.BooleanField(default=True, db_index=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class UserPersonalizedTravelKit(models.Model):
    """
    UserPersonalizedTravelKit model to store user's personalized travel kit information: user would select from recommended and extra items.
    """
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="personal_travel_kits")
    location = models.ForeignKey("Location", on_delete=models.SET_NULL, null=True, blank=True)
    
    selected_items = models.JSONField(default=list, blank=True)

    is_confirmed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    confirmed_at = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return f"{self.user.email} - {self.location.name if self.location else 'No Location'}"


