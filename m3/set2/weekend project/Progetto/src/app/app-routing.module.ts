import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletedComponent } from './Pages/completed/completed.component';
import { TodoComponent } from './Pages/todo/todo.component';
import { EditingComponent } from './Pages/editing/editing.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: TodoComponent
  },
  { path: 'completed',
   component: CompletedComponent
  },
  { path: 'editing/:id',
   component: EditingComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
