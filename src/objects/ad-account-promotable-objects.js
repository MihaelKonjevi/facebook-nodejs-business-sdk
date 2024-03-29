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
 * AdAccountPromotableObjects
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountPromotableObjects extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      promotable_app_ids: 'promotable_app_ids',
      promotable_page_ids: 'promotable_page_ids',
      promotable_urls: 'promotable_urls',
    });
  }

}
