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
 * HasLeadAccess
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class HasLeadAccess extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      app_has_leads_permission: 'app_has_leads_permission',
      can_access_lead: 'can_access_lead',
      enabled_lead_access_manager: 'enabled_lead_access_manager',
      failure_reason: 'failure_reason',
      failure_resolution: 'failure_resolution',
      is_page_admin: 'is_page_admin',
      page_id: 'page_id',
      user_has_leads_permission: 'user_has_leads_permission',
      user_id: 'user_id',
    });
  }

}
