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
 * ProductFeedSchedule
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductFeedSchedule extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      day_of_month: 'day_of_month',
      day_of_week: 'day_of_week',
      hour: 'hour',
      interval: 'interval',
      interval_count: 'interval_count',
      minute: 'minute',
      timezone: 'timezone',
      url: 'url',
      username: 'username',
    });
  }

  static get DayOfWeek (): Object {
    return Object.freeze({
      friday: 'FRIDAY',
      monday: 'MONDAY',
      saturday: 'SATURDAY',
      sunday: 'SUNDAY',
      thursday: 'THURSDAY',
      tuesday: 'TUESDAY',
      wednesday: 'WEDNESDAY',
    });
  }
  static get Interval (): Object {
    return Object.freeze({
      daily: 'DAILY',
      hourly: 'HOURLY',
      monthly: 'MONTHLY',
      weekly: 'WEEKLY',
    });
  }
}
