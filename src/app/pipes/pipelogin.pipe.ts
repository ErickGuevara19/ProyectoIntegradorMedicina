import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipelogin'
})
export class PipeloginPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
