/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * Currency
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Currency extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      currency_exchange: 'currency_exchange',
      currency_exchange_inverse: 'currency_exchange_inverse',
      currency_offset: 'currency_offset',
      usd_exchange: 'usd_exchange',
      usd_exchange_inverse: 'usd_exchange_inverse',
      user_currency: 'user_currency',
      id: 'id'
    });
  }
}
