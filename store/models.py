from django.db import models

class Product(models.Model):
  CATEGORIES = [
    ('beanies', 'Beanies'),
    ('caps', 'Caps'),
    ('hoodies', 'Hoodies'),
    ('sweaters', 'Sweaters'),
    ('tshirts', 'T-Shirts')
  ]
  

  name = models.CharField(max_length=50, default='KevCat merch')
  image = models.ImageField(upload_to='./store/static/store/images/products')
  price = models.FloatField()
  category = models.CharField(max_length=20, choices=CATEGORIES)

  def __str__(self):
    return f'{self.name} ({self.category})'