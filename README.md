### Local Testing
1) ```yarn start``` to run the app in the development mode.

Before deploying, the build must go through local testing.

1) CLI: ```yarn build``` to build the project.
2) ```cd build``` and ```http-server --push-state```
3) Open [http://10.7.18.10:8080](http://10.7.18.10:8080) to view it in the browser.

### Production Build

1) ```yarn build``` to build the project.
2) ```cd build```
3) ```git push``` to deploy to server host - [deanoverton.com] (http://deanoverton.com)
