# Riggl Scholar
Modern study resources app for students.

Please note, the app was made based on what Scottish students need in order to study so if there's anything it doesn't do but you need it to do, create a feature request issues.

Since the app was made based on what Scottish students need in order to study, if you do not have a Glow Scotland account (ask your guidance teacher for one if you don't have one) then you will need to provide manual verification.

## Info
This app is still being development but as I code it, i will push my changes. Feel free to have a look around while I develop it.

In order to test this on your own machine, clone the repository and run `npm install` and then you should run `npx electron-rebuild` before running. If you want to change the styles while testing, run `npm run dev` and to test it run `npm start`.
This repo does not include the fonts but the code currently is programmed to use Open Sans from Google Fonts and was downloaded via [get-google-fonts](https://npmjs.org/package/get-google-font)

The app has its own library it uses (which is compiled using babel and is part of the `npm run dev` command) but feel free to use it in your own projects as long as you give credit. It has a fully working "choose menu" (multiple choices kind of like the ones you get when you first open IntelliJ Idea). See scripts/main.js for an example.
