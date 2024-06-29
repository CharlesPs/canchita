
# Canchita Movie Store

Canchita Movie Store is a movie search page built with React and TypeScript, powered by Vite.js. The project uses Material UI and Styled Components for styling, and Redux Toolkit for state management.

## Table of Contents

- [Canchita Movie Store](#canchita-movie-store)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Usage](#usage)
  - [Project Structure](#project-structure)

## Features

- Show default discover movies
- Search for movies by title
- View search result
- Responsive design using Material UI and Styled Components
- State management with Redux Toolkit

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/CharlesPs/canchita.git
   cd canchita
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```
## Environment Variables

Modify the `.env` file in the root of your project and set the following environment variables:

```
VITE_API_BASE_URL=your_api_base_url
VITE_API_TOKEN=your_api_token
VITE_APP_NAME=Your Movie Site
```

## Usage

1. **Start the development server:**

   ```bash
   npm run dev
   ```

   This will start the Vite development server. Open your browser and navigate to `http://localhost:5173` to see the app in action.

2. **Build for production:**

   ```bash
   npm run build
   ```

   This will create an optimized production build in the `dist` directory.

## Project Structure

```
canchita/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── components/
│   ├── redux/
│   ├── types/
│   ├── apiService.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── .env
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
└── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

- `public/`: Static assets like the favicon.
- `src/assets`: Images, icons, and other assets.
- `src/components`: Reusable UI components.
- `src/redux`: Redux store configuration.
- `src/types`: Global type definitions.
- `src/App.tsx`: The main application component.
- `src/main.tsx`: The entry point for the React application.
