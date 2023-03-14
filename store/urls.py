from django.urls import path
from . import views

app_name = 'store'

urlpatterns = [
  path('', views.index, name='index'),
  path('merch', views.merch, name='merch'),
  path('music', views.music, name='music'),
  path('privacy-policy', views.privacy_policy, name='privacy_policy'),
  path('refund-policy', views.refund_policy, name='refund_policy'),
  path('shipping-policy', views.shipping_policy, name='shipping_policy')
]