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
 * BusinessImage
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessImage extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      business: 'business',
      creation_time: 'creation_time',
      hash: 'hash',
      height: 'height',
      id: 'id',
      media_library_url: 'media_library_url',
      name: 'name',
      url: 'url',
      url_128: 'url_128',
      width: 'width',
    });
  }

  static get ValidationAdPlacements (): Object {
    return Object.freeze({
      audience_network_instream_video: 'AUDIENCE_NETWORK_INSTREAM_VIDEO',
      audience_network_instream_video_mobile: 'AUDIENCE_NETWORK_INSTREAM_VIDEO_MOBILE',
      audience_network_rewarded_video: 'AUDIENCE_NETWORK_REWARDED_VIDEO',
      desktop_feed_standard: 'DESKTOP_FEED_STANDARD',
      facebook_story_mobile: 'FACEBOOK_STORY_MOBILE',
      facebook_story_sticker_mobile: 'FACEBOOK_STORY_STICKER_MOBILE',
      instagram_standard: 'INSTAGRAM_STANDARD',
      instagram_story: 'INSTAGRAM_STORY',
      instant_article_standard: 'INSTANT_ARTICLE_STANDARD',
      instream_banner_desktop: 'INSTREAM_BANNER_DESKTOP',
      instream_banner_mobile: 'INSTREAM_BANNER_MOBILE',
      instream_video_desktop: 'INSTREAM_VIDEO_DESKTOP',
      instream_video_image: 'INSTREAM_VIDEO_IMAGE',
      instream_video_mobile: 'INSTREAM_VIDEO_MOBILE',
      messenger_mobile_inbox_media: 'MESSENGER_MOBILE_INBOX_MEDIA',
      messenger_mobile_story_media: 'MESSENGER_MOBILE_STORY_MEDIA',
      mobile_feed_standard: 'MOBILE_FEED_STANDARD',
      mobile_fullwidth: 'MOBILE_FULLWIDTH',
      mobile_interstitial: 'MOBILE_INTERSTITIAL',
      mobile_medium_rectangle: 'MOBILE_MEDIUM_RECTANGLE',
      mobile_native: 'MOBILE_NATIVE',
      right_column_standard: 'RIGHT_COLUMN_STANDARD',
      suggested_video_mobile: 'SUGGESTED_VIDEO_MOBILE',
    });
  }

  
  get (fields: Array<string>, params: Object = {}): BusinessImage {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
