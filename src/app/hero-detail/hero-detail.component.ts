import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}
  
  @Input() hero?: Hero;
  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }

  goBack(): void {
    this.location.back();
  }
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if(id!=0)
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
  ngOnInit(): void {
    this.getHero();
  }
  
    
  
}
