# Portfolio Project Setup Instructions

If you're experiencing dependency issues, follow these manual setup steps to ensure a clean installation:

## Option 1: Create a Fresh Project (Recommended)

1. **Delete the existing portfolio directory**:
   ```bash
   rm -rf /c:/laragon/www/git/portfolio
   ```

2. **Create a new React application**:
   ```bash
   cd /c:/laragon/www/git
   npx create-react-app portfolio
   ```

3. **Navigate to the project directory**:
   ```bash
   cd portfolio
   ```

4. **Install required dependencies**:
   ```bash
   npm install --save react-router-dom@6.11.2 styled-components@5.3.10 framer-motion@10.12.16 react-icons@4.8.0
   ```

5. **Copy your existing component files** to the appropriate directories in the new project

## Option 2: Fix the Existing Project

If you prefer to keep your current project:

1. **Delete node_modules and package-lock.json**:
   ```bash
   cd /c:/laragon/www/git/portfolio
   rm -rf node_modules
   rm package-lock.json
   ```

2. **Clear npm cache**:
   ```bash
   npm cache clean --force
   ```

3. **Ensure package.json has the correct dependencies**:
   ```json
   {
     "dependencies": {
       "@testing-library/jest-dom": "^5.16.5",
       "@testing-library/react": "^13.4.0",
       "@testing-library/user-event": "^13.5.0",
       "framer-motion": "^10.12.16",
       "react": "^18.2.0",
       "react-dom": "^18.2.0",
       "react-icons": "^4.8.0",
       "react-router-dom": "^6.11.2",
       "react-scripts": "5.0.1",
       "styled-components": "^5.3.10",
       "web-vitals": "^2.1.4"
     }
   }
   ```

4. **Reinstall dependencies**:
   ```bash
   npm install
   ```

## Troubleshooting

If you're still having issues:

1. **Check Node.js version**:
   ```bash
   node -v
   ```
   Make sure you're using a compatible Node.js version (v14 or newer recommended)

2. **Try using yarn instead of npm**:
   ```bash
   npm install -g yarn
   yarn install
   ```

3. **Inspect specific dependency issues**:
   ```bash
   npm ls react-router-dom
   ```

4. **Verify no conflicting React versions**:
   ```bash
   npm ls react
   ```

5. **Start with minimal imports**:
   Create a minimal App.js file first to make sure the basic setup works before adding all components:
   ```javascript
   // Simple test App.js
   import React from 'react';
   
   function App() {
     return (
       <div className="App">
         <header className="App-header">
           <p>Portfolio App</p>
         </header>
       </div>
     );
   }
   
   export default App;
   ```
