import { Component } from '@angular/core';
import { SafeService } from './modules/application/safe/safe.service';
import { Safe } from './models/safe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Coffre-Fort';
safes: Safe[] | undefined;
safe: Safe;
constructor(private SafeService : SafeService){this.safe = new Safe();}

onSubmit() {
 
  this.SafeService.save(this.safe).subscribe((response) => {
    this.SafeService.GetSafes().subscribe(data => {
      this.safes = data;
    })
  });
}

ngOnInit() {
  this.SafeService.GetSafes().subscribe(data => {
    this.safes = data;
  })
}

}

