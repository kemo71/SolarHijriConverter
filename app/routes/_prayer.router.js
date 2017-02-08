import PrayerTimes from 'prayer-times';
import moment from 'moment';
import { reduce, isEmpty } from 'lodash';

import { getPrayerName } from '../helpers/prayer.helper';

const PT = new PrayerTimes();
PT.setMethod('Makkah');

export default (app, router) => {

	// ### Pray Times API Route
	
	router.route('/prayer')

		// Accessed at GET http://localhost:8080/api/prayer?lat=X&lng=X&elv=X
		// Defaults: Latitude = 24, Longitude = 47, Elevation = 0;
		// Riyadh: 24, 47, 638.
		
		.get((req, res) => {
			let latitude = req.query.lat || 24;
			let longitude = req.query.lng || 47;
			let elevation = req.query.elv || 0;
			var now = moment();
			var times = PT.getTimes(now.toDate(), [latitude, longitude, elevation], 3, 'auto', '24h');
			
			const isha = moment({hour: times.isha.split(':')[0], minute: times.isha.split(':')[1]})
			if (now.isAfter(isha)) {
				now = moment().add(1, 'days').startOf('day');
				times = PT.getTimes(now.toDate(), [latitude, longitude, elevation], 3, 'auto', '24h');
			}
			delete times.sunset;
			delete times.imsak;
			delete times.midnight;
			
			res.json(times);
		});

	router.route('/prayer/next')
		.get((req, res) => {
			let latitude = req.query.lat || 24;
			let longitude = req.query.lng || 47;
			let elevation = req.query.elv || 0;
			var now = moment();

			var times = PT.getTimes(now.toDate(), [latitude, longitude, elevation], 3, 'auto', '24h');
			const isha = moment({hour: times.isha.split(':')[0], minute: times.isha.split(':')[1]})
			if (now.isAfter(isha)) {
				now = moment().add(1, 'days').startOf('day');
				times = PT.getTimes(now.toDate(), [latitude, longitude, elevation], 3, 'auto', '24h');
			}
			delete times.sunset;
			delete times.imsak;
			delete times.midnight;
			// let next = moment({ hour: fajrSplit[0], minute: fajrSplit[1] });
			let next = reduce(times, function(result, value, key) {
				var prevMoment = result.value;
				// value like xx:xx
				let val = value.split(':');
				let prayerMoment = now.clone().set({
					hour: val[0],
					minute: val[1],
				});
				if (now.isBefore(prayerMoment) && now.isSameOrAfter(prevMoment)) {
					result = {
						name: getPrayerName(key),
						value: prayerMoment.format("YYYY-MM-DD HH:mm")
					};
				}
				// console.log(' Prev: ', prevMoment.toString())
				// console.log(key + ': ', prayerMoment.toString())
				// console.log('Now: ', now.toString());
				// console.log("Result: ", result);

				return result;
			}, { name: '', value: now });
			res.json(next);
		});

	
};