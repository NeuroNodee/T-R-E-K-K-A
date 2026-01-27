from django.contrib import admin
from django.utils.html import format_html
from .models import PhotoGallery


@admin.register(PhotoGallery)
class PhotoGalleryAdmin(admin.ModelAdmin):
    """Admin interface for PhotoGallery model."""

    list_display = ('user', 'location', 'title', 'uploaded_at', 'image_preview')
    list_filter = ('location', 'uploaded_at', 'user')
    search_fields = ('title', 'description', 'user__email')
    readonly_fields = ('uploaded_at', 'updated_at', 'image_preview')

    fieldsets = (
        ('User & Image', {
            'fields': ('user', 'image', 'image_preview')
        }),
        ('Details', {
            'fields': ('location', 'title', 'description')
        }),
        ('Timestamps', {
            'fields': ('uploaded_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )

    def image_preview(self, obj):
        if obj.image:
            return format_html('<img src="{}" width="100" height="100" />', obj.image.url)
        return "No image"

    image_preview.short_description = 'Preview'
