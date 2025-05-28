import { Routes } from '@angular/router';
import { PersonListComponent } from './components/person-list/person-list.component';
import { PersonEditComponent } from './components/person-edit/person-edit.component';
import { PersonDeleteComponent } from './components/person-delete/person-delete.component';
import { PersonCreateComponent } from './components/person-create/person-create.component';

export const routes: Routes = [
    { path: '', component: PersonListComponent },
    { path: 'create', component: PersonCreateComponent },
    { path: 'edit/:id', component: PersonEditComponent },
    { path: 'delete/:id', component: PersonDeleteComponent },
    { path: '**', redirectTo: '' }
];
