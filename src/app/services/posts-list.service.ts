import { Injectable } from '@angular/core';
import {IPost} from '../domain/ipost';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class PostsListService {
  private http: Http;
  private httpGetUrl = 'https://jsonplaceholder.typicode.com/posts/';
  constructor(private _http: Http) {
    this.http = _http;
  }
  getAllPosts(): Observable<IPost[]> {
    return this.http.get(this.httpGetUrl).
    map((resp: Response) => <IPost[]> resp.json()
    );
  }

}
