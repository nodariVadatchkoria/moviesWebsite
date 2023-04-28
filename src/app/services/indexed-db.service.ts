import { Injectable } from '@angular/core';
import {IMovie} from "../interfaces/movie";


@Injectable({
  providedIn: 'root'
})
export class IndexedDBService {
  private dbName = 'movieDB';
  private storeName = 'movies';

  async getAllMovies(): Promise<IMovie[]> {
    return new Promise<IMovie[]>((resolve, reject) => {
      const request = window.indexedDB.open(this.dbName);

      request.onsuccess = () => {
        const db = request.result;
        const transaction = db.transaction(this.storeName, 'readonly');
        const store = transaction.objectStore(this.storeName);
        const movies: IMovie[] = [];

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
