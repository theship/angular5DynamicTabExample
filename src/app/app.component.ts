import {Component, ViewChild} from '@angular/core';
import {TabsComponent} from "./tabs/tabs.component";
import {HelloComponent} from "./hello.component";
import {SimpleTitleComponent} from "./tabs/content/simple-title/simple-title.component";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public tabs=[];
  public index:number=0;
  @ViewChild(HelloComponent) helloComponent;
  @ViewChild(SimpleTitleComponent) simpleTitleComponent;

  public dec() {
    if(this.tabs.length >0) {
      this.tabs.splice(--this.index, 1);
    }
  }

  public inc() {
    this.tabs.push({ title: 'Tab' + this.tabs.length, component:SimpleTitleComponent });
  }
}