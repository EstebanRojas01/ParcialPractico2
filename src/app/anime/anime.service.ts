import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { Observable, map } from 'rxjs';
import { Anime } from './anime';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  private apiUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getAnimes(): Observable<Anime[]> {
    return this.http.get<Anime[]>(this.apiUrl);
  }

  getAnime(id: string): Observable<Anime> {
    return this.http.get<Anime[]>(this.apiUrl).pipe(
      map((animes: Anime[]) => {
        //Complete con el código necesario para recorrer los animes y retornar el anime con el id buscado
        // pista: use un for tradicional con comparación de un id con un if
        for (let i = 0; i < animes.length; i++) {
          if (animes[i].id === parseFloat(id)) {
            this.http.get<AnimeDetailComponent>(this.apiUrl + '/' + id);
          }
        }

        //No borre esto, es necesario para manejar el caso en el que no exista un anime con el id dado por parámetro.
        throw new Error(`Anime con ID ${id} no encontrado`);
      })
    );
  }

}
