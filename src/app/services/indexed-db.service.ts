import { Injectable } from '@angular/core';
import {Movie} from "../interfaces/movie";
import Popular = Movie.Popular;


@Injectable({
  providedIn: 'root'
})
export class IndexedDBService {
  private dbName = 'movieDB';
  private storeName = 'movies';

  async getAllMovies(): Promise<Popular[]> {
    return new Promise<Popular[]>((resolve, reject) => {
      const request = window.indexedDB.open(this.dbName);

      request.onsuccess = () => {
        const db = request.result;
        const transaction = db.transaction(this.storeName, 'readonly');
        const store = transaction.objectStore(this.storeName);
        const movies: Popular[] = [];

        const cursorRequest = store.openCursor();

        cursorRequest.onsuccess = (event) => {
          const cursor = cursorRequest.result;
          if (cursor) {
            movies.push(cursor.value);
            cursor.continue();
          } else {
            resolve(movies);
          }
        };

        cursorRequest.onerror = (event) => {
          reject(cursorRequest.error);
        };
      };

      request.onerror = () => {
        reject(request.error);
      };
    });
  }

}
