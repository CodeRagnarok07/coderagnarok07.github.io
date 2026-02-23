---
title: NTX Connect - Intranet Corporativa
description: Plataforma interna de gestión documental y procesos corporativos para Noritex, con arquitectura Django + Next.js e integración con Microsoft Graph.
template: splash
date: 2025-02-01
contratador: Noritex
fecha_inicio: "Febrero 2025"
fecha_fin: "Noviembre 2025"
repo: null
live: null
tech_stack:
    - Python
    - Django
    - Django REST Framework
    - TypeScript
    - Next.js
    - React
    - PostgreSQL
    - Docker
    - AWS S3
    - Microsoft Graph API
type_proyect: fullstack
sidebar:
    label: Intranet NTX
---

## 1. Empresa y Producto

**Empresa**: [Noritex](https://noritex.com/) (Líder en decoración, diseño y hogar). **Producto**: **NTX Connect** - Intranet Corporativa & Sistema Centralizado de Gestión Documental.

**Impacto Generado**: Resolución crítica de problemas de coordinación y comunicación interdepartamental. La plataforma se convirtió en el "Core" de la operación interna, centralizando la dispersa información de los colaboradores (conectando relojes de asistencia, Active Directory y legacy systems) y democratizando el acceso seguro a la documentación corporativa.

## 2. Impacto de Negocio

Este software atacó directamente la **ineficiencia en la gestión del conocimiento** y la **fragmentación de datos**:

- **Control Documental Unificado**: Eliminó los silos de información permitiendo publicar, compartir y gestionar archivos de forma pública (inter-departamental) o privada, con reglas de negocio estrictas.
- **Centralización de Identidad**: Unificó la "verdad" de los datos del colaborador, sincronizando automáticamente información crítica entre dispositivos biométricos de asistencia, Active Directory y la antigua intranet.
- **Optimización Operativa**: Redujo la fricción comunicacional entre departamentos mediante un portal de autoservicio único.

## 3. Arquitectura del Sistema

El proyecto sigue una arquitectura **Híbrida Modernizada (Decoupled Monolith + Interior Micro-frontend)**:

- **Backend**: Monolito modular en **Django (Python)** exponiendo una **REST API** robusta.
- **Frontend**: SPA (Single Page Application) construida con **Next.js (React)**, servida de forma desacoplada pero integrada en el mismo ciclo de despliegue mediante contenedores.
- **Integraciones**: Arquitectura orientada a servicios para comunicación con proveedores externos (Microsoft Graph API, AWS S3).

## 4. Stack Tecnológico Real

Inferido del análisis de dependencias (

requirements.txt, 

package.json, `settings.py`):

- **Lenguajes**: Python 3.11, TypeScript (Nivel avanzado), JavaScript.
- **Backend Frameworks**: Django 5.2, Django REST Framework 3.16.
- **Frontend Ecosystem**: Next.js 14+, React 18, Tailwind CSS (Estilizado), Radix UI (Componentes accesibles).
- **Base de Datos**: PostgreSQL (`psycopg2`, `dj-database-url`).
- **Infraestructura & DevOps**: Docker (Contenedorización), Heroku (PaaS target), AWS S3 (`django-storages` para media assets), GitHub Actions (CI/CD inferido).
- **Integraciones Cloud**: **Microsoft Azure AD** (MSAL para autenticación), **Microsoft Graph API** (Gestión documental).

## 5. Estructura del Proyecto

### Directorios Principales

- `apps/`: Núcleo de la lógica de negocio (Arquitectura modular por dominios de Django).
    - `_front/`: Aplicación Next.js contenida.
    - `solicitudes/`: Motor de flujos de trabajo RH.
    - `driveManager/`: Capa de abstracción para servicios de archivos Microsoft.
- `config/`: Configuraciones del proyecto (Settings modulares base/prod/dev).
- `apps/apps_third_party/`: Adaptadores para librerías externas (Jazzmin, DRF, Swagger).

### Archivos Clave

- apps/driveManager/services.py: **Core Service**. Implementación compleja de cliente HTTP para interactuar con Microsoft Graph API (Uploads, Search, Permissions).
- apps/solicitudes/models.py: **Data Model**. Definición exhaustiva de entidades de negocio y máquinas de estado para flujos de aprobación.
- Dockerfile: **Infraestructura como Código**. Definición multi-stage para construcción de entorno híbrido Python/Node.
- config/settings/base.py: Configuración centralizada manejando variables de entorno (`environ`) y middleware de seguridad.

## 6. Funcionalidades Clave Analizadas

1. **Motor de Solicitudes y Aprobaciones**: Sistema de gestión de estados (Pendiente -> Revisado -> Aprobado) con validaciones jerárquicas (Gerencia + RRHH) para procesos como Vacaciones y Tiempo Compensatorio.
2. **Gestor Documental Inteligente**: Interfaz personalizada para navegar, subir y buscar archivos en SharePoint/OneDrive corporativo directamente desde la App, utilizando tokens delegados de usuario.
3. **Autenticación Corporativa (SSO)**: Login integrado con Microsoft 365, mapeando usuarios de AD a perfiles internos (`Colaborador`).
4. **Buzón de Sugerencias**: Canal de comunicación interno estructurado y tipificado.

## 7. Despliegue en Producción y Mantenimiento

- **Estrategia de Contenedores**: Uso de Docker para garantizar paridad entre desarrollo y producción.
- **Orquestación de Build**: Scripts personalizados (`heroku-prebuild`, `heroku-postbuild`) en 
    
    package.json para compilar el frontend Next.js e inyectarlo o servirlo junto al backend Django.
- **Escalabilidad**: Configuración lista para la nube con gestión de estáticos vía `WhiteNoise` y base de datos gestionada externa.
- **Documentación API**: Integración de `drf-spectacular` para generación automática de OpenAPI/Swagger, facilitando el mantenimiento y consumo por el frontend.

## 8. Retos Técnicos Resueltos

1. **Abstracción de Microsoft Graph API (`driveManager`)**:
    - _Desafío_: Implementar lógica de negocio compleja para la visibilidad de archivos (Público vs Privado) y permisos interdepartamentales sobre una capa de almacenamiento de terceros (SharePoint).
    - _Solución_: Desarrollo de una capa de servicio robusta (
        
        OneDriveFileService, 
        
        FileSearchService) que orquesta permisos en tiempo real y encapsula la complejidad de OAuth2 y tokens delegados.
2. **Sincronización de Datos Heterogéneos y Centralización**:
    - _Desafío_: Unificar datos de sistemas dispares con arquitecturas incompatibles (Relojes biométricos hardware, Active Directory, Intranet Legacy).
    - _Solución_: Creación de pipelines de sincronización agnósticos que normalizan la data en un modelo único de `Colaborador` en Django, sirviendo como la "Single Source of Truth".
3. **Arquitectura Híbrida Django + Next.js**:
    - _Desafío_: Unificar dos ecosistemas distintos en un solo repositorio y flujo de despliegue.
    - _Solución_: Configuración de `workspaces` y scripts de build orquestados que permiten desarrollar con HMR (Hot Module Replacement) en frontend y backend simultáneamente, y desplegar como un artefacto unificado optimizado.

## 9. Habilidades Demostradas (Perfil Senior & Liderazgo)

- **Stakeholder Management**: Liderazgo en el ciclo completo de ingeniería de requisitos, conduciendo reuniones de avance y definición de alcance directamente con usuarios VIP (Gerencia de RRHH), balanceando necesidades de negocio con viabilidad técnica.
- **Time & Resource Management**: Capacidad demostrada para entregar una solución crítica ("Contractor fijo") mientras se gestionaban simultáneamente múltiples proyectos paralelos sin comprometer calidad ni tiempos de entrega.
- **System Integration Architect**: Diseño de estrategias complejas de sincronización de datos heterogéneos (Biométricos + AD + Legacy DBs).
- **Full Stack & Cloud Proficiency**: Implementación robusta en Python/Django y React/Next.js con integraciones Azure profundas.

## 10. Puntos Clave para Entrevista

_"Para defender este proyecto como Senior:"_

1. **Sobre Solución de Negocio**: "Este no fue solo un desarrollo técnico; fue una consultoría de procesos donde identifiqué que el cuello de botella era la comunicación interdepartamental. Desarrollé 'NTX Connect' para centralizar la verdad de la compañía, integrando datos de asistencia, identidad y documentación en un solo Core operativo."
2. **Sobre Gestión Documental**: "Diseñé un motor de control documental híbrido que no solo almacenaba archivos, sino que gestionaba lógicamente su visibilidad (Pública/Privada) entre departamentos, resolviendo el caos de versiones y permisos que existía en la organización."
3. **Sobre Liderazgo y Delivery**: "Ejecuté este proyecto end-to-end manteniendo un rol activo frente a los stakeholders de RRHH, traduciendo sus necesidades complejas en features técnicos, todo esto mientras gestionaba en paralelo otros compromisos de la organización con éxito total."