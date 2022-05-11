import polyglotI18nProvider from 'ra-i18n-polyglot';

const englishMessages = {
    ra: {
        notification: {
            http_error: 'Network error. Please retry',
        },
        action: {
            save: 'Save',
            delete: 'Delete',
        },
    },
};
const frenchMessages = {
    ra: {
        notification: {
            http_error: 'Erreur réseau, veuillez réessayer',
        },
        action: {
            save: 'Enregistrer',
            delete: 'Supprimer',
        },
    },
};

const i18nProvider = polyglotI18nProvider(locale => 
    locale === 'fr' ? frenchMessages : englishMessages,
    'en' // Default locale
);