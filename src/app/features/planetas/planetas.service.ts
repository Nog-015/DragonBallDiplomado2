import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pagina } from '@shared/models/pagina.model';
import { Planeta } from '../personajes/models/personaje.model';
import { PLANETAS_MOCK } from './planetas.mock';

const ELEMENTOS_POR_PAGINA = 8;

@Injectable({ providedIn: 'root' })
export class PlanetasService {
  listar(pagina: number): Observable<Pagina<Planeta>> {
    const totalItems = PLANETAS_MOCK.length;
    const inicio = (pagina - 1) * ELEMENTOS_POR_PAGINA;

    return of({
      items: PLANETAS_MOCK.slice(inicio, inicio + ELEMENTOS_POR_PAGINA),
      meta: {
        totalItems,
        itemCount: Math.min(ELEMENTOS_POR_PAGINA, Math.max(0, totalItems - inicio)),
        itemsPerPage: ELEMENTOS_POR_PAGINA,
        totalPages: Math.ceil(totalItems / ELEMENTOS_POR_PAGINA),
        currentPage: pagina,
      },
    });
  }
}
