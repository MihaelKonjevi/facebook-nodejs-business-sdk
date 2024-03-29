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
 * TargetingDynamicRule
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class TargetingDynamicRule extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      action_type: 'action.type',
      ad_group_id: 'ad_group_id',
      campaign_group_id: 'campaign_group_id',
      campaign_id: 'campaign_id',
      impression_count: 'impression_count',
      page_id: 'page_id',
      post: 'post',
      retention_seconds: 'retention_seconds',
    });
  }

}
