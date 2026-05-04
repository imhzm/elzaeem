#!/bin/bash
# Deploy script for ELZAEEM INTERNATIONAL to Host
# Host: 147.79.66.116
# User: root

echo "🚀 Starting deployment to 147.79.66.116..."

# SSH into server and deploy
ssh root@147.79.66.116 << 'ENDSSH'
  cd /var/www || mkdir -p /var/www && cd /var/www

  if [ -d "elzaeem-international" ]; then
    echo "📁 Directory exists, pulling latest changes..."
    cd elzaeem-international
    git pull origin master
  else
    echo "📥 Cloning repository..."
    git clone https://github.com/imhzm/elzaeem.git elzaeem-international
    cd elzaeem-international
  fi

  echo "📦 Installing dependencies..."
  npm install

  echo "🔨 Building project..."
  npm run build

  echo "🚀 Starting/Restarting application..."
  if command -v pm2 &> /dev/null; then
    pm2 restart elzaeem || pm2 start npm --name "elzaeem" -- start
    pm2 save
  else
    echo "⚠️ PM2 not found. Starting with nohup..."
    nohup npm start &
  fi

  echo "✅ Deployment complete!"
ENDSSH

echo "✅ Done! Site should be live."
