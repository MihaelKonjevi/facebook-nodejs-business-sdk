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
 * AdsOptimalDeliveryGrowthOpportunity
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsOptimalDeliveryGrowthOpportunity extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      child_metadata: 'child_metadata',
      metadata: 'metadata',
      optimization_type: 'optimization_type',
    });
  }

}
