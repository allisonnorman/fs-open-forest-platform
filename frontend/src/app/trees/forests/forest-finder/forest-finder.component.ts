import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RemovePuncPipe } from './remove-punc.pipe';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-forest-finder',
  templateUrl: './forest-finder.component.html',
  providers: [RemovePuncPipe]
})
export class ForestFinderComponent implements OnInit {
  @ViewChild('forestFinder') form: ElementRef;

  forests = [];
  selectedForest = null;
  itemsPerRow = 2;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  /**
   * Set forest from route resolver
   */
  ngOnInit() {
    this.route.data.subscribe(data => {
      this.forests = data.forests;
    });
  }

  /**
   * Set focus to form
   */
  scrollToForestFinder(event) {
    if (event) {
      event.preventDefault();
    }

    this.form.nativeElement.focus();

  }

  /**
   * Redirect to forest guidelines page
   */
  goToForest(forestAbbr: string): void {
    const navTo = '/christmas-trees/forests/' + forestAbbr;
    this.router.navigate([navTo]);
  }
}
