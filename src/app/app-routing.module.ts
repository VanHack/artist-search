import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './components/search/search.component';
import { MainComponent } from './components/main/main.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ArtistResolver } from './components/artist/artist-resolver.service';

const routes: Routes = [
    {
        path: '',
        component: SearchComponent
    },
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: 'artists/:name',
                component: ArtistComponent,
                resolve: {
                    user: ArtistResolver
                }
            }
        ]
    },
    {
        path: '404',
        component: NotFoundComponent
    },
    {
        path: '**',
        redirectTo: '/404'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [ArtistResolver]
})
export class AppRoutingModule { }
