export const LOCALES = ["es", "pt", "en"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "es";

interface SiteCopy {
    lang: string;
    meta: {
        title: string;
        description: string;
    };
    skipToContent: string;
    nav: {
        home: string;
        portfolio: string;
        services: string;
        contact: string;
        languageLabel: string;
    };
    hero: {
        primary: string;
        secondary: string;
        titleSuffix: string;
        subtitleLine1: string;
        subtitleLine2: string;
        portfolioCta: string;
        contactCta: string;
    };
    portfolio: {
        title: string;
        description: string;
        viewAll: string;
    };
    contact: {
        title: string;
        description: string;
    };
}

export const siteCopy: Record<Locale, SiteCopy> = {
    es: {
        lang: "es",
        meta: {
            title: "Senior Software Engineer | AppSec & Infraestructura",
            description:
                "Ingeniero de software senior especializado en Django y Next.js, con enfoque en arquitectura segura, AppSec y despliegues resilientes con Docker y cloud.",
        },
        skipToContent: "Saltar al contenido",
        nav: {
            home: "Inicio",
            portfolio: "Portafolio",
            services: "Habilidades",
            contact: "Contacto",
            languageLabel: "Idioma",
        },
        hero: {
            primary: "Ingeniería",
            secondary: "Seguridad",
            titleSuffix: "de software full-stack",
            subtitleLine1:
                "Senior Software Engineer con foco en AppSec e infraestructura segura",
            subtitleLine2:
                "Desarrollo soluciones robustas con Django, Next.js, Docker y cloud",
            portfolioCta: "Portafolio",
            contactCta: "Contacto",
        },
        portfolio: {
            title: "Portafolio",
            description:
                "Proyectos desarrollados para entornos corporativos y gubernamentales",
            viewAll: "Ver todo",
        },
        contact: {
            title: "¿Deseas contactarme?",
            description: "Puedes hacerlo a través de mis redes profesionales",
        },
    },
    pt: {
        lang: "pt",
        meta: {
            title: "Engenheiro de Software Sênior | AppSec e Infraestrutura",
            description:
                "Engenheiro de software sênior especializado em Django e Next.js, com foco em arquitetura segura, AppSec e deploys resilientes com Docker e cloud.",
        },
        skipToContent: "Pular para o conteúdo",
        nav: {
            home: "Início",
            portfolio: "Portfólio",
            services: "Habilidades",
            contact: "Contato",
            languageLabel: "Idioma",
        },
        hero: {
            primary: "Engenharia",
            secondary: "Segurança",
            titleSuffix: "de software full-stack",
            subtitleLine1:
                "Engenheiro de Software Sênior com foco em AppSec e infraestrutura segura",
            subtitleLine2:
                "Desenvolvo soluções robustas com Django, Next.js, Docker e cloud",
            portfolioCta: "Portfólio",
            contactCta: "Contato",
        },
        portfolio: {
            title: "Portfólio",
            description:
                "Projetos desenvolvidos para ambientes corporativos e governamentais",
            viewAll: "Ver tudo",
        },
        contact: {
            title: "Quer entrar em contato comigo?",
            description: "Você pode falar comigo pelas minhas redes profissionais",
        },
    },
    en: {
        lang: "en",
        meta: {
            title: "Senior Software Engineer | AppSec & Infrastructure",
            description:
                "Senior software engineer specialized in Django and Next.js, focused on secure architecture, AppSec, and resilient cloud deployments with Docker.",
        },
        skipToContent: "Skip to content",
        nav: {
            home: "Home",
            portfolio: "Portfolio",
            services: "Skills",
            contact: "Contact",
            languageLabel: "Language",
        },
        hero: {
            primary: "Engineering",
            secondary: "Security",
            titleSuffix: "for full-stack software",
            subtitleLine1:
                "Senior Software Engineer focused on AppSec and secure infrastructure",
            subtitleLine2:
                "I build robust solutions with Django, Next.js, Docker, and cloud",
            portfolioCta: "Portfolio",
            contactCta: "Contact",
        },
        portfolio: {
            title: "Portfolio",
            description:
                "Projects delivered for corporate and government environments",
            viewAll: "View all",
        },
        contact: {
            title: "Want to get in touch?",
            description: "You can reach me through my professional networks",
        },
    },
};

export function isLocale(value: string): value is Locale {
    return LOCALES.includes(value as Locale);
}
