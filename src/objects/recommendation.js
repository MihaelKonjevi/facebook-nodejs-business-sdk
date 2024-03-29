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
 * Recommendation
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Recommendation extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      created_time: 'created_time',
      has_rating: 'has_rating',
      has_review: 'has_review',
      open_graph_story: 'open_graph_story',
      rating: 'rating',
      recommendation_type: 'recommendation_type',
      review_text: 'review_text',
      reviewer: 'reviewer',
    });
  }

}
