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
 * PageAboutStoryComposedBlockInlineStyle
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageAboutStoryComposedBlockInlineStyle extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      length: 'length',
      offset: 'offset',
      style: 'style',
    });
  }

}
