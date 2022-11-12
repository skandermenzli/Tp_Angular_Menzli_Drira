import { Pipe, PipeTransform } from '@angular/core';


const DEFAULT_IMAGE = 'default.png';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(path: string): string {
    if (! path.length){
      return DEFAULT_IMAGE;
    }
    return path;
  }

}
