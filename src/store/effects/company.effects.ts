import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { NotificationsService } from 'angular2-notifications';
import { CompanyService } from 'src/services/company.service';
import { CompanyActions } from 'src/store/actions/company.actions';
import ICompany from '../models/ICompany.model';

@Injectable()
export class CompanyEffects {
  createCompany$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CompanyActions.create.request.type),
      mergeMap((action: { company: ICompany; type: string }) =>
        this.companyService.create(action.company).pipe(
          map((response) => {
            this.toaster.success(
              'Hurrah :(',
              response.message,
              this.toasterOptions
            );
            return CompanyActions.create.success({
              id: response.objectId,
              company: action.company,
            });
          }),
          catchError(({ error }) => {
            this.toaster.error('Error :(', error.message, this.toasterOptions);
            return of(CompanyActions.create.failure());
          })
        )
      )
    );
  });

  updateCompany$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CompanyActions.update.request.type),
      mergeMap((action: { id: number; company: ICompany; type: string }) =>
        this.companyService.update(action.id, action.company).pipe(
          map(({ message }) => {
            this.toaster.success('Hurrah!', message, this.toasterOptions);
            return CompanyActions.update.success({ company: action.company });
          }),
          catchError(({ error }) => {
            this.toaster.error('Error :(', error.message, this.toasterOptions);
            return of(CompanyActions.update.failure());
          })
        )
      )
    );
  });

  getByUserId$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CompanyActions.getByUserId.request.type),
      mergeMap((action: { id: number; type: string }) =>
        this.companyService.getByUserId(action.id).pipe(
          map((company) => CompanyActions.getByUserId.success({ company })),
          catchError(() => of(CompanyActions.getByUserId.failure()))
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private companyService: CompanyService,
    private toaster: NotificationsService
  ) {}

  private toasterOptions = {
    animate: 'fade',
    timeOut: 3000,
    showProgressBar: true,
  };
}
