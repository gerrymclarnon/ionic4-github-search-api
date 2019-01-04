import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';

import { User } from '../models/user.interface';
import { Repository } from '../models/repository.interface';


@Injectable({
    providedIn: 'root'
})
export class GithubService {

    private baseUrl: string = 'https://api.github.com';
    private reposUrl: string = "repos";

    constructor(private http: Http) {
        console.log('Hello GithubService Provider');
    }


    searchUserInformation(username: string):Observable<User[]>{
        return this.http.get(`${this.baseUrl}/search/users?q=${username}`)
            .pipe(map(res => res.json().items));
    }

    getUserInformation(username: string):Observable<User>{
        return this.http.get(`${this.baseUrl}/users/${username}`)
            .pipe(map(res => res.json()));
    }

    getRepositoryInformation(username: string) :Observable <Repository[]>{
        return this.http.get(`${this.baseUrl}/users/${username}/${this.reposUrl}`)
            .pipe(map(res => res.json()));
    }
}
