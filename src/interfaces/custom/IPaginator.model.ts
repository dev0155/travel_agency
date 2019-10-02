export default interface IPaginator {
  total: number; // how many items are at all
  current: number; // current page
  pages: number; // how many pages
  count: number; // how many items are displayed
}
