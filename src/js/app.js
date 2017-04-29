const isProduction = location.host === 'www.matisu.be' ? true : false;
const environment = isProduction ? 'production' : 'staging';

// Fire page view to Google Analytics
if (ga) {
  ga('create', 'UA-34474019-XX', 'auto');
  ga('set', { dimension1: environment });
  ga('send', 'pageview');
}
