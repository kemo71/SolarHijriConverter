import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CalendarService } from './calendar.service';
import { Calendar } from './calendar.model';

import * as moment from 'moment';
@Component({
	selector: 'calendar-selector',
	providers: [CalendarService],
	styleUrls: ['./calendar.scss'],
	templateUrl: './calendar.component.html',
})
export class CalendarComponent implements OnInit {
	
	public myTodayCalendar: Calendar;
	public myHijriCalendar: Calendar;
    public myGregorianCalendar: Calendar;
	public mySolarHijriCalendar: Calendar;

	public currentDate: string = moment().format('dddd DD MMMM YYYY الساعة hh:mm:ss A');	
	
	private prayers: any;

	constructor(public calendarService: CalendarService) {
		
		// prayerTimeService.getPrayerTimeForToday()
		// 	.subscribe((res) => {
		// 		this.prayers = res;
		// 	});
	}

	ngOnInit() {
		
		this.calendarService.getTodayCalendar().subscribe(
			calendars => this.myTodayCalendar = calendars,
			error => console.error(error)
		);
	
// 		this.calendarService.getTodayCalendar().subscribe(
// 			calendars => this.myCalendar = calendars,
// 			error => console.error(error)
// 		);
// 		this.calendarService.getTodayCalendarByHijriDate().subscribe(
// 			calendars => this.myHijriCalendar = calendars,
// 			error => console.error(error)
// 		);
// 		this.calendarService.getTodayCalendarByGregorianDate().subscribe(
// 			calendars => this.myGregorianCalendar = calendars,
// 			error => console.error(error)
// 		);
// 		this.calendarService.getTodayCalendarBySolarHijriDate().subscribe(
// 			calendars => this.mySolarHijriCalendar = calendars,
// 			error => console.error(error)
// 		);
 }

	
	getTodayCalendar() {
		this.calendarService.getTodayCalendar().subscribe(
			calendars => this.myTodayCalendar = calendars,
			error => console.error(error)
		);
	}
	
	getByHijri(d,m,y) {
		this.calendarService.getTodayCalendarByHijriDate(d,m,y).subscribe(
			calendars => this.myHijriCalendar = calendars,
			error => console.error(error)
		);
	}

	getByGregorian(d,m,y) {
		this.calendarService.getTodayCalendarByGregorianDate(d,m,y).subscribe(
			calendars => this.myGregorianCalendar = calendars,
			error => console.error(error)
		);
	}

	getBySolarHijri(d,m,y) {
		this.calendarService.getTodayCalendarBySolarHijriDate(d,m,y).subscribe(
			calendars => this.mySolarHijriCalendar = calendars,
			error => console.error(error)
		);
	}



}

	// toReadableDate(time: string) : string {
	// 	let split = time.split(':');
	// 	moment.locale('ar-SA'); 
	// 	return moment({hour: split[0], minute: split[1] }).format("hh:mm A");
	// }

	// - Fired when the timer starts..

	// timeStart($event) {
	// 	if (!$event.name) $event.name = '';

	// 	this.prayerAnnouncement = 'تبقى على ' + $event.name;
	// }

	// - Fired when the timer ends.

	// timeEnd($event) {
	// 	if (!$event.name) $event.name = '';

	// 	this.prayerAnnouncement = 'حان الآن موعد '+ $event.name + ' حسب توقيت مدينة الرياض';
		
	// 	//if(this.athanAudio.duration > 0 && !this.athanAudio.paused)
	// 	this.athanAudio.play();

	// 	this.prayerTimeService.getPrayerTimeForToday()
	// 		.subscribe((res) => {
	// 			this.prayers = res;
	// 		});
	// }

	// public myCalendar: Calendar("Monday",10,8,1318,30,4,1900,1,1,1278);
	// public myHijriCalendar: Calendar("Monday",10,8,1318,30,4,1900,1,1,1278);
    // public myGregorianCalendar: Calendar("Monday",10,8,1318,30,4,1900,1,1,1278);
	// public mySolarHijriCalendar: Calendar("Monday",10,8,1318,30,4,1900,1,1,1278);