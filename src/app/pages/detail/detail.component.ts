import {
    AfterViewInit,
    Component,
    computed, CUSTOM_ELEMENTS_SCHEMA,
    effect,
    ElementRef,
    HostListener,
    Inject,
    Injector,
    OnInit,
    Sanitizer,
    signal,
    ViewChild
} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SliderComponent} from "../../layout/slider/slider.component";
import {combineLatest, config, map, Observable, switchMap, tap} from "rxjs";
import {AsyncPipe, JsonPipe, NgForOf, NgIf} from "@angular/common";
import {TmdbService} from "../../services";
import {toSignal} from "@angular/core/rxjs-interop";
import {TrailerActorsComponent} from "./trailer-actors/trailer-actors.component";
import {DomSanitizer} from "@angular/platform-browser";
import {Cast, Movie} from "../../interfaces";
import {ImagePipe} from "../../core/pipes";
import {ActorCardComponent} from "../../layout/actor-card/actor-card.component";

@Component({
    selector: 'app-detail',
    standalone: true,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        SliderComponent,
        AsyncPipe,
        TrailerActorsComponent,
        JsonPipe,
        NgIf,
        ImagePipe,
        NgForOf,
        ActorCardComponent
    ],
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements AfterViewInit {

    // @ViewChild('imageContainer') imageContainer!: ElementRef;


    data = toSignal(this.route.params.pipe(
        map((params) => params['id']),
        switchMap((id) => combineLatest([
                this.tmdbService.getMovieDetailById({id}),
                this.tmdbService.getMovieTrailerById({id}),
                this.tmdbService.getMovieCast({id}),
                this.tmdbService.getMovieSimilar({id}),

            ]).pipe(
                map(([movie, trailers, credits]) => ({
                        movie: movie as Movie.Movie,
                        trailers: trailers.results,
                        actors: credits.cast as any[]
                    })
                )),
        )
    ));

    trailer: any = computed(() => {
        if (this.data() && this.data()?.trailers && this.data()?.trailers.length > 0) {
            return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.data()?.trailers[0].key}`);
        }
        return null;
    })


    constructor(
        // public dialogRef: MatDialogRef<DetailComponent>,
        // @Inject(MAT_DIALOG_DATA) public data: any,
        private injector: Injector,
        private route: ActivatedRoute,
        private tmdbService: TmdbService,
        private sanitizer: DomSanitizer
    ) {
    }


    ngAfterViewInit(): void {
        // this.handleScroll();
    }

    // @HostListener('window:scroll', ['$event'])

    // handleScroll() {
    //   const imageContainer = this.imageContainer.nativeElement;
    //   const image = imageContainer.querySelector('#image');
    //
    //   const rotationAngle = 360;
    //   const translateY = 200;
    //   if (image) {
    //     image.style.transform = `translate(-50%, ${translateY}px) rotate(${rotationAngle}deg)`;
    //   }
    // }
cast = computed(() => {
    if (this.data() && this.data()?.actors) {
        return this.data()?.actors?.filter((actor: Cast) => actor.profile_path !== null).slice(0, 20);
    }
    return [];
    });

}
