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
 * CustomConversionStatsResult
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CustomConversionStatsResult extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      aggregation: 'aggregation',
      data: 'data',
      timestamp: 'timestamp',
      id: 'id'
    });
  }

  static get Aggregation (): Object {
    return Object.freeze({
      count: 'count',
      device_type: 'device_type',
      host: 'host',
      pixel_fire: 'pixel_fire',
      unmatched_count: 'unmatched_count',
      unmatched_usd_amount: 'unmatched_usd_amount',
      url: 'url',
      usd_amount: 'usd_amount'
    });
  }

  get (fields, params): CustomConversionStatsResult {
    return this.read(
      fields,
      params
    );
  }
}
