# PowerShell script to build and deploy to GitHub Pages
Write-Host "Building Akibworks React app for GitHub Pages..." -ForegroundColor Green

# Set the base path for GitHub Pages
$env:BASE_PATH = '/AkibWorks-2/'

# Install dependencies if node_modules doesn't exist
if (!(Test-Path "node_modules")) {
    Write-Host "Installing dependencies..." -ForegroundColor Yellow
    npm install
}

# Build the project
Write-Host "Building project..." -ForegroundColor Yellow
npm run build

# Check if build was successful
if (Test-Path "dist") {
    Write-Host "Build successful! Files are in the 'dist' folder." -ForegroundColor Green
    Write-Host "Now commit and push the changes to trigger GitHub Actions deployment." -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Commands to run:" -ForegroundColor White
    Write-Host "git add ." -ForegroundColor Gray
    Write-Host "git commit -m 'Add GitHub Actions deployment'" -ForegroundColor Gray
    Write-Host "git push origin main" -ForegroundColor Gray
} else {
    Write-Host "Build failed! Check the error messages above." -ForegroundColor Red
}
