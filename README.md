#Cross-Platform Blog
A cross-platform blog demonstrates how to serve content from Cosmic JS to iOS, Android and Web. iOS, Android are built using React Native.  Web runs on a light Node.js web app. Content is served via the Cosmic JS CMS API.
##Features
1. Fully responsive down to mobile w/ [Bootstrap](http://getbootstrap.com) frontend<br />
2. Both iOS and Android share the same React native codebase.  Learn once, write everywhere<sup>TM</sup>.
Sign up for [Cosmic JS](https://cosmicjs.com) to install the demo content and deploy this website.
##Get started
```
git clone https://github.com/cosmicjs/cross-platform-blog
cd cross-platform-blog/web
npm install
```
###Run Web in development
Create a `config/development.js` file and match it to `config/production.js` with your values.
```
npm run development
```
Go to [http://localhost:5000](http://localhost:5000).
###Run Web in production
```
COSMIC_BUCKET=your-bucket-slug npm start
```
Go to [http://localhost:3000](http://localhost:3000).
###Config React Native
Edit config.js to point to your bucket slug on Cosmic JS
```
export default {
  COSMIC_BUCKET: 'your-bucket-slug'
}
```
###Run React Native iOS
Navigate to the native folder, then run the iOS command:
```
cd native
react-native run-ios
```
###Run React Native Android
Navigate to the native folder, then run the Android command:
```
cd native
react-native run-android
```
If you have any issues getting the React Native working, check out the [React Native docs](https://facebook.github.io/react-native/).