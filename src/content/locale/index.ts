export const languages = {
    en: 'English',
    fr: 'Français',
};

export const defaultLang = 'es';

export const ui = {
    es: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.twitter': 'Twitter',
    },
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.twitter': 'Twitter',
    },
    fr: {
        'nav.home': 'Accueil',
        'nav.about': 'À propos',
    },
} as const;

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang in ui) return lang as keyof typeof ui;
    return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof typeof ui[typeof defaultLang]) {
        return ui[lang][key] || ui[defaultLang][key];
    }
}