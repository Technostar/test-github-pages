import { Injectable } from '@angular/core';
import {IPost} from '../domain/ipost';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class PostsListService {
  private http: HttpClient;
  private httpGetUrl = 'https://jsonplaceholder.typicode.com/posts/';
  constructor(private _http: HttpClient) {
    this.http = _http;
  }
  getAllPosts(): Observable<IPost[]> {
    return this.http.get <IPost[]> (this.httpGetUrl);
  }

}
