from random import shuffle

from django.shortcuts import render

from .models import *

# Create your views here.
def index(request):
  caps = Product.objects.filter(category='caps')[:2]
  hoodies = Product.objects.filter(category='hoodies')[:2]
  tshirts = Product.objects.filter(category='tshirts')[:4]
  products = list(caps) + list(hoodies) + list(tshirts)
  shuffle(products)
  return render(request, 'store/index.html', {
    'products': products
  })

def merch(request):
  products = Product.objects.all()
  return render(request, 'store/merch.html', {
    'beanies': [product for product in products if product.category == 'beanies'],
    'caps': [product for product in products if product.category == 'caps'],
    'hoodies': [product for product in products if product.category == 'hoodies'],
    'sweaters': [product for product in products if product.category == 'sweaters'],
    'tshirts': [product for product in products if product.category == 'tshirts']
  })

def music(request):
  return render(request, 'store/music.html')

def privacy_policy(request):
  return render(request, 'store/privacy_policy.html')

def refund_policy(request):
  return render(request, 'store/refund_policy.html')

def shipping_policy(request):
  return render(request, 'store/shipping_policy.html')
