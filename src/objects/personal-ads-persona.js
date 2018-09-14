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
 * PersonalAdsPersona
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PersonalAdsPersona extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      email: 'email',
      first_name: 'first_name',
      id: 'id',
      last_name: 'last_name',
      pending_email: 'pending_email'
    });
  }

  get (fields, params): PersonalAdsPersona {
    return this.read(
      fields,
      params
    );
  }
}
