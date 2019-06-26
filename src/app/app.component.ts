import { Component } from '@angular/core';
import { ApiService } from './api.service';
import {TestData} from './models/testData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public testData: TestData;

  title = 'Demo';

  constructor(private apiService: ApiService){

  }

  ngOnInit() {
    this.apiService.getAllData().subscribe(
      data => this.testData = data,
      err => console.log(err),
      () => console.log("completed")
    );
  }
}
