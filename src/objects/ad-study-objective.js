/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import Cursor from './../cursor';
import AdPlacePageSet from './ad-place-page-set';
import AdsPixel from './ads-pixel';
import Application from './application';
import CustomConversion from './custom-conversion';
import OfflineConversionDataSet from './offline-conversion-data-set';
import PartnerStudy from './partner-study';

/**
 * AdStudyObjective
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdStudyObjective extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      id: 'id',
      is_primary: 'is_primary',
      last_updated_results: 'last_updated_results',
      name: 'name',
      results: 'results',
      type: 'type',
    });
  }

  static get Type (): Object {
    return Object.freeze({
      brand: 'BRAND',
      brandlift: 'BRANDLIFT',
      ftl: 'FTL',
      mae: 'MAE',
      mai: 'MAI',
      nonsales: 'NONSALES',
      partner: 'PARTNER',
      sales: 'SALES',
      telco: 'TELCO',
    });
  }

  getAdPlacePageSets (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdPlacePageSet,
      fields,
      params,
      fetchFirstPage,
      '/ad_place_page_sets'
    );
  }

  getAdsPixels (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdsPixel,
      fields,
      params,
      fetchFirstPage,
      '/adspixels'
    );
  }

  getApplications (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Application,
      fields,
      params,
      fetchFirstPage,
      '/applications'
    );
  }

  getCustomConversions (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      CustomConversion,
      fields,
      params,
      fetchFirstPage,
      '/customconversions'
    );
  }

  getOfflineConversionDataSets (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      OfflineConversionDataSet,
      fields,
      params,
      fetchFirstPage,
      '/offline_conversion_data_sets'
    );
  }

  getPartnerStudies (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      PartnerStudy,
      fields,
      params,
      fetchFirstPage,
      '/partnerstudies'
    );
  }

  
  get (fields: Array<string>, params: Object = {}): AdStudyObjective {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): AdStudyObjective {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
