import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export interface IPost {
    id: number;
    title: string;
    body: string;
}

export class Post implements IPost {
    id: number;
    title: string;
    body: string;
}

@Injectable()
export class PostService {

    constructor(private service: Http) { }

    getPosts(): Observable<IPost[]> {
        return this
            .service
            .get("https://jsonplaceholder.typicode.com/posts")
            .map(res => <IPost[]>res.json())
            .catch(e => Observable.throw(e));
    }
}
