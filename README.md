#Cross-Platform Blog
![alt tag](https://cosmicjs.com/uploads/b892a900-807f-11e6-a994-973764f7d6d1-cross-platform-blog.gif)
This repo is an example of how to build cross-platform apps that serve content from [Cosmic JS](https://cosmicjs.com). The iOS and Android apps are built using React Native and the web app runs on a light Node.js web server, all with content served from the [Cosmic JS CMS API](https://cosmicjs.com).  Write your content once, deliver everywhere.
###Features
1. Web is fully responsive down to mobile w/ [Bootstrap](http://getbootstrap.com) frontend.<br />
2. Native iOS and Android apps share the same React Native codebase.  Learn once, write everywhere<sup>TM</sup>.
3. Images are easily manipulated for different device / browser requirements via the Cosmic JS provided [Imgix](https://www.imgix.com/) integration.

Sign up for [Cosmic JS](https://cosmicjs.com) to install the demo content and deploy this website.

** Before trying to run any of the examples, make sure you are connecting to the example bucket `cross-platform-blog` or have imported the bucket.json in the root of this repo to your own bucket in Cosmic JS.
##Web
###Get started Web
```
git clone https://github.com/cosmicjs/cross-platform-blog
cd cross-platform-blog/web
npm install
```
###Run Web in development
```
npm run development
```
Go to [http://localhost:5000](http://localhost:5000).
###Run Web in production
```
COSMIC_BUCKET=your-bucket-slug npm start
```
Go to [http://localhost:3000](http://localhost:3000).
##Native
If you are new to React Native, make sure you check out the [React Native docs](https://facebook.github.io/react-native/) to make sure you have everything set up properly.
###Get started Native
```
cd cross-platform-blog/native
npm install
```
###Config
Edit native/config.js to point to your bucket slug on Cosmic JS.
```
export default {
  COSMIC_BUCKET: 'your-bucket-slug'
}
```
###Run iOS
Run the iOS command inside the native folder:
```
react-native run-ios
```
###Run Android
Run the Android command inside the native folder:
```
react-native run-android
```