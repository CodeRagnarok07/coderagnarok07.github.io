from django.urls import include, path

urlpatterns = [
    path("api/", include("domain.api.api_router")),
]
