# find-nearest-cities

Searches the nearest *cities*, using [geokdbush](https://github.com/mourner/geokdbush). Data taken from [cities1000 at geonames.org](http://download.geonames.org/export/dump/)

[![build status](https://img.shields.io/travis/steffenmllr/find-nearest-cities.svg)](https://travis-ci.org/steffenmllr/find-nearest-cities)
[![npm version](https://img.shields.io/npm/v/find-nearest-cities.svg)](https://www.npmjs.com/package/find-nearest-cities)
![ISC-licensed](https://img.shields.io/github/license/steffenmllr/find-nearest-cities.svg)


## Installing

```shell
npm install find-nearest-cities
```


## Usage

```js
const nearestStations = require('find-nearest-cities')

const latitude = 52.509647;
const longitude = 13.375944;

const cities = nearestCities(latitude, longitude);

// [{
//    id: '2822224',
//    name: 'Tiergarten',
//    asciiname: 'Tiergarten Bezirk',
//    alternativeNames: ['Berlin-Tiergarten',
//       'Tirgarten',
//       'Tyrgartehn',
//       'di er jia teng',
//       'Тиргартен',
//       'Тыргартэн',
//       'טירגארטן',
//       '蒂尔加滕'
//    ],
//    lat: 52.51667,
//    lon: 13.36667,
//    featureClass: 'P',
//    featureCode: 'PPLX',
//    country: 'DE',
//    altCountry: '',
//    adminCode: '16',
//    countrySubdivision: '00',
//    municipality: '11000',
//    municipalitySubdivision: '11000000',
//    population: 12328,
//    dem: '36',
//    tz: 'Europe/Berlin',
//    lastModified: '2012-06-09',
//    distance: 1281
// }]

```
---

## API

#### nearestCities(longitude, latitude[, maxDistance, maxResults])

Returns an array of the closest points from a given location in order of increasing distance.

- `longitude`: query point longitude.
- `latitude`: query point latitude.
- `maxDistance`: (optional) maximum distance in meters to search within (`Infinity` by default).
- `maxResults`: (optional) maximum number of points to return (`5` by default).


## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/steffenmllr/find-nearest-cities/issues).


## Data License

[The Dataset](http://download.geonames.org/export/dump/) is published under [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/) by *geonames.org*.
