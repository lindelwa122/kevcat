from django import template

register = template.Library()

@register.filter
def image(url):
    url = url.url
    url_sep = url.split('/')

    if (len(url_sep) == 6):
        return url

    return '/'.join(url_sep[2:])
