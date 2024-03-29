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
 * ShadowIGUserCatalogProductSearch
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ShadowIGUserCatalogProductSearch extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      image_url: 'image_url',
      is_checkout_flow: 'is_checkout_flow',
      merchant_id: 'merchant_id',
      product_id: 'product_id',
      product_name: 'product_name',
      product_variants: 'product_variants',
      retailer_id: 'retailer_id',
      review_status: 'review_status',
    });
  }

}
