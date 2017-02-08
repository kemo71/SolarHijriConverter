import moment from 'moment';
var Calendar = require('../../models/calendar');
export default (app, router) => {
	// ### Pray Times API Route
	router.route('/calendar')
		// Accessed at GET http://localhost:8080/api/calendar?HD=X&HM=X&HY=X
		// Defaults: Latitude = 24, Longitude = 47, Elevation = 0;	
		.get((req, res) => {

			// let hijriDay = req.query.HD || 17;
			// let hijriMonth = req.query.HM || 1;
			// let hijriYear = req.query.HY || 1318;

			// let gregorianDay = req.query.GD || 30;
			// let gregorianMonth = req.query.GM || 4;
			// let gregorianYear = req.query.GY || 1900;

			// let solarHijriDay = req.query.SHD || 10;
			// let solarHijriMonth = req.query.SHM || 8;
			// let solarHijriYear = req.query.SHY || 1278;
			
			//console.log(req.query.HD,req.query.HM,req.query.HY,req.query.GD,req.query.GM,req.query.GY,req.query.SHD,req.query.SHM,req.query.SHY)
			
			//BY H
			if( (req.query.HD != undefined) && (req.query.HM != undefined) && (req.query.HY != undefined) ){
			console.log("inside H find");
			Calendar.find({"HD":req.query.HD,"HM":req.query.HM,"HY":req.query.HY},{"_id":false,"WD":true,"HD":true,"HM":true,"HY":true,"GD":true,"GM":true,"GY":true,"SHD":true,"SHM":true,"SHY":true},(err,calendar)=>{
					if(err)
						res.json(err);
					else	
						res.json(calendar);
			} );}
			//BY G
			else if( (req.query.GD != undefined) && (req.query.GM != undefined) && (req.query.GY != undefined) ){
			console.log("inside G find");
			Calendar.find({"GD":req.query.GD,"GM":req.query.GM,"GY":req.query.GY},{"_id":false,"WD":true,"HD":true,"HM":true,"HY":true,"GD":true,"GM":true,"GY":true,"SHD":true,"SHM":true,"SHY":true},(err,calendar)=>{
					if(err)
						res.json(err);
					else	
						res.json(calendar);
			} );}
			//BY SH
			else if( (req.query.SHD != undefined) && (req.query.SHM != undefined) && (req.query.SHY != undefined) ){
			console.log("inside SH find");
			Calendar.find({"SHD":req.query.SHD,"SHM":req.query.SHM,"SHY":req.query.SHY},{"_id":false,"WD":true,"HD":true,"HM":true,"HY":true,"GD":true,"GM":true,"GY":true,"SHD":true,"SHM":true,"SHY":true},(err,calendar)=>{
					if(err)
						res.json(err);
					else	
						res.json(calendar);
			} );}
			//BY today
			else{
			var now = moment();
			var dayGregorian = now.date();
			var monthGregorian = now.month()+1;
			var yearGregorian = now.year();
			console.log("inside TODAY find");
			Calendar.find({"GD":dayGregorian,"GM":monthGregorian,"GY":yearGregorian},{"_id":false,"WD":true,"HD":true,"HM":true,"HY":true,"GD":true,"GM":true,"GY":true,"SHD":true,"SHM":true,"SHY":true},(err,calendar)=>{
					if(err)
						res.json(err);
					else	
						res.json(calendar);
			} );
			}
			//console.log("no condition matched");
		});	
};