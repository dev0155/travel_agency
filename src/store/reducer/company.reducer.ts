import { Action, createReducer, on } from '@ngrx/store';
import IAddress from 'src/store/models/IAddress.model';
import { CompanyActions } from 'src/store/actions/company.actions';

export interface ICompanyState {
  id: number;
  contactEmail: string;
  name: string;
  address: IAddress;
}
const initState = (): ICompanyState => ({
  id: null,
  contactEmail: null,
  name: null,
  address: {} as IAddress,
});

const companyReducer = createReducer(
  initState(),
  on(CompanyActions.getByUserId.request, (state) => ({
    ...state,
    contactEmail: null,
    name: null,
    address: {} as IAddress,
  })),
  on(CompanyActions.getByUserId.success, (state, { company }) => ({
    ...state,
    id: company.id,
    contactEmail: company.contactEmail,
    name: company.name,
    address: {
      ...company.address,
    },
  })),
  on(CompanyActions.getByUserId.failure, (state) => ({
    ...state,
    contactEmail: null,
    name: null,
    address: {} as IAddress,
  })),
  on(CompanyActions.create.request, (state) => ({
    ...state,
    contactEmail: null,
    name: null,
    address: {} as IAddress,
  })),
  on(CompanyActions.create.success, (state, action) => ({
    ...state,
    id: action.id,
    contactEmail: action.company.contactEmail,
    name: action.company.name,
    address: {
      ...action.company.address,
    },
  })),
  on(CompanyActions.create.failure, (state) => ({
    ...state,
    contactEmail: null,
    name: null,
    address: {} as IAddress,
  })),
  on(CompanyActions.update.request, (state) => ({
    ...state,
  })),
  on(CompanyActions.update.success, (state, { company }) => ({
    ...state,
    contactEmail: company.contactEmail,
    name: company.name,
    address: {
      ...company.address,
    },
  })),
  on(CompanyActions.update.failure, (state) => ({
    ...state,
  }))
);

export function reducer(state: ICompanyState | undefined, action: Action) {
  return companyReducer(state, action);
}
