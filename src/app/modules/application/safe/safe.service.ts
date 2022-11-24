import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Safe } from 'src/app/models/safe.model';

@Injectable({
  providedIn: 'root',
})
export class SafeService {
  safeUrl= 'http://localhost:8080/safes'
  
  constructor(private http: HttpClient) {}

  public GetSafes(): Observable<Safe[]> {
    let base64encodedData = Buffer.from('antoine' + ':' + '123456').toString(
      'base64'
    );
    return this.http.get<Safe[]>('http://localhost:8080/safes', {
      headers: {
        Authorization: 'Basic ' + base64encodedData,
      },
    });
  }

  public save(safe: Safe) {
    let base64encodedData = Buffer.from('antoine' + ':' + '123456').toString(
      'base64'
    );
    console.log("aaaaaa", safe)
    return this.http.post<Safe>('http://localhost:8080/safe/1', safe, {
      headers: {
        Authorization: 'Basic ' + base64encodedData,
      },
          });
  }

  public DeleteSafes(safeid: String): Observable<number> {
    let base64encodedData = Buffer.from('julien' + ':' + '123456').toString(
      'base64'
    );
    return this.http.delete<number>(this.safeUrl+"/"+safeid, {
      headers: {
        Authorization: 'Basic ' + base64encodedData,
      },
    });
  }

}
