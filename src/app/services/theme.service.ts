import {Inject, Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {DOCUMENT} from '@angular/common';

@Injectable({
    providedIn: 'root',
})
export class ThemeService {

    constructor(@Inject(DOCUMENT) private document: Document) {
    }

    theme$: BehaviorSubject<'Dark' | 'Light'> = new BehaviorSubject<'Dark' | 'Light'>('Dark');

    setTheme(theme: 'Dark' | 'Light'): void {
        this.theme$.next(theme);
        let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;
        if (theme === 'Light') {
            themeLink.href = 'light-theme.css';
        } else {
            themeLink.href = 'dark-theme.css';
        }
    }
}
