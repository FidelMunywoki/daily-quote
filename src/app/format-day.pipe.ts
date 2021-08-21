import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDay'
})
export class FormatDayPipe implements PipeTransform {

  transform(numberOfDays: any): string {
    var years = Math.floor(numberOfDays/365);
    var months = Math.floor(numberOfDays %365 /30);
    var days = Math.floor(numberOfDays % 365 % 30);

    var displayYears = years > 0 ? years + (years == 1 ? "year, ": "years, ") : "";
    var displayMonths = months > 0 ? months + (months == 1 ? " month, " : " months, ") : "";
    var displayDays = days > 0 ? days + (days == 1 ? " day" : " days") : "";
    return displayYears + displayMonths + displayDays;
    
  }

}
