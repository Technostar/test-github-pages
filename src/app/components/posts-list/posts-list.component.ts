import { Component, OnInit } from '@angular/core';
import { IPost } from '../../domain/ipost';
import { PostsListService } from '../../services/posts-list.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  public postList: IPost[];
  private postListService: PostsListService;
  constructor(private _postListSerice: PostsListService) {
    this.postListService = _postListSerice;
    this.postList = [];
  }

  ngOnInit() {
    this.postListService.getAllPosts().subscribe(
      (posts =>this.postList = posts)
    );
  }

}
