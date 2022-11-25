import { Component } from '@angular/core';
import { SafeService } from '../service/safe.service';
import { Safe } from '../models/safe.model';

@Component({
  selector: 'app-get-post-delete',
  templateUrl: './get-post-delete.component.html',
  styleUrls: ['./get-post-delete.component.css']
})

export class GetPostDeleteComponent  {
  title = 'Coffre-Fort';
safes: Safe[] | undefined;
safe: Safe;


constructor(private SafeService : SafeService){this.safe = new Safe();}

onSubmit() {
 
  this.SafeService.save(this.safe).subscribe((res) => {
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
onDelete(id:string){
  this.SafeService.deleteById(id).subscribe(data => {
    this.SafeService.GetSafes().subscribe(data => {
      this.safes = data;
    })
})
}
}
