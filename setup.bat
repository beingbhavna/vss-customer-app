@echo off
REM PowerElectric Setup Script for Windows

echo Setting up PowerElectric Angular 18 Project...
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js is not installed. Please install Node.js first.
    exit /b 1
)

echo ✅ Node.js version:
node -v
echo ✅ npm version:
npm -v
echo.

REM Install dependencies
echo 📦 Installing dependencies... This may take a few minutes.
call npm install

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ✅ Installation completed successfully!
    echo.
    echo 📝 Next Steps:
    echo 1. Add your slide images to: src\assets\images\slides\
    echo 2. Update your contact information in: src\app\components\contact\
    echo 3. Update services and content in: src\app\services\data.service.ts
    echo.
    echo 🚀 Start development server with:
    echo    npm start
    echo.
    echo 📦 Build for production with:
    echo    npm run build
    echo.
) else (
    echo ❌ Installation failed. Please try again.
    exit /b 1
)
