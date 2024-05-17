import { Component, OnInit } from '@angular/core';
import { AnimeDetail } from '../anime-detail/anime-detail/animeDetail';
import { AnimeService } from '../anime.service';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css'],
})
export class AnimeListComponent implements OnInit {
  animes: Array<AnimeDetail> = [];
  selected: Boolean = false;
  selectedAnime!: AnimeDetail;

  constructor(private animeService: AnimeService) {}

  ngOnInit() {
    this.getAnimes();
  }
  getAnimes(): void {
    this.animeService.getAnimes().subscribe((animes) => {
      this.animes = animes;
    });
  }

  onSelected(anime: AnimeDetail): void {
    this.selected = true;
    this.selectedAnime = anime;
  }
}
