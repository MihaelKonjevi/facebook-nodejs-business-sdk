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
 * AdCampaignOptimizationEvent
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCampaignOptimizationEvent extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      custom_conversion_id: 'custom_conversion_id',
      event_sequence: 'event_sequence',
      event_type: 'event_type',
    });
  }

}
