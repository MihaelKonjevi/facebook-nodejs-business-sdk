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
 * AdRuleExecutionSpec
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdRuleExecutionSpec extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      execution_options: 'execution_options',
      execution_type: 'execution_type',
    });
  }

  static get ExecutionType (): Object {
    return Object.freeze({
      change_bid: 'CHANGE_BID',
      change_budget: 'CHANGE_BUDGET',
      change_campaign_budget: 'CHANGE_CAMPAIGN_BUDGET',
      notification: 'NOTIFICATION',
      pause: 'PAUSE',
      ping_endpoint: 'PING_ENDPOINT',
      rebalance_budget: 'REBALANCE_BUDGET',
      rotate: 'ROTATE',
      unpause: 'UNPAUSE',
    });
  }
}
