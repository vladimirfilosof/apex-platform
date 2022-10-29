from datetime import datetime

from django.db import models

from apex import settings


class Product(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    for_project = models.ForeignKey('Project', on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.for_project} - {self.user}"


class Project(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField()
    price = models.CharField(max_length=255)
    selected_work = models.ForeignKey(Product, on_delete=models.SET_NULL, blank=True, null=True)
    image = models.ImageField(upload_to='project/', null=True, blank=True)

    start_vote_date = models.DateTimeField(default=datetime.now())
    finish_vote_date = models.DateTimeField(default=datetime.now())

    def __str__(self):
        return self.title


class ProductFiles(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name="files")
    file = models.FileField(upload_to="product/")


class Vote(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='votes')
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.product} - {self.user}"
