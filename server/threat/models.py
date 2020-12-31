from django.db import models
import uuid


class Threat(models.Model):
    id = models.UUIDField(default=uuid.uuid4, primary_key=True)
    name = models.CharField(max_length=255)
    label = models.CharField(max_length=255)
    category_id = models.UUIDField()
    user_id = models.UUIDField()
    created_at = models.DateField()
    edited_at = models.DateField()
    coord_lat = models.CharField(max_length=10)
    coord_long = models.CharField(max_length=10)

    class Meta:
        db_table = 'threats'
