import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { Paginador } from '@shared/ui/paginador/paginador';
import { PlanetaCard } from '../../components/planeta-card/planeta-card';
import { PlanetasService } from '../../planetas.service';

@Component({
  selector: 'app-planetas-page',
  imports: [PlanetaCard, Paginador],
  templateUrl: './planetas-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanetasPage {
  private readonly servicio = inject(PlanetasService);

  protected readonly pagina = signal(1);

  protected readonly resultado = rxResource({
    params: this.pagina,
    stream: ({ params }) => this.servicio.listar(params),
  });
}
