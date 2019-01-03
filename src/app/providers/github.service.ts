// import { Injectable } from '@angular/core';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class GithubService {
//
//   constructor() { }
// }

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Http, Response } from '@angular/http';


// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/observable/throw';



import { User } from '../models/user.interface';
import { Repository } from '../models/repository.interface';


@Injectable({
    providedIn: 'root'
})
export class GithubService {

    private baseUrl: string = 'https://api.github.com/users';
    private reposUrl: string = "repos";

    constructor(private http: Http) {
        console.log('Hello GithubService Provider');
    }


    getUserInformation(username: string):Observable<User>{
        return this.http.get(`${this.baseUrl}/${username}`)
            .pipe(map(res => res.json()));
    }

    getRepositoryInformation(username: string) :Observable <Repository[]>{
        return this.http.get(`${this.baseUrl}/${username}/${this.reposUrl}`)
            .pipe(map(res => res.json()));
    }

    //
    // private handleError(error:Response | any){
    //     return Observable.throw(error.json().error || "Server error.")
    //
    // }
    // private extractData(reponse: Response){
    //     return reponse.json();
    // }
}
