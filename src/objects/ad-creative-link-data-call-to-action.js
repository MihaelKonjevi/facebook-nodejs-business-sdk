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
 * AdCreativeLinkDataCallToAction
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeLinkDataCallToAction extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      type: 'type',
      value: 'value',
    });
  }

  static get Type (): Object {
    return Object.freeze({
      add_to_cart: 'ADD_TO_CART',
      apply_now: 'APPLY_NOW',
      book_travel: 'BOOK_TRAVEL',
      buy: 'BUY',
      buy_now: 'BUY_NOW',
      buy_tickets: 'BUY_TICKETS',
      call: 'CALL',
      call_me: 'CALL_ME',
      contact: 'CONTACT',
      contact_us: 'CONTACT_US',
      donate: 'DONATE',
      donate_now: 'DONATE_NOW',
      download: 'DOWNLOAD',
      event_rsvp: 'EVENT_RSVP',
      find_a_group: 'FIND_A_GROUP',
      find_your_groups: 'FIND_YOUR_GROUPS',
      follow_news_storyline: 'FOLLOW_NEWS_STORYLINE',
      follow_page: 'FOLLOW_PAGE',
      follow_user: 'FOLLOW_USER',
      get_directions: 'GET_DIRECTIONS',
      get_offer: 'GET_OFFER',
      get_offer_view: 'GET_OFFER_VIEW',
      get_quote: 'GET_QUOTE',
      get_showtimes: 'GET_SHOWTIMES',
      install_app: 'INSTALL_APP',
      install_mobile_app: 'INSTALL_MOBILE_APP',
      learn_more: 'LEARN_MORE',
      like_page: 'LIKE_PAGE',
      listen_music: 'LISTEN_MUSIC',
      listen_now: 'LISTEN_NOW',
      message_page: 'MESSAGE_PAGE',
      mobile_download: 'MOBILE_DOWNLOAD',
      moments: 'MOMENTS',
      no_button: 'NO_BUTTON',
      open_link: 'OPEN_LINK',
      order_now: 'ORDER_NOW',
      pay_to_access: 'PAY_TO_ACCESS',
      play_game: 'PLAY_GAME',
      purchase_gift_cards: 'PURCHASE_GIFT_CARDS',
      record_now: 'RECORD_NOW',
      refer_friends: 'REFER_FRIENDS',
      request_time: 'REQUEST_TIME',
      say_thanks: 'SAY_THANKS',
      see_more: 'SEE_MORE',
      sell_now: 'SELL_NOW',
      send_a_gift: 'SEND_A_GIFT',
      share: 'SHARE',
      shop_now: 'SHOP_NOW',
      sign_up: 'SIGN_UP',
      sotto_subscribe: 'SOTTO_SUBSCRIBE',
      start_order: 'START_ORDER',
      subscribe: 'SUBSCRIBE',
      swipe_up_product: 'SWIPE_UP_PRODUCT',
      swipe_up_shop: 'SWIPE_UP_SHOP',
      update_app: 'UPDATE_APP',
      use_app: 'USE_APP',
      use_mobile_app: 'USE_MOBILE_APP',
      video_annotation: 'VIDEO_ANNOTATION',
      video_call: 'VIDEO_CALL',
      visit_pages_feed: 'VISIT_PAGES_FEED',
      watch_more: 'WATCH_MORE',
      watch_video: 'WATCH_VIDEO',
      whatsapp_message: 'WHATSAPP_MESSAGE',
      woodhenge_support: 'WOODHENGE_SUPPORT',
    });
  }
}
