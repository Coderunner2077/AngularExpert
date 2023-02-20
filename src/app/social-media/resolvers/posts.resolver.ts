import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { PostsService } from '../../core/services/posts.service';
import { Post } from '../../core/models/post.model';
import { Observable } from 'rxjs';

@Injectable()
export class PostsResolver implements Resolve<Post[]> {
    constructor(private postsService: PostsService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post[]> {
        return this.postsService.getPosts();
    }
}

/* 
    Un resolver est un outil de routing qui est appelé lorsqu'un utilisateur cherche à accéder à la route où il est placé.

    Le resolver récupère des données avant d'afficher la route souhaitée via sa méthode  resolve() .

    Cette méthode retourne les données sous forme soit d'Observable, soit de Promise, ou "en vrac".

    Le resolver est enregistré au niveau de la configuration de routing, et est associé à une clé d'objet.

    Le component cible de la route utilise ensuite l'Observable data de ActivatedRoute pour récupérer les données via cette même clé.
*/