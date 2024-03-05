import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private localStorageService = 'listaTareas';

  getTareas():string[] {
    return JSON.parse(localStorage.getItem(this.localStorageService) as string) || [];
  }

  agregarTarea(tarea:string){
    const tareas = this.getTareas();
    tareas.push(tarea);
    localStorage.setItem(this.localStorageService, JSON.stringify(tareas));
  }
  
  borrarTarea(index: number){
    const tareas = this.getTareas();
    tareas.splice(index, 1);
    localStorage.setItem(this.localStorageService, JSON.stringify(tareas));
  }


}
