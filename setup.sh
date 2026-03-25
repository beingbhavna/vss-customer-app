#!/bin/bash
# PowerElectric Setup Script

echo "Setting up PowerElectric Angular 18 Project..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

echo "✅ Node.js version: $(node -v)"
echo "✅ npm version: $(npm -v)"
echo ""

# Install dependencies
echo "📦 Installing dependencies... This may take a few minutes."
npm install

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Installation completed successfully!"
    echo ""
    echo "📝 Next Steps:"
    echo "1. Add your slide images to: src/assets/images/slides/"
    echo "2. Update your contact information in: src/app/components/contact/"
    echo "3. Update services and content in: src/app/services/data.service.ts"
    echo ""
    echo "🚀 Start development server with:"
    echo "   npm start"
    echo ""
    echo "📦 Build for production with:"
    echo "   npm run build"
    echo ""
else
    echo "❌ Installation failed. Please try again."
    exit 1
fi
