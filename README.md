# nuxt-seo-test

Simple client side webapp to test how seo friendly a server side rendered nuxt app can be.

## Requirements

- dynamic title and description headers are read
- dynamic open graph headers can be read
- page data from async requests is indexed
- sitemap can be traversed

### Validation

- https://developers.facebook.com/tools/debug/
- https://cards-dev.twitter.com/validator

### SEO test sites

- https://www.seobility.net/en/seocheck/
- https://seositecheckup.com/

### Page speed insights

- https://developers.google.com/speed/pagespeed/insights/
- https://www.webpagetest.org/

## Build Setup

``` bash
# install dependencies
$ npm install

# copy in config
$ cp .env.example .env

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
