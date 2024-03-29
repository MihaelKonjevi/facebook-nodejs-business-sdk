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
 * AdCreativeTemplateURLSpec
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeTemplateURLSpec extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      android: 'android',
      config: 'config',
      ios: 'ios',
      ipad: 'ipad',
      iphone: 'iphone',
      web: 'web',
      windows_phone: 'windows_phone',
    });
  }

}
