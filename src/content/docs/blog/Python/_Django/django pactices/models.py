from django.core.exceptions import ValidationError
from django.db import models


class Customer(models.Model):
    # No need to update these
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    company = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    title = models.CharField(max_length=100)

    # TODO: HERE
    gender = models.CharField(max_length=100)
    email = models.EmailField(max_length=200)
    lat = models.FloatField()
    lng = models.FloatField()

    def clean(self):
        # Make sure both (lat, lng) are set or neither.
        coords = [self.lat, self.lng]
        if any(coords) and not all(coords):
            raise ValidationError("Cannot insert partial coordinates.")
        super().clean()  # no-op for models.Model inheritance.
