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
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';

/**
 * PagePostExperiment
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PagePostExperiment extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      auto_resolve_settings: 'auto_resolve_settings',
      control_video_id: 'control_video_id',
      creation_time: 'creation_time',
      creator: 'creator',
      declared_winning_time: 'declared_winning_time',
      declared_winning_video_id: 'declared_winning_video_id',
      description: 'description',
      experiment_video_ids: 'experiment_video_ids',
      id: 'id',
      insight_snapshots: 'insight_snapshots',
      name: 'name',
      optimization_goal: 'optimization_goal',
      publish_status: 'publish_status',
      publish_time: 'publish_time',
      scheduled_experiment_timestamp: 'scheduled_experiment_timestamp',
      updated_time: 'updated_time',
    });
  }

  static get OptimizationGoal (): Object {
    return Object.freeze({
      auto_resolve_to_control: 'AUTO_RESOLVE_TO_CONTROL',
      avg_time_watched: 'AVG_TIME_WATCHED',
      comments: 'COMMENTS',
      impressions: 'IMPRESSIONS',
      impressions_unique: 'IMPRESSIONS_UNIQUE',
      link_clicks: 'LINK_CLICKS',
      other: 'OTHER',
      reactions: 'REACTIONS',
      reels_plays: 'REELS_PLAYS',
      shares: 'SHARES',
      video_views_60s: 'VIDEO_VIEWS_60S',
    });
  }

  getVideoInsights (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/video_insights'
    );
  }

  // $FlowFixMe : Support Generic Types
  delete (fields: Array<string>, params: Object = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.delete(
      params
    );
  }

  
  get (fields: Array<string>, params: Object = {}): PagePostExperiment {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
