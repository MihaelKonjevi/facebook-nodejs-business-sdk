 /*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * ProductEventStat
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductEventStat extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      date_start: 'date_start',
      date_stop: 'date_stop',
      device_type: 'device_type',
      event: 'event',
      event_source: 'event_source',
      total_content_ids_matched_other_catalogs: 'total_content_ids_matched_other_catalogs',
      total_matched_content_ids: 'total_matched_content_ids',
      total_unmatched_content_ids: 'total_unmatched_content_ids',
      unique_content_ids_matched_other_catalogs: 'unique_content_ids_matched_other_catalogs',
      unique_matched_content_ids: 'unique_matched_content_ids',
      unique_unmatched_content_ids: 'unique_unmatched_content_ids',
    });
  }

  static get DeviceType (): Object {
    return Object.freeze({
      desktop: 'desktop',
      mobile_android_phone: 'mobile_android_phone',
      mobile_android_tablet: 'mobile_android_tablet',
      mobile_ipad: 'mobile_ipad',
      mobile_iphone: 'mobile_iphone',
      mobile_ipod: 'mobile_ipod',
      mobile_phone: 'mobile_phone',
      mobile_tablet: 'mobile_tablet',
      mobile_windows_phone: 'mobile_windows_phone',
      unknown: 'unknown',
    });
  }
  static get Event (): Object {
    return Object.freeze({
      addtocart: 'AddToCart',
      addtowishlist: 'AddToWishlist',
      initiatecheckout: 'InitiateCheckout',
      lead: 'Lead',
      purchase: 'Purchase',
      search: 'Search',
      subscribe: 'Subscribe',
      viewcontent: 'ViewContent',
    });
  }
  static get Breakdowns (): Object {
    return Object.freeze({
      device_type: 'DEVICE_TYPE',
    });
  }
}
