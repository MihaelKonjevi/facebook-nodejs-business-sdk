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
 * Engagement
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Engagement extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      count: 'count',
      count_string: 'count_string',
      count_string_with_like: 'count_string_with_like',
      count_string_without_like: 'count_string_without_like',
      social_sentence: 'social_sentence',
      social_sentence_with_like: 'social_sentence_with_like',
      social_sentence_without_like: 'social_sentence_without_like',
    });
  }

}
