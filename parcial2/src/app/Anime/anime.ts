export class Anime {
  nombre: string;
  imagen: string;
  calificacion: number;
  categoria: string;

  constructor(
    nombre: string,
    imagen: string,
    calificacion: number,
    categoria: string
  ) {
    this.nombre = nombre;
    this.imagen = imagen;
    this.calificacion = calificacion;
    this.categoria = categoria;
  }
}
