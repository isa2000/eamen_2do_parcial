import { Injectable } from '@angular/core';
import { url } from '../app.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFlight } from '../interfaces/IFlight';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  ingresarCliente(body:any): Observable<any>{
    return this.http.post<any>(`${url}crear/flight`,body);
  }

  obtenerClientes():Observable<any>{
    return this.http.get<any>(`${url}ver/flight`)
  }



  eliminarCliente(id:any):Observable<any>{
    return this.http.delete<any>(`${url}eliminar/flight/${id}`)
  }

}
