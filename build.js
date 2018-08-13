const fs = require('fs');
const split2 = require('split2');
const JSONStream = require('JSONStream');
const through = require('through2')

const fields = [
    'id',
    'name',
    'asciiname',
    'alternativeNames',
    'lat',
    'lon',
    'featureClass',
    'featureCode',
    'country',
    'altCountry',
    'adminCode',
    'countrySubdivision',
    'municipality',
    'municipalitySubdivision',
    'population',
    'elevation',
    'dem',
    'tz',
    'lastModified'
];

const rowStream = through.obj(function (line, enc, cb) {
    const row = line.toString().split('\t').reduce((acc, x, ix) => {
        const key = fields[ix]
        if (key === 'alternativeNames') x = x.split(',');
        if (key === 'lat' || key === 'lon') x = parseFloat(x);
        if (key === 'elevation') x = x ? parseInt(x, 10) : undefined
        if (key === 'population') x = x ? parseInt(x, 10) : undefined

        acc[key] = x
        return acc
    }, {})

    if (!row.id) return
    this.push(row)

    cb();
})

fs.createReadStream('./cities1000.txt')
  .pipe(split2())
  .pipe(rowStream)
  .pipe(JSONStream.stringify())
  .pipe(fs.createWriteStream( __dirname + '/cities1000.json' ))
  .on('error', console.error);



