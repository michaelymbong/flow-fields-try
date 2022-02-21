#!/bin/bash

# Current user
who

# Load PATH, profiles, and other bash settings
echo "Loading bash profile and settings"
export PATH=~/.nvm/versions/node/v16.14.0/bin:$PATH
source ~/.bashrc
source ~/.profile
echo "PATH:"
echo "$PATH"

# Navigate to temp dir and pull changes
cd ~/services/flow-fields-try
git pull origin main

# Install node_modules
echo "Node version"
node -v
rm -rf node_modules
npm install

## Build project
echo "Building..."
npm run  build

# Copy build files to 
rm -rf /var/www/html/flowfields.michaelymbong.art
cp -r build /var/www/html/flowfields.michaelymbong.art

echo "DONE!"
