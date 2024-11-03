import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customSearch',
  standalone: true,
})
export class CustomSearchPipe implements PipeTransform {
  transform(items: any[], searchText: string, searchKey: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter((item) => {
      return item[searchKey].toLowerCase().includes(searchText);
    });
  }
}
