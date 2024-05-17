import { Anime } from '../../anime';

export class AnimeDetail extends Anime {
  constructor(
    nombre: string,
    imagen: string,
    calificacion: number,
    categoria: string
  ) {
    super(nombre, imagen, calificacion, categoria);
  }
}
