import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Genero } from '../../models/personaje.model';

@Component({
  selector: 'app-filtros-personajes',
  templateUrl: './filtros-personajes.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiltrosPersonajes {
  readonly texto = input('');
  readonly raza = input('todas');
  readonly genero = input<Genero | ''>('');
  readonly razas = input.required<string[]>();

  readonly textoCambio = output<string>();
  readonly razaCambio = output<string>();
  readonly generoCambio = output<Genero | ''>();

  protected cambiarTexto(evento: Event): void {
    this.textoCambio.emit((evento.target as HTMLInputElement).value);
  }

  protected cambiarRaza(evento: Event): void {
    this.razaCambio.emit((evento.target as HTMLSelectElement).value);
  }

  protected cambiarGenero(evento: Event): void {
    this.generoCambio.emit((evento.target as HTMLSelectElement).value as Genero | '');
  }
}
