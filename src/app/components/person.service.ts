import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from './person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private apiUrl = 'https://person-manage.onrender.com/person'; // Replace with actual API

  constructor(private http: HttpClient) {}

  getPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(this.apiUrl);
  }

  getPerson(id: string): Observable<Person> {
    return this.http.get<Person>(`${this.apiUrl}/${id}`);
  }

  createPerson(person: any) {
    return this.http.post('https://person-manage.onrender.com/person', person);
  }

  updatePerson(id: string, personData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, personData);
  }

  deletePerson(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}