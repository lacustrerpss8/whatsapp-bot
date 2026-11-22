git clone https://github.com/ArugaZ/whatsapp-bot.git
cd whatsapp-botnpm installnpx prisma db pushnpm run build# try this:
npm run generateLang
# if get incompatible error, try run:
npm run generateLangV2npm startnpm install -g pm2npm run start:pm2# if you are on a unix
pm2 startup #create a startup script
pm2 save #save the current app

# if you are on windows
npm install pm2-windows-startup -g #install helper dependency
pm2-startup install #create a startup script
pm2 save #save the current app
