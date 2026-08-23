# LitroGo ⛽

A trip fuel cost calculator built for road trips. Enter your route, set your vehicle details, and split the total cost with your circle.

🔗 **Live Demo:** : ----

---

## Features

- Location autocomplete — search any place in the Philippines
- Interactive map with route preview
- Real-time fuel prices based on DOE Philippines advisories
- Automatic fuel cost calculation based on distance and vehicle efficiency
- Group cost splitting per passenger
- Admin panel for weekly price updates

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React, Tailwind CSS, Leaflet.js |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas |
| APIs | OpenRouteService (distance + autocomplete) | Leaflet.js


---

## Getting Started

### Prerequisites
- Node.js v18+
- MongoDB Atlas account
- OpenRouteService API key

### Installation

**Clone the repo:**
```bash
git clone https://github.com/yourusername/litro-go.git
cd litro-go
```

**Setup Backend:**
```bash
cd Backend
npm install
```

Create a `.env` file in `/Backend`:
VITE_ORS_API_KEY=your_openrouteservice_api_key
VITE_ADMIN_PASSWORD=your_admin_password


Run the frontend:
```bash
npm run dev
```

---

## Project Structure

```
litro-go/
├── Backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── fuelController.js
│   │   │   └── distanceController.js
│   │   ├── models/
│   │   │   └── FuelPrice.js
│   │   ├── routes/
│   │   │   ├── fuelRoutes.js
│   │   │   └── distanceRoutes.js
│   │   ├── seed.js
│   │   └── index.js
└── Frontend/
    ├── src/
    │   ├── api/
    │   │   ├── fuel.js
    │   │   └── distance.js
    │   ├── components/
    │   │   ├── Buttons.jsx
    │   │   ├── GasCard.jsx
    │   │   ├── LocationInput.jsx
    │   │   ├── MapView.jsx
    │   │   └── StepsCard.jsx
    │   ├── sections/
    │   │   ├── Navbar.jsx
    │   │   ├── HeroSection.jsx
    │   │   ├── InfoSection.jsx
    │   │   ├── Steps.jsx
    │   │   ├── GasWeekSection.jsx
    │   │   ├── CalculatorSection.jsx
    │   │   └── AdminSection.jsx
    │   └── App.jsx
```


---

## Admin Panel

Fuel prices are updated weekly every Tuesday based on DOE Philippines advisories.

---

## License

MIT License — see [LICENSE](LICENSE) for details.

---
