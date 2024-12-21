#!/bin/bash

# Update system
sudo apt-get update
sudo apt-get upgrade -y

# Install Nginx if not already installed
sudo apt-get install nginx -y

# Remove default Nginx configuration
sudo rm /etc/nginx/sites-enabled/default

# Copy our Nginx configuration
sudo cp nginx.conf /etc/nginx/sites-available/react-app
sudo ln -s /etc/nginx/sites-available/react-app /etc/nginx/sites-enabled/

# Create directory for the app
sudo mkdir -p /var/www/html

# Copy built files to the serving directory
sudo cp -r dist/* /var/www/html/

# Set proper permissions
sudo chown -R www-data:www-data /var/www/html
sudo chmod -R 755 /var/www/html

# Test Nginx configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
