import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReportComponent } from './report.component';
import { ApplicationFieldsService } from '../../../application-forms/_services/application-fields.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ChristmasTreesApplicationService } from '../../_services/christmas-trees-application.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpModule } from '@angular/http';
import { UtilService } from '../../../_services/util.service';
import { Observable } from 'rxjs/Observable';

describe('ReportComponent', () => {
  let component: ReportComponent;
  let fixture: ComponentFixture<ReportComponent>;

  const mockActivatedRoute = {
    params: Observable.of({ id: 1 }),
    data: Observable.of({
      forests: [
        {
          id: 1,
          forestName: 'Arapaho and Roosevelt National Forests',
          description: 'Arapaho & Roosevelt | Colorado | Fort Collins, CO',
          forestAbbr: 'arp'
        },
        {
          id: 2,
          forestName: 'Flathead National Forest',
          description: 'Flathead | Montana | Kalispell, MT',
          forestAbbr: 'flathead'
        },
        {
          id: 3,
          forestName: 'Mt. Hood National Forest',
          description: 'Mt. Hood | Oregon | Portland, OR',
          forestAbbr: 'mthood'
        },
        {
          id: 4,
          forestName: 'Shoshone National Forest',
          description: 'Shoshone | Montana, Wyoming | Cody, WY, Jackson, WY',
          forestAbbr: 'shoshone'
        }
      ]
    })
  };

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [ReportComponent],
        providers: [ApplicationFieldsService, ChristmasTreesApplicationService, FormBuilder, UtilService],
        imports: [RouterTestingModule, HttpClientTestingModule, HttpModule],
        schemas: [NO_ERRORS_SCHEMA]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    TestBed.overrideProvider(ActivatedRoute, { useValue: mockActivatedRoute });
    fixture = TestBed.createComponent(ReportComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get forest by id', () => {
    const forest = component.getForestById('2');
    expect(forest.forestName).toEqual('Flathead National Forest');
  });
});
