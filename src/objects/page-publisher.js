/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * PagePublisher
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PagePublisher extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      icon: 'icon',
      id: 'id',
      name: 'name',
      url: 'url'
    });
  }

  get (fields, params): PagePublisher {
    return this.read(
      fields,
      params
    );
  }
}
