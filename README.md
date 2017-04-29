# Matisu.be

#### What
The [website](http://www.matisu.be/) of an artisanl carpenter in Belgium.

#### Highlights
* Built with Gulp 4, Nunchucks (HTML), SASS (CSS), vanilla JS, Atom & Git
* Mobile responsive & retina-ready
* Served on SSD Ubuntu Nginx servers
* Code by [Jan Werkhoven](https://github.com/janwerkhoven)

#### Start coding
First make sure you have [NPM](https://nodejs.org/en/download/), [Yarn](https://yarnpkg.com/en/) and [Gulp](http://gulpjs.com/):
```
brew update
brew install yarn
npm install --global gulp-cli;
```
Then clone, install, build, watch and serve the project:
```
git clone git@github.com:janwerkhoven/matisu.be.git ~/janwerkhoven;
cd ~/janwerkhoven/matisu.be;
bower install;
yarn install;
atom .;
gulp
```
Open [http://localhost:9000](http://localhost:9000)

#### Contact
Get in touch on [LinkedIn](https://au.linkedin.com/pub/jan-werkhoven/10/64/b30), [GitHub](https://github.com/janwerkhoven) or <a href="mailto:jw@nabu.io" target="_blank">jw@nabu.io</a>.

--------------

**Jan Werkhoven**  
Web Developer  
& UI Designer






# HotDoc Static Assets

In this repo we store:
* All static assets and code which needs to be publicly available (such as HotDoc Widget, Lightbox and email images)
* All loose code snippets which do not belong to Rails, nor Ember (such as email templates and email signatures)

The files within the `dist` folder are uploaded to our public CDN: [https://cdn.hotdoc.com.au/static/](https://cdn.hotdoc.com.au/static/index.html)

Important assets downloaded every day (do not break):
* https://cdn.hotdoc.com.au/static/assets/js/hotdoc-widgets.min.js
* https://cdn.hotdoc.com.au/static/assets/js/hotdoc-lightbox.min.js
* https://cdn.hotdoc.com.au/static/assets/js/hotdoc-widget.min.js
* https://cdn.hotdoc.com.au/static/assets/css/hotdoc-lightbox.min.css
* https://cdn.hotdoc.com.au/static/assets/css/hotdoc-widget.min.css

### Start coding

First make sure you have [NPM](https://nodejs.org/en/download/), [Yarn](https://yarnpkg.com/en/) and [Gulp](http://gulpjs.com/):
```
brew update
brew install yarn
npm install --global gulp-cli;
```
Then clone, install, build, watch and serve the project:
```
git clone https://github.com/htdc/hotdoc-grunt-static-assets ~/hotdoc/static-assets;
cd ~/hotdoc-static-assets;
bower install;
yarn install;
atom .;
gulp
```
Open [http://localhost:9000/static/widgets/](http://localhost:9000/static/widgets/)
Open [http://localhost:9000/static/emails/](http://localhost:9000/static/signatures/)
Open [http://localhost:9000/static/signatures/](http://localhost:9000/static/signatures/)

### Gulp commands

The most common task you'll want to run are 1) build & serve, 2) build, 3) serve and 4) deploy to AWS S3.
```
gulp
gulp build
gulp serve
```
Each sub task in Gulp can be run individually as well: `gulp someTask`. Look in the `gulpfile.babel.js` for all available tasks.

### Deploying to production

To deploy to our S3 bucket, run one of these 3 commands:

```
gulp deploy --bump major
gulp deploy --bump minor
gulp deploy --bump patch
```

The version bump flag is required. As per convention:
* major - version when you make incompatible API changes
* minor - version when you add functionality in a backwards-compatible manner
* patch - version when you make backwards-compatible bug fixes

That command will first build the `dist/` folder, then bump the version in the `package.json` and then upload all the files in `dist/` to our AWS S3. Before you can do that, make sure you have created the JSON file containing the credentials `../.aws.json`. So they are stored right outside of the Git repo for security. The JSON should look like:
```
{
  "key": "...",
  "secret": "...",
  "region": "...",
  "bucket": "..."
}
```
Please ask Tom for the exact credentials.

Some recommend to store the keys in `.aws/credentials`, but conforming to that best practice makes stealing the keys quiet predictable no? :)
