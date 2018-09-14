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
 * AnalyticsConfig
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AnalyticsConfig extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      analytics_access_for_authorized_ad_account: 'analytics_access_for_authorized_ad_account',
      aws_kinesis_firehose_setting: 'aws_kinesis_firehose_setting',
      breakdowns_config: 'breakdowns_config',
      builtin_fields_config: 'builtin_fields_config',
      deprecated_events_config: 'deprecated_events_config',
      events_config: 'events_config',
      ios_purchase_validation_secret: 'ios_purchase_validation_secret',
      is_any_role_able_to_see_restricted_insights: 'is_any_role_able_to_see_restricted_insights',
      is_implicit_purchase_logging_on_android_supported: 'is_implicit_purchase_logging_on_android_supported',
      is_implicit_purchase_logging_on_ios_supported: 'is_implicit_purchase_logging_on_ios_supported',
      is_track_ios_app_uninstall_supported: 'is_track_ios_app_uninstall_supported',
      journey_backfill_status: 'journey_backfill_status',
      journey_conversion_events: 'journey_conversion_events',
      journey_enabled: 'journey_enabled',
      journey_impacting_change_time: 'journey_impacting_change_time',
      journey_timeout: 'journey_timeout',
      latest_sdk_versions: 'latest_sdk_versions',
      log_android_implicit_purchase_events: 'log_android_implicit_purchase_events',
      log_automatic_analytics_events: 'log_automatic_analytics_events',
      log_implicit_purchase_events: 'log_implicit_purchase_events',
      prev_journey_conversion_events: 'prev_journey_conversion_events',
      query_approximation_accuracy_level: 'query_approximation_accuracy_level',
      query_currency: 'query_currency',
      query_timezone: 'query_timezone',
      recent_events_update_time: 'recent_events_update_time',
      session_timeout_interval: 'session_timeout_interval',
      track_ios_app_uninstall: 'track_ios_app_uninstall',
      id: 'id'
    });
  }

  get (fields, params): AnalyticsConfig {
    return this.read(
      fields,
      params
    );
  }
}
