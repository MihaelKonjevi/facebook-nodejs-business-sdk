/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import AssignedUser from './assigned-user';
import CustomAudience from './custom-audience';
import DACheck from './da-check';
import AdAccount from './ad-account';
import Business from './business';
import AdsPixelStatsResult from './ads-pixel-stats-result';

/**
 * AdsPixel
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsPixel extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      automatic_matching_fields: 'automatic_matching_fields',
      can_proxy: 'can_proxy',
      code: 'code',
      creation_time: 'creation_time',
      creator: 'creator',
      data_use_setting: 'data_use_setting',
      enable_automatic_matching: 'enable_automatic_matching',
      first_party_cookie_status: 'first_party_cookie_status',
      id: 'id',
      is_created_by_business: 'is_created_by_business',
      last_fired_time: 'last_fired_time',
      name: 'name',
      owner_ad_account: 'owner_ad_account',
      owner_business: 'owner_business',
    });
  }

  static get SortBy (): Object {
    return Object.freeze({
      last_fired_time: 'LAST_FIRED_TIME',
      name: 'NAME',
    });
  }
  static get AutomaticMatchingFields (): Object {
    return Object.freeze({
      ct: 'ct',
      em: 'em',
      fn: 'fn',
      ge: 'ge',
      ln: 'ln',
      ph: 'ph',
      st: 'st',
      zp: 'zp',
    });
  }
  static get DataUseSetting (): Object {
    return Object.freeze({
      advertising_and_analytics: 'ADVERTISING_AND_ANALYTICS',
      analytics_only: 'ANALYTICS_ONLY',
      empty: 'EMPTY',
    });
  }
  static get FirstPartyCookieStatus (): Object {
    return Object.freeze({
      empty: 'EMPTY',
      first_party_cookie_disabled: 'FIRST_PARTY_COOKIE_DISABLED',
      first_party_cookie_enabled: 'FIRST_PARTY_COOKIE_ENABLED',
    });
  }
  static get Tasks (): Object {
    return Object.freeze({
      analyze: 'ANALYZE',
      edit: 'EDIT',
    });
  }

  deleteAssignedUsers (params: Object = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.deleteEdge(
      '/assigned_users',
      params
    );
  }

  getAssignedUsers (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): AssignedUser {
    // $FlowFixMe : Support Generic Types
    return this.getEdge(
      AssignedUser,
      fields,
      params,
      fetchFirstPage,
      '/assigned_users'
    );
  }

  createAssignedUser (fields: Array<string>, params: Object = {}): AdsPixel {
    // $FlowFixMe : Support Generic Types
    return this.createEdge(
      '/assigned_users',
      fields,
      params,
      AdsPixel
    );
  }

  getAudiences (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): CustomAudience {
    // $FlowFixMe : Support Generic Types
    return this.getEdge(
      CustomAudience,
      fields,
      params,
      fetchFirstPage,
      '/audiences'
    );
  }

  getDaChecks (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): DACheck {
    // $FlowFixMe : Support Generic Types
    return this.getEdge(
      DACheck,
      fields,
      params,
      fetchFirstPage,
      '/da_checks'
    );
  }

  deleteSharedAccounts (params: Object = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.deleteEdge(
      '/shared_accounts',
      params
    );
  }

  getSharedAccounts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): AdAccount {
    // $FlowFixMe : Support Generic Types
    return this.getEdge(
      AdAccount,
      fields,
      params,
      fetchFirstPage,
      '/shared_accounts'
    );
  }

  createSharedAccount (fields: Array<string>, params: Object = {}): AdsPixel {
    // $FlowFixMe : Support Generic Types
    return this.createEdge(
      '/shared_accounts',
      fields,
      params,
      AdsPixel
    );
  }

  getSharedAgencies (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Business {
    // $FlowFixMe : Support Generic Types
    return this.getEdge(
      Business,
      fields,
      params,
      fetchFirstPage,
      '/shared_agencies'
    );
  }

  getStats (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): AdsPixelStatsResult {
    // $FlowFixMe : Support Generic Types
    return this.getEdge(
      AdsPixelStatsResult,
      fields,
      params,
      fetchFirstPage,
      '/stats'
    );
  }

  
  get (fields: Array<string>, params: Object = {}): AdsPixel {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): AdsPixel {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
