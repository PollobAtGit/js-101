import { Component } from '@angular/core';
import { IPost, PostService } from "./Post.service";

@Component({
    // selector: 'posts',
    template: `
        <ul>
            <li *ngFor="let e of posts">
                <span class="red">{{e.id}}</span>
                <span class="green">{{e.title}}</span>
                <span class="blue">{{e.body}}</span>
            </li>
        </ul>
    `,
    styles: ["li { margin:10% } .red { color:red } .green { color:green } .blue { color:blue }"],
    providers: [PostService]
})

export class PostComponent {

    posts: IPost[];

    constructor(private service: PostService) {
        service
            .getPosts()
            .subscribe(e => this.posts = e, e => console.error("ERROR: " + e));
    }
}
