/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import ExtendedCreditInvoiceGroup from './extended-credit-invoice-group';
import ExtendedCreditAllocationConfig from './extended-credit-allocation-config';

/**
 * ExtendedCredit
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ExtendedCredit extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      allocated_amount: 'allocated_amount',
      balance: 'balance',
      credit_available: 'credit_available',
      credit_type: 'credit_type',
      id: 'id',
      is_access_revoked: 'is_access_revoked',
      is_automated_experience: 'is_automated_experience',
      last_payment_time: 'last_payment_time',
      legal_entity_name: 'legal_entity_name',
      liable_biz_name: 'liable_biz_name',
      max_balance: 'max_balance',
      online_max_balance: 'online_max_balance',
      owner_business: 'owner_business',
      owner_business_name: 'owner_business_name',
      partition_from: 'partition_from',
      receiving_credit_allocation_config: 'receiving_credit_allocation_config',
      send_bill_to_biz_name: 'send_bill_to_biz_name',
    });
  }


  getExtendedCreditInvoiceGroups (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): ExtendedCreditInvoiceGroup {
    // $FlowFixMe : Support Generic Types
    return this.getEdge(
      ExtendedCreditInvoiceGroup,
      fields,
      params,
      fetchFirstPage,
      '/extended_credit_invoice_groups'
    );
  }

  createExtendedCreditInvoiceGroup (fields: Array<string>, params: Object = {}): ExtendedCreditInvoiceGroup {
    // $FlowFixMe : Support Generic Types
    return this.createEdge(
      '/extended_credit_invoice_groups',
      fields,
      params,
      ExtendedCreditInvoiceGroup
    );
  }

  getOwningCreditAllocationConfigs (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): ExtendedCreditAllocationConfig {
    // $FlowFixMe : Support Generic Types
    return this.getEdge(
      ExtendedCreditAllocationConfig,
      fields,
      params,
      fetchFirstPage,
      '/owning_credit_allocation_configs'
    );
  }

  createOwningCreditAllocationConfig (fields: Array<string>, params: Object = {}): ExtendedCreditAllocationConfig {
    // $FlowFixMe : Support Generic Types
    return this.createEdge(
      '/owning_credit_allocation_configs',
      fields,
      params,
      ExtendedCreditAllocationConfig
    );
  }

  
  get (fields: Array<string>, params: Object = {}): ExtendedCredit {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
