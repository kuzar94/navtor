import {Subject} from 'rxjs';

export function Destroy$(): PropertyDecorator {
  return (target: any, propertyKey) => {
    const destroyFn = function (this: any) {
      (this[propertyKey] as Subject<void>).next();
      (this[propertyKey] as Subject<void>).complete();
    };

    if (typeof target.ngOnDestroy === 'function') {
      const oldNgOnDestroy = target.ngOnDestroy;
      target.ngOnDestroy = function () {
        destroyFn.call(this);
        oldNgOnDestroy.call(this);
      };
    } else {
      target.ngOnDestroy = destroyFn;
    }
  };
}
