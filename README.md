# BiteHouse Restaurant

BiteHouse is a restaurant website front end built with React and Vite. It includes a home page, browsable menu, order flow, table reservations, contact page, and a simple login/register + protected dashboard.

## Tech stack

- **React 19** with **Vite 7** (dev server + build tooling)
- **React Router 7** for client-side routing
- **Bootstrap 5** and **Tailwind CSS 4** for styling
- **react-slick** / **slick-carousel** for carousels
- **Axios** for HTTP requests
- **Firebase SDK** installed (currently stubbed out, see [Notes](#notes))
- **ESLint 9** for linting

## Project structure

```
BiteHouse-Restaurant/
├── public/
│   ├── data/menu.json          # Public copy of menu data
│   └── img/                    # Site images (banners, icons, logos, menu photos, etc.)
├── src/
│   ├── assets/data/menu.json   # Menu data consumed by the app
│   ├── components/             # Shared UI: Header, Footer, Nav, Hero, food/menu cards, etc.
│   ├── context/
│   │   ├── AuthContext.jsx     # Demo auth state (email-only, no real auth yet)
│   │   └── CartContext.jsx     # In-memory cart state
│   ├── pages/                  # Route-level pages (Home, Menu, MenuDetails, Order,
│   │                           #   Reservations, Contact, Login, Register, Dashboard, NotFound)
│   ├── services/                # API-facing service functions (see Notes)
│   ├── firebase.js             # Firebase init (currently a stub)
│   ├── App.jsx                 # Route definitions
│   └── main.jsx                # App entry point
├── index.html
├── package.json
└── vite.config.js
```

## Pages / routes

| Route | Page |
|---|---|
| `/` | Home |
| `/menu` | Menu |
| `/menu/:id` | Menu item details |
| `/order` | Order |
| `/reservations` | Table reservations |
| `/contact` | Contact |
| `/login` | Login |
| `/register` | Register |
| `/dashboard` | Dashboard (protected — requires login) |
| `*` | 404 Not Found |

## Getting started

### Prerequisites

- Node.js (LTS recommended)
- npm

### Installation

```bash
git clone https://github.com/tasifhossan/BiteHouse-Restaurant.git
cd BiteHouse-Restaurant
npm install
```

### Run in development

```bash
npm run dev
```

This starts the Vite dev server (with hot module reload) at the URL printed in your terminal, typically `http://localhost:5173`.

### Build for production

```bash
npm run build
```

Outputs a production build to `dist/`.

### Preview the production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Notes

This project is currently a front-end demo/prototype rather than a fully wired-up app:

- **Auth is a placeholder.** `AuthContext` accepts any email with no password check, and `authService.login()` always resolves successfully — there's no real backend authentication yet.
- **Firebase isn't initialized.** `src/firebase.js` is a stub (`export default null`); the Firebase config needs to be filled in before any Firebase features (auth, DB, etc.) will work.
- **Menu data is static.** `menuService.getMenu()` reads from the local `src/assets/data/menu.json` file rather than calling a live API.
- **Reservations aren't persisted.** `reservationService.submitReservation()` just logs to the console — it isn't wired up to a backend yet.

If you intend to make this production-ready, the natural next steps are: connect a real backend/API (or Firebase project) for auth, menu data, orders, and reservations, and replace the placeholder service functions with real API calls.

## License

No license file is currently included in this repository. All rights reserved by the author unless stated otherwise.
