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
 * MusicVideoCopyright
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class MusicVideoCopyright extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      creation_time: 'creation_time',
      displayed_matches_count: 'displayed_matches_count',
      id: 'id',
      in_conflict: 'in_conflict',
      isrc: 'isrc',
      match_rule: 'match_rule',
      ownership_countries: 'ownership_countries',
      reference_file_status: 'reference_file_status',
      ridge_monitoring_status: 'ridge_monitoring_status',
      tags: 'tags',
      update_time: 'update_time',
      video_asset: 'video_asset',
      whitelisted_fb_users: 'whitelisted_fb_users',
      whitelisted_ig_users: 'whitelisted_ig_users',
    });
  }


  
  get (fields: Array<string>, params: Object = {}): MusicVideoCopyright {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
