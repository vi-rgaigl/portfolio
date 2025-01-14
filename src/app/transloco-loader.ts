import { inject, Injectable } from "@angular/core";
import { Translation, TranslocoLoader} from "@jsverse/transloco";
import { HttpClient } from "@angular/common/http";

/**
 * TranslocoHttpLoader is a service that implements the TranslocoLoader interface
 * to load translations from JSON files located in the assets/i18n directory.
 */
@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {

    private http = inject(HttpClient);

    /**
     * Fetches the translation file for the specified language.
     * @param {string} lang - The language code ('en', 'de').
     * @returns {Observable<Translation>} An observable of the translation data.
     */
    getTranslation(lang: string) {
        return this.http.get<Translation>(`assets/i18n/${lang}.json`);
    }

}
