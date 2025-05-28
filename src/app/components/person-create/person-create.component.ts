import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from '../person.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-person-create',
  imports: [CommonModule, FormsModule],
  templateUrl: './person-create.component.html',
  styleUrl: './person-create.component.css'
})

export class PersonCreateComponent {
  person = {
    name: '',
    age: null,
    gender: '',
    mobile: ''
  };

  constructor(private personService: PersonService, private router: Router) {}

  onSubmit() {
    this.personService.createPerson(this.person).subscribe(
      () => {
        alert('Person created successfully');
        this.router.navigate(['/']);
      },
      (error) => {
        console.error('Error creating person:', error);
        alert('Failed to create person');
      }
    );
  }
}
