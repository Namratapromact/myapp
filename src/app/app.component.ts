import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';

/*Header Select Dropdown */
export interface Company {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

   /*Sidenav responsive */
    mobileQuery: MediaQueryList;

    private _mobileQueryListener: () => void;

/*Header Select Dropdown */
  companies: Company[] = [
    {value: 'company1-0', viewValue: 'Company 1'},
    {value: 'company2-1', viewValue: 'Company 2'},
    {value: 'company3-2', viewValue: 'Company 3'}
  ];
    

  /*Sidenav responsive */
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 760px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  title = 'admin-panel';

}
