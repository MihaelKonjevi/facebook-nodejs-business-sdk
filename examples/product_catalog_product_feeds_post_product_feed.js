/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */

 'use strict';
const bizSdk = require('facebook-nodejs-business-sdk');
const ProductCatalog = bizSdk.ProductCatalog;
const ProductFeed = bizSdk.ProductFeed;

const access_token = '<ACCESS_TOKEN>';
const app_secret = '<APP_SECRET>';
const app_id = '<APP_ID>';
const id = '<ID>';
const api = bizSdk.FacebookAdsApi.init(access_token);
const showDebugingInfo = true; // Setting this to true shows more debugging info.
if (showDebugingInfo) {
  api.setDebug(true);
}

const logApiCallResult = (apiCallName, data) => {
  console.log(apiCallName);
  if (showDebugingInfo) {
    console.log('Data:' + JSON.stringify(data));
  }
};

let fields, params;
fields = [
];
params = {
  'name' : 'Test Feed',
  'schedule' : {'interval':'DAILY','url':'http://www.example.com/sample_feed.tsv','hour':'22'},
};
const product_feeds = (new ProductCatalog(id)).createProductFeed(
  fields,
  params
);
logApiCallResult('product_feeds api call complete.', product_feeds);