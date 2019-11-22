# Riggl Scholar
Modern study resources app for students.

Please note, because I am scottish, The app currently only has study resources for Scottish students (Nat 5, Higher, and Adv. Higher. I didn't do Nat 3/4 when I was in school so if you know how it works, hit me up). However, if you know the ins and outs of any other country's schooling system, please contact me on Discord at UnknownSloth#6791

## Info
This app is still being developed but as I code it, i will push my changes. Feel free to have a look around while I develop it. I have also published some pre-beta versions in the [releases tab](https://github.com/Floffah/rigglscholar/releases). I will publish new pre-beta releases when I feel like I have reached a point in development where there is a significant change/update since the previous.

In order to test this on your own machine, clone the repository and run `npm install` and then you should run `npx electron-rebuild` to make sure dependencies don't cause errors. If you want to change the styles while testing, run `npm run dev` and to test it run `npm start`.
This repo does not include the fonts but the code currently is programmed to use Open Sans from Google Fonts and was downloaded via [get-google-fonts](https://npmjs.org/package/get-google-font)

The app has its own library it uses (which is compiled using babel and is part of the `npm run dev` command) but feel free to use it in your own projects as long as you give credit. It has a fully working "choose menu" (multiple choices kind of like the ones you get when you first open IntelliJ Idea). See scripts/main.js for an example. I have tested the library on websites too so it is compatible with normal javascript.

The plugin library will eventually be published when I feel like the app is read for it. When I do start working on it and it does what it's supposed to, it will be in the [packages tab](https://github.com/Floffah/rigglscholar/packages)