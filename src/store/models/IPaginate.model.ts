import IPaginator from 'src/interfaces/custom/IPaginator.model';

export default interface IPaginate<T> {
  pager: IPaginator;
  items: T[];
}
