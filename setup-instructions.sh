# Navigate to parent directory
cd /c:/laragon/www/git

# Remove existing portfolio directory if it exists
rm -rf portfolio

# Create a new React app with Create React App
npx create-react-app portfolio

# Navigate into the portfolio directory
cd portfolio

# Install required dependencies
npm install --save react-router-dom@6.11.2 styled-components@5.3.10 framer-motion@10.12.16 react-icons@4.8.0

# Start the development server
npm start
