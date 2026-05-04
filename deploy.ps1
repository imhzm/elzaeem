# Deploy script for ELZAEEM INTERNATIONAL to Host
# Host: 147.79.66.116
# User: root
# Password: Newjoker2k333

Write-Host "🚀 Starting deployment to 147.79.66.116..." -ForegroundColor Cyan

# Check if SSH is available
if (-not (Get-Command ssh -ErrorAction SilentlyContinue)) {
    Write-Host "❌ SSH not found. Please install OpenSSH or use PowerShell 7+" -ForegroundColor Red
    exit 1
}

# Deploy via SSH
ssh root@147.79.66.116 {
    cd /var/www || mkdir -p /var/www && cd /var/www

    if (Test-Path "elzaeem-international") {
        Write-Host "📁 Directory exists, pulling latest changes..."
        cd elzaeem-international
        git pull origin master
    } else {
        Write-Host "📥 Cloning repository..."
        git clone https://github.com/imhzm/elzaeem.git elzaeem-international
        cd elzaeem-international
    }

    Write-Host "📦 Installing dependencies..."
    npm install

    Write-Host "🔨 Building project..."
    npm run build

    Write-Host "🚀 Starting/Restarting application..."
    if (Get-Command pm2 -ErrorAction SilentlyContinue) {
        pm2 restart elzaeem 2>$null || pm2 start npm --name "elzaeem" -- start
        pm2 save
    } else {
        Write-Host "⚠️ PM2 not found. Starting with nohup..."
        Start-Process -NoNewWindow npm -ArgumentList "start"
    }

    Write-Host "✅ Deployment complete!"
}

Write-Host "✅ Done! Site should be live at http://147.79.66.116" -ForegroundColor Green
Write-Host "⚠️ IMPORTANT: Change your password immediately after login!" -ForegroundColor Yellow
Write-Host "   Run: passwd root" -ForegroundColor Yellow
