@echo off
chcp 65001 >nul
title EndoFlow Interventional Suite - Development Server
color 0B
cls

echo ===============================================================================
echo     ______           __      ________                 
echo    / ____/___  ____/ /___   / ____/ /___ _      __    
echo   / __/ / __ \/ __  / __ \ / /_  / / __ \ \ /\ / /    
echo  / /___/ / / / /_/ / /_/ // __/ / / /_/ /\ V  V /     
echo /_____/_/ /_/\__,_/\____//_/   /_/\____/  \_/\_/      
echo.
echo   DIVISION OF INTERVENTIONAL RADIOLOGY
echo   SMS Medical College ^& Attached Hospitals, Jaipur
echo ===============================================================================
echo.
echo [*] Starting EndoFlow Next.js Development Server...
echo [*] Port: http://localhost:3001
echo [*] Working Directory: C:\SSO
echo.

cd /d "C:\SSO"

:: Launch browser after 3 seconds in background
start "" cmd /c "timeout /t 3 /nobreak >nul & start http://localhost:3001"

:: Execute npm run dev
npm run dev

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [!] Development server stopped with an exit code.
    pause
)
