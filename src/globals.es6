/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './../src/api'
import './../src/objects/ad-video';
import './../src/objects/ad';
import './../src/objects/ad-account';
import './../src/objects/ad-account-activity';
import './../src/objects/ad-account-ad-rules-history';
import './../src/objects/ad-account-ad-volume';
import './../src/objects/ad-account-content-filter-levels-inheritance';
import './../src/objects/ad-account-creation-request';
import './../src/objects/ad-account-default-destination';
import './../src/objects/ad-account-default-objective';
import './../src/objects/ad-account-delivery-estimate';
import './../src/objects/ad-account-matched-search-applications-edge-data';
import './../src/objects/ad-account-max-bid';
import './../src/objects/ad-account-promotable-objects';
import './../src/objects/ad-account-reach-estimate';
import './../src/objects/ad-account-recommended-camapaign-budget';
import './../src/objects/ad-account-roas';
import './../src/objects/ad-account-subscribed-apps';
import './../src/objects/ad-account-targeting-unified';
import './../src/objects/ad-account-tracking-data';
import './../src/objects/ad-account-user';
import './../src/objects/ad-activity';
import './../src/objects/ad-asset-feed-spec';
import './../src/objects/ad-asset-feed-spec-asset-label';
import './../src/objects/ad-asset-feed-spec-body';
import './../src/objects/ad-asset-feed-spec-caption';
import './../src/objects/ad-asset-feed-spec-description';
import './../src/objects/ad-asset-feed-spec-group-rule';
import './../src/objects/ad-asset-feed-spec-image';
import './../src/objects/ad-asset-feed-spec-link-url';
import './../src/objects/ad-asset-feed-spec-title';
import './../src/objects/ad-asset-feed-spec-video';
import './../src/objects/ad-async-request';
import './../src/objects/ad-async-request-set';
import './../src/objects/ad-async-request-set-notification-result';
import './../src/objects/ad-bid-adjustments';
import './../src/objects/ad-campaign-activity';
import './../src/objects/ad-campaign-bid-constraint';
import './../src/objects/ad-campaign-delivery-estimate';
import './../src/objects/ad-campaign-delivery-stats-unsupported-reasons';
import './../src/objects/ad-campaign-frequency-control-specs';
import './../src/objects/ad-campaign-group-activity';
import './../src/objects/ad-campaign-issues-info';
import './../src/objects/ad-campaign-learning-stage-info';
import './../src/objects/ad-campaign-optimization-event';
import './../src/objects/ad-campaign-paced-bid-info';
import './../src/objects/ad-creative';
import './../src/objects/ad-creative-ad-disclaimer';
import './../src/objects/ad-creative-collection-thumbnail-info';
import './../src/objects/ad-creative-insights';
import './../src/objects/ad-creative-interactive-components-spec';
import './../src/objects/ad-creative-link-data';
import './../src/objects/ad-creative-link-data-app-link-spec';
import './../src/objects/ad-creative-link-data-call-to-action';
import './../src/objects/ad-creative-link-data-call-to-action-value';
import './../src/objects/ad-creative-link-data-child-attachment';
import './../src/objects/ad-creative-link-data-image-layer-spec';
import './../src/objects/ad-creative-link-data-image-overlay-spec';
import './../src/objects/ad-creative-link-data-sponsorship-info-spec';
import './../src/objects/ad-creative-link-data-template-video-spec';
import './../src/objects/ad-creative-object-story-spec';
import './../src/objects/ad-creative-photo-data';
import './../src/objects/ad-creative-photo-data-media-elements';
import './../src/objects/ad-creative-place-data';
import './../src/objects/ad-creative-platform-customization';
import './../src/objects/ad-creative-portrait-customizations';
import './../src/objects/ad-creative-post-click-configuration';
import './../src/objects/ad-creative-recommender-settings';
import './../src/objects/ad-creative-static-fallback-spec';
import './../src/objects/ad-creative-template-url-spec';
import './../src/objects/ad-creative-text-data';
import './../src/objects/ad-creative-video-data';
import './../src/objects/ad-customization-rule-spec';
import './../src/objects/ad-dynamic-creative';
import './../src/objects/ad-entity-target-spend';
import './../src/objects/ad-image';
import './../src/objects/ad-keywords';
import './../src/objects/ad-label';
import './../src/objects/ad-monetization-property';
import './../src/objects/ad-network-analytics-async-query-result';
import './../src/objects/ad-network-analytics-sync-query-result';
import './../src/objects/ad-place-page-set';
import './../src/objects/ad-place-page-set-metadata';
import './../src/objects/ad-placement';
import './../src/objects/ad-preview';
import './../src/objects/ad-promoted-object';
import './../src/objects/ad-recommendation';
import './../src/objects/ad-recommendation-data';
import './../src/objects/ad-report-run';
import './../src/objects/ad-report-spec';
import './../src/objects/ad-rule';
import './../src/objects/ad-rule-evaluation-spec';
import './../src/objects/ad-rule-execution-options';
import './../src/objects/ad-rule-execution-spec';
import './../src/objects/ad-rule-filters';
import './../src/objects/ad-rule-history';
import './../src/objects/ad-rule-history-result';
import './../src/objects/ad-rule-history-result-action';
import './../src/objects/ad-rule-schedule';
import './../src/objects/ad-rule-schedule-spec';
import './../src/objects/ad-rule-trigger';
import './../src/objects/ad-set';
import './../src/objects/ad-study';
import './../src/objects/ad-study-cell';
import './../src/objects/ad-study-objective';
import './../src/objects/ad-study-objective-id';
import './../src/objects/ad-video';
import './../src/objects/adgroup-activity';
import './../src/objects/adgroup-issues-info';
import './../src/objects/adgroup-placement-specific-review-feedback';
import './../src/objects/adgroup-relevance-score';
import './../src/objects/adgroup-review-feedback';
import './../src/objects/ads-action-stats';
import './../src/objects/ads-image-crops';
import './../src/objects/ads-insights';
import './../src/objects/ads-interest';
import './../src/objects/ads-optimal-delivery-growth-opportunity';
import './../src/objects/ads-pixel';
import './../src/objects/ads-pixel-stats';
import './../src/objects/ads-pixel-stats-result';
import './../src/objects/age-range';
import './../src/objects/agency-client-declaration';
import './../src/objects/album';
import './../src/objects/android-app-link';
import './../src/objects/app-request';
import './../src/objects/app-request-former-recipient';
import './../src/objects/application';
import './../src/objects/assigned-user';
import './../src/objects/async-request';
import './../src/objects/async-session';
import './../src/objects/atlas-campaign';
import './../src/objects/atlas-url';
import './../src/objects/attribution-spec';
import './../src/objects/audience-insights-study-spec';
import './../src/objects/audience-permission-for-actions';
import './../src/objects/audio-copyright';
import './../src/objects/automotive-model';
import './../src/objects/billed-amount-details';
import './../src/objects/brand-audience';
import './../src/objects/brand-safety-block-list-usage';
import './../src/objects/broad-targeting-categories';
import './../src/objects/business';
import './../src/objects/business-ad-account-request';
import './../src/objects/business-application-request';
import './../src/objects/business-asset-group';
import './../src/objects/business-asset-sharing-agreement';
import './../src/objects/business-creative';
import './../src/objects/business-creative-folder';
import './../src/objects/business-creative-folder-sharing-agreement';
import './../src/objects/business-image';
import './../src/objects/business-owned-object-on-behalf-of-request';
import './../src/objects/business-page-request';
import './../src/objects/business-role-request';
import './../src/objects/business-unit';
import './../src/objects/business-user';
import './../src/objects/cpas-parent-catalog-settings';
import './../src/objects/campaign';
import './../src/objects/campaign-group-brand-configuration';
import './../src/objects/campaign-group-collaborative-ads-partner-info';
import './../src/objects/canvas';
import './../src/objects/canvas-ad-settings';
import './../src/objects/canvas-body-element';
import './../src/objects/canvas-collection-thumbnail';
import './../src/objects/catalog-based-targeting';
import './../src/objects/catalog-item-app-links';
import './../src/objects/catalog-item-appeal-status';
import './../src/objects/check-batch-request-status';
import './../src/objects/child-event';
import './../src/objects/client-transparency-status';
import './../src/objects/collaborative-ads-partner-info-list-item';
import './../src/objects/collaborative-ads-share-settings';
import './../src/objects/comment';
import './../src/objects/commerce-settings';
import './../src/objects/content-delivery-report';
import './../src/objects/conversion-action-query';
import './../src/objects/copyright-reference-container';
import './../src/objects/cover-photo';
import './../src/objects/creative-asset-tag';
import './../src/objects/creative-history';
import './../src/objects/credit-partition-action-options';
import './../src/objects/currency';
import './../src/objects/currency-amount';
import './../src/objects/custom-audience';
import './../src/objects/custom-audience-ad-account';
import './../src/objects/custom-audience-data-source';
import './../src/objects/custom-audience-prefill-state';
import './../src/objects/custom-audience-session';
import './../src/objects/custom-audience-sharing-status';
import './../src/objects/custom-audience-status';
import './../src/objects/custom-audiences-tos';
import './../src/objects/custom-audienceshared-account-info';
import './../src/objects/custom-conversion';
import './../src/objects/custom-conversion-stats-result';
import './../src/objects/custom-user-settings';
import './../src/objects/da-check';
import './../src/objects/day-part';
import './../src/objects/delivery-check';
import './../src/objects/delivery-check-extra-info';
import './../src/objects/destination';
import './../src/objects/destination-catalog-settings';
import './../src/objects/domain';
import './../src/objects/dynamic-content-set';
import './../src/objects/dynamic-post-child-attachment';
import './../src/objects/dynamic-price-config-by-date';
import './../src/objects/engagement';
import './../src/objects/entity-at-text-range';
import './../src/objects/event';
import './../src/objects/event-source-group';
import './../src/objects/event-tour';
import './../src/objects/experience';
import './../src/objects/extended-credit';
import './../src/objects/extended-credit-allocation-config';
import './../src/objects/extended-credit-invoice-group';
import './../src/objects/external-event-source';
import './../src/objects/fame-export-config';
import './../src/objects/flexible-targeting';
import './../src/objects/flight';
import './../src/objects/friend-list';
import './../src/objects/funding-source-details';
import './../src/objects/funding-source-details-coupon';
import './../src/objects/group';
import './../src/objects/home-listing';
import './../src/objects/hotel';
import './../src/objects/hotel-room';
import './../src/objects/id-name';
import './../src/objects/ig-comment';
import './../src/objects/ig-media';
import './../src/objects/ig-user';
import './../src/objects/insights-result';
import './../src/objects/instagram-insights-result';
import './../src/objects/instagram-insights-value';
import './../src/objects/instagram-user';
import './../src/objects/instant-article';
import './../src/objects/instant-article-insights-query-result';
import './../src/objects/invoice-campaign';
import './../src/objects/ios-app-link';
import './../src/objects/iterative-split-test-config';
import './../src/objects/key-value';
import './../src/objects/lead';
import './../src/objects/lead-gen-appointment-booking-info';
import './../src/objects/lead-gen-conditional-questions-group-choices';
import './../src/objects/lead-gen-conditional-questions-group-questions';
import './../src/objects/lead-gen-draft-question';
import './../src/objects/lead-gen-post-submission-check-result';
import './../src/objects/lead-gen-question';
import './../src/objects/lead-gen-question-option';
import './../src/objects/leadgen-form';
import './../src/objects/life-event';
import './../src/objects/link';
import './../src/objects/live-encoder';
import './../src/objects/live-video';
import './../src/objects/live-video-ad-break-config';
import './../src/objects/live-video-error';
import './../src/objects/live-video-input-stream';
import './../src/objects/live-video-targeting';
import './../src/objects/location';
import './../src/objects/lookalike-spec';
import './../src/objects/mailing-address';
import './../src/objects/measurement-upload-event';
import './../src/objects/media-fingerprint';
import './../src/objects/messaging-feature-review';
import './../src/objects/messenger-destination-page-welcome-message';
import './../src/objects/messenger-platform-referral';
import './../src/objects/messenger-profile';
import './../src/objects/minimum-budget';
import './../src/objects/music-video-copyright';
import './../src/objects/native-offer';
import './../src/objects/native-offer-discount';
import './../src/objects/native-offer-view';
import './../src/objects/null-node';
import './../src/objects/offline-conversion-data-set';
import './../src/objects/offline-terms-of-service';
import './../src/objects/offsite-pixel';
import './../src/objects/open-graph-context';
import './../src/objects/open-graph-object';
import './../src/objects/oracle-transaction';
import './../src/objects/outcome-prediction-point';
import './../src/objects/page';
import './../src/objects/page-about-story';
import './../src/objects/page-admin-note';
import './../src/objects/page-call-to-action';
import './../src/objects/page-category';
import './../src/objects/page-change-proposal';
import './../src/objects/page-parking';
import './../src/objects/page-payment-options';
import './../src/objects/page-post';
import './../src/objects/page-restaurant-services';
import './../src/objects/page-restaurant-specialties';
import './../src/objects/page-saved-filter';
import './../src/objects/page-settings';
import './../src/objects/page-start-info';
import './../src/objects/page-thread-owner';
import './../src/objects/page-upcoming-change';
import './../src/objects/page-user-message-thread-label';
import './../src/objects/partner-study';
import './../src/objects/payment-pricepoints';
import './../src/objects/permission';
import './../src/objects/persona';
import './../src/objects/photo';
import './../src/objects/place';
import './../src/objects/place-topic';
import './../src/objects/platform-image-source';
import './../src/objects/playable-content';
import './../src/objects/post';
import './../src/objects/privacy';
import './../src/objects/product-catalog';
import './../src/objects/product-catalog-category';
import './../src/objects/product-catalog-hotel-rooms-batch';
import './../src/objects/product-catalog-image-settings';
import './../src/objects/product-catalog-image-settings-operation';
import './../src/objects/product-catalog-pricing-variables-batch';
import './../src/objects/product-catalog-product-sets-batch';
import './../src/objects/product-event-stat';
import './../src/objects/product-feed';
import './../src/objects/product-feed-missing-feed-item-replacement';
import './../src/objects/product-feed-rule';
import './../src/objects/product-feed-rule-suggestion';
import './../src/objects/product-feed-schedule';
import './../src/objects/product-feed-upload';
import './../src/objects/product-feed-upload-diagnostics';
import './../src/objects/product-feed-upload-error';
import './../src/objects/product-feed-upload-error-report';
import './../src/objects/product-feed-upload-error-sample';
import './../src/objects/product-group';
import './../src/objects/product-item';
import './../src/objects/product-item-commerce-insights';
import './../src/objects/product-set';
import './../src/objects/product-variant';
import './../src/objects/profile';
import './../src/objects/profile-picture-source';
import './../src/objects/publisher-block-list';
import './../src/objects/rtb-dynamic-post';
import './../src/objects/raw-custom-audience';
import './../src/objects/reach-frequency-activity';
import './../src/objects/reach-frequency-ad-format';
import './../src/objects/reach-frequency-curve-lower-confidence-range';
import './../src/objects/reach-frequency-curve-upper-confidence-range';
import './../src/objects/reach-frequency-day-part';
import './../src/objects/reach-frequency-estimates-curve';
import './../src/objects/reach-frequency-estimates-placement-breakdown';
import './../src/objects/reach-frequency-prediction';
import './../src/objects/reach-frequency-spec';
import './../src/objects/read-only-analytics-user-property-config';
import './../src/objects/recommendation';
import './../src/objects/referral';
import './../src/objects/request-history';
import './../src/objects/rev-share-policy';
import './../src/objects/rich-media-element';
import './../src/objects/saved-audience';
import './../src/objects/saved-message-response';
import './../src/objects/security-settings';
import './../src/objects/split-test-config';
import './../src/objects/split-test-winner';
import './../src/objects/store-catalog-settings';
import './../src/objects/streaming-reaction';
import './../src/objects/system-user';
import './../src/objects/tab';
import './../src/objects/targeting';
import './../src/objects/targeting-dynamic-rule';
import './../src/objects/targeting-geo-location';
import './../src/objects/targeting-geo-location-city';
import './../src/objects/targeting-geo-location-custom-location';
import './../src/objects/targeting-geo-location-electoral-district';
import './../src/objects/targeting-geo-location-geo-entities';
import './../src/objects/targeting-geo-location-location-cluster';
import './../src/objects/targeting-geo-location-location-expansion';
import './../src/objects/targeting-geo-location-market';
import './../src/objects/targeting-geo-location-place';
import './../src/objects/targeting-geo-location-political-district';
import './../src/objects/targeting-geo-location-region';
import './../src/objects/targeting-geo-location-zip';
import './../src/objects/targeting-product-audience-spec';
import './../src/objects/targeting-product-audience-sub-spec';
import './../src/objects/targeting-prospecting-audience';
import './../src/objects/targeting-sentence-line';
import './../src/objects/third-party-measurement-report-dataset';
import './../src/objects/tracking-and-conversion-with-defaults';
import './../src/objects/url';
import './../src/objects/unified-thread';
import './../src/objects/user';
import './../src/objects/user-cover-photo';
import './../src/objects/user-device';
import './../src/objects/user-id-for-app';
import './../src/objects/user-id-for-page';
import './../src/objects/user-influence';
import './../src/objects/user-lead-gen-disclaimer-response';
import './../src/objects/user-lead-gen-field-data';
import './../src/objects/user-payment-methods-info';
import './../src/objects/user-payment-mobile-pricepoints';
import './../src/objects/user-payment-modules-options';
import './../src/objects/user-taggable-friend';
import './../src/objects/value-based-eligible-source';
import './../src/objects/vehicle';
import './../src/objects/vehicle-offer';
import './../src/objects/video-copyright';
import './../src/objects/video-copyright-condition-group';
import './../src/objects/video-copyright-geo-gate';
import './../src/objects/video-copyright-rule';
import './../src/objects/video-copyright-segment';
import './../src/objects/video-game-show';
import './../src/objects/video-list';
import './../src/objects/video-poll';
import './../src/objects/video-thumbnail';
import './../src/objects/video-upload-limits';
import './../src/objects/voip-info';
import './../src/objects/web-app-link';
import './../src/objects/whats-app-business-account';
import './../src/objects/whats-app-business-profile';
import './../src/objects/windows-app-link';
import './../src/objects/windows-phone-app-link';
import './../src/objects/work-user-frontline';
