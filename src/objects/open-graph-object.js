/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import Comment from './comment';
import Profile from './profile';
import Photo from './photo';
import ProfilePictureSource from './profile-picture-source';

/**
 * OpenGraphObject
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class OpenGraphObject extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      admins: 'admins',
      application: 'application',
      audio: 'audio',
      context: 'context',
      created_time: 'created_time',
      description: 'description',
      determiner: 'determiner',
      engagement: 'engagement',
      id: 'id',
      image: 'image',
      is_scraped: 'is_scraped',
      locale: 'locale',
      location: 'location',
      post_action_id: 'post_action_id',
      profile_id: 'profile_id',
      restrictions: 'restrictions',
      see_also: 'see_also',
      site_name: 'site_name',
      title: 'title',
      type: 'type',
      updated_time: 'updated_time',
      video: 'video'
    });
  }

  getComments (fields, params, fetchFirstPage = true): Comment {
    return this.getEdge(
      Comment,
      fields,
      params,
      fetchFirstPage,
      '/comments'
    );
  }

  createComment (fields, params): Comment {
    return this.createEdge(
      '/comments',
      fields,
      params,
      Comment
    );
  }

  getLikes (fields, params, fetchFirstPage = true): Profile {
    return this.getEdge(
      Profile,
      fields,
      params,
      fetchFirstPage,
      '/likes'
    );
  }

  createLike (fields, params): OpenGraphObject {
    return this.createEdge(
      '/likes',
      fields,
      params,
      OpenGraphObject
    );
  }

  createPhoto (fields, params): Photo {
    return this.createEdge(
      '/photos',
      fields,
      params,
      Photo
    );
  }

  getPicture (fields, params, fetchFirstPage = true): ProfilePictureSource {
    return this.getEdge(
      ProfilePictureSource,
      fields,
      params,
      fetchFirstPage,
      '/picture'
    );
  }

  getReactions (fields, params, fetchFirstPage = true): Profile {
    return this.getEdge(
      Profile,
      fields,
      params,
      fetchFirstPage,
      '/reactions'
    );
  }

  get (fields, params): OpenGraphObject {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): OpenGraphObject {
    return super.update(
      params
    );
  }
}
