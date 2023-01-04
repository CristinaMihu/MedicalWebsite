import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface MyFavoritesItem {
  id: number;
  First_Name: string;
  Last_Name: string;
  department:string;
  LocationDepartmentDoctor: string;
  Email: string;
  Mobile: string;
  
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: MyFavoritesItem[] = [
  {id: 1, First_Name: 'Robert', Last_Name: "Anderson", department: "Diagnostic Imaging", LocationDepartmentDoctor:"London, Brick Street, no. 147", Email:"robertand2yahoo.com", Mobile:"0732427441" },
  {id: 2, First_Name: 'Kathryn', Last_Name: "Barlow", department: "Ophthalmology", LocationDepartmentDoctor:"Manchester, Kingsway Street, no. 158", Email:"kathy123@gmail.com", Mobile:"0787508395" },
  {id: 3, First_Name: 'Julie', Last_Name: "Cronk", department: "Gastroenterology", LocationDepartmentDoctor:"Nottingham, Aberfort Avenue, no. 85", Email:"julieC@yahoo.com", Mobile:"0787774953" },
  {id: 4, First_Name: 'Noel', Last_Name: "Hauge", department: "Sexual Health", LocationDepartmentDoctor:"Manchester, Kingsway Street, no. 158", Email:"haugenoel@gmail.com", Mobile:"0767613058" },
  {id: 5, First_Name: 'Tania', Last_Name: "Sale", department: "Rheumatology", LocationDepartmentDoctor:"London, Brick Street, no. 147", Email:"taniasale@gmail.com", Mobile:"0754643332" }
];

/**
 * Data source for the MyFavorites view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class MyFavoritesDataSource extends DataSource<MyFavoritesItem> {
  data: MyFavoritesItem[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<MyFavoritesItem[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: MyFavoritesItem[]): MyFavoritesItem[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: MyFavoritesItem[]): MyFavoritesItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'First_Name': return compare(a.First_Name, b.First_Name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
