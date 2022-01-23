import { Component } from '@angular/core';
import { TouchSequence } from 'selenium-webdriver';
import { DataService } from '../api/data.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  listData = [];
  myFavorite = '';
  constructor(private dataService: DataService) {
    this.loadData();
  }

  async loadData(){
    //  = await this.dataService.getData();
    this.dataService.getData().subscribe(res => {
      this.listData = res;
    });
  }

  //uprava dat
  async addData() {
    if(this.myFavorite != null){
    await this.dataService.addData(this.myFavorite);
    this.loadData();
    }
    else{
      console.log("Incorrect")
    }
  }

  async removeItem(index){
    this.dataService.removeItem(index);
    this.listData.splice(index, 1);
  }

}
