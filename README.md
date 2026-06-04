# QaTestingAutomation_Test
QA Testing Automation web https://www.saucedemo.com/


Este repositorio contiene el framework de automatización de pruebas de extremo a extremo (E2E) desarrollado con **Cypress**. El objetivo principal del proyecto es validar los flujos críticos de la aplicación web, garantizando su estabilidad, rendimiento functional y regresión continua.

---

## 🛠️ Tecnologías y Herramientas

* **Core Framework:** [Cypress](https://www.cypress.io/)
* **Lenguaje de Programación:** JavaScript (ES6+)
* **Patrón de Diseño:** Page Object Model (POM)
* **Gestor de Dependencias:** npm / Node.js

---

## 📋 Prerrequisitos

Antes de clonar e iniciar el proyecto, asegúrate de tener instalado en tu entorno local:

1. [Node.js](https://nodejs.org/) (Versión 18.x o superior recomendada)
2. [Git](https://git-scm.com/) para el control de versiones.
3. Un navegador web compatible (Chrome, Edge o Firefox) si deseas ejecutar las pruebas de manera visual.

---

## 🚀 Instalación y Configuración

Sigue estos pasos para poner en marcha el suite de pruebas en tu máquina local:

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/DiegoLed/QaTestingAutomation_Test.git](https://github.com/DiegoLed/QaTestingAutomation_Test.git)
   cd QaTestingAutomation_Test

## 2 Instalar las dependencias del proyecto:

npm install

## 3 Configurar variables de entorno (Opcional):
Si el proyecto requiere credenciales o URLs específicas, crea un archivo cypress.env.json en la raíz del proyecto (este archivo ya se encuentra excluido en el .gitignore por seguridad):

{
  "baseUrl": "[https://url-de-la-web-a-validar.com](https://url-de-la-web-a-validar.com)",
  "user_username": "tu_usuario_de_prueba",
  "user_password": "tu_contraseña_de_prueba"
}

## 🧪 Ejecución de las Pruebas
El framework está configurado con diferentes scripts para ejecutar las pruebas según el contexto:

**Ejecutar pruebas en modo Headless (Consola / CI/CD):**
Ideal para ejecuciones rápidas o integración continua en segundo plano.

npx cypress run

**Abrir la interfaz gráfica de Cypress (Modo interactivo):**
Abre el Cypress Runner para seleccionar y depurar pruebas visualmente paso a paso.

npx cypress open

**Ejecutar un archivo de prueba específico en un navegador determinado:**
npx cypress run --spec "cypress/e2e/login.cy.js" --browser chrome


## ⚙️  Ejecución de Procesos por Lotes (Scripts Batch / Ejecución masiva)
Para facilitar ejecuciones complejas o automatizadas en entornos locales de Windows o Linux, puedes configurar scripts integrados en el package.json o lanzar archivos .bat / .sh para ejecuciones masivas:

# Ejemplo de ejecución masiva configurada en los scripts de Node

npm run test:all


## 📐 Arquitectura del Proyecto
El suite está organizado bajo las mejores prácticas del patrón de diseño Page Object Model (POM). Esto separa la lógica de las pruebas de los selectores de la interfaz gráfica, asegurando un código limpio, mantenible y reutilizable:

```

QaTestingAutomation_Test/
├── cypress/
│   ├── e2e/                  # Scripts de pruebas automatizadas (*.cy.js)
│   │   ├── login.cy.js
│   │   └── home.cy.js
│   ├── pageObjects/          # Clases de la arquitectura POM (elementos y métodos)
│   │   ├── LoginPage.js
│   │   └── HomePage.js
│   ├── fixtures/             # Datos estáticos de prueba (usuarios, JSONs, mock-data)
│   └── support/              # Comandos personalizados y configuraciones globales (e2e.js)
├── node_modules/             # Dependencias del proyecto instaladas vía npm
├── cypress.config.js         # Archivo central de configuración técnica de Cypress
├── package.json              # Metadatos, dependencias del motor y scripts bash de ejecución
└── README.md                 # Documentación completa del framework

```

## Soporte para seguimiento de los Bugs:
#https://trello.com/b/vUOODe17/sauce-demo


## ✒️ Autor
# Diego Ezequiel Ledesma - Automatización de Pruebas & QA Engineer - DiegoLed

