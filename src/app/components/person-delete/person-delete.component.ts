import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from '../person.service';
import { Person } from '../person.model';
import {Location} from '@angular/common';

@Component({
  selector: 'app-person-delete',
  imports: [],
  templateUrl: './person-delete.component.html',
  styleUrl: './person-delete.component.css'
})

export class PersonDeleteComponent implements OnInit {
  person: Person | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private personService: PersonService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.personService.getPerson(id).subscribe({
      next: (person) => {
        this.person = {
          ...person,
          age: person.age || Math.floor(Math.random() * 50) + 20,
          gender: person.gender || (Math.random() > 0.5 ? 'Male' : 'Female'),
          mobile: person.mobile || `555-${Math.floor(Math.random() * 9000) + 1000}`
        };
      },
      error: (err) => console.error('Error fetching person:', err)
    });
  }

  onDelete(): void {
    if (this.person) {
      this.personService.deletePerson(this.person._id).subscribe({
        next: () => this.router.navigate(['/']),
        error: (err) => console.error('Error deleting person:', err)
      });
    }
  }

  goBack(): void {
    this.location.back();
  }
}