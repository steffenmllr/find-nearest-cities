const test = require('tape');
const nearestCity = require('.');

test('find-nearest-cities', function (t) {

    t.test('nearest berlin city', function(t) {
        t.plan(2);

        console.time("benchmark");
        const latitude = 52.521919;
        const longitude = 13.413215;
        const cities = nearestCity(latitude, longitude);
        console.timeEnd("benchmark");

        t.equal(cities.length, 5, 'Should find at least 5 cities for Berlin.');
        t.equal(cities[0].id, '2950159', 'Should sort by distance');

    });

    t.test('nearest city for Postdamer Platz', function(t) {
        t.plan(3);

        console.time("benchmark");
        const latitude = 52.509647;
        const longitude = 13.375944;
        const cities = nearestCity(latitude, longitude);
        console.timeEnd("benchmark");
        const city = cities[0]

        t.equal('2822224', city.id, 'Potsdamer Platz (ID) should be the first item');
        t.equal('Tiergarten', city.name, 'Potsdamer Platz (NAME) should be the first item');
        t.equal(1281, city.distance, 'Potsdamer Platz should have a distance of 1281');
    });

    t.test('should accept a maxDistance', function(t) {
        t.plan(1);

        console.time("benchmark");
        const latitude = 52.509647;
        const longitude = 13.375944;
        const maxDistance = 1500;
        const cities = nearestCity(latitude, longitude, maxDistance);
        console.timeEnd("benchmark");

        t.ok(cities.length === 1, 'should find one item');
    });

    t.end();

});
