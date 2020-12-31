from rest_framework.routers import DefaultRouter

from server.threat.views import ThreatViewSet

router = DefaultRouter()
router.register('', ThreatViewSet)

urlpattern = router.urls
