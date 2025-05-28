import { Component, OnInit } from '@angular/core';
import { Location, CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './person-edit.component.html',
  styleUrl: './person-edit.component.css'
})
export class PersonEditComponent implements OnInit {
  personForm!: FormGroup;
  personId!: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private personService: PersonService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.personId = this.route.snapshot.paramMap.get('id')!;
    if (!this.personId) {
      console.error('Person ID is missing in the route.');
      return;
    }

    this.personForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      age: ['', [Validators.required, Validators.min(1), Validators.max(120)]],
      gender: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]]
    });

    this.personService.getPerson(this.personId).subscribe({
      next: (person) => {
        this.personForm.patchValue({
          name: person.name,
          age: person.age,
          gender: person.gender,
          mobile: person.mobile
        });
      },
      error: (err) => console.error('Error fetching person:', err)
    });
  }

  onSubmit(): void {
    if (this.personForm.valid) {
      this.personService.updatePerson(this.personId, { ...this.personForm.value}).subscribe({
        next: () => {
          alert('Person updated successfully!');
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error('Error updating person:', err);
          alert('Failed to update person. Please try again.');
        }
      });
    }
  }

  goBack(): void {
    this.location.back();
  }
}
