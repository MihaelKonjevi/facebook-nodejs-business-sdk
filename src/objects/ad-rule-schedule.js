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
 * AdRuleSchedule
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdRuleSchedule extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      days: 'days',
      end_minute: 'end_minute',
      start_minute: 'start_minute',
    });
  }

}
