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
import Cursor from './../cursor';
import DynamicPriceConfigByDate from './dynamic-price-config-by-date';

/**
 * HotelRoom
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class HotelRoom extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      base_price: 'base_price',
      currency: 'currency',
      description: 'description',
      id: 'id',
      images: 'images',
      margin_level: 'margin_level',
      name: 'name',
      room_id: 'room_id',
      sale_price: 'sale_price',
      url: 'url',
    });
  }


  getPricingVariables (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      DynamicPriceConfigByDate,
      fields,
      params,
      fetchFirstPage,
      '/pricing_variables'
    );
  }

  // $FlowFixMe : Support Generic Types
  delete (fields: Array<string>, params: Object = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.delete(
      params
    );
  }

  
  get (fields: Array<string>, params: Object = {}): HotelRoom {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): HotelRoom {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
