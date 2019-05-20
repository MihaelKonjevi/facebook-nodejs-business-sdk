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
 * ReachFrequencyPrediction
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ReachFrequencyPrediction extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      account_id: 'account_id',
      activity_status: 'activity_status',
      ad_formats: 'ad_formats',
      auction_entry_option_index: 'auction_entry_option_index',
      business_id: 'business_id',
      buying_type: 'buying_type',
      campaign_group_id: 'campaign_group_id',
      campaign_id: 'campaign_id',
      campaign_time_start: 'campaign_time_start',
      campaign_time_stop: 'campaign_time_stop',
      currency: 'currency',
      curve_budget_reach: 'curve_budget_reach',
      curve_reach: 'curve_reach',
      daily_grp_curve: 'daily_grp_curve',
      daily_impression_curve: 'daily_impression_curve',
      daily_impression_curve_map: 'daily_impression_curve_map',
      day_parting_schedule: 'day_parting_schedule',
      demo_breakdown: 'demo_breakdown',
      destination_id: 'destination_id',
      end_time: 'end_time',
      expiration_time: 'expiration_time',
      external_budget: 'external_budget',
      external_impression: 'external_impression',
      external_maximum_budget: 'external_maximum_budget',
      external_maximum_impression: 'external_maximum_impression',
      external_maximum_reach: 'external_maximum_reach',
      external_minimum_budget: 'external_minimum_budget',
      external_minimum_impression: 'external_minimum_impression',
      external_minimum_reach: 'external_minimum_reach',
      external_reach: 'external_reach',
      external_values_breakdown: 'external_values_breakdown',
      feed_ratio_0000: 'feed_ratio_0000',
      frequency_cap: 'frequency_cap',
      frequency_distribution: 'frequency_distribution',
      frequency_distribution_map: 'frequency_distribution_map',
      frequency_distribution_map_agg: 'frequency_distribution_map_agg',
      grp_audience_size: 'grp_audience_size',
      grp_avg_probability_map: 'grp_avg_probability_map',
      grp_country_audience_size: 'grp_country_audience_size',
      grp_curve: 'grp_curve',
      grp_dmas_audience_size: 'grp_dmas_audience_size',
      grp_filtering_threshold_00: 'grp_filtering_threshold_00',
      grp_points: 'grp_points',
      grp_ratio: 'grp_ratio',
      grp_reach_ratio: 'grp_reach_ratio',
      grp_status: 'grp_status',
      holdout_percentage: 'holdout_percentage',
      id: 'id',
      impression_curve: 'impression_curve',
      instagram_destination_id: 'instagram_destination_id',
      instream_packages: 'instream_packages',
      interval_frequency_cap: 'interval_frequency_cap',
      interval_frequency_cap_reset_period: 'interval_frequency_cap_reset_period',
      is_bonus_media: 'is_bonus_media',
      is_conversion_goal: 'is_conversion_goal',
      is_higher_average_frequency: 'is_higher_average_frequency',
      is_io: 'is_io',
      is_reserved_buying: 'is_reserved_buying',
      is_trp: 'is_trp',
      name: 'name',
      objective: 'objective',
      objective_name: 'objective_name',
      pause_periods: 'pause_periods',
      placement_breakdown: 'placement_breakdown',
      placement_breakdown_map: 'placement_breakdown_map',
      plan_name: 'plan_name',
      plan_type: 'plan_type',
      prediction_mode: 'prediction_mode',
      prediction_progress: 'prediction_progress',
      reference_id: 'reference_id',
      reservation_status: 'reservation_status',
      start_time: 'start_time',
      status: 'status',
      story_event_type: 'story_event_type',
      target_audience_size: 'target_audience_size',
      target_cpm: 'target_cpm',
      target_spec: 'target_spec',
      time_created: 'time_created',
      time_updated: 'time_updated',
      timezone_id: 'timezone_id',
      timezone_name: 'timezone_name',
      topline_id: 'topline_id',
      tv_viewer_cluster_map: 'tv_viewer_cluster_map',
      video_view_benchmark_map: 'video_view_benchmark_map',
      video_view_length_constraint: 'video_view_length_constraint',
      viewtag: 'viewtag',
    });
  }

  static get Action (): Object {
    return Object.freeze({
      cancel: 'cancel',
      quote: 'quote',
      reserve: 'reserve',
    });
  }
  static get BuyingType (): Object {
    return Object.freeze({
      auction: 'AUCTION',
      deprecated_reach_block: 'DEPRECATED_REACH_BLOCK',
      fixed_cpm: 'FIXED_CPM',
      mixed: 'MIXED',
      reachblock: 'REACHBLOCK',
      research_poll: 'RESEARCH_POLL',
      reserved: 'RESERVED',
    });
  }
  static get InstreamPackages (): Object {
    return Object.freeze({
      beauty: 'BEAUTY',
      entertainment: 'ENTERTAINMENT',
      food: 'FOOD',
      normal: 'NORMAL',
      premium: 'PREMIUM',
      regular_animals_pets: 'REGULAR_ANIMALS_PETS',
      regular_food: 'REGULAR_FOOD',
      regular_games: 'REGULAR_GAMES',
      regular_politics: 'REGULAR_POLITICS',
      regular_sports: 'REGULAR_SPORTS',
      regular_style: 'REGULAR_STYLE',
      regular_tv_movies: 'REGULAR_TV_MOVIES',
      sports: 'SPORTS',
    });
  }

  get (fields, params): ReachFrequencyPrediction {
    return this.read(
      fields,
      params
    );
  }
}
