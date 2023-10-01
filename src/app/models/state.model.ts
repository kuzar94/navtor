import {HttpErrorResponse} from '@angular/common/http';

export interface StateModel<T> {
    readonly loading: boolean;
    readonly value?: T;
    readonly empty?: boolean;
    readonly error?: HttpErrorResponse | Error;
}

export const loadingState = <T>(value?: T): StateModel<T> => ({
    loading: true,
    value,
    error: undefined,
    empty: false,
});

export const loadedState = <T>(value: T): StateModel<T> => ({
    loading: false,
    value,
    error: undefined,
    empty: false,
});

export const emptyState = <T>(): StateModel<T> => ({
    loading: false,
    empty: true,
    error: undefined,
});

export const errorState = <T>(error: HttpErrorResponse | Error): StateModel<T> => ({
    loading: false,
    value: undefined,
    error,
    empty: false,
});
