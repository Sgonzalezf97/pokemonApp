import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extractIndex'
})
export class ExtractIndexPipe implements PipeTransform {

  transform(value: string): number {
    const matches = value.split("/")
    console.log(matches)
    return Number(matches[6]);
  }

}
