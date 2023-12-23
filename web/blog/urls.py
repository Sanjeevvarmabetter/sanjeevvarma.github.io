from . import views
from django.urls import path
from .views import front_page

urlpatterns = [
    path('', front_page, name='front_page'),
    path('', views.PostList.as_view(), name='home'),
    path('<slug:slug>/', views.PostDetail.as_view(), name='post_detail'),
]


