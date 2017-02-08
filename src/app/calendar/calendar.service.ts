import { Injectable } from '@angular/core';
import {Http, Headers, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/Rx';
import { Calendar } from './calendar.model'
@Injectable()
export class CalendarService {
	
	constructor(public http: Http) {

	}
    getTodayCalendar() {
		return this.http.get('/api/calendar')
		          .map(res => res.json());
	}
	getTodayCalendarByHijriDate(HD: number = 1, HM: number = 1,HY: number = 1318) {//TODO change this to take today's gregorian day month and year then displays equivalent Hijri and Solar hijri
  		let params = new URLSearchParams();
		params.set('HD', HD.toString());
  		params.set('HM', HM.toString());
  		params.set('HY', HY.toString());

		return this.http.get('/api/calendar', { search: params })
		          .map(res => res.json());
	}

    getTodayCalendarByGregorianDate(GD: number = 30, GM: number =4,GY: number =1900) {
  		let params = new URLSearchParams();
		params.set('GD', GD.toString());
  		params.set('GM', GM.toString());
  		params.set('GY', GY.toString());

		return this.http.get('/api/calendar', { search: params })
		          .map(res => res.json());
	}

    getTodayCalendarBySolarHijriDate(SHD: number = 10, SHM: number = 8,SHY: number = 1278) {
  		let params = new URLSearchParams();
		params.set('SHD', SHD.toString());
  		params.set('SHM', SHM.toString());
  		params.set('SHY', SHY.toString());

		return this.http.get('/api/calendar', { search: params })
		          .map(res => res.json());
	}

	// getCalendar(): Observable<any> {
    //     return this.http.get('http://localhost:3000/calendar')
    //         .map( (data: Response) => {
    //             const extracted = data.json();
    //             const msgArray: Calendar[] = [];
    //             let calendar;
    //             for (let element of extracted.data) {
    //                 calendar = new Calendar(element.WK, element.HD,element.HM, element.HY , element.GD, element.GM, element.GY, element.SHD, element.SHM, element.SHY);
    //                 msgArray.push(calendar);
    //             }
    //             return msgArray;
    //         });
    // }

}