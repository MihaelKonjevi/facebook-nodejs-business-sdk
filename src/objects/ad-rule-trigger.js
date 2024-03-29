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
 * AdRuleTrigger
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdRuleTrigger extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      field: 'field',
      operator: 'operator',
      type: 'type',
      value: 'value',
    });
  }

  static get Operator (): Object {
    return Object.freeze({
      all: 'ALL',
      any: 'ANY',
      contain: 'CONTAIN',
      equal: 'EQUAL',
      greater_than: 'GREATER_THAN',
      in: 'IN',
      in_range: 'IN_RANGE',
      less_than: 'LESS_THAN',
      none: 'NONE',
      not_contain: 'NOT_CONTAIN',
      not_equal: 'NOT_EQUAL',
      not_in: 'NOT_IN',
      not_in_range: 'NOT_IN_RANGE',
    });
  }
  static get Type (): Object {
    return Object.freeze({
      delivery_insights_change: 'DELIVERY_INSIGHTS_CHANGE',
      metadata_creation: 'METADATA_CREATION',
      metadata_update: 'METADATA_UPDATE',
      stats_change: 'STATS_CHANGE',
      stats_milestone: 'STATS_MILESTONE',
    });
  }
}
