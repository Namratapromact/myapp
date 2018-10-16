import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';

export interface Company {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{
 
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  companies: Company[] = [
    {value: 'company1-0', viewValue: 'Company 1'},
    {value: 'company2-1', viewValue: 'Company 2'},
    {value: 'company3-2', viewValue: 'Company 3'}
  ];
    
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 760px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  title = 'admin-panel';
  //  sidenavnames = ['Administrators','Companies','Sign Up Form','Languages','Memebers','Groups','Systems',
  //  'Subjects','Component Manager','Place Type Manager','Theme Manager','Frame Manager','Page Manager','Pulse Metrics','Advertisements','Reporting'];

}
