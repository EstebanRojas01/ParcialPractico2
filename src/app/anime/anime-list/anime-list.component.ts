import { Component, OnInit } from '@angular/core';
import { Anime } from '../anime';
import { AnimeService } from '../anime.service';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {

  selectedBAnime!: Anime;
  selected = false;
  animes: Array<Anime> = [];
  promedio: number = 0;

  constructor(private animeService: AnimeService) { }

  getAnimes(): void {
    this.animeService.getAnimes().subscribe((animes) => {
      this.animes = animes;
    });
  }
  getRaitingPromedio(): void {
    this.animeService.getAnimes().subscribe((animes) => {
      let total = 0;
      let count = 0;
      let promedio = 0;

      this.animeService.getAnimes().subscribe((animes) => {
      this.animes = animes;});
      for (const a of animes) {
          total += parseFloat(a.Rating);
          count++;
      }

      promedio = total / count
      this.promedio = promedio;
    });  
  }

  onSelected(anime: Anime): void {
    this.selected = true;
    this.selectedBAnime = anime;
  }

  ngOnInit() {
    this.getAnimes();
    this.getRaitingPromedio();

  }

}
