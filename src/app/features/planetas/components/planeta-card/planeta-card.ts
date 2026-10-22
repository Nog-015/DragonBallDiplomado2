import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { LucideImageOff } from '@lucide/angular';
import { Planeta } from '../../../personajes/models/personaje.model';

@Component({
  selector: 'app-planeta-card',
  imports: [LucideImageOff],
  templateUrl: './planeta-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanetaCard {
  readonly planeta = input.required<Planeta>();

  protected readonly imagenFallo = signal(false);
}
