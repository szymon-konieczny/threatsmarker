from rest_framework.viewset import ModelViewSet
from rest_framework import serializers

from threat.models import Threat


class StrategySerializer(serializers.ModelSerializer):
    class Meta:
        model = Threat
        fields = ['id', 'name', 'label', 'category_id', 'user_id',
                  'created_at', 'edited_at', 'coord_lat', 'coord_long']


class ThreatViewSet(ModelViewSet):
    queryset = Threat.objects.all()
    serializer_class = StrategySerializer
