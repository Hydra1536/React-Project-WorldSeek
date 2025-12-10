# 🌍 React Country Seek

A modern, responsive React application showcasing countries from around the world with detailed information, search functionality, and region-based filtering.

![React Country Seek](https://img.shields.io/badge/React-19.0.0--rc.1-blue?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2.4-yellow?logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg)

## ✨ Features

### 🏠 **Core Functionality**
- **Country Browser**: Browse and explore countries from around the world
- **Detailed Country Information**: View comprehensive country data including flags, names, regions, and more
- **Search & Filter**: Search countries by name and filter by regions (Africa, Americas, Asia, Europe, Oceania)
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Navigation**: React Router implementation with error boundaries

### 📱 **User Experience**
- **Responsive Navigation**: Hamburger menu for mobile devices with smooth animations
- **Loading States**: Beautiful loading animations while fetching data
- **Error Handling**: Graceful error handling with retry functionality
- **Modern UI**: Clean, dark-themed interface with smooth transitions
- **Search Functionality**: Real-time search with instant results
- **Region Filtering**: Filter countries by geographic regions

### 🔧 **Technical Features**
- **API Integration**: Fetches live data from REST Countries API
- **State Management**: React hooks for efficient state management
- **Performance Optimized**: Uses React 19 features like `useTransition` for smooth UI
- **Mobile-First Design**: Responsive CSS with mobile breakpoints
- **Component Architecture**: Modular, reusable React components

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd react_country
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 📁 Project Structure

```
react_country/
├── public/                 # Static assets
│   ├── images/            # Image assets
│   └── index.html         # HTML template
├── src/
│   ├── api/               # API utilities and data
│   │   ├── countryData.json    # Local country data
│   │   ├── footerApi.json      # Footer data
│   │   └── postApi.jsx         # API functions
│   ├── components/        # Reusable components
│   │   ├── Layout/        # Layout components
│   │   │   ├── AppLayout.jsx       # Main app layout
│   │   │   ├── CountryCard.jsx     # Country display card
│   │   │   └── CountryDetails.jsx  # Country details view
│   │   └── UI/           # UI components
│   │       ├── Footers.jsx         # Footer component
│   │       ├── Headers.jsx         # Header with navigation
│   │       ├── HeroSection.jsx     # Hero banner section
│   │       ├── Loader.jsx          # Loading spinner
│   │       └── SearchFilter.jsx    # Search and filter component
│   ├── pages/            # Page components
│   │   ├── About.jsx     # About page
│   │   ├── Contact.jsx   # Contact page
│   │   ├── Country.jsx   # Country listing page
│   │   ├── ErrorPage.jsx # Error handling page
│   │   └── Home.jsx      # Home page
│   ├── assets/           # Static assets
│   ├── App.jsx          # Main app component
│   ├── App.css          # App-specific styles
│   ├── index.css        # Global styles
│   └── main.jsx         # App entry point
├── package.json         # Project dependencies
├── vite.config.js       # Vite configuration
└── eslint.config.js     # ESLint configuration
```

## 🎨 Technologies Used

### Core Technologies
- **React 19.0.0-rc.1**: Modern React with latest features
- **Vite 7.2.4**: Fast build tool and development server
- **React Router DOM 7.10.1**: Client-side routing

### UI & Styling
- **CSS3**: Custom CSS with CSS Grid and Flexbox
- **Responsive Design**: Mobile-first approach
- **CSS Animations**: Smooth transitions and hover effects

### Development Tools
- **ESLint 9.39.1**: Code linting and quality
- **Axios 1.13.2**: HTTP client for API requests
- **React Icons 5.5.0**: Icon library

## 🌐 API Integration

The application fetches country data from the [REST Countries API](https://restcountries.com/), providing:
- Country names and official names
- Country flags (SVG format)
- Geographic regions
- Population and area data
- Currency and language information

## 📱 Pages & Components

### Pages
- **Home**: Welcome page with hero section
- **About**: Information about the project
- **Contact**: Contact information and forms
- **Country**: Main country browser with search and filter
- **ErrorPage**: Custom error handling page

### Components
- **AppLayout**: Main application wrapper
- **CountryCard**: Individual country display card
- **CountryDetails**: Detailed country information
- **Headers**: Navigation header with responsive menu
- **Footers**: Footer with links and information
- **HeroSection**: Landing page hero section
- **SearchFilter**: Search and region filter component
- **Loader**: Loading state component

## 🎯 Features Showcase

### Search & Filter
- **Real-time Search**: Search countries by name as you type
- **Region Filtering**: Filter by geographic regions
- **Sort Functionality**: Sort countries alphabetically (A-Z, Z-A)

### Responsive Design
- **Desktop**: Full horizontal navigation with hover effects
- **Tablet**: Optimized layout for medium screens
- **Mobile**: Hamburger menu with slide-down navigation

### Performance Features
- **React Transitions**: Smooth state updates with `useTransition`
- **Error Boundaries**: Graceful error handling
- **Loading States**: User-friendly loading indicators
- **Data Validation**: Proper API response validation

## 🐛 Bug Fixes & Issues Resolved

This project includes fixes for common React development issues:

1. **Import/Export Errors**: Resolved component import/export mismatches
2. **API Integration**: Fixed CORS and data validation issues
3. **Responsive Navigation**: Implemented working hamburger menu
4. **State Management**: Proper React hooks usage
5. **Error Handling**: Comprehensive error boundaries and fallbacks

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [REST Countries API](https://restcountries.com/) for country data
- [React Team](https://reactjs.org/) for the amazing framework
- [Vite Team](https://vitejs.dev/) for the fast build tool
- [React Icons](https://react-icons.github.io/react-icons/) for the icon library

## 📞 Support

If you encounter any issues or have questions, please:
1. Check the existing issues in the repository
2. Create a new issue with detailed information
3. Include browser console errors and steps to reproduce

---

**Built with ❤️ using React and Vite**

*This project demonstrates modern React development practices with responsive design, API integration, and user-friendly interfaces.*
