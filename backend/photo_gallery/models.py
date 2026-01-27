from django.db import models
from django.contrib.auth import get_user_model
from django.core.validators import FileExtensionValidator

User = get_user_model()

class PhotoGallery(models.Model):
    """
    Model to store user-uploaded photos with location information.
    Each photo is linked to a user and associated with a specific location.
    """

    LOCATION_CHOICES = (
        ('Kathmandu', 'Kathmandu'),
        ('Pokhara', 'Pokhara'),
        ('Janaki', 'Janaki'),
        ('Lumbini', 'Lumbini'),
        ('Bhaktapur', 'Bhaktapur'),
        ('Dhaulagiri', 'Dhaulagiri'),
        ('Gaurishankar', 'Gaurishankar'),
        ('Annapurna', 'Annapurna'),
        ('EverestRegion', 'Everest Region'),
        ('LangtangNationalPark', 'Langtang National Park'),
        ('Ghorepani', 'Ghorepani'),
        ('Ghandruk', 'Ghandruk'),
        ('GosaikundaLake', 'Gosaikunda Lake'),
        ('Machhapuchhre', 'Machhapuchhre'),
        ('Khaptad', 'Khaptad'),
        ('KoshiTappu', 'Koshi Tappu'),
        ('Rara', 'Rara'),
        ('Shey', 'Shey'),
        ('SheyLake', 'Shey Lake'),
        ('Bardia', 'Bardia'),
        ('Dharan', 'Dharan'),
        ('Illam', 'Illam'),
        ('Lalitpur', 'Lalitpur'),
        ('Other', 'Other'),
    )

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='photos')

    image = models.ImageField(
        upload_to='travelkit_items/%Y/%m/%d/',
        validators=[FileExtensionValidator(allowed_extensions=['jpg', 'jpeg', 'png', 'gif', 'webp'])]
    )

    location = models.CharField(max_length=50, choices=LOCATION_CHOICES, default='Other')
    title = models.CharField(max_length=200, blank=True, null=True)
    description = models.TextField(blank=True, null=True)

    uploaded_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-uploaded_at']
        verbose_name = 'Photo Gallery'
        verbose_name_plural = 'Photo Galleries'

    def __str__(self):
        return f"{self.user.email}'s photo - {self.location}"

    @property
    def get_image_url(self):
        if self.image:
            return self.image.url
        return None
