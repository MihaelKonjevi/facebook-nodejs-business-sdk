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
 * VideoCopyrightConditionGroup
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class VideoCopyrightConditionGroup extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      action: 'action',
      conditions: 'conditions',
      validity_status: 'validity_status',
    });
  }

}
