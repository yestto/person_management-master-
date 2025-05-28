import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PersonService } from '../person.service';
import { Person } from '../person.model';

@Component({
  selector: 'app-person-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './person-list.component.html',
  styleUrl: './person-list.component.css'
})

export class PersonListComponent implements OnInit {
  people: Person[] = [];

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.personService.getPeople().subscribe({
      next: (data) => {
        this.people = data.map((p) => ({
          ...p,
        }));
      },
      error: (err) => console.error('Error fetching people:', err)
    });
  }
}