(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 1000:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./nestedObjectAssign": 408,
	"./nestedObjectAssign.js": 408
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 1000;

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.fill.js
var es_array_fill = __webpack_require__(646);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__(176);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__(78);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__(92);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.to-fixed.js
var es_number_to_fixed = __webpack_require__(435);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.freeze.js
var es_object_freeze = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(111);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(56);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__(131);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(113);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.search.js
var es_string_search = __webpack_require__(185);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(142);

// EXTERNAL MODULE: ./node_modules/url/url.js
var url_url = __webpack_require__(75);
var url_default = /*#__PURE__*/__webpack_require__.n(url_url);

// EXTERNAL MODULE: ./node_modules/connected-react-router/lib/index.js
var lib = __webpack_require__(87);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(3);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/base64url/index.js
var base64url = __webpack_require__(469);
var base64url_default = /*#__PURE__*/__webpack_require__.n(base64url);

// EXTERNAL MODULE: ./src/core/client/config.js
var config = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/invariant/browser.js
var browser = __webpack_require__(1);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);

// EXTERNAL MODULE: ./node_modules/enzyme/build/index.js
var build = __webpack_require__(736);

// EXTERNAL MODULE: ./node_modules/jed/jed.js
var jed = __webpack_require__(331);
var jed_default = /*#__PURE__*/__webpack_require__.n(jed);

// EXTERNAL MODULE: ./node_modules/ua-parser-js/src/ua-parser.js
var ua_parser = __webpack_require__(332);
var ua_parser_default = /*#__PURE__*/__webpack_require__.n(ua_parser);

// EXTERNAL MODULE: ./node_modules/common-tags/es/index.js + 48 modules
var es = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/history/esm/history.js + 3 modules
var esm_history = __webpack_require__(71);

// EXTERNAL MODULE: ./src/amo/constants.js
var constants = __webpack_require__(250);

// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/redux-saga/es/index.js + 16 modules
var redux_saga_es = __webpack_require__(751);

// EXTERNAL MODULE: ./src/amo/reducers/addonsByAuthors.js
var addonsByAuthors = __webpack_require__(333);

// EXTERNAL MODULE: ./src/amo/reducers/collections.js
var collections = __webpack_require__(206);

// EXTERNAL MODULE: ./src/amo/reducers/home.js
var home = __webpack_require__(202);

// EXTERNAL MODULE: ./src/amo/reducers/landing.js
var landing = __webpack_require__(335);

// EXTERNAL MODULE: ./src/amo/reducers/recommendations.js
var recommendations = __webpack_require__(336);

// EXTERNAL MODULE: ./node_modules/deepcopy/umd/deepcopy.js
var deepcopy = __webpack_require__(252);
var deepcopy_default = /*#__PURE__*/__webpack_require__.n(deepcopy);

// EXTERNAL MODULE: ./src/amo/actions/reviews.js
var actions_reviews = __webpack_require__(39);

// CONCATENATED MODULE: ./src/amo/reducers/reviews.js
function _templateObject(){var data=_taggedTemplateLiteral(["Cannot store reply to review ID\n          "," because it does not exist"]);_templateObject=function(){return data};return data}function _taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0)}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1,source;i<arguments.length;i++){source=null!=arguments[i]?arguments[i]:{};if(i%2){ownKeys(Object(source),!0).forEach(function(key){_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}return obj}function reviewListURL(_ref){var addonSlug=_ref.addonSlug,id=_ref.id,score=_ref.score;browser_default()(addonSlug,"addonSlug is required");var path="/addon/".concat(addonSlug,"/reviews/").concat(id?"".concat(id,"/"):"");if(score){path="".concat(path,"?score=").concat(score)}return path}var reviews_initialState={permissions:{},byAddon:{},byId:{},byUserId:{},latestUserReview:{},groupedRatings:{},// This stores review-related UI state.
view:{},flashMessage:void 0,loadingForSlug:{}};function selectReviews(_ref2){var reviewsState=_ref2.reviewsState,addonSlug=_ref2.addonSlug,page=_ref2.page,score=_ref2.score;browser_default()(addonSlug,"addonSlug is required");browser_default()(page,"page is required");browser_default()(reviewsState,"reviewsState is required");browser_default()(score!==void 0,"score is required");var reviewData=reviewsState.byAddon[addonSlug];if(!reviewData||reviewData.score!==score||reviewData.page!==page){return null}return reviewData.data}function createGroupedRatings(){var grouping=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return _objectSpread({/* eslint-disable quote-props */1:0,2:0,3:0,4:0,5:0},grouping)}var selectReview=function(reviewsState,id){return reviewsState.byId[id]};function makePermissionsKey(_ref3){var addonId=_ref3.addonId,userId=_ref3.userId;return"".concat(addonId,"-").concat(userId)}function selectReviewPermissions(_ref4){var reviewsState=_ref4.reviewsState,addonId=_ref4.addonId,userId=_ref4.userId;return reviewsState.permissions[makePermissionsKey({addonId:addonId,userId:userId})]}var expandReviewObjects=function(_ref5){var state=_ref5.state,reviews=_ref5.reviews;return reviews.map(function(id){var review=selectReview(state,id);if(!review){throw new Error("No stored review exists for ID ".concat(id))}return review})};var storeReviewObjects=function(_ref6){var state=_ref6.state,reviews=_ref6.reviews,byId=_objectSpread({},state.byId);reviews.forEach(function(review){if(!review.id){throw new Error("Cannot store review because review.id is falsy")}byId[review.id]=review});return byId};var changeViewState=function(){var _ref7=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},state=_ref7.state,reviewId=_ref7.reviewId,stateChange=_ref7.stateChange,change=_objectSpread({},stateChange),existingFlag=state.view[reviewId]?state.view[reviewId].flag:{};return _objectSpread({},state,{view:_objectSpread({},state.view,_defineProperty({},reviewId,_objectSpread({beginningToDeleteReview:!1,deletingReview:!1,editingReview:!1,loadingReview:!1,replyingToReview:!1,submittingReply:!1},state.view[reviewId],{},change,{flag:_objectSpread({},existingFlag,{},change.flag)})))})};var getReviewsByUserId=function(reviewsState,userId){var storedReviewsData=reviewsState.byUserId[userId];return storedReviewsData?{pageSize:storedReviewsData.pageSize,reviewCount:storedReviewsData.reviewCount,reviews:expandReviewObjects({reviews:storedReviewsData.reviews,state:reviewsState})}:null};var makeLatestUserReviewKey=function(_ref8){var userId=_ref8.userId,addonId=_ref8.addonId;return"user-".concat(userId,"/addon-").concat(addonId)};var selectLatestUserReview=function(_ref9){var reviewsState=_ref9.reviewsState,userId=_ref9.userId,addonId=_ref9.addonId,key=makeLatestUserReviewKey({userId:userId,addonId:addonId}),userReviewId=reviewsState.latestUserReview[key];if(null===userReviewId){// This means we had previously attempted to fetch the latest
// user review but it does not exist.
return null}// This either means we have not yet fetched a user review
// (return undefined) or we fetched and retrieved a user review
// (return the object).
return selectReview(reviewsState,userReviewId)};var addReviewToState=function(_ref10){var state=_ref10.state,review=_ref10.review,existingReview=selectReview(state,review.id),ratingOrReviewExists=!!existingReview,isReviewUpdate=ratingOrReviewExists;if(existingReview&&!existingReview.body&&review.body){// If this update is actually upgrading a rating into a review then
// it's not an update.
isReviewUpdate=!1}var byUserId=ratingOrReviewExists?state.byUserId:_objectSpread({},state.byUserId,_defineProperty({},review.userId,void 0)),byAddon=isReviewUpdate?state.byAddon:_objectSpread({},state.byAddon,_defineProperty({},review.reviewAddon.slug,void 0));return _objectSpread({},state,{byId:storeReviewObjects({state:state,reviews:[review]}),byUserId:byUserId,byAddon:byAddon})};var reviewsAreLoading=function(state,addonSlug){return!!state.reviews.loadingForSlug[addonSlug]};function reviewsReducer(){var state=0<arguments.length&&arguments[0]!==void 0?arguments[0]:reviews_initialState,action=1<arguments.length?arguments[1]:void 0,_ref11=2<arguments.length&&arguments[2]!==void 0?arguments[2]:{},_ref11$_addReviewToSt=_ref11._addReviewToState,_addReviewToState=void 0===_ref11$_addReviewToSt?addReviewToState:_ref11$_addReviewToSt;switch(action.type){case actions_reviews["a" /* BEGIN_DELETE_ADDON_REVIEW */]:return changeViewState({state:state,reviewId:action.payload.reviewId,stateChange:{beginningToDeleteReview:!0}});case actions_reviews["b" /* CANCEL_DELETE_ADDON_REVIEW */]:return changeViewState({state:state,reviewId:action.payload.reviewId,stateChange:{beginningToDeleteReview:!1}});case actions_reviews["c" /* DELETE_ADDON_REVIEW */]:return changeViewState({state:state,reviewId:action.payload.reviewId,stateChange:{beginningToDeleteReview:!1,deletingReview:!0}});case actions_reviews["k" /* SEND_REPLY_TO_REVIEW */]:return changeViewState({state:state,reviewId:action.payload.originalReviewId,stateChange:{submittingReply:!0}});case actions_reviews["v" /* SHOW_EDIT_REVIEW_FORM */]:return changeViewState({state:state,reviewId:action.payload.reviewId,stateChange:{beginningToDeleteReview:!1,editingReview:!0}});case actions_reviews["w" /* SHOW_REPLY_TO_REVIEW_FORM */]:return changeViewState({state:state,reviewId:action.payload.reviewId,stateChange:{beginningToDeleteReview:!1,replyingToReview:!0}});case actions_reviews["h" /* HIDE_EDIT_REVIEW_FORM */]:return changeViewState({state:state,reviewId:action.payload.reviewId,stateChange:{editingReview:!1}});case actions_reviews["j" /* HIDE_REPLY_TO_REVIEW_FORM */]:return changeViewState({state:state,reviewId:action.payload.reviewId,stateChange:{replyingToReview:!1,submittingReply:!1}});case actions_reviews["p" /* SET_LATEST_REVIEW */]:{var payload=action.payload,_addonId=payload.addonId,_userId=payload.userId,review=payload.review,key=makeLatestUserReviewKey({addonId:_addonId,userId:_userId});if(review&&!selectReview(state,review.id)){throw new Error("Cannot handle SET_LATEST_REVIEW because review ".concat(review.id," has not been set"))}return _objectSpread({},state,{latestUserReview:_objectSpread({},state.latestUserReview,_defineProperty({},key,review?review.id:null))})}case actions_reviews["d" /* FETCH_REVIEW */]:{return changeViewState({state:state,reviewId:action.payload.reviewId,stateChange:{loadingReview:!0}})}case actions_reviews["q" /* SET_REVIEW */]:{var _payload=action.payload,_review=Object(actions_reviews["z" /* createInternalReview */])(_payload),newState=_addReviewToState({state:state,review:_review});return changeViewState({state:newState,reviewId:_review.id,stateChange:{loadingReview:!1}})}case actions_reviews["o" /* SET_INTERNAL_REVIEW */]:{var _payload2=action.payload;return _addReviewToState({state:state,review:_payload2})}case actions_reviews["s" /* SET_REVIEW_REPLY */]:{var _reviewId=action.payload.originalReviewId,_review2=state.byId[_reviewId];if(!_review2){throw new Error(Object(es["a" /* oneLine */])(_templateObject(),_reviewId))}return _objectSpread({},state,{byId:_objectSpread({},state.byId,_defineProperty({},_review2.id,_objectSpread({},_review2,{reply:Object(actions_reviews["z" /* createInternalReview */])(action.payload.reply)})))})}case actions_reviews["l" /* SEND_REVIEW_FLAG */]:{var _payload3=action.payload;return changeViewState({state:state,reviewId:_payload3.reviewId,stateChange:{flag:{reason:_payload3.reason,inProgress:!0,wasFlagged:!1}}})}case actions_reviews["t" /* SET_REVIEW_WAS_FLAGGED */]:{var _payload4=action.payload;return changeViewState({state:state,reviewId:_payload4.reviewId,stateChange:{flag:{reason:_payload4.reason,inProgress:!1,wasFlagged:!0}}})}case actions_reviews["e" /* FETCH_REVIEWS */]:{var addonSlug=action.payload.addonSlug;return _objectSpread({},state,{loadingForSlug:_objectSpread({},state.loadingForSlug,_defineProperty({},addonSlug,!0))})}case actions_reviews["m" /* SET_ADDON_REVIEWS */]:{var _payload5=action.payload,reviews=_payload5.reviews.map(function(review){return Object(actions_reviews["z" /* createInternalReview */])(review)});return _objectSpread({},state,{byId:storeReviewObjects({state:state,reviews:reviews}),byAddon:_objectSpread({},state.byAddon,_defineProperty({},_payload5.addonSlug,{data:{pageSize:_payload5.pageSize,reviewCount:_payload5.reviewCount,reviews:reviews.map(function(review){return review.id})},page:_payload5.page,score:_payload5.score})),loadingForSlug:_objectSpread({},state.loadingForSlug,_defineProperty({},_payload5.addonSlug,!1))})}case actions_reviews["u" /* SET_USER_REVIEWS */]:{var _payload6=action.payload,_reviews=_payload6.reviews.map(function(review){return Object(actions_reviews["z" /* createInternalReview */])(review)});return _objectSpread({},state,{byId:storeReviewObjects({state:state,reviews:_reviews}),byUserId:_objectSpread({},state.byUserId,_defineProperty({},_payload6.userId,{pageSize:_payload6.pageSize,reviewCount:_payload6.reviewCount,reviews:_reviews.map(function(review){return review.id})}))})}case actions_reviews["n" /* SET_GROUPED_RATINGS */]:{var _payload7=action.payload;return _objectSpread({},state,{groupedRatings:_objectSpread({},state.groupedRatings,_defineProperty({},_payload7.addonId,createGroupedRatings(_payload7.grouping)))})}case actions_reviews["y" /* UPDATE_RATING_COUNTS */]:{var _action$payload=action.payload,_addonId2=_action$payload.addonId,oldReview=_action$payload.oldReview,newReview=_action$payload.newReview,addonRatings=state.groupedRatings[_addonId2]||createGroupedRatings(),newAddonRatings=deepcopy_default()(addonRatings);if(oldReview&&0<newAddonRatings[oldReview.score]){newAddonRatings[oldReview.score]-=1}if(newReview&&newReview.score){newAddonRatings[newReview.score]+=1}return _objectSpread({},state,{groupedRatings:_objectSpread({},state.groupedRatings,_defineProperty({},_addonId2,newAddonRatings))})}case actions_reviews["g" /* FLASH_REVIEW_MESSAGE */]:{var _payload8=action.payload;return _objectSpread({},state,{flashMessage:_payload8.message})}case actions_reviews["i" /* HIDE_FLASHED_REVIEW_MESSAGE */]:{return _objectSpread({},state,{flashMessage:void 0})}case actions_reviews["x" /* UNLOAD_ADDON_REVIEWS */]:{var _reviewId2=action.payload.reviewId,_newState=_objectSpread({},state,{view:_objectSpread({},state.view,_defineProperty({},_reviewId2,void 0))}),reviewData=state.byId[_reviewId2];if(reviewData){var reviewAddon=reviewData.reviewAddon,_userId2=reviewData.userId;return _objectSpread({},_newState,{byAddon:_objectSpread({},_newState.byAddon,_defineProperty({},reviewAddon.slug,void 0)),byId:_objectSpread({},_newState.byId,_defineProperty({},_reviewId2,void 0)),byUserId:_objectSpread({},_newState.byUserId,_defineProperty({},_userId2,void 0)),groupedRatings:_objectSpread({},_newState.groupedRatings,_defineProperty({},reviewAddon.id,void 0)),permissions:_objectSpread({},_newState.permissions,_defineProperty({},makePermissionsKey({addonId:reviewAddon.id,userId:_userId2}),void 0))})}return _newState}case lib["LOCATION_CHANGE"]:{return _objectSpread({},state,{view:{}})}case actions_reviews["f" /* FETCH_REVIEW_PERMISSIONS */]:{var _action$payload2=action.payload,_addonId3=_action$payload2.addonId,_userId3=_action$payload2.userId;return _objectSpread({},state,{permissions:_objectSpread({},state.permissions,_defineProperty({},makePermissionsKey({addonId:_addonId3,userId:_userId3}),{loading:!0,canReplyToReviews:null}))})}case actions_reviews["r" /* SET_REVIEW_PERMISSIONS */]:{var _action$payload3=action.payload,_addonId4=_action$payload3.addonId,_userId4=_action$payload3.userId,canReplyToReviews=_action$payload3.canReplyToReviews;return _objectSpread({},state,{permissions:_objectSpread({},state.permissions,_defineProperty({},makePermissionsKey({addonId:_addonId4,userId:_userId4}),{loading:!1,canReplyToReviews:canReplyToReviews}))})}default:return state;}}
// CONCATENATED MODULE: ./src/amo/reducers/userAbuseReports.js
function userAbuseReports_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});keys.push.apply(keys,symbols)}return keys}function userAbuseReports_objectSpread(target){for(var i=1,source;i<arguments.length;i++){source=null!=arguments[i]?arguments[i]:{};if(i%2){userAbuseReports_ownKeys(Object(source),!0).forEach(function(key){userAbuseReports_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{userAbuseReports_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}function userAbuseReports_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}return obj}var ABORT_USER_ABUSE_REPORT="ABORT_USER_ABUSE_REPORT";var HIDE_USER_ABUSE_REPORT_UI="HIDE_USER_ABUSE_REPORT_UI";var LOAD_USER_ABUSE_REPORT="LOAD_USER_ABUSE_REPORT";var SEND_USER_ABUSE_REPORT="SEND_USER_ABUSE_REPORT";var SHOW_USER_ABUSE_REPORT_UI="SHOW_USER_ABUSE_REPORT_UI";function abortUserAbuseReport(){var _ref=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},userId=_ref.userId;browser_default()(userId,"userId is required");return{type:ABORT_USER_ABUSE_REPORT,payload:{userId:userId}}}function hideUserAbuseReportUI(){var _ref2=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},userId=_ref2.userId;browser_default()(userId,"userId is required");return{type:HIDE_USER_ABUSE_REPORT_UI,payload:{userId:userId}}}function loadUserAbuseReport(){var _ref3=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},message=_ref3.message,reporter=_ref3.reporter,userId=_ref3.userId;browser_default()(message,"message is required");browser_default()(reporter!==void 0,"reporter cannot be undefined");browser_default()(userId,"userId is required");var reportedByUserId=reporter?reporter.id:null;return{type:LOAD_USER_ABUSE_REPORT,payload:{message:message,reportedByUserId:reportedByUserId,userId:userId}}}function sendUserAbuseReport(){var _ref4=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},errorHandlerId=_ref4.errorHandlerId,message=_ref4.message,userId=_ref4.userId;browser_default()(errorHandlerId,"errorHandlerId is required");browser_default()(message,"message is required");browser_default()(userId,"userId is required");return{type:SEND_USER_ABUSE_REPORT,payload:{errorHandlerId:errorHandlerId,message:message,userId:userId}}}function showUserAbuseReportUI(){var _ref5=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},userId=_ref5.userId;browser_default()(userId,"userId is required");return{type:SHOW_USER_ABUSE_REPORT_UI,payload:{userId:userId}}}var userAbuseReports_initialState={byUserId:{}};function userAbuseReportReducer(){var state=0<arguments.length&&arguments[0]!==void 0?arguments[0]:userAbuseReports_initialState,action=1<arguments.length?arguments[1]:void 0;switch(action.type){case ABORT_USER_ABUSE_REPORT:{var _userId=action.payload.userId;return userAbuseReports_objectSpread({},state,{byUserId:userAbuseReports_objectSpread({},state.byUserId,userAbuseReports_defineProperty({},_userId,userAbuseReports_objectSpread({},state.byUserId[_userId],{hasSubmitted:!1,isSubmitting:!1,uiVisible:!1})))})}case HIDE_USER_ABUSE_REPORT_UI:{var _userId2=action.payload.userId;return userAbuseReports_objectSpread({},state,{byUserId:userAbuseReports_objectSpread({},state.byUserId,userAbuseReports_defineProperty({},_userId2,userAbuseReports_objectSpread({},state.byUserId[_userId2],{uiVisible:!1})))})}case LOAD_USER_ABUSE_REPORT:{var _action$payload=action.payload,message=_action$payload.message,reportedByUserId=_action$payload.reportedByUserId,_userId3=_action$payload.userId;return userAbuseReports_objectSpread({},state,{byUserId:userAbuseReports_objectSpread({},state.byUserId,userAbuseReports_defineProperty({},_userId3,{message:message,reportedByUserId:reportedByUserId,hasSubmitted:!0,isSubmitting:!1,uiVisible:!1}))})}case SEND_USER_ABUSE_REPORT:{var _userId4=action.payload.userId;return userAbuseReports_objectSpread({},state,{byUserId:userAbuseReports_objectSpread({},state.byUserId,userAbuseReports_defineProperty({},_userId4,userAbuseReports_objectSpread({},state.byUserId[_userId4],{isSubmitting:!0})))})}case SHOW_USER_ABUSE_REPORT_UI:{var _userId5=action.payload.userId;return userAbuseReports_objectSpread({},state,{byUserId:userAbuseReports_objectSpread({},state.byUserId,userAbuseReports_defineProperty({},_userId5,userAbuseReports_objectSpread({},state.byUserId[_userId5],{uiVisible:!0})))})}default:return state;}}
// EXTERNAL MODULE: ./src/amo/reducers/users.js
var users = __webpack_require__(201);

// EXTERNAL MODULE: ./src/core/constants.js
var core_constants = __webpack_require__(2);

// CONCATENATED MODULE: ./src/amo/reducers/viewContext.js
function viewContext_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});keys.push.apply(keys,symbols)}return keys}function viewContext_objectSpread(target){for(var i=1,source;i<arguments.length;i++){source=null!=arguments[i]?arguments[i]:{};if(i%2){viewContext_ownKeys(Object(source),!0).forEach(function(key){viewContext_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{viewContext_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}function viewContext_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}return obj}var viewContext_initialState={context:core_constants["Wb" /* VIEW_CONTEXT_EXPLORE */]};function viewContext(){var state=0<arguments.length&&arguments[0]!==void 0?arguments[0]:viewContext_initialState,action=1<arguments.length?arguments[1]:void 0;switch(action.type){case core_constants["Gb" /* SET_VIEW_CONTEXT */]:return viewContext_objectSpread({},state,{context:action.payload.context});default:return state;}}
// CONCATENATED MODULE: ./src/core/reducers/abuse.js
function abuse_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});keys.push.apply(keys,symbols)}return keys}function abuse_objectSpread(target){for(var i=1,source;i<arguments.length;i++){source=null!=arguments[i]?arguments[i]:{};if(i%2){abuse_ownKeys(Object(source),!0).forEach(function(key){abuse_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{abuse_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}function abuse_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}return obj}var HIDE_ADDON_ABUSE_REPORT_UI="HIDE_ADDON_ABUSE_REPORT_UI";var LOAD_ADDON_ABUSE_REPORT="LOAD_ADDON_ABUSE_REPORT";var SEND_ADDON_ABUSE_REPORT="SEND_ADDON_ABUSE_REPORT";var SHOW_ADDON_ABUSE_REPORT_UI="SHOW_ADDON_ABUSE_REPORT_UI";var INITIATE_ADDON_ABUSE_REPORT_VIA_FIREFOX="INITIATE_ADDON_ABUSE_REPORT_VIA_FIREFOX";var FINISH_ADDON_ABUSE_REPORT_VIA_FIREFOX="FINISH_ADDON_ABUSE_REPORT_VIA_FIREFOX";var abuse_initialState={bySlug:{},loading:!1};function hideAddonAbuseReportUI(_ref){var addon=_ref.addon;browser_default()(addon,"addon is required");return{type:HIDE_ADDON_ABUSE_REPORT_UI,payload:{addon:addon}}}function loadAddonAbuseReport(_ref2){var addon=_ref2.addon,message=_ref2.message,reporter=_ref2.reporter;browser_default()(addon,"addon is required");browser_default()("undefined"!=typeof message,"message must be defined");browser_default()("undefined"!=typeof reporter,"reporter must be defined");return{type:LOAD_ADDON_ABUSE_REPORT,payload:{addon:addon,message:message,reporter:reporter}}}function sendAddonAbuseReport(_ref3){var addonSlug=_ref3.addonSlug,errorHandlerId=_ref3.errorHandlerId,message=_ref3.message;browser_default()(addonSlug,"addonSlug is required");browser_default()(errorHandlerId,"errorHandlerId is required");browser_default()(message,"message is required");return{type:SEND_ADDON_ABUSE_REPORT,payload:{addonSlug:addonSlug,errorHandlerId:errorHandlerId,message:message}}}function showAddonAbuseReportUI(_ref4){var addon=_ref4.addon;browser_default()(addon,"addon is required");return{type:SHOW_ADDON_ABUSE_REPORT_UI,payload:{addon:addon}}}function initiateAddonAbuseReportViaFirefox(_ref5){var addon=_ref5.addon;browser_default()(addon,"addon is required");return{type:INITIATE_ADDON_ABUSE_REPORT_VIA_FIREFOX,payload:{addon:addon}}}function finishAddonAbuseReportViaFirefox(){return{type:FINISH_ADDON_ABUSE_REPORT_VIA_FIREFOX}}function abuseReducer(){var state=0<arguments.length&&arguments[0]!==void 0?arguments[0]:abuse_initialState,action=1<arguments.length?arguments[1]:void 0;switch(action.type){case HIDE_ADDON_ABUSE_REPORT_UI:{var addon=action.payload.addon;return abuse_objectSpread({},state,{bySlug:abuse_objectSpread({},state.bySlug,abuse_defineProperty({},addon.slug,abuse_objectSpread({},state.bySlug[addon.slug],{uiVisible:!1})))})}case LOAD_ADDON_ABUSE_REPORT:{var _action$payload=action.payload,_addon=_action$payload.addon,message=_action$payload.message,reporter=_action$payload.reporter;return abuse_objectSpread({},state,{bySlug:abuse_objectSpread({},state.bySlug,abuse_defineProperty({},_addon.slug,{message:message,reporter:reporter,uiVisible:!1})),loading:!1})}case SEND_ADDON_ABUSE_REPORT:return abuse_objectSpread({},state,{loading:!0});case SHOW_ADDON_ABUSE_REPORT_UI:{var _addon2=action.payload.addon;return abuse_objectSpread({},state,{bySlug:abuse_objectSpread({},state.bySlug,abuse_defineProperty({},_addon2.slug,abuse_objectSpread({},state.bySlug[_addon2.slug],{uiVisible:!0})))})}case FINISH_ADDON_ABUSE_REPORT_VIA_FIREFOX:return abuse_objectSpread({},state,{loading:!1});default:return state;}}
// EXTERNAL MODULE: ./src/core/reducers/addons.js
var reducers_addons = __webpack_require__(64);

// EXTERNAL MODULE: ./src/core/reducers/api.js
var api = __webpack_require__(36);

// EXTERNAL MODULE: ./src/core/imageUtils.js
var imageUtils = __webpack_require__(200);

// CONCATENATED MODULE: ./src/core/reducers/autocomplete.js
function autocomplete_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});keys.push.apply(keys,symbols)}return keys}function autocomplete_objectSpread(target){for(var i=1,source;i<arguments.length;i++){source=null!=arguments[i]?arguments[i]:{};if(i%2){autocomplete_ownKeys(Object(source),!0).forEach(function(key){autocomplete_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{autocomplete_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}function autocomplete_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}return obj}var AUTOCOMPLETE_LOADED="AUTOCOMPLETE_LOADED";var AUTOCOMPLETE_STARTED="AUTOCOMPLETE_STARTED";var AUTOCOMPLETE_CANCELLED="AUTOCOMPLETE_CANCELLED";// See: https://addons-server.readthedocs.io/en/latest/topics/api/addons.html#autocomplete
var autocomplete_initialState={loading:!1,suggestions:[]};function autocompleteStart(_ref){var errorHandlerId=_ref.errorHandlerId,filters=_ref.filters;browser_default()(errorHandlerId,"errorHandlerId is required");browser_default()(filters,"filters are required");return{type:AUTOCOMPLETE_STARTED,payload:{errorHandlerId:errorHandlerId,filters:filters}}}function autocompleteCancel(){return{type:AUTOCOMPLETE_CANCELLED}}function autocompleteLoad(_ref2){var results=_ref2.results;browser_default()(results,"results are required");return{type:AUTOCOMPLETE_LOADED,payload:{results:results}}}var createInternalSuggestion=function(externalSuggestion){return{addonId:externalSuggestion.id,iconUrl:Object(imageUtils["a" /* getAddonIconUrl */])(externalSuggestion),isRecommended:externalSuggestion.is_recommended,name:externalSuggestion.name,type:externalSuggestion.type,url:externalSuggestion.url}};function reducer(){var state=0<arguments.length&&arguments[0]!==void 0?arguments[0]:autocomplete_initialState,action=1<arguments.length?arguments[1]:void 0;switch(action.type){case AUTOCOMPLETE_CANCELLED:return autocomplete_objectSpread({},state,{loading:!1,suggestions:[]});case AUTOCOMPLETE_STARTED:return autocomplete_objectSpread({},autocomplete_initialState,{loading:!0});case AUTOCOMPLETE_LOADED:{var payload=action.payload,suggestions=payload.results// TODO: Remove this when `null` names are not returned. See:
// https://github.com/mozilla/addons-server/issues/6189
.filter(function(result){return null!==result.name}).map(function(result){return createInternalSuggestion(result)});return autocomplete_objectSpread({},state,{loading:!1,suggestions:suggestions})}default:return state;}}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__(63);

// EXTERNAL MODULE: ./src/core/logger.js
var logger = __webpack_require__(17);

// CONCATENATED MODULE: ./src/core/reducers/categories.js
function _templateObject2(){var data=categories_taggedTemplateLiteral(["add-on category for unknown add-on type\n              \"","\" for clientApp \"","\" received\n              from API."]);_templateObject2=function(){return data};return data}function categories_templateObject(){var data=categories_taggedTemplateLiteral(["Category data for unknown clientApp\n              \"","\" received from API."]);categories_templateObject=function(){return data};return data}function categories_taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0)}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function categories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});keys.push.apply(keys,symbols)}return keys}function categories_objectSpread(target){for(var i=1,source;i<arguments.length;i++){source=null!=arguments[i]?arguments[i]:{};if(i%2){categories_ownKeys(Object(source),!0).forEach(function(key){categories_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{categories_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}function categories_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}return obj}var FETCH_CATEGORIES="FETCH_CATEGORIES";var LOAD_CATEGORIES="LOAD_CATEGORIES";// See: https://addons-server.readthedocs.io/en/latest/topics/api/categories.html#category-list
var categories_initialState={categories:null,loading:!1};function fetchCategories(_ref){var errorHandlerId=_ref.errorHandlerId;browser_default()(errorHandlerId,"errorHandlerId is required");return{type:FETCH_CATEGORIES,payload:{errorHandlerId:errorHandlerId}}}function loadCategories(_ref2){var results=_ref2.results;return{type:LOAD_CATEGORIES,payload:{results:results}}}function createEmptyCategoryList(){return config["a" /* default */].get("validClientApplications").reduce(function(object,appName){return categories_objectSpread({},object,categories_defineProperty({},appName,core_constants["Yb" /* validAddonTypes */].reduce(function(appObject,addonType){return categories_objectSpread({},appObject,categories_defineProperty({},addonType,[]))},{})))},{})}function categories_reducer(){var state=0<arguments.length&&arguments[0]!==void 0?arguments[0]:categories_initialState,action=1<arguments.length?arguments[1]:void 0;switch(action.type){case FETCH_CATEGORIES:return categories_objectSpread({},categories_initialState,{loading:!0});case LOAD_CATEGORIES:{var payload=action.payload,categoryList=createEmptyCategoryList();payload.results.forEach(function(category){// This category has no data, so skip it.
if(!category||!category.application){// eslint-disable-next-line amo/only-log-strings
logger["a" /* default */].warn("category or category.application was false-y",category);return}// If the API returns data for an application we don't support,
// we'll ignore it for now.
if(!categoryList[category.application]){logger["a" /* default */].warn(Object(es["a" /* oneLine */])(categories_templateObject(),category.application));return}if(!categoryList[category.application][category.type]){logger["a" /* default */].warn(Object(es["a" /* oneLine */])(_templateObject2(),category.type,category.type));return}categoryList[category.application][category.type].push(category)});var categories={};Object.keys(categoryList).forEach(function(appName){categories[appName]={};Object.keys(categoryList[appName]).forEach(function(addonType){categories[appName][addonType]=categoryList[appName][addonType].sort(function(a,b){return a.name.localeCompare(b.name)}).reduce(function(object,value){return categories_objectSpread({},object,categories_defineProperty({},value.slug,value))},{})})});return{categories:categories,loading:!1}}default:return state;}}
// CONCATENATED MODULE: ./src/core/reducers/errors.js
function errors_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});keys.push.apply(keys,symbols)}return keys}function errors_objectSpread(target){for(var i=1,source;i<arguments.length;i++){source=null!=arguments[i]?arguments[i]:{};if(i%2){errors_ownKeys(Object(source),!0).forEach(function(key){errors_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{errors_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}function errors_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}return obj}function _typeof(obj){"@babel/helpers - typeof";if("function"==typeof Symbol&&"symbol"==typeof Symbol.iterator){_typeof=function(obj){return typeof obj}}else{_typeof=function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}/*
 * This inspects an error object and returns an array of messages from it.
 *
 * If the error has an API response then messages will be extracted
 * from it. Otherwise, an array containing a generic error message is returned.
 *
 * Read more about API responses here:
 * http://addons-server.readthedocs.io/en/latest/topics/api/overview.html#responses
 */function getMessagesFromError(error){var errorData={code:core_constants["D" /* ERROR_UNKNOWN */],messages:[]};logger["a" /* default */].debug("Extracting messages from error object:",error);var logCodeChange=function(_ref){var oldCode=_ref.oldCode,newCode=_ref.newCode;logger["a" /* default */].warn("Replacing error code ".concat(oldCode," with ").concat(newCode))};if(error&&error.response&&error.response.data){// Extract a code and messages from the JSON response.
Object.keys(error.response.data).forEach(function(key){var value=error.response.data[key];if(Array.isArray(value)){// Most API reponse errors will consist of a key (which could be
// a form field) and an array of localized messages.
// More info:
// http://addons-server.readthedocs.io/en/latest/topics/api/overview.html#bad-requests
value.forEach(function(message){// Add a field specific error message. We do not prefix the message with
// `key`, which is the field name (or `non_field_errors`), since it is not
// localized.
errorData.messages.push(message)})}else if("code"===key){errorData.code=value}else if("is_disabled_by_developer"===key){if(!0===value){var newCode=core_constants["B" /* ERROR_ADDON_DISABLED_BY_DEV */];logCodeChange({oldCode:errorData.code,newCode:newCode});errorData.code=newCode}}else if("is_disabled_by_mozilla"===key){if(!0===value){var _newCode=core_constants["A" /* ERROR_ADDON_DISABLED_BY_ADMIN */];logCodeChange({oldCode:errorData.code,newCode:_newCode});errorData.code=_newCode}}else if("string"==typeof value||"object"===_typeof(value)){// This is a catch-all for errors that are not structured like
// Django/DRF form field errors. It won't be perfect but at least
// the user will see some kind of error.
errorData.messages.push(value)}else{logger["a" /* default */].warn("Ignoring key \"".concat(key,"\": \"").concat(value,"\" in data of error response"))}})}if(!errorData.messages.length){logger["a" /* default */].warn("Error object did not contain any messages: ".concat(error))}return errorData}// The state looks like:
//
// type ErrorState = {
//   [id: string]: {|
//     code?: string,
//     messages: Array<string>,
//     responseStatusCode?: string,
//   |},
// };
//
var errors_initialState={};function errors(){var state=0<arguments.length&&arguments[0]!==void 0?arguments[0]:errors_initialState,action=1<arguments.length?arguments[1]:void 0;switch(action.type){case core_constants["o" /* CLEAR_ERROR */]:return errors_objectSpread({},state,errors_defineProperty({},action.payload.id,null));case core_constants["Bb" /* SET_ERROR */]:{var _getMessagesFromError=getMessagesFromError(action.payload.error),code=_getMessagesFromError.code,messages=_getMessagesFromError.messages;return errors_objectSpread({},state,errors_defineProperty({},action.payload.id,{code:code,messages:messages,responseStatusCode:action.payload.error.response?action.payload.error.response.status:null}))}case core_constants["Cb" /* SET_ERROR_MESSAGE */]:{var errorData=state[action.payload.id]||{messages:[]};errorData.messages.push(action.payload.message);return errors_objectSpread({},state,errors_defineProperty({},action.payload.id,errorData))}default:return state;}}
// CONCATENATED MODULE: ./src/core/reducers/errorPage.js
function errorPage_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});keys.push.apply(keys,symbols)}return keys}function errorPage_objectSpread(target){for(var i=1,source;i<arguments.length;i++){source=null!=arguments[i]?arguments[i]:{};if(i%2){errorPage_ownKeys(Object(source),!0).forEach(function(key){errorPage_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{errorPage_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}function errorPage_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}return obj}var LOAD_ERROR_PAGE="LOAD_ERROR_PAGE";var errorPage_initialState={clearOnNext:!1,error:null,hasError:!1,statusCode:null};var loadErrorPage=function(){var _ref=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},error=_ref.error;if(!error){throw new Error("error is required")}return{type:LOAD_ERROR_PAGE,payload:{error:error}}};function errorPage(){var state=0<arguments.length&&arguments[0]!==void 0?arguments[0]:errorPage_initialState,action=1<arguments.length?arguments[1]:void 0,payload=action.payload;switch(action.type){case lib["LOCATION_CHANGE"]:{if(state.clearOnNext){return errorPage_initialState}return errorPage_objectSpread({},state,{clearOnNext:!0})}case LOAD_ERROR_PAGE:{// Default to a 500 error if we don't have a status code from our
// response. See:
// github.com/mozilla/addons-frontend/pull/1685#discussion_r99243105
var statusCode=500;if(payload.error&&payload.error.response&&payload.error.response.status){statusCode=payload.error.response.status}return errorPage_objectSpread({},state,{error:payload.error,hasError:!0,statusCode:statusCode})}default:return state;}}
// CONCATENATED MODULE: ./src/core/reducers/formOverlay.js
function formOverlay_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});keys.push.apply(keys,symbols)}return keys}function formOverlay_objectSpread(target){for(var i=1,source;i<arguments.length;i++){source=null!=arguments[i]?arguments[i]:{};if(i%2){formOverlay_ownKeys(Object(source),!0).forEach(function(key){formOverlay_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{formOverlay_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}function formOverlay_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}return obj}var OPEN_FORM_OVERLAY="OPEN_FORM_OVERLAY";var CLOSE_FORM_OVERLAY="CLOSE_FORM_OVERLAY";var BEGIN_FORM_OVERLAY_SUBMIT="BEGIN_FORM_OVERLAY_SUBMIT";var FINISH_FORM_OVERLAY_SUBMIT="FINISH_FORM_OVERLAY_SUBMIT";var formOverlay_initialState={};var openFormOverlay=function(id){if(!id){throw new Error("The id parameter is required")}return{payload:{id:id},type:OPEN_FORM_OVERLAY}};var closeFormOverlay=function(id){if(!id){throw new Error("The id parameter is required")}return{payload:{id:id},type:CLOSE_FORM_OVERLAY}};var beginFormOverlaySubmit=function(id){if(!id){throw new Error("The id parameter is required")}return{payload:{id:id},type:BEGIN_FORM_OVERLAY_SUBMIT}};var finishFormOverlaySubmit=function(id){if(!id){throw new Error("The id parameter is required")}return{payload:{id:id},type:FINISH_FORM_OVERLAY_SUBMIT}};var formOverlay_reducer=function(){var state=0<arguments.length&&arguments[0]!==void 0?arguments[0]:formOverlay_initialState,action=1<arguments.length?arguments[1]:void 0;switch(action.type){case OPEN_FORM_OVERLAY:{var id=action.payload.id;return formOverlay_objectSpread({},state,formOverlay_defineProperty({},id,formOverlay_objectSpread({},state[id],{open:!0})))}case CLOSE_FORM_OVERLAY:{var _id=action.payload.id;return formOverlay_objectSpread({},state,formOverlay_defineProperty({},_id,formOverlay_objectSpread({},state[_id],{open:!1})))}case BEGIN_FORM_OVERLAY_SUBMIT:{var _id2=action.payload.id;return formOverlay_objectSpread({},state,formOverlay_defineProperty({},_id2,formOverlay_objectSpread({},state[_id2],{submitting:!0})))}case FINISH_FORM_OVERLAY_SUBMIT:{var _id3=action.payload.id;return formOverlay_objectSpread({},state,formOverlay_defineProperty({},_id3,formOverlay_objectSpread({},state[_id3],{submitting:!1})))}default:return state;}};/* harmony default export */ var formOverlay = (formOverlay_reducer);
// CONCATENATED MODULE: ./src/amo/reducers/guides.js
function guides_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});keys.push.apply(keys,symbols)}return keys}function guides_objectSpread(target){for(var i=1,source;i<arguments.length;i++){source=null!=arguments[i]?arguments[i]:{};if(i%2){guides_ownKeys(Object(source),!0).forEach(function(key){guides_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{guides_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}function guides_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}return obj}var FETCH_GUIDES_ADDONS="FETCH_GUIDES_ADDONS";var guides_initialState={guidsBySlug:{},loading:!1};var fetchGuidesAddons=function(_ref){var errorHandlerId=_ref.errorHandlerId,guids=_ref.guids,slug=_ref.slug;browser_default()(errorHandlerId,"errorHandlerId is required");browser_default()(guids,"guids is required");browser_default()(slug,"slug is required");return{type:FETCH_GUIDES_ADDONS,payload:{guids:guids,errorHandlerId:errorHandlerId,slug:slug}}};var getGUIDsBySlug=function(_ref2){var guidesState=_ref2.guidesState,slug=_ref2.slug;return guidesState.guidsBySlug[slug]||[]};var guides_reducer=function(){var state=0<arguments.length&&arguments[0]!==void 0?arguments[0]:guides_initialState,action=1<arguments.length?arguments[1]:void 0;switch(action.type){case FETCH_GUIDES_ADDONS:{var _action$payload=action.payload,guids=_action$payload.guids,_slug=_action$payload.slug;return guides_objectSpread({},state,{guidsBySlug:guides_objectSpread({},state.guidsBySlug,guides_defineProperty({},_slug,guids)),loading:!0})}case reducers_addons["a" /* LOAD_ADDON_RESULTS */]:return guides_objectSpread({},state,{loading:!1});default:return state;}};/* harmony default export */ var guides = (guides_reducer);
// EXTERNAL MODULE: ./node_modules/knuth-shuffle/index.js
var knuth_shuffle = __webpack_require__(741);

// CONCATENATED MODULE: ./src/core/reducers/heroBanners.js
function heroBanners_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});keys.push.apply(keys,symbols)}return keys}function heroBanners_objectSpread(target){for(var i=1,source;i<arguments.length;i++){source=null!=arguments[i]?arguments[i]:{};if(i%2){heroBanners_ownKeys(Object(source),!0).forEach(function(key){heroBanners_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{heroBanners_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}function heroBanners_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}return obj}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||"[object Arguments]"===Object.prototype.toString.call(iter))return Array.from(iter)}function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i]}return arr2}}// Hero banners have three items max, all the time :-)
var MAX_ITEMS=3;var SET_HERO_BANNER_ORDER="SET_HERO_BANNER_ORDER";var setHeroBannerOrder=function(_ref){var name=_ref.name,_ref$random=_ref.random,random=void 0===_ref$random?!1:_ref$random,sections=_ref.sections;if(!name){throw new Error("name is required")}if(!sections){throw new Error("sections are required")}return{payload:{name:name,random:random,sections:sections},type:SET_HERO_BANNER_ORDER}};var heroBanners_initialState={};function heroBannerOrderReducer(){var state=0<arguments.length&&arguments[0]!==void 0?arguments[0]:heroBanners_initialState,action=1<arguments.length?arguments[1]:void 0;switch(action.type){case SET_HERO_BANNER_ORDER:{var _action$payload=action.payload,name=_action$payload.name,random=_action$payload.random,sections=_action$payload.sections,orderArray=_toConsumableArray(sections.keys()),order=random?Object(knuth_shuffle["knuthShuffle"])(orderArray):orderArray;return heroBanners_objectSpread({},state,heroBanners_defineProperty({},name,{order:order.slice(0,MAX_ITEMS)}))}default:return state;}}
// CONCATENATED MODULE: ./src/core/reducers/languageTools.js
function languageTools_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});keys.push.apply(keys,symbols)}return keys}function languageTools_objectSpread(target){for(var i=1,source;i<arguments.length;i++){source=null!=arguments[i]?arguments[i]:{};if(i%2){languageTools_ownKeys(Object(source),!0).forEach(function(key){languageTools_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{languageTools_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}function languageTools_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}return obj}var FETCH_LANGUAGE_TOOLS="FETCH_LANGUAGE_TOOLS";var LOAD_LANGUAGE_TOOLS="LOAD_LANGUAGE_TOOLS";var languageTools_initialState={byID:{}};var fetchLanguageTools=function(){var _ref=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},errorHandlerId=_ref.errorHandlerId;if(!errorHandlerId){throw new Error("errorHandlerId is required")}return{type:FETCH_LANGUAGE_TOOLS,payload:{errorHandlerId:errorHandlerId}}};var loadLanguageTools=function(){var _ref2=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},languageTools=_ref2.languageTools;if(!languageTools){throw new Error("languageTools are required")}return{type:LOAD_LANGUAGE_TOOLS,payload:{languageTools:languageTools}}};var getAllLanguageTools=function(state){var byID=state.languageTools.byID;// TODO: one day, Flow will get `Object.values()` right but for now... we
// have to deal with it.
// See: https://github.com/facebook/flow/issues/2221.
return Object.keys(byID).map(function(key){return byID[key]})};function languageToolsReducer(){var state=0<arguments.length&&arguments[0]!==void 0?arguments[0]:languageTools_initialState,action=1<arguments.length?arguments[1]:void 0;switch(action.type){case LOAD_LANGUAGE_TOOLS:{var byID=languageTools_objectSpread({},state.byID);action.payload.languageTools.forEach(function(item){byID["".concat(item.id)]=item});return{byID:byID}}default:return state;}}
// EXTERNAL MODULE: ./src/core/reducers/infoDialog.js
var infoDialog = __webpack_require__(337);

// CONCATENATED MODULE: ./src/core/reducers/installations.js
function installations_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});keys.push.apply(keys,symbols)}return keys}function installations_objectSpread(target){for(var i=1,source;i<arguments.length;i++){source=null!=arguments[i]?arguments[i]:{};if(i%2){installations_ownKeys(Object(source),!0).forEach(function(key){installations_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{installations_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}function installations_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}return obj}function installations(){var state=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},_ref=1<arguments.length?arguments[1]:void 0,type=_ref.type,payload=_ref.payload;function updateAddon(newProps){var guid=payload.guid,addon=state[guid];if(!addon){throw new Error("Cannot reduce type ".concat(type,"; no add-on with guid ").concat(guid," found."))}return installations_objectSpread({},addon,{},newProps)}switch(type){case core_constants["lb" /* INSTALL_STATE */]:return installations_objectSpread({},state,installations_defineProperty({},payload.guid,{guid:payload.guid,url:payload.url,error:payload.error,downloadProgress:0,status:payload.status,needsRestart:payload.needsRestart||!1}));case core_constants["Hb" /* START_DOWNLOAD */]:return installations_objectSpread({},state,installations_defineProperty({},payload.guid,updateAddon({status:core_constants["s" /* DOWNLOADING */]})));case core_constants["u" /* DOWNLOAD_PROGRESS */]:return installations_objectSpread({},state,installations_defineProperty({},payload.guid,updateAddon({downloadProgress:payload.downloadProgress})));case core_constants["ab" /* INSTALL_COMPLETE */]:return installations_objectSpread({},state,installations_defineProperty({},payload.guid,updateAddon({status:core_constants["T" /* INSTALLED */]})));case core_constants["Tb" /* UNINSTALL_COMPLETE */]:return installations_objectSpread({},state,installations_defineProperty({},payload.guid,updateAddon({status:core_constants["Qb" /* UNINSTALLED */]})));case core_constants["W" /* INSTALL_CANCELLED */]:return installations_objectSpread({},state,installations_defineProperty({},payload.guid,updateAddon({downloadProgress:0,status:core_constants["Qb" /* UNINSTALLED */]})));case core_constants["eb" /* INSTALL_ERROR */]:return installations_objectSpread({},state,installations_defineProperty({},payload.guid,updateAddon({downloadProgress:0,error:payload.error,status:core_constants["z" /* ERROR */]})));default:return state;}}
// CONCATENATED MODULE: ./src/core/reducers/redirectTo.js
var SEND_SERVER_REDIRECT="SEND_SERVER_REDIRECT";var redirectTo_initialState={url:null,status:null};var sendServerRedirect=function(_ref){var status=_ref.status,url=_ref.url,_ref$_config=_ref._config,_config=void 0===_ref$_config?config["a" /* default */]:_ref$_config;if(!status){throw new Error("status is required")}if(!url){throw new Error("url is required")}if(!_config.get("server")){logger["a" /* default */].warn("sendServerRedirect() currently does nothing when run from client\n      code")}return{type:SEND_SERVER_REDIRECT,payload:{status:status,url:url}}};var redirectTo_reducer=function(){var state=0<arguments.length&&arguments[0]!==void 0?arguments[0]:redirectTo_initialState,action=1<arguments.length?arguments[1]:void 0;switch(action.type){case SEND_SERVER_REDIRECT:{var payload=action.payload;return{status:payload.status,url:payload.url}}default:return state;}};/* harmony default export */ var redirectTo = (redirectTo_reducer);
// EXTERNAL MODULE: ./src/core/reducers/search.js
var reducers_search = __webpack_require__(170);

// CONCATENATED MODULE: ./src/core/reducers/site.js
function site_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});keys.push.apply(keys,symbols)}return keys}function site_objectSpread(target){for(var i=1,source;i<arguments.length;i++){source=null!=arguments[i]?arguments[i]:{};if(i%2){site_ownKeys(Object(source),!0).forEach(function(key){site_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{site_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}function site_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}return obj}var FETCH_SITE_STATUS="FETCH_SITE_STATUS";var LOAD_SITE_STATUS="LOAD_SITE_STATUS";var site_initialState={readOnly:!1,notice:null};var fetchSiteStatus=function(){return{type:FETCH_SITE_STATUS,payload:{}}};var loadSiteStatus=function(_ref){var readOnly=_ref.readOnly,notice=_ref.notice;return{type:LOAD_SITE_STATUS,payload:{readOnly:readOnly,notice:notice}}};function siteReducer(){var state=0<arguments.length&&arguments[0]!==void 0?arguments[0]:site_initialState,action=1<arguments.length?arguments[1]:void 0;switch(action.type){case LOAD_SITE_STATUS:return site_objectSpread({},state,{readOnly:action.payload.readOnly,notice:action.payload.notice});default:return state;}}
// EXTERNAL MODULE: ./src/core/reducers/survey.js
var survey = __webpack_require__(338);

// EXTERNAL MODULE: ./src/core/reducers/uiState.js
var uiState = __webpack_require__(171);

// EXTERNAL MODULE: ./src/core/reducers/versions.js
var versions = __webpack_require__(339);

// EXTERNAL MODULE: ./node_modules/redux-logger/dist/redux-logger.js
var redux_logger = __webpack_require__(744);

// CONCATENATED MODULE: ./src/core/store.js
/* global window */var minimalReduxLogger=function(){return function(next){return function(action){logger["a" /* default */].info("Dispatching ".concat(action.type));return next(action)}}};/*
 * Enhance a redux store with common middleware.
 *
 * This returns a function that takes a single argument, `createStore`,
 * and returns a new `createStore` function.
 */function middleware(){var _ref=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},_ref$_applyMiddleware=_ref._applyMiddleware,_applyMiddleware=void 0===_ref$_applyMiddleware?redux["a" /* applyMiddleware */]:_ref$_applyMiddleware,_ref$_config=_ref._config,_config=void 0===_ref$_config?config["a" /* default */]:_ref$_config,_ref$_createLogger=_ref._createLogger,_createLogger=void 0===_ref$_createLogger?redux_logger["createLogger"]:_ref$_createLogger,_ref$_minimalReduxLog=_ref._minimalReduxLogger,_minimalReduxLogger=void 0===_ref$_minimalReduxLog?minimalReduxLogger:_ref$_minimalReduxLog,_ref$_window=_ref._window,_window=void 0===_ref$_window?"undefined"!=typeof window?window:null:_ref$_window,_ref$sagaMiddleware=_ref.sagaMiddleware,sagaMiddleware=void 0===_ref$sagaMiddleware?null:_ref$sagaMiddleware,_ref$routerMiddleware=_ref.routerMiddleware,routerMiddleware=void 0===_ref$routerMiddleware?null:_ref$routerMiddleware,isDev=_config.get("isDevelopment"),callbacks=[];if(isDev){// Log all Redux actions but only when in development.
if(_config.get("server")){// Use a minimal logger while on the server.
callbacks.push(_minimalReduxLogger)}else{// Use the full logger while on the client.
callbacks.push(_createLogger())}}if(sagaMiddleware){callbacks.push(sagaMiddleware)}if(routerMiddleware){callbacks.push(routerMiddleware)}return Object(redux["d" /* compose */])(_applyMiddleware.apply(void 0,callbacks),_config.get("enableDevTools")&&_window&&_window.__REDUX_DEVTOOLS_EXTENSION__?_window.__REDUX_DEVTOOLS_EXTENSION__():function(createStore){return createStore})}
// CONCATENATED MODULE: ./src/amo/store.js
function store_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});keys.push.apply(keys,symbols)}return keys}function store_objectSpread(target){for(var i=1,source;i<arguments.length;i++){source=null!=arguments[i]?arguments[i]:{};if(i%2){store_ownKeys(Object(source),!0).forEach(function(key){store_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{store_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}function store_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}return obj}var createRootReducer=function(_ref){var history=_ref.history,reducers=_ref.reducers;return Object(redux["c" /* combineReducers */])(store_objectSpread({},reducers,{router:Object(lib["connectRouter"])(history)}))};var store_reducers={abuse:abuseReducer,addons:reducers_addons["c" /* default */],addonsByAuthors:addonsByAuthors["b" /* default */],api:api["A" /* default */],autocomplete:reducer,categories:categories_reducer,collections:collections["d" /* default */],errors:errors,errorPage:errorPage,formOverlay:formOverlay,heroBanners:heroBannerOrderReducer,home:home["c" /* default */],guides:guides,infoDialog:infoDialog["a" /* default */],installations:installations,landing:landing["b" /* default */],languageTools:languageToolsReducer,recommendations:recommendations["b" /* default */],redirectTo:redirectTo,reviews:reviewsReducer,search:reducers_search["b" /* default */],site:siteReducer,survey:survey["a" /* default */],uiState:uiState["a" /* default */],userAbuseReports:userAbuseReportReducer,users:users["b" /* default */],versions:versions["a" /* default */],viewContext:viewContext};function createStore(){var _ref2=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},_ref2$history=_ref2.history,history=void 0===_ref2$history?Object(esm_history["c" /* createMemoryHistory */])():_ref2$history,_ref2$initialState=_ref2.initialState,initialState=void 0===_ref2$initialState?{}:_ref2$initialState,sagaMiddleware=Object(redux_saga_es["a" /* default */])(),store=Object(redux["e" /* createStore */])(createRootReducer({history:history,reducers:store_reducers}),initialState,middleware({routerMiddleware:Object(lib["routerMiddleware"])(history),sagaMiddleware:sagaMiddleware}));return{sagaMiddleware:sagaMiddleware,store:store}}
// EXTERNAL MODULE: ./src/amo/utils/index.js
var utils = __webpack_require__(172);

// CONCATENATED MODULE: ./src/core/actions/index.js
function setAuthToken(token){if(!token){throw new Error("token cannot be falsey")}return{type:core_constants["yb" /* SET_AUTH_TOKEN */],payload:{token:token}}}function setClientApp(clientApp){if(!clientApp){throw new Error("clientApp cannot be falsey")}return{type:core_constants["zb" /* SET_CLIENT_APP */],payload:{clientApp:clientApp}}}function setLang(lang){return{type:core_constants["Db" /* SET_LANG */],payload:{lang:lang}}}function setUserAgent(userAgent){return{type:core_constants["Fb" /* SET_USER_AGENT */],payload:{userAgent:userAgent}}}function setRequestId(requestId){return{type:core_constants["Eb" /* SET_REQUEST_ID */],payload:{requestId:requestId}}}
// EXTERNAL MODULE: ./src/core/api/index.js + 1 modules
var core_api = __webpack_require__(208);

// EXTERNAL MODULE: ./src/core/addonManager.js
var addonManager = __webpack_require__(341);

// EXTERNAL MODULE: ./src/core/errorHandler.js + 2 modules
var errorHandler = __webpack_require__(254);

// EXTERNAL MODULE: ./src/core/i18n/utils.js
var i18n_utils = __webpack_require__(340);

// EXTERNAL MODULE: ./src/core/withUIState.js
var withUIState = __webpack_require__(253);

// EXTERNAL MODULE: ./src/core/utils/index.js + 2 modules
var core_utils = __webpack_require__(35);

// CONCATENATED MODULE: ./tests/unit/helpers.js
/* unused harmony export sampleUserAgent */
/* unused harmony export sampleUserAgentParsed */
/* unused harmony export fakePreview */
/* unused harmony export fakePlatformFile */
/* unused harmony export fakeAuthor */
/* unused harmony export fakeVersion */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return fakeAddon; });
/* unused harmony export fakeTheme */
/* unused harmony export fakeInstalledAddon */
/* unused harmony export fakeReview */
/* unused harmony export createExternalReview */
/* unused harmony export fakeCategory */
/* unused harmony export fakeRecommendations */
/* unused harmony export fakeAddonInfo */
/* unused harmony export fakePrimaryHeroShelfExternal */
/* unused harmony export createPrimaryHeroShelf */
/* unused harmony export createSecondaryHeroShelf */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createHeroShelves; });
/* unused harmony export onLocationChanged */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return dispatchClientMetadata; });
/* unused harmony export userAuthToken */
/* unused harmony export createUserAccountResponse */
/* unused harmony export createStubErrorHandler */
/* unused harmony export randomId */
/* unused harmony export dispatchSignInActions */
/* unused harmony export dispatchSearchResults */
/* unused harmony export createAddonsApiResult */
/* unused harmony export createFakeAutocompleteResult */
/* unused harmony export createFakeAddon */
/* unused harmony export dispatchAutocompleteResults */
/* unused harmony export createFakeCollectionDetail */
/* unused harmony export createFakeCollectionAddon */
/* unused harmony export createFakeCollectionAddons */
/* unused harmony export createFakeCollectionAddonsListResponse */
/* unused harmony export getFakeAddonManagerWrapper */
/* unused harmony export unexpectedSuccess */
/* unused harmony export JedSpy */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return fakeI18n; });
/* unused harmony export userAgentsByPlatform */
/* unused harmony export userAgents */
/* unused harmony export apiResponsePage */
/* unused harmony export shallowUntilTarget */
/* unused harmony export createFakeEvent */
/* unused harmony export createFakeMozWindow */
/* unused harmony export generateHeaders */
/* unused harmony export createApiResponse */
/* unused harmony export createFakeLanguageTool */
/* unused harmony export createFakeAddonAbuseReport */
/* unused harmony export createFakeUserAbuseReport */
/* unused harmony export getFakeConfig */
/* unused harmony export urlWithTheseParams */
/* unused harmony export createFakeLocation */
/* unused harmony export createFakeHistory */
/* unused harmony export createFakeClientCompatibility */
/* unused harmony export createContextWithFakeRouter */
/* unused harmony export simulateComponentCallback */
/* unused harmony export createUserNotificationsResponse */
/* unused harmony export applyUIStateChanges */
/* unused harmony export setUIState */
/* unused harmony export fakeCookies */
/* unused harmony export createFakeTracking */
/* unused harmony export matchingSagaAction */
/* unused harmony export getFakeLogger */
/* unused harmony export createFakeDebounce */
/* unused harmony export createFakeLocalState */
/* unused harmony export normalizeSpaces */
var _compatibility;function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){reject(error);return}if(info.done){resolve(value)}else{Promise.resolve(value).then(_next,_throw)}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)})}}function helpers_typeof(obj){"@babel/helpers - typeof";if("function"==typeof Symbol&&"symbol"==typeof Symbol.iterator){helpers_typeof=function(obj){return typeof obj}}else{helpers_typeof=function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return helpers_typeof(obj)}function _templateObject26(){var data=helpers_taggedTemplateLiteral(["Could not find "," in rendered\n    instance: ","; gave up after "," tries"]);_templateObject26=function(){return data};return data}function _templateObject25(){var data=helpers_taggedTemplateLiteral(["Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:52.2.1)\n      Gecko/20100101 Firefox/52.2.1"]);_templateObject25=function(){return data};return data}function _templateObject24(){var data=helpers_taggedTemplateLiteral(["Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko)\n      Chrome/41.0.2228.0 Safari/537.36"]);_templateObject24=function(){return data};return data}function _templateObject23(){var data=helpers_taggedTemplateLiteral(["Mozilla/5.0 (Linux; Android 6.0.1; Nexus 6P Build/MMB29P)\n      AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.83 Mobile\n      Safari/537.36"]);_templateObject23=function(){return data};return data}function _templateObject22(){var data=helpers_taggedTemplateLiteral(["Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76K)\n      AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile\n      Safari/535.19"]);_templateObject22=function(){return data};return data}function _templateObject21(){var data=helpers_taggedTemplateLiteral(["Mozilla/5.0 (Linux; Android 4.1.1; Galaxy Nexus Build/JRO03C)\n      AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile\n      Safari/535.19"]);_templateObject21=function(){return data};return data}function _templateObject20(){var data=helpers_taggedTemplateLiteral(["Mozilla/5.0 (Linux; U; Android 2.3.4; fr-fr; HTC Desire Build/GRJ22)\n      AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1"]);_templateObject20=function(){return data};return data}function _templateObject19(){var data=helpers_taggedTemplateLiteral(["Mozilla/5.0 (Linux; U; Android 4.0.3; ko-kr; LG-L160L Build/IML74K)\n      AppleWebkit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30"]);_templateObject19=function(){return data};return data}function _templateObject18(){var data=helpers_taggedTemplateLiteral(["Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0)\n      Gecko/20100101 Firefox/40.1"]);_templateObject18=function(){return data};return data}function _templateObject17(){var data=helpers_taggedTemplateLiteral(["Mozilla/51.0.2 (X11; Unix x86_64; rv:29.0)\n      Gecko/20170101 Firefox/51.0.2"]);_templateObject17=function(){return data};return data}function _templateObject16(){var data=helpers_taggedTemplateLiteral(["Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:69.0)\n      Gecko/20100101 Firefox/69.0"]);_templateObject16=function(){return data};return data}function _templateObject15(){var data=helpers_taggedTemplateLiteral(["Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:61.0)\n      Gecko/20100101 Firefox/61.0"]);_templateObject15=function(){return data};return data}function _templateObject14(){var data=helpers_taggedTemplateLiteral(["Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:57.0)\n      Gecko/20100101 Firefox/57.1"]);_templateObject14=function(){return data};return data}function _templateObject13(){var data=helpers_taggedTemplateLiteral(["Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10;\n      rv:33.0) Gecko/20100101 Firefox/33.0"]);_templateObject13=function(){return data};return data}function _templateObject12(){var data=helpers_taggedTemplateLiteral(["Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1)\n      AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.1 Safari/537.36"]);_templateObject12=function(){return data};return data}function _templateObject11(){var data=helpers_taggedTemplateLiteral(["Mozilla/5.0 (X11; Ubuntu; Linux i686;\n      rv:57.0) Gecko/20100101 Firefox/57.0"]);_templateObject11=function(){return data};return data}function _templateObject10(){var data=helpers_taggedTemplateLiteral(["Mozilla/5.0 (X11; Linux i686; rv:10.0)\n      Gecko/20100101 Firefox/10.0"]);_templateObject10=function(){return data};return data}function _templateObject9(){var data=helpers_taggedTemplateLiteral(["Mozilla/5.0 (iPod touch; CPU iPhone\n      OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko)\n      FxiOS/1.0 Mobile/12F69 Safari/600.1.4"]);_templateObject9=function(){return data};return data}function _templateObject8(){var data=helpers_taggedTemplateLiteral(["Mozilla/5.0 (iPhone; CPU iPhone OS 8_3\n      like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko)\n      FxiOS/1.0 Mobile/12F69n Safari/600.1.4"]);_templateObject8=function(){return data};return data}function _templateObject7(){var data=helpers_taggedTemplateLiteral(["Mozilla/5.0 (iPad; CPU iPhone OS 8_3\n      like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko)\n      FxiOS/1.0 Mobile/12F69 Safari/600.1.4"]);_templateObject7=function(){return data};return data}function _templateObject6(){var data=helpers_taggedTemplateLiteral(["Mozilla/5.0 (X11; FreeBSD amd64; rv:40.0)\n      Gecko/20100101 Firefox/40.0"]);_templateObject6=function(){return data};return data}function _templateObject5(){var data=helpers_taggedTemplateLiteral(["Mozilla/5.0 (Android 9; Mobile; rv:70.0) Gecko/70.0\n      Firefox/70.0"]);_templateObject5=function(){return data};return data}function _templateObject4(){var data=helpers_taggedTemplateLiteral(["Mozilla/5.0 (Android 9; Mobile; rv:69.0) Gecko/69.0\n      Firefox/69.0"]);_templateObject4=function(){return data};return data}function _templateObject3(){var data=helpers_taggedTemplateLiteral(["Mozilla/5.0 (Android 9; Mobile; rv:68.0) Gecko/68.0\n      Firefox/68.0"]);_templateObject3=function(){return data};return data}function helpers_templateObject2(){var data=helpers_taggedTemplateLiteral(["Mozilla/5.0 (Android; Tablet; rv:40.0)\n      Gecko/40.0 Firefox/40.0"]);helpers_templateObject2=function(){return data};return data}function helpers_templateObject(){var data=helpers_taggedTemplateLiteral(["Mozilla/5.0 (Android; Mobile; rv:40.0)\n      Gecko/40.0 Firefox/40.0"]);helpers_templateObject=function(){return data};return data}function helpers_taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0)}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function helpers_toConsumableArray(arr){return helpers_arrayWithoutHoles(arr)||helpers_iterableToArray(arr)||helpers_nonIterableSpread()}function helpers_nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function helpers_iterableToArray(iter){if(Symbol.iterator in Object(iter)||"[object Arguments]"===Object.prototype.toString.call(iter))return Array.from(iter)}function helpers_arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i]}return arr2}}function _objectWithoutProperties(source,excluded){if(null==source)return{};var target=_objectWithoutPropertiesLoose(source,excluded),key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(0<=excluded.indexOf(key))continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key]}}return target}function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var target={},sourceKeys=Object.keys(source),key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(0<=excluded.indexOf(key))continue;target[key]=source[key]}return target}function helpers_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});keys.push.apply(keys,symbols)}return keys}function helpers_objectSpread(target){for(var i=1,source;i<arguments.length;i++){source=null!=arguments[i]?arguments[i]:{};if(i%2){helpers_ownKeys(Object(source),!0).forEach(function(key){helpers_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{helpers_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}function helpers_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}return obj}/* global Headers, Response */var sampleUserAgent="Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.1";var sampleUserAgentParsed=ua_parser_default()("Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.1");var fakePreview=Object.freeze({id:1,caption:"Image 1",image_url:"https://addons.cdn.mozilla.net/full/1.png",thumbnail_url:"https://addons.cdn.mozilla.net/thumb/1.png",image_size:[400,200],thumbnail_size:[200,100]});var fakePlatformFile=Object.freeze({created:"2014-11-22T10:09:01Z",hash:"a1b2c3d4",id:57721,is_mozilla_signed_extension:!1,is_restart_required:!1,is_webextension:!0,permissions:["activeTab","webRequest"],platform:core_constants["pb" /* OS_ALL */],size:123,status:"public",url:"https://a.m.o/files/321/addon.xpi"});var fakeAuthor=Object.freeze({id:98811255,name:"Krupa",picture_url:"https://addons.cdn.mozilla.net/static/img/anon_user.png",url:"http://olympia.test/en-US/firefox/user/krupa/",username:"krupa"});var fakeVersion=Object.freeze({channel:"listed",compatibility:(_compatibility={},helpers_defineProperty(_compatibility,core_constants["p" /* CLIENT_APP_ANDROID */],{min:"48.0",max:"*"}),helpers_defineProperty(_compatibility,core_constants["q" /* CLIENT_APP_FIREFOX */],{min:"48.0",max:"*"}),_compatibility),edit_url:"https://addons.m.o/addon/chill-out/edit",files:[fakePlatformFile],id:123,is_strict_compatibility_enabled:!1,license:{is_custom:!1,name:"tofulicense",url:"http://license.com/"},release_notes:"Some release notes",reviewed:"2014-11-22T10:09:01Z",version:"2.0.0"});var fakeAddon=Object.freeze({authors:[fakeAuthor],average_daily_users:100,categories:{firefox:["other"]},contributions_url:"",created:"2014-11-22T10:09:01Z",current_version:fakeVersion,description:"This is a longer description of the chill out add-on",default_locale:"en-US",edit_url:"https://addons.m.o/addon/chill-out/edit",guid:"1234@my-addons.firefox",has_eula:!0,has_privacy_policy:!0,homepage:"http://hamsterdance.com/",id:1234,icon_url:"https://addons.cdn.mozilla.net/webdev-64.png",is_disabled:!1,is_experimental:!1,is_recommended:!1,is_source_public:!0,last_updated:"2018-11-22T10:09:01Z",name:"Chill Out",previews:[fakePreview],public_stats:!0,ratings:{average:3.5,count:10,text_count:5},requires_payment:!1,review_url:"https://addons.m.o/en-US/editors/review/2377",slug:"chill-out",status:"public",summary:"This is a summary of the chill out add-on",support_email:null,support_url:"http://support.hampsterdance.com/",tags:["chilling"],type:core_constants["g" /* ADDON_TYPE_EXTENSION */],url:"https://addons.m.o/addon/chill-out/",weekly_downloads:900023});var fakeTheme=Object.freeze(helpers_objectSpread({},fakeAddon,{authors:[{name:"MaDonna",url:"http://olympia.test/en-US/firefox/user/madonna/",username:"MaDonna"}],current_version:helpers_objectSpread({},fakeAddon.current_version,{compatibility:{},version:"0"}),description:"This is the add-on description",guid:"dancing-daisies-theme@my-addons.firefox",id:54321,name:"Dancing Daisies by MaDonna",slug:"dancing-daisies",type:core_constants["j" /* ADDON_TYPE_STATIC_THEME */],previews:[fakePreview]}));var fakeInstalledAddon=Object.freeze({downloadProgress:0,error:void 0,guid:"installed-addon@company",needsRestart:!1,status:core_constants["v" /* ENABLED */],url:"https://a.m.o/addon/detail/view"});var fakeReview=Object.freeze({id:8876,// The API only provides a minimal add-on representation.
addon:{icon_url:"https://addons.cdn.mozilla.net/webdev-64.png",id:28014,name:"fake add-on name",slug:fakeAddon.slug},created:"2017-01-09T21:49:14Z",score:3,version:fakeAddon.current_version,user:{id:1234,name:"fred",url:"http://some.com/link/to/profile"},is_latest:!1,is_developer_reply:!1,body:"It is Okay"});function createExternalReview(){var _ref=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},_ref$addonId=_ref.addonId,addonId=void 0===_ref$addonId?fakeReview.addon.id:_ref$addonId,_ref$addonSlug=_ref.addonSlug,addonSlug=void 0===_ref$addonSlug?fakeReview.addon.slug:_ref$addonSlug,body=_ref.body,_ref$id=_ref.id,id=void 0===_ref$id?76654:_ref$id,_ref$isDeveloperReply=_ref.isDeveloperReply,isDeveloperReply=void 0===_ref$isDeveloperReply?!1:_ref$isDeveloperReply,_ref$score=_ref.score,score=void 0===_ref$score?4:_ref$score,_ref$userId=_ref.userId,userId=void 0===_ref$userId?fakeReview.user.id:_ref$userId,_ref$versionId=_ref.versionId,versionId=void 0===_ref$versionId?fakeReview.version.id:_ref$versionId;return helpers_objectSpread({},fakeReview,{addon:helpers_objectSpread({},fakeAddon,{id:addonId,slug:addonSlug}),body:body,id:id,is_developer_reply:isDeveloperReply,score:score,user:helpers_objectSpread({},fakeReview.user,{id:userId}),version:helpers_objectSpread({},fakeReview.version,{id:versionId})})}var fakeCategory=Object.freeze({application:core_constants["q" /* CLIENT_APP_FIREFOX */],description:"I am a cool category for doing things",id:5,misc:!1,name:"Testing category",slug:"test",type:core_constants["j" /* ADDON_TYPE_STATIC_THEME */],weight:1});var fakeRecommendations=Object.freeze({addons:[,,,,].fill(fakeAddon),fallbackReason:"timeout",loading:!1,outcome:"recommended_fallback"});var fakeAddonInfo={eula:"eula text",privacy_policy:" some privacy policy text"};var fakePrimaryHeroShelfExternal=Object.freeze({id:1,guid:"some-guid",homepage:"https://mozilla.org",name:"some external name",type:core_constants["g" /* ADDON_TYPE_EXTENSION */]});var createPrimaryHeroShelf=function(){var _ref2=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},_ref2$addon=_ref2.addon,addon=void 0===_ref2$addon?void 0:_ref2$addon,_ref2$description=_ref2.description,description=void 0===_ref2$description?"Primary shelf description":_ref2$description,_ref2$external=_ref2.external,external=void 0===_ref2$external?void 0:_ref2$external,_ref2$featuredImage=_ref2.featuredImage,featuredImage=void 0===_ref2$featuredImage?"https://addons-dev-cdn.allizom.org/static/img/hero/featured/teamaddons.jpg":_ref2$featuredImage,_ref2$gradient=_ref2.gradient,gradient=void 0===_ref2$gradient?{start:"color-ink-80",end:"color-blue-70"}:_ref2$gradient;return{addon:addon,description:description,external:external,featured_image:featuredImage,gradient:gradient}};var createSecondaryHeroShelf=function(){var _ref3=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},_ref3$cta=_ref3.cta,cta=void 0===_ref3$cta?{url:"https://mozilla.org",text:"Some cta text"}:_ref3$cta,_ref3$description=_ref3.description,description=void 0===_ref3$description?"Secondary shelf description":_ref3$description,_ref3$headline=_ref3.headline,headline=void 0===_ref3$headline?"Secondary shelf headline":_ref3$headline,_ref3$modules=_ref3.modules,modules=void 0===_ref3$modules?[{icon:"icon1",description:"module 1 description",cta:{url:"https://mozilla.org/1",text:"module 1 cta text"}},{icon:"icon2",description:"module 2 description",cta:{url:"https://mozilla.org/2",text:"module 2 cta text"}},{icon:"icon3",description:"module 3 description",cta:{url:"https://mozilla.org/3",text:"module 3 cta text"}}]:_ref3$modules;return{cta:cta,description:description,headline:headline,modules:modules}};var createHeroShelves=function(){var _ref4=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},_ref4$primaryProps=_ref4.primaryProps,primaryProps=void 0===_ref4$primaryProps?{}:_ref4$primaryProps,_ref4$secondaryProps=_ref4.secondaryProps,secondaryProps=void 0===_ref4$secondaryProps?{}:_ref4$secondaryProps;return{primary:createPrimaryHeroShelf(primaryProps),secondary:createSecondaryHeroShelf(secondaryProps)}};var onLocationChanged=function(_ref5){var pathname=_ref5.pathname,_ref5$search=_ref5.search,search=void 0===_ref5$search?"":_ref5$search,others=_objectWithoutProperties(_ref5,["pathname","search"]),history=Object(core_utils["b" /* addQueryParamsToHistory */])({history:Object(esm_history["c" /* createMemoryHistory */])({initialEntries:["".concat(pathname).concat(search)]})});return{type:lib["LOCATION_CHANGE"],payload:{location:helpers_objectSpread({},history.location,{},others),action:"PUSH"}}};function dispatchClientMetadata(){var _ref6=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},_ref6$store=_ref6.store,store=void 0===_ref6$store?createStore().store:_ref6$store,_ref6$clientApp=_ref6.clientApp,clientApp=void 0===_ref6$clientApp?core_constants["p" /* CLIENT_APP_ANDROID */]:_ref6$clientApp,_ref6$lang=_ref6.lang,lang=void 0===_ref6$lang?"en-US":_ref6$lang,_ref6$userAgent=_ref6.userAgent,userAgent=void 0===_ref6$userAgent?sampleUserAgent:_ref6$userAgent,_ref6$pathname=_ref6.pathname,pathname=void 0===_ref6$pathname?"/".concat(lang,"/").concat(clientApp,"/"):_ref6$pathname,_ref6$search=_ref6.search,search=void 0===_ref6$search?"":_ref6$search;store.dispatch(setClientApp(clientApp));store.dispatch(setLang(lang));store.dispatch(setUserAgent(userAgent));// Simulate the behavior of `connected-react-router`.
store.dispatch(onLocationChanged({pathname:pathname,search:search}));return{store:store,state:store.getState()}}/*
 * Return a fake authentication token that can be
 * at least decoded in a realistic way.
 */function userAuthToken(){var dataOverrides=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},_ref7=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},_ref7$tokenCreatedAt=_ref7.tokenCreatedAt,tokenCreatedAt=void 0===_ref7$tokenCreatedAt?(Date.now()/1e3).toFixed(0):_ref7$tokenCreatedAt,tokenData=_ref7.tokenData,data=helpers_objectSpread({user_id:102345},dataOverrides),encodedToken=tokenData;if(!encodedToken){encodedToken=base64url_default.a.encode(JSON.stringify(data))}var base62=Object(utils["d" /* getDjangoBase62 */])(),timestamp=base62.encode(tokenCreatedAt),sig=base64url_default.a.encode("pretend-this-is-a-signature");return"".concat(encodedToken,":").concat(timestamp,":").concat(sig)}function createUserAccountResponse(){var _ref8=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},_ref8$id=_ref8.id,id=void 0===_ref8$id?123456:_ref8$id,_ref8$biography=_ref8.biography,biography=void 0===_ref8$biography?"I love making add-ons!":_ref8$biography,_ref8$username=_ref8.username,username=void 0===_ref8$username?"user-1234":_ref8$username,_ref8$created=_ref8.created,created=void 0===_ref8$created?"2017-08-15T12:01:13Z":_ref8$created,_ref8$average_addon_r=_ref8.average_addon_rating,average_addon_rating=void 0===_ref8$average_addon_r?4.3:_ref8$average_addon_r,_ref8$display_name=_ref8.display_name,display_name=void 0===_ref8$display_name?null:_ref8$display_name,_ref8$fxa_edit_email_=_ref8.fxa_edit_email_url,fxa_edit_email_url=void 0===_ref8$fxa_edit_email_?"https://example.org/settings":_ref8$fxa_edit_email_,_ref8$is_addon_develo=_ref8.is_addon_developer,is_addon_developer=void 0===_ref8$is_addon_develo?!1:_ref8$is_addon_develo,_ref8$is_artist=_ref8.is_artist,is_artist=void 0===_ref8$is_artist?!1:_ref8$is_artist,_ref8$num_addons_list=_ref8.num_addons_listed,num_addons_listed=void 0===_ref8$num_addons_list?1:_ref8$num_addons_list,_ref8$picture_url=_ref8.picture_url,picture_url=void 0===_ref8$picture_url?"".concat(config["a" /* default */].get("amoCDN"),"/static/img/zamboni/anon_user.png"):_ref8$picture_url,_ref8$picture_type=_ref8.picture_type,picture_type=void 0===_ref8$picture_type?"":_ref8$picture_type,_ref8$homepage=_ref8.homepage,homepage=void 0===_ref8$homepage?null:_ref8$homepage,_ref8$permissions=_ref8.permissions,permissions=void 0===_ref8$permissions?[]:_ref8$permissions,_ref8$occupation=_ref8.occupation,occupation=void 0===_ref8$occupation?null:_ref8$occupation,_ref8$location=_ref8.location,location=void 0===_ref8$location?null:_ref8$location,_ref8$site_status=_ref8.site_status,site_status=void 0===_ref8$site_status?{read_only:!1,notice:null}:_ref8$site_status,otherFields=_objectWithoutProperties(_ref8,["id","biography","username","created","average_addon_rating","display_name","fxa_edit_email_url","is_addon_developer","is_artist","num_addons_listed","picture_url","picture_type","homepage","permissions","occupation","location","site_status"]);return helpers_objectSpread({average_addon_rating:average_addon_rating,biography:biography,created:created,display_name:display_name,fxa_edit_email_url:fxa_edit_email_url,homepage:homepage,id:id,is_addon_developer:is_addon_developer,is_artist:is_artist,location:location,// This is the API behavior.
// eslint-disable-next-line camelcase
name:display_name||username,num_addons_listed:num_addons_listed,occupation:occupation,picture_type:picture_type,picture_url:picture_url,url:null,username:username,permissions:permissions,site_status:site_status},otherFields)}function createStubErrorHandler(){var capturedError=0<arguments.length&&arguments[0]!==void 0?arguments[0]:null;return new errorHandler["a" /* ErrorHandler */]({id:"create-stub-error-handler-id",dispatch:sinon.stub(),capturedError:capturedError})}var randomId=function(){// Add 1 to make sure it's never zero.
return Math.floor(1e4*Math.random())+1};function dispatchSignInActions(){var _ref9=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},_ref9$authToken=_ref9.authToken,authToken=void 0===_ref9$authToken?userAuthToken():_ref9$authToken,_ref9$userId=_ref9.userId,userId=void 0===_ref9$userId?12345:_ref9$userId,_ref9$userProps=_ref9.userProps,userProps=void 0===_ref9$userProps?{}:_ref9$userProps,otherArgs=_objectWithoutProperties(_ref9,["authToken","userId","userProps"]),_dispatchClientMetada=dispatchClientMetadata(otherArgs),store=_dispatchClientMetada.store;store.dispatch(setAuthToken(authToken));store.dispatch(Object(users["c" /* loadCurrentUserAccount */])({user:createUserAccountResponse(helpers_objectSpread({id:userId},userProps))}));return{store:store,state:store.getState()}}function dispatchSearchResults(){var _ref11,_ref10=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},_ref10$addons=_ref10.addons,addons=void 0===_ref10$addons?(_ref11={},helpers_defineProperty(_ref11,fakeAddon.slug,fakeAddon),helpers_defineProperty(_ref11,"some-other-slug",helpers_objectSpread({},fakeAddon,{slug:"some-other-slug"})),_ref11):_ref10$addons,_ref10$filters=_ref10.filters,filters=void 0===_ref10$filters?{query:"test"}:_ref10$filters,_ref10$store=_ref10.store,store=void 0===_ref10$store?dispatchClientMetadata().store:_ref10$store;store.dispatch(Object(reducers_search["d" /* searchStart */])({errorHandlerId:createStubErrorHandler().id,filters:filters}));store.dispatch(Object(reducers_search["c" /* searchLoad */])({count:Object.keys(addons).length,results:Object.keys(addons),pageSize:core_api["a" /* DEFAULT_API_PAGE_SIZE */]}));return{store:store}}function createAddonsApiResult(results){return{count:results.length,results:results}}function createFakeAutocompleteResult(){var _ref12=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},_ref12$name=_ref12.name,name=void 0===_ref12$name?"suggestion-result":_ref12$name,props=_objectWithoutProperties(_ref12,["name"]);return helpers_objectSpread({id:randomId(),icon_url:"".concat(config["a" /* default */].get("amoCDN"),"/").concat(name,".png"),is_recommended:!1,name:name,url:"https://example.org/en-US/firefox/addons/".concat(name,"/")},props)}function createFakeAddon(){var _ref13=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},_ref13$files=_ref13.files,files=void 0===_ref13$files?helpers_toConsumableArray(fakeAddon.current_version.files):_ref13$files,_ref13$compatibility=_ref13.compatibility,compatibility=void 0===_ref13$compatibility?helpers_objectSpread({},fakeAddon.current_version.compatibility):_ref13$compatibility,_ref13$is_strict_comp=_ref13.is_strict_compatibility_enabled,is_strict_compatibility_enabled=void 0===_ref13$is_strict_comp?fakeAddon.current_version.is_strict_compatibility_enabled:_ref13$is_strict_comp,overrides=_objectWithoutProperties(_ref13,["files","compatibility","is_strict_compatibility_enabled"]);return helpers_objectSpread({},fakeAddon,{current_version:helpers_objectSpread({},fakeAddon.current_version,{compatibility:compatibility,files:files.map(function(fileProps){return helpers_objectSpread({},fakeAddon.current_version.files[0],{},fileProps)}),is_strict_compatibility_enabled:is_strict_compatibility_enabled})},overrides)}function dispatchAutocompleteResults(){var _ref14=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},_ref14$filters=_ref14.filters,filters=void 0===_ref14$filters?{query:"test"}:_ref14$filters,_ref14$store=_ref14.store,store=void 0===_ref14$store?dispatchClientMetadata().store:_ref14$store,_ref14$results=_ref14.results,results=void 0===_ref14$results?[]:_ref14$results;store.dispatch(autocompleteStart({errorHandlerId:createStubErrorHandler().id,filters:filters}));store.dispatch(autocompleteLoad({results:results}));return{store:store}}var createFakeCollectionDetail=function(){var _ref15=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},_ref15$name=_ref15.name,name=void 0===_ref15$name?"My Addons":_ref15$name,_ref15$count=_ref15.count,count=void 0===_ref15$count?123:_ref15$count,_ref15$authorId=_ref15.authorId,authorId=void 0===_ref15$authorId?99999:_ref15$authorId,_ref15$authorName=_ref15.authorName,authorName=void 0===_ref15$authorName?"John Doe":_ref15$authorName,_ref15$authorUsername=_ref15.authorUsername,authorUsername=void 0===_ref15$authorUsername?"johndoe":_ref15$authorUsername,params=_objectWithoutProperties(_ref15,["name","count","authorId","authorName","authorUsername"]);return helpers_objectSpread({addon_count:count,author:{id:authorId,name:authorName,url:"http://olympia.test/en-US/firefox/user/johndoe/",username:authorUsername},default_locale:"en-US",description:"some description",id:randomId(),modified:Date.now(),name:name,public:!0,slug:"my-addons",url:"https://example.org/en-US/firefox/collections/johndoe/my-addons/",uuid:"ef7e1344-1c3d-4bbb-bbd8-df9d8c9020ec"},params)};function createFakeCollectionAddon(){var _ref16=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},_ref16$addon=_ref16.addon,addon=void 0===_ref16$addon?fakeAddon:_ref16$addon,_ref16$notes=_ref16.notes,notes=void 0===_ref16$notes?null:_ref16$notes;return{addon:addon,notes:notes}}var createFakeCollectionAddons=function(){var _ref17=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},_ref17$addons=_ref17.addons,addons=void 0===_ref17$addons?[createFakeCollectionAddon()]:_ref17$addons;return addons.map(function(_ref18){var addon=_ref18.addon,notes=_ref18.notes;return{addon:addon,downloads:0,notes:notes}})};var createFakeCollectionAddonsListResponse=function(){var _ref19=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},_ref19$addons=_ref19.addons,addons=void 0===_ref19$addons?[createFakeCollectionAddon()]:_ref19$addons,count=_ref19.count,_ref19$pageSize=_ref19.pageSize,pageSize=void 0===_ref19$pageSize?core_api["a" /* DEFAULT_API_PAGE_SIZE */]:_ref19$pageSize;return{count:count||addons.length,page_size:pageSize,results:createFakeCollectionAddons({addons:addons})}};var enabledExtension=Promise.resolve({isActive:!0,isEnabled:!0,type:core_constants["g" /* ADDON_TYPE_EXTENSION */]});function getFakeAddonManagerWrapper(){var _ref20=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},_ref20$getAddon=_ref20.getAddon,getAddon=void 0===_ref20$getAddon?enabledExtension:_ref20$getAddon,_ref20$hasAddonManage=_ref20.hasAddonManager,hasAddonManager=void 0===_ref20$hasAddonManage?!0:_ref20$hasAddonManage,_ref20$permissionProm=_ref20.permissionPromptsEnabled,permissionPromptsEnabled=void 0===_ref20$permissionProm?!0:_ref20$permissionProm,overrides=_objectWithoutProperties(_ref20,["getAddon","hasAddonManager","permissionPromptsEnabled"]);return helpers_objectSpread({addChangeListeners:sinon.stub(),enable:sinon.stub().returns(Promise.resolve()),getAddon:sinon.stub().returns(getAddon),getAddonStatus:addonManager["getAddonStatus"],hasAddonManager:sinon.stub().returns(hasAddonManager),hasPermissionPromptsEnabled:sinon.stub().returns(permissionPromptsEnabled),install:sinon.stub().returns(Promise.resolve()),uninstall:sinon.stub().returns(Promise.resolve())},overrides)}/*
 * A promise resolution callback for expecting rejected promises.
 *
 * For example:
 *
 * return somePromiseThatShouldFail()
 *   .then(unexpectedSuccess, (error) => {
 *     expect(error.message).toMatch(/the error/);
 *   });
 */function unexpectedSuccess(){return Promise.reject(new Error("The promise succeeded unexpectedly"))}function JedSpy(){var data=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},_Jed=new jed_default.a(data);_Jed.gettext=sinon.spy(_Jed.gettext);_Jed.dgettext=sinon.spy(_Jed.gettext);_Jed.ngettext=sinon.spy(_Jed.ngettext);_Jed.dngettext=sinon.spy(_Jed.dngettext);_Jed.dpgettext=sinon.spy(_Jed.dpgettext);_Jed.npgettext=sinon.spy(_Jed.npgettext);_Jed.dnpgettext=sinon.spy(_Jed.dnpgettext);_Jed.sprintf=sinon.spy(_Jed.sprintf);return _Jed}/*
 * Creates a stand-in for a jed instance,
 */function fakeI18n(){var _ref21=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},_ref21$lang=_ref21.lang,lang=void 0===_ref21$lang?config["a" /* default */].get("defaultLang"):_ref21$lang,_ref21$includeJedSpy=_ref21.includeJedSpy,includeJedSpy=void 0===_ref21$includeJedSpy?!0:_ref21$includeJedSpy;return Object(i18n_utils["b" /* makeI18n */])({},lang,includeJedSpy?JedSpy:void 0)}var userAgentsByPlatform={android:{firefox40Mobile:Object(es["a" /* oneLine */])(helpers_templateObject()),firefox40Tablet:Object(es["a" /* oneLine */])(helpers_templateObject2()),firefox68:Object(es["a" /* oneLine */])(_templateObject3())},fenix:{firefox69:Object(es["a" /* oneLine */])(_templateObject4()),firefox70:Object(es["a" /* oneLine */])(_templateObject5())},bsd:{firefox40FreeBSD:Object(es["a" /* oneLine */])(_templateObject6())},firefoxOS:{firefox26:"Mozilla/5.0 (Mobile; rv:26.0) Gecko/26.0 Firefox/26.0"},ios:{firefox1iPad:Object(es["a" /* oneLine */])(_templateObject7()),firefox1iPhone:Object(es["a" /* oneLine */])(_templateObject8()),firefox1iPodTouch:Object(es["a" /* oneLine */])(_templateObject9())},linux:{firefox10:Object(es["a" /* oneLine */])(_templateObject10()),firefox57Ubuntu:Object(es["a" /* oneLine */])(_templateObject11())},mac:{chrome41:Object(es["a" /* oneLine */])(_templateObject12()),firefox33:Object(es["a" /* oneLine */])(_templateObject13()),firefox57:Object(es["a" /* oneLine */])(_templateObject14()),firefox61:Object(es["a" /* oneLine */])(_templateObject15()),firefox69:Object(es["a" /* oneLine */])(_templateObject16())},unix:{firefox51:Object(es["a" /* oneLine */])(_templateObject17())},windows:{firefox40:Object(es["a" /* oneLine */])(_templateObject18())}};var userAgents={androidWebkit:[Object(es["a" /* oneLine */])(_templateObject19()),Object(es["a" /* oneLine */])(_templateObject20())],chromeAndroid:[Object(es["a" /* oneLine */])(_templateObject21()),Object(es["a" /* oneLine */])(_templateObject22()),Object(es["a" /* oneLine */])(_templateObject23())],chrome:[Object(es["a" /* oneLine */])(_templateObject24()),userAgentsByPlatform.mac.chrome41],firefox:[userAgentsByPlatform.linux.firefox10,userAgentsByPlatform.windows.firefox40,userAgentsByPlatform.mac.firefox33,"Mozilla/5.0 (X11; Linux i586; rv:31.0) Gecko/20100101 Firefox/31.0",// Firefox ESR 52
Object(es["a" /* oneLine */])(_templateObject25()),userAgentsByPlatform.mac.firefox57],firefoxOS:[userAgentsByPlatform.firefoxOS.firefox26,"Mozilla/5.0 (Tablet; rv:26.0) Gecko/26.0 Firefox/26.0","Mozilla/5.0 (TV; rv:44.0) Gecko/44.0 Firefox/44.0","Mozilla/5.0 (Mobile; nnnn; rv:26.0) Gecko/26.0 Firefox/26.0"],firefoxAndroid:[userAgentsByPlatform.android.firefox40Mobile,userAgentsByPlatform.android.firefox40Tablet,"Mozilla/5.0 (Android 4.4; Mobile; rv:41.0) Gecko/41.0 Firefox/41.0","Mozilla/5.0 (Android 4.4; Tablet; rv:41.0) Gecko/41.0 Firefox/41.0","Mozilla/5.0 (Android 4.4; Tablet; rv:57.0) Gecko/57.0 Firefox/57.0"],fenix:[userAgentsByPlatform.fenix.firefox69,userAgentsByPlatform.fenix.firefox70],firefoxIOS:[userAgentsByPlatform.ios.firefox1iPodTouch,userAgentsByPlatform.ios.firefox1iPhone,userAgentsByPlatform.ios.firefox1iPad]};function apiResponsePage(){var _ref22=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},count=_ref22.count,next=_ref22.next,previous=_ref22.previous,_ref22$pageSize=_ref22.pageSize,pageSize=void 0===_ref22$pageSize?core_api["a" /* DEFAULT_API_PAGE_SIZE */]:_ref22$pageSize,_ref22$results=_ref22.results,results=void 0===_ref22$results?[]:_ref22$results,customResponseParams=_objectWithoutProperties(_ref22,["count","next","previous","pageSize","results"]);return helpers_objectSpread({count:"undefined"!=typeof count?count:results.length,next:next,page_size:pageSize,previous:previous,results:results},customResponseParams)}/*
 * Repeatedly render a component tree using enzyme.shallow() until
 * finding and rendering TargetComponent.
 *
 * This is useful for testing a component wrapped in one or more
 * HOCs (higher order components).
 *
 * The `componentInstance` parameter is a React component instance.
 * Example: <MyComponent {...props} />
 *
 * The `TargetComponent` parameter is the React class (or function) that
 * you want to retrieve from the component tree.
 */function shallowUntilTarget(componentInstance,TargetComponent){var _ref23=2<arguments.length&&arguments[2]!==void 0?arguments[2]:{},_ref23$maxTries=_ref23.maxTries,maxTries=void 0===_ref23$maxTries?10:_ref23$maxTries,shallowOptions=_ref23.shallowOptions,_ref23$_shallow=_ref23._shallow,_shallow=void 0===_ref23$_shallow?build["shallow"]:_ref23$_shallow;if(!componentInstance){throw new Error("componentInstance parameter is required")}if(!TargetComponent){throw new Error("TargetComponent parameter is required")}var root=_shallow(componentInstance,shallowOptions);if("string"==typeof root.type()){// If type() is a string then it's a DOM Node.
// If it were wrapped, it would be a React component.
throw new Error("Cannot unwrap this component because it is not wrapped")}for(var tries=1;tries<=maxTries;tries++){if(root.is(TargetComponent)){// Now that we found the target component, render it.
return root.shallow(shallowOptions)}// Unwrap the next component in the hierarchy.
root=root.dive()}throw new Error(Object(es["a" /* oneLine */])(_templateObject26(),TargetComponent,componentInstance,maxTries))}function createFakeEvent(){var extraProps=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return helpers_objectSpread({currentTarget:sinon.stub(),preventDefault:sinon.stub(),stopPropagation:sinon.stub()},extraProps)}var createFakeMozWindow=function(){// This is a special Mozilla window that allows you to
// install open search add-ons.
return{external:{AddSearchProvider:sinon.stub()}}};function generateHeaders(){var headerData=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{"Content-Type":"application/json"};return new Headers(headerData)}function createApiResponse(){var _ref24=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},_ref24$textData=_ref24.textData,textData=void 0===_ref24$textData?null:_ref24$textData,_ref24$jsonData=_ref24.jsonData,jsonData=void 0===_ref24$jsonData?{}:_ref24$jsonData,_ref24$ok=_ref24.ok,ok=void 0===_ref24$ok?!0:_ref24$ok,responseProps=_objectWithoutProperties(_ref24,["textData","jsonData","ok"]),body=textData,headers=generateHeaders({"Content-Type":"text/plain"});if(!body&&jsonData){body=JSON.stringify(jsonData);headers=generateHeaders({"Content-Type":"application/json"})}var response=new Response(body,helpers_objectSpread({headers:headers,status:ok?200:400},responseProps));return Promise.resolve(response)}function createFakeLanguageTool(){var otherProps=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return helpers_objectSpread({id:fakeAddon.id,current_version:fakeAddon.current_version,default_locale:"en-US",guid:fakeAddon.guid,locale_disambiguation:"",name:fakeAddon.name,target_locale:"ach",type:core_constants["h" /* ADDON_TYPE_LANG */],url:"https://addons.allizom.org/en-US/firefox/addon/acholi-ug-lp-test"},otherProps)}function createFakeAddonAbuseReport(){var _ref25=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},_ref25$addon=_ref25.addon,addon=void 0===_ref25$addon?fakeAddon:_ref25$addon,message=_ref25.message,_ref25$reporter=_ref25.reporter,reporter=void 0===_ref25$reporter?null:_ref25$reporter;return{addon:{guid:addon.guid,id:addon.id,slug:addon.slug},message:message,reporter:reporter}}function createFakeUserAbuseReport(){var _ref26=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},message=_ref26.message,_ref26$reporter=_ref26.reporter,reporter=void 0===_ref26$reporter?null:_ref26$reporter,_ref26$user=_ref26.user,user=void 0===_ref26$user?createUserAccountResponse():_ref26$user;return{message:message,reporter:reporter,user:{id:user.id,name:user.name,url:user.url,username:user.username}}}// Returns a real-ish config object with custom parameters.
//
// Example:
//
// const fakeConfig = getFakeConfig({ isDevelopment: true });
// if (fakeConfig.get('isDevelopment')) {
//   ...
// }
var getFakeConfig=function(){for(var params=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},_ref27=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},_ref27$allowUnknownKe=_ref27.allowUnknownKeys,allowUnknownKeys=void 0===_ref27$allowUnknownKe?!1:_ref27$allowUnknownKe,_i=0,_Object$keys=Object.keys(params),key;_i<_Object$keys.length;_i++){key=_Object$keys[_i];if(!config["a" /* default */].has(key)&&!allowUnknownKeys){// This will help alert us when a test accidentally relies
// on an invalid config key.
throw new Error("Cannot set a fake value for \"".concat(key,"\"; this key is invalid"))}}return Object.assign(config["a" /* default */].util.cloneDeep(config["a" /* default */]),params)};/*
 * A sinon matcher to check if the URL contains the declared params.
 *
 * Example:
 *
 * mockWindow.expects('fetch').withArgs(urlWithTheseParams({ page: 1 }))
 */var urlWithTheseParams=function(params){return sinon.match(function(urlString){var _url$parse=url_default.a.parse(urlString,!0),query=_url$parse.query;for(var param in params){if(query[param]===void 0||query[param]!==params[param].toString()){return!1}}return!0},"urlWithTheseParams(".concat(JSON.stringify(params),")"))};/*
 * Returns a fake ReactRouter location object.
 *
 * See ReactRouterLocationType in 'core/types/router';
 */var createFakeLocation=function(){var props=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return helpers_objectSpread({action:"PUSH",hash:"",key:"some-key",pathname:"/some/url",query:{},search:""},props)};/*
 * Returns a fake ReactRouter history object.
 *
 * See ReactRouterHistoryType in 'core/types/router';
 */var createFakeHistory=function(){var _ref28=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},_ref28$location=_ref28.location,location=void 0===_ref28$location?createFakeLocation():_ref28$location;return{location:location,goBack:sinon.spy(),listen:sinon.spy(),push:sinon.stub()}};/*
 * Returns a fake ClientCompatibilityType object.
 */var createFakeClientCompatibility=function(){var props=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return helpers_objectSpread({compatible:!0,downloadUrl:constants["a" /* DOWNLOAD_FIREFOX_BASE_URL */],maxVersion:"2",minVersion:"1",reason:"A fake reason"},props)};var createContextWithFakeRouter=function(){var _ref29=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},_ref29$history=_ref29.history,history=void 0===_ref29$history?createFakeHistory():_ref29$history,_ref29$location=_ref29.location,location=void 0===_ref29$location?history.location:_ref29$location,_ref29$match=_ref29.match,match=void 0===_ref29$match?{}:_ref29$match,overrides=_objectWithoutProperties(_ref29,["history","location","match"]);return helpers_objectSpread({context:{router:{history:history,route:{location:location,match:match}}},childContextTypes:{router:prop_types_default.a.object.isRequired}},overrides)};/*
 * Simulate how a component you depend on will invoke a callback.
 *
 * The return value is an executable callback that you can call
 * with the necessary arguments.
 *
 * type SimulateComponentCallbackParams = {|
 *   // This is the root of your parent component (an enzyme wrapper object).
 *   root: Object,
 *   // This is the component class you want to simulate.
 *   Component: React.Element<any>,
 *   // This is the property name for the callback.
 *   propName: string,
 * |};
 */var simulateComponentCallback=function(_ref30){var Component=_ref30.Component,root=_ref30.root,propName=_ref30.propName,component=root.find(Component);expect(component).toHaveProp(propName);var callback=component.prop(propName);expect(helpers_typeof(callback)).toEqual("function");return function(){var result=callback.apply(void 0,arguments);// Since the component might call setState() and that would happen
// outside of a standard React lifestyle hook, we have to re-render.
root.update();return result}};var createUserNotificationsResponse=function(){return[{name:"reply",enabled:!0,mandatory:!1},{name:"new_features",enabled:!0,mandatory:!1},{name:"upgrade_success",enabled:!0,mandatory:!1},{name:"new_review",enabled:!0,mandatory:!1},{name:"upgrade_fail",enabled:!0,mandatory:!0},{name:"reviewer_reviewed",enabled:!0,mandatory:!0},{name:"individual_contact",enabled:!0,mandatory:!0},{name:"announcements",enabled:!1,mandatory:!1}]};/*
 * Call this in a test after any shallowUntilTarget() component might
 * have adjusted its uiState.
 *
 * This simulates how Redux will update component props after
 * an action dispatch.
 * It's necessary because shallow Enzyme wrapper updates do not
 * propagate to all HOCs.
 */function applyUIStateChanges(_ref31){var root=_ref31.root,store=_ref31.store,rootProps=root.instance().props,uiStateID=rootProps.uiStateID;browser_default()(uiStateID,"uiStateID cannot be undefined; was the component wrapped in withUIState()?");var state=store.getState();if(Object(uiState["b" /* selectUIState */])({uiState:state.uiState,uiStateID:uiStateID})===void 0){throw new Error("Cannot apply UI state changes because the component has not dispatched any setUIState() actions yet")}var mapStateToProps=Object(withUIState["a" /* createUIStateMapper */])({// This value is never used. The state is always selected from the
// Redux store.
initialState:{},uiStateID:uiStateID}),stateProps=mapStateToProps(state,rootProps),mappedProps=Object(withUIState["c" /* mergeUIStateProps */])(stateProps,{dispatch:store.dispatch},rootProps);root.setProps(mappedProps)}/*
 * Change a component's uiState.
 */function setUIState(_ref32){var root=_ref32.root,change=_ref32.change,store=_ref32.store;root.instance().props.setUIState(change);applyUIStateChanges({root:root,store:store})}function fakeCookies(){var overrides=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return helpers_objectSpread({addChangeListener:sinon.stub(),get:sinon.stub(),getAll:sinon.stub(),removeChangeListener:sinon.stub(),set:sinon.stub()},overrides)}var createFakeTracking=function(){var overrides=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return helpers_objectSpread({pageView:sinon.stub(),sendEvent:sinon.stub(),setDimension:sinon.stub(),setPage:sinon.stub()},overrides)};// Save a reference to the real setTimeout in case a test uses a mock
// sinon clock.
var globalSetTimeout=setTimeout;/*
 * Wait until the saga dispatches an action causing isMatch(action)
 * to return true, and return that action.
 * Throw an error if the action is not dispatched.
 *
 * This is helpful for when a saga dispatches the same action
 * but with differing payloads.
 *
 * For most cases you can probably just use sagaTester.waitFor() instead.
 */function matchingSagaAction(){return _matchingSagaAction.apply(this,arguments)}function _matchingSagaAction(){_matchingSagaAction=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee(sagaTester,isMatch){var _ref33,_ref33$maxTries,maxTries,calledActions,foundAction,attempt,_args=arguments;return regeneratorRuntime.wrap(function(_context){while(1){switch(_context.prev=_context.next){case 0:_ref33=2<_args.length&&_args[2]!==void 0?_args[2]:{},_ref33$maxTries=_ref33.maxTries,maxTries=void 0===_ref33$maxTries?50:_ref33$maxTries;calledActions=[];attempt=0;case 3:if(!(attempt<maxTries)){_context.next=13;break}calledActions=sagaTester.getCalledActions();foundAction=calledActions.find(isMatch);if(!(foundAction!==void 0)){_context.next=8;break}return _context.abrupt("break",13);case 8:_context.next=10;return new Promise(function(resolve){return globalSetTimeout(resolve,1)});case 10:attempt++;_context.next=3;break;case 13:if(foundAction){_context.next=15;break}throw new Error("\n      The matcher function did not return true:\n\n      ".concat(isMatch,"\n\n      The saga dispatched these action types: ").concat(calledActions.map(function(action){return action.type}).join(", ")||"(none at all)"));case 15:return _context.abrupt("return",foundAction);case 16:case"end":return _context.stop();}}},_callee)}));return _matchingSagaAction.apply(this,arguments)}var getFakeLogger=function(){var params=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return helpers_objectSpread({debug:sinon.stub(),error:sinon.stub(),info:sinon.stub(),warn:sinon.stub()},params)};// This simulates debounce() without any debouncing.
function createFakeDebounce(){return sinon.spy(function(callback){return function(){return callback.apply(void 0,arguments)}})}// This creates a fake instance with the same interface as
// LocalState in core/localState
function createFakeLocalState(){var overrides=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return helpers_objectSpread({clear:sinon.spy(function(){return Promise.resolve()}),load:sinon.spy(function(){return Promise.resolve(null)}),save:sinon.spy(function(){return Promise.resolve()})},overrides)}// Return a string where all blank spaces are consistent across platforms.
function normalizeSpaces(text){// Specifically, this regex replaces `\u202F` -- a narrow,
// non-breaking space -- with ' '. This is because the actual code point
// may vary between platform and Node.JS version. More info:
// https://www.fileformat.info/info/unicode/char/202f/index.htm
return text?text.replace(/\s/g," "):text}

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Icon; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(50);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(53);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(11);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(14);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(15);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(51);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1853);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_15__);
function _typeof(obj){"@babel/helpers - typeof";if("function"==typeof Symbol&&"symbol"==typeof Symbol.iterator){_typeof=function(obj){return typeof obj}}else{_typeof=function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}function _extends(){_extends=Object.assign||function(target){for(var i=1,source;i<arguments.length;i++){source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var target=_objectWithoutPropertiesLoose(source,excluded),key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(0<=excluded.indexOf(key))continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key]}}return target}function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var target={},sourceKeys=Object.keys(source),key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(0<=excluded.indexOf(key))continue;target[key]=source[key]}return target}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0,descriptor;i<props.length;i++){descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1;descriptor.configurable=!0;if("value"in descriptor)descriptor.writable=!0;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call)){return call}return _assertThisInitialized(self)}function _assertThisInitialized(self){if(void 0===self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)};return _getPrototypeOf(o)}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}});if(superClass)_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function(o,p){o.__proto__=p;return o};return _setPrototypeOf(o,p)}var Icon=/*#__PURE__*/function(_React$Component){_inherits(Icon,_React$Component);function Icon(){_classCallCheck(this,Icon);return _possibleConstructorReturn(this,_getPrototypeOf(Icon).apply(this,arguments))}_createClass(Icon,[{key:"render",value:function render(){var _this$props=this.props,alt=_this$props.alt,children=_this$props.children,className=_this$props.className,name=_this$props.name,props=_objectWithoutProperties(_this$props,["alt","children","className","name"]),altSpan;// If alt text was included, we'll render that in a hidden span.
if(alt){altSpan=react__WEBPACK_IMPORTED_MODULE_13__["createElement"]("span",{className:"visually-hidden"},alt)}return react__WEBPACK_IMPORTED_MODULE_13__["createElement"]("span",_extends({className:classnames__WEBPACK_IMPORTED_MODULE_14___default()("Icon","Icon-".concat(name),className)},props),altSpan,children)}}]);return Icon}(react__WEBPACK_IMPORTED_MODULE_13__["Component"]);Icon.displayName="Icon";Icon.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{alt:{required:!1,flowType:{name:"union",raw:"string | React.Node",elements:[{name:"string"},{name:"ReactNode",raw:"React.Node"}]},description:""},children:{required:!1,flowType:{name:"ReactNode",raw:"React.Node"},description:""},className:{required:!1,flowType:{name:"string"},description:""},name:{required:!0,flowType:{name:"string"},description:""}}};if("undefined"!=typeof STORYBOOK_REACT_CLASSES){STORYBOOK_REACT_CLASSES["src/ui/components/Icon/index.js"]={name:"Icon",docgenInfo:Icon.__docgenInfo,path:"src/ui/components/Icon/index.js"}}

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {/* unused harmony export errorType */
/* unused harmony export genericType */
/* unused harmony export genericWarningType */
/* unused harmony export firefoxRequiredType */
/* unused harmony export successType */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return warningInfoType; });
/* unused harmony export warningType */
/* unused harmony export NoticeBase */
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(177);
/* harmony import */ var core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(50);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(53);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(11);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(132);
/* harmony import */ var core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(14);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(15);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(51);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(47);
/* harmony import */ var core_i18n_translate__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(80);
/* harmony import */ var core_withUIState__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(253);
/* harmony import */ var ui_components_Button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(93);
/* harmony import */ var ui_components_IconXMark__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(748);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(1919);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_22__);
function _typeof(obj){"@babel/helpers - typeof";if("function"==typeof Symbol&&"symbol"==typeof Symbol.iterator){_typeof=function(obj){return typeof obj}}else{_typeof=function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}function _extends(){_extends=Object.assign||function(target){for(var i=1,source;i<arguments.length;i++){source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends.apply(this,arguments)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0,descriptor;i<props.length;i++){descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1;descriptor.configurable=!0;if("value"in descriptor)descriptor.writable=!0;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call)){return call}return _assertThisInitialized(self)}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)};return _getPrototypeOf(o)}function _assertThisInitialized(self){if(void 0===self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}});if(superClass)_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function(o,p){o.__proto__=p;return o};return _setPrototypeOf(o,p)}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}return obj}var errorType="error";var genericType="generic";var genericWarningType="genericWarning";var firefoxRequiredType="firefox";var successType="success";var warningInfoType="warningInfo";var warningType="warning";var validTypes=["error","generic","genericWarning","firefox","success","warningInfo","warning"],_ref=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__["createElement"]("div",{className:"Notice-icon"});/*
 * A Photon style notification bar.
 *
 * See https://design.firefox.com/photon/components/message-bars.html
 */var NoticeBase=/*#__PURE__*/function(_React$Component){_inherits(NoticeBase,_React$Component);function NoticeBase(){var _getPrototypeOf2,_this;_classCallCheck(this,NoticeBase);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key]}_this=_possibleConstructorReturn(this,(_getPrototypeOf2=_getPrototypeOf(NoticeBase)).call.apply(_getPrototypeOf2,[this].concat(args)));_defineProperty(_assertThisInitialized(_this),"onDismissNotice",function(event){_this.props.setUIState({wasDismissed:!0});if(_this.props.onDismiss){_this.props.onDismiss(event)}});return _this}_createClass(NoticeBase,[{key:"render",value:function render(){var _this$props=this.props,actionHref=_this$props.actionHref,actionOnClick=_this$props.actionOnClick,actionTarget=_this$props.actionTarget,actionText=_this$props.actionText,actionTo=_this$props.actionTo,againstGrey20=_this$props.againstGrey20,children=_this$props.children,className=_this$props.className,dismissible=_this$props.dismissible,i18n=_this$props.i18n,light=_this$props.light,type=_this$props.type,uiState=_this$props.uiState;invariant__WEBPACK_IMPORTED_MODULE_14___default()(validTypes.includes(type),"Unknown type: ".concat(type));if(dismissible&&uiState.wasDismissed){return null}var buttonProps={href:actionHref||void 0,onClick:actionOnClick||void 0,to:actionTo||void 0},actionButton;if(Object.values(buttonProps).some(function(val){return val!==void 0})){invariant__WEBPACK_IMPORTED_MODULE_14___default()(actionText,"When specifying an action button, actionText is required");actionButton=react__WEBPACK_IMPORTED_MODULE_16__["createElement"](ui_components_Button__WEBPACK_IMPORTED_MODULE_20__[/* default */ "a"],_extends({className:"Notice-button",micro:!0,target:actionTarget},buttonProps),actionText)}var finalClass=classnames__WEBPACK_IMPORTED_MODULE_15___default()("Notice","Notice-".concat(type),className,{"Notice-againstGrey20":againstGrey20,"Notice-dismissible":dismissible,"Notice-light":light});return react__WEBPACK_IMPORTED_MODULE_16__["createElement"]("div",{className:finalClass},_ref,react__WEBPACK_IMPORTED_MODULE_16__["createElement"]("div",{className:"Notice-column"},react__WEBPACK_IMPORTED_MODULE_16__["createElement"]("div",{className:"Notice-content"},react__WEBPACK_IMPORTED_MODULE_16__["createElement"]("p",{className:"Notice-text"},children),actionButton)),dismissible&&react__WEBPACK_IMPORTED_MODULE_16__["createElement"]("div",{className:"Notice-dismisser"},react__WEBPACK_IMPORTED_MODULE_16__["createElement"](ui_components_Button__WEBPACK_IMPORTED_MODULE_20__[/* default */ "a"],{className:"Notice-dismisser-button",onClick:this.onDismissNotice},react__WEBPACK_IMPORTED_MODULE_16__["createElement"](ui_components_IconXMark__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"],{className:"Notice-dismisser-icon",alt:i18n.gettext("Dismiss this notice")}))))}}]);return NoticeBase}(react__WEBPACK_IMPORTED_MODULE_16__["Component"]);NoticeBase.displayName="NoticeBase";var extractId=function(props){if(props.dismissible){invariant__WEBPACK_IMPORTED_MODULE_14___default()(props.id,"When dismissible=true, the id property must be defined")}return props.id||""},initialState={wasDismissed:!1},Notice=Object(redux__WEBPACK_IMPORTED_MODULE_17__[/* compose */ "d"])(Object(core_withUIState__WEBPACK_IMPORTED_MODULE_19__[/* default */ "b"])({fileName:__filename,extractId:extractId,initialState:initialState}),Object(core_i18n_translate__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"])())(NoticeBase);/* harmony default export */ __webpack_exports__["a"] = (Notice);NoticeBase.__docgenInfo={description:"",methods:[{name:"onDismissNotice",docblock:null,modifiers:[],params:[{name:"event",type:{name:"SyntheticEvent",elements:[{name:"any"}],raw:"SyntheticEvent<any>",alias:"SyntheticEvent"}}],returns:null}],displayName:"NoticeBase",props:{actionHref:{required:!1,flowType:{name:"string"},description:""},actionOnClick:{required:!1,flowType:{name:"Function"},description:""},actionTarget:{required:!1,flowType:{name:"string"},description:""},actionText:{required:!1,flowType:{name:"string"},description:""},actionTo:{required:!1,flowType:{name:"union",raw:"string | Object",elements:[{name:"string"},{name:"Object"}]},description:""},againstGrey20:{required:!1,flowType:{name:"boolean"},description:""},children:{required:!1,flowType:{name:"ReactNode",raw:"React.Node"},description:""},className:{required:!1,flowType:{name:"string"},description:""},dismissible:{required:!1,flowType:{name:"boolean"},description:""},id:{required:!1,flowType:{name:"string"},description:""},light:{required:!1,flowType:{name:"boolean"},description:""},onDismiss:{required:!1,flowType:{name:"signature",type:"function",raw:"(SyntheticEvent<any>) => void",signature:{arguments:[{name:"",type:{name:"SyntheticEvent",elements:[{name:"any"}],raw:"SyntheticEvent<any>"}}],return:{name:"void"}}},description:""},type:{required:!0,flowType:{name:"union",raw:"| typeof errorType\n| typeof firefoxRequiredType\n| typeof genericType\n| typeof genericWarningType\n| typeof successType\n| typeof warningInfoType\n| typeof warningType",elements:[{name:"errorType"},{name:"firefoxRequiredType"},{name:"genericType"},{name:"genericWarningType"},{name:"successType"},{name:"warningInfoType"},{name:"warningType"}]},description:""},i18n:{required:!0,flowType:{name:"I18nType"},description:""},setUIState:{required:!0,flowType:{name:"signature",type:"function",raw:"(state: $Shape<UIState>) => void",signature:{arguments:[{name:"state",type:{name:"$Shape",elements:[{name:"signature",type:"object",raw:"{|\n  wasDismissed: boolean,\n|}",signature:{properties:[{key:"wasDismissed",value:{name:"boolean",required:!0}}]}}],raw:"$Shape<UIState>"}}],return:{name:"void"}}},description:""},uiState:{required:!0,flowType:{name:"signature",type:"object",raw:"{|\n  wasDismissed: boolean,\n|}",signature:{properties:[{key:"wasDismissed",value:{name:"boolean",required:!0}}]}},description:""}}};if("undefined"!=typeof STORYBOOK_REACT_CLASSES){STORYBOOK_REACT_CLASSES["src/ui/components/Notice/index.js"]={name:"NoticeBase",docgenInfo:NoticeBase.__docgenInfo,path:"src/ui/components/Notice/index.js"}}
/* WEBPACK VAR INJECTION */}.call(this, "src/ui/components/Notice/index.js"))

/***/ }),

/***/ 1683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var amo_components_App_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1684);
/* harmony import */ var amo_components_App_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(amo_components_App_styles_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_css_inc_lib_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1686);
/* harmony import */ var core_css_inc_lib_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_css_inc_lib_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _setup_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1688);
/* harmony import */ var _setup_styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_setup_styles_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _amo_HeroRecommendation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1690);
/* harmony import */ var _ui_Badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1940);
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1943);
/* harmony import */ var _ui_IconRecommendedBadge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1944);
/* harmony import */ var _ui_Rating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1947);
/* harmony import */ var _ui_RecommendedBadge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1952);
// Add global styles
// Components


/***/ }),

/***/ 1684:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(68);
            var content = __webpack_require__(1685);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 1685:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(69)(false);
// Module
exports.push([module.i, "/* Shared CSS lib code. Bear in mind that changes here impacts *all* apps. */\n.visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n/* AUTOGENERATED Photon Colors SCSS Variables v3.3.2 */\n/* Font mixins. Changes here affect *all* apps */\n/* Shared mixins. Bear in mind changes here impact *all* apps. */\n/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n/* AUTOGENERATED Photon Colors SCSS Variables v3.3.2 */\n/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n/* AUTOGENERATED Photon Colors SCSS Variables v3.3.2 */\nhtml,\nbody {\n  background: #0f1126;\n  height: 100%;\n}\n\nhtml {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\ninput,\ntextarea {\n  font-family: 'Fira Sans', sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  background: #fff;\n  border: 1px solid #737373;\n  border-radius: 2px;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #343a40;\n  font-size: 14px;\n  line-height: 1.4;\n  padding: 4px;\n}\n\n*,\n*::before,\n*::after {\n  -webkit-box-sizing: inherit;\n          box-sizing: inherit;\n  word-wrap: break-word;\n}\n\nbody {\n  font-family: 'Fira Sans', sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  color: #1d1d1d;\n  font-size: 14px;\n  line-height: 19px;\n}\n\n#react-view {\n  height: 100%;\n}\n\nh1,\nh2 {\n  font-family: 'Fira Sans', sans-serif;\n  font-style: normal;\n  font-weight: 600;\n  color: #000;\n  font-weight: 600;\n}\n\nh1 {\n  font-size: 36px;\n  line-height: 1;\n}\n\nh2 {\n  font-size: 12px;\n}\n\nh3 {\n  font-family: 'Fira Sans', sans-serif;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 19px;\n}\n\na:link {\n  font-family: 'Fira Sans', sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  color: #0060df;\n}\n\nem {\n  font-family: 'Fira Sans', sans-serif;\n  font-style: italic;\n  font-weight: 400;\n}\n\nstrong {\n  font-family: 'Fira Sans', sans-serif;\n  font-style: normal;\n  font-weight: 600;\n}\n\n.caption {\n  color: #000;\n  font-size: 10px;\n  line-height: 11px;\n}\n\n.date-time {\n  color: #b1b1b1;\n  font-size: 14px;\n}\n\nbutton {\n  background: none;\n  border: none;\n}\n\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n", ""]);



/***/ }),

/***/ 1686:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(68);
            var content = __webpack_require__(1687);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 1687:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(69)(false);
// Module
exports.push([module.i, "/* Shared CSS lib code. Bear in mind that changes here impacts *all* apps. */\n.visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n", ""]);



/***/ }),

/***/ 1688:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(68);
            var content = __webpack_require__(1689);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 1689:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(69)(false);
// Module
exports.push([module.i, "/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n/* AUTOGENERATED Photon Colors SCSS Variables v3.3.2 */\n/* Font mixins. Changes here affect *all* apps */\n/* Shared mixins. Bear in mind changes here impact *all* apps. */\n/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n/* AUTOGENERATED Photon Colors SCSS Variables v3.3.2 */\n/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n/* AUTOGENERATED Photon Colors SCSS Variables v3.3.2 */\nhtml,\nbody {\n  background: #fff;\n  margin: 0;\n  padding: 24px 12px 12px;\n}\n\n.section-container {\n  border-bottom: 1px solid #e9ecef;\n  display: block;\n  padding: 24px;\n}\n\n.section-container .section-header {\n  margin-bottom: 12px;\n}\n\n.section-container .section-component-container {\n  margin-top: 12px;\n}\n\n.section-container .section-subtitle {\n  color: #bbb;\n}\n\n@media (min-width: 720px) {\n  .section-container .section-subtitle {\n    margin: 0;\n  }\n}\n\n.chapter-h3 {\n  margin-top: 48px;\n}\n", ""]);



/***/ }),

/***/ 1690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(81);
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_storybook_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var tests_unit_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(105);
/* harmony import */ var amo_components_HeroRecommendation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(752);
/* harmony import */ var amo_reducers_home__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(202);
/* harmony import */ var core_errorHandler__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(254);
/* harmony import */ var _setup_Provider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(204);
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1,source;i<arguments.length;i++){source=null!=arguments[i]?arguments[i]:{};if(i%2){ownKeys(Object(source),!0).forEach(function(key){_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}return obj}var render=function(){var shelfProps=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},moreProps=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},props=_objectSpread({errorHandler:new core_errorHandler__WEBPACK_IMPORTED_MODULE_12__[/* ErrorHandler */ "a"]({id:"some-id"}),i18n:Object(tests_unit_helpers__WEBPACK_IMPORTED_MODULE_9__[/* fakeI18n */ "d"])({includeJedSpy:!1}),shelfData:Object(amo_reducers_home__WEBPACK_IMPORTED_MODULE_11__[/* createInternalHeroShelves */ "b"])(Object(tests_unit_helpers__WEBPACK_IMPORTED_MODULE_9__[/* createHeroShelves */ "a"])({primaryProps:_objectSpread({addon:_objectSpread({},tests_unit_helpers__WEBPACK_IMPORTED_MODULE_9__[/* fakeAddon */ "c"],{name:"Forest Preserve Nougat (beta)"}),description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget rutrum mi. Mauris eleifend sapien ut metus varius, nec vulputate nunc rutrum. Maecenas porttitor tincidunt egestas. Nullam sed massa in."},shelfProps)})).primary,siteIsReadOnly:!1,siteNotice:null},moreProps);return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(amo_components_HeroRecommendation__WEBPACK_IMPORTED_MODULE_10__[/* HeroRecommendationBase */ "a"],props)};render.displayName="render";Object(_storybook_react__WEBPACK_IMPORTED_MODULE_8__["storiesOf"])("HeroRecommendation",module).addDecorator(function(story){return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{className:"HeroRecommendation--storybook"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_setup_Provider__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"],{story:story()}))}).addWithChapters("all variants",{chapters:[{sections:[{title:"with image",sectionFn:function sectionFn(){return render()}},{title:"without image",sectionFn:function sectionFn(){return render({featuredImage:null})}},{title:"with error",sectionFn:function sectionFn(){var _dispatchClientMetada=Object(tests_unit_helpers__WEBPACK_IMPORTED_MODULE_9__[/* dispatchClientMetadata */ "b"])(),store=_dispatchClientMetada.store,errorHandler=new core_errorHandler__WEBPACK_IMPORTED_MODULE_12__[/* ErrorHandler */ "a"]({dispatch:store.dispatch,id:"some-id"});errorHandler.handle(new Error("Some error"));return render({},{errorHandler:errorHandler})}},{title:"loading",sectionFn:function sectionFn(){return render({},{shelfData:void 0})}}]}]});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(129)(module)))

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(21);
/* harmony import */ var core_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2);
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1,source;i<arguments.length;i++){source=null!=arguments[i]?arguments[i]:{};if(i%2){ownKeys(Object(source),!0).forEach(function(key){_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}return obj}var pino=null,httpContext=null,nanoSeconds=null;if(false){}else{// Pino is an isomorphic logging library and works well on both the server
// and the client without configuration.
//
// eslint-disable-next-line global-require
pino=__webpack_require__(1843)}if(config__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].get("enableRequestID")){// eslint-disable-next-line global-require
httpContext=__webpack_require__(1845)}if(config__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].get("server")){// eslint-disable-next-line global-require
nanoSeconds=__webpack_require__(1846)}var pinoLogger=pino({level:config__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].get("loggingLevel"),name:config__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].get("appName"),// That is how the upstream library implements this... See:
// https://github.com/pinojs/pino/blob/220e3d019fe22167a59cfe26260f6c2b4d0ea22b/lib/time.js#L5
// Note: `true` is the default value for this parameter.
timestamp:nanoSeconds?function(){return",\"time\":".concat(nanoSeconds())}:!0});/* harmony default export */ __webpack_exports__["a"] = (["debug","error","fatal","info","trace","warn"].reduce(function(decoratedLogger,level){return _objectSpread({},decoratedLogger,_defineProperty({},level,function(){for(var requestId=httpContext&&httpContext.get(core_constants__WEBPACK_IMPORTED_MODULE_10__[/* AMO_REQUEST_ID_HEADER */ "l"]),_len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key]}if(requestId){pinoLogger[level].apply(pinoLogger,[{amo_request_id:requestId}].concat(args))}else{pinoLogger[level].apply(pinoLogger,args)}}))},{}));

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SEARCH_STARTED */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SEARCH_LOADED; });
/* unused harmony export initialState */
/* unused harmony export abortSearch */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return searchStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return searchLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return search; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_reducers_addons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(64);
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1,source;i<arguments.length;i++){source=null!=arguments[i]?arguments[i]:{};if(i%2){ownKeys(Object(source),!0).forEach(function(key){_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}return obj}var SEARCH_STARTED="SEARCH_STARTED";var SEARCH_LOADED="SEARCH_LOADED";var SEARCH_ABORTED="SEARCH_ABORTED";var initialState={count:0,filters:null,loading:!1,pageSize:null,results:[]};var abortSearch=function(){return{type:SEARCH_ABORTED}};function searchStart(_ref){var errorHandlerId=_ref.errorHandlerId,filters=_ref.filters;invariant__WEBPACK_IMPORTED_MODULE_8___default()(errorHandlerId,"errorHandlerId is required");invariant__WEBPACK_IMPORTED_MODULE_8___default()(filters,"filters are required");return{type:SEARCH_STARTED,payload:{errorHandlerId:errorHandlerId,filters:filters}}}function searchLoad(_ref2){var count=_ref2.count,pageSize=_ref2.pageSize,results=_ref2.results;invariant__WEBPACK_IMPORTED_MODULE_8___default()(results,"results are required");return{type:SEARCH_LOADED,payload:{count:count,pageSize:pageSize,results:results}}}function search(){var state=0<arguments.length&&arguments[0]!==void 0?arguments[0]:initialState,action=1<arguments.length?arguments[1]:void 0;switch(action.type){case SEARCH_STARTED:{var payload=action.payload;return _objectSpread({},state,{count:0,filters:payload.filters,loading:!0,results:[]})}case SEARCH_LOADED:{var _payload=action.payload;return _objectSpread({},state,{count:_payload.count,loading:!1,pageSize:_payload.pageSize,results:_payload.results.map(function(addon){return Object(core_reducers_addons__WEBPACK_IMPORTED_MODULE_9__[/* createInternalAddon */ "b"])(addon)})})}case SEARCH_ABORTED:return _objectSpread({},state,{count:0,loading:!1,results:[]});default:return state;}}

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SET_UI_STATE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return selectUIState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setUIState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return uiStateReducer; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_7__);
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1,source;i<arguments.length;i++){source=null!=arguments[i]?arguments[i]:{};if(i%2){ownKeys(Object(source),!0).forEach(function(key){_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}return obj}var SET_UI_STATE="SET_UI_STATE";var initialState={};var selectUIState=function(_ref){var uiState=_ref.uiState,uiStateID=_ref.uiStateID;return uiState[uiStateID]};var setUIState=function(_ref2){var change=_ref2.change,id=_ref2.id;invariant__WEBPACK_IMPORTED_MODULE_7___default()(change,"change cannot be undefined");invariant__WEBPACK_IMPORTED_MODULE_7___default()(id,"id cannot be undefined");return{type:SET_UI_STATE,payload:{change:change,id:id}}};function uiStateReducer(){var state=0<arguments.length&&arguments[0]!==void 0?arguments[0]:initialState,action=1<arguments.length?arguments[1]:void 0;switch(action.type){case SET_UI_STATE:{var _action$payload=action.payload,change=_action$payload.change,_id=_action$payload.id;return _objectSpread({},state,_defineProperty({},_id,_objectSpread({},state[_id],{},change)))}default:return state;}}

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getDjangoBase62; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getAddonURL; });
/* unused harmony export makeQueryStringWithUTM */
/* unused harmony export getCanonicalURL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return checkInternalURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addParamsToHeroURL; });
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(113);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(190);
/* harmony import */ var core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var base62__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(470);
/* harmony import */ var base62__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(base62__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21);
/* harmony import */ var core_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(208);
/* harmony import */ var core_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(35);
/* eslint camelcase: 0 *//*
 * Return a base62 object that encodes/decodes just like how Django does it
 * for cookie timestamps.
 *
 * See:
 * https://github.com/django/django/blob/0b9f366c60134a0ca2873c156b9c80acb7ffd8b5/django/core/signing.py#L180
 */function getDjangoBase62(){// This is the alphabet used by Django.
base62__WEBPACK_IMPORTED_MODULE_5___default.a.setCharacterSet("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz");return base62__WEBPACK_IMPORTED_MODULE_5___default.a}function getAddonURL(slug){return"/addon/".concat(slug,"/")}var makeQueryStringWithUTM=function(_ref){var _ref$utm_source=_ref.utm_source,utm_source=void 0===_ref$utm_source?"addons.mozilla.org":_ref$utm_source,_ref$utm_medium=_ref.utm_medium,utm_medium=void 0===_ref$utm_medium?"referral":_ref$utm_medium,_ref$utm_campaign=_ref.utm_campaign,utm_campaign=void 0===_ref$utm_campaign?"non-fx-button":_ref$utm_campaign,utm_content=_ref.utm_content;return Object(core_api__WEBPACK_IMPORTED_MODULE_7__[/* makeQueryString */ "b"])({utm_source:utm_source,utm_medium:utm_medium,utm_campaign:utm_campaign,utm_content:utm_content})};var getCanonicalURL=function(_ref2){var _ref2$_config=_ref2._config,_config=void 0===_ref2$_config?config__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]:_ref2$_config,locationPathname=_ref2.locationPathname;return"".concat(_config.get("baseURL")).concat(locationPathname)};var checkInternalURL=function(_ref3){var _ref3$_config=_ref3._config,_config=void 0===_ref3$_config?config__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]:_ref3$_config,urlString=_ref3.urlString,baseURL=_config.get("baseURL"),urlParts=url__WEBPACK_IMPORTED_MODULE_4___default.a.parse(urlString,!0),isRelative=// The double slash is for protocol-free URLs.
urlString.startsWith("/")&&!urlString.startsWith("//"),currentHost=url__WEBPACK_IMPORTED_MODULE_4___default.a.parse(baseURL).host||"",isForCurrentHost=currentHost===urlParts.host||urlString.startsWith("//".concat(currentHost)),isInternal=isRelative||isForCurrentHost,relativeURL=urlString.startsWith("//".concat(currentHost))?urlString.replace("//".concat(currentHost),""):urlString.replace(baseURL,"");if(isInternal&&!relativeURL.startsWith("/")){relativeURL="/".concat(relativeURL)}return{isInternal:isInternal,relativeURL:relativeURL}};var addParamsToHeroURL=function(_ref4){var _ref4$_addQueryParams=_ref4._addQueryParams,_addQueryParams=void 0===_ref4$_addQueryParams?core_utils__WEBPACK_IMPORTED_MODULE_8__[/* addQueryParams */ "a"]:_ref4$_addQueryParams,_ref4$_config=_ref4._config,_config=void 0===_ref4$_config?config__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]:_ref4$_config,_ref4$_checkInternalU=_ref4._checkInternalURL,_checkInternalURL=void 0===_ref4$_checkInternalU?checkInternalURL:_ref4$_checkInternalU,heroSrcCode=_ref4.heroSrcCode,_ref4$internalQueryPa=_ref4.internalQueryParams,internalQueryParams=void 0===_ref4$internalQueryPa?{src:heroSrcCode}:_ref4$internalQueryPa,_ref4$externalQueryPa=_ref4.externalQueryParams,externalQueryParams=void 0===_ref4$externalQueryPa?{utm_content:heroSrcCode,utm_medium:"referral",utm_source:url__WEBPACK_IMPORTED_MODULE_4___default.a.parse(_config.get("baseURL")).host}:_ref4$externalQueryPa,urlString=_ref4.urlString;return _addQueryParams(urlString,_checkInternalURL({urlString:urlString}).isInternal?internalQueryParams:externalQueryParams)};

/***/ }),

/***/ 1728:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1742:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1744:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1850:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 1850;

/***/ }),

/***/ 1853:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(68);
            var content = __webpack_require__(1854);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 1854:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(69)(false);
// Imports
var urlEscape = __webpack_require__(718);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(1855));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(1856));
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(1857));
var ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(1858));
var ___CSS_LOADER_URL___4___ = urlEscape(__webpack_require__(1859));
var ___CSS_LOADER_URL___5___ = urlEscape(__webpack_require__(1860));
var ___CSS_LOADER_URL___6___ = urlEscape(__webpack_require__(1861));
var ___CSS_LOADER_URL___7___ = urlEscape(__webpack_require__(1862));
var ___CSS_LOADER_URL___8___ = urlEscape(__webpack_require__(1863));
var ___CSS_LOADER_URL___9___ = urlEscape(__webpack_require__(1864));
var ___CSS_LOADER_URL___10___ = urlEscape(__webpack_require__(1865));
var ___CSS_LOADER_URL___11___ = urlEscape(__webpack_require__(1866));
var ___CSS_LOADER_URL___12___ = urlEscape(__webpack_require__(1867));
var ___CSS_LOADER_URL___13___ = urlEscape(__webpack_require__(1868));
var ___CSS_LOADER_URL___14___ = urlEscape(__webpack_require__(1869));
var ___CSS_LOADER_URL___15___ = urlEscape(__webpack_require__(1870));
var ___CSS_LOADER_URL___16___ = urlEscape(__webpack_require__(1871));
var ___CSS_LOADER_URL___17___ = urlEscape(__webpack_require__(1872));
var ___CSS_LOADER_URL___18___ = urlEscape(__webpack_require__(1873));
var ___CSS_LOADER_URL___19___ = urlEscape(__webpack_require__(1874));
var ___CSS_LOADER_URL___20___ = urlEscape(__webpack_require__(1875));
var ___CSS_LOADER_URL___21___ = urlEscape(__webpack_require__(1876));
var ___CSS_LOADER_URL___22___ = urlEscape(__webpack_require__(1877));
var ___CSS_LOADER_URL___23___ = urlEscape(__webpack_require__(1878));
var ___CSS_LOADER_URL___24___ = urlEscape(__webpack_require__(1879));
var ___CSS_LOADER_URL___25___ = urlEscape(__webpack_require__(1880));
var ___CSS_LOADER_URL___26___ = urlEscape(__webpack_require__(1881));
var ___CSS_LOADER_URL___27___ = urlEscape(__webpack_require__(1882));
var ___CSS_LOADER_URL___28___ = urlEscape(__webpack_require__(1883));
var ___CSS_LOADER_URL___29___ = urlEscape(__webpack_require__(1884));
var ___CSS_LOADER_URL___30___ = urlEscape(__webpack_require__(1885));
var ___CSS_LOADER_URL___31___ = urlEscape(__webpack_require__(1886));
var ___CSS_LOADER_URL___32___ = urlEscape(__webpack_require__(1887));
var ___CSS_LOADER_URL___33___ = urlEscape(__webpack_require__(1888));
var ___CSS_LOADER_URL___34___ = urlEscape(__webpack_require__(1889));
var ___CSS_LOADER_URL___35___ = urlEscape(__webpack_require__(1890));
var ___CSS_LOADER_URL___36___ = urlEscape(__webpack_require__(1891));
var ___CSS_LOADER_URL___37___ = urlEscape(__webpack_require__(1892));
var ___CSS_LOADER_URL___38___ = urlEscape(__webpack_require__(1893));
var ___CSS_LOADER_URL___39___ = urlEscape(__webpack_require__(1894));
var ___CSS_LOADER_URL___40___ = urlEscape(__webpack_require__(1895));
var ___CSS_LOADER_URL___41___ = urlEscape(__webpack_require__(1896));
var ___CSS_LOADER_URL___42___ = urlEscape(__webpack_require__(1897));
var ___CSS_LOADER_URL___43___ = urlEscape(__webpack_require__(1898));
var ___CSS_LOADER_URL___44___ = urlEscape(__webpack_require__(1899));
var ___CSS_LOADER_URL___45___ = urlEscape(__webpack_require__(1900));
var ___CSS_LOADER_URL___46___ = urlEscape(__webpack_require__(1901));
var ___CSS_LOADER_URL___47___ = urlEscape(__webpack_require__(1902));
var ___CSS_LOADER_URL___48___ = urlEscape(__webpack_require__(1903));
var ___CSS_LOADER_URL___49___ = urlEscape(__webpack_require__(1904));
var ___CSS_LOADER_URL___50___ = urlEscape(__webpack_require__(1905));
var ___CSS_LOADER_URL___51___ = urlEscape(__webpack_require__(1906));
var ___CSS_LOADER_URL___52___ = urlEscape(__webpack_require__(1907));
var ___CSS_LOADER_URL___53___ = urlEscape(__webpack_require__(1908));
var ___CSS_LOADER_URL___54___ = urlEscape(__webpack_require__(1909));
var ___CSS_LOADER_URL___55___ = urlEscape(__webpack_require__(1910));
var ___CSS_LOADER_URL___56___ = urlEscape(__webpack_require__(1911));
var ___CSS_LOADER_URL___57___ = urlEscape(__webpack_require__(1912));
var ___CSS_LOADER_URL___58___ = urlEscape(__webpack_require__(1913));
var ___CSS_LOADER_URL___59___ = urlEscape(__webpack_require__(1914));

// Module
exports.push([module.i, "/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n/* AUTOGENERATED Photon Colors SCSS Variables v3.3.2 */\n/* Font mixins. Changes here affect *all* apps */\n/* Shared mixins. Bear in mind changes here impact *all* apps. */\n/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n/* AUTOGENERATED Photon Colors SCSS Variables v3.3.2 */\n.Icon {\n  content: '';\n  display: inline-block;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  height: 16px;\n  width: 16px;\n}\n\n.Icon-arrow {\n  background: url(" + ___CSS_LOADER_URL___0___ + ") center no-repeat;\n  background-size: contain;\n}\n\n[dir='rtl'] .Icon-arrow {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.Icon-arrow-blue {\n  background: url(" + ___CSS_LOADER_URL___1___ + ") center no-repeat;\n  background-size: contain;\n}\n\n[dir='rtl'] .Icon-arrow-blue {\n  right: auto;\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.Icon-magnifying-glass {\n  background: url(" + ___CSS_LOADER_URL___2___ + ") center no-repeat;\n  background-size: contain;\n}\n\n.Icon-eye {\n  background: url(" + ___CSS_LOADER_URL___3___ + ") center no-repeat;\n  background-size: contain;\n  background-size: cover;\n}\n\n.Icon-eye,\n.Button .Icon-eye {\n  width: 23px;\n}\n\n.Icon-mozilla {\n  background: url(" + ___CSS_LOADER_URL___4___ + ") center no-repeat;\n  background-size: contain;\n  height: 32px;\n  width: 112px;\n}\n\n.Icon-triangle-down {\n  background: url(" + ___CSS_LOADER_URL___5___ + ") center no-repeat;\n  background-size: contain;\n}\n\n.Icon-triangle-down-black {\n  background: url(" + ___CSS_LOADER_URL___6___ + ") center no-repeat;\n  background-size: contain;\n}\n\n.Icon-external {\n  background: url(" + ___CSS_LOADER_URL___7___ + ") center no-repeat;\n  background-size: contain;\n  height: 10px;\n  width: 10px;\n}\n\n[dir='ltr'] .Icon-external {\n  margin-left: 5px;\n}\n\n[dir='rtl'] .Icon-external {\n  margin-right: 5px;\n}\n\n.Icon-external-dark,\n.Button--neutral:link.Button--puffy .Icon.Icon-external-dark {\n  background: url(" + ___CSS_LOADER_URL___8___ + ") center no-repeat;\n  background-size: contain;\n  height: 10px;\n  width: 10px;\n}\n\n.Icon-anonymous-user {\n  background: url(" + ___CSS_LOADER_URL___9___ + ") center no-repeat;\n  background-size: contain;\n}\n\n.Icon-user {\n  background: url(" + ___CSS_LOADER_URL___10___ + ") center no-repeat;\n  background-size: contain;\n}\n\n.Icon-twitter {\n  background: url(" + ___CSS_LOADER_URL___11___ + ") center no-repeat;\n  background-size: contain;\n}\n\n.Icon-facebook {\n  background: url(" + ___CSS_LOADER_URL___12___ + ") center no-repeat;\n  background-size: contain;\n}\n\n.Icon-youtube {\n  background: url(" + ___CSS_LOADER_URL___13___ + ") center no-repeat;\n  background-size: contain;\n}\n\n.Icon-star {\n  background: url(" + ___CSS_LOADER_URL___14___ + ") center no-repeat;\n  background-size: contain;\n}\n\n.Icon-star-yellow {\n  background: url(" + ___CSS_LOADER_URL___15___ + ") center no-repeat;\n  background-size: contain;\n}\n\n.Icon-star-empty {\n  background: url(" + ___CSS_LOADER_URL___16___ + ") center no-repeat;\n  background-size: contain;\n}\n\n.Icon-star-full {\n  background: url(" + ___CSS_LOADER_URL___17___ + ") center no-repeat;\n  background-size: contain;\n}\n\n.Icon-star-half {\n  background: url(" + ___CSS_LOADER_URL___18___ + ") center no-repeat;\n  background-size: contain;\n}\n\n.Icon-user-dark {\n  background: url(" + ___CSS_LOADER_URL___19___ + ") center no-repeat;\n  background-size: contain;\n}\n\n.Icon-user-fill {\n  background: url(" + ___CSS_LOADER_URL___20___ + ") center no-repeat;\n  background-size: contain;\n}\n\n.Icon-browse {\n  background: url(" + ___CSS_LOADER_URL___21___ + ") center no-repeat;\n  background-size: contain;\n  background-size: cover;\n  height: 20px;\n  width: 20px;\n}\n\n.Icon-themes {\n  background: url(" + ___CSS_LOADER_URL___22___ + ") center no-repeat;\n  background-size: contain;\n  background-size: cover;\n  height: 45px;\n  min-width: 37.3px;\n  width: 37.3px;\n}\n\n.Icon-extensions {\n  background: url(" + ___CSS_LOADER_URL___23___ + ") center no-repeat;\n  background-size: contain;\n  background-size: cover;\n  height: 44.7px;\n  min-width: 46.3px;\n  width: 46.3px;\n}\n\n.Icon-restart {\n  background: url(" + ___CSS_LOADER_URL___24___ + ") center no-repeat;\n  background-size: contain;\n}\n\n.Icon-inverted-caret {\n  background: url(" + ___CSS_LOADER_URL___25___ + ") center no-repeat;\n  background-size: contain;\n}\n\n.Icon-experimental-badge {\n  background: url(" + ___CSS_LOADER_URL___26___ + ") center no-repeat;\n  background-size: contain;\n}\n\n.Icon-plus {\n  background: url(" + ___CSS_LOADER_URL___27___ + ") center no-repeat;\n  background-size: contain;\n}\n\n.Icon-reply-arrow {\n  background: url(" + ___CSS_LOADER_URL___28___ + ") center no-repeat;\n  background-size: contain;\n  height: 11.68px;\n  width: 14px;\n}\n\n[dir='rtl'] .Icon-reply-arrow {\n  -webkit-transform: scaleX(-1);\n          transform: scaleX(-1);\n}\n\n.Icon-heart {\n  background: url(" + ___CSS_LOADER_URL___29___ + ") center no-repeat;\n  background-size: contain;\n}\n\n.Icon-not-compatible {\n  background: url(" + ___CSS_LOADER_URL___30___ + ") center no-repeat;\n  background-size: contain;\n}\n\n.Icon-inline-content {\n  background: none;\n}\n\n.Icon-requires-payment {\n  background: url(" + ___CSS_LOADER_URL___31___ + ") center no-repeat;\n  background-size: contain;\n}\n\n.Icon-comments {\n  background: url(" + ___CSS_LOADER_URL___32___ + ") center no-repeat;\n  background-size: contain;\n}\n\n.Icon-comments-blue {\n  background: url(" + ___CSS_LOADER_URL___33___ + ") center no-repeat;\n  background-size: contain;\n}\n\n.Icon-permission-bookmarks {\n  background: url(" + ___CSS_LOADER_URL___34___ + ") center no-repeat;\n  background-size: contain;\n}\n\n.Icon-permission-browserSettings,\n.Icon-permission-proxy {\n  background: url(" + ___CSS_LOADER_URL___35___ + ") center no-repeat;\n  background-size: contain;\n}\n\n.Icon-permission-browsingData {\n  background: url(" + ___CSS_LOADER_URL___36___ + ") center no-repeat;\n  background-size: contain;\n}\n\n.Icon-permission-clipboardRead,\n.Icon-permission-clipboardWrite {\n  background: url(" + ___CSS_LOADER_URL___37___ + ") center no-repeat;\n  background-size: contain;\n}\n\n.Icon-permission-devtools {\n  background: url(" + ___CSS_LOADER_URL___38___ + ") center no-repeat;\n  background-size: contain;\n}\n\n.Icon-permission-downloads,\n.Icon-permission-downloads-open {\n  background: url(" + ___CSS_LOADER_URL___39___ + ") center no-repeat;\n  background-size: contain;\n}\n\n.Icon-permission-find {\n  background: url(" + ___CSS_LOADER_URL___40___ + ") center no-repeat;\n  background-size: contain;\n}\n\n.Icon-permission-geolocation {\n  background: url(" + ___CSS_LOADER_URL___41___ + ") center no-repeat;\n  background-size: contain;\n}\n\n.Icon-permission-history {\n  background: url(" + ___CSS_LOADER_URL___42___ + ") center no-repeat;\n  background-size: contain;\n}\n\n.Icon-permission-management {\n  background: url(" + ___CSS_LOADER_URL___43___ + ") center no-repeat;\n  background-size: contain;\n}\n\n.Icon-permission-nativeMessaging {\n  background: url(" + ___CSS_LOADER_URL___44___ + ") center no-repeat;\n  background-size: contain;\n}\n\n.Icon-permission-notifications {\n  background: url(" + ___CSS_LOADER_URL___45___ + ") center no-repeat;\n  background-size: contain;\n}\n\n.Icon-permission-pkcs11 {\n  background: url(" + ___CSS_LOADER_URL___46___ + ") center no-repeat;\n  background-size: contain;\n}\n\n.Icon-permission-privacy,\n.Icon-permission-hostPermission {\n  background: url(" + ___CSS_LOADER_URL___47___ + ") center no-repeat;\n  background-size: contain;\n}\n\n.Icon-permission-sessions,\n.Icon-permission-tabs,\n.Icon-permission-tabHide {\n  background: url(" + ___CSS_LOADER_URL___48___ + ") center no-repeat;\n  background-size: contain;\n}\n\n.Icon-permission-topSites {\n  background: url(" + ___CSS_LOADER_URL___49___ + ") center no-repeat;\n  background-size: contain;\n}\n\n.Icon-permission-unlimitedStorage {\n  background: url(" + ___CSS_LOADER_URL___50___ + ") center no-repeat;\n  background-size: contain;\n}\n\n.Icon-permission-webNavigation {\n  background: url(" + ___CSS_LOADER_URL___51___ + ") center no-repeat;\n  background-size: contain;\n}\n\n.Icon-developer {\n  background: url(" + ___CSS_LOADER_URL___52___ + ") center no-repeat;\n  background-size: contain;\n}\n\n.Icon-artist {\n  background: url(" + ___CSS_LOADER_URL___53___ + ") center no-repeat;\n  background-size: contain;\n}\n\n.Icon-delete {\n  background: url(" + ___CSS_LOADER_URL___54___ + ") center no-repeat;\n  background-size: contain;\n}\n\n.Icon-plus-dark {\n  background: url(" + ___CSS_LOADER_URL___55___ + ") center no-repeat;\n  background-size: contain;\n}\n\n.Icon-stop-hand {\n  background: url(" + ___CSS_LOADER_URL___56___ + ") center no-repeat;\n  background-size: contain;\n}\n\n.Icon-browser {\n  background: url(" + ___CSS_LOADER_URL___57___ + ") center no-repeat;\n  background-size: contain;\n}\n\n.Icon-video {\n  background: url(" + ___CSS_LOADER_URL___58___ + ") center no-repeat;\n  background-size: contain;\n}\n\n.Icon-trophy {\n  background: url(" + ___CSS_LOADER_URL___59___ + ") center no-repeat;\n  background-size: contain;\n  height: 12px;\n  width: 12px;\n}\n", ""]);



/***/ }),

/***/ 1855:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg width='19px' height='18px' viewBox='0 0 19 18' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 46.2 (44496) - http://www.bohemiancoding.com/sketch --%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='Specs' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' stroke-linecap='round' stroke-linejoin='round'%3E %3Cg id='Header-Revised' transform='translate(-1454.000000, -677.000000)' stroke='%23E1E1E5'%3E %3Cg id='Group-Copy-11' transform='translate(1100.000000, 670.000000)'%3E %3Cg id='Icon/Arrow/Big/Grey' transform='translate(355.000000, 8.000000)'%3E %3Cg id='Group-83'%3E %3Cpath d='M0,8 L15.6923077,8' id='Shape' stroke-width='2'%3E%3C/path%3E %3Cpolyline id='Shape' stroke-width='2' points='8.71794872 0 16.5641026 8 8.71794872 16'%3E%3C/polyline%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/svg%3E"

/***/ }),

/***/ 1856:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='19px' height='18px' viewBox='0 0 19 18' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 46.2 (44496) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3EIcon/Arrow/Big/Blue%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='Specs' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' stroke-linecap='round' stroke-linejoin='round'%3E %3Cg id='Header-Copy' transform='translate(-1454.000000, -1387.000000)' stroke='%230A84FF' stroke-width='2'%3E %3Cg id='Group-3' transform='translate(1100.000000, 1265.000000)'%3E %3Cg id='Icon/Arrow/Big/Blue' transform='translate(355.000000, 123.000000)'%3E %3Cpath d='M0,8 L15.6923077,8' id='Shape'%3E%3C/path%3E %3Cpolyline id='Shape' points='8.71794872 0 16.5641026 8 8.71794872 16'%3E%3C/polyline%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/svg%3E"

/***/ }),

/***/ 1857:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg width='16px' height='16px' viewBox='0 0 16 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 46.2 (44496) - http://www.bohemiancoding.com/sketch --%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='Specs' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='Header-Revised' transform='translate(-1112.000000, -678.000000)' fill-rule='nonzero' fill='%23000000'%3E %3Cg id='Group-Copy-11' transform='translate(1100.000000, 670.000000)'%3E %3Cg id='Icon/Search/Black' transform='translate(12.000000, 8.000000)'%3E %3Cpath d='M10.9234032,9.50890701 C12.737938,6.95888863 12.2955018,3.44377439 9.90564952,1.42294873 C7.51579721,-0.597876924 3.97603357,-0.45005508 1.76298925,1.76298925 C-0.45005508,3.97603357 -0.597876924,7.51579721 1.42294873,9.90564952 C3.44377439,12.2955018 6.95888863,12.737938 9.50890701,10.9234032 L14.3442769,15.758773 C14.7423023,16.0996333 15.3356221,16.0767159 15.706169,15.706169 C16.0767159,15.3356221 16.0996333,14.7423023 15.758773,14.3442769 L10.9234032,9.50890701 Z M6.01781012,10.0405971 C3.8016267,10.0405971 2.00505507,8.24402543 2.00505507,6.02784201 C2.00505507,3.81165859 3.8016267,2.01508696 6.01781012,2.01508696 C8.23399354,2.01508696 10.0305652,3.81165859 10.0305652,6.02784201 C10.0305652,7.09209082 9.60779398,8.11275077 8.85525643,8.86528832 C8.10271888,9.61782587 7.08205893,10.0405971 6.01781012,10.0405971 Z' id='Shape-Copy'%3E%3C/path%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/svg%3E"

/***/ }),

/***/ 1858:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='54px' height='37px' viewBox='0 0 54 37' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 41.2 (35397) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3EGroup 36%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' stroke-linecap='round' stroke-linejoin='round'%3E %3Cg id='Group-40' transform='translate(-23.000000, -23.000000)' stroke='%23FFFFFF' stroke-width='6'%3E %3Cg id='Group-36' transform='translate(26.000000, 26.000000)'%3E %3Cpath d='M0,15.4285714 C0,15.4285714 10.8,0 24,0 C37.1142857,0 48,15.4285714 48,15.4285714 C48,15.4285714 37.0285714,30.8571429 24,30.8571429 C10.8857143,30.8571429 0,15.4285714 0,15.4285714 Z' id='Shape'%3E%3C/path%3E %3Cellipse id='Oval' cx='24' cy='15.4285714' rx='8.57142857' ry='8.57142857'%3E%3C/ellipse%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/svg%3E"

/***/ }),

/***/ 1859:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg width='168px' height='48px' viewBox='0 0 168 48' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 44.1 (41455) - http://www.bohemiancoding.com/sketch --%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='Symbols' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='Block/Footer' transform='translate(-1150.000000, -228.000000)' fill='%23FFFFFF'%3E %3Cg id='Icon/Mozilla-Logo' transform='translate(1150.000000, 228.000000)'%3E %3Cg id='moz-logo-one-color-white-rgb'%3E %3Cg id='Layer_1' fill-rule='nonzero'%3E %3Cg id='Group'%3E %3Cpath d='M62.5864078,21.2504854 C59.5106796,21.2504854 57.6,23.5339806 57.6,27.4951456 C57.6,31.1300971 59.2776699,33.9262136 62.5398058,33.9262136 C65.6621359,33.9262136 67.7126214,31.4097087 67.7126214,27.4019417 C67.7126214,23.161165 65.4291262,21.2504854 62.5864078,21.2504854 Z' id='Shape'%3E%3C/path%3E %3Cpath d='M144.885437,31.8291262 C144.885437,33.1805825 145.537864,34.2524272 147.35534,34.2524272 C149.499029,34.2524272 151.782524,32.7145631 151.92233,29.2194175 C150.943689,29.0796117 149.871845,28.9398058 148.893204,28.9398058 C146.749515,28.9398058 144.885437,29.5456311 144.885437,31.8291262 Z' id='Shape'%3E%3C/path%3E %3Cpath d='M0.0466019417,0 L0.0466019417,48 L167.813592,48 L167.813592,0 L0.0466019417,0 Z M48.9786408,38.2135922 L40.1242718,38.2135922 L40.1242718,26.2368932 C40.1242718,22.6019417 38.7728155,21.2038835 36.3961165,21.2038835 C33.5067961,21.2038835 32.2019417,23.2543689 32.2019417,26.1902913 L32.2019417,33.5533981 L34.9980583,33.5533981 L34.9980583,38.2135922 L26.6097087,38.2135922 L26.6097087,26.2368932 C26.6097087,22.6019417 25.2582524,21.2038835 22.8815534,21.2038835 C19.992233,21.2038835 18.6873786,23.2543689 18.6873786,26.1902913 L18.6873786,33.5533981 L22.8815534,33.5533981 L22.8815534,38.2135922 L9.83300971,38.2135922 L9.83300971,33.5533981 L12.6291262,33.5533981 L12.6291262,21.4368932 L9.83300971,21.4368932 L9.83300971,17.2427184 L18.6873786,17.2427184 L18.6873786,20.2252427 C20.0854369,17.9883495 22.1825243,16.6368932 25.1184466,16.6368932 C28.1475728,16.6368932 30.9436893,18.0815534 31.968932,21.1572816 C33.1339806,18.361165 35.6038835,16.6368932 38.9126214,16.6368932 C42.6873786,16.6368932 46.2291262,18.9203883 46.2291262,23.9067961 L46.2291262,33.5533981 L49.0252427,33.5533981 L49.0252427,38.2135922 L48.9786408,38.2135922 Z M62.3533981,38.4932039 C55.8757282,38.4932039 51.4019417,34.5320388 51.4019417,27.8213592 C51.4019417,21.6699029 55.1300971,16.5902913 62.6796117,16.5902913 C70.2291262,16.5902913 73.9106796,21.6699029 73.9106796,27.5417476 C73.9106796,34.2524272 69.0640777,38.4932039 62.3533981,38.4932039 Z M96.1864078,38.2135922 L77.8718447,38.2135922 L77.2660194,34.8582524 L88.823301,21.4368932 L82.2524272,21.4368932 L81.3203883,24.792233 L76.9864078,24.4660194 L77.7320388,17.2427184 L96.1398058,17.2427184 L96.6058252,20.3650485 L84.9553398,33.5533981 L91.7592233,33.5533981 L92.7378641,30.2446602 L97.4912621,30.7572816 L96.1864078,38.2135922 Z M108.163107,38.2135922 L102.104854,38.2135922 L102.104854,30.2912621 L108.163107,30.2912621 L108.163107,38.2135922 Z M108.163107,24.6990291 L102.104854,24.6990291 L102.104854,17.2427184 L108.163107,17.2427184 L108.163107,24.6990291 Z M112.124272,38.2135922 L121.165049,6.05825243 L127.083495,6.05825243 L117.996117,38.2135922 L112.124272,38.2135922 Z M124.287379,38.2135922 L133.374757,6.05825243 L139.293204,6.05825243 L130.205825,38.2135922 L124.287379,38.2135922 Z M156.535922,38.4932039 C153.739806,38.4932039 152.201942,36.8621359 151.92233,34.2990291 C150.71068,36.4427184 148.56699,38.4932039 145.165049,38.4932039 C142.135922,38.4932039 138.687379,36.8621359 138.687379,32.4815534 C138.687379,27.3087379 143.673786,26.0970874 148.473786,26.0970874 C149.638835,26.0970874 150.990291,26.1436893 151.92233,26.2834951 L151.92233,25.631068 C151.92233,23.4873786 151.875728,20.9242718 148.473786,20.9242718 C147.215534,20.9242718 146.236893,21.0174757 145.258252,21.5300971 L144.559223,23.9067961 L139.805825,23.3941748 L140.64466,18.5475728 C144.326214,17.0563107 146.236893,16.6368932 149.685437,16.6368932 C154.205825,16.6368932 158.073786,18.9669903 158.073786,23.7669903 L158.073786,32.9009709 C158.073786,34.1126214 158.493204,34.5320388 159.471845,34.5320388 C159.751456,34.5320388 159.984466,34.4854369 160.31068,34.392233 L160.357282,37.561165 C159.192233,38.1203883 157.840777,38.4932039 156.535922,38.4932039 Z' id='Shape'%3E%3C/path%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/svg%3E"

/***/ }),

/***/ 1860:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg width='12px' height='8px' viewBox='0 0 12 8' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 44.1 (41455) - http://www.bohemiancoding.com/sketch --%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='Symbols' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' stroke-linecap='round' stroke-linejoin='round'%3E %3Cg id='Block/Footer' transform='translate(-350.000000, -99.000000)' stroke-width='3' stroke='%23DEE2E6'%3E %3Cg id='Group-16' transform='translate(48.000000, 79.000000)'%3E %3Cg id='Icon/Arrow/Down/Light-Grey' transform='translate(304.000000, 22.000000)'%3E %3Cpolyline id='Shape' points='8 0 4 4 0 0'%3E%3C/polyline%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/svg%3E"

/***/ }),

/***/ 1861:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg width='11px' height='7px' viewBox='0 0 11 7' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 46.2 (44496) - http://www.bohemiancoding.com/sketch --%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='Screens' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='Search-Results---1366px' transform='translate(-425.000000, -488.000000)' fill='%234A4A4F'%3E %3Cpolygon id='Icon' points='434.574 488 430.5 492.147 426.428 488 425 489.399 430.5 494.999 436 489.399'%3E%3C/polygon%3E %3C/g%3E %3C/g%3E %3C/svg%3E"

/***/ }),

/***/ 1862:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg width='10px' height='10px' viewBox='0 0 10 10' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 46.2 (44496) - http://www.bohemiancoding.com/sketch --%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='Specs' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='Header-Copy' transform='translate(-1304.000000, -123.000000)' fill-rule='nonzero' fill='%2300FEFF'%3E %3Cg id='Group-15-Copy' transform='translate(1165.000000, 117.000000)'%3E %3Cg id='Group-11' transform='translate(139.000000, 6.000000)'%3E %3Cpath d='M9.93333333,0.516666667 C9.805497,0.205478744 9.5030849,0.00167928764 9.16666667,0 L5,0 C4.53976271,6.43371791e-17 4.16666667,0.373096042 4.16666667,0.833333333 C4.16666667,1.29357062 4.53976271,1.66666667 5,1.66666667 L7.15833333,1.66666667 L3.99166667,4.825 C3.78028452,5.03638214 3.69773039,5.34447832 3.77510163,5.6332317 C3.85247286,5.92198508 4.07801492,6.14752714 4.3667683,6.22489837 C4.65552168,6.30226961 4.96361786,6.21971548 5.175,6.00833333 L8.33333333,2.84166667 L8.33333333,5 C8.33333333,5.46023729 8.70642938,5.83333333 9.16666667,5.83333333 C9.62690396,5.83333333 10,5.46023729 10,5 L10,0.833333333 C9.99868334,0.724435619 9.97603415,0.616851927 9.93333333,0.516666667 Z' id='Shape'%3E%3C/path%3E %3Cpath d='M6.66666667,10 L2.5,10 C1.11928813,10 1.69088438e-16,8.88071187 0,7.5 L0,3.33333333 C-5.63628126e-17,2.87309604 0.373096042,2.5 0.833333333,2.5 C1.29357062,2.5 1.66666667,2.87309604 1.66666667,3.33333333 L1.66666667,7.5 C1.66666667,7.96023729 2.03976271,8.33333333 2.5,8.33333333 L6.66666667,8.33333333 C7.12690396,8.33333333 7.5,8.70642938 7.5,9.16666667 C7.5,9.62690396 7.12690396,10 6.66666667,10 Z' id='Shape'%3E%3C/path%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/svg%3E"

/***/ }),

/***/ 1863:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg width='10px' height='9px' viewBox='0 0 10 9' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 48.2 (47327) - http://www.bohemiancoding.com/sketch --%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='Symbols' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='Group-62' transform='translate(-299.000000, -20.000000)' fill='%230F1126' fill-rule='nonzero'%3E %3Cg id='Group-63' transform='translate(299.000000, 20.000000)'%3E %3Cpath d='M2.66571426,0 L1.9992857,0 C0.895110696,0 0,0.863450839 0,1.92857143 L0,7.07142857 C0,8.13654913 0.895110696,9 1.9992857,9 L7.33071423,9 C8.43488919,9 9.32999992,8.13654913 9.32999992,7.07142857 L9.32999992,6.42857143 C9.32999992,6.07353126 9.03162966,5.78571429 8.66357136,5.78571429 C8.29551306,5.78571429 7.99714279,6.07353126 7.99714279,6.42857143 L7.99714279,7.07142857 C7.99714279,7.42646874 7.69877253,7.71428571 7.33071423,7.71428571 L1.9992857,7.71428571 C1.63122736,7.71428571 1.33285713,7.42646874 1.33285713,7.07142857 L1.33285713,1.92857143 C1.33285713,1.57353123 1.63122736,1.28571429 1.9992857,1.28571429 L2.66571426,1.28571429 C3.0337726,1.28571429 3.33214283,0.997897339 3.33214283,0.642857143 C3.33214283,0.287816946 3.0337726,0 2.66571426,0 Z' id='Shape'%3E%3C/path%3E %3Cpath d='M9.28689066,0.397285714 C9.1839637,0.157084174 8.94121969,0.000302175 8.67177709,0 L5.33963426,0 C4.97157592,0 4.67320569,0.287816946 4.67320569,0.642857143 C4.67320569,0.997897339 4.97157592,1.28571429 5.33963426,1.28571429 L7.06301853,1.28571429 L4.86846926,3.40264286 C4.69522677,3.56404787 4.62574759,3.80306436 4.68673609,4.02782613 C4.74772459,4.25258792 4.92968955,4.42811682 5.16269259,4.48694817 C5.39569563,4.54577953 5.64347605,4.4787578 5.81079925,4.31164286 L8.00534853,2.19471429 L8.00534853,3.85714286 C8.00534853,4.21218305 8.30371873,4.5 8.67177709,4.5 C9.03983539,4.5 9.33820566,4.21218305 9.33820566,3.85714286 L9.33820566,0.642857143 C9.33796008,0.558546004 9.32052411,0.47510487 9.28689066,0.397285714 Z' id='Shape'%3E%3C/path%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/svg%3E"

/***/ }),

/***/ 1864:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg width='64px' height='64px' viewBox='0 0 64 64' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 48.2 (47327) - http://www.bohemiancoding.com/sketch --%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E %3Crect id='path-1' x='0' y='0' width='64' height='64' rx='4'%3E%3C/rect%3E %3C/defs%3E %3Cg id='Screens' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='User-Profile---View---1366px' transform='translate(-60.000000, -171.000000)'%3E %3Cg id='Group' transform='translate(24.000000, 135.000000)'%3E %3Cg id='Group-69-Copy' transform='translate(36.000000, 36.000000)'%3E %3Cg id='Rectangle-Copy-5'%3E %3Cuse fill='%23F9F9FA' fill-rule='evenodd' xlink:href='%23path-1'%3E%3C/use%3E %3Crect stroke='%23EBEBEB' stroke-width='1' x='0.5' y='0.5' width='63' height='63' rx='4'%3E%3C/rect%3E %3C/g%3E %3Cg id='Icon/User' transform='translate(8.960000, 8.960000)' fill='%23D7D7DB' fill-rule='nonzero'%3E %3Cpath d='M29.6335833,26.8774167 C27.646,28.0446667 25.4111667,28.75 23,28.75 C20.5888333,28.75 18.354,28.0446667 16.3664167,26.8774167 C9.38016667,27.3355 3.83333333,33.1506667 3.83333333,40.25 L3.83333333,43.5658333 L5.16541667,43.99325 C5.42225,44.07375 11.5728333,46 23,46 C34.4271667,46 40.57775,44.07375 40.8345833,43.99325 L42.1666667,43.5658333 L42.1666667,40.25 C42.1666667,33.1506667 36.6198333,27.3355 29.6335833,26.8774167 Z' id='Shape'%3E%3C/path%3E %3Cpath d='M23,24.9166667 C29.4764167,24.9166667 34.5,17.70425 34.5,11.5 C34.5,5.15775 29.34225,0 23,0 C16.65775,0 11.5,5.15775 11.5,11.5 C11.5,17.70425 16.5235833,24.9166667 23,24.9166667 Z' id='Shape'%3E%3C/path%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/svg%3E"

/***/ }),

/***/ 1865:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg width='83px' height='102px' viewBox='55 -3 83 102' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 41.2 (35397) - http://www.bohemiancoding.com/sketch --%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='Group-6' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' transform='translate(58.000000, 0.000000)'%3E %3Cpath d='M48,60.8 L28.8,60.8 C12.8944,60.8 0,73.6944 0,89.6 L0,89.6 C0,89.6 14.4,96 38.4,96 C62.4,96 76.8,89.6 76.8,89.6 L76.8,89.6 C76.8,73.6944 63.9056,60.8 48,60.8 L48,60.8 Z' id='Shape' stroke='%23FFFFFF' stroke-width='6'%3E%3C/path%3E %3Cpath d='M16,22.4 C16,10.0288 26.0288,0 38.4,0 C50.7712,0 60.8,10.0288 60.8,22.4 C60.8,34.7712 50.7712,48 38.4,48 C26.0288,48 16,34.7712 16,22.4 L16,22.4 Z' id='Shape' stroke='%23FFFFFF' stroke-width='6'%3E%3C/path%3E %3C/g%3E %3C/svg%3E"

/***/ }),

/***/ 1866:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg width='18' height='15' viewBox='0 0 18 15' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.654 15c6.793 0 10.51-5.773 10.51-10.77 0-.163 0-.325-.008-.487.72-.532 1.347-1.204 1.844-1.964-.663.302-1.376.5-2.125.597.764-.465 1.347-1.21 1.628-2.096-.713.436-1.505.746-2.348.916C14.478.458 13.52 0 12.46 0c-2.037 0-3.694 1.698-3.694 3.787 0 .295.036.583.094.864C5.79 4.497 3.068 2.983 1.246.695.93 1.254.75 1.904.75 2.598c0 1.314.655 2.473 1.64 3.152-.604-.022-1.173-.19-1.67-.472v.052c0 1.83 1.275 3.366 2.96 3.713-.31.088-.633.133-.972.133-.237 0-.468-.022-.69-.067.467 1.505 1.836 2.598 3.45 2.627-1.27 1.02-2.86 1.624-4.59 1.624-.295 0-.59-.014-.878-.05C1.628 14.373 3.573 15 5.654 15' fill-rule='nonzero' fill='%23FFF'/%3E%3C/svg%3E"

/***/ }),

/***/ 1867:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg width='11' height='19' viewBox='0 0 11 19' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.823 18.68v-9H9.78l.393-3.103h-3.35l.005-1.552c0-.81.09-1.243 1.475-1.243h1.85V.68h-2.96C3.64.68 2.39 2.185 2.39 4.715v1.863H.172V9.68H2.39v9h4.433z' fill='%23FFF' fill-rule='evenodd'/%3E%3C/svg%3E"

/***/ }),

/***/ 1868:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg width='18' height='13' viewBox='0 0 18 13' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.142 8.897V3.704l4.863 2.606-4.863 2.587zM17.82 2.804S17.644 1.53 17.105.97C16.42.234 15.653.23 15.3.187 12.783 0 9.005 0 9.005 0h-.008S5.218 0 2.7.187C2.346.23 1.58.234.894.97.355 1.53.18 2.804.18 2.804S0 4.3 0 5.796v1.402c0 1.496.18 2.992.18 2.992s.176 1.273.715 1.834c.685.736 1.584.713 1.985.79C4.32 12.956 9 13 9 13s3.782-.006 6.3-.193c.353-.043 1.12-.047 1.805-.783.54-.56.715-1.834.715-1.834S18 8.694 18 7.198V5.796c0-1.496-.18-2.992-.18-2.992z' fill='%23FFFFFE' fill-rule='evenodd'/%3E%3C/svg%3E"

/***/ }),

/***/ 1869:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg viewBox='107 3340 142 136' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 41.2 (35397) - http://www.bohemiancoding.com/sketch --%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cpath d='M182.343612,3347.6576 L200.175025,3383.78287 L240.041958,3389.57853 C243.951776,3390.14909 245.513301,3394.95378 242.684538,3397.71048 L213.832362,3425.82994 L220.643013,3465.54072 C221.309664,3469.43852 217.21967,3472.40542 213.724257,3470.56762 L178.067436,3451.82332 L142.404609,3470.57363 C138.909195,3472.41143 134.819201,3469.43852 135.485852,3465.54072 L142.296503,3425.82994 L113.444327,3397.71048 C110.615565,3394.95378 112.17709,3390.14309 116.086908,3389.57853 L155.95384,3383.78287 L173.785254,3347.6576 C175.538966,3344.11413 180.595905,3344.11413 182.343612,3347.6576 L182.343612,3347.6576 Z' id='Shape' stroke='%23FFFFFF' stroke-width='8' stroke-linecap='round' stroke-linejoin='round' fill='none'%3E%3C/path%3E %3C/svg%3E"

/***/ }),

/***/ 1870:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg width='64px' height='64px' viewBox='0 0 64 64' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 48.2 (47327) - http://www.bohemiancoding.com/sketch --%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='Screens' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='Extension-Detail---1366px' transform='translate(-140.000000, -607.000000)' fill='%23FFE900' fill-rule='nonzero'%3E %3Cpath d='M154.994575,670.99995 C153.704598,671.000763 152.477615,670.442079 151.630967,669.468394 C150.784319,668.49471 150.401158,667.201652 150.580582,665.923653 L153.046749,648.259919 L141.193762,635.514481 C140.080773,634.318044 139.711733,632.608076 140.232152,631.058811 C140.752571,629.509546 142.078939,628.369589 143.688275,628.088421 L160.214424,625.130961 L168.013827,609.468577 C168.767364,607.955994 170.3113,607 172.000594,607 C173.689888,607 175.233824,607.955994 175.98736,609.468577 L183.790813,625.130961 L200.329111,628.08437 C201.934946,628.371492 203.25546,629.513805 203.771316,631.062053 C204.287172,632.610301 203.915846,634.316807 202.803377,635.51043 L190.954439,648.26397 L193.420606,665.923653 C193.652457,667.578241 192.93975,669.223573 191.574418,670.185702 C190.209085,671.147831 188.420524,671.265104 186.941351,670.489485 L172.002619,662.698806 L157.047688,670.50569 C156.413201,670.833752 155.708782,671.003331 154.994575,670.99995 Z' id='Star-outline'%3E%3C/path%3E %3C/g%3E %3C/g%3E %3C/svg%3E"

/***/ }),

/***/ 1871:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg viewBox='107 3340 142 136' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 41.2 (35397) - http://www.bohemiancoding.com/sketch --%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cpath d='M182.343612,3347.6576 L200.175025,3383.78287 L240.041958,3389.57853 C243.951776,3390.14909 245.513301,3394.95378 242.684538,3397.71048 L213.832362,3425.82994 L220.643013,3465.54072 C221.309664,3469.43852 217.21967,3472.40542 213.724257,3470.56762 L178.067436,3451.82332 L142.404609,3470.57363 C138.909195,3472.41143 134.819201,3469.43852 135.485852,3465.54072 L142.296503,3425.82994 L113.444327,3397.71048 C110.615565,3394.95378 112.17709,3390.14309 116.086908,3389.57853 L155.95384,3383.78287 L173.785254,3347.6576 C175.538966,3344.11413 180.595905,3344.11413 182.343612,3347.6576 L182.343612,3347.6576 Z' id='Shape' stroke='none' stroke-width='8' stroke-linecap='round' stroke-linejoin='round' fill='%23a4a7ab'%3E%3C/path%3E %3C/svg%3E"

/***/ }),

/***/ 1872:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg viewBox='107 3340 142 136' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 41.2 (35397) - http://www.bohemiancoding.com/sketch --%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cpath d='M182.343612,3347.6576 L200.175025,3383.78287 L240.041958,3389.57853 C243.951776,3390.14909 245.513301,3394.95378 242.684538,3397.71048 L213.832362,3425.82994 L220.643013,3465.54072 C221.309664,3469.43852 217.21967,3472.40542 213.724257,3470.56762 L178.067436,3451.82332 L142.404609,3470.57363 C138.909195,3472.41143 134.819201,3469.43852 135.485852,3465.54072 L142.296503,3425.82994 L113.444327,3397.71048 C110.615565,3394.95378 112.17709,3390.14309 116.086908,3389.57853 L155.95384,3383.78287 L173.785254,3347.6576 C175.538966,3344.11413 180.595905,3344.11413 182.343612,3347.6576 L182.343612,3347.6576 Z' id='Shape' stroke='none' stroke-width='8' stroke-linecap='round' stroke-linejoin='round' fill='%23fff'%3E%3C/path%3E %3C/svg%3E"

/***/ }),

/***/ 1873:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg viewBox='107 3340 142 136' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 41.2 (35397) - http://www.bohemiancoding.com/sketch --%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E %3ClinearGradient id='half' x1='0' x2='100%25' y1='0' y2='0'%3E %3Cstop offset='50%25' stop-color='%23fff'/%3E %3Cstop offset='50%25' stop-color='%23a4a7ab'/%3E %3C/linearGradient%3E %3C/defs%3E %3Cpath d='M182.343612,3347.6576 L200.175025,3383.78287 L240.041958,3389.57853 C243.951776,3390.14909 245.513301,3394.95378 242.684538,3397.71048 L213.832362,3425.82994 L220.643013,3465.54072 C221.309664,3469.43852 217.21967,3472.40542 213.724257,3470.56762 L178.067436,3451.82332 L142.404609,3470.57363 C138.909195,3472.41143 134.819201,3469.43852 135.485852,3465.54072 L142.296503,3425.82994 L113.444327,3397.71048 C110.615565,3394.95378 112.17709,3390.14309 116.086908,3389.57853 L155.95384,3383.78287 L173.785254,3347.6576 C175.538966,3344.11413 180.595905,3344.11413 182.343612,3347.6576 L182.343612,3347.6576 Z' id='Shape' stroke='none' stroke-width='8' stroke-linecap='round' stroke-linejoin='round' fill='url(%23half)'%3E%3C/path%3E %3C/svg%3E"

/***/ }),

/***/ 1874:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg width='83px' height='102px' viewBox='55 -3 83 102' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 41.2 (35397) - http://www.bohemiancoding.com/sketch --%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='Group-6' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' transform='translate(58.000000, 0.000000)'%3E %3Cpath d='M48,60.8 L28.8,60.8 C12.8944,60.8 0,73.6944 0,89.6 L0,89.6 C0,89.6 14.4,96 38.4,96 C62.4,96 76.8,89.6 76.8,89.6 L76.8,89.6 C76.8,73.6944 63.9056,60.8 48,60.8 L48,60.8 Z' id='Shape' stroke='%23343a40' stroke-width='6'%3E%3C/path%3E %3Cpath d='M16,22.4 C16,10.0288 26.0288,0 38.4,0 C50.7712,0 60.8,10.0288 60.8,22.4 C60.8,34.7712 50.7712,48 38.4,48 C26.0288,48 16,34.7712 16,22.4 L16,22.4 Z' id='Shape' stroke='%23343a40' stroke-width='6'%3E%3C/path%3E %3C/g%3E %3C/svg%3E"

/***/ }),

/***/ 1875:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg width='10px' height='12px' viewBox='0 0 10 12' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 44.1 (41455) - http://www.bohemiancoding.com/sketch --%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='Symbols' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='Block/Extension/Large/Normal' transform='translate(-611.000000, -27.000000)' fill='%23ADB5BD'%3E %3Cg id='Icon/User' transform='translate(610.000000, 27.000000)'%3E %3Cg id='Group-2' transform='translate(1.000000, 0.000000)'%3E %3Cpath d='M6.7305,7.0115 C6.212,7.316 5.629,7.5 5,7.5 C4.371,7.5 3.788,7.316 3.2695,7.0115 C1.447,7.131 0,8.648 0,10.5 L0,11.365 L0.3475,11.4765 C0.4145,11.4975 2.019,12 5,12 C7.981,12 9.5855,11.4975 9.6525,11.4765 L10,11.365 L10,10.5 C10,8.648 8.553,7.131 6.7305,7.0115 Z' id='Shape' fill-rule='nonzero'%3E%3C/path%3E %3Cpath d='M5,6.5 C6.6895,6.5 8,4.6185 8,3 C8,1.3455 6.6545,0 5,0 C3.3455,0 2,1.3455 2,3 C2,4.6185 3.3105,6.5 5,6.5 Z' id='Shape' fill-rule='nonzero'%3E%3C/path%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/svg%3E"

/***/ }),

/***/ 1876:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg width='63px' height='62px' viewBox='208 33 63 62' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 42 (36781) - http://www.bohemiancoding.com/sketch --%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='Group-5' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' transform='translate(211.000000, 36.000000)' stroke-linecap='round' stroke-linejoin='round'%3E %3Cpath d='M22,6 L56,6' id='Shape' stroke='%230675D3' stroke-width='6'%3E%3C/path%3E %3Cpath d='M22,28 L56,28' id='Shape' stroke='%230675D3' stroke-width='6'%3E%3C/path%3E %3Cpath d='M22,50 L56,50' id='Shape' stroke='%230675D3' stroke-width='6'%3E%3C/path%3E %3Ccircle id='Oval' stroke='%230675D3' stroke-width='6' cx='6' cy='6' r='6'%3E%3C/circle%3E %3Cellipse id='Oval' stroke='%230675D3' stroke-width='6' cx='6' cy='28' rx='6' ry='6'%3E%3C/ellipse%3E %3Ccircle id='Oval' stroke='%230675D3' stroke-width='6' cx='6' cy='50' r='6'%3E%3C/circle%3E %3C/g%3E %3C/svg%3E"

/***/ }),

/***/ 1877:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg width='112px' height='135px' viewBox='72 672 112 135' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 42 (36781) - http://www.bohemiancoding.com/sketch --%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='Group-23' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' transform='translate(76.000000, 675.000000)' stroke-linecap='round' stroke-linejoin='round'%3E %3Cpath d='M30.3728814,93.2881356 L19.5254237,128' id='Shape' stroke='%23000000' stroke-width='6'%3E%3C/path%3E %3Cpath d='M84.6101695,128 L73.7627119,93.2881356' id='Shape' stroke='%23000000' stroke-width='6'%3E%3C/path%3E %3Cpath d='M24.9491525,110 L79.1864407,110' id='Shape' stroke='%23000000' stroke-width='6'%3E%3C/path%3E %3Cpath d='M52,10.8474576 L52,0' id='Shape' stroke='%23000000' stroke-width='6'%3E%3C/path%3E %3Cpolyline id='Shape' stroke='%23000000' stroke-width='6' points='0 80.2711864 26.0338983 58.5762712 47.7288136 71.5932203 78.1016949 45.559322 104.135593 71.5932203'%3E%3C/polyline%3E %3Crect id='Rectangle-path' stroke='%23000000' stroke-width='6' x='0' y='10.8474576' width='104.135593' height='82.440678'%3E%3C/rect%3E %3Ccircle id='Oval' stroke='%23000000' stroke-width='6' cx='45.559322' cy='36.8813559' r='8.6779661'%3E%3C/circle%3E %3C/g%3E %3C/svg%3E"

/***/ }),

/***/ 1878:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg width='139px' height='134px' viewBox='64 673 139 134' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 42 (36781) - http://www.bohemiancoding.com/sketch --%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='Group-22-Copy' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' transform='translate(67.000000, 676.000000)' stroke-linecap='round' stroke-linejoin='round'%3E %3Cpath d='M113.253456,51.9078341 L113.253456,18.875576 L75.5023041,18.875576 C75.5023041,8.49400922 67.0082949,0 56.6267281,0 C46.2451613,0 37.7511521,8.49400922 37.7511521,18.875576 L0,18.875576 L0,47.1889401 C12.9769585,47.1889401 23.59447,57.8064516 23.59447,70.7834101 C23.59447,83.7603687 12.9769585,94.3778802 0,94.3778802 L0,127.410138 L33.0322581,127.410138 C33.0322581,114.43318 43.6497696,103.815668 56.6267281,103.815668 C69.6036866,103.815668 80.2211982,114.43318 80.2211982,127.410138 L113.253456,127.410138 L113.253456,89.6589862 C123.635023,89.6589862 132.129032,81.164977 132.129032,70.7834101 C132.129032,60.4018433 123.635023,51.9078341 113.253456,51.9078341 L113.253456,51.9078341 Z' id='Shape' stroke='%23000000' stroke-width='6'%3E%3C/path%3E %3C/g%3E %3C/svg%3E"

/***/ }),

/***/ 1879:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='15px' height='16px' viewBox='0 0 15 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 46.2 (44496) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3EShape%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='Screens' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='Extension-Detail---1366px' transform='translate(-243.000000, -414.000000)' fill-rule='nonzero' fill='%23FFE900'%3E %3Cg id='Group-63' transform='translate(230.000000, 405.000000)'%3E %3Cpath d='M21.28,9.21333333 L22.0266667,16.04 L24.2666667,13.8 C26.2933333,15.8266667 26.2933333,19.24 24.2666667,21.2666667 C23.3066667,22.3333333 21.92,22.8666667 20.5333333,22.8666667 C19.1466667,22.8666667 17.76,22.3333333 16.8,21.2666667 C14.7733333,19.24 14.7733333,15.8266667 16.8,13.8 C17.44,13.16 18.2933333,12.6266667 19.2533333,12.4133333 L18.6133333,10.3866667 C17.3333333,10.7066667 16.16,11.3466667 15.2,12.3066667 C12.32,15.1866667 12.32,19.88 15.2,22.8666667 C16.5866667,24.2533333 18.5066667,25 20.4266667,25 C22.4533333,25 24.2666667,24.2533333 25.6533333,22.8666667 C28.5333333,19.9866667 28.5333333,15.2933333 25.6533333,12.3066667 L28,9.96 L21.28,9.21333333 Z' id='Shape'%3E%3C/path%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/svg%3E"

/***/ }),

/***/ 1880:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='10px' height='6px' viewBox='0 0 10 6' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 46.2 (44496) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3EShape%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='Symbols' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' stroke-linecap='round' stroke-linejoin='round'%3E %3Cg id='Icon/Arrow/Down/White' transform='translate(1.000000, 1.000000)' stroke-width='2' stroke='%23FFFFFF'%3E %3Cpolyline id='Shape' points='8 0 4 4 0 0'%3E%3C/polyline%3E %3C/g%3E %3C/g%3E %3C/svg%3E"

/***/ }),

/***/ 1881:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='13' height='16' viewBox='0 0 13 16'%3E %3Cg fill='%239400FF'%3E %3Cpolygon points='4.667 7.783 2.57 10.667 10.763 10.667 8.667 7.783 8.667 3.333 10 3.333 10 0 3.333 0 3.333 3.333 4.667 3.333'/%3E %3Cpath d='M11.7333333,12 L1.6,12 L1.00133333,12.8233333 C0.556,13.4346667 0.492666667,14.2333333 0.836,14.9073333 C1.17933333,15.5813333 1.862,16 2.61866667,16 L10.7153333,16 C11.472,16 12.1546667,15.5813333 12.498,14.9073333 C12.8413333,14.2333333 12.778,13.4346667 12.3326667,12.8233333 L11.7333333,12 Z'/%3E %3C/g%3E %3C/svg%3E"

/***/ }),

/***/ 1882:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg width='48px' height='48px' viewBox='12 6 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 47.1 (45422) - http://www.bohemiancoding.com/sketch --%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E %3Cfilter x='-11.9%25' y='-36.7%25' width='123.7%25' height='186.7%25' filterUnits='objectBoundingBox' id='filter-1'%3E %3CfeOffset dx='0' dy='4' in='SourceAlpha' result='shadowOffsetOuter1'%3E%3C/feOffset%3E %3CfeGaussianBlur stdDeviation='8' in='shadowOffsetOuter1' result='shadowBlurOuter1'%3E%3C/feGaussianBlur%3E %3CfeColorMatrix values='0 0 0 0 0.0470588235 0 0 0 0 0.0470588235 0 0 0 0 0.0509803922 0 0 0 0.1 0' type='matrix' in='shadowBlurOuter1' result='shadowMatrixOuter1'%3E%3C/feColorMatrix%3E %3CfeMerge%3E %3CfeMergeNode in='shadowMatrixOuter1'%3E%3C/feMergeNode%3E %3CfeMergeNode in='SourceGraphic'%3E%3C/feMergeNode%3E %3C/feMerge%3E %3C/filter%3E %3C/defs%3E %3Cg id='Screens' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' stroke-linecap='round' stroke-linejoin='round'%3E %3Cg id='Extension-Detail---1366px' transform='translate(-612.000000, -355.000000)' stroke='%23FFFFFF' stroke-width='3'%3E %3Cg id='Group-16' transform='translate(24.000000, 136.000000)'%3E %3Cg id='Group-75-Copy-4' filter='url(%23filter-1)' transform='translate(579.000000, 209.000000)'%3E %3Cg id='Group-70' transform='translate(25.000000, 22.000000)'%3E %3Cpath d='M8,0 L8,16' id='Shape'%3E%3C/path%3E %3Cpath d='M0,8 L16,8' id='Shape'%3E%3C/path%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/svg%3E"

/***/ }),

/***/ 1883:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg width='14px' height='12px' viewBox='0 0 14 12' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 46.2 (44496) - http://www.bohemiancoding.com/sketch --%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='Screens' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='All-Reviews-Page---Developer-View---1366px-Copy' transform='translate(-582.000000, -477.000000)' fill-rule='nonzero' fill='%230A84FF'%3E %3Cg id='Group-29' transform='translate(559.000000, 456.000000)'%3E %3Cg id='Group-25' transform='translate(23.000000, 19.000000)'%3E %3Cpath d='M5.72727273,5.24455735 L5.72727273,2.32563843 C5.72727273,2.1959087 5.66363636,2.06617897 5.53636364,2.03374654 C5.40909091,1.96888168 5.28181818,2.00131411 5.18636364,2.09861141 L0.0954545455,7.2878006 C-0.0318181818,7.41753033 -0.0318181818,7.61212492 0.0954545455,7.74185465 L5.18636364,12.9310438 C5.28181818,13.0283411 5.40909091,13.0607736 5.53636364,12.9959087 C5.66363636,12.9310438 5.72727273,12.8337465 5.72727273,12.7040168 L5.72727273,9.78509789 C10.0863636,9.81753033 11.7727273,10.6607736 13.3954545,13.5148276 C13.4590909,13.6121249 13.5545455,13.6769898 13.6818182,13.6769898 C13.7136364,13.6769898 13.7454545,13.6769898 13.7772727,13.6769898 C13.9045455,13.6445574 14,13.5148276 14,13.3526655 C14,6.31482762 8.46363636,5.30942222 5.72727273,5.24455735 Z' id='Shape'%3E%3C/path%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/svg%3E"

/***/ }),

/***/ 1884:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='24px' height='22px' viewBox='0 0 24 22' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 47.1 (45422) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3EShape%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E %3Cpath d='M21.95,2.051 C20.627,0.729 18.87,0 17,0 C15.13,0 13.373,0.729 12.051,2.05 C12.034,2.067 12.017,2.084 12,2.102 C11.983,2.084 11.967,2.068 11.95,2.051 C10.627,0.729 8.87,0 7,0 C5.13,0 3.373,0.729 2.05,2.051 C0.727,3.373 0,5.13 0,7 C0,8.87 0.728,10.627 2.05,11.949 L12,21.899 L21.95,11.949 C23.272,10.627 24,8.87 24,7 C24,5.131 23.272,3.373 21.95,2.051 Z' id='path-1'%3E%3C/path%3E %3C/defs%3E %3Cg id='Symbols' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='Icon/Heart/Off' fill-rule='nonzero'%3E %3Cg id='Shape'%3E %3Cuse fill='%23FFFFFF' fill-rule='evenodd' xlink:href='%23path-1'%3E%3C/use%3E %3Cpath stroke='%23FFFFFF' stroke-width='4' d='M13.4506893,3.47878038 L12,5.01480433 L10.5459737,3.47524707 C10.553298,3.48281084 10.553298,3.48281084 10.5363212,3.46574814 C9.5875032,2.51764729 8.33863256,2 7,2 C5.66136744,2 4.4124968,2.51764729 3.46367879,3.46574814 C2.51672085,4.41199031 2,5.65978649 2,7 C2,8.33935708 2.51713785,9.58771073 3.46421356,10.5347864 L12,19.0705729 L20.5357864,10.5347864 C21.4828621,9.58771073 22,8.33935708 22,7 C22,5.66123602 21.4825744,4.41200154 20.5357864,3.46521356 L20.5363212,3.46574814 C19.5875032,2.51764729 18.3386326,2 17,2 C15.6614989,2 14.4125897,2.51755423 13.5074,3.4207294 L13.4652136,3.46421356 C13.4548429,3.4745901 13.4542429,3.47519037 13.4506893,3.47878038 Z'%3E%3C/path%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/svg%3E"

/***/ }),

/***/ 1885:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3Ctitle%3E Not-compatible %3C/title%3E %3Cdefs%3E %3Cpath id='a' d='M4 7h8v2H4z'/%3E %3C/defs%3E %3Cg fill='none' fill-rule='evenodd'%3E %3Cpath d='M8 0C3.59 0 0 3.59 0 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z' fill='%23D70022' fill-rule='nonzero'/%3E %3Cuse fill='%23D8D8D8' xlink:href='%23a'/%3E %3Cpath stroke='%23D70022' d='M4.5 7.5h7v1h-7z'/%3E %3C/g%3E %3C/svg%3E"

/***/ }),

/***/ 1886:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg width='8px' height='16px' viewBox='0 0 8 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 49 (51002) - http://www.bohemiancoding.com/sketch --%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='Screens' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='Extension-Detail---1366px' transform='translate(-811.000000, -257.000000)' fill='%239400FF' fill-rule='nonzero'%3E %3Cg id='currency-dollar' transform='translate(811.000000, 257.000000)'%3E %3Cpath d='M5,7.2 L5,4.1 C5.6,4.3 6,4.9 6,5.5 C6,6.1 6.4,6.5 7,6.5 C7.6,6.5 8,6.1 8,5.5 C8,3.7 6.7,2.3 5,2.1 L5,1 C5,0.4 4.6,0 4,0 C3.4,0 3,0.4 3,1 L3,2.1 C1.3,2.3 0,3.7 0,5.5 C0,7.6 1.6,8.4 3,8.8 L3,11.9 C2.4,11.7 2,11.1 2,10.5 C2,9.9 1.6,9.5 1,9.5 C0.4,9.5 0,9.9 0,10.5 C0,12.3 1.3,13.7 3,13.9 L3,15 C3,15.6 3.4,16 4,16 C4.6,16 5,15.6 5,15 L5,13.9 C6.7,13.7 8,12.2 8,10.5 C8,8.4 6.4,7.6 5,7.2 Z M2,5.5 C2,4.8 2.4,4.3 3,4.1 L3,6.7 C2.3,6.4 2,6.1 2,5.5 Z M5,11.9 L5,9.3 C5.7,9.6 6,9.9 6,10.5 C6,11.2 5.6,11.7 5,11.9 Z' id='Shape'%3E%3C/path%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/svg%3E"

/***/ }),

/***/ 1887:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg width='16px' height='15px' viewBox='0 0 16 15' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch --%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='Screens' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0.8'%3E %3Cg id='Collections---Edit-Collection---1366px' transform='translate(-919.000000, -722.000000)' fill='%230C0C0D' fill-rule='nonzero'%3E %3Cg id='Group-6' transform='translate(919.000000, 722.000000)'%3E %3Cpath d='M13.577,2.22044605e-16 L2.423,2.22044605e-16 C1.08549932,0.00165293785 0.00165293785,1.08549932 0,2.423 L0,8.577 C0.00165293785,9.91450068 1.08549932,10.9983471 2.423,11 L8.26,11 L11.226,14.633 C11.4936161,14.9601314 11.9379992,15.0836914 12.3360673,14.9416524 C12.7341355,14.7996134 12.9999216,14.4226503 13,14 L13,11 L13.577,11 C14.9145007,10.9983471 15.9983471,9.91450068 16,8.577 L16,2.423 C15.9983471,1.08549932 14.9145007,0.00165293785 13.577,2.22044605e-16 Z M14,8.577 C14,8.68918658 13.9554341,8.79677828 13.8761062,8.87610617 C13.7967783,8.95543406 13.6891866,9 13.577,9 L12,9 C11.4477153,9 11,9.44771525 11,10 L11,11.194 L9.509,9.367 C9.31888626,9.13449284 9.03433773,8.99974534 8.734,9 L2.423,9 C2.31081342,9 2.20322172,8.95543406 2.12389383,8.87610617 C2.04456594,8.79677828 2,8.68918658 2,8.577 L2,2.423 C2,2.18938355 2.18938355,2 2.423,2 L13.577,2 C13.8106164,2 14,2.18938355 14,2.423 L14,8.577 Z' id='Shape'%3E%3C/path%3E %3Cpath d='M11.5,4 L4.5,4 C4.22385763,4 4,4.22385763 4,4.5 C4,4.77614237 4.22385763,5 4.5,5 L11.5,5 C11.7761424,5 12,4.77614237 12,4.5 C12,4.22385763 11.7761424,4 11.5,4 Z M11.5,6 L4.5,6 C4.22385763,6 4,6.22385763 4,6.5 C4,6.77614237 4.22385763,7 4.5,7 L11.5,7 C11.7761424,7 12,6.77614237 12,6.5 C12,6.22385763 11.7761424,6 11.5,6 Z' id='Shape'%3E%3C/path%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/svg%3E"

/***/ }),

/***/ 1888:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg width='16px' height='15px' viewBox='0 0 16 15' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch --%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='Screens' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='Collections---Edit-Collection---1366px' transform='translate(-919.000000, -722.000000)' fill='%230A84FF' fill-rule='nonzero'%3E %3Cg id='Group-6' transform='translate(919.000000, 722.000000)'%3E %3Cpath d='M13.577,2.22044605e-16 L2.423,2.22044605e-16 C1.08549932,0.00165293785 0.00165293785,1.08549932 0,2.423 L0,8.577 C0.00165293785,9.91450068 1.08549932,10.9983471 2.423,11 L8.26,11 L11.226,14.633 C11.4936161,14.9601314 11.9379992,15.0836914 12.3360673,14.9416524 C12.7341355,14.7996134 12.9999216,14.4226503 13,14 L13,11 L13.577,11 C14.9145007,10.9983471 15.9983471,9.91450068 16,8.577 L16,2.423 C15.9983471,1.08549932 14.9145007,0.00165293785 13.577,2.22044605e-16 Z M14,8.577 C14,8.68918658 13.9554341,8.79677828 13.8761062,8.87610617 C13.7967783,8.95543406 13.6891866,9 13.577,9 L12,9 C11.4477153,9 11,9.44771525 11,10 L11,11.194 L9.509,9.367 C9.31888626,9.13449284 9.03433773,8.99974534 8.734,9 L2.423,9 C2.31081342,9 2.20322172,8.95543406 2.12389383,8.87610617 C2.04456594,8.79677828 2,8.68918658 2,8.577 L2,2.423 C2,2.18938355 2.18938355,2 2.423,2 L13.577,2 C13.8106164,2 14,2.18938355 14,2.423 L14,8.577 Z' id='Shape'%3E%3C/path%3E %3Cpath d='M11.5,4 L4.5,4 C4.22385763,4 4,4.22385763 4,4.5 C4,4.77614237 4.22385763,5 4.5,5 L11.5,5 C11.7761424,5 12,4.77614237 12,4.5 C12,4.22385763 11.7761424,4 11.5,4 Z M11.5,6 L4.5,6 C4.22385763,6 4,6.22385763 4,6.5 C4,6.77614237 4.22385763,7 4.5,7 L11.5,7 C11.7761424,7 12,6.77614237 12,6.5 C12,6.22385763 11.7761424,6 11.5,6 Z' id='Shape'%3E%3C/path%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/svg%3E"

/***/ }),

/***/ 1889:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24' height='24' viewBox='0 0 24 24'%3E %3Cdefs%3E %3Cpath id='bookmarks-a' d='M23.6215971,8.90749087 C23.4308959,8.3374861 22.9453225,7.91627274 22.3540971,7.80799087 L16.2205971,6.71149087 L13.3315971,0.913990871 C13.0524773,0.353956922 12.4805834,-1.2490009e-16 11.8548471,0 C11.2291108,8.32667268e-17 10.6572169,0.353956922 10.3780971,0.913990871 L7.4875971,6.71149087 L1.3660971,7.80499087 C0.769633805,7.90918683 0.278155803,8.33170831 0.085648539,8.90578688 C-0.106858725,9.47986546 0.030533629,10.1132677 0.443597098,10.5559909 L4.8340971,15.2764909 L3.9205971,21.8164909 C3.83471634,22.4291024 4.09871227,23.0382869 4.60444912,23.3945153 C5.11018597,23.7507437 5.77269199,23.794164 6.3205971,23.5069909 L11.8540971,20.6209909 L17.3890971,23.5114909 C17.9370022,23.798664 18.5995082,23.7552437 19.1052451,23.3990153 C19.6109819,23.0427869 19.8749779,22.4336024 19.7890971,21.8209909 L18.8740971,15.2764909 L23.2630971,10.5574909 C23.6762769,10.1149232 23.8138788,9.48160878 23.6215971,8.90749087 Z'/%3E %3C/defs%3E %3Cg fill='none' fill-rule='evenodd'%3E %3Cuse fill='%23000' fill-rule='nonzero' xlink:href='%23bookmarks-a'/%3E %3C/g%3E %3C/svg%3E"

/***/ }),

/***/ 1890:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24' height='24' viewBox='0 0 24 24'%3E %3Cdefs%3E %3Cpath id='browser-a' d='M19.5,1.5 L4.5,1.5 C2.01471863,1.5 3.04359188e-16,3.51471863 0,6 L0,18 C3.04359188e-16,20.4852814 2.01471863,22.5 4.5,22.5 L21,22.5 C22.6568542,22.5 24,21.1568542 24,19.5 L24,6 C24,3.51471863 21.9852814,1.5 19.5,1.5 Z M21,18 C21,18.8284271 20.3284271,19.5 19.5,19.5 L4.5,19.5 C3.67157288,19.5 3,18.8284271 3,18 L3,9 L21,9 L21,18 Z M21,7.5 L3,7.5 L3,6 C3,5.17157288 3.67157288,4.5 4.5,4.5 L19.5,4.5 C20.3284271,4.5 21,5.17157288 21,6 L21,7.5 Z'/%3E %3C/defs%3E %3Cg fill='none' fill-rule='evenodd'%3E %3Cuse fill='%23000' fill-rule='nonzero' xlink:href='%23browser-a'/%3E %3C/g%3E %3C/svg%3E"

/***/ }),

/***/ 1891:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24' height='24' viewBox='0 0 24 24'%3E %3Cdefs%3E %3Cpath id='info-a' d='M12,1.5 C17.7989899,1.5 22.5,6.20101013 22.5,12 C22.5,17.7989899 17.7989899,22.5 12,22.5 C6.20101013,22.5 1.5,17.7989899 1.5,12 C1.5,6.20101013 6.20101013,1.5 12,1.5 Z M12,6 C12.8284271,6 13.5,6.67157288 13.5,7.5 C13.5,8.32842712 12.8284271,9 12,9 C11.1715729,9 10.5,8.32842712 10.5,7.5 C10.5,6.67157288 11.1715729,6 12,6 Z M12,10.5 C12.8284271,10.5 13.5,11.1715729 13.5,12 L13.5,16.5 C13.5,17.3284271 12.8284271,18 12,18 C11.1715729,18 10.5,17.3284271 10.5,16.5 L10.5,12 C10.5,11.1715729 11.1715729,10.5 12,10.5 Z'/%3E %3C/defs%3E %3Cg fill='none' fill-rule='evenodd'%3E %3Crect width='24' height='24'/%3E %3Cmask id='info-b' fill='%23fff'%3E %3Cuse xlink:href='%23info-a'/%3E %3C/mask%3E %3Cuse fill='%23000' xlink:href='%23info-a'/%3E %3Cg fill='%230C0C0D' fill-opacity='.8' mask='url(%23info-b)'%3E %3Crect width='24' height='24'/%3E %3C/g%3E %3C/g%3E %3C/svg%3E"

/***/ }),

/***/ 1892:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24' height='24' viewBox='0 0 24 24'%3E %3Cdefs%3E %3Cpath id='clipboard-a' d='M17.25,3.00375942 L15.675,3.00375942 C15.3201057,1.25601644 13.7834112,-2.86879895e-16 12,0 C10.2165888,2.86879895e-16 8.67989435,1.25601644 8.325,3.00375942 L6.75,3.00375942 C5.09314575,3.00375942 3.75,4.34690517 3.75,6.00375942 L3.75,21.0037594 C3.75,22.6606137 5.09314575,24.0037594 6.75,24.0037594 L17.25,24.0037594 C18.9068542,24.0037594 20.25,22.6606137 20.25,21.0037594 L20.25,6.00375942 C20.25,4.34690517 18.9068542,3.00375942 17.25,3.00375942 Z M17.25,13.5037594 C17.25,14.3321865 16.5784271,15.0037594 15.75,15.0037594 L8.25,15.0037594 C7.42157288,15.0037594 6.75,14.3321865 6.75,13.5037594 L6.75,7.50375942 L17.25,7.50375942 L17.25,13.5037594 Z M17.25,6.00375942 L6.75,6.00375942 L6.75,4.50375942 L8.325,4.50375942 C9.03790293,4.50390492 9.65241943,4.0022588 9.795,3.30375942 C10.0094028,2.25685177 10.9306134,1.50518155 11.99925,1.50518155 C13.0678866,1.50518155 13.9890972,2.25685177 14.2035,3.30375942 C14.3460806,4.0022588 14.9605971,4.50390492 15.6735,4.50375942 L17.25,4.50375942 L17.25,6.00375942 Z M12,3.00375942 C11.5857864,3.00375942 11.25,3.33954586 11.25,3.75375942 C11.25,4.16797298 11.5857864,4.50375942 12,4.50375942 C12.4142136,4.50375942 12.75,4.16797298 12.75,3.75375942 C12.75,3.33954586 12.4142136,3.00375942 12,3.00375942 Z M9,10.5037594 L15,10.5037594 C15.4142136,10.5037594 15.75,10.167973 15.75,9.75375942 C15.75,9.33954586 15.4142136,9.00375942 15,9.00375942 L9,9.00375942 C8.58578644,9.00375942 8.25,9.33954586 8.25,9.75375942 C8.25,10.167973 8.58578644,10.5037594 9,10.5037594 Z M9,13.5037594 L12,13.5037594 C12.4142136,13.5037594 12.75,13.167973 12.75,12.7537594 C12.75,12.3395459 12.4142136,12.0037594 12,12.0037594 L9,12.0037594 C8.58578644,12.0037594 8.25,12.3395459 8.25,12.7537594 C8.25,13.167973 8.58578644,13.5037594 9,13.5037594 Z'/%3E %3C/defs%3E %3Cg fill='none' fill-rule='evenodd'%3E %3Crect width='24' height='24'/%3E %3Cmask id='clipboard-b' fill='%23fff'%3E %3Cuse xlink:href='%23clipboard-a'/%3E %3C/mask%3E %3Cuse fill='%23000' fill-rule='nonzero' xlink:href='%23clipboard-a'/%3E %3Cg fill='%230C0C0D' fill-opacity='.8' mask='url(%23clipboard-b)'%3E %3Crect width='24' height='24'/%3E %3C/g%3E %3C/g%3E %3C/svg%3E"

/***/ }),

/***/ 1893:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24' height='24' viewBox='0 0 24 24'%3E %3Cdefs%3E %3Cpath id='dev-a' d='M21.8325,4.8 L18.1815,8.454 C17.7159447,8.94976701 17.0173818,9.15271883 16.358655,8.98358678 C15.6999282,8.81445472 15.1855453,8.30007177 15.0164132,7.64134499 C14.8472812,6.98261821 15.050233,6.28405525 15.546,5.8185 L19.2,2.1675 C18.3655882,1.73424697 17.440171,1.50546327 16.5,1.5 C14.3455146,1.48717375 12.3516071,2.63736155 11.2840705,4.50881479 C10.2165339,6.38026803 10.2413547,8.68200286 11.349,10.53 L1.9395,19.9395 C1.54956512,20.3161117 1.3931811,20.8738168 1.53045427,21.398261 C1.66772743,21.9227051 2.07729487,22.3322726 2.60173901,22.4695457 C3.12618316,22.6068189 3.68388829,22.4504349 4.0605,22.0605 L13.47,12.651 C14.3853128,13.2012408 15.4320428,13.4945324 16.5,13.5 C19.8137085,13.5 22.5,10.8137085 22.5,7.5 C22.4945367,6.55982905 22.265753,5.63441182 21.8325,4.8 Z'/%3E %3C/defs%3E %3Cg fill='none' fill-rule='evenodd'%3E %3Crect width='24' height='24'/%3E %3Cmask id='dev-b' fill='%23fff'%3E %3Cuse xlink:href='%23dev-a'/%3E %3C/mask%3E %3Cg fill='%230F1126' mask='url(%23dev-b)'%3E %3Crect width='24' height='24'/%3E %3C/g%3E %3C/g%3E %3C/svg%3E"

/***/ }),

/***/ 1894:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24' height='24' viewBox='0 0 24 24'%3E %3Cdefs%3E %3Cpath id='downloads-a' d='M10.9395,19.0605 C11.5252498,19.6460729 12.4747502,19.6460729 13.0605,19.0605 L20.5605,11.5605 C21.1289583,10.9719317 21.1208286,10.0363728 20.5422279,9.45777214 C19.9636272,8.87917144 19.0280683,8.87104169 18.4395,9.4395 L13.5,14.379 L13.5,1.5 C13.5,0.671572875 12.8284271,5.07265313e-17 12,0 C11.1715729,-5.07265313e-17 10.5,0.671572875 10.5,1.5 L10.5,14.379 L5.5605,9.4395 C4.97193167,8.87104169 4.03637283,8.87917144 3.45777214,9.45777214 C2.87917144,10.0363728 2.87104169,10.9719317 3.4395,11.5605 L10.9395,19.0605 Z M19.5,21 L4.5,21 C3.67157288,21 3,21.6715729 3,22.5 C3,23.3284271 3.67157288,24 4.5,24 L19.5,24 C20.3284271,24 21,23.3284271 21,22.5 C21,21.6715729 20.3284271,21 19.5,21 Z'/%3E %3C/defs%3E %3Cg fill='none' fill-rule='evenodd'%3E %3Crect width='24' height='24'/%3E %3Cmask id='downloads-b' fill='%23fff'%3E %3Cuse xlink:href='%23downloads-a'/%3E %3C/mask%3E %3Cg fill='%230F1126' mask='url(%23downloads-b)'%3E %3Crect width='24' height='24'/%3E %3C/g%3E %3C/g%3E %3C/svg%3E"

/***/ }),

/***/ 1895:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24' height='24' viewBox='0 0 24 24'%3E %3Cdefs%3E %3Cpath id='search-a' d='M22.6727557,20.6365957 L15.7290757,13.6929157 C18.3422052,10.0210397 17.7053057,4.95923573 14.2640044,2.04915604 C10.8227031,-0.860923663 5.72542741,-0.648130255 2.53864858,2.53864858 C-0.648130255,5.72542741 -0.860923663,10.8227031 2.04915604,14.2640044 C4.95923573,17.7053057 10.0210397,18.3422052 13.6929157,15.7290757 L20.6365957,22.6727557 C21.2016213,23.2184757 22.0997578,23.2106711 22.6552144,22.6552144 C23.2106711,22.0997578 23.2184757,21.2016213 22.6727557,20.6365957 Z M8.69467569,14.4546757 C5.51351553,14.4546757 2.93467569,11.8758358 2.93467569,8.69467569 C2.93467569,5.51351553 5.51351553,2.93467569 8.69467569,2.93467569 C11.8758358,2.93467569 14.4546757,5.51351553 14.4546757,8.69467569 C14.4546757,10.2223227 13.8478203,11.6874012 12.7676108,12.7676108 C11.6874012,13.8478203 10.2223227,14.4546757 8.69467569,14.4546757 Z'/%3E %3C/defs%3E %3Cg fill='none' fill-rule='evenodd'%3E %3Cmask id='search-b' fill='%23fff'%3E %3Cuse xlink:href='%23search-a'/%3E %3C/mask%3E %3Cuse fill='%23000' fill-rule='nonzero' xlink:href='%23search-a'/%3E %3Cg fill='%230F1126' mask='url(%23search-b)'%3E %3Crect width='23.04' height='23.04'/%3E %3C/g%3E %3C/g%3E %3C/svg%3E"

/***/ }),

/***/ 1896:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24' height='24' viewBox='0 0 24 24'%3E %3Cdefs%3E %3Cpolygon id='geolocation-a' points='1.5 10.5 22.5 1.5 13.5 22.5 13.5 10.5'/%3E %3C/defs%3E %3Cg fill='none' fill-rule='evenodd'%3E %3Crect width='24' height='24'/%3E %3Cmask id='geolocation-b' fill='%23fff'%3E %3Cuse xlink:href='%23geolocation-a'/%3E %3C/mask%3E %3Cg fill='%230F1126' mask='url(%23geolocation-b)'%3E %3Crect width='24' height='24'/%3E %3C/g%3E %3C/g%3E %3C/svg%3E"

/***/ }),

/***/ 1897:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24' height='24' viewBox='0 0 24 24'%3E %3Cdefs%3E %3Cpath id='history-a' d='M12,0 C5.372583,-4.05812251e-16 8.11624501e-16,5.372583 0,12 C-8.11624501e-16,18.627417 5.372583,24 12,24 C18.627417,24 24,18.627417 24,12 C23.9925602,5.37566713 18.6243329,0.00743982682 12,0 Z M12,21 C7.02943725,21 3,16.9705627 3,12 C3,7.02943725 7.02943725,3 12,3 C16.9705627,3 21,7.02943725 21,12 C20.9942139,16.9681641 16.9681641,20.9942139 12,21 Z M17.25,12 L12,12 L12,6.75 C12,6.33578644 11.6642136,6 11.25,6 C10.8357864,6 10.5,6.33578644 10.5,6.75 L10.5,12.75 C10.5,13.1642136 10.8357864,13.5 11.25,13.5 L17.25,13.5 C17.6642136,13.5 18,13.1642136 18,12.75 C18,12.3357864 17.6642136,12 17.25,12 Z'/%3E %3C/defs%3E %3Cg fill='none' fill-rule='evenodd'%3E %3Crect width='24' height='24'/%3E %3Cmask id='history-b' fill='%23fff'%3E %3Cuse xlink:href='%23history-a'/%3E %3C/mask%3E %3Cg fill='%230F1126' mask='url(%23history-b)'%3E %3Crect width='24' height='24'/%3E %3C/g%3E %3C/g%3E %3C/svg%3E"

/***/ }),

/***/ 1898:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24' height='24' viewBox='0 0 24 24'%3E %3Cdefs%3E %3Cpath id='settings-a' d='M22.5,10.5 L19.35,10.5 C19.1565842,9.56102069 18.7837667,8.66819421 18.252,7.8705 L20.487,5.6355 C21.0554584,5.04693167 21.0473286,4.11137283 20.4687279,3.53277214 C19.8901272,2.95417144 18.9545684,2.94604169 18.366,3.5145 L16.131,5.7495 C15.3329502,5.21706084 14.4395982,4.8437273 13.5,4.65 L13.5,1.5 C13.5,0.671572875 12.8284271,5.07265313e-17 12,0 C11.1715729,-5.07265313e-17 10.5,0.671572875 10.5,1.5 L10.5,4.65 C9.56103184,4.84345197 8.66821206,5.21626662 7.87050001,5.748 L5.63550001,3.513 C5.04938782,2.92730204 4.09944799,2.92763783 3.51375002,3.51375002 C2.92805205,4.0998622 2.92838783,5.04980202 3.51450001,5.6355 L5.74950001,7.8705 C5.21720442,8.6680797 4.84387483,9.56091293 4.65000001,10.5 L1.5,10.5 C0.671572894,10.5 4.47034837e-08,11.1715729 4.47034836e-08,12 C4.47034835e-08,12.8284271 0.671572894,13.5 1.5,13.5 L4.65000001,13.5 C4.8439049,14.444731 5.21934844,15.3428409 5.75550001,16.1445 C5.73450001,16.164 5.70750001,16.17 5.68800001,16.1895 L3.51300001,18.3645 C3.12306513,18.7411117 2.96668111,19.2988168 3.10395427,19.823261 C3.24122743,20.3477051 3.65079487,20.7572726 4.17523902,20.8945457 C4.69968317,21.0318189 5.2573883,20.8754349 5.63400001,20.4855 L7.80900001,18.3105 C7.82850001,18.291 7.83600001,18.264 7.85400001,18.243 C8.65599576,18.7798585 9.55463825,19.1558212 10.5,19.35 L10.5,22.5 C10.5,23.3284271 11.1715729,24 12,24 C12.8284271,24 13.5,23.3284271 13.5,22.5 L13.5,19.35 C14.4389682,19.156548 15.331788,18.7837334 16.1295,18.252 L18.3645,20.487 C18.9530684,21.0554583 19.8886272,21.0473286 20.4672279,20.4687279 C21.0458286,19.8901272 21.0539584,18.9545683 20.4855,18.366 L18.2505,16.131 C18.7829725,15.332968 19.1563089,14.4396093 19.35,13.5 L22.5,13.5 C23.3284272,13.5 24,12.8284271 24,12 C24,11.1715729 23.3284272,10.5 22.5,10.5 Z M7.5,12 C7.5,9.51471863 9.51471863,7.5 12,7.5 C14.4852814,7.5 16.5,9.51471863 16.5,12 C16.5,14.4852814 14.4852814,16.5 12,16.5 C9.51471863,16.5 7.5,14.4852814 7.5,12 Z'/%3E %3C/defs%3E %3Cg fill='none' fill-rule='evenodd'%3E %3Crect width='24' height='24'/%3E %3Cmask id='settings-b' fill='%23fff'%3E %3Cuse xlink:href='%23settings-a'/%3E %3C/mask%3E %3Cg fill='%230F1126' mask='url(%23settings-b)'%3E %3Crect width='24' height='24'/%3E %3C/g%3E %3C/g%3E %3C/svg%3E"

/***/ }),

/***/ 1899:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24' height='24' viewBox='0 0 24 24'%3E %3Cdefs%3E %3Cpath id='messages-a' d='M20.3655,0.75 C22.371751,0.752479407 23.9975206,2.37824898 24,4.3845 L24,13.6155 C23.9975206,15.621751 22.371751,17.2475206 20.3655,17.25 L19.5,17.25 L19.5,21.75 C19.4998823,22.3839755 19.1012032,22.9494201 18.504101,23.1624786 C17.9069988,23.375537 17.2404242,23.1901971 16.839,22.6995 L12.39,17.25 L3.6345,17.25 C1.62824898,17.2475206 0.00247940678,15.621751 0,13.6155 L0,4.3845 C0.00247940678,2.37824898 1.62824898,0.752479407 3.6345,0.75 L20.3655,0.75 Z M21,13.6155 L21,4.3845 C21,4.03407533 20.7159247,3.75 20.3655,3.75 L3.6345,3.75 C3.28407533,3.75 3,4.03407533 3,4.3845 L3,13.6155 C3,13.7837799 3.06684892,13.9451674 3.18584075,14.0641593 C3.30483258,14.1831511 3.46622014,14.25 3.6345,14.25 L13.101,14.25 C13.5515066,14.249618 13.9783294,14.4517393 14.2635,14.8005 L16.5,17.541 L16.5,15.75 C16.5,14.9215729 17.1715729,14.25 18,14.25 L20.3655,14.25 C20.5337799,14.25 20.6951674,14.1831511 20.8141593,14.0641593 C20.9331511,13.9451674 21,13.7837799 21,13.6155 Z M17.25,6.75 C17.6642136,6.75 18,7.08578644 18,7.5 C18,7.91421356 17.6642136,8.25 17.25,8.25 L6.75,8.25 C6.33578644,8.25 6,7.91421356 6,7.5 C6,7.08578644 6.33578644,6.75 6.75,6.75 L17.25,6.75 Z M17.25,9.75 C17.6642136,9.75 18,10.0857864 18,10.5 C18,10.9142136 17.6642136,11.25 17.25,11.25 L6.75,11.25 C6.33578644,11.25 6,10.9142136 6,10.5 C6,10.0857864 6.33578644,9.75 6.75,9.75 L17.25,9.75 Z'/%3E %3C/defs%3E %3Cg fill='none' fill-rule='evenodd'%3E %3Crect width='24' height='24'/%3E %3Cmask id='messages-b' fill='%23fff'%3E %3Cuse xlink:href='%23messages-a'/%3E %3C/mask%3E %3Cg fill='%230F1126' mask='url(%23messages-b)'%3E %3Crect width='24' height='24'/%3E %3C/g%3E %3C/g%3E %3C/svg%3E"

/***/ }),

/***/ 1900:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24' height='24' viewBox='0 0 24 24'%3E %3Cdefs%3E %3Cpath id='notifications-a' d='M19.5,1.5 L15,1.5 C14.1715729,1.5 13.5,2.17157288 13.5,3 C13.5,3.82842712 14.1715729,4.5 15,4.5 L19.5,4.5 C20.3284271,4.5 21,5.17157288 21,6 L21,18 C21,18.8284271 20.3284271,19.5 19.5,19.5 L4.5,19.5 C3.67157288,19.5 3,18.8284271 3,18 L3,12 C3,11.1715729 2.32842712,10.5 1.5,10.5 C0.671572875,10.5 1.01453063e-16,11.1715729 0,12 L0,18 C3.04359188e-16,20.4852814 2.01471863,22.5 4.5,22.5 L19.5,22.5 C21.9852814,22.5 24,20.4852814 24,18 L24,6 C24,3.51471863 21.9852814,1.5 19.5,1.5 Z'/%3E %3C/defs%3E %3Cg fill='none' fill-rule='evenodd' transform='translate(0 1)'%3E %3Cuse fill='%23000' fill-rule='nonzero' transform='matrix(-1 0 0 1 24 0)' xlink:href='%23notifications-a'/%3E %3Cpath fill='%230F1126' stroke='%230F1126' d='M17.25,10.5 C14.3505051,10.5 12,8.14949494 12,5.25 C12,2.35050506 14.3505051,5.32628579e-16 17.25,0 C20.1494949,-5.32628579e-16 22.5,2.35050506 22.5,5.25 C22.5,8.14949494 20.1494949,10.5 17.25,10.5 Z'/%3E %3C/g%3E %3C/svg%3E"

/***/ }),

/***/ 1901:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E %3Cg transform='translate(2)'%3E %3Cpath d='M2.57142857,10.2857143 L18,10.2857143 C19.4068784,10.2855892 20.5526702,11.4161038 20.5714286,12.8228571 L20.5714286,21.3942857 C20.5806015,22.082192 20.3137388,22.7450875 19.8305046,23.2347649 C19.3472704,23.7244422 18.6879674,24.0000612 18,24 L2.57142857,24 C1.15126779,24 1.73919536e-16,22.8487322 0,21.4285714 L0,12.8571429 C2.69663186e-15,11.4369821 1.15126779,10.2857143 2.57142857,10.2857143 Z'/%3E %3Cpath d='M10.2857143,0 C6.49861886,-2.31892715e-16 3.42857143,3.07004743 3.42857143,6.85714286 L3.42857143,12 C3.42857143,15.7870954 6.49861886,18.8571429 10.2857143,18.8571429 C14.0728097,18.8571429 17.1428571,15.7870954 17.1428571,12 L17.1428571,6.85714286 C17.1428571,3.07004743 14.0728097,2.31892715e-16 10.2857143,0 Z M13.7142857,13.7142857 C13.7142857,15.6078334 12.179262,17.1428571 10.2857143,17.1428571 C8.39216657,17.1428571 6.85714286,15.6078334 6.85714286,13.7142857 L6.85714286,6.85714286 C6.85714286,4.96359514 8.39216657,3.42857143 10.2857143,3.42857143 C12.179262,3.42857143 13.7142857,4.96359514 13.7142857,6.85714286 L13.7142857,13.7142857 Z'/%3E %3C/g%3E %3C/svg%3E"

/***/ }),

/***/ 1902:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E %3Cpath fill='%230F1126' fill-rule='evenodd' d='M16.8,14.4 C16.6988,14.4 16.6,14.3888 16.5,14.3848 L15.0972,16.1832 C15.0076,16.2796 14.8,16.4 14.6252,16.4 C14.4,16.4 14.4,16.4 14,16 C13.6,15.6 13.6,15.6 13.2,15.2 L12.8,15.2 L10.4,17.6 L8.8,17.6 L8.8,19.1824 C8.8,19.4268 8.4,19.6 8.4,19.6 L7.6,19.6 L7.6,20.3968 C7.6,20.8 7.2,20.8 7.2,20.8 L6.4,20.8 L6.4,22.0092 C6.4,22.4 6,22.4 6,22.4 L4.8,22.4 L4.8,23.6 C4.8,24 4.4,24 4.4,24 L0.4,24 C0,24 0,23.6 0,23.6 L0,20.8 L8.8,12 C8.8328,11.9644 9.2,11.6 8.8,11.2 C8.4,10.8 8,10.4 8,10.4 C7.8004,10.2152 7.8152,9.7996 8,9.6 L9.6408,7.9592 C9.6144,7.7096 9.6,7.4564 9.6,7.2 C9.6,3.2236 12.8236,0 16.8,0 C20.7764,0 24,3.2236 24,7.2 C24,11.1764 20.7764,14.4 16.8,14.4 L16.8,14.4 Z M18.4,4 C17.5164,4 16.8,4.7164 16.8,5.6 C16.8,6.4836 17.5164,7.2 18.4,7.2 C19.2836,7.2 20,6.4836 20,5.6 C20,4.7164 19.2836,4 18.4,4 L18.4,4 Z'/%3E %3C/svg%3E"

/***/ }),

/***/ 1903:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24' height='24' viewBox='0 0 24 24'%3E %3Cdefs%3E %3Cpath id='tabs-a' d='M22.5,16.5 L21,16.5 L21,7.5 C21,5.84314575 19.6568542,4.5 18,4.5 L6,4.5 C4.34314575,4.5 3,5.84314575 3,7.5 L3,16.5 L1.5,16.5 C0.671572875,16.5 1.01453063e-16,17.1715729 0,18 C-1.01453063e-16,18.8284271 0.671572875,19.5 1.5,19.5 L22.5,19.5 C23.3284271,19.5 24,18.8284271 24,18 C24,17.1715729 23.3284271,16.5 22.5,16.5 Z'/%3E %3C/defs%3E %3Cg fill='none' fill-rule='evenodd'%3E %3Crect width='24' height='24'/%3E %3Cmask id='tabs-b' fill='%23fff'%3E %3Cuse xlink:href='%23tabs-a'/%3E %3C/mask%3E %3Cg fill='%230F1126' mask='url(%23tabs-b)'%3E %3Crect width='24' height='24'/%3E %3C/g%3E %3C/g%3E %3C/svg%3E"

/***/ }),

/***/ 1904:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24' height='24' viewBox='0 0 24 24'%3E %3Cdefs%3E %3Cpath id='top-sites-a' d='M2.5,1.5 L9.5,1.5 C10.0522847,1.5 10.5,1.94771525 10.5,2.5 L10.5,9.5 C10.5,10.0522847 10.0522847,10.5 9.5,10.5 L2.5,10.5 C1.94771525,10.5 1.5,10.0522847 1.5,9.5 L1.5,2.5 C1.5,1.94771525 1.94771525,1.5 2.5,1.5 Z M14.5,1.5 L21.5,1.5 C22.0522847,1.5 22.5,1.94771525 22.5,2.5 L22.5,9.5 C22.5,10.0522847 22.0522847,10.5 21.5,10.5 L14.5,10.5 C13.9477153,10.5 13.5,10.0522847 13.5,9.5 L13.5,2.5 C13.5,1.94771525 13.9477153,1.5 14.5,1.5 Z M2.5,13.5 L9.5,13.5 C10.0522847,13.5 10.5,13.9477153 10.5,14.5 L10.5,21.5 C10.5,22.0522847 10.0522847,22.5 9.5,22.5 L2.5,22.5 C1.94771525,22.5 1.5,22.0522847 1.5,21.5 L1.5,14.5 C1.5,13.9477153 1.94771525,13.5 2.5,13.5 Z M14.5,13.5 L21.5,13.5 C22.0522847,13.5 22.5,13.9477153 22.5,14.5 L22.5,21.5 C22.5,22.0522847 22.0522847,22.5 21.5,22.5 L14.5,22.5 C13.9477153,22.5 13.5,22.0522847 13.5,21.5 L13.5,14.5 C13.5,13.9477153 13.9477153,13.5 14.5,13.5 Z'/%3E %3C/defs%3E %3Cg fill='none' fill-rule='evenodd'%3E %3Crect width='24' height='24'/%3E %3Cmask id='top-sites-b' fill='%23fff'%3E %3Cuse xlink:href='%23top-sites-a'/%3E %3C/mask%3E %3Cg fill='%230F1126' mask='url(%23top-sites-b)'%3E %3Crect width='24' height='24'/%3E %3C/g%3E %3C/g%3E %3C/svg%3E"

/***/ }),

/***/ 1905:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg width='18px' height='20px' viewBox='0 0 18 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 49.1 (51147) - http://www.bohemiancoding.com/sketch --%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E %3Cpath d='M19.5,15.825 L4.5,15.825 C3.675,15.825 3,16.5 3,17.325 L3,20.25 C3,21.075 3.675,21.75 4.5,21.75 L19.5,21.75 C20.325,21.75 21,21.075 21,20.25 L21,17.325 C21,16.5 20.325,15.825 19.5,15.825 Z M18.075,20.25 C17.25,20.25 16.575,19.575 16.575,18.75 C16.575,17.925 17.25,17.25 18.075,17.25 C18.9,17.25 19.575,17.925 19.575,18.75 C19.575,19.575 18.9,20.25 18.075,20.25 Z M18.75,2.25 L5.25,2.25 C3.975,2.25 3,3.3 3,4.65 L3,14.625 C3.45,14.4 3.975,14.25 4.5,14.25 L19.5,14.25 C20.025,14.25 20.55,14.4 21,14.625 L21,4.65 C21,3.3 20.025,2.25 18.75,2.25 Z' id='path-1'%3E%3C/path%3E %3C/defs%3E %3Cg id='Symbols' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='storage' transform='translate(-3.000000, -2.000000)'%3E %3Cg id='Icon-/-32-/-Storage---32'%3E %3Crect id='bouding-box' x='0' y='0' width='24' height='24'%3E%3C/rect%3E %3Cmask id='mask-2' fill='white'%3E %3Cuse xlink:href='%23path-1'%3E%3C/use%3E %3C/mask%3E %3Cg id='Shape' fill-rule='nonzero'%3E%3C/g%3E %3Cg id='Icon-Color' mask='url(%23mask-2)' fill='%230F1126'%3E %3Crect id='Rectangle' x='0' y='0' width='24' height='24'%3E%3C/rect%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/svg%3E"

/***/ }),

/***/ 1906:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24' height='24' viewBox='0 0 24 24'%3E %3Cdefs%3E %3Cpath id='navigation-a' d='M23.5605,10.9395 L14.5605,1.9395 C13.9719317,1.37104169 13.0363728,1.37917144 12.4577721,1.95777214 C11.8791714,2.53637283 11.8710417,3.47193167 12.4395,4.0605 L18.879,10.5 L1.5,10.5 C0.671572875,10.5 1.01453063e-16,11.1715729 0,12 C-1.01453063e-16,12.8284271 0.671572875,13.5 1.5,13.5 L18.879,13.5 L12.4395,19.9395 C12.0495651,20.3161117 11.8931811,20.8738168 12.0304543,21.398261 C12.1677274,21.9227051 12.5772949,22.3322726 13.101739,22.4695457 C13.6261832,22.6068189 14.1838883,22.4504349 14.5605,22.0605 L23.5605,13.0605 C24.1460729,12.4747502 24.1460729,11.5252498 23.5605,10.9395 Z'/%3E %3C/defs%3E %3Cg fill='none' fill-rule='evenodd'%3E %3Crect width='24' height='24'/%3E %3Cmask id='navigation-b' fill='%23fff'%3E %3Cuse xlink:href='%23navigation-a'/%3E %3C/mask%3E %3Cuse fill='%23000' fill-rule='nonzero' xlink:href='%23navigation-a'/%3E %3Cg fill='%230C0C0D' fill-opacity='.8' mask='url(%23navigation-b)'%3E %3Crect width='24' height='24'/%3E %3C/g%3E %3C/g%3E %3C/svg%3E"

/***/ }),

/***/ 1907:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E %3Cpath d='M14.5,8 C13.529,8 13.5,9 12.75,9 C12.3391373,8.99201984 12.0079802,8.66086268 12,8.25 L12,5 C12,4.44771525 11.5522847,4 11,4 L7.75,4 C7.33913732,3.99201984 7.00798016,3.66086268 7,3.25 C7,2.5 8,2.471 8,1.5 C8,0.635 7.1,0 6,0 C4.9,0 4,0.635 4,1.5 C4,2.471 5,2.5 5,3.25 C4.99201984,3.66086268 4.66086268,3.99201984 4.25,4 L1,4 C0.44771525,4 1.52567436e-16,4.44771525 8.49320614e-17,5 L8.49320614e-17,7.25 C0.00798015866,7.66086268 0.339137321,7.99201984 0.75,8 C1.5,8 1.529,7 2.5,7 C3.365,7 4,7.9 4,9 C4,10.1 3.365,11 2.5,11 C1.529,11 1.5,10 0.75,10 C0.339137321,10.0079802 0.00798015866,10.3391373 0,10.75 L0,15 C4.1545134e-17,15.5522847 0.44771525,16 1,16 L4.25,16 C4.66086268,15.9920198 4.99201984,15.6608627 5,15.25 C5,14.5 4,14.471 4,13.5 C4,12.635 4.9,12 6,12 C7.1,12 8,12.635 8,13.5 C8,14.471 7,14.5 7,15.25 C7.00798016,15.6608627 7.33913732,15.9920198 7.75,16 L11,16 C11.5522847,16 12,15.5522847 12,15 L12,11.75 C12.0079802,11.3391373 12.3391373,11.0079802 12.75,11 C13.5,11 13.529,12 14.5,12 C15.365,12 16,11.1 16,10 C16,8.9 15.365,8 14.5,8 Z'/%3E %3C/svg%3E"

/***/ }),

/***/ 1908:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E %3Cpath fill='%23111' d='M4,9.6 C2.672,9.6 1.6,10.672 1.6,12 C1.6,13.048 0.672,13.6 0,13.6 C0.736,14.576 1.992,15.2 3.2,15.2 C4.968,15.2 6.4,13.768 6.4,12 C6.4,10.672 5.328,9.6 4,9.6 Z M14.968,2.104 L13.896,1.032 C13.584,0.72 13.08,0.72 12.768,1.032 L5.6,8.2 L7.8,10.4 L14.968,3.232 C15.28,2.92 15.28,2.416 14.968,2.104 Z'/%3E %3C/svg%3E"

/***/ }),

/***/ 1909:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M20 5h-5a3 3 0 1 0-6 0H4a1 1 0 0 0 0 2h1v12a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V7h1a1 1 0 1 0 0-2zm-8-2a2 2 0 0 1 2 2h-4a2 2 0 0 1 2-2zM7 7v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V7H7zm2.539 2.002a.5.5 0 0 0-.503.498l-.034 8a.5.5 0 0 0 1 .004l.034-8a.5.5 0 0 0-.497-.502zm4.497.498a.5.5 0 0 1 1 .004l-.034 8a.5.5 0 0 1-1-.004l.034-8zM12 9.002a.5.5 0 0 0-.502.498l-.034 8a.5.5 0 0 0 1 .004l.034-8A.5.5 0 0 0 12 9.002z' fill='%230C0C0D' fill-opacity='.8'/%3E%3C/svg%3E"

/***/ }),

/***/ 1910:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M13 4a1 1 0 1 0-2 0v7H4a1 1 0 1 0 0 2h7v7a1 1 0 1 0 2 0v-7h7a1 1 0 1 0 0-2h-7V4z' fill='%230C0C0D' fill-opacity='.8'/%3E%3C/svg%3E"

/***/ }),

/***/ 1911:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='32' viewBox='0 0 30 32'%3E %3Cpath fill='%23D70022' d='M188.955782,274.064695 C188.112772,274.139229 187.471992,274.854718 187.4905,275.700814 L187.4905,285.677529 C187.4905,286.105101 187.143884,286.451717 186.716311,286.451717 C186.288738,286.451717 185.942122,286.105101 185.942122,285.677529 L185.942122,275.18572 C185.96019,274.100585 185.15743,273.176309 184.080456,273.042249 C183.500415,272.984983 182.923194,273.175573 182.491294,273.566967 C182.059394,273.958361 181.813063,274.514086 181.813115,275.096946 L181.813115,285.677529 C181.813115,286.105101 181.466498,286.451717 181.038926,286.451717 C180.611353,286.451717 180.264737,286.105101 180.264737,285.677529 L180.264737,274.153468 C180.282804,273.068333 179.480044,272.144057 178.40307,272.009997 C177.82303,271.952731 177.245808,272.143321 176.813908,272.534715 C176.382008,272.926109 176.135678,273.481834 176.135729,274.064695 L176.135729,285.677529 C176.135729,286.105101 175.789113,286.451717 175.36154,286.451717 C174.933967,286.451717 174.587351,286.105101 174.587351,285.677529 L174.587351,275.18572 C174.605419,274.100585 173.802659,273.176309 172.725685,273.042249 C172.145644,272.984983 171.568423,273.175573 171.136523,273.566967 C170.704623,273.958361 170.458292,274.514086 170.458344,275.096946 L170.458344,291.246011 C170.458451,291.775298 170.188193,292.267969 169.741766,292.552306 C169.29534,292.836643 168.734604,292.873246 168.255002,292.649358 L164.177607,290.746918 C163.393284,290.364073 162.458465,290.468209 161.777621,291.014271 C161.317127,291.400777 161.03692,291.960471 161.003392,292.560736 C160.969865,293.161 161.186002,293.748417 161.60059,294.1838 L167.924681,300.806213 C169.87245,302.846031 172.570042,304.000037 175.390443,304 L180.264737,304 C183.002439,304 185.628012,302.912452 187.56386,300.976604 C189.499708,299.040756 190.587256,296.415183 190.587256,293.677481 L190.587256,275.613072 C190.587869,275.187606 190.41338,274.780633 190.104773,274.487745 C189.796166,274.194856 189.380636,274.041861 188.955782,274.064695 Z' transform='translate(-161 -272)'/%3E %3C/svg%3E"

/***/ }),

/***/ 1912:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='32' viewBox='0 0 36 32'%3E %3Cg fill='%230060DF'%3E %3Cpath d='M11.4285714 8L11.4285714 32 34.2857143 32C34.9171429 32 35.4285714 31.4885714 35.4285714 30.8571429L35.4285714 8 11.4285714 8zM10.2857143 8L-3.46389584e-14 8-3.46389584e-14 30.8571429C-3.46389584e-14 31.4885714.511428571 32 1.14285714 32L10.2857143 32 10.2857143 8zM34.2857143 1.30118138e-13L1.14285714 1.30118138e-13C.511428571 1.30118138e-13 6.39488462e-14.511428571 6.39488462e-14 1.14285714L6.39488462e-14 6.85714286 35.4285714 6.85714286 35.4285714 1.14285714C35.4285714.511428571 34.9171429 1.30118138e-13 34.2857143 1.30118138e-13zM3.42857143 4.57142857C2.79714286 4.57142857 2.28571429 4.06 2.28571429 3.42857143 2.28571429 2.79714286 2.79714286 2.28571429 3.42857143 2.28571429 4.06 2.28571429 4.57142857 2.79714286 4.57142857 3.42857143 4.57142857 4.06 4.06 4.57142857 3.42857143 4.57142857zM7.42857143 4.57142857C6.79714286 4.57142857 6.28571429 4.06 6.28571429 3.42857143 6.28571429 2.79714286 6.79714286 2.28571429 7.42857143 2.28571429 8.06 2.28571429 8.57142857 2.79714286 8.57142857 3.42857143 8.57142857 4.06 8.06 4.57142857 7.42857143 4.57142857zM11.4285714 4.57142857C10.7971429 4.57142857 10.2857143 4.06 10.2857143 3.42857143 10.2857143 2.79714286 10.7971429 2.28571429 11.4285714 2.28571429 12.06 2.28571429 12.5714286 2.79714286 12.5714286 3.42857143 12.5714286 4.06 12.06 4.57142857 11.4285714 4.57142857z'/%3E %3C/g%3E %3C/svg%3E"

/***/ }),

/***/ 1913:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E %3Cpath fill='%238000D7' d='M800.967742,272 L771.032258,272 C770.461935,272 770,272.461935 770,273.032258 L770,302.967742 C770,303.538065 770.461935,304 771.032258,304 L800.967742,304 C801.538065,304 802,303.538065 802,302.967742 L802,273.032258 C802,272.461935 801.538065,272 800.967742,272 Z M788.064516,299.354839 C786.533161,299.354839 785.261419,298.236387 785.014194,296.774194 L774.645161,296.774194 C774.359742,296.774194 774.129032,296.543484 774.129032,296.258065 C774.129032,295.972645 774.359742,295.741935 774.645161,295.741935 L785.014194,295.741935 C785.260903,294.279742 786.532645,293.16129 788.064516,293.16129 C789.772387,293.16129 791.16129,294.550194 791.16129,296.258065 C791.16129,297.965935 789.772387,299.354839 788.064516,299.354839 Z M791.953032,284.307613 L782.146581,290.501161 C782.062452,290.553806 781.966968,290.580645 781.870968,290.580645 C781.78529,290.580645 781.699613,290.559484 781.622194,290.516645 C781.457032,290.425806 781.354839,290.252387 781.354839,290.064516 L781.354839,277.677419 C781.354839,277.489548 781.457032,277.316129 781.622194,277.22529 C781.786323,277.134452 781.987097,277.140645 782.147097,277.240774 L791.953548,283.434323 C792.10271,283.52929 792.193548,283.693935 792.193548,283.870968 C792.193548,284.048 792.10271,284.212645 791.953032,284.307613 Z M797.354839,296.774194 L793.741935,296.774194 C793.456516,296.774194 793.225806,296.543484 793.225806,296.258065 C793.225806,295.972645 793.456516,295.741935 793.741935,295.741935 L797.354839,295.741935 C797.640258,295.741935 797.870968,295.972645 797.870968,296.258065 C797.870968,296.543484 797.640258,296.774194 797.354839,296.774194 Z' transform='translate(-770 -272)'/%3E %3C/svg%3E"

/***/ }),

/***/ 1914:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E %3Cg fill='%23A47F00' fill-rule='evenodd'%3E %3Cpath fill-rule='nonzero' d='M10.875,0 L0.375,0 C0.167893219,-1.26816328e-17 0,0.167893219 0,0.375 L0,2.25 C0.00123979363,3.28501993 0.839980068,4.12376021 1.875,4.125 C1.875,6.19606781 3.55393219,7.875 5.625,7.875 C7.69606781,7.875 9.375,6.19606781 9.375,4.125 C10.4100199,4.12376021 11.2487602,3.28501993 11.25,2.25 L11.25,0.375 C11.25,0.167893219 11.0821068,1.26816328e-17 10.875,0 Z M0.75,2.25 L0.75,0.75 L1.875,0.75 L1.875,3.375 C1.25367966,3.375 0.75,2.87132034 0.75,2.25 Z M10.5,2.25 C10.5,2.87132034 9.99632034,3.375 9.375,3.375 L9.375,0.75 L10.5,0.75 L10.5,2.25 Z'/%3E %3Cpath d='M6,10.137375 L6,8.625 L5.25,8.625 L5.25,10.137375 C3.891375,10.216125 2.625,10.725 2.625,11.625 C2.625,11.8321068 2.79289322,12 3,12 L8.25,12 C8.45710678,12 8.625,11.8321068 8.625,11.625 C8.625,10.725 7.358625,10.216125 6,10.137375 Z'/%3E %3C/g%3E %3C/svg%3E"

/***/ }),

/***/ 1915:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(68);
            var content = __webpack_require__(1916);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 1916:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(69)(false);
// Module
exports.push([module.i, "/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n/* AUTOGENERATED Photon Colors SCSS Variables v3.3.2 */\n/* Font mixins. Changes here affect *all* apps */\n/* Shared mixins. Bear in mind changes here impact *all* apps. */\n/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n/* AUTOGENERATED Photon Colors SCSS Variables v3.3.2 */\n/* Button */\n.Button--neutral {\n  font-family: 'Fira Sans', sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: rgba(12, 12, 13, 0.1);\n  border: 1px solid transparent;\n  border-radius: 2px;\n  cursor: pointer;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  height: 32px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  line-height: 1.3;\n  margin: 0;\n  padding: 0 8px;\n  text-decoration: none;\n  -webkit-transition-duration: all 1050ms, padding 150ms;\n          transition-duration: all 1050ms, padding 150ms;\n  -webkit-transition-property: background-color border-color color;\n  transition-property: background-color border-color color;\n  -webkit-transition-timing-function: cubic-bezier(0.07, 0.95, 0, 1);\n          transition-timing-function: cubic-bezier(0.07, 0.95, 0, 1);\n}\n\n.Button--neutral .Icon {\n  height: 13px;\n  width: 13px;\n}\n\n[dir='ltr'] .Button--neutral .Icon {\n  margin-right: 6px;\n}\n\n[dir='rtl'] .Button--neutral .Icon {\n  margin-left: 6px;\n}\n\n.Button--neutral, .Button--neutral:link {\n  color: #0c0c0d;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.Button--neutral.Button--puffy, .Button--neutral:link.Button--puffy {\n  border-radius: 4px;\n  font-size: 15px;\n  height: auto;\n  min-height: 48px;\n  padding: 0 16px;\n}\n\n.Button--neutral.Button--puffy .Icon, .Button--neutral:link.Button--puffy .Icon {\n  height: 15px;\n  width: 15px;\n}\n\n[dir='ltr'] .Button--neutral.Button--puffy .Icon, [dir='ltr'] .Button--neutral:link.Button--puffy .Icon {\n  margin-right: 8px;\n}\n\n[dir='rtl'] .Button--neutral.Button--puffy .Icon, [dir='rtl'] .Button--neutral:link.Button--puffy .Icon {\n  margin-left: 8px;\n}\n\n.Button--neutral.Button--micro, .Button--neutral:link.Button--micro {\n  letter-spacing: 0.01rem;\n}\n\n.Button--neutral.Button--micro, .Button--neutral.Button--micro:link, .Button--neutral:link.Button--micro, .Button--neutral:link.Button--micro:link {\n  font-size: 11px;\n  height: auto;\n  min-height: 24px;\n}\n\n.Button--neutral.Button--micro .Icon, .Button--neutral:link.Button--micro .Icon {\n  height: 11px;\n  width: 11px;\n}\n\n[dir='ltr'] .Button--neutral.Button--micro .Icon, [dir='ltr'] .Button--neutral:link.Button--micro .Icon {\n  margin-right: 4px;\n}\n\n[dir='rtl'] .Button--neutral.Button--micro .Icon, [dir='rtl'] .Button--neutral:link.Button--micro .Icon {\n  margin-left: 4px;\n}\n\n.Button--neutral.Button--micro:active:not(.Button--disabled), .Button--neutral:link.Button--micro:active:not(.Button--disabled) {\n  padding-top: 1px;\n}\n\n.Button--neutral:not(.Button--disabled):hover, .Button--neutral.Button--micro:not(.Button--disabled):hover {\n  background: rgba(12, 12, 13, 0.2);\n}\n\n.Button--neutral:not(.Button--disabled):active:not(.Button--disabled), .Button--neutral.Button--micro:not(.Button--disabled):active:not(.Button--disabled) {\n  background: rgba(12, 12, 13, 0.3);\n  padding-top: 1px;\n}\n\n.Button--neutral:focus {\n  -webkit-box-shadow: 0 0 0 1px #0a84ff inset, 0 0 0 1px #0a84ff, 0 0 0 4px rgba(10, 132, 255, 0.3);\n          box-shadow: 0 0 0 1px #0a84ff inset, 0 0 0 1px #0a84ff, 0 0 0 4px rgba(10, 132, 255, 0.3);\n  outline: none;\n}\n\n.Button--neutral:focus:not(.focus-visible) {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n\n.Button--neutral.Button--disabled {\n  cursor: not-allowed;\n  opacity: 0.4;\n}\n\n.Button--neutral::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n.Button--light {\n  font-family: 'Fira Sans', sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: #fff;\n  border: 1px solid transparent;\n  border-radius: 2px;\n  cursor: pointer;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  height: 32px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  line-height: 1.3;\n  margin: 0;\n  padding: 0 8px;\n  text-decoration: none;\n  -webkit-transition-duration: all 1050ms, padding 150ms;\n          transition-duration: all 1050ms, padding 150ms;\n  -webkit-transition-property: background-color border-color color;\n  transition-property: background-color border-color color;\n  -webkit-transition-timing-function: cubic-bezier(0.07, 0.95, 0, 1);\n          transition-timing-function: cubic-bezier(0.07, 0.95, 0, 1);\n}\n\n.Button--light .Icon {\n  height: 13px;\n  width: 13px;\n}\n\n[dir='ltr'] .Button--light .Icon {\n  margin-right: 6px;\n}\n\n[dir='rtl'] .Button--light .Icon {\n  margin-left: 6px;\n}\n\n.Button--light, .Button--light:link {\n  color: #343a40;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.Button--light.Button--puffy, .Button--light:link.Button--puffy {\n  border-radius: 4px;\n  font-size: 15px;\n  height: auto;\n  min-height: 48px;\n  padding: 0 16px;\n}\n\n.Button--light.Button--puffy .Icon, .Button--light:link.Button--puffy .Icon {\n  height: 15px;\n  width: 15px;\n}\n\n[dir='ltr'] .Button--light.Button--puffy .Icon, [dir='ltr'] .Button--light:link.Button--puffy .Icon {\n  margin-right: 8px;\n}\n\n[dir='rtl'] .Button--light.Button--puffy .Icon, [dir='rtl'] .Button--light:link.Button--puffy .Icon {\n  margin-left: 8px;\n}\n\n.Button--light.Button--micro, .Button--light:link.Button--micro {\n  letter-spacing: 0.01rem;\n}\n\n.Button--light.Button--micro, .Button--light.Button--micro:link, .Button--light:link.Button--micro, .Button--light:link.Button--micro:link {\n  font-size: 11px;\n  height: auto;\n  min-height: 24px;\n}\n\n.Button--light.Button--micro .Icon, .Button--light:link.Button--micro .Icon {\n  height: 11px;\n  width: 11px;\n}\n\n[dir='ltr'] .Button--light.Button--micro .Icon, [dir='ltr'] .Button--light:link.Button--micro .Icon {\n  margin-right: 4px;\n}\n\n[dir='rtl'] .Button--light.Button--micro .Icon, [dir='rtl'] .Button--light:link.Button--micro .Icon {\n  margin-left: 4px;\n}\n\n.Button--light.Button--micro:active:not(.Button--disabled), .Button--light:link.Button--micro:active:not(.Button--disabled) {\n  padding-top: 1px;\n}\n\n.Button--light:not(.Button--disabled):hover, .Button--light.Button--micro:not(.Button--disabled):hover {\n  background: #ededf0;\n}\n\n.Button--light:not(.Button--disabled):active:not(.Button--disabled), .Button--light.Button--micro:not(.Button--disabled):active:not(.Button--disabled) {\n  background: #f9f9fa;\n  padding-top: 1px;\n}\n\n.Button--light:focus {\n  -webkit-box-shadow: 0 0 0 1px #0a84ff inset, 0 0 0 1px #0a84ff, 0 0 0 4px rgba(10, 132, 255, 0.3);\n          box-shadow: 0 0 0 1px #0a84ff inset, 0 0 0 1px #0a84ff, 0 0 0 4px rgba(10, 132, 255, 0.3);\n  outline: none;\n}\n\n.Button--light:focus:not(.focus-visible) {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n\n.Button--light.Button--disabled {\n  cursor: not-allowed;\n  opacity: 0.4;\n}\n\n.Button--light::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n.Button--action {\n  font-family: 'Fira Sans', sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: #0060df;\n  border: 1px solid transparent;\n  border-radius: 2px;\n  cursor: pointer;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  height: 32px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  line-height: 1.3;\n  margin: 0;\n  padding: 0 8px;\n  text-decoration: none;\n  -webkit-transition-duration: all 1050ms, padding 150ms;\n          transition-duration: all 1050ms, padding 150ms;\n  -webkit-transition-property: background-color border-color color;\n  transition-property: background-color border-color color;\n  -webkit-transition-timing-function: cubic-bezier(0.07, 0.95, 0, 1);\n          transition-timing-function: cubic-bezier(0.07, 0.95, 0, 1);\n}\n\n.Button--action .Icon {\n  height: 13px;\n  width: 13px;\n}\n\n[dir='ltr'] .Button--action .Icon {\n  margin-right: 6px;\n}\n\n[dir='rtl'] .Button--action .Icon {\n  margin-left: 6px;\n}\n\n.Button--action, .Button--action:link {\n  color: #fff;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.Button--action.Button--puffy, .Button--action:link.Button--puffy {\n  border-radius: 4px;\n  font-size: 15px;\n  height: auto;\n  min-height: 48px;\n  padding: 0 16px;\n}\n\n.Button--action.Button--puffy .Icon, .Button--action:link.Button--puffy .Icon {\n  height: 15px;\n  width: 15px;\n}\n\n[dir='ltr'] .Button--action.Button--puffy .Icon, [dir='ltr'] .Button--action:link.Button--puffy .Icon {\n  margin-right: 8px;\n}\n\n[dir='rtl'] .Button--action.Button--puffy .Icon, [dir='rtl'] .Button--action:link.Button--puffy .Icon {\n  margin-left: 8px;\n}\n\n.Button--action.Button--micro, .Button--action:link.Button--micro {\n  letter-spacing: 0.01rem;\n}\n\n.Button--action.Button--micro, .Button--action.Button--micro:link, .Button--action:link.Button--micro, .Button--action:link.Button--micro:link {\n  font-size: 11px;\n  height: auto;\n  min-height: 24px;\n}\n\n.Button--action.Button--micro .Icon, .Button--action:link.Button--micro .Icon {\n  height: 11px;\n  width: 11px;\n}\n\n[dir='ltr'] .Button--action.Button--micro .Icon, [dir='ltr'] .Button--action:link.Button--micro .Icon {\n  margin-right: 4px;\n}\n\n[dir='rtl'] .Button--action.Button--micro .Icon, [dir='rtl'] .Button--action:link.Button--micro .Icon {\n  margin-left: 4px;\n}\n\n.Button--action.Button--micro:active:not(.Button--disabled), .Button--action:link.Button--micro:active:not(.Button--disabled) {\n  padding-top: 1px;\n}\n\n.Button--action:not(.Button--disabled):hover, .Button--action.Button--micro:not(.Button--disabled):hover {\n  background: #003eaa;\n}\n\n.Button--action:not(.Button--disabled):active:not(.Button--disabled), .Button--action.Button--micro:not(.Button--disabled):active:not(.Button--disabled) {\n  background: #002275;\n  padding-top: 1px;\n}\n\n.Button--action:focus {\n  -webkit-box-shadow: 0 0 0 1px #0a84ff inset, 0 0 0 1px #0a84ff, 0 0 0 4px rgba(10, 132, 255, 0.3);\n          box-shadow: 0 0 0 1px #0a84ff inset, 0 0 0 1px #0a84ff, 0 0 0 4px rgba(10, 132, 255, 0.3);\n  outline: none;\n}\n\n.Button--action:focus:not(.focus-visible) {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n\n.Button--action.Button--disabled {\n  cursor: not-allowed;\n  opacity: 0.4;\n}\n\n.Button--action::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n.Button--confirm {\n  font-family: 'Fira Sans', sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: #12bc00;\n  border: 1px solid transparent;\n  border-radius: 2px;\n  cursor: pointer;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  height: 32px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  line-height: 1.3;\n  margin: 0;\n  padding: 0 8px;\n  text-decoration: none;\n  -webkit-transition-duration: all 1050ms, padding 150ms;\n          transition-duration: all 1050ms, padding 150ms;\n  -webkit-transition-property: background-color border-color color;\n  transition-property: background-color border-color color;\n  -webkit-transition-timing-function: cubic-bezier(0.07, 0.95, 0, 1);\n          transition-timing-function: cubic-bezier(0.07, 0.95, 0, 1);\n}\n\n.Button--confirm .Icon {\n  height: 13px;\n  width: 13px;\n}\n\n[dir='ltr'] .Button--confirm .Icon {\n  margin-right: 6px;\n}\n\n[dir='rtl'] .Button--confirm .Icon {\n  margin-left: 6px;\n}\n\n.Button--confirm, .Button--confirm:link {\n  color: #fff;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.Button--confirm.Button--puffy, .Button--confirm:link.Button--puffy {\n  border-radius: 4px;\n  font-size: 15px;\n  height: auto;\n  min-height: 48px;\n  padding: 0 16px;\n}\n\n.Button--confirm.Button--puffy .Icon, .Button--confirm:link.Button--puffy .Icon {\n  height: 15px;\n  width: 15px;\n}\n\n[dir='ltr'] .Button--confirm.Button--puffy .Icon, [dir='ltr'] .Button--confirm:link.Button--puffy .Icon {\n  margin-right: 8px;\n}\n\n[dir='rtl'] .Button--confirm.Button--puffy .Icon, [dir='rtl'] .Button--confirm:link.Button--puffy .Icon {\n  margin-left: 8px;\n}\n\n.Button--confirm.Button--micro, .Button--confirm:link.Button--micro {\n  letter-spacing: 0.01rem;\n}\n\n.Button--confirm.Button--micro, .Button--confirm.Button--micro:link, .Button--confirm:link.Button--micro, .Button--confirm:link.Button--micro:link {\n  font-size: 11px;\n  height: auto;\n  min-height: 24px;\n}\n\n.Button--confirm.Button--micro .Icon, .Button--confirm:link.Button--micro .Icon {\n  height: 11px;\n  width: 11px;\n}\n\n[dir='ltr'] .Button--confirm.Button--micro .Icon, [dir='ltr'] .Button--confirm:link.Button--micro .Icon {\n  margin-right: 4px;\n}\n\n[dir='rtl'] .Button--confirm.Button--micro .Icon, [dir='rtl'] .Button--confirm:link.Button--micro .Icon {\n  margin-left: 4px;\n}\n\n.Button--confirm.Button--micro:active:not(.Button--disabled), .Button--confirm:link.Button--micro:active:not(.Button--disabled) {\n  padding-top: 1px;\n}\n\n.Button--confirm:not(.Button--disabled):hover, .Button--confirm.Button--micro:not(.Button--disabled):hover {\n  background: #006504;\n}\n\n.Button--confirm:not(.Button--disabled):active:not(.Button--disabled), .Button--confirm.Button--micro:not(.Button--disabled):active:not(.Button--disabled) {\n  background: #058b00;\n  padding-top: 1px;\n}\n\n.Button--confirm:focus {\n  -webkit-box-shadow: 0 0 0 1px #0a84ff inset, 0 0 0 1px #0a84ff, 0 0 0 4px rgba(10, 132, 255, 0.3);\n          box-shadow: 0 0 0 1px #0a84ff inset, 0 0 0 1px #0a84ff, 0 0 0 4px rgba(10, 132, 255, 0.3);\n  outline: none;\n}\n\n.Button--confirm:focus:not(.focus-visible) {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n\n.Button--confirm.Button--disabled {\n  cursor: not-allowed;\n  opacity: 0.4;\n}\n\n.Button--confirm::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n.Button--warning {\n  font-family: 'Fira Sans', sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: #ffe900;\n  border: 1px solid transparent;\n  border-radius: 2px;\n  cursor: pointer;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  height: 32px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  line-height: 1.3;\n  margin: 0;\n  padding: 0 8px;\n  text-decoration: none;\n  -webkit-transition-duration: all 1050ms, padding 150ms;\n          transition-duration: all 1050ms, padding 150ms;\n  -webkit-transition-property: background-color border-color color;\n  transition-property: background-color border-color color;\n  -webkit-transition-timing-function: cubic-bezier(0.07, 0.95, 0, 1);\n          transition-timing-function: cubic-bezier(0.07, 0.95, 0, 1);\n}\n\n.Button--warning .Icon {\n  height: 13px;\n  width: 13px;\n}\n\n[dir='ltr'] .Button--warning .Icon {\n  margin-right: 6px;\n}\n\n[dir='rtl'] .Button--warning .Icon {\n  margin-left: 6px;\n}\n\n.Button--warning, .Button--warning:link {\n  color: #fff;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.Button--warning.Button--puffy, .Button--warning:link.Button--puffy {\n  border-radius: 4px;\n  font-size: 15px;\n  height: auto;\n  min-height: 48px;\n  padding: 0 16px;\n}\n\n.Button--warning.Button--puffy .Icon, .Button--warning:link.Button--puffy .Icon {\n  height: 15px;\n  width: 15px;\n}\n\n[dir='ltr'] .Button--warning.Button--puffy .Icon, [dir='ltr'] .Button--warning:link.Button--puffy .Icon {\n  margin-right: 8px;\n}\n\n[dir='rtl'] .Button--warning.Button--puffy .Icon, [dir='rtl'] .Button--warning:link.Button--puffy .Icon {\n  margin-left: 8px;\n}\n\n.Button--warning.Button--micro, .Button--warning:link.Button--micro {\n  letter-spacing: 0.01rem;\n}\n\n.Button--warning.Button--micro, .Button--warning.Button--micro:link, .Button--warning:link.Button--micro, .Button--warning:link.Button--micro:link {\n  font-size: 11px;\n  height: auto;\n  min-height: 24px;\n}\n\n.Button--warning.Button--micro .Icon, .Button--warning:link.Button--micro .Icon {\n  height: 11px;\n  width: 11px;\n}\n\n[dir='ltr'] .Button--warning.Button--micro .Icon, [dir='ltr'] .Button--warning:link.Button--micro .Icon {\n  margin-right: 4px;\n}\n\n[dir='rtl'] .Button--warning.Button--micro .Icon, [dir='rtl'] .Button--warning:link.Button--micro .Icon {\n  margin-left: 4px;\n}\n\n.Button--warning.Button--micro:active:not(.Button--disabled), .Button--warning:link.Button--micro:active:not(.Button--disabled) {\n  padding-top: 1px;\n}\n\n.Button--warning:not(.Button--disabled):hover, .Button--warning.Button--micro:not(.Button--disabled):hover {\n  background: #a47f00;\n}\n\n.Button--warning:not(.Button--disabled):active:not(.Button--disabled), .Button--warning.Button--micro:not(.Button--disabled):active:not(.Button--disabled) {\n  background: #d7b600;\n  padding-top: 1px;\n}\n\n.Button--warning:focus {\n  -webkit-box-shadow: 0 0 0 1px #0a84ff inset, 0 0 0 1px #0a84ff, 0 0 0 4px rgba(10, 132, 255, 0.3);\n          box-shadow: 0 0 0 1px #0a84ff inset, 0 0 0 1px #0a84ff, 0 0 0 4px rgba(10, 132, 255, 0.3);\n  outline: none;\n}\n\n.Button--warning:focus:not(.focus-visible) {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n\n.Button--warning.Button--disabled {\n  cursor: not-allowed;\n  opacity: 0.4;\n}\n\n.Button--warning::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n.Button--alert {\n  font-family: 'Fira Sans', sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: #d70022;\n  border: 1px solid transparent;\n  border-radius: 2px;\n  cursor: pointer;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  height: 32px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  line-height: 1.3;\n  margin: 0;\n  padding: 0 8px;\n  text-decoration: none;\n  -webkit-transition-duration: all 1050ms, padding 150ms;\n          transition-duration: all 1050ms, padding 150ms;\n  -webkit-transition-property: background-color border-color color;\n  transition-property: background-color border-color color;\n  -webkit-transition-timing-function: cubic-bezier(0.07, 0.95, 0, 1);\n          transition-timing-function: cubic-bezier(0.07, 0.95, 0, 1);\n}\n\n.Button--alert .Icon {\n  height: 13px;\n  width: 13px;\n}\n\n[dir='ltr'] .Button--alert .Icon {\n  margin-right: 6px;\n}\n\n[dir='rtl'] .Button--alert .Icon {\n  margin-left: 6px;\n}\n\n.Button--alert, .Button--alert:link {\n  color: #fff;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.Button--alert.Button--puffy, .Button--alert:link.Button--puffy {\n  border-radius: 4px;\n  font-size: 15px;\n  height: auto;\n  min-height: 48px;\n  padding: 0 16px;\n}\n\n.Button--alert.Button--puffy .Icon, .Button--alert:link.Button--puffy .Icon {\n  height: 15px;\n  width: 15px;\n}\n\n[dir='ltr'] .Button--alert.Button--puffy .Icon, [dir='ltr'] .Button--alert:link.Button--puffy .Icon {\n  margin-right: 8px;\n}\n\n[dir='rtl'] .Button--alert.Button--puffy .Icon, [dir='rtl'] .Button--alert:link.Button--puffy .Icon {\n  margin-left: 8px;\n}\n\n.Button--alert.Button--micro, .Button--alert:link.Button--micro {\n  letter-spacing: 0.01rem;\n}\n\n.Button--alert.Button--micro, .Button--alert.Button--micro:link, .Button--alert:link.Button--micro, .Button--alert:link.Button--micro:link {\n  font-size: 11px;\n  height: auto;\n  min-height: 24px;\n}\n\n.Button--alert.Button--micro .Icon, .Button--alert:link.Button--micro .Icon {\n  height: 11px;\n  width: 11px;\n}\n\n[dir='ltr'] .Button--alert.Button--micro .Icon, [dir='ltr'] .Button--alert:link.Button--micro .Icon {\n  margin-right: 4px;\n}\n\n[dir='rtl'] .Button--alert.Button--micro .Icon, [dir='rtl'] .Button--alert:link.Button--micro .Icon {\n  margin-left: 4px;\n}\n\n.Button--alert.Button--micro:active:not(.Button--disabled), .Button--alert:link.Button--micro:active:not(.Button--disabled) {\n  padding-top: 1px;\n}\n\n.Button--alert:not(.Button--disabled):hover, .Button--alert.Button--micro:not(.Button--disabled):hover {\n  background: #a4000f;\n}\n\n.Button--alert:not(.Button--disabled):active:not(.Button--disabled), .Button--alert.Button--micro:not(.Button--disabled):active:not(.Button--disabled) {\n  background: #5a0002;\n  padding-top: 1px;\n}\n\n.Button--alert:focus {\n  -webkit-box-shadow: 0 0 0 1px #0a84ff inset, 0 0 0 1px #0a84ff, 0 0 0 4px rgba(10, 132, 255, 0.3);\n          box-shadow: 0 0 0 1px #0a84ff inset, 0 0 0 1px #0a84ff, 0 0 0 4px rgba(10, 132, 255, 0.3);\n  outline: none;\n}\n\n.Button--alert:focus:not(.focus-visible) {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n\n.Button--alert.Button--disabled {\n  cursor: not-allowed;\n  opacity: 0.4;\n}\n\n.Button--alert::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n.Button--cancel {\n  font-family: 'Fira Sans', sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: transparent;\n  border: 1px solid transparent;\n  border-radius: 2px;\n  cursor: pointer;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  height: 32px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  line-height: 1.3;\n  margin: 0;\n  padding: 0 8px;\n  text-decoration: none;\n  -webkit-transition-duration: all 1050ms, padding 150ms;\n          transition-duration: all 1050ms, padding 150ms;\n  -webkit-transition-property: background-color border-color color;\n  transition-property: background-color border-color color;\n  -webkit-transition-timing-function: cubic-bezier(0.07, 0.95, 0, 1);\n          transition-timing-function: cubic-bezier(0.07, 0.95, 0, 1);\n}\n\n.Button--cancel .Icon {\n  height: 13px;\n  width: 13px;\n}\n\n[dir='ltr'] .Button--cancel .Icon {\n  margin-right: 6px;\n}\n\n[dir='rtl'] .Button--cancel .Icon {\n  margin-left: 6px;\n}\n\n.Button--cancel, .Button--cancel:link {\n  color: #343a40;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.Button--cancel.Button--puffy, .Button--cancel:link.Button--puffy {\n  border-radius: 4px;\n  font-size: 15px;\n  height: auto;\n  min-height: 48px;\n  padding: 0 16px;\n}\n\n.Button--cancel.Button--puffy .Icon, .Button--cancel:link.Button--puffy .Icon {\n  height: 15px;\n  width: 15px;\n}\n\n[dir='ltr'] .Button--cancel.Button--puffy .Icon, [dir='ltr'] .Button--cancel:link.Button--puffy .Icon {\n  margin-right: 8px;\n}\n\n[dir='rtl'] .Button--cancel.Button--puffy .Icon, [dir='rtl'] .Button--cancel:link.Button--puffy .Icon {\n  margin-left: 8px;\n}\n\n.Button--cancel.Button--micro, .Button--cancel:link.Button--micro {\n  letter-spacing: 0.01rem;\n}\n\n.Button--cancel.Button--micro, .Button--cancel.Button--micro:link, .Button--cancel:link.Button--micro, .Button--cancel:link.Button--micro:link {\n  font-size: 11px;\n  height: auto;\n  min-height: 24px;\n}\n\n.Button--cancel.Button--micro .Icon, .Button--cancel:link.Button--micro .Icon {\n  height: 11px;\n  width: 11px;\n}\n\n[dir='ltr'] .Button--cancel.Button--micro .Icon, [dir='ltr'] .Button--cancel:link.Button--micro .Icon {\n  margin-right: 4px;\n}\n\n[dir='rtl'] .Button--cancel.Button--micro .Icon, [dir='rtl'] .Button--cancel:link.Button--micro .Icon {\n  margin-left: 4px;\n}\n\n.Button--cancel.Button--micro:active:not(.Button--disabled), .Button--cancel:link.Button--micro:active:not(.Button--disabled) {\n  padding-top: 1px;\n}\n\n.Button--cancel:not(.Button--disabled):hover, .Button--cancel.Button--micro:not(.Button--disabled):hover {\n  background: transparent;\n}\n\n.Button--cancel:not(.Button--disabled):active:not(.Button--disabled), .Button--cancel.Button--micro:not(.Button--disabled):active:not(.Button--disabled) {\n  background: transparent;\n  padding-top: 1px;\n}\n\n.Button--cancel:focus {\n  -webkit-box-shadow: 0 0 0 1px #0a84ff inset, 0 0 0 1px #0a84ff, 0 0 0 4px rgba(10, 132, 255, 0.3);\n          box-shadow: 0 0 0 1px #0a84ff inset, 0 0 0 1px #0a84ff, 0 0 0 4px rgba(10, 132, 255, 0.3);\n  outline: none;\n}\n\n.Button--cancel:focus:not(.focus-visible) {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n\n.Button--cancel.Button--disabled {\n  cursor: not-allowed;\n  opacity: 0.4;\n}\n\n.Button--cancel::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n", ""]);



/***/ }),

/***/ 1917:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(68);
            var content = __webpack_require__(1918);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 1918:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(69)(false);
// Module
exports.push([module.i, "/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n/* AUTOGENERATED Photon Colors SCSS Variables v3.3.2 */\n/* Font mixins. Changes here affect *all* apps */\n/* Shared mixins. Bear in mind changes here impact *all* apps. */\n/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n/* AUTOGENERATED Photon Colors SCSS Variables v3.3.2 */\n.IconXMark-svg {\n  height: 16px;\n  width: 16px;\n}\n", ""]);



/***/ }),

/***/ 1919:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(68);
            var content = __webpack_require__(1920);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 1920:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(69)(false);
// Imports
var urlEscape = __webpack_require__(718);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(1921));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(1922));
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(1923));
var ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(1924));
var ___CSS_LOADER_URL___4___ = urlEscape(__webpack_require__(1925));

// Module
exports.push([module.i, "/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n/* AUTOGENERATED Photon Colors SCSS Variables v3.3.2 */\n/* Font mixins. Changes here affect *all* apps */\n/* Shared mixins. Bear in mind changes here impact *all* apps. */\n/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n/* AUTOGENERATED Photon Colors SCSS Variables v3.3.2 */\n/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n/* AUTOGENERATED Photon Colors SCSS Variables v3.3.2 */\n/* Font mixins. Changes here affect *all* apps */\n/* Shared mixins. Bear in mind changes here impact *all* apps. */\n/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n/* AUTOGENERATED Photon Colors SCSS Variables v3.3.2 */\n/* Button */\n.Button--neutral {\n  font-family: 'Fira Sans', sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: rgba(12, 12, 13, 0.1);\n  border: 1px solid transparent;\n  border-radius: 2px;\n  cursor: pointer;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  height: 32px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  line-height: 1.3;\n  margin: 0;\n  padding: 0 8px;\n  text-decoration: none;\n  -webkit-transition-duration: all 1050ms, padding 150ms;\n          transition-duration: all 1050ms, padding 150ms;\n  -webkit-transition-property: background-color border-color color;\n  transition-property: background-color border-color color;\n  -webkit-transition-timing-function: cubic-bezier(0.07, 0.95, 0, 1);\n          transition-timing-function: cubic-bezier(0.07, 0.95, 0, 1);\n}\n\n.Button--neutral .Icon {\n  height: 13px;\n  width: 13px;\n}\n\n[dir='ltr'] .Button--neutral .Icon {\n  margin-right: 6px;\n}\n\n[dir='rtl'] .Button--neutral .Icon {\n  margin-left: 6px;\n}\n\n.Button--neutral, .Button--neutral:link {\n  color: #0c0c0d;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.Button--neutral.Button--puffy, .Button--neutral:link.Button--puffy {\n  border-radius: 4px;\n  font-size: 15px;\n  height: auto;\n  min-height: 48px;\n  padding: 0 16px;\n}\n\n.Button--neutral.Button--puffy .Icon, .Button--neutral:link.Button--puffy .Icon {\n  height: 15px;\n  width: 15px;\n}\n\n[dir='ltr'] .Button--neutral.Button--puffy .Icon, [dir='ltr'] .Button--neutral:link.Button--puffy .Icon {\n  margin-right: 8px;\n}\n\n[dir='rtl'] .Button--neutral.Button--puffy .Icon, [dir='rtl'] .Button--neutral:link.Button--puffy .Icon {\n  margin-left: 8px;\n}\n\n.Button--neutral.Button--micro, .Button--neutral:link.Button--micro {\n  letter-spacing: 0.01rem;\n}\n\n.Button--neutral.Button--micro, .Button--neutral.Button--micro:link, .Button--neutral:link.Button--micro, .Button--neutral:link.Button--micro:link {\n  font-size: 11px;\n  height: auto;\n  min-height: 24px;\n}\n\n.Button--neutral.Button--micro .Icon, .Button--neutral:link.Button--micro .Icon {\n  height: 11px;\n  width: 11px;\n}\n\n[dir='ltr'] .Button--neutral.Button--micro .Icon, [dir='ltr'] .Button--neutral:link.Button--micro .Icon {\n  margin-right: 4px;\n}\n\n[dir='rtl'] .Button--neutral.Button--micro .Icon, [dir='rtl'] .Button--neutral:link.Button--micro .Icon {\n  margin-left: 4px;\n}\n\n.Button--neutral.Button--micro:active:not(.Button--disabled), .Button--neutral:link.Button--micro:active:not(.Button--disabled) {\n  padding-top: 1px;\n}\n\n.Button--neutral:not(.Button--disabled):hover, .Button--neutral.Button--micro:not(.Button--disabled):hover {\n  background: rgba(12, 12, 13, 0.2);\n}\n\n.Button--neutral:not(.Button--disabled):active:not(.Button--disabled), .Button--neutral.Button--micro:not(.Button--disabled):active:not(.Button--disabled) {\n  background: rgba(12, 12, 13, 0.3);\n  padding-top: 1px;\n}\n\n.Button--neutral:focus {\n  -webkit-box-shadow: 0 0 0 1px #0a84ff inset, 0 0 0 1px #0a84ff, 0 0 0 4px rgba(10, 132, 255, 0.3);\n          box-shadow: 0 0 0 1px #0a84ff inset, 0 0 0 1px #0a84ff, 0 0 0 4px rgba(10, 132, 255, 0.3);\n  outline: none;\n}\n\n.Button--neutral:focus:not(.focus-visible) {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n\n.Button--neutral.Button--disabled {\n  cursor: not-allowed;\n  opacity: 0.4;\n}\n\n.Button--neutral::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n.Button--light {\n  font-family: 'Fira Sans', sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: #fff;\n  border: 1px solid transparent;\n  border-radius: 2px;\n  cursor: pointer;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  height: 32px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  line-height: 1.3;\n  margin: 0;\n  padding: 0 8px;\n  text-decoration: none;\n  -webkit-transition-duration: all 1050ms, padding 150ms;\n          transition-duration: all 1050ms, padding 150ms;\n  -webkit-transition-property: background-color border-color color;\n  transition-property: background-color border-color color;\n  -webkit-transition-timing-function: cubic-bezier(0.07, 0.95, 0, 1);\n          transition-timing-function: cubic-bezier(0.07, 0.95, 0, 1);\n}\n\n.Button--light .Icon {\n  height: 13px;\n  width: 13px;\n}\n\n[dir='ltr'] .Button--light .Icon {\n  margin-right: 6px;\n}\n\n[dir='rtl'] .Button--light .Icon {\n  margin-left: 6px;\n}\n\n.Button--light, .Button--light:link {\n  color: #343a40;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.Button--light.Button--puffy, .Button--light:link.Button--puffy {\n  border-radius: 4px;\n  font-size: 15px;\n  height: auto;\n  min-height: 48px;\n  padding: 0 16px;\n}\n\n.Button--light.Button--puffy .Icon, .Button--light:link.Button--puffy .Icon {\n  height: 15px;\n  width: 15px;\n}\n\n[dir='ltr'] .Button--light.Button--puffy .Icon, [dir='ltr'] .Button--light:link.Button--puffy .Icon {\n  margin-right: 8px;\n}\n\n[dir='rtl'] .Button--light.Button--puffy .Icon, [dir='rtl'] .Button--light:link.Button--puffy .Icon {\n  margin-left: 8px;\n}\n\n.Button--light.Button--micro, .Button--light:link.Button--micro {\n  letter-spacing: 0.01rem;\n}\n\n.Button--light.Button--micro, .Button--light.Button--micro:link, .Button--light:link.Button--micro, .Button--light:link.Button--micro:link {\n  font-size: 11px;\n  height: auto;\n  min-height: 24px;\n}\n\n.Button--light.Button--micro .Icon, .Button--light:link.Button--micro .Icon {\n  height: 11px;\n  width: 11px;\n}\n\n[dir='ltr'] .Button--light.Button--micro .Icon, [dir='ltr'] .Button--light:link.Button--micro .Icon {\n  margin-right: 4px;\n}\n\n[dir='rtl'] .Button--light.Button--micro .Icon, [dir='rtl'] .Button--light:link.Button--micro .Icon {\n  margin-left: 4px;\n}\n\n.Button--light.Button--micro:active:not(.Button--disabled), .Button--light:link.Button--micro:active:not(.Button--disabled) {\n  padding-top: 1px;\n}\n\n.Button--light:not(.Button--disabled):hover, .Button--light.Button--micro:not(.Button--disabled):hover {\n  background: #ededf0;\n}\n\n.Button--light:not(.Button--disabled):active:not(.Button--disabled), .Button--light.Button--micro:not(.Button--disabled):active:not(.Button--disabled) {\n  background: #f9f9fa;\n  padding-top: 1px;\n}\n\n.Button--light:focus {\n  -webkit-box-shadow: 0 0 0 1px #0a84ff inset, 0 0 0 1px #0a84ff, 0 0 0 4px rgba(10, 132, 255, 0.3);\n          box-shadow: 0 0 0 1px #0a84ff inset, 0 0 0 1px #0a84ff, 0 0 0 4px rgba(10, 132, 255, 0.3);\n  outline: none;\n}\n\n.Button--light:focus:not(.focus-visible) {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n\n.Button--light.Button--disabled {\n  cursor: not-allowed;\n  opacity: 0.4;\n}\n\n.Button--light::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n.Button--action {\n  font-family: 'Fira Sans', sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: #0060df;\n  border: 1px solid transparent;\n  border-radius: 2px;\n  cursor: pointer;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  height: 32px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  line-height: 1.3;\n  margin: 0;\n  padding: 0 8px;\n  text-decoration: none;\n  -webkit-transition-duration: all 1050ms, padding 150ms;\n          transition-duration: all 1050ms, padding 150ms;\n  -webkit-transition-property: background-color border-color color;\n  transition-property: background-color border-color color;\n  -webkit-transition-timing-function: cubic-bezier(0.07, 0.95, 0, 1);\n          transition-timing-function: cubic-bezier(0.07, 0.95, 0, 1);\n}\n\n.Button--action .Icon {\n  height: 13px;\n  width: 13px;\n}\n\n[dir='ltr'] .Button--action .Icon {\n  margin-right: 6px;\n}\n\n[dir='rtl'] .Button--action .Icon {\n  margin-left: 6px;\n}\n\n.Button--action, .Button--action:link {\n  color: #fff;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.Button--action.Button--puffy, .Button--action:link.Button--puffy {\n  border-radius: 4px;\n  font-size: 15px;\n  height: auto;\n  min-height: 48px;\n  padding: 0 16px;\n}\n\n.Button--action.Button--puffy .Icon, .Button--action:link.Button--puffy .Icon {\n  height: 15px;\n  width: 15px;\n}\n\n[dir='ltr'] .Button--action.Button--puffy .Icon, [dir='ltr'] .Button--action:link.Button--puffy .Icon {\n  margin-right: 8px;\n}\n\n[dir='rtl'] .Button--action.Button--puffy .Icon, [dir='rtl'] .Button--action:link.Button--puffy .Icon {\n  margin-left: 8px;\n}\n\n.Button--action.Button--micro, .Button--action:link.Button--micro {\n  letter-spacing: 0.01rem;\n}\n\n.Button--action.Button--micro, .Button--action.Button--micro:link, .Button--action:link.Button--micro, .Button--action:link.Button--micro:link {\n  font-size: 11px;\n  height: auto;\n  min-height: 24px;\n}\n\n.Button--action.Button--micro .Icon, .Button--action:link.Button--micro .Icon {\n  height: 11px;\n  width: 11px;\n}\n\n[dir='ltr'] .Button--action.Button--micro .Icon, [dir='ltr'] .Button--action:link.Button--micro .Icon {\n  margin-right: 4px;\n}\n\n[dir='rtl'] .Button--action.Button--micro .Icon, [dir='rtl'] .Button--action:link.Button--micro .Icon {\n  margin-left: 4px;\n}\n\n.Button--action.Button--micro:active:not(.Button--disabled), .Button--action:link.Button--micro:active:not(.Button--disabled) {\n  padding-top: 1px;\n}\n\n.Button--action:not(.Button--disabled):hover, .Button--action.Button--micro:not(.Button--disabled):hover {\n  background: #003eaa;\n}\n\n.Button--action:not(.Button--disabled):active:not(.Button--disabled), .Button--action.Button--micro:not(.Button--disabled):active:not(.Button--disabled) {\n  background: #002275;\n  padding-top: 1px;\n}\n\n.Button--action:focus {\n  -webkit-box-shadow: 0 0 0 1px #0a84ff inset, 0 0 0 1px #0a84ff, 0 0 0 4px rgba(10, 132, 255, 0.3);\n          box-shadow: 0 0 0 1px #0a84ff inset, 0 0 0 1px #0a84ff, 0 0 0 4px rgba(10, 132, 255, 0.3);\n  outline: none;\n}\n\n.Button--action:focus:not(.focus-visible) {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n\n.Button--action.Button--disabled {\n  cursor: not-allowed;\n  opacity: 0.4;\n}\n\n.Button--action::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n.Button--confirm {\n  font-family: 'Fira Sans', sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: #12bc00;\n  border: 1px solid transparent;\n  border-radius: 2px;\n  cursor: pointer;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  height: 32px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  line-height: 1.3;\n  margin: 0;\n  padding: 0 8px;\n  text-decoration: none;\n  -webkit-transition-duration: all 1050ms, padding 150ms;\n          transition-duration: all 1050ms, padding 150ms;\n  -webkit-transition-property: background-color border-color color;\n  transition-property: background-color border-color color;\n  -webkit-transition-timing-function: cubic-bezier(0.07, 0.95, 0, 1);\n          transition-timing-function: cubic-bezier(0.07, 0.95, 0, 1);\n}\n\n.Button--confirm .Icon {\n  height: 13px;\n  width: 13px;\n}\n\n[dir='ltr'] .Button--confirm .Icon {\n  margin-right: 6px;\n}\n\n[dir='rtl'] .Button--confirm .Icon {\n  margin-left: 6px;\n}\n\n.Button--confirm, .Button--confirm:link {\n  color: #fff;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.Button--confirm.Button--puffy, .Button--confirm:link.Button--puffy {\n  border-radius: 4px;\n  font-size: 15px;\n  height: auto;\n  min-height: 48px;\n  padding: 0 16px;\n}\n\n.Button--confirm.Button--puffy .Icon, .Button--confirm:link.Button--puffy .Icon {\n  height: 15px;\n  width: 15px;\n}\n\n[dir='ltr'] .Button--confirm.Button--puffy .Icon, [dir='ltr'] .Button--confirm:link.Button--puffy .Icon {\n  margin-right: 8px;\n}\n\n[dir='rtl'] .Button--confirm.Button--puffy .Icon, [dir='rtl'] .Button--confirm:link.Button--puffy .Icon {\n  margin-left: 8px;\n}\n\n.Button--confirm.Button--micro, .Button--confirm:link.Button--micro {\n  letter-spacing: 0.01rem;\n}\n\n.Button--confirm.Button--micro, .Button--confirm.Button--micro:link, .Button--confirm:link.Button--micro, .Button--confirm:link.Button--micro:link {\n  font-size: 11px;\n  height: auto;\n  min-height: 24px;\n}\n\n.Button--confirm.Button--micro .Icon, .Button--confirm:link.Button--micro .Icon {\n  height: 11px;\n  width: 11px;\n}\n\n[dir='ltr'] .Button--confirm.Button--micro .Icon, [dir='ltr'] .Button--confirm:link.Button--micro .Icon {\n  margin-right: 4px;\n}\n\n[dir='rtl'] .Button--confirm.Button--micro .Icon, [dir='rtl'] .Button--confirm:link.Button--micro .Icon {\n  margin-left: 4px;\n}\n\n.Button--confirm.Button--micro:active:not(.Button--disabled), .Button--confirm:link.Button--micro:active:not(.Button--disabled) {\n  padding-top: 1px;\n}\n\n.Button--confirm:not(.Button--disabled):hover, .Button--confirm.Button--micro:not(.Button--disabled):hover {\n  background: #006504;\n}\n\n.Button--confirm:not(.Button--disabled):active:not(.Button--disabled), .Button--confirm.Button--micro:not(.Button--disabled):active:not(.Button--disabled) {\n  background: #058b00;\n  padding-top: 1px;\n}\n\n.Button--confirm:focus {\n  -webkit-box-shadow: 0 0 0 1px #0a84ff inset, 0 0 0 1px #0a84ff, 0 0 0 4px rgba(10, 132, 255, 0.3);\n          box-shadow: 0 0 0 1px #0a84ff inset, 0 0 0 1px #0a84ff, 0 0 0 4px rgba(10, 132, 255, 0.3);\n  outline: none;\n}\n\n.Button--confirm:focus:not(.focus-visible) {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n\n.Button--confirm.Button--disabled {\n  cursor: not-allowed;\n  opacity: 0.4;\n}\n\n.Button--confirm::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n.Button--warning {\n  font-family: 'Fira Sans', sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: #ffe900;\n  border: 1px solid transparent;\n  border-radius: 2px;\n  cursor: pointer;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  height: 32px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  line-height: 1.3;\n  margin: 0;\n  padding: 0 8px;\n  text-decoration: none;\n  -webkit-transition-duration: all 1050ms, padding 150ms;\n          transition-duration: all 1050ms, padding 150ms;\n  -webkit-transition-property: background-color border-color color;\n  transition-property: background-color border-color color;\n  -webkit-transition-timing-function: cubic-bezier(0.07, 0.95, 0, 1);\n          transition-timing-function: cubic-bezier(0.07, 0.95, 0, 1);\n}\n\n.Button--warning .Icon {\n  height: 13px;\n  width: 13px;\n}\n\n[dir='ltr'] .Button--warning .Icon {\n  margin-right: 6px;\n}\n\n[dir='rtl'] .Button--warning .Icon {\n  margin-left: 6px;\n}\n\n.Button--warning, .Button--warning:link {\n  color: #fff;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.Button--warning.Button--puffy, .Button--warning:link.Button--puffy {\n  border-radius: 4px;\n  font-size: 15px;\n  height: auto;\n  min-height: 48px;\n  padding: 0 16px;\n}\n\n.Button--warning.Button--puffy .Icon, .Button--warning:link.Button--puffy .Icon {\n  height: 15px;\n  width: 15px;\n}\n\n[dir='ltr'] .Button--warning.Button--puffy .Icon, [dir='ltr'] .Button--warning:link.Button--puffy .Icon {\n  margin-right: 8px;\n}\n\n[dir='rtl'] .Button--warning.Button--puffy .Icon, [dir='rtl'] .Button--warning:link.Button--puffy .Icon {\n  margin-left: 8px;\n}\n\n.Button--warning.Button--micro, .Button--warning:link.Button--micro {\n  letter-spacing: 0.01rem;\n}\n\n.Button--warning.Button--micro, .Button--warning.Button--micro:link, .Button--warning:link.Button--micro, .Button--warning:link.Button--micro:link {\n  font-size: 11px;\n  height: auto;\n  min-height: 24px;\n}\n\n.Button--warning.Button--micro .Icon, .Button--warning:link.Button--micro .Icon {\n  height: 11px;\n  width: 11px;\n}\n\n[dir='ltr'] .Button--warning.Button--micro .Icon, [dir='ltr'] .Button--warning:link.Button--micro .Icon {\n  margin-right: 4px;\n}\n\n[dir='rtl'] .Button--warning.Button--micro .Icon, [dir='rtl'] .Button--warning:link.Button--micro .Icon {\n  margin-left: 4px;\n}\n\n.Button--warning.Button--micro:active:not(.Button--disabled), .Button--warning:link.Button--micro:active:not(.Button--disabled) {\n  padding-top: 1px;\n}\n\n.Button--warning:not(.Button--disabled):hover, .Button--warning.Button--micro:not(.Button--disabled):hover {\n  background: #a47f00;\n}\n\n.Button--warning:not(.Button--disabled):active:not(.Button--disabled), .Button--warning.Button--micro:not(.Button--disabled):active:not(.Button--disabled) {\n  background: #d7b600;\n  padding-top: 1px;\n}\n\n.Button--warning:focus {\n  -webkit-box-shadow: 0 0 0 1px #0a84ff inset, 0 0 0 1px #0a84ff, 0 0 0 4px rgba(10, 132, 255, 0.3);\n          box-shadow: 0 0 0 1px #0a84ff inset, 0 0 0 1px #0a84ff, 0 0 0 4px rgba(10, 132, 255, 0.3);\n  outline: none;\n}\n\n.Button--warning:focus:not(.focus-visible) {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n\n.Button--warning.Button--disabled {\n  cursor: not-allowed;\n  opacity: 0.4;\n}\n\n.Button--warning::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n.Button--alert {\n  font-family: 'Fira Sans', sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: #d70022;\n  border: 1px solid transparent;\n  border-radius: 2px;\n  cursor: pointer;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  height: 32px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  line-height: 1.3;\n  margin: 0;\n  padding: 0 8px;\n  text-decoration: none;\n  -webkit-transition-duration: all 1050ms, padding 150ms;\n          transition-duration: all 1050ms, padding 150ms;\n  -webkit-transition-property: background-color border-color color;\n  transition-property: background-color border-color color;\n  -webkit-transition-timing-function: cubic-bezier(0.07, 0.95, 0, 1);\n          transition-timing-function: cubic-bezier(0.07, 0.95, 0, 1);\n}\n\n.Button--alert .Icon {\n  height: 13px;\n  width: 13px;\n}\n\n[dir='ltr'] .Button--alert .Icon {\n  margin-right: 6px;\n}\n\n[dir='rtl'] .Button--alert .Icon {\n  margin-left: 6px;\n}\n\n.Button--alert, .Button--alert:link {\n  color: #fff;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.Button--alert.Button--puffy, .Button--alert:link.Button--puffy {\n  border-radius: 4px;\n  font-size: 15px;\n  height: auto;\n  min-height: 48px;\n  padding: 0 16px;\n}\n\n.Button--alert.Button--puffy .Icon, .Button--alert:link.Button--puffy .Icon {\n  height: 15px;\n  width: 15px;\n}\n\n[dir='ltr'] .Button--alert.Button--puffy .Icon, [dir='ltr'] .Button--alert:link.Button--puffy .Icon {\n  margin-right: 8px;\n}\n\n[dir='rtl'] .Button--alert.Button--puffy .Icon, [dir='rtl'] .Button--alert:link.Button--puffy .Icon {\n  margin-left: 8px;\n}\n\n.Button--alert.Button--micro, .Button--alert:link.Button--micro {\n  letter-spacing: 0.01rem;\n}\n\n.Button--alert.Button--micro, .Button--alert.Button--micro:link, .Button--alert:link.Button--micro, .Button--alert:link.Button--micro:link {\n  font-size: 11px;\n  height: auto;\n  min-height: 24px;\n}\n\n.Button--alert.Button--micro .Icon, .Button--alert:link.Button--micro .Icon {\n  height: 11px;\n  width: 11px;\n}\n\n[dir='ltr'] .Button--alert.Button--micro .Icon, [dir='ltr'] .Button--alert:link.Button--micro .Icon {\n  margin-right: 4px;\n}\n\n[dir='rtl'] .Button--alert.Button--micro .Icon, [dir='rtl'] .Button--alert:link.Button--micro .Icon {\n  margin-left: 4px;\n}\n\n.Button--alert.Button--micro:active:not(.Button--disabled), .Button--alert:link.Button--micro:active:not(.Button--disabled) {\n  padding-top: 1px;\n}\n\n.Button--alert:not(.Button--disabled):hover, .Button--alert.Button--micro:not(.Button--disabled):hover {\n  background: #a4000f;\n}\n\n.Button--alert:not(.Button--disabled):active:not(.Button--disabled), .Button--alert.Button--micro:not(.Button--disabled):active:not(.Button--disabled) {\n  background: #5a0002;\n  padding-top: 1px;\n}\n\n.Button--alert:focus {\n  -webkit-box-shadow: 0 0 0 1px #0a84ff inset, 0 0 0 1px #0a84ff, 0 0 0 4px rgba(10, 132, 255, 0.3);\n          box-shadow: 0 0 0 1px #0a84ff inset, 0 0 0 1px #0a84ff, 0 0 0 4px rgba(10, 132, 255, 0.3);\n  outline: none;\n}\n\n.Button--alert:focus:not(.focus-visible) {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n\n.Button--alert.Button--disabled {\n  cursor: not-allowed;\n  opacity: 0.4;\n}\n\n.Button--alert::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n.Button--cancel {\n  font-family: 'Fira Sans', sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: transparent;\n  border: 1px solid transparent;\n  border-radius: 2px;\n  cursor: pointer;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  height: 32px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  line-height: 1.3;\n  margin: 0;\n  padding: 0 8px;\n  text-decoration: none;\n  -webkit-transition-duration: all 1050ms, padding 150ms;\n          transition-duration: all 1050ms, padding 150ms;\n  -webkit-transition-property: background-color border-color color;\n  transition-property: background-color border-color color;\n  -webkit-transition-timing-function: cubic-bezier(0.07, 0.95, 0, 1);\n          transition-timing-function: cubic-bezier(0.07, 0.95, 0, 1);\n}\n\n.Button--cancel .Icon {\n  height: 13px;\n  width: 13px;\n}\n\n[dir='ltr'] .Button--cancel .Icon {\n  margin-right: 6px;\n}\n\n[dir='rtl'] .Button--cancel .Icon {\n  margin-left: 6px;\n}\n\n.Button--cancel, .Button--cancel:link {\n  color: #343a40;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.Button--cancel.Button--puffy, .Button--cancel:link.Button--puffy {\n  border-radius: 4px;\n  font-size: 15px;\n  height: auto;\n  min-height: 48px;\n  padding: 0 16px;\n}\n\n.Button--cancel.Button--puffy .Icon, .Button--cancel:link.Button--puffy .Icon {\n  height: 15px;\n  width: 15px;\n}\n\n[dir='ltr'] .Button--cancel.Button--puffy .Icon, [dir='ltr'] .Button--cancel:link.Button--puffy .Icon {\n  margin-right: 8px;\n}\n\n[dir='rtl'] .Button--cancel.Button--puffy .Icon, [dir='rtl'] .Button--cancel:link.Button--puffy .Icon {\n  margin-left: 8px;\n}\n\n.Button--cancel.Button--micro, .Button--cancel:link.Button--micro {\n  letter-spacing: 0.01rem;\n}\n\n.Button--cancel.Button--micro, .Button--cancel.Button--micro:link, .Button--cancel:link.Button--micro, .Button--cancel:link.Button--micro:link {\n  font-size: 11px;\n  height: auto;\n  min-height: 24px;\n}\n\n.Button--cancel.Button--micro .Icon, .Button--cancel:link.Button--micro .Icon {\n  height: 11px;\n  width: 11px;\n}\n\n[dir='ltr'] .Button--cancel.Button--micro .Icon, [dir='ltr'] .Button--cancel:link.Button--micro .Icon {\n  margin-right: 4px;\n}\n\n[dir='rtl'] .Button--cancel.Button--micro .Icon, [dir='rtl'] .Button--cancel:link.Button--micro .Icon {\n  margin-left: 4px;\n}\n\n.Button--cancel.Button--micro:active:not(.Button--disabled), .Button--cancel:link.Button--micro:active:not(.Button--disabled) {\n  padding-top: 1px;\n}\n\n.Button--cancel:not(.Button--disabled):hover, .Button--cancel.Button--micro:not(.Button--disabled):hover {\n  background: transparent;\n}\n\n.Button--cancel:not(.Button--disabled):active:not(.Button--disabled), .Button--cancel.Button--micro:not(.Button--disabled):active:not(.Button--disabled) {\n  background: transparent;\n  padding-top: 1px;\n}\n\n.Button--cancel:focus {\n  -webkit-box-shadow: 0 0 0 1px #0a84ff inset, 0 0 0 1px #0a84ff, 0 0 0 4px rgba(10, 132, 255, 0.3);\n          box-shadow: 0 0 0 1px #0a84ff inset, 0 0 0 1px #0a84ff, 0 0 0 4px rgba(10, 132, 255, 0.3);\n  outline: none;\n}\n\n.Button--cancel:focus:not(.focus-visible) {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n\n.Button--cancel.Button--disabled {\n  cursor: not-allowed;\n  opacity: 0.4;\n}\n\n.Button--cancel::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n.Notice {\n  border-radius: 4px;\n  display: grid;\n  font-size: 12px;\n  grid-gap: 4px;\n  grid-template-columns: -webkit-min-content auto;\n  grid-template-columns: min-content auto;\n  line-height: 1.1;\n  padding: 4px;\n}\n\n.Notice.Notice-light {\n  background-color: transparent;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  line-height: 19px;\n  padding: 0;\n}\n\n.Notice.Notice-dismissible {\n  grid-template-columns: -webkit-min-content auto -webkit-min-content;\n  grid-template-columns: min-content auto min-content;\n}\n\n.Notice-icon {\n  background-position: center top;\n  background-repeat: no-repeat;\n}\n\n.Notice-column {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.Notice-dismisser {\n  -webkit-box-align: top;\n      -ms-flex-align: top;\n          align-items: top;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n\n.Notice-icon,\n.Notice-dismisser-button {\n  height: 16px;\n  margin: 4px;\n  width: 16px;\n}\n\n.Notice-light .Notice-icon {\n  background-size: 11px 11px;\n  height: 11px;\n  width: 11px;\n}\n\n.Notice-dismisser-button {\n  cursor: pointer;\n  padding: 0;\n}\n\n.Notice-text {\n  display: inline-block;\n  margin: 0;\n  padding: 4px 0;\n}\n\n.Notice-light .Notice-text {\n  padding: 0;\n}\n\n[dir='ltr'] .Notice-text {\n  padding-right: 8px;\n}\n\n[dir='rtl'] .Notice-text {\n  padding-left: 8px;\n}\n\n.Notice-error {\n  background-color: #ff0039;\n  color: #fff;\n}\n\n.Notice-error .Notice-button {\n  font-family: 'Fira Sans', sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: #d70022;\n  border: 1px solid transparent;\n  border-radius: 2px;\n  cursor: pointer;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  height: 32px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  line-height: 1.3;\n  margin: 0;\n  padding: 0 8px;\n  text-decoration: none;\n  -webkit-transition-duration: all 1050ms, padding 150ms;\n          transition-duration: all 1050ms, padding 150ms;\n  -webkit-transition-property: background-color border-color color;\n  transition-property: background-color border-color color;\n  -webkit-transition-timing-function: cubic-bezier(0.07, 0.95, 0, 1);\n          transition-timing-function: cubic-bezier(0.07, 0.95, 0, 1);\n}\n\n.Notice-error .Notice-button .Icon {\n  height: 13px;\n  width: 13px;\n}\n\n[dir='ltr'] .Notice-error .Notice-button .Icon {\n  margin-right: 6px;\n}\n\n[dir='rtl'] .Notice-error .Notice-button .Icon {\n  margin-left: 6px;\n}\n\n.Notice-error .Notice-button, .Notice-error .Notice-button:link {\n  color: #fff;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.Notice-error .Notice-button.Button--puffy, .Notice-error .Notice-button:link.Button--puffy {\n  border-radius: 4px;\n  font-size: 15px;\n  height: auto;\n  min-height: 48px;\n  padding: 0 16px;\n}\n\n.Notice-error .Notice-button.Button--puffy .Icon, .Notice-error .Notice-button:link.Button--puffy .Icon {\n  height: 15px;\n  width: 15px;\n}\n\n[dir='ltr'] .Notice-error .Notice-button.Button--puffy .Icon, [dir='ltr'] .Notice-error .Notice-button:link.Button--puffy .Icon {\n  margin-right: 8px;\n}\n\n[dir='rtl'] .Notice-error .Notice-button.Button--puffy .Icon, [dir='rtl'] .Notice-error .Notice-button:link.Button--puffy .Icon {\n  margin-left: 8px;\n}\n\n.Notice-error .Notice-button.Button--micro, .Notice-error .Notice-button:link.Button--micro {\n  letter-spacing: 0.01rem;\n}\n\n.Notice-error .Notice-button.Button--micro, .Notice-error .Notice-button.Button--micro:link, .Notice-error .Notice-button:link.Button--micro, .Notice-error .Notice-button:link.Button--micro:link {\n  font-size: 11px;\n  height: auto;\n  min-height: 24px;\n}\n\n.Notice-error .Notice-button.Button--micro .Icon, .Notice-error .Notice-button:link.Button--micro .Icon {\n  height: 11px;\n  width: 11px;\n}\n\n[dir='ltr'] .Notice-error .Notice-button.Button--micro .Icon, [dir='ltr'] .Notice-error .Notice-button:link.Button--micro .Icon {\n  margin-right: 4px;\n}\n\n[dir='rtl'] .Notice-error .Notice-button.Button--micro .Icon, [dir='rtl'] .Notice-error .Notice-button:link.Button--micro .Icon {\n  margin-left: 4px;\n}\n\n.Notice-error .Notice-button.Button--micro:active:not(.Button--disabled), .Notice-error .Notice-button:link.Button--micro:active:not(.Button--disabled) {\n  padding-top: 1px;\n}\n\n.Notice-error .Notice-button:not(.Button--disabled):hover, .Notice-error .Notice-button.Button--micro:not(.Button--disabled):hover {\n  background: #a4000f;\n}\n\n.Notice-error .Notice-button:not(.Button--disabled):active:not(.Button--disabled), .Notice-error .Notice-button.Button--micro:not(.Button--disabled):active:not(.Button--disabled) {\n  background: #5a0002;\n  padding-top: 1px;\n}\n\n.Notice-error .Notice-button:focus {\n  -webkit-box-shadow: 0 0 0 1px #0a84ff inset, 0 0 0 1px #0a84ff, 0 0 0 4px rgba(10, 132, 255, 0.3);\n          box-shadow: 0 0 0 1px #0a84ff inset, 0 0 0 1px #0a84ff, 0 0 0 4px rgba(10, 132, 255, 0.3);\n  outline: none;\n}\n\n.Notice-error .Notice-button:focus:not(.focus-visible) {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n\n.Notice-error .Notice-button.Button--disabled {\n  cursor: not-allowed;\n  opacity: 0.4;\n}\n\n.Notice-error .Notice-button::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n.Notice-error .Notice-button:active, .Notice-error .Notice-button:hover, .Notice-error .Notice-button:focus {\n  color: inherit;\n}\n\n.Notice-error .Notice-button, .Notice-error .Notice-button.Button--micro, .Notice-error .Notice-button.Button--micro:link {\n  border: none;\n  font-size: 12px;\n  line-height: 1.1;\n  padding: 6px;\n  text-shadow: none;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n}\n\n.Notice-error .Notice-button:active:not(.Button--disabled), .Notice-error .Notice-button.Button--micro:active:not(.Button--disabled), .Notice-error .Notice-button.Button--micro:link:active:not(.Button--disabled) {\n  padding-top: 7px;\n}\n\n.Notice-error .Notice-icon {\n  background-image: url(" + ___CSS_LOADER_URL___0___ + ");\n}\n\n.Notice-error .IconXMark-path {\n  fill: #fff;\n}\n\n.Notice-generic,\n.Notice-genericWarning {\n  background-color: #ededf0;\n  color: #0c0c0d;\n}\n\n.Notice-generic .Notice-button,\n.Notice-genericWarning .Notice-button {\n  font-family: 'Fira Sans', sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: rgba(12, 12, 13, 0.1);\n  border: 1px solid transparent;\n  border-radius: 2px;\n  cursor: pointer;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  height: 32px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  line-height: 1.3;\n  margin: 0;\n  padding: 0 8px;\n  text-decoration: none;\n  -webkit-transition-duration: all 1050ms, padding 150ms;\n          transition-duration: all 1050ms, padding 150ms;\n  -webkit-transition-property: background-color border-color color;\n  transition-property: background-color border-color color;\n  -webkit-transition-timing-function: cubic-bezier(0.07, 0.95, 0, 1);\n          transition-timing-function: cubic-bezier(0.07, 0.95, 0, 1);\n}\n\n.Notice-generic .Notice-button .Icon,\n.Notice-genericWarning .Notice-button .Icon {\n  height: 13px;\n  width: 13px;\n}\n\n[dir='ltr'] .Notice-generic .Notice-button .Icon, [dir='ltr']\n.Notice-genericWarning .Notice-button .Icon {\n  margin-right: 6px;\n}\n\n[dir='rtl'] .Notice-generic .Notice-button .Icon, [dir='rtl']\n.Notice-genericWarning .Notice-button .Icon {\n  margin-left: 6px;\n}\n\n.Notice-generic .Notice-button, .Notice-generic .Notice-button:link,\n.Notice-genericWarning .Notice-button,\n.Notice-genericWarning .Notice-button:link {\n  color: #0c0c0d;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.Notice-generic .Notice-button.Button--puffy, .Notice-generic .Notice-button:link.Button--puffy,\n.Notice-genericWarning .Notice-button.Button--puffy,\n.Notice-genericWarning .Notice-button:link.Button--puffy {\n  border-radius: 4px;\n  font-size: 15px;\n  height: auto;\n  min-height: 48px;\n  padding: 0 16px;\n}\n\n.Notice-generic .Notice-button.Button--puffy .Icon, .Notice-generic .Notice-button:link.Button--puffy .Icon,\n.Notice-genericWarning .Notice-button.Button--puffy .Icon,\n.Notice-genericWarning .Notice-button:link.Button--puffy .Icon {\n  height: 15px;\n  width: 15px;\n}\n\n[dir='ltr'] .Notice-generic .Notice-button.Button--puffy .Icon, [dir='ltr'] .Notice-generic .Notice-button:link.Button--puffy .Icon, [dir='ltr']\n.Notice-genericWarning .Notice-button.Button--puffy .Icon, [dir='ltr']\n.Notice-genericWarning .Notice-button:link.Button--puffy .Icon {\n  margin-right: 8px;\n}\n\n[dir='rtl'] .Notice-generic .Notice-button.Button--puffy .Icon, [dir='rtl'] .Notice-generic .Notice-button:link.Button--puffy .Icon, [dir='rtl']\n.Notice-genericWarning .Notice-button.Button--puffy .Icon, [dir='rtl']\n.Notice-genericWarning .Notice-button:link.Button--puffy .Icon {\n  margin-left: 8px;\n}\n\n.Notice-generic .Notice-button.Button--micro, .Notice-generic .Notice-button:link.Button--micro,\n.Notice-genericWarning .Notice-button.Button--micro,\n.Notice-genericWarning .Notice-button:link.Button--micro {\n  letter-spacing: 0.01rem;\n}\n\n.Notice-generic .Notice-button.Button--micro, .Notice-generic .Notice-button.Button--micro:link, .Notice-generic .Notice-button:link.Button--micro, .Notice-generic .Notice-button:link.Button--micro:link,\n.Notice-genericWarning .Notice-button.Button--micro,\n.Notice-genericWarning .Notice-button.Button--micro:link,\n.Notice-genericWarning .Notice-button:link.Button--micro,\n.Notice-genericWarning .Notice-button:link.Button--micro:link {\n  font-size: 11px;\n  height: auto;\n  min-height: 24px;\n}\n\n.Notice-generic .Notice-button.Button--micro .Icon, .Notice-generic .Notice-button:link.Button--micro .Icon,\n.Notice-genericWarning .Notice-button.Button--micro .Icon,\n.Notice-genericWarning .Notice-button:link.Button--micro .Icon {\n  height: 11px;\n  width: 11px;\n}\n\n[dir='ltr'] .Notice-generic .Notice-button.Button--micro .Icon, [dir='ltr'] .Notice-generic .Notice-button:link.Button--micro .Icon, [dir='ltr']\n.Notice-genericWarning .Notice-button.Button--micro .Icon, [dir='ltr']\n.Notice-genericWarning .Notice-button:link.Button--micro .Icon {\n  margin-right: 4px;\n}\n\n[dir='rtl'] .Notice-generic .Notice-button.Button--micro .Icon, [dir='rtl'] .Notice-generic .Notice-button:link.Button--micro .Icon, [dir='rtl']\n.Notice-genericWarning .Notice-button.Button--micro .Icon, [dir='rtl']\n.Notice-genericWarning .Notice-button:link.Button--micro .Icon {\n  margin-left: 4px;\n}\n\n.Notice-generic .Notice-button.Button--micro:active:not(.Button--disabled), .Notice-generic .Notice-button:link.Button--micro:active:not(.Button--disabled),\n.Notice-genericWarning .Notice-button.Button--micro:active:not(.Button--disabled),\n.Notice-genericWarning .Notice-button:link.Button--micro:active:not(.Button--disabled) {\n  padding-top: 1px;\n}\n\n.Notice-generic .Notice-button:not(.Button--disabled):hover, .Notice-generic .Notice-button.Button--micro:not(.Button--disabled):hover,\n.Notice-genericWarning .Notice-button:not(.Button--disabled):hover,\n.Notice-genericWarning .Notice-button.Button--micro:not(.Button--disabled):hover {\n  background: rgba(12, 12, 13, 0.2);\n}\n\n.Notice-generic .Notice-button:not(.Button--disabled):active:not(.Button--disabled), .Notice-generic .Notice-button.Button--micro:not(.Button--disabled):active:not(.Button--disabled),\n.Notice-genericWarning .Notice-button:not(.Button--disabled):active:not(.Button--disabled),\n.Notice-genericWarning .Notice-button.Button--micro:not(.Button--disabled):active:not(.Button--disabled) {\n  background: rgba(12, 12, 13, 0.3);\n  padding-top: 1px;\n}\n\n.Notice-generic .Notice-button:focus,\n.Notice-genericWarning .Notice-button:focus {\n  -webkit-box-shadow: 0 0 0 1px #0a84ff inset, 0 0 0 1px #0a84ff, 0 0 0 4px rgba(10, 132, 255, 0.3);\n          box-shadow: 0 0 0 1px #0a84ff inset, 0 0 0 1px #0a84ff, 0 0 0 4px rgba(10, 132, 255, 0.3);\n  outline: none;\n}\n\n.Notice-generic .Notice-button:focus:not(.focus-visible),\n.Notice-genericWarning .Notice-button:focus:not(.focus-visible) {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n\n.Notice-generic .Notice-button.Button--disabled,\n.Notice-genericWarning .Notice-button.Button--disabled {\n  cursor: not-allowed;\n  opacity: 0.4;\n}\n\n.Notice-generic .Notice-button::-moz-focus-inner,\n.Notice-genericWarning .Notice-button::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n.Notice-generic .Notice-button:active, .Notice-generic .Notice-button:hover, .Notice-generic .Notice-button:focus,\n.Notice-genericWarning .Notice-button:active,\n.Notice-genericWarning .Notice-button:hover,\n.Notice-genericWarning .Notice-button:focus {\n  color: inherit;\n}\n\n.Notice-generic .Notice-button, .Notice-generic .Notice-button.Button--micro, .Notice-generic .Notice-button.Button--micro:link,\n.Notice-genericWarning .Notice-button,\n.Notice-genericWarning .Notice-button.Button--micro,\n.Notice-genericWarning .Notice-button.Button--micro:link {\n  border: none;\n  font-size: 12px;\n  line-height: 1.1;\n  padding: 6px;\n  text-shadow: none;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n}\n\n.Notice-generic .Notice-button:active:not(.Button--disabled), .Notice-generic .Notice-button.Button--micro:active:not(.Button--disabled), .Notice-generic .Notice-button.Button--micro:link:active:not(.Button--disabled),\n.Notice-genericWarning .Notice-button:active:not(.Button--disabled),\n.Notice-genericWarning .Notice-button.Button--micro:active:not(.Button--disabled),\n.Notice-genericWarning .Notice-button.Button--micro:link:active:not(.Button--disabled) {\n  padding-top: 7px;\n}\n\n.Notice-generic .Notice-icon,\n.Notice-genericWarning .Notice-icon {\n  background-image: url(" + ___CSS_LOADER_URL___1___ + ");\n}\n\n.Notice-generic .IconXMark-path,\n.Notice-genericWarning .IconXMark-path {\n  fill: #0c0c0d;\n}\n\n.Notice-generic.Notice-againstGrey20,\n.Notice-genericWarning.Notice-againstGrey20 {\n  background-color: #d7d7db;\n}\n\n.Notice-generic .Button:hover,\n.Notice-genericWarning .Button:hover {\n  color: #0c0c0d;\n}\n\n.Notice-success,\n.Notice-firefox {\n  background-color: #30e60b;\n  color: #0c0c0d;\n}\n\n.Notice-success .Notice-button,\n.Notice-firefox .Notice-button {\n  font-family: 'Fira Sans', sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: #12bc00;\n  border: 1px solid transparent;\n  border-radius: 2px;\n  cursor: pointer;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  height: 32px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  line-height: 1.3;\n  margin: 0;\n  padding: 0 8px;\n  text-decoration: none;\n  -webkit-transition-duration: all 1050ms, padding 150ms;\n          transition-duration: all 1050ms, padding 150ms;\n  -webkit-transition-property: background-color border-color color;\n  transition-property: background-color border-color color;\n  -webkit-transition-timing-function: cubic-bezier(0.07, 0.95, 0, 1);\n          transition-timing-function: cubic-bezier(0.07, 0.95, 0, 1);\n}\n\n.Notice-success .Notice-button .Icon,\n.Notice-firefox .Notice-button .Icon {\n  height: 13px;\n  width: 13px;\n}\n\n[dir='ltr'] .Notice-success .Notice-button .Icon, [dir='ltr']\n.Notice-firefox .Notice-button .Icon {\n  margin-right: 6px;\n}\n\n[dir='rtl'] .Notice-success .Notice-button .Icon, [dir='rtl']\n.Notice-firefox .Notice-button .Icon {\n  margin-left: 6px;\n}\n\n.Notice-success .Notice-button, .Notice-success .Notice-button:link,\n.Notice-firefox .Notice-button,\n.Notice-firefox .Notice-button:link {\n  color: #003706;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.Notice-success .Notice-button.Button--puffy, .Notice-success .Notice-button:link.Button--puffy,\n.Notice-firefox .Notice-button.Button--puffy,\n.Notice-firefox .Notice-button:link.Button--puffy {\n  border-radius: 4px;\n  font-size: 15px;\n  height: auto;\n  min-height: 48px;\n  padding: 0 16px;\n}\n\n.Notice-success .Notice-button.Button--puffy .Icon, .Notice-success .Notice-button:link.Button--puffy .Icon,\n.Notice-firefox .Notice-button.Button--puffy .Icon,\n.Notice-firefox .Notice-button:link.Button--puffy .Icon {\n  height: 15px;\n  width: 15px;\n}\n\n[dir='ltr'] .Notice-success .Notice-button.Button--puffy .Icon, [dir='ltr'] .Notice-success .Notice-button:link.Button--puffy .Icon, [dir='ltr']\n.Notice-firefox .Notice-button.Button--puffy .Icon, [dir='ltr']\n.Notice-firefox .Notice-button:link.Button--puffy .Icon {\n  margin-right: 8px;\n}\n\n[dir='rtl'] .Notice-success .Notice-button.Button--puffy .Icon, [dir='rtl'] .Notice-success .Notice-button:link.Button--puffy .Icon, [dir='rtl']\n.Notice-firefox .Notice-button.Button--puffy .Icon, [dir='rtl']\n.Notice-firefox .Notice-button:link.Button--puffy .Icon {\n  margin-left: 8px;\n}\n\n.Notice-success .Notice-button.Button--micro, .Notice-success .Notice-button:link.Button--micro,\n.Notice-firefox .Notice-button.Button--micro,\n.Notice-firefox .Notice-button:link.Button--micro {\n  letter-spacing: 0.01rem;\n}\n\n.Notice-success .Notice-button.Button--micro, .Notice-success .Notice-button.Button--micro:link, .Notice-success .Notice-button:link.Button--micro, .Notice-success .Notice-button:link.Button--micro:link,\n.Notice-firefox .Notice-button.Button--micro,\n.Notice-firefox .Notice-button.Button--micro:link,\n.Notice-firefox .Notice-button:link.Button--micro,\n.Notice-firefox .Notice-button:link.Button--micro:link {\n  font-size: 11px;\n  height: auto;\n  min-height: 24px;\n}\n\n.Notice-success .Notice-button.Button--micro .Icon, .Notice-success .Notice-button:link.Button--micro .Icon,\n.Notice-firefox .Notice-button.Button--micro .Icon,\n.Notice-firefox .Notice-button:link.Button--micro .Icon {\n  height: 11px;\n  width: 11px;\n}\n\n[dir='ltr'] .Notice-success .Notice-button.Button--micro .Icon, [dir='ltr'] .Notice-success .Notice-button:link.Button--micro .Icon, [dir='ltr']\n.Notice-firefox .Notice-button.Button--micro .Icon, [dir='ltr']\n.Notice-firefox .Notice-button:link.Button--micro .Icon {\n  margin-right: 4px;\n}\n\n[dir='rtl'] .Notice-success .Notice-button.Button--micro .Icon, [dir='rtl'] .Notice-success .Notice-button:link.Button--micro .Icon, [dir='rtl']\n.Notice-firefox .Notice-button.Button--micro .Icon, [dir='rtl']\n.Notice-firefox .Notice-button:link.Button--micro .Icon {\n  margin-left: 4px;\n}\n\n.Notice-success .Notice-button.Button--micro:active:not(.Button--disabled), .Notice-success .Notice-button:link.Button--micro:active:not(.Button--disabled),\n.Notice-firefox .Notice-button.Button--micro:active:not(.Button--disabled),\n.Notice-firefox .Notice-button:link.Button--micro:active:not(.Button--disabled) {\n  padding-top: 1px;\n}\n\n.Notice-success .Notice-button:not(.Button--disabled):hover, .Notice-success .Notice-button.Button--micro:not(.Button--disabled):hover,\n.Notice-firefox .Notice-button:not(.Button--disabled):hover,\n.Notice-firefox .Notice-button.Button--micro:not(.Button--disabled):hover {\n  background: #058b00;\n}\n\n.Notice-success .Notice-button:not(.Button--disabled):active:not(.Button--disabled), .Notice-success .Notice-button.Button--micro:not(.Button--disabled):active:not(.Button--disabled),\n.Notice-firefox .Notice-button:not(.Button--disabled):active:not(.Button--disabled),\n.Notice-firefox .Notice-button.Button--micro:not(.Button--disabled):active:not(.Button--disabled) {\n  background: #006504;\n  padding-top: 1px;\n}\n\n.Notice-success .Notice-button:focus,\n.Notice-firefox .Notice-button:focus {\n  -webkit-box-shadow: 0 0 0 1px #0a84ff inset, 0 0 0 1px #0a84ff, 0 0 0 4px rgba(10, 132, 255, 0.3);\n          box-shadow: 0 0 0 1px #0a84ff inset, 0 0 0 1px #0a84ff, 0 0 0 4px rgba(10, 132, 255, 0.3);\n  outline: none;\n}\n\n.Notice-success .Notice-button:focus:not(.focus-visible),\n.Notice-firefox .Notice-button:focus:not(.focus-visible) {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n\n.Notice-success .Notice-button.Button--disabled,\n.Notice-firefox .Notice-button.Button--disabled {\n  cursor: not-allowed;\n  opacity: 0.4;\n}\n\n.Notice-success .Notice-button::-moz-focus-inner,\n.Notice-firefox .Notice-button::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n.Notice-success .Notice-button:active, .Notice-success .Notice-button:hover, .Notice-success .Notice-button:focus,\n.Notice-firefox .Notice-button:active,\n.Notice-firefox .Notice-button:hover,\n.Notice-firefox .Notice-button:focus {\n  color: #fff;\n}\n\n.Notice-success .Notice-button, .Notice-success .Notice-button.Button--micro, .Notice-success .Notice-button.Button--micro:link,\n.Notice-firefox .Notice-button,\n.Notice-firefox .Notice-button.Button--micro,\n.Notice-firefox .Notice-button.Button--micro:link {\n  border: none;\n  font-size: 12px;\n  line-height: 1.1;\n  padding: 6px;\n  text-shadow: none;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n}\n\n.Notice-success .Notice-button:active:not(.Button--disabled), .Notice-success .Notice-button.Button--micro:active:not(.Button--disabled), .Notice-success .Notice-button.Button--micro:link:active:not(.Button--disabled),\n.Notice-firefox .Notice-button:active:not(.Button--disabled),\n.Notice-firefox .Notice-button.Button--micro:active:not(.Button--disabled),\n.Notice-firefox .Notice-button.Button--micro:link:active:not(.Button--disabled) {\n  padding-top: 7px;\n}\n\n.Notice-success .Notice-icon,\n.Notice-firefox .Notice-icon {\n  background-image: url(" + ___CSS_LOADER_URL___2___ + ");\n}\n\n.Notice-success .IconXMark-path,\n.Notice-firefox .IconXMark-path {\n  fill: #003706;\n}\n\n.Notice-warning,\n.Notice-warningInfo {\n  background-color: #ffe900;\n  color: #0c0c0d;\n}\n\n.Notice-warning .Notice-button,\n.Notice-warningInfo .Notice-button {\n  font-family: 'Fira Sans', sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: #d7b600;\n  border: 1px solid transparent;\n  border-radius: 2px;\n  cursor: pointer;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  height: 32px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  line-height: 1.3;\n  margin: 0;\n  padding: 0 8px;\n  text-decoration: none;\n  -webkit-transition-duration: all 1050ms, padding 150ms;\n          transition-duration: all 1050ms, padding 150ms;\n  -webkit-transition-property: background-color border-color color;\n  transition-property: background-color border-color color;\n  -webkit-transition-timing-function: cubic-bezier(0.07, 0.95, 0, 1);\n          transition-timing-function: cubic-bezier(0.07, 0.95, 0, 1);\n}\n\n.Notice-warning .Notice-button .Icon,\n.Notice-warningInfo .Notice-button .Icon {\n  height: 13px;\n  width: 13px;\n}\n\n[dir='ltr'] .Notice-warning .Notice-button .Icon, [dir='ltr']\n.Notice-warningInfo .Notice-button .Icon {\n  margin-right: 6px;\n}\n\n[dir='rtl'] .Notice-warning .Notice-button .Icon, [dir='rtl']\n.Notice-warningInfo .Notice-button .Icon {\n  margin-left: 6px;\n}\n\n.Notice-warning .Notice-button, .Notice-warning .Notice-button:link,\n.Notice-warningInfo .Notice-button,\n.Notice-warningInfo .Notice-button:link {\n  color: #3e2800;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.Notice-warning .Notice-button.Button--puffy, .Notice-warning .Notice-button:link.Button--puffy,\n.Notice-warningInfo .Notice-button.Button--puffy,\n.Notice-warningInfo .Notice-button:link.Button--puffy {\n  border-radius: 4px;\n  font-size: 15px;\n  height: auto;\n  min-height: 48px;\n  padding: 0 16px;\n}\n\n.Notice-warning .Notice-button.Button--puffy .Icon, .Notice-warning .Notice-button:link.Button--puffy .Icon,\n.Notice-warningInfo .Notice-button.Button--puffy .Icon,\n.Notice-warningInfo .Notice-button:link.Button--puffy .Icon {\n  height: 15px;\n  width: 15px;\n}\n\n[dir='ltr'] .Notice-warning .Notice-button.Button--puffy .Icon, [dir='ltr'] .Notice-warning .Notice-button:link.Button--puffy .Icon, [dir='ltr']\n.Notice-warningInfo .Notice-button.Button--puffy .Icon, [dir='ltr']\n.Notice-warningInfo .Notice-button:link.Button--puffy .Icon {\n  margin-right: 8px;\n}\n\n[dir='rtl'] .Notice-warning .Notice-button.Button--puffy .Icon, [dir='rtl'] .Notice-warning .Notice-button:link.Button--puffy .Icon, [dir='rtl']\n.Notice-warningInfo .Notice-button.Button--puffy .Icon, [dir='rtl']\n.Notice-warningInfo .Notice-button:link.Button--puffy .Icon {\n  margin-left: 8px;\n}\n\n.Notice-warning .Notice-button.Button--micro, .Notice-warning .Notice-button:link.Button--micro,\n.Notice-warningInfo .Notice-button.Button--micro,\n.Notice-warningInfo .Notice-button:link.Button--micro {\n  letter-spacing: 0.01rem;\n}\n\n.Notice-warning .Notice-button.Button--micro, .Notice-warning .Notice-button.Button--micro:link, .Notice-warning .Notice-button:link.Button--micro, .Notice-warning .Notice-button:link.Button--micro:link,\n.Notice-warningInfo .Notice-button.Button--micro,\n.Notice-warningInfo .Notice-button.Button--micro:link,\n.Notice-warningInfo .Notice-button:link.Button--micro,\n.Notice-warningInfo .Notice-button:link.Button--micro:link {\n  font-size: 11px;\n  height: auto;\n  min-height: 24px;\n}\n\n.Notice-warning .Notice-button.Button--micro .Icon, .Notice-warning .Notice-button:link.Button--micro .Icon,\n.Notice-warningInfo .Notice-button.Button--micro .Icon,\n.Notice-warningInfo .Notice-button:link.Button--micro .Icon {\n  height: 11px;\n  width: 11px;\n}\n\n[dir='ltr'] .Notice-warning .Notice-button.Button--micro .Icon, [dir='ltr'] .Notice-warning .Notice-button:link.Button--micro .Icon, [dir='ltr']\n.Notice-warningInfo .Notice-button.Button--micro .Icon, [dir='ltr']\n.Notice-warningInfo .Notice-button:link.Button--micro .Icon {\n  margin-right: 4px;\n}\n\n[dir='rtl'] .Notice-warning .Notice-button.Button--micro .Icon, [dir='rtl'] .Notice-warning .Notice-button:link.Button--micro .Icon, [dir='rtl']\n.Notice-warningInfo .Notice-button.Button--micro .Icon, [dir='rtl']\n.Notice-warningInfo .Notice-button:link.Button--micro .Icon {\n  margin-left: 4px;\n}\n\n.Notice-warning .Notice-button.Button--micro:active:not(.Button--disabled), .Notice-warning .Notice-button:link.Button--micro:active:not(.Button--disabled),\n.Notice-warningInfo .Notice-button.Button--micro:active:not(.Button--disabled),\n.Notice-warningInfo .Notice-button:link.Button--micro:active:not(.Button--disabled) {\n  padding-top: 1px;\n}\n\n.Notice-warning .Notice-button:not(.Button--disabled):hover, .Notice-warning .Notice-button.Button--micro:not(.Button--disabled):hover,\n.Notice-warningInfo .Notice-button:not(.Button--disabled):hover,\n.Notice-warningInfo .Notice-button.Button--micro:not(.Button--disabled):hover {\n  background: #a47f00;\n}\n\n.Notice-warning .Notice-button:not(.Button--disabled):active:not(.Button--disabled), .Notice-warning .Notice-button.Button--micro:not(.Button--disabled):active:not(.Button--disabled),\n.Notice-warningInfo .Notice-button:not(.Button--disabled):active:not(.Button--disabled),\n.Notice-warningInfo .Notice-button.Button--micro:not(.Button--disabled):active:not(.Button--disabled) {\n  background: #715100;\n  padding-top: 1px;\n}\n\n.Notice-warning .Notice-button:focus,\n.Notice-warningInfo .Notice-button:focus {\n  -webkit-box-shadow: 0 0 0 1px #0a84ff inset, 0 0 0 1px #0a84ff, 0 0 0 4px rgba(10, 132, 255, 0.3);\n          box-shadow: 0 0 0 1px #0a84ff inset, 0 0 0 1px #0a84ff, 0 0 0 4px rgba(10, 132, 255, 0.3);\n  outline: none;\n}\n\n.Notice-warning .Notice-button:focus:not(.focus-visible),\n.Notice-warningInfo .Notice-button:focus:not(.focus-visible) {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n\n.Notice-warning .Notice-button.Button--disabled,\n.Notice-warningInfo .Notice-button.Button--disabled {\n  cursor: not-allowed;\n  opacity: 0.4;\n}\n\n.Notice-warning .Notice-button::-moz-focus-inner,\n.Notice-warningInfo .Notice-button::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n.Notice-warning .Notice-button:active, .Notice-warning .Notice-button:hover, .Notice-warning .Notice-button:focus,\n.Notice-warningInfo .Notice-button:active,\n.Notice-warningInfo .Notice-button:hover,\n.Notice-warningInfo .Notice-button:focus {\n  color: #fff;\n}\n\n.Notice-warning .Notice-button, .Notice-warning .Notice-button.Button--micro, .Notice-warning .Notice-button.Button--micro:link,\n.Notice-warningInfo .Notice-button,\n.Notice-warningInfo .Notice-button.Button--micro,\n.Notice-warningInfo .Notice-button.Button--micro:link {\n  border: none;\n  font-size: 12px;\n  line-height: 1.1;\n  padding: 6px;\n  text-shadow: none;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n}\n\n.Notice-warning .Notice-button:active:not(.Button--disabled), .Notice-warning .Notice-button.Button--micro:active:not(.Button--disabled), .Notice-warning .Notice-button.Button--micro:link:active:not(.Button--disabled),\n.Notice-warningInfo .Notice-button:active:not(.Button--disabled),\n.Notice-warningInfo .Notice-button.Button--micro:active:not(.Button--disabled),\n.Notice-warningInfo .Notice-button.Button--micro:link:active:not(.Button--disabled) {\n  padding-top: 7px;\n}\n\n.Notice-warning .Notice-icon,\n.Notice-warningInfo .Notice-icon {\n  background-image: url(" + ___CSS_LOADER_URL___3___ + ");\n}\n\n.Notice-warning .IconXMark-path,\n.Notice-warningInfo .IconXMark-path {\n  fill: #3e2800;\n}\n\n.Notice-warning .Notice-icon,\n.Notice-warningInfo .Notice-icon {\n  background-size: cover;\n}\n\n.Notice-firefox .Notice-icon {\n  background-image: url(" + ___CSS_LOADER_URL___4___ + ");\n}\n\n.Notice-warningInfo .Notice-icon {\n  background-image: url(" + ___CSS_LOADER_URL___1___ + ");\n}\n\n.Notice-genericWarning .Notice-icon {\n  background-image: url(" + ___CSS_LOADER_URL___3___ + ");\n  background-size: cover;\n}\n", ""]);



/***/ }),

/***/ 1921:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg width='14px' height='14px' viewBox='0 0 14 14' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 48.2 (47327) - http://www.bohemiancoding.com/sketch --%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='exclamation' fill='%23FFFFFF' fill-rule='nonzero'%3E %3Cpath d='M7,0 C3.13400675,-2.36723813e-16 4.73447626e-16,3.13400675 0,7 C-4.73447626e-16,10.8659932 3.13400675,14 7,14 C10.8659932,14 14,10.8659932 14,7 C14,3.13400675 10.8659932,1.79103605e-15 7,0 Z M6.125,4.375 C6.125,3.89175084 6.51675084,3.5 7,3.5 C7.48324916,3.5 7.875,3.89175084 7.875,4.375 L7.875,7 C7.875,7.48324916 7.48324916,7.875 7,7.875 C6.51675084,7.875 6.125,7.48324916 6.125,7 L6.125,4.375 Z M7,10.66625 C6.4249335,10.66625 5.95875,10.2000665 5.95875,9.625 C5.95875,9.0499335 6.4249335,8.58375 7,8.58375 C7.5750665,8.58375 8.04125,9.0499335 8.04125,9.625 C8.04125,10.2000665 7.5750665,10.66625 7,10.66625 Z' id='Shape'%3E%3C/path%3E %3C/g%3E %3C/g%3E %3C/svg%3E"

/***/ }),

/***/ 1922:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3C!-- This Source Code Form is subject to the terms of the Mozilla Public - License, v. 2.0. If a copy of the MPL was not distributed with this - file, You can obtain one at http://mozilla.org/MPL/2.0/. --%3E %3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill='context-fill' fill-rule='evenodd' d='M8 15a7 7 0 1 1 7-7 7 7 0 0 1-7 7zM8 2a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm0 10a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v3a1 1 0 0 1-1 1zm0-6a1 1 0 1 1 1-1 1 1 0 0 1-1 1z'%3E%3C/path%3E%3C/svg%3E"

/***/ }),

/***/ 1923:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg width='12px' height='12px' viewBox='0 0 12 12' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 48.2 (47327) - http://www.bohemiancoding.com/sketch --%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='check-16' fill='%23003706' fill-rule='nonzero'%3E %3Cpath d='M4,12 C3.73480519,11.9999434 3.48049273,11.8945494 3.293,11.707 L0.293,8.707 C-0.0859722095,8.31462111 -0.0805523739,7.69091522 0.305181425,7.30518142 C0.690915223,6.91944763 1.31462111,6.91402779 1.707,7.293 L3.864,9.45 L10.18,0.427 C10.4986123,-0.0195570389 11.1174952,-0.126073837 11.5670672,0.188269953 C12.0166392,0.502613743 12.1290468,1.12045391 11.819,1.573 L4.819,11.573 C4.65035194,11.8167957 4.38222928,11.9732006 4.087,12 C4.05801844,12.0014627 4.02898156,12.0014627 4,12 Z' id='Shape'%3E%3C/path%3E %3C/g%3E %3C/g%3E %3C/svg%3E"

/***/ }),

/***/ 1924:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3C!-- This Source Code Form is subject to the terms of the Mozilla Public - License, v. 2.0. If a copy of the MPL was not distributed with this - file, You can obtain one at http://mozilla.org/MPL/2.0/. --%3E %3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M3.215 18.106l6.996-14.004c.737-1.475 2.841-1.475 3.578 0l6.996 14.004A2 2 0 0 1 18.995 21H5.005a2 2 0 0 1-1.79-2.894zM12 9a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1zm0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z' fill='%230C0C0D' fill-opacity='.8'%3E%3C/path%3E %3C/svg%3E"

/***/ }),

/***/ 1925:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3C?xml version='1.0'?%3E %3C!-- This Source Code Form is subject to the terms of the Mozilla Public - License, v. 2.0. If a copy of the MPL was not distributed with this - file, You can obtain one at http://mozilla.org/MPL/2.0/. --%3E %3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='16' height='16' viewBox='0 0 16 16'%3E %3Cstyle%3E path %7B fill-rule: evenodd; fill:%234d4d4d; %7D %3C/style%3E %3Cpath d='M174.446,28.071a5.639,5.639,0,0,0,.479-3.983c0,0.014.007,0.028,0.011,0.042l-0.009-.026s-0.1.288-.23,0.733c-0.009-.059-0.018-0.119-0.029-0.178a6.442,6.442,0,0,0-.087-1.675,3.38,3.38,0,0,0-1.2-1.878c0.018,0.013.036,0.029,0.055,0.046-0.041-.032-0.065-0.048-0.065-0.048l0.041,0.221a2.691,2.691,0,0,0-.978-0.9s0.018,0.1.048,0.315a6.84,6.84,0,0,0-9.157.057,3.3,3.3,0,0,1,.209.282,4.205,4.205,0,0,1,1.026-.029,5.87,5.87,0,0,1,7.526.654c0.058,0.058.114,0.117,0.169,0.177a2.281,2.281,0,0,0-1.034-.482,4.092,4.092,0,0,1,1.424,3.584,2.384,2.384,0,0,0-.547-0.767,6.375,6.375,0,0,1-.106,2.966,1.727,1.727,0,0,0-.168-0.54,4.465,4.465,0,0,1-.431,1.518,1.171,1.171,0,0,1-.766.861c-0.125-.021-0.04-0.141-0.063-0.258a1.666,1.666,0,0,0-.423.321,0.763,0.763,0,0,1-.473.372,1.009,1.009,0,0,0,.176-0.246,1.526,1.526,0,0,1-.724.27,3.176,3.176,0,0,1-1.991-.348,0.873,0.873,0,0,1,.547.031,2.279,2.279,0,0,0-.884-0.242A2.876,2.876,0,0,1,166,28.294a2.81,2.81,0,0,0,2.127-.28,1.771,1.771,0,0,1,1.047-.525,0.252,0.252,0,0,0,.233-0.438,1.356,1.356,0,0,0-1.367-.379,1.971,1.971,0,0,1-1.948.117,1.108,1.108,0,0,1-.756-1.051,0.581,0.581,0,0,1,.28-0.479,1.354,1.354,0,0,1,.16.067s-0.046-.07-0.075-0.1l0.021-.006a3.648,3.648,0,0,1,.354.14,0.442,0.442,0,0,1,.166.126s0.029-.018,0-0.082a0.451,0.451,0,0,0-.181-0.178h0.007a1.761,1.761,0,0,1,.209.1,0.944,0.944,0,0,0,.039-0.423,0.523,0.523,0,0,0-.055-0.227c-0.03-.043.008-0.063,0.055-0.023a0.585,0.585,0,0,0-.046-0.1v0a0.111,0.111,0,0,1,.018-0.037,7.132,7.132,0,0,1,1.126-.732,0.977,0.977,0,0,0,.248-0.275,0.766,0.766,0,0,0,.175-0.474,0.3,0.3,0,0,0-.231-0.172,1,1,0,0,0-.333-0.02l0.019,0.009c-0.168-.011-0.4-0.015-0.7-0.013a0.734,0.734,0,0,1-.614-0.339l-0.063-.1a1.259,1.259,0,0,1-.06-0.122,2.365,2.365,0,0,1,.806-1.223c0.025-.021-0.1.014-0.074-0.008a2.391,2.391,0,0,1,.234-0.127,0.466,0.466,0,0,0-.387-0.045,0.978,0.978,0,0,0-.338.117c0.041-.043.175-0.111,0.143-0.1a2.11,2.11,0,0,0-.685.342,0.276,0.276,0,0,1,0-.067,1.153,1.153,0,0,0-.411.387,0.593,0.593,0,0,0,0-.082,1.506,1.506,0,0,0-.2.224l0,0a2.954,2.954,0,0,0-1.641.025,2.589,2.589,0,0,1-.558-0.625c-0.017-.026-0.019.058-0.034,0.031a1.991,1.991,0,0,1-.2-0.7c0-.023,0-0.046,0-0.067a0.593,0.593,0,0,0-.175.2,1.24,1.24,0,0,0-.117.267c-0.021.064-.036,0.1-0.05,0.138-0.005.011,0.009-.117,0-0.107a0.889,0.889,0,0,0-.106.2,1.021,1.021,0,0,0-.05.177,0.008,0.008,0,0,0,0,0,0.28,0.28,0,0,0-.008-0.076,3.274,3.274,0,0,0-.14.476,2.781,2.781,0,0,0-.075.451,4.235,4.235,0,0,0,0,.669c0,0.039,0,.076,0,0.111a3.094,3.094,0,0,0-.322.544,7.273,7.273,0,0,0-.6,2.023,4.675,4.675,0,0,1,.344-0.778c0,0.005,0,.011,0,0.016a6.993,6.993,0,0,0-.22,2.551,7.377,7.377,0,0,1,.132-0.77,6.417,6.417,0,0,0,.914,2.9,5.935,5.935,0,0,0,1.633,1.848q0.171,0.137.349,0.263a7.53,7.53,0,0,0,2.953,1.384,1.539,1.539,0,0,1-.571-0.305,7.511,7.511,0,0,0,2.074.352,0.4,0.4,0,0,1-.329-0.18s2.492,0.141,3.787-.881a1.378,1.378,0,0,0,.537-0.7,5.166,5.166,0,0,0,1.217-.9,2.6,2.6,0,0,0,.856-1.714c0,0.016-.006.031-0.009,0.046A0.739,0.739,0,0,0,174.446,28.071Z' transform='translate(-160 -18)'/%3E %3C/svg%3E"

/***/ }),

/***/ 1926:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(68);
            var content = __webpack_require__(1927);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 1927:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(69)(false);
// Module
exports.push([module.i, ".ErrorList {\n  margin: 0;\n  margin-bottom: 10px;\n  padding: 0;\n}\n\n.ErrorList-item,\n.CardList .ErrorList-item {\n  background: none;\n}\n\n.ErrorList-item {\n  list-style: none;\n  margin-bottom: 10px;\n}\n\n.ErrorList-item:last-child {\n  margin-bottom: 0;\n}\n", ""]);



/***/ }),

/***/ 1928:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(68);
            var content = __webpack_require__(1929);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 1929:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(69)(false);
// Module
exports.push([module.i, ".SiteNotices .Notice-column {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n", ""]);



/***/ }),

/***/ 1930:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(68);
            var content = __webpack_require__(1931);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 1931:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(69)(false);
// Module
exports.push([module.i, "/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n/* AUTOGENERATED Photon Colors SCSS Variables v3.3.2 */\n/* Font mixins. Changes here affect *all* apps */\n/* Shared mixins. Bear in mind changes here impact *all* apps. */\n/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n/* AUTOGENERATED Photon Colors SCSS Variables v3.3.2 */\n.SurveyNotice .Notice-column {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n", ""]);



/***/ }),

/***/ 1932:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(68);
            var content = __webpack_require__(1933);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 1933:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(69)(false);
// Module
exports.push([module.i, "/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n/* AUTOGENERATED Photon Colors SCSS Variables v3.3.2 */\n/* Font mixins. Changes here affect *all* apps */\n/* Shared mixins. Bear in mind changes here impact *all* apps. */\n/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n/* AUTOGENERATED Photon Colors SCSS Variables v3.3.2 */\n/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n/* AUTOGENERATED Photon Colors SCSS Variables v3.3.2 */\n.AppBanner {\n  padding: 10px;\n  padding-bottom: 5px;\n  padding-top: 5px;\n}\n\n.AppBanner > *:not(:last-child) {\n  margin-bottom: 5px;\n}\n\n@media (min-width: 720px) {\n  .AppBanner {\n    padding: 24px;\n    padding-bottom: 12px;\n    padding-top: 12px;\n  }\n  .AppBanner > *:not(:last-child) {\n    margin-bottom: 12px;\n  }\n}\n", ""]);



/***/ }),

/***/ 1934:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(68);
            var content = __webpack_require__(1935);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 1935:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(69)(false);
// Module
exports.push([module.i, "/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n/* AUTOGENERATED Photon Colors SCSS Variables v3.3.2 */\n/* Font mixins. Changes here affect *all* apps */\n/* Shared mixins. Bear in mind changes here impact *all* apps. */\n/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n/* AUTOGENERATED Photon Colors SCSS Variables v3.3.2 */\n/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n/* AUTOGENERATED Photon Colors SCSS Variables v3.3.2 */\n.WrongPlatformWarning {\n  margin: 0 0 12px 0;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n@media (min-width: 720px) {\n  .WrongPlatformWarning {\n    padding-left: 24px;\n    padding-right: 24px;\n  }\n}\n", ""]);



/***/ }),

/***/ 1936:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(68);
            var content = __webpack_require__(1937);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 1937:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(69)(false);
// Module
exports.push([module.i, "/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n/* AUTOGENERATED Photon Colors SCSS Variables v3.3.2 */\n/* Font mixins. Changes here affect *all* apps */\n/* Shared mixins. Bear in mind changes here impact *all* apps. */\n/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n/* AUTOGENERATED Photon Colors SCSS Variables v3.3.2 */\n@-webkit-keyframes placeHolderShimmer {\n  0% {\n    opacity: 0.5;\n  }\n  25% {\n    opacity: 0.25;\n  }\n  50% {\n    opacity: 0.75;\n  }\n  75% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.5;\n  }\n}\n@keyframes placeHolderShimmer {\n  0% {\n    opacity: 0.5;\n  }\n  25% {\n    opacity: 0.25;\n  }\n  50% {\n    opacity: 0.75;\n  }\n  75% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.5;\n  }\n}\n\n.LoadingText {\n  -webkit-animation: placeHolderShimmer 3s infinite cubic-bezier(0.65, 0.05, 0.36, 1);\n          animation: placeHolderShimmer 3s infinite cubic-bezier(0.65, 0.05, 0.36, 1);\n  background: #d7d7db;\n  display: inline-block;\n  height: 1rem;\n  line-height: 1;\n  margin: 0;\n  vertical-align: middle;\n}\n\n.LoadingText--delay-1 {\n  -webkit-animation: placeHolderShimmer 1.5s infinite cubic-bezier(0.65, 0.05, 0.36, 1);\n          animation: placeHolderShimmer 1.5s infinite cubic-bezier(0.65, 0.05, 0.36, 1);\n}\n\n.LoadingText--delay-2 {\n  -webkit-animation: placeHolderShimmer 3s infinite cubic-bezier(0.65, 0.05, 0.36, 1);\n          animation: placeHolderShimmer 3s infinite cubic-bezier(0.65, 0.05, 0.36, 1);\n}\n\n.LoadingText--delay-3 {\n  -webkit-animation: placeHolderShimmer 4.5s infinite cubic-bezier(0.65, 0.05, 0.36, 1);\n          animation: placeHolderShimmer 4.5s infinite cubic-bezier(0.65, 0.05, 0.36, 1);\n}\n", ""]);



/***/ }),

/***/ 1938:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(68);
            var content = __webpack_require__(1939);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 1939:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(69)(false);
// Module
exports.push([module.i, "/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n/* AUTOGENERATED Photon Colors SCSS Variables v3.3.2 */\n/* Font mixins. Changes here affect *all* apps */\n/* Shared mixins. Bear in mind changes here impact *all* apps. */\n/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n/* AUTOGENERATED Photon Colors SCSS Variables v3.3.2 */\n/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n/* AUTOGENERATED Photon Colors SCSS Variables v3.3.2 */\n.HeroRecommendation-wrapper {\n  margin: 0 auto;\n  max-width: 1366px;\n}\n\n.HeroRecommendation--height-with-notice {\n  min-height: 328px;\n}\n\n@media (min-width: 1150px) {\n  .HeroRecommendation--height-with-notice {\n    min-height: 452px;\n  }\n}\n\n.HeroRecommendation--height-without-notice {\n  min-height: 252px;\n}\n\n@media (min-width: 1150px) {\n  .HeroRecommendation--height-without-notice {\n    min-height: 376px;\n  }\n}\n\n.HeroRecommendation .ErrorList {\n  padding: 24px;\n  padding-bottom: 0;\n}\n\n.HeroRecommendation-banner {\n  padding-bottom: 0;\n}\n\n.HeroRecommendation-content {\n  color: #fff;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  min-width: 0;\n  padding: 24px;\n}\n\n@media (min-width: 1150px) {\n  .HeroRecommendation-content {\n    padding: 36px;\n  }\n}\n\n@media (min-width: 500px) {\n  .HeroRecommendation-image-wrapper {\n    -webkit-box-flex: 40%;\n        -ms-flex: 40%;\n            flex: 40%;\n  }\n}\n\n@media (min-width: 1150px) {\n  .HeroRecommendation-image-wrapper {\n    -webkit-box-flex: initial;\n        -ms-flex: initial;\n            flex: initial;\n  }\n}\n\n.HeroRecommendation-info {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n@media (min-width: 500px) {\n  .HeroRecommendation-info {\n    -webkit-box-flex: 60%;\n        -ms-flex: 60%;\n            flex: 60%;\n  }\n  [dir='ltr'] .HeroRecommendation-info {\n    margin-left: 24px;\n  }\n  [dir='rtl'] .HeroRecommendation-info {\n    margin-right: 24px;\n  }\n}\n\n@media (min-width: 900px) {\n  [dir='ltr'] .HeroRecommendation-info {\n    margin-left: 96px;\n  }\n  [dir='rtl'] .HeroRecommendation-info {\n    margin-right: 96px;\n  }\n}\n\n@media (min-width: 1150px) {\n  .HeroRecommendation-info {\n    -webkit-box-flex: initial;\n        -ms-flex: initial;\n            flex: initial;\n  }\n  [dir='ltr'] .HeroRecommendation-info {\n    margin-left: 132px;\n  }\n  [dir='rtl'] .HeroRecommendation-info {\n    margin-right: 132px;\n  }\n}\n\n.HeroRecommendation-recommended {\n  font-family: 'Fira Sans', sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  letter-spacing: 0.1em;\n  line-height: 1.143;\n  margin: 0;\n  opacity: 0.5;\n}\n\n@media (min-width: 500px) {\n  .HeroRecommendation-recommended {\n    font-size: 18px;\n  }\n}\n\n@media (min-width: 1150px) {\n  .HeroRecommendation-recommended {\n    margin-top: 16px;\n  }\n}\n\n.HeroRecommendation-body,\n.HeroRecommendation-heading,\n.HeroRecommendation-recommended {\n  width: 100%;\n}\n\n.HeroRecommendation-body .LoadingText,\n.HeroRecommendation-heading .LoadingText,\n.HeroRecommendation-recommended .LoadingText {\n  height: 1em;\n}\n\n.HeroRecommendation-heading {\n  font-family: 'Fira Sans', sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  color: #fff;\n  font-size: 28px;\n  line-height: 1.188;\n  margin: 14px 0 0 0;\n  overflow-wrap: anywhere;\n}\n\n@media (min-width: 1150px) {\n  .HeroRecommendation-heading {\n    font-size: 38px;\n  }\n}\n\n.HeroRecommendation-body {\n  font-family: 'Fira Sans', sans-serif;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 12px;\n  line-height: 1.666;\n  margin: 18px 0 24px 0;\n}\n\n@media (min-width: 500px) {\n  .HeroRecommendation-body {\n    font-size: 21px;\n  }\n}\n\n@media (min-width: 1150px) {\n  .HeroRecommendation-body {\n    margin-bottom: 84px;\n  }\n}\n\n.HeroRecommendation--no-image {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.HeroRecommendation--no-image .HeroRecommendation-info {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  margin: 0 auto;\n}\n\n@media (min-width: 720px) {\n  .HeroRecommendation--no-image .HeroRecommendation-info {\n    -webkit-box-flex: 0;\n        -ms-flex-positive: 0;\n            flex-grow: 0;\n    width: 576px;\n  }\n}\n\n.HeroRecommendation--no-image .HeroRecommendation-recommended,\n.HeroRecommendation--no-image .HeroRecommendation-heading,\n.HeroRecommendation--no-image .HeroRecommendation-body,\n.HeroRecommendation--no-image .HeroRecommendation-link {\n  text-align: center;\n}\n\n.HeroRecommendation-image {\n  height: 0;\n  visibility: hidden;\n  width: 0;\n}\n\n@media (min-width: 500px) {\n  .HeroRecommendation-image {\n    height: auto;\n    visibility: visible;\n    width: 100%;\n  }\n}\n\n@media (min-width: 1150px) {\n  .HeroRecommendation-image {\n    width: 480px;\n  }\n}\n\n.HeroRecommendation-link {\n  background-color: transparent;\n  border: 4px solid #fff;\n  display: inline-block;\n  font-size: 16px;\n  line-height: 1.25;\n  padding: 12px 24px;\n  text-align: center;\n  -webkit-transition: background-color 450ms ease-in-out;\n  transition: background-color 450ms ease-in-out;\n  white-space: nowrap;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.HeroRecommendation-link, .HeroRecommendation-link:active, .HeroRecommendation-link:link, .HeroRecommendation-link:hover, .HeroRecommendation-link:visited {\n  color: #fff;\n  text-decoration: none;\n}\n\n@media (min-width: 500px) {\n  .HeroRecommendation-link {\n    padding: 12px 48px;\n  }\n}\n\n.HeroRecommendation-color-ink-80-color-blue-70 {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#20123a), to(#054096));\n  background-image: linear-gradient(#20123a, #054096);\n}\n\n.HeroRecommendation-color-ink-80-color-blue-70 .HeroRecommendation-link:hover, .HeroRecommendation-color-ink-80-color-blue-70 .HeroRecommendation-link:active {\n  background-color: #054096;\n}\n\n.HeroRecommendation-color-ink-80-color-green-70 {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#20123a), to(#008787));\n  background-image: linear-gradient(#20123a, #008787);\n}\n\n.HeroRecommendation-color-ink-80-color-green-70 .HeroRecommendation-link:hover, .HeroRecommendation-color-ink-80-color-green-70 .HeroRecommendation-link:active {\n  background-color: #008787;\n}\n\n.HeroRecommendation-color-ink-80-color-pink-70 {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#20123a), to(#c60084));\n  background-image: linear-gradient(#20123a, #c60084);\n}\n\n.HeroRecommendation-color-ink-80-color-pink-70 .HeroRecommendation-link:hover, .HeroRecommendation-color-ink-80-color-pink-70 .HeroRecommendation-link:active {\n  background-color: #c60084;\n}\n\n.HeroRecommendation-color-ink-80-color-purple-70 {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#20123a), to(#722291));\n  background-image: linear-gradient(#20123a, #722291);\n}\n\n.HeroRecommendation-color-ink-80-color-purple-70 .HeroRecommendation-link:hover, .HeroRecommendation-color-ink-80-color-purple-70 .HeroRecommendation-link:active {\n  background-color: #722291;\n}\n\n.HeroRecommendation-color-ink-80-color-violet-70 {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#20123a), to(#592acb));\n  background-image: linear-gradient(#20123a, #592acb);\n}\n\n.HeroRecommendation-color-ink-80-color-violet-70 .HeroRecommendation-link:hover, .HeroRecommendation-color-ink-80-color-violet-70 .HeroRecommendation-link:active {\n  background-color: #592acb;\n}\n\n.HeroRecommendation--loading {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#20123a), to(#054096));\n  background-image: linear-gradient(#20123a, #054096);\n}\n\n.HeroRecommendation--loading .HeroRecommendation-link:hover, .HeroRecommendation--loading .HeroRecommendation-link:active {\n  background-color: #054096;\n}\n\n.HeroRecommendation-WrongPlatformWarning {\n  margin-top: 12px;\n}\n", ""]);



/***/ }),

/***/ 1940:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81);
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storybook_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _storybook_addon_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(151);
/* harmony import */ var _storybook_addon_info__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_info__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ui_components_Badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(471);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(203);
var label="Hello Badge",types=["experimental","restart-required","not-compatible","requires-payment"];function createPropsMatrix(chapter){return[{props:{type:chapter,label:label}}]}var _ref=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ui_components_Badge__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],{label:""});Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__["storiesOf"])("Badge",module).add("Badge props",Object(_storybook_addon_info__WEBPACK_IMPORTED_MODULE_2__["withInfo"])()(function(){return _ref})).addWithChapters("Badge variations",{chapters:Object(_utils__WEBPACK_IMPORTED_MODULE_4__[/* createChapters */ "a"])({Component:ui_components_Badge__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],chapters:types,children:"Hello Badge",createPropsMatrix:createPropsMatrix,otherChapterProps:{// Since Badge has a simple props matrix we don't need to display
// a title since there is only one item in each group (aka chapter).
// TODO: maybe create separate createSections util helper.
title:void 0}})});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(129)(module)))

/***/ }),

/***/ 1941:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(68);
            var content = __webpack_require__(1942);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 1942:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(69)(false);
// Module
exports.push([module.i, "/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n/* AUTOGENERATED Photon Colors SCSS Variables v3.3.2 */\n/* Font mixins. Changes here affect *all* apps */\n/* Shared mixins. Bear in mind changes here impact *all* apps. */\n/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n/* AUTOGENERATED Photon Colors SCSS Variables v3.3.2 */\n.Badge {\n  color: #0c0c0d;\n  font-size: 14px;\n  line-height: 1.2;\n  margin: 0 0 6px;\n}\n\n@media (min-width: 720px) {\n  .Badge {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse;\n    margin: 0 0 12px;\n  }\n  .Addon-theme .Badge {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n  }\n}\n\n.Badge .Icon {\n  margin: 0 6px 0 0;\n  vertical-align: top;\n}\n\n[dir='rtl'] .Badge .Icon {\n  margin: 0 0 0 6px;\n}\n\n@media (min-width: 720px) {\n  .Badge .Icon {\n    margin: 0 0 0 6px;\n  }\n  [dir='rtl'] .Badge .Icon {\n    margin: 0 6px 0 0;\n  }\n}\n", ""]);



/***/ }),

/***/ 1943:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(81);
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_storybook_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _storybook_addon_info__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(151);
/* harmony import */ var _storybook_addon_info__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_info__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ui_components_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(93);
/* harmony import */ var _setup_Provider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(204);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(203);
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1,source;i<arguments.length;i++){source=null!=arguments[i]?arguments[i]:{};if(i%2){ownKeys(Object(source),!0).forEach(function(key){_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}return obj}var buttonTypes=["none","neutral","alert","light","action","cancel","confirm"];function createPropsMatrix(chapter){return[{props:_objectSpread({},ui_components_Button__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].defaultProps,{buttonType:chapter})},{props:_objectSpread({},ui_components_Button__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].defaultProps,{buttonType:chapter,disabled:!0})},{props:_objectSpread({},ui_components_Button__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].defaultProps,{buttonType:chapter,puffy:!0})},{props:_objectSpread({},ui_components_Button__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].defaultProps,{buttonType:chapter,puffy:!0,disabled:!0})},{props:_objectSpread({},ui_components_Button__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].defaultProps,{buttonType:chapter,micro:!0})},{props:_objectSpread({},ui_components_Button__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].defaultProps,{buttonType:chapter,micro:!0,disabled:!0})},{props:_objectSpread({},ui_components_Button__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].defaultProps,{buttonType:chapter,externalDark:!0,puffy:!0,href:"http://www.example.com"})},{props:_objectSpread({},ui_components_Button__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].defaultProps,{buttonType:chapter,externalDark:!0,micro:!0,href:"http://www.example.com"})}]}var _ref=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(ui_components_Button__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"],null);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_8__["storiesOf"])("Button",module).addDecorator(function(story){return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_setup_Provider__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"],{story:story()})}).add("Button props",Object(_storybook_addon_info__WEBPACK_IMPORTED_MODULE_9__["withInfo"])()(function(){return _ref})).addWithChapters("Button variations",{chapters:Object(_utils__WEBPACK_IMPORTED_MODULE_12__[/* createChapters */ "a"])({Component:ui_components_Button__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"],chapters:buttonTypes,children:"Hello Button",createPropsMatrix:createPropsMatrix})});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(129)(module)))

/***/ }),

/***/ 1944:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81);
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storybook_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ui_components_IconRecommendedBadge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(343);
// TODO: remove the comment below once
// https://github.com/yannickcr/eslint-plugin-react/issues/2298 is fixed.
// eslint-disable-next-line react/prop-types
var render=function(){var _ref=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},_ref$size=_ref.size,size=void 0===_ref$size?"large":_ref$size;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ui_components_IconRecommendedBadge__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],{size:size})};render.displayName="render";Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__["storiesOf"])("IconRecommendedBadge",module).addWithChapters("all variants",{chapters:[{sections:[{title:"size=\"large\"",sectionFn:function sectionFn(){return render({size:"large"})}},{title:"size=\"small\"",sectionFn:function sectionFn(){return render({size:"small"})}}]}]});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(129)(module)))

/***/ }),

/***/ 1945:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(68);
            var content = __webpack_require__(1946);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 1946:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(69)(false);
// Module
exports.push([module.i, "/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n/* AUTOGENERATED Photon Colors SCSS Variables v3.3.2 */\n/* Font mixins. Changes here affect *all* apps */\n/* Shared mixins. Bear in mind changes here impact *all* apps. */\n/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n/* AUTOGENERATED Photon Colors SCSS Variables v3.3.2 */\n.IconRecommendedBadge {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: auto;\n  width: auto;\n}\n\n.IconRecommendedBadge-svg {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  height: 16px;\n  width: 16px;\n}\n\n.IconRecommendedBadge-shellPath {\n  fill: #ff9400;\n}\n\n.IconRecommendedBadge-iconPath {\n  fill: #fff;\n  -webkit-transform-origin: 50% 50%;\n          transform-origin: 50% 50%;\n}\n\n.IconRecommendedBadge-large .IconRecommendedBadge-svg {\n  height: 24px;\n  width: 24px;\n}\n\n.IconRecommendedBadge-large .IconRecommendedBadge-iconPath {\n  -webkit-transform: translate(2px, 2.5px) scale(1.1);\n          transform: translate(2px, 2.5px) scale(1.1);\n}\n\n.IconRecommendedBadge-small .IconRecommendedBadge-svg {\n  height: 16px;\n  width: 16px;\n}\n\n.IconRecommendedBadge-small .IconRecommendedBadge-iconPath {\n  -webkit-transform: translate(-1.5px, -1.5px) scale(0.8);\n          transform: translate(-1.5px, -1.5px) scale(0.8);\n}\n", ""]);



/***/ }),

/***/ 1947:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81);
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storybook_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _storybook_addon_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(151);
/* harmony import */ var _storybook_addon_info__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_info__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tests_unit_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(105);
/* harmony import */ var ui_components_Rating__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(473);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(203);
/* harmony import */ var _setup_Provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(204);
function createPropsMatrix(){return[{props:{readOnly:!1,styleSize:"small",rating:void 0,yellowStars:!0}},{props:{readOnly:!1,styleSize:"small",rating:null,yellowStars:!0}},{props:{readOnly:!1,styleSize:"small",rating:4,yellowStars:!0}},{props:{readOnly:!0,styleSize:"small",rating:3.5,yellowStars:!0}},{props:{readOnly:!0,styleSize:"small",rating:4,yellowStars:!0}},{props:{readOnly:!1,styleSize:"large",rating:void 0,yellowStars:!0}},{props:{readOnly:!1,styleSize:"large",rating:null,yellowStars:!0}},{props:{readOnly:!1,styleSize:"large",rating:3,yellowStars:!0}},{props:{readOnly:!0,styleSize:"large",rating:3.5,yellowStars:!0}},{props:{readOnly:!0,styleSize:"large",rating:4,yellowStars:!0}},{props:{readOnly:!0,styleSize:"small",rating:void 0,yellowStars:!1}},{props:{readOnly:!0,styleSize:"small",rating:null,yellowStars:!1}},{props:{readOnly:!0,styleSize:"small",rating:3.5,yellowStars:!1}},{props:{readOnly:!0,styleSize:"small",rating:4,yellowStars:!1}},{props:{readOnly:!0,styleSize:"large",rating:void 0,yellowStars:!1}},{props:{readOnly:!0,styleSize:"large",rating:null,yellowStars:!1}},{props:{readOnly:!0,styleSize:"large",rating:3.4,yellowStars:!1}},{props:{readOnly:!0,styleSize:"large",rating:4,yellowStars:!1}}]}Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__["storiesOf"])("Rating",module).addDecorator(function(story){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"Rating--storybook"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_setup_Provider__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"],{story:story()}))}).add("Rating props",Object(_storybook_addon_info__WEBPACK_IMPORTED_MODULE_2__["withInfo"])()(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ui_components_Rating__WEBPACK_IMPORTED_MODULE_4__[/* RatingBase */ "a"],{rating:4,i18n:Object(tests_unit_helpers__WEBPACK_IMPORTED_MODULE_3__[/* fakeI18n */ "d"])({includeJedSpy:!1})})})).addWithChapters("Rating variations",{chapters:Object(_utils__WEBPACK_IMPORTED_MODULE_5__[/* createChapters */ "a"])({Component:ui_components_Rating__WEBPACK_IMPORTED_MODULE_4__[/* default */ "b"],chapters:["Rating"],createPropsMatrix:createPropsMatrix,otherChapterProps:{// Since Rating has a simple props matrix we don't need to display
// a title since there is only one item in each group (aka chapter).
// TODO: maybe create separate createSections util helper.
title:void 0}})});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(129)(module)))

/***/ }),

/***/ 1950:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(68);
            var content = __webpack_require__(1951);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 1951:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(69)(false);
// Module
exports.push([module.i, "/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n/* AUTOGENERATED Photon Colors SCSS Variables v3.3.2 */\n/* Font mixins. Changes here affect *all* apps */\n/* Shared mixins. Bear in mind changes here impact *all* apps. */\n/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n/* AUTOGENERATED Photon Colors SCSS Variables v3.3.2 */\n.Rating {\n  -ms-flex-line-pack: center;\n      align-content: center;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-template-rows: 1fr;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.Rating.Rating--small {\n  grid-column-gap: 4px;\n  min-height: 13px;\n  width: -webkit-min-content;\n  width: -moz-min-content;\n  width: min-content;\n}\n\n.Rating.Rating--small .IconStar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 19px;\n  width: 13px;\n}\n\n.Rating.Rating--small .IconStar svg {\n  width: inherit;\n}\n\n.Rating.Rating--large {\n  grid-column-gap: 6px;\n  max-width: 300px;\n  min-height: 48px;\n  width: 100%;\n}\n\n.Rating.Rating--large .IconStar {\n  height: 100%;\n  width: 100%;\n}\n\n@media (min-width: 1150px) {\n  .Rating.Rating--large {\n    grid-column-gap: 12px;\n    max-width: none;\n  }\n}\n\n@-webkit-keyframes pulseOpaqueRatingStars {\n  0%,\n  100% {\n    opacity: 0.2;\n  }\n  50% {\n    opacity: 0.4;\n  }\n}\n\n@keyframes pulseOpaqueRatingStars {\n  0%,\n  100% {\n    opacity: 0.2;\n  }\n  50% {\n    opacity: 0.4;\n  }\n}\n\n@-webkit-keyframes pulseDimRatingStars {\n  0%,\n  100% {\n    opacity: 0.5;\n  }\n  50% {\n    opacity: 1;\n  }\n}\n\n@keyframes pulseDimRatingStars {\n  0%,\n  100% {\n    opacity: 0.5;\n  }\n  50% {\n    opacity: 1;\n  }\n}\n\n.Rating-star {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 0;\n}\n\n.Rating-star:not(.focus-visible) {\n  outline: none;\n}\n\n.Rating--small .Rating-star {\n  min-width: 13px;\n}\n\n.Rating--loading .Rating-star {\n  -webkit-animation: pulseDimRatingStars 1s infinite;\n          animation: pulseDimRatingStars 1s infinite;\n}\n\n.Rating--editable .Rating-star {\n  cursor: pointer;\n}\n\n.Rating--editable.Rating.Rating--loading .Rating-star {\n  -webkit-animation-name: pulseOpaqueRatingStars;\n          animation-name: pulseOpaqueRatingStars;\n  cursor: initial;\n}\n\n[dir='rtl'] .Rating-half-star {\n  -webkit-transform: scaleX(-1);\n          transform: scaleX(-1);\n}\n", ""]);



/***/ }),

/***/ 1952:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(81);
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_storybook_react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var tests_unit_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(105);
/* harmony import */ var ui_components_RecommendedBadge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(750);
function _extends(){_extends=Object.assign||function(target){for(var i=1,source;i<arguments.length;i++){source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends.apply(this,arguments)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1,source;i<arguments.length;i++){source=null!=arguments[i]?arguments[i]:{};if(i%2){ownKeys(Object(source),!0).forEach(function(key){_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}return obj}var render=function(){var moreProps=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},props=_objectSpread({size:"large"},moreProps);return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ui_components_RecommendedBadge__WEBPACK_IMPORTED_MODULE_11__[/* RecommendedBadgeBase */ "a"],_extends({i18n:Object(tests_unit_helpers__WEBPACK_IMPORTED_MODULE_10__[/* fakeI18n */ "d"])({includeJedSpy:!1})},props))};render.displayName="render";Object(_storybook_react__WEBPACK_IMPORTED_MODULE_9__["storiesOf"])("RecommendedBadge",module).addWithChapters("all variants",{chapters:[{sections:[{title:"size=\"large\"",sectionFn:function sectionFn(){return render({size:"large"})}},{title:"size=\"small\"",sectionFn:function sectionFn(){return render({size:"small"})}}]}]});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(129)(module)))

/***/ }),

/***/ 1953:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(68);
            var content = __webpack_require__(1954);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 1954:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(69)(false);
// Module
exports.push([module.i, "/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n/* AUTOGENERATED Photon Colors SCSS Variables v3.3.2 */\n/* Font mixins. Changes here affect *all* apps */\n/* Shared mixins. Bear in mind changes here impact *all* apps. */\n/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n/* AUTOGENERATED Photon Colors SCSS Variables v3.3.2 */\n/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n/* AUTOGENERATED Photon Colors SCSS Variables v3.3.2 */\n/* Font mixins. Changes here affect *all* apps */\n/* Shared mixins. Bear in mind changes here impact *all* apps. */\n/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n/* AUTOGENERATED Photon Colors SCSS Variables v3.3.2 */\n.IconRecommendedBadge {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: auto;\n  width: auto;\n}\n\n.IconRecommendedBadge-svg {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  height: 16px;\n  width: 16px;\n}\n\n.IconRecommendedBadge-shellPath {\n  fill: #ff9400;\n}\n\n.IconRecommendedBadge-iconPath {\n  fill: #fff;\n  -webkit-transform-origin: 50% 50%;\n          transform-origin: 50% 50%;\n}\n\n.IconRecommendedBadge-large .IconRecommendedBadge-svg {\n  height: 24px;\n  width: 24px;\n}\n\n.IconRecommendedBadge-large .IconRecommendedBadge-iconPath {\n  -webkit-transform: translate(2px, 2.5px) scale(1.1);\n          transform: translate(2px, 2.5px) scale(1.1);\n}\n\n.IconRecommendedBadge-small .IconRecommendedBadge-svg {\n  height: 16px;\n  width: 16px;\n}\n\n.IconRecommendedBadge-small .IconRecommendedBadge-iconPath {\n  -webkit-transform: translate(-1.5px, -1.5px) scale(0.8);\n          transform: translate(-1.5px, -1.5px) scale(0.8);\n}\n\n.RecommendedBadge {\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  color: #ff9400;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 10px;\n  margin-bottom: 6px;\n}\n\n.RecommendedBadge.RecommendedBadge-large {\n  font-size: 14px;\n}\n\n[dir='ltr'] .Addon-theme .RecommendedBadge {\n  margin-right: 12px;\n}\n\n[dir='rtl'] .Addon-theme .RecommendedBadge {\n  margin-left: 12px;\n}\n\n@media (min-width: 720px) {\n  .RecommendedBadge {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n  }\n  .Addon-theme .RecommendedBadge {\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n  }\n}\n\n.RecommendedBadge-link {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border: 1px solid #ff9400;\n  border-radius: 20px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  max-height: 16px;\n}\n\n.RecommendedBadge-large .RecommendedBadge-link {\n  max-height: 24px;\n}\n\n.RecommendedBadge-link, .RecommendedBadge-link:link, .RecommendedBadge-link:visited {\n  color: #ff9400;\n  font-weight: normal;\n  text-decoration: none;\n}\n\n.RecommendedBadge-link:active, .RecommendedBadge-link:focus, .RecommendedBadge-link:hover {\n  border-color: #d76e00;\n  color: #d76e00;\n}\n\n.RecommendedBadge-link:active .IconRecommendedBadge-shellPath, .RecommendedBadge-link:focus .IconRecommendedBadge-shellPath, .RecommendedBadge-link:hover .IconRecommendedBadge-shellPath {\n  fill: #d76e00;\n}\n\n.RecommendedBadge-label {\n  color: #712b00;\n}\n\n[dir='ltr'] .RecommendedBadge-label {\n  margin-left: 2px;\n}\n\n[dir='rtl'] .RecommendedBadge-label {\n  margin-right: 2px;\n}\n\n[dir='ltr'] .RecommendedBadge-label {\n  margin-right: 8px;\n}\n\n[dir='rtl'] .RecommendedBadge-label {\n  margin-left: 8px;\n}\n\n[dir='ltr'] .RecommendedBadge-large .RecommendedBadge-label {\n  margin-left: 6px;\n}\n\n[dir='rtl'] .RecommendedBadge-large .RecommendedBadge-label {\n  margin-right: 6px;\n}\n", ""]);



/***/ }),

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return DISABLED; });
/* unused harmony export DISABLING */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return DOWNLOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return ENABLED; });
/* unused harmony export ENABLING */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return INACTIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return INSTALLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return INSTALLING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Qb", function() { return UNINSTALLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rb", function() { return UNINSTALLING; });
/* unused harmony export UNKNOWN */
/* unused harmony export validInstallStates */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return DOWNLOAD_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return INSTALL_CANCELLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hb", function() { return INSTALL_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return ERROR_CORRUPT_FILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return FATAL_INSTALL_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return FATAL_UNINSTALL_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return FATAL_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return CLIENT_APP_ANDROID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return CLIENT_APP_FIREFOX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ADDON_TYPE_DICT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ADDON_TYPE_EXTENSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return ADDON_TYPE_LANG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return ADDON_TYPE_OPENSEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return ADDON_TYPE_STATIC_THEME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Yb", function() { return validAddonTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return API_ADDON_TYPES_MAPPING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Xb", function() { return VISIBLE_ADDON_TYPES_MAPPING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return INCOMPATIBLE_FIREFOX_FOR_IOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return INCOMPATIBLE_OVER_MAX_VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return INCOMPATIBLE_NO_OPENSEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return INCOMPATIBLE_NOT_FIREFOX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return INCOMPATIBLE_UNDER_MIN_VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return INCOMPATIBLE_UNSUPPORTED_PLATFORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return INCOMPATIBLE_NON_RESTARTLESS_ADDON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return INCOMPATIBLE_FIREFOX_FENIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return INCOMPATIBLE_ANDROID_UNSUPPORTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nb", function() { return TRACKING_TYPE_EXTENSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pb", function() { return TRACKING_TYPE_STATIC_THEME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ob", function() { return TRACKING_TYPE_INVALID; });
/* unused harmony export INSTALL_SOURCE_COLLECTION */
/* unused harmony export INSTALL_SOURCE_FEATURED_COLLECTION */
/* unused harmony export INSTALL_SOURCE_DETAIL_PAGE */
/* unused harmony export INSTALL_SOURCE_DISCOVERY */
/* unused harmony export INSTALL_SOURCE_FEATURED */
/* unused harmony export INSTALL_SOURCE_HERO_PROMO */
/* unused harmony export INSTALL_SOURCE_MOST_POPULAR */
/* unused harmony export INSTALL_SOURCE_SEARCH */
/* unused harmony export INSTALL_SOURCE_TOP_RATED */
/* unused harmony export INSTALL_SOURCE_TRENDING */
/* unused harmony export INSTALL_SOURCE_GUIDES_PAGE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wb", function() { return VIEW_CONTEXT_EXPLORE; });
/* unused harmony export VIEW_CONTEXT_HOME */
/* unused harmony export VIEW_CONTEXT_LANGUAGE_TOOLS */
/* unused harmony export SEARCH_SORT_TRENDING */
/* unused harmony export SEARCH_SORT_TOP_RATED */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wb", function() { return SEARCH_SORT_POPULAR; });
/* unused harmony export SEARCH_SORT_RANDOM */
/* unused harmony export SEARCH_SORT_RELEVANCE */
/* unused harmony export SEARCH_SORT_UPDATED */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xb", function() { return SEARCH_SORT_RECOMMENDED; });
/* unused harmony export COLLECTION_SORT_DATE_ADDED_ASCENDING */
/* unused harmony export COLLECTION_SORT_DATE_ADDED_DESCENDING */
/* unused harmony export COLLECTION_SORT_NAME */
/* unused harmony export COLLECTION_SORT_POPULARITY_DESCENDING */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pb", function() { return OS_ALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tb", function() { return OS_WINDOWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sb", function() { return OS_MAC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rb", function() { return OS_LINUX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "qb", function() { return OS_ANDROID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return CLEAR_ERROR; });
/* unused harmony export FEATURED_GET */
/* unused harmony export FEATURED_LOADED */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yb", function() { return SET_AUTH_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zb", function() { return SET_CLIENT_APP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bb", function() { return SET_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cb", function() { return SET_ERROR_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Db", function() { return SET_LANG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Eb", function() { return SET_REQUEST_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fb", function() { return SET_USER_AGENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gb", function() { return SET_VIEW_CONTEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fb", function() { return INSTALL_EVENT_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lb", function() { return INSTALL_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hb", function() { return START_DOWNLOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return DOWNLOAD_PROGRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ab", function() { return INSTALL_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tb", function() { return UNINSTALL_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eb", function() { return INSTALL_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return ENABLE_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return INSTALL_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return INSTALL_CANCELLED_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bb", function() { return INSTALL_DOWNLOAD_FAILED_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ib", function() { return INSTALL_STARTED_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sb", function() { return UNINSTALL_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return ENABLE_EXTENSION_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return ENABLE_THEME_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gb", function() { return INSTALL_EXTENSION_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mb", function() { return INSTALL_THEME_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return INSTALL_CANCELLED_EXTENSION_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return INSTALL_CANCELLED_THEME_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cb", function() { return INSTALL_DOWNLOAD_FAILED_EXTENSION_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "db", function() { return INSTALL_DOWNLOAD_FAILED_THEME_CATEGORY; });
/* unused harmony export DISCO_NAVIGATION_CATEGORY */
/* unused harmony export DISCO_NAVIGATION_ACTION */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jb", function() { return INSTALL_STARTED_EXTENSION_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kb", function() { return INSTALL_STARTED_THEME_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ub", function() { return UNINSTALL_EXTENSION_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vb", function() { return UNINSTALL_THEME_CATEGORY; });
/* unused harmony export CLICK_CATEGORY */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lb", function() { return SURVEY_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ib", function() { return SURVEY_ACTION_DISMISSED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jb", function() { return SURVEY_ACTION_SHOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Kb", function() { return SURVEY_ACTION_VISITED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ab", function() { return SET_ENABLE_NOT_AVAILABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return GLOBAL_EVENT_STATUS_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ob", function() { return ON_OPERATION_CANCELLED_EVENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return GLOBAL_EVENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return ERROR_UNKNOWN; });
/* unused harmony export API_ERROR_DECODING_SIGNATURE */
/* unused harmony export API_ERROR_INVALID_HEADER */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return API_ERROR_SIGNATURE_EXPIRED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return ERROR_ADDON_DISABLED_BY_DEV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return ERROR_ADDON_DISABLED_BY_ADMIN; });
/* unused harmony export maximumSetTimeoutDelay */
/* unused harmony export ADMIN_TOOLS_VIEW */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADDONS_EDIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ADDONS_REVIEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mb", function() { return THEMES_REVIEW; });
/* unused harmony export STATS_VIEW */
/* unused harmony export MOZILLA_COLLECTIONS_EDIT */
/* unused harmony export FEATURED_THEMES_COLLECTION_EDIT */
/* unused harmony export FEATURED_THEMES_COLLECTION_SLUG */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ADDONS_POSTREVIEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADDONS_CONTENTREVIEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ADDONS_REVIEWUNLISTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ub", function() { return RATINGS_MODERATE; });
/* unused harmony export USERS_EDIT */
/* unused harmony export ADMIN_TOOLS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return ALL_SUPER_POWERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vb", function() { return RTL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nb", function() { return LTR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return AMO_REQUEST_ID_HEADER; });
/* unused harmony export DISCO_TAAR_CLIENT_ID_HEADER */
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_7__);
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1,source;i<arguments.length;i++){source=null!=arguments[i]?arguments[i]:{};if(i%2){ownKeys(Object(source),!0).forEach(function(key){_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}return obj}// Addon States.
var DISABLED="DISABLED";var DISABLING="DISABLING";var DOWNLOADING="DOWNLOADING";var ENABLED="ENABLED";var ENABLING="ENABLING";var ERROR="ERROR";var INACTIVE="INACTIVE";var INSTALLED="INSTALLED";var INSTALLING="INSTALLING";var UNINSTALLED="UNINSTALLED";var UNINSTALLING="UNINSTALLING";var UNKNOWN="UNKNOWN";var validInstallStates=["DISABLED","DISABLING","DOWNLOADING","ENABLED","ENABLED","ENABLING","ERROR","INACTIVE","INSTALLED","INSTALLING","UNINSTALLED","UNINSTALLING","UNKNOWN"];// Add-on error states.
var DOWNLOAD_FAILED="DOWNLOAD_FAILED";var INSTALL_CANCELLED="INSTALL_CANCELLED";var INSTALL_FAILED="INSTALL_FAILED";var ERROR_CORRUPT_FILE="ERROR_CORRUPT_FILE";// Unrecoverable errors.
var FATAL_INSTALL_ERROR="FATAL_INSTALL_ERROR";var FATAL_UNINSTALL_ERROR="FATAL_UNINSTALL_ERROR";var FATAL_ERROR="FATAL_ERROR";// Client App types
var CLIENT_APP_ANDROID="android";var CLIENT_APP_FIREFOX="firefox";// Add-on types.
var ADDON_TYPE_DICT="dictionary";var ADDON_TYPE_EXTENSION="extension";var ADDON_TYPE_LANG="language";var ADDON_TYPE_OPENSEARCH="search";var ADDON_TYPE_STATIC_THEME="statictheme";var validAddonTypes=["dictionary","extension","language","search","statictheme"];// Mapping of the add-on types we show in URLs, etc. and what they map
// to in the API (and how they're represented internally in the app).
//
// Examples:
// * '/extensions/' -> 'extension'
// * '/themes/' -> 'statictheme'
var API_ADDON_TYPES_MAPPING={extensions:"extension",themes:"statictheme"};var VISIBLE_ADDON_TYPES_MAPPING=Object.keys(API_ADDON_TYPES_MAPPING).reduce(function(object,key){return _objectSpread({},object,_defineProperty({},API_ADDON_TYPES_MAPPING[key],key))},{});// Incompatibility codes for clients that can't install an add-on.
var INCOMPATIBLE_FIREFOX_FOR_IOS="INCOMPATIBLE_FIREFOX_FOR_IOS";var INCOMPATIBLE_OVER_MAX_VERSION="INCOMPATIBLE_OVER_MAX_VERSION";var INCOMPATIBLE_NO_OPENSEARCH="INCOMPATIBLE_NO_OPENSEARCH";var INCOMPATIBLE_NOT_FIREFOX="INCOMPATIBLE_NOT_FIREFOX";var INCOMPATIBLE_UNDER_MIN_VERSION="INCOMPATIBLE_UNDER_MIN_VERSION";var INCOMPATIBLE_UNSUPPORTED_PLATFORM="INCOMPATIBLE_UNSUPPORTED_PLATFORM";var INCOMPATIBLE_NON_RESTARTLESS_ADDON="INCOMPATIBLE_NON_RESTARTLESS_ADDON";var INCOMPATIBLE_FIREFOX_FENIX="INCOMPATIBLE_FIREFOX_FENIX";var INCOMPATIBLE_ANDROID_UNSUPPORTED="INCOMPATIBLE_ANDROID_UNSUPPORTED";// Tracking add-on types
var TRACKING_TYPE_EXTENSION="addon";var TRACKING_TYPE_STATIC_THEME="statictheme";var TRACKING_TYPE_INVALID="invalid";// Add-on install tracking sources.
// These key values may be linked to historic analytic data.
var INSTALL_SOURCE_COLLECTION="collection";var INSTALL_SOURCE_FEATURED_COLLECTION="homepage-collection-featured";var INSTALL_SOURCE_DETAIL_PAGE="dp-btn-primary";var INSTALL_SOURCE_DISCOVERY="discovery-promo";var INSTALL_SOURCE_FEATURED="featured";var INSTALL_SOURCE_HERO_PROMO="hp-dl-promo";var INSTALL_SOURCE_MOST_POPULAR="mostpopular";var INSTALL_SOURCE_SEARCH="search";var INSTALL_SOURCE_TOP_RATED="rating";var INSTALL_SOURCE_TRENDING="hotness";var INSTALL_SOURCE_GUIDES_PAGE="guides-page";// View Contexts that aren't an addonType
var VIEW_CONTEXT_EXPLORE="VIEW_CONTEXT_EXPLORE";var VIEW_CONTEXT_HOME="VIEW_CONTEXT_HOME";// Language tools contain both ADDON_TYPE_DICT and ADDON_TYPE_LANG so
// we share a custom view context for both add-on types.
var VIEW_CONTEXT_LANGUAGE_TOOLS="VIEW_CONTEXT_LANGUAGE_TOOLS";// Add-on Search Sort Values
var SEARCH_SORT_TRENDING="hotness";var SEARCH_SORT_TOP_RATED="rating";var SEARCH_SORT_POPULAR="users";var SEARCH_SORT_RANDOM="random";var SEARCH_SORT_RELEVANCE="relevance";var SEARCH_SORT_UPDATED="updated";var SEARCH_SORT_RECOMMENDED="recommended";// Collection add-ons sort values
var COLLECTION_SORT_DATE_ADDED_ASCENDING="added";var COLLECTION_SORT_DATE_ADDED_DESCENDING="-added";var COLLECTION_SORT_NAME="name";var COLLECTION_SORT_POPULARITY_DESCENDING="-popularity";// Operating system for add-ons and files
var OS_ALL="all";var OS_WINDOWS="windows";var OS_MAC="mac";var OS_LINUX="linux";var OS_ANDROID="android";// Action types.
var CLEAR_ERROR="CLEAR_ERROR";var FEATURED_GET="FEATURED_GET";var FEATURED_LOADED="FEATURED_LOADED";var SET_AUTH_TOKEN="SET_AUTH_TOKEN";var SET_CLIENT_APP="SET_CLIENT_APP";var SET_ERROR="SET_ERROR";var SET_ERROR_MESSAGE="SET_ERROR_MESSAGE";var SET_LANG="SET_LANG";var SET_REQUEST_ID="SET_REQUEST_ID";var SET_USER_AGENT="SET_USER_AGENT";var SET_VIEW_CONTEXT="SET_VIEW_CONTEXT";var INSTALL_EVENT_LIST=["onDownloadStarted","onDownloadProgress","onDownloadEnded","onDownloadCancelled","onDownloadFailed","onInstallStarted","onInstallProgress","onInstallEnded","onInstallCancelled","onInstallFailed"];// Install Types
var INSTALL_STATE="INSTALL_STATE";var START_DOWNLOAD="START_DOWNLOAD";var DOWNLOAD_PROGRESS="DOWNLOAD_PROGRESS";var INSTALL_COMPLETE="INSTALL_COMPLETE";var UNINSTALL_COMPLETE="UNINSTALL_COMPLETE";var INSTALL_ERROR="INSTALL_ERROR";// Tracking install actions.
var ENABLE_ACTION="enable";var INSTALL_ACTION="install";var INSTALL_CANCELLED_ACTION="install:cancelled";var INSTALL_DOWNLOAD_FAILED_ACTION="install:download-failed";var INSTALL_STARTED_ACTION="install:started";var UNINSTALL_ACTION="uninstall";// Tracking Event Categories.
// WARNING: Do not change these without notifying data + metrics teams.
// Changing these strings will break existing statistics without
// updating the category matching at the same time.
var ENABLE_EXTENSION_CATEGORY="AMO Addon Activation";var ENABLE_THEME_CATEGORY="AMO Theme Activation";var INSTALL_EXTENSION_CATEGORY="AMO Addon Installs";var INSTALL_THEME_CATEGORY="AMO Theme Installs";var INSTALL_CANCELLED_EXTENSION_CATEGORY="AMO Addon Installs Cancelled";var INSTALL_CANCELLED_THEME_CATEGORY="AMO Theme Installs Cancelled";var INSTALL_DOWNLOAD_FAILED_EXTENSION_CATEGORY="AMO Addon Installs Download Failed";var INSTALL_DOWNLOAD_FAILED_THEME_CATEGORY="AMO Theme Installs Download Failed";var DISCO_NAVIGATION_CATEGORY="Discovery Navigation";var DISCO_NAVIGATION_ACTION="click";var INSTALL_STARTED_EXTENSION_CATEGORY="AMO Addon Installs Started";var INSTALL_STARTED_THEME_CATEGORY="AMO Theme Installs Started";var UNINSTALL_EXTENSION_CATEGORY="AMO Addon Uninstalls";var UNINSTALL_THEME_CATEGORY="AMO Theme Uninstalls";var CLICK_CATEGORY="AMO Addon / Theme Clicks";var SURVEY_CATEGORY="AMO Addon / Experience Survey Notice";var SURVEY_ACTION_DISMISSED="Dismissed survey notice";var SURVEY_ACTION_SHOWN="Shown survey notice";var SURVEY_ACTION_VISITED="Visited survey";// Error used to know that the setEnable method on addon is
// not available.
var SET_ENABLE_NOT_AVAILABLE="SET_ENABLE_NOT_AVAILABLE";// Add-on statuses for mozAddonManager events.
var GLOBAL_EVENT_STATUS_MAP={onDisabled:"DISABLED",onEnabled:"ENABLED",onInstalling:"INSTALLING",onInstalled:"INSTALLED",onUninstalling:"UNINSTALLING",onUninstalled:"UNINSTALLED",onEnabling:"ENABLING",onDisabling:"DISABLING"};// This mozAddonManager event has no one-to-one mapping.
var ON_OPERATION_CANCELLED_EVENT="onOperationCancelled";// The events here are set directly on mozAddonManager
// they will be fired by addons and themes.
var GLOBAL_EVENTS=Object.keys(GLOBAL_EVENT_STATUS_MAP);// Generic error codes.
var ERROR_UNKNOWN="ERROR_UNKNOWN";// API error codes. These values match the error codes defined here:
// http://addons-server.readthedocs.io/en/latest/topics/api/overview.html#unauthorized-and-permission-denied
var API_ERROR_DECODING_SIGNATURE="ERROR_DECODING_SIGNATURE";var API_ERROR_INVALID_HEADER="ERROR_INVALID_HEADER";var API_ERROR_SIGNATURE_EXPIRED="ERROR_SIGNATURE_EXPIRED";// Interpreted error codes.
var ERROR_ADDON_DISABLED_BY_DEV="ERROR_ADDON_DISABLED_BY_DEV";var ERROR_ADDON_DISABLED_BY_ADMIN="ERROR_ADDON_DISABLED_BY_ADMIN";// This is the limit in milleseconds for how long a setTimeout delay can be.
// No setTimeout should be scheduled for this time because it
// will be triggered immediately.
// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout#Maximum_delay_value
var maximumSetTimeoutDelay=2147483647;// Can access the website admin interface index page. Inner pages may require
// other/additional permissions.
var ADMIN_TOOLS_VIEW="AdminTools:View";// Allows viewing and editing of any add-ons details in developer tools.
var ADDONS_EDIT="Addons:Edit";// Can access the add-on reviewer tools to approve/reject add-on submissions.
var ADDONS_REVIEW="Addons:Review";// Can access the theme reviewer tools to approve/reject theme submissions.
var THEMES_REVIEW="Personas:Review";// Can view statistics for all addons, regardless of privacy settings.
var STATS_VIEW="Stats:View";// Can edit all Mozilla-owned collections.
var MOZILLA_COLLECTIONS_EDIT="Admin:Curation";// Can edit the special Featured Themes collection.
var FEATURED_THEMES_COLLECTION_EDIT="Collections:Contribute";// The slug for the special Featured Themes collection.
var FEATURED_THEMES_COLLECTION_SLUG="featured-personas";// Can confirm approval of automatically approved add-ons.
var ADDONS_POSTREVIEW="Addons:PostReview";// Can approve add-ons content.
var ADDONS_CONTENTREVIEW="Addons:ContentReview";// Can review unlisted add-ons.
var ADDONS_REVIEWUNLISTED="Addons:ReviewUnlisted";// Can moderate user ratings on add-ons.
var RATINGS_MODERATE="Ratings:Moderate";// Can edit user accounts.
var USERS_EDIT="Users:Edit";// Can access admin functions.
var ADMIN_TOOLS="Admin:Tools";// Super powers. It means absolutely all permissions.
var ALL_SUPER_POWERS="*:*";var RTL="rtl";var LTR="ltr";var AMO_REQUEST_ID_HEADER="amo-request-id";var DISCO_TAAR_CLIENT_ID_HEADER="moz-client-id";

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAddonIconUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getPreviewImage; });
/* harmony import */ var core_js_modules_es_array_find_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(647);
/* harmony import */ var core_js_modules_es_array_find_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var amo_img_icons_default_64_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(740);
/* harmony import */ var amo_img_icons_default_64_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(amo_img_icons_default_64_png__WEBPACK_IMPORTED_MODULE_2__);
function getAddonIconUrl(addon){return addon&&Object(core_utils__WEBPACK_IMPORTED_MODULE_1__[/* isAllowedOrigin */ "f"])(addon.icon_url)?addon.icon_url:amo_img_icons_default_64_png__WEBPACK_IMPORTED_MODULE_2___default.a}var getPreviewImage=function(addon){var _ref=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},_ref$full=_ref.full,full=void 0===_ref$full?!0:_ref$full,_ref$useStandardSize=_ref.useStandardSize,useStandardSize=void 0===_ref$useStandardSize?!0:_ref$useStandardSize;if(!addon.previews.length){return null}var imageIndex=0;if(useStandardSize){if(!full){throw new Error("Currently there is no 'standard' thumbnail size")}// 720 is now the standard width for previews.
imageIndex=// The preview.image_size[0] is the image width.
addon.previews.findIndex(function(preview){return preview.image_size[0]===720})}// This is a fallback for older themes that do not have this size generated.
if(0>imageIndex){imageIndex=0}var preview=addon.previews[imageIndex],previewSize=full?"image_url":"thumbnail_url";return preview[previewSize]&&Object(core_utils__WEBPACK_IMPORTED_MODULE_1__[/* isAllowedOrigin */ "f"])(preview[previewSize])?preview[previewSize]:null};

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FINISH_UPDATE_USER_ACCOUNT */
/* unused harmony export UPDATE_USER_ACCOUNT */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOG_OUT_USER; });
/* unused harmony export LOAD_CURRENT_USER_ACCOUNT */
/* unused harmony export FETCH_USER_ACCOUNT */
/* unused harmony export LOAD_USER_ACCOUNT */
/* unused harmony export DELETE_USER_PICTURE */
/* unused harmony export FETCH_USER_NOTIFICATIONS */
/* unused harmony export LOAD_USER_NOTIFICATIONS */
/* unused harmony export DELETE_USER_ACCOUNT */
/* unused harmony export UNLOAD_USER_ACCOUNT */
/* unused harmony export UNSUBSCRIBE_NOTIFICATION */
/* unused harmony export ABORT_UNSUBSCRIBE_NOTIFICATION */
/* unused harmony export FINISH_UNSUBSCRIBE_NOTIFICATION */
/* unused harmony export initialState */
/* unused harmony export fetchUserAccount */
/* unused harmony export finishUpdateUserAccount */
/* unused harmony export updateUserAccount */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return loadCurrentUserAccount; });
/* unused harmony export loadUserAccount */
/* unused harmony export deleteUserAccount */
/* unused harmony export unloadUserAccount */
/* unused harmony export logOutUser */
/* unused harmony export deleteUserPicture */
/* unused harmony export fetchUserNotifications */
/* unused harmony export loadUserNotifications */
/* unused harmony export unsubscribeNotification */
/* unused harmony export getUserById */
/* unused harmony export getUserByUsername */
/* unused harmony export getCurrentUser */
/* unused harmony export isDeveloper */
/* unused harmony export hasPermission */
/* unused harmony export hasAnyReviewerRelatedPermission */
/* unused harmony export addUserToState */
/* unused harmony export finishUnsubscribeNotification */
/* unused harmony export abortUnsubscribeNotification */
/* unused harmony export getUnsubscribeKey */
/* unused harmony export isUnsubscribedFor */
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(25);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(56);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_ends_with__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(432);
/* harmony import */ var core_js_modules_es_string_ends_with__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_ends_with__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(101);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(113);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(103);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(10);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_constants__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2);
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1,source;i<arguments.length;i++){source=null!=arguments[i]?arguments[i]:{};if(i%2){ownKeys(Object(source),!0).forEach(function(key){_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}return obj}var FINISH_UPDATE_USER_ACCOUNT="FINISH_UPDATE_USER_ACCOUNT";var UPDATE_USER_ACCOUNT="UPDATE_USER_ACCOUNT";var LOG_OUT_USER="LOG_OUT_USER";var LOAD_CURRENT_USER_ACCOUNT="LOAD_CURRENT_USER_ACCOUNT";var FETCH_USER_ACCOUNT="FETCH_USER_ACCOUNT";var LOAD_USER_ACCOUNT="LOAD_USER_ACCOUNT";var DELETE_USER_PICTURE="DELETE_USER_PICTURE";var FETCH_USER_NOTIFICATIONS="FETCH_USER_NOTIFICATIONS";var LOAD_USER_NOTIFICATIONS="LOAD_USER_NOTIFICATIONS";var DELETE_USER_ACCOUNT="DELETE_USER_ACCOUNT";var UNLOAD_USER_ACCOUNT="UNLOAD_USER_ACCOUNT";var UNSUBSCRIBE_NOTIFICATION="UNSUBSCRIBE_NOTIFICATION";var ABORT_UNSUBSCRIBE_NOTIFICATION="ABORT_UNSUBSCRIBE_NOTIFICATION";var FINISH_UNSUBSCRIBE_NOTIFICATION="FINISH_UNSUBSCRIBE_NOTIFICATION";var initialState={currentUserID:null,byID:{},byUsername:{},isUpdating:!1,userPageBeingViewed:{loading:!1,userId:null},isUnsubscribedFor:{}};var fetchUserAccount=function(_ref){var errorHandlerId=_ref.errorHandlerId,userId=_ref.userId;invariant__WEBPACK_IMPORTED_MODULE_15___default()(errorHandlerId,"errorHandlerId is required");invariant__WEBPACK_IMPORTED_MODULE_15___default()(userId,"userId is required");return{type:FETCH_USER_ACCOUNT,payload:{errorHandlerId:errorHandlerId,userId:userId}}};var finishUpdateUserAccount=function(){return{type:FINISH_UPDATE_USER_ACCOUNT,payload:{}}};var updateUserAccount=function(_ref2){var errorHandlerId=_ref2.errorHandlerId,notifications=_ref2.notifications,picture=_ref2.picture,pictureData=_ref2.pictureData,userFields=_ref2.userFields,userId=_ref2.userId;invariant__WEBPACK_IMPORTED_MODULE_15___default()(errorHandlerId,"errorHandlerId is required");invariant__WEBPACK_IMPORTED_MODULE_15___default()(notifications,"notifications are required");invariant__WEBPACK_IMPORTED_MODULE_15___default()(userFields,"userFields are required");invariant__WEBPACK_IMPORTED_MODULE_15___default()(userId,"userId is required");invariant__WEBPACK_IMPORTED_MODULE_15___default()(picture!==void 0,"picture is required");if(picture){invariant__WEBPACK_IMPORTED_MODULE_15___default()(pictureData,"pictureData is required when picture is present")}return{type:UPDATE_USER_ACCOUNT,payload:{errorHandlerId:errorHandlerId,notifications:notifications,picture:picture,pictureData:pictureData,userFields:userFields,userId:userId}}};var loadCurrentUserAccount=function(_ref3){var user=_ref3.user;invariant__WEBPACK_IMPORTED_MODULE_15___default()(user,"user is required");return{type:LOAD_CURRENT_USER_ACCOUNT,payload:{user:user}}};var loadUserAccount=function(_ref4){var user=_ref4.user;invariant__WEBPACK_IMPORTED_MODULE_15___default()(user,"user is required");return{type:LOAD_USER_ACCOUNT,payload:{user:user}}};var deleteUserAccount=function(_ref5){var errorHandlerId=_ref5.errorHandlerId,userId=_ref5.userId;invariant__WEBPACK_IMPORTED_MODULE_15___default()(errorHandlerId,"errorHandlerId is required");invariant__WEBPACK_IMPORTED_MODULE_15___default()(userId,"userId is required");return{type:DELETE_USER_ACCOUNT,payload:{errorHandlerId:errorHandlerId,userId:userId}}};var unloadUserAccount=function(_ref6){var userId=_ref6.userId;invariant__WEBPACK_IMPORTED_MODULE_15___default()(userId,"userId is required");return{type:UNLOAD_USER_ACCOUNT,payload:{userId:userId}}};function logOutUser(){return{type:LOG_OUT_USER,payload:{}}}var deleteUserPicture=function(_ref7){var errorHandlerId=_ref7.errorHandlerId,userId=_ref7.userId;return{type:DELETE_USER_PICTURE,payload:{errorHandlerId:errorHandlerId,userId:userId}}};var fetchUserNotifications=function(_ref8){var errorHandlerId=_ref8.errorHandlerId,userId=_ref8.userId;invariant__WEBPACK_IMPORTED_MODULE_15___default()(errorHandlerId,"errorHandlerId is required");invariant__WEBPACK_IMPORTED_MODULE_15___default()(userId,"userId is required");return{type:FETCH_USER_NOTIFICATIONS,payload:{errorHandlerId:errorHandlerId,userId:userId}}};var loadUserNotifications=function(_ref9){var notifications=_ref9.notifications,userId=_ref9.userId;invariant__WEBPACK_IMPORTED_MODULE_15___default()(notifications,"notifications is required");invariant__WEBPACK_IMPORTED_MODULE_15___default()(userId,"userId is required");return{type:LOAD_USER_NOTIFICATIONS,payload:{notifications:notifications,userId:userId}}};var unsubscribeNotification=function(_ref10){var errorHandlerId=_ref10.errorHandlerId,hash=_ref10.hash,notification=_ref10.notification,token=_ref10.token;invariant__WEBPACK_IMPORTED_MODULE_15___default()(errorHandlerId,"errorHandlerId is required");invariant__WEBPACK_IMPORTED_MODULE_15___default()(hash,"hash is required");invariant__WEBPACK_IMPORTED_MODULE_15___default()(notification,"notification is required");invariant__WEBPACK_IMPORTED_MODULE_15___default()(token,"token is required");return{type:UNSUBSCRIBE_NOTIFICATION,payload:{errorHandlerId:errorHandlerId,hash:hash,notification:notification,token:token}}};var getUserById=function(users,userId){invariant__WEBPACK_IMPORTED_MODULE_15___default()("number"==typeof userId,"userId is required");return users.byID[userId]};var getUserByUsername=function(users,username){invariant__WEBPACK_IMPORTED_MODULE_15___default()(username,"username is required");return users.byID[users.byUsername[username.toLowerCase()]]};var getCurrentUser=function(users){if(!users.currentUserID){return null}var currentUser=getUserById(users,users.currentUserID);invariant__WEBPACK_IMPORTED_MODULE_15___default()(currentUser,"currentUserID is defined but no matching user found in users state.");return currentUser};var isDeveloper=function(user){if(!user){return!1}return user.is_addon_developer||user.is_artist};var hasPermission=function(state,permission){var currentUser=getCurrentUser(state.users);// If the user isn't authenticated, they have no permissions.
if(!currentUser){return!1}var permissions=currentUser.permissions;if(!permissions){return!1}// Admins have absolutely all permissions.
if(permissions.includes(core_constants__WEBPACK_IMPORTED_MODULE_16__[/* ALL_SUPER_POWERS */ "k"])){return!0}// Match exact permissions.
if(permissions.includes(permission)){return!0}// See: https://github.com/mozilla/addons-frontend/issues/8575
var appsWithAllPermissions=permissions// Only consider permissions with wildcards.
.filter(function(perm){return perm.endsWith(":*")})// Return the permission "app".
// See: https://github.com/mozilla/addons-server/blob/3a15aafb703349923ee2eb9a9f7b527ba9b16c03/src/olympia/constants/permissions.py#L4
.map(function(perm){return perm.replace(":*","")}),app=permission.split(":")[0];return appsWithAllPermissions.includes(app)};var hasAnyReviewerRelatedPermission=function(state){var currentUser=getCurrentUser(state.users);// If the user isn't authenticated, they have no permissions.
if(!currentUser){return!1}var permissions=currentUser.permissions;if(!permissions){return!1}// Admins have absolutely all permissions.
if(permissions.includes(core_constants__WEBPACK_IMPORTED_MODULE_16__[/* ALL_SUPER_POWERS */ "k"])){return!0}return permissions.includes(core_constants__WEBPACK_IMPORTED_MODULE_16__[/* ADDONS_POSTREVIEW */ "c"])||permissions.includes(core_constants__WEBPACK_IMPORTED_MODULE_16__[/* ADDONS_CONTENTREVIEW */ "a"])||permissions.includes(core_constants__WEBPACK_IMPORTED_MODULE_16__[/* ADDONS_REVIEW */ "d"])||permissions.includes(core_constants__WEBPACK_IMPORTED_MODULE_16__[/* RATINGS_MODERATE */ "ub"])||permissions.includes(core_constants__WEBPACK_IMPORTED_MODULE_16__[/* THEMES_REVIEW */ "Mb"])||permissions.includes(core_constants__WEBPACK_IMPORTED_MODULE_16__[/* ADDONS_REVIEWUNLISTED */ "e"])||permissions.includes(core_constants__WEBPACK_IMPORTED_MODULE_16__[/* ADDONS_EDIT */ "b"])};var addUserToState=function(_ref11){var state=_ref11.state,user=_ref11.user;invariant__WEBPACK_IMPORTED_MODULE_15___default()(user,"user is required");var existingUser=getUserById(state,user.id)||{notifications:null},byID=_objectSpread({},state.byID,_defineProperty({},user.id,_objectSpread({},existingUser,{},user))),byUsername=_objectSpread({},state.byUsername,_defineProperty({},user.username.toLowerCase(),user.id));return{byID:byID,byUsername:byUsername}};var finishUnsubscribeNotification=function(_ref12){var hash=_ref12.hash,notification=_ref12.notification,token=_ref12.token;invariant__WEBPACK_IMPORTED_MODULE_15___default()(hash,"hash is required");invariant__WEBPACK_IMPORTED_MODULE_15___default()(notification,"notification is required");invariant__WEBPACK_IMPORTED_MODULE_15___default()(token,"token is required");return{type:FINISH_UNSUBSCRIBE_NOTIFICATION,payload:{hash:hash,notification:notification,token:token}}};var abortUnsubscribeNotification=function(_ref13){var hash=_ref13.hash,notification=_ref13.notification,token=_ref13.token;invariant__WEBPACK_IMPORTED_MODULE_15___default()(hash,"hash is required");invariant__WEBPACK_IMPORTED_MODULE_15___default()(notification,"notification is required");invariant__WEBPACK_IMPORTED_MODULE_15___default()(token,"token is required");return{type:ABORT_UNSUBSCRIBE_NOTIFICATION,payload:{hash:hash,notification:notification,token:token}}};var getUnsubscribeKey=function(_ref14){var hash=_ref14.hash,notification=_ref14.notification,token=_ref14.token;invariant__WEBPACK_IMPORTED_MODULE_15___default()(hash,"hash is required");invariant__WEBPACK_IMPORTED_MODULE_15___default()(notification,"notification is required");invariant__WEBPACK_IMPORTED_MODULE_15___default()(token,"token is required");return"".concat(hash,"-").concat(notification,"-").concat(token)};var isUnsubscribedFor=function(usersState,hash,notification,token){return usersState.isUnsubscribedFor[getUnsubscribeKey({hash:hash,notification:notification,token:token})]};var reducer=function(){var state=0<arguments.length&&arguments[0]!==void 0?arguments[0]:initialState,action=1<arguments.length?arguments[1]:void 0;switch(action.type){case UPDATE_USER_ACCOUNT:return _objectSpread({},state,{isUpdating:!0});case FINISH_UPDATE_USER_ACCOUNT:return _objectSpread({},state,{isUpdating:!1});case LOAD_CURRENT_USER_ACCOUNT:{var user=action.payload.user;return _objectSpread({},state,{},addUserToState({state:state,user:user}),{currentUserID:user.id})}case LOAD_USER_ACCOUNT:{var _user=action.payload.user;return _objectSpread({},state,{},addUserToState({state:state,user:_user}))}case LOAD_USER_NOTIFICATIONS:{var _action$payload=action.payload,notifications=_action$payload.notifications,_userId=_action$payload.userId,_user2=getUserById(state,_userId);invariant__WEBPACK_IMPORTED_MODULE_15___default()(_user2,"user is required");invariant__WEBPACK_IMPORTED_MODULE_15___default()(notifications,"notifications are required");return _objectSpread({},state,{byID:_objectSpread({},state.byID,_defineProperty({},_user2.id,_objectSpread({},_user2,{notifications:notifications})))})}case LOG_OUT_USER:return _objectSpread({},state,{currentUserID:null});case UNLOAD_USER_ACCOUNT:{var _userId2=action.payload.userId;if(state.byID[_userId2]){var _username=state.byID[_userId2].username;return _objectSpread({},state,{currentUserID:state.currentUserID===_userId2?null:state.currentUserID,byID:_objectSpread({},state.byID,_defineProperty({},_userId2,void 0)),byUsername:_objectSpread({},state.byUsername,_defineProperty({},_username,void 0))})}return state}case UNSUBSCRIBE_NOTIFICATION:{var _action$payload2=action.payload,hash=_action$payload2.hash,notification=_action$payload2.notification,token=_action$payload2.token;return _objectSpread({},state,{isUnsubscribedFor:_objectSpread({},state.isUnsubscribedFor,_defineProperty({},getUnsubscribeKey({hash:hash,notification:notification,token:token}),!1))})}case ABORT_UNSUBSCRIBE_NOTIFICATION:{var _action$payload3=action.payload,_hash=_action$payload3.hash,_notification=_action$payload3.notification,_token=_action$payload3.token;return _objectSpread({},state,{isUnsubscribedFor:_objectSpread({},state.isUnsubscribedFor,_defineProperty({},getUnsubscribeKey({hash:_hash,notification:_notification,token:_token}),null))})}case FINISH_UNSUBSCRIBE_NOTIFICATION:{var _action$payload4=action.payload,_hash2=_action$payload4.hash,_notification2=_action$payload4.notification,_token2=_action$payload4.token;return _objectSpread({},state,{isUnsubscribedFor:_objectSpread({},state.isUnsubscribedFor,_defineProperty({},getUnsubscribeKey({hash:_hash2,notification:_notification2,token:_token2}),!0))})}default:return state;}};/* harmony default export */ __webpack_exports__["b"] = (reducer);

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ABORT_FETCH_HOME_DATA */
/* unused harmony export FETCH_HOME_DATA */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOAD_HOME_DATA; });
/* unused harmony export initialState */
/* unused harmony export abortFetchHomeData */
/* unused harmony export fetchHomeData */
/* unused harmony export loadHomeData */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createInternalHeroShelves; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(30);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(25);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(10);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(21);
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(87);
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(connected_react_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var amo_constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(250);
/* harmony import */ var core_constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2);
/* harmony import */ var core_reducers_addons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(64);
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1,source;i<arguments.length;i++){source=null!=arguments[i]?arguments[i]:{};if(i%2){ownKeys(Object(source),!0).forEach(function(key){_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}return obj}var ABORT_FETCH_HOME_DATA="ABORT_FETCH_HOME_DATA";var FETCH_HOME_DATA="FETCH_HOME_DATA";var LOAD_HOME_DATA="LOAD_HOME_DATA";var initialState={collections:[],heroShelves:null,isLoading:!1,resetStateOnNextChange:!1,resultsLoaded:!1,shelves:{}};var abortFetchHomeData=function(){return{type:ABORT_FETCH_HOME_DATA}};var fetchHomeData=function(_ref){var collectionsToFetch=_ref.collectionsToFetch,errorHandlerId=_ref.errorHandlerId,includeRecommendedThemes=_ref.includeRecommendedThemes,includeTrendingExtensions=_ref.includeTrendingExtensions;invariant__WEBPACK_IMPORTED_MODULE_13___default()(errorHandlerId,"errorHandlerId is required");invariant__WEBPACK_IMPORTED_MODULE_13___default()(collectionsToFetch,"collectionsToFetch is required");return{type:FETCH_HOME_DATA,payload:{collectionsToFetch:collectionsToFetch,errorHandlerId:errorHandlerId,includeRecommendedThemes:includeRecommendedThemes,includeTrendingExtensions:includeTrendingExtensions}}};var loadHomeData=function(_ref2){var collections=_ref2.collections,heroShelves=_ref2.heroShelves,shelves=_ref2.shelves;invariant__WEBPACK_IMPORTED_MODULE_13___default()(collections,"collections is required");invariant__WEBPACK_IMPORTED_MODULE_13___default()(shelves,"shelves is required");return{type:LOAD_HOME_DATA,payload:{collections:collections,heroShelves:heroShelves,shelves:shelves}}};var createInternalAddons=function(response){return response.results.map(function(addon){return Object(core_reducers_addons__WEBPACK_IMPORTED_MODULE_16__[/* createInternalAddon */ "b"])(addon)})};var createInternalHeroShelves=function(heroShelves){var primary=heroShelves.primary,secondary=heroShelves.secondary;invariant__WEBPACK_IMPORTED_MODULE_13___default()(primary.addon||primary.external,"Either primary.addon or primary.external is required");var shelves,basePrimaryShelf={gradient:primary.gradient,featuredImage:primary.featured_image,description:primary.description};if(primary.addon){var primaryShelf=_objectSpread({},basePrimaryShelf,{addon:Object(core_reducers_addons__WEBPACK_IMPORTED_MODULE_16__[/* createInternalAddon */ "b"])(primary.addon),external:void 0});shelves={primary:primaryShelf,secondary:secondary}}else{var _primaryShelf=_objectSpread({},basePrimaryShelf,{addon:void 0,external:primary.external});shelves={primary:_primaryShelf,secondary:secondary}}return shelves};var reducer=function(){var state=0<arguments.length&&arguments[0]!==void 0?arguments[0]:initialState,action=1<arguments.length?arguments[1]:void 0,_config=2<arguments.length&&arguments[2]!==void 0?arguments[2]:config__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"];switch(action.type){case core_constants__WEBPACK_IMPORTED_MODULE_15__[/* SET_CLIENT_APP */ "zb"]:return initialState;case ABORT_FETCH_HOME_DATA:return _objectSpread({},state,{isLoading:!1});case FETCH_HOME_DATA:return _objectSpread({},state,{isLoading:!0,resultsLoaded:!1});case LOAD_HOME_DATA:{var _action$payload=action.payload,collections=_action$payload.collections,heroShelves=_action$payload.heroShelves,shelves=_action$payload.shelves;return _objectSpread({},state,{collections:collections.map(function(collection){if(collection&&collection.results&&collection.results.length){var sliceEnd=core_constants__WEBPACK_IMPORTED_MODULE_15__[/* ADDON_TYPE_STATIC_THEME */ "j"]===collection.results[0].addon.type?amo_constants__WEBPACK_IMPORTED_MODULE_14__[/* LANDING_PAGE_THEME_COUNT */ "c"]:amo_constants__WEBPACK_IMPORTED_MODULE_14__[/* LANDING_PAGE_EXTENSION_COUNT */ "b"];return collection.results.slice(0,sliceEnd).map(function(item){return Object(core_reducers_addons__WEBPACK_IMPORTED_MODULE_16__[/* createInternalAddon */ "b"])(item.addon)})}return null}),heroShelves:createInternalHeroShelves(heroShelves),isLoading:!1,resultsLoaded:!0,shelves:Object.keys(shelves).reduce(function(shelvesToLoad,shelfName){var response=shelves[shelfName];return _objectSpread({},shelvesToLoad,_defineProperty({},shelfName,response?createInternalAddons(response):null))},{})})}// See: https://github.com/mozilla/addons-frontend/issues/8601
case connected_react_router__WEBPACK_IMPORTED_MODULE_12__["LOCATION_CHANGE"]:{if(_config.get("server")){// We only care about client side navigation.
return state}// When the client initializes, it updates its location. On next location
// change, we want to reset this state to fetch fresh data once user goes
// back to the homepage.
if(state.resetStateOnNextChange){return initialState}return _objectSpread({},state,{// This will only be set *after* a single location change on the client.
resetStateOnNextChange:!0})}default:return state;}};/* harmony default export */ __webpack_exports__["c"] = (reducer);

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createChapters; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(56);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(113);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(10);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1,source;i<arguments.length;i++){source=null!=arguments[i]?arguments[i]:{};if(i%2){ownKeys(Object(source),!0).forEach(function(key){_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}return obj}var getPropString=function(props){return JSON.stringify(props,null," ").replace(/[{}]/g,"")};var createChapters=function(){var _ref=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},Component=_ref.Component,chapters=_ref.chapters,createPropsMatrix=_ref.createPropsMatrix,_ref$children=_ref.children,children=void 0===_ref$children?"Hello Text":_ref$children,_ref$otherChapterProp=_ref.otherChapterProps,otherChapterProps=void 0===_ref$otherChapterProp?{}:_ref$otherChapterProp,_ref$otherSectionProp=_ref.otherSectionProps,otherSectionProps=void 0===_ref$otherSectionProp?{}:_ref$otherSectionProp;return chapters.map(function(chapter){return _objectSpread({title:chapter,sections:createPropsMatrix(chapter).map(function(section){var propsString=getPropString(section.props);return _objectSpread({subtitle:""!==propsString?propsString:"default",sectionFn:function sectionFn(){return react__WEBPACK_IMPORTED_MODULE_10__["createElement"]("div",{className:"section-component-wrapper"},react__WEBPACK_IMPORTED_MODULE_10__["createElement"](Component,section.props,children))}},otherSectionProps)})},otherChapterProps)})};

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/history/esm/history.js + 3 modules
var esm_history = __webpack_require__(71);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./tests/unit/helpers.js + 18 modules
var helpers = __webpack_require__(105);

// EXTERNAL MODULE: ./node_modules/connected-react-router/lib/index.js
var lib = __webpack_require__(87);

// EXTERNAL MODULE: ./node_modules/react-cookie/es6/CookiesProvider.js
var CookiesProvider = __webpack_require__(1961);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 15 modules
var es = __webpack_require__(70);

// EXTERNAL MODULE: ./src/core/client/config.js
var config = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-prototype-of.js
var es_object_get_prototype_of = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.set-prototype-of.js
var es_object_set_prototype_of = __webpack_require__(53);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(3);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ./src/core/i18n/Provider.js
function _typeof(obj){"@babel/helpers - typeof";if("function"==typeof Symbol&&"symbol"==typeof Symbol.iterator){_typeof=function(obj){return typeof obj}}else{_typeof=function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0,descriptor;i<props.length;i++){descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1;descriptor.configurable=!0;if("value"in descriptor)descriptor.writable=!0;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call)){return call}return _assertThisInitialized(self)}function _assertThisInitialized(self){if(void 0===self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)};return _getPrototypeOf(o)}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}});if(superClass)_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function(o,p){o.__proto__=p;return o};return _setPrototypeOf(o,p)}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}return obj}/*
 * This Provider expects to be passed an initialized
 * Jed i18n object,
 */var Provider_I18nProvider=/*#__PURE__*/function(_Component){_inherits(I18nProvider,_Component);function I18nProvider(props,context){var _this;_classCallCheck(this,I18nProvider);_this=_possibleConstructorReturn(this,_getPrototypeOf(I18nProvider).call(this,props,context));_this.i18n=props.i18n;return _this}_createClass(I18nProvider,[{key:"getChildContext",value:function getChildContext(){return{i18n:this.i18n}}},{key:"render",value:function render(){var children=this.props.children;return react["Children"].only(children)}}]);return I18nProvider}(react["Component"]);Provider_I18nProvider.displayName="I18nProvider";_defineProperty(Provider_I18nProvider,"propTypes",{i18n:prop_types_default.a.object.isRequired,children:prop_types_default.a.element.isRequired});_defineProperty(Provider_I18nProvider,"childContextTypes",{i18n:prop_types_default.a.object.isRequired});Provider_I18nProvider.__docgenInfo={description:"",methods:[],displayName:"I18nProvider",props:{i18n:{type:{name:"object"},required:!0,description:""},children:{type:{name:"element"},required:!0,description:""}},childContext:{i18n:{type:{name:"object"},required:!0}}};if("undefined"!=typeof STORYBOOK_REACT_CLASSES){STORYBOOK_REACT_CLASSES["src/core/i18n/Provider.js"]={name:"I18nProvider",docgenInfo:Provider_I18nProvider.__docgenInfo,path:"src/core/i18n/Provider.js"}}
// CONCATENATED MODULE: ./src/core/components/Root/index.js
var Root=function(_ref){var _ref$_config=_ref._config,_config=void 0===_ref$_config?config["a" /* default */]:_ref$_config,children=_ref.children,history=_ref.history,i18n=_ref.i18n,store=_ref.store,_ref$cookies=_ref.cookies,cookies=void 0===_ref$cookies?null:_ref$cookies;return react["createElement"](Provider_I18nProvider,{i18n:i18n},react["createElement"](es["Provider"],{store:store,key:"provider"},react["createElement"](lib["ConnectedRouter"],{history:history},react["createElement"](CookiesProvider["a" /* default */],{cookies:cookies},_config.get("enableStrictMode")?react["createElement"](react["StrictMode"],null,children):children))))};Root.displayName="Root";Root.__docgenInfo={description:"",methods:[],displayName:"Root",props:{_config:{defaultValue:{value:"config",computed:!0},required:!1,flowType:{name:"config"},description:""},cookies:{defaultValue:{value:"null",computed:!1},required:!1,flowType:{name:"Cookies"},description:""},children:{required:!0,flowType:{name:"ReactNode",raw:"React.Node"},description:""},history:{required:!0,flowType:{name:"ReactRouterHistoryType"},description:""},i18n:{required:!0,flowType:{name:"I18nType"},description:""},store:{required:!0,flowType:{name:"ReduxStore"},description:""}}};/* harmony default export */ var components_Root = (Root);if("undefined"!=typeof STORYBOOK_REACT_CLASSES){STORYBOOK_REACT_CLASSES["src/core/components/Root/index.js"]={name:"Root",docgenInfo:Root.__docgenInfo,path:"src/core/components/Root/index.js"}}
// EXTERNAL MODULE: ./src/core/utils/index.js + 2 modules
var utils = __webpack_require__(35);

// CONCATENATED MODULE: ./stories/setup/Provider.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Provider; });
var _dispatchClientMetada=Object(helpers["b" /* dispatchClientMetadata */])(),Provider_store=_dispatchClientMetada.store,Provider_history=Object(utils["b" /* addQueryParamsToHistory */])({history:Object(esm_history["a" /* createBrowserHistory */])()});function Provider(_ref){var story=_ref.story;return react_default.a.createElement(components_Root,{store:Provider_store,history:Provider_history,i18n:Object(helpers["d" /* fakeI18n */])({includeJedSpy:!1})},story)}Provider.displayName="Provider";Provider.__docgenInfo={description:"",methods:[],displayName:"Provider"};if("undefined"!=typeof STORYBOOK_REACT_CLASSES){STORYBOOK_REACT_CLASSES["stories/setup/Provider.js"]={name:"Provider",docgenInfo:Provider.__docgenInfo,path:"stories/setup/Provider.js"}}

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ADD_ADDON_TO_COLLECTION */
/* unused harmony export FETCH_CURRENT_COLLECTION */
/* unused harmony export FETCH_USER_COLLECTIONS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LOAD_CURRENT_COLLECTION; });
/* unused harmony export FETCH_CURRENT_COLLECTION_PAGE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LOAD_CURRENT_COLLECTION_PAGE; });
/* unused harmony export ABORT_FETCH_CURRENT_COLLECTION */
/* unused harmony export ABORT_FETCH_USER_COLLECTIONS */
/* unused harmony export ABORT_ADD_ADDON_TO_COLLECTION */
/* unused harmony export LOAD_USER_COLLECTIONS */
/* unused harmony export ADDON_ADDED_TO_COLLECTION */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOAD_COLLECTION_ADDONS; });
/* unused harmony export UPDATE_COLLECTION */
/* unused harmony export UNLOAD_COLLECTION_BY_SLUG */
/* unused harmony export CREATE_COLLECTION */
/* unused harmony export BEGIN_COLLECTION_MODIFICATION */
/* unused harmony export FINISH_COLLECTION_MODIFICATION */
/* unused harmony export REMOVE_ADDON_FROM_COLLECTION */
/* unused harmony export ADDON_REMOVED_FROM_COLLECTION */
/* unused harmony export DELETE_COLLECTION */
/* unused harmony export UPDATE_COLLECTION_ADDON */
/* unused harmony export DELETE_COLLECTION_ADDON_NOTES */
/* unused harmony export BEGIN_EDITING_COLLECTION_DETAILS */
/* unused harmony export FINISH_EDITING_COLLECTION_DETAILS */
/* unused harmony export initialState */
/* unused harmony export fetchCurrentCollection */
/* unused harmony export fetchUserCollections */
/* unused harmony export abortFetchUserCollections */
/* unused harmony export abortAddAddonToCollection */
/* unused harmony export fetchCurrentCollectionPage */
/* unused harmony export loadCurrentCollection */
/* unused harmony export loadCurrentCollectionPage */
/* unused harmony export loadCollectionAddons */
/* unused harmony export loadUserCollections */
/* unused harmony export addonAddedToCollection */
/* unused harmony export abortFetchCurrentCollection */
/* unused harmony export addAddonToCollection */
/* unused harmony export createCollection */
/* unused harmony export updateCollection */
/* unused harmony export beginCollectionModification */
/* unused harmony export finishCollectionModification */
/* unused harmony export unloadCollectionBySlug */
/* unused harmony export removeAddonFromCollection */
/* unused harmony export addonRemovedFromCollection */
/* unused harmony export deleteCollection */
/* unused harmony export updateCollectionAddon */
/* unused harmony export deleteCollectionAddonNotes */
/* unused harmony export beginEditingCollectionDetails */
/* unused harmony export finishEditingCollectionDetails */
/* unused harmony export createInternalAddons */
/* unused harmony export getCollectionById */
/* unused harmony export getCurrentCollection */
/* unused harmony export createInternalCollection */
/* unused harmony export loadCollectionIntoState */
/* unused harmony export changeAddonCollectionsLoadingFlag */
/* unused harmony export localizeCollectionDetail */
/* unused harmony export expandCollections */
/* unused harmony export convertFiltersToQueryParams */
/* unused harmony export collectionUrl */
/* unused harmony export collectionEditUrl */
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(30);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(31);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(42);
/* harmony import */ var core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(24);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(25);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(10);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var common_tags__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(18);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(87);
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(connected_react_router__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_reducers_addons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(64);
function _templateObject(){var data=_taggedTemplateLiteral(["Cannot load add-ons for collection\n          \"","\" because the collection has not\n          been loaded yet"]);_templateObject=function(){return data};return data}function _taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0)}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1,source;i<arguments.length;i++){source=null!=arguments[i]?arguments[i]:{};if(i%2){ownKeys(Object(source),!0).forEach(function(key){_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}return obj}var ADD_ADDON_TO_COLLECTION="ADD_ADDON_TO_COLLECTION";var FETCH_CURRENT_COLLECTION="FETCH_CURRENT_COLLECTION";var FETCH_USER_COLLECTIONS="FETCH_USER_COLLECTIONS";var LOAD_CURRENT_COLLECTION="LOAD_CURRENT_COLLECTION";var FETCH_CURRENT_COLLECTION_PAGE="FETCH_CURRENT_COLLECTION_PAGE";var LOAD_CURRENT_COLLECTION_PAGE="LOAD_CURRENT_COLLECTION_PAGE";var ABORT_FETCH_CURRENT_COLLECTION="ABORT_FETCH_CURRENT_COLLECTION";var ABORT_FETCH_USER_COLLECTIONS="ABORT_FETCH_USER_COLLECTIONS";var ABORT_ADD_ADDON_TO_COLLECTION="ABORT_ADD_ADDON_TO_COLLECTION";var LOAD_USER_COLLECTIONS="LOAD_USER_COLLECTIONS";var ADDON_ADDED_TO_COLLECTION="ADDON_ADDED_TO_COLLECTION";var LOAD_COLLECTION_ADDONS="LOAD_COLLECTION_ADDONS";var UPDATE_COLLECTION="UPDATE_COLLECTION";var UNLOAD_COLLECTION_BY_SLUG="UNLOAD_COLLECTION_BY_SLUG";var CREATE_COLLECTION="CREATE_COLLECTION";var BEGIN_COLLECTION_MODIFICATION="BEGIN_COLLECTION_MODIFICATION";var FINISH_COLLECTION_MODIFICATION="FINISH_COLLECTION_MODIFICATION";var REMOVE_ADDON_FROM_COLLECTION="REMOVE_ADDON_FROM_COLLECTION";var ADDON_REMOVED_FROM_COLLECTION="ADDON_REMOVED_FROM_COLLECTION";var DELETE_COLLECTION="DELETE_COLLECTION";var UPDATE_COLLECTION_ADDON="UPDATE_COLLECTION_ADDON";var DELETE_COLLECTION_ADDON_NOTES="DELETE_COLLECTION_ADDON_NOTES";var BEGIN_EDITING_COLLECTION_DETAILS="BEGIN_EDITING_COLLECTION_DETAILS";var FINISH_EDITING_COLLECTION_DETAILS="FINISH_EDITING_COLLECTION_DETAILS";var initialState={byId:{},bySlug:{},current:{id:null,loading:!1},userCollections:{},addonInCollections:{},isCollectionBeingModified:!1,hasAddonBeenAdded:!1,hasAddonBeenRemoved:!1,editingCollectionDetails:!1};var fetchCurrentCollection=function(){var _ref=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},errorHandlerId=_ref.errorHandlerId,filters=_ref.filters,slug=_ref.slug,userId=_ref.userId;invariant__WEBPACK_IMPORTED_MODULE_15___default()(errorHandlerId,"errorHandlerId is required");invariant__WEBPACK_IMPORTED_MODULE_15___default()(slug,"slug is required");invariant__WEBPACK_IMPORTED_MODULE_15___default()(userId,"userId is required");return{type:FETCH_CURRENT_COLLECTION,payload:{errorHandlerId:errorHandlerId,filters:filters,slug:slug,userId:userId}}};var fetchUserCollections=function(){var _ref2=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},errorHandlerId=_ref2.errorHandlerId,userId=_ref2.userId;invariant__WEBPACK_IMPORTED_MODULE_15___default()(errorHandlerId,"errorHandlerId is required");invariant__WEBPACK_IMPORTED_MODULE_15___default()(userId,"userId is required");return{type:FETCH_USER_COLLECTIONS,payload:{errorHandlerId:errorHandlerId,userId:userId}}};var abortFetchUserCollections=function(){var _ref3=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},userId=_ref3.userId;invariant__WEBPACK_IMPORTED_MODULE_15___default()(userId,"userId is required");return{type:ABORT_FETCH_USER_COLLECTIONS,payload:{userId:userId}}};var abortAddAddonToCollection=function(){var _ref4=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},addonId=_ref4.addonId,userId=_ref4.userId;invariant__WEBPACK_IMPORTED_MODULE_15___default()(userId,"userId is required");invariant__WEBPACK_IMPORTED_MODULE_15___default()(addonId,"addonId is required");return{type:ABORT_ADD_ADDON_TO_COLLECTION,payload:{userId:userId,addonId:addonId}}};var fetchCurrentCollectionPage=function(){var _ref5=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},errorHandlerId=_ref5.errorHandlerId,filters=_ref5.filters,slug=_ref5.slug,userId=_ref5.userId;invariant__WEBPACK_IMPORTED_MODULE_15___default()(errorHandlerId,"errorHandlerId is required");invariant__WEBPACK_IMPORTED_MODULE_15___default()(slug,"slug is required");invariant__WEBPACK_IMPORTED_MODULE_15___default()(userId,"userId is required");return{type:FETCH_CURRENT_COLLECTION_PAGE,payload:{errorHandlerId:errorHandlerId,filters:filters,slug:slug,userId:userId}}};var loadCurrentCollection=function(){var _ref6=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},addonsResponse=_ref6.addonsResponse,detail=_ref6.detail;invariant__WEBPACK_IMPORTED_MODULE_15___default()(detail,"detail is required");return{type:LOAD_CURRENT_COLLECTION,payload:{addonsResponse:addonsResponse,detail:detail}}};var loadCurrentCollectionPage=function(){var _ref7=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},addonsResponse=_ref7.addonsResponse;invariant__WEBPACK_IMPORTED_MODULE_15___default()(addonsResponse,"The addonsResponse parameter is required");return{type:LOAD_CURRENT_COLLECTION_PAGE,payload:{addonsResponse:addonsResponse}}};var loadCollectionAddons=function(){var _ref8=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},addons=_ref8.addons,slug=_ref8.slug;if(!addons){throw new Error("The addons parameter is required")}if(!slug){throw new Error("The slug parameter is required")}return{type:LOAD_COLLECTION_ADDONS,payload:{addons:addons,slug:slug}}};var loadUserCollections=function(){var _ref9=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},collections=_ref9.collections,userId=_ref9.userId;invariant__WEBPACK_IMPORTED_MODULE_15___default()(userId,"userId is required");invariant__WEBPACK_IMPORTED_MODULE_15___default()(collections,"collections are required");return{type:LOAD_USER_COLLECTIONS,payload:{userId:userId,collections:collections}}};var addonAddedToCollection=function(){var _ref10=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},addonId=_ref10.addonId,collectionId=_ref10.collectionId,userId=_ref10.userId;invariant__WEBPACK_IMPORTED_MODULE_15___default()(addonId,"addonId is required");invariant__WEBPACK_IMPORTED_MODULE_15___default()(userId,"userId is required");invariant__WEBPACK_IMPORTED_MODULE_15___default()(collectionId,"collectionId is required");return{type:ADDON_ADDED_TO_COLLECTION,payload:{addonId:addonId,collectionId:collectionId,userId:userId}}};var abortFetchCurrentCollection=function(){return{type:ABORT_FETCH_CURRENT_COLLECTION}};var addAddonToCollection=function(){var _ref11=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},addonId=_ref11.addonId,collectionId=_ref11.collectionId,editing=_ref11.editing,errorHandlerId=_ref11.errorHandlerId,filters=_ref11.filters,notes=_ref11.notes,slug=_ref11.slug,userId=_ref11.userId;invariant__WEBPACK_IMPORTED_MODULE_15___default()(addonId,"The addonId parameter is required");invariant__WEBPACK_IMPORTED_MODULE_15___default()(collectionId,"The collectionId parameter is required");invariant__WEBPACK_IMPORTED_MODULE_15___default()(slug,"The slug parameter is required");invariant__WEBPACK_IMPORTED_MODULE_15___default()(errorHandlerId,"The errorHandlerId parameter is required");invariant__WEBPACK_IMPORTED_MODULE_15___default()(userId,"The userId parameter is required");if(editing){invariant__WEBPACK_IMPORTED_MODULE_15___default()(filters,"The filters parameter is required when editing")}return{type:ADD_ADDON_TO_COLLECTION,payload:{addonId:addonId,collectionId:collectionId,editing:editing,errorHandlerId:errorHandlerId,filters:filters,notes:notes,slug:slug,userId:userId}}};var createCollection=function(){var _ref12=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},errorHandlerId=_ref12.errorHandlerId,defaultLocale=_ref12.defaultLocale,description=_ref12.description,includeAddonId=_ref12.includeAddonId,name=_ref12.name,slug=_ref12.slug,userId=_ref12.userId;invariant__WEBPACK_IMPORTED_MODULE_15___default()(errorHandlerId,"errorHandlerId is required");invariant__WEBPACK_IMPORTED_MODULE_15___default()(userId,"userId is required");invariant__WEBPACK_IMPORTED_MODULE_15___default()(name,"name is required when creating a collection");invariant__WEBPACK_IMPORTED_MODULE_15___default()(slug,"slug is required when creating a collection");return{type:CREATE_COLLECTION,payload:{errorHandlerId:errorHandlerId,defaultLocale:defaultLocale,description:description,includeAddonId:includeAddonId,name:name,slug:slug,userId:userId}}};var updateCollection=function(){var _ref13=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},collectionSlug=_ref13.collectionSlug,defaultLocale=_ref13.defaultLocale,description=_ref13.description,errorHandlerId=_ref13.errorHandlerId,filters=_ref13.filters,name=_ref13.name,slug=_ref13.slug,userId=_ref13.userId;invariant__WEBPACK_IMPORTED_MODULE_15___default()(collectionSlug,"collectionSlug is required when updating");invariant__WEBPACK_IMPORTED_MODULE_15___default()(errorHandlerId,"errorHandlerId is required");invariant__WEBPACK_IMPORTED_MODULE_15___default()(filters,"filters is required");invariant__WEBPACK_IMPORTED_MODULE_15___default()(userId,"userId is required");return{type:UPDATE_COLLECTION,payload:{collectionSlug:collectionSlug,defaultLocale:defaultLocale,description:description,errorHandlerId:errorHandlerId,filters:filters,name:name,slug:slug,userId:userId}}};var beginCollectionModification=function(){return{type:BEGIN_COLLECTION_MODIFICATION,payload:null}};var finishCollectionModification=function(){return{type:FINISH_COLLECTION_MODIFICATION,payload:null}};var unloadCollectionBySlug=function(slug){if(!slug){throw new Error("A slug is required")}return{type:UNLOAD_COLLECTION_BY_SLUG,payload:{slug:slug}}};var removeAddonFromCollection=function(){var _ref14=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},addonId=_ref14.addonId,errorHandlerId=_ref14.errorHandlerId,filters=_ref14.filters,slug=_ref14.slug,userId=_ref14.userId;invariant__WEBPACK_IMPORTED_MODULE_15___default()(addonId,"The addonId parameter is required");invariant__WEBPACK_IMPORTED_MODULE_15___default()(errorHandlerId,"The errorHandlerId parameter is required");invariant__WEBPACK_IMPORTED_MODULE_15___default()(filters,"The filters parameter is required");invariant__WEBPACK_IMPORTED_MODULE_15___default()(slug,"The slug parameter is required");invariant__WEBPACK_IMPORTED_MODULE_15___default()(userId,"The userId parameter is required");return{type:REMOVE_ADDON_FROM_COLLECTION,payload:{addonId:addonId,errorHandlerId:errorHandlerId,filters:filters,slug:slug,userId:userId}}};var addonRemovedFromCollection=function(){return{type:ADDON_REMOVED_FROM_COLLECTION}};var deleteCollection=function(){var _ref15=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},errorHandlerId=_ref15.errorHandlerId,slug=_ref15.slug,userId=_ref15.userId;invariant__WEBPACK_IMPORTED_MODULE_15___default()(errorHandlerId,"The errorHandlerId parameter is required");invariant__WEBPACK_IMPORTED_MODULE_15___default()(slug,"The slug parameter is required");invariant__WEBPACK_IMPORTED_MODULE_15___default()(userId,"The userId parameter is required");return{type:DELETE_COLLECTION,payload:{errorHandlerId:errorHandlerId,slug:slug,userId:userId}}};var updateCollectionAddon=function(){var _ref16=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},addonId=_ref16.addonId,errorHandlerId=_ref16.errorHandlerId,notes=_ref16.notes,filters=_ref16.filters,slug=_ref16.slug,userId=_ref16.userId;invariant__WEBPACK_IMPORTED_MODULE_15___default()(addonId,"The addonId parameter is required");invariant__WEBPACK_IMPORTED_MODULE_15___default()(errorHandlerId,"The errorHandlerId parameter is required");invariant__WEBPACK_IMPORTED_MODULE_15___default()(notes!==void 0&&null!==notes,"The notes parameter is required");invariant__WEBPACK_IMPORTED_MODULE_15___default()(filters,"The filters parameter is required");invariant__WEBPACK_IMPORTED_MODULE_15___default()(slug,"The slug parameter is required");invariant__WEBPACK_IMPORTED_MODULE_15___default()(userId,"The userId parameter is required");return{type:UPDATE_COLLECTION_ADDON,payload:{addonId:addonId,errorHandlerId:errorHandlerId,notes:notes,filters:filters,slug:slug,userId:userId}}};var deleteCollectionAddonNotes=function(){var _ref17=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},addonId=_ref17.addonId,errorHandlerId=_ref17.errorHandlerId,filters=_ref17.filters,slug=_ref17.slug,userId=_ref17.userId;invariant__WEBPACK_IMPORTED_MODULE_15___default()(addonId,"The addonId parameter is required");invariant__WEBPACK_IMPORTED_MODULE_15___default()(errorHandlerId,"The errorHandlerId parameter is required");invariant__WEBPACK_IMPORTED_MODULE_15___default()(filters,"The filters parameter is required");invariant__WEBPACK_IMPORTED_MODULE_15___default()(slug,"The slug parameter is required");invariant__WEBPACK_IMPORTED_MODULE_15___default()(userId,"The userId parameter is required");// For delete we set the notes field to an empty string and call update.
// TODO: Use a null instead when https://github.com/mozilla/addons-server/issues/7832 is fixed.
return{type:DELETE_COLLECTION_ADDON_NOTES,payload:{addonId:addonId,errorHandlerId:errorHandlerId,filters:filters,notes:"",slug:slug,userId:userId}}};var beginEditingCollectionDetails=function(){return{type:BEGIN_EDITING_COLLECTION_DETAILS}};var finishEditingCollectionDetails=function(){return{type:FINISH_EDITING_COLLECTION_DETAILS}};var createInternalAddons=function(items){return items.map(function(_ref18){var addon=_ref18.addon,notes=_ref18.notes;// This allows to have a consistent way to manipulate addons in the app.
return _objectSpread({},Object(core_reducers_addons__WEBPACK_IMPORTED_MODULE_17__[/* createInternalAddon */ "b"])(addon),{notes:notes})})};var getCollectionById=function(_ref19){var id=_ref19.id,state=_ref19.state;if(!id){throw new Error("The id parameter is required")}if(!state){throw new Error("The state parameter is required")}return state.byId[id]||null};var getCurrentCollection=function(collectionsState){if(!collectionsState){throw new Error("The collectionsState parameter is required")}if(!collectionsState.current.id){return null}return getCollectionById({id:collectionsState.current.id,state:collectionsState})};var createInternalCollection=function(_ref20){var addonsResponse=_ref20.addonsResponse,detail=_ref20.detail;return{addons:addonsResponse?createInternalAddons(addonsResponse.results):null,authorId:detail.author.id,authorName:detail.author.name,authorUsername:detail.author.username,defaultLocale:detail.default_locale,description:detail.description,id:detail.id,lastUpdatedDate:detail.modified,name:detail.name||"",numberOfAddons:addonsResponse?addonsResponse.count:detail.addon_count,pageSize:addonsResponse?addonsResponse.page_size:null,slug:detail.slug}};var loadCollectionIntoState=function(_ref21){var addonsResponse=_ref21.addonsResponse,collection=_ref21.collection,state=_ref21.state,existingCollection=state.byId[collection.id],internalCollection=createInternalCollection({detail:collection,addonsResponse:addonsResponse});// In case the new collection isn't loaded with add-ons,
// make sure we don't overwrite any existing addons.
if(!internalCollection.addons&&existingCollection){internalCollection.addons=existingCollection.addons;internalCollection.pageSize=existingCollection.pageSize}return _objectSpread({},state,{byId:_objectSpread({},state.byId,_defineProperty({},internalCollection.id,internalCollection)),bySlug:_objectSpread({},state.bySlug,_defineProperty({},internalCollection.slug,internalCollection.id))})};var changeAddonCollectionsLoadingFlag=function(){var _ref22=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},addonId=_ref22.addonId,loading=_ref22.loading,state=_ref22.state,userId=_ref22.userId,userState=state.addonInCollections[userId],addonState=userState&&userState[addonId];return _objectSpread({},state,{addonInCollections:_objectSpread({},state.addonInCollections,_defineProperty({},userId,_objectSpread({},userState,_defineProperty({},addonId,{collections:addonState?addonState.collections:null,loading:loading}))))})};var unloadUserCollections=function(){var _ref23=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},state=_ref23.state,userId=_ref23.userId;return _objectSpread({},state,{userCollections:_objectSpread({},state.userCollections,_defineProperty({},userId,{collections:null,loading:!1}))})};var localizeCollectionDetail=function(_ref24){var detail=_ref24.detail,lang=_ref24.lang;invariant__WEBPACK_IMPORTED_MODULE_15___default()(detail,"detail is required for localizeCollectionDetail");invariant__WEBPACK_IMPORTED_MODULE_15___default()(lang,"lang is required for localizeCollectionDetail");// Flow will not allow us to use the spread operator here, so we have
// to repeat all the fields.
return{addon_count:detail.addon_count,author:detail.author,default_locale:detail.default_locale,description:detail.description?detail.description[lang]:null,id:detail.id,modified:detail.modified,name:detail.name[lang],public:detail.public,slug:detail.slug,url:detail.url,uuid:detail.uuid}};var expandCollections=function(collections,meta){return meta&&meta.collections?meta.collections.reduce(function(result,id){var collection=collections.byId[id];if(collection){result.push(collection)}return result},[]):null};var convertFiltersToQueryParams=function(filters){return{page:filters.page,collection_sort:filters.collectionSort}};var collectionUrl=function(_ref25){var authorId=_ref25.authorId,collection=_ref25.collection,collectionSlug=_ref25.collectionSlug,slug=collectionSlug,userId=authorId;if(collection){slug=collection.slug;userId=collection.authorId}invariant__WEBPACK_IMPORTED_MODULE_15___default()(slug&&userId,"Either a collection or an authorId and collectionSlug are required.");return"/collections/".concat(userId,"/").concat(slug,"/")};var collectionEditUrl=function(_ref26){var authorId=_ref26.authorId,collection=_ref26.collection,collectionSlug=_ref26.collectionSlug,_ref26$_collectionUrl=_ref26._collectionUrl,_collectionUrl=void 0===_ref26$_collectionUrl?collectionUrl:_ref26$_collectionUrl;return"".concat(_collectionUrl({authorId:authorId,collection:collection,collectionSlug:collectionSlug}),"edit/")};var reducer=function(){var state=0<arguments.length&&arguments[0]!==void 0?arguments[0]:initialState,action=1<arguments.length?arguments[1]:void 0;switch(action.type){case FETCH_CURRENT_COLLECTION:return _objectSpread({},state,{current:{id:null,loading:!0}});case FETCH_CURRENT_COLLECTION_PAGE:{var current={id:state.current.id,loading:!0},currentCollection=getCurrentCollection(state);if(!currentCollection){return _objectSpread({},state,{current:current})}return _objectSpread({},state,{byId:_objectSpread({},state.byId,_defineProperty({},currentCollection.id,_objectSpread({},currentCollection,{addons:[],numberOfAddons:null,pageSize:null}))),current:current})}case LOAD_CURRENT_COLLECTION:{var _action$payload=action.payload,addonsResponse=_action$payload.addonsResponse,detail=_action$payload.detail,newState=loadCollectionIntoState({addonsResponse:addonsResponse,collection:detail,state:state});return _objectSpread({},newState,{current:{id:detail.id,loading:!1}})}case LOAD_CURRENT_COLLECTION_PAGE:{var _addonsResponse=action.payload.addonsResponse,_currentCollection=getCurrentCollection(state);if(!_currentCollection){throw new Error("".concat(action.type,": a current collection does not exist"))}return _objectSpread({},state,{byId:_objectSpread({},state.byId,_defineProperty({},_currentCollection.id,_objectSpread({},_currentCollection,{addons:createInternalAddons(_addonsResponse.results),numberOfAddons:_addonsResponse.count,pageSize:_addonsResponse.page_size}))),current:{id:state.current.id,loading:!1}})}case LOAD_COLLECTION_ADDONS:{var _action$payload2=action.payload,addons=_action$payload2.addons,_slug=_action$payload2.slug,collectionId=state.bySlug[_slug];if(!collectionId){throw new Error(Object(common_tags__WEBPACK_IMPORTED_MODULE_14__[/* oneLine */ "a"])(_templateObject(),_slug))}var collection=state.byId[collectionId];return _objectSpread({},state,{byId:_objectSpread({},state.byId,_defineProperty({},collectionId,_objectSpread({},collection,{addons:createInternalAddons(addons)})))})}case ABORT_FETCH_CURRENT_COLLECTION:return _objectSpread({},state,{current:{id:null,loading:!1}});case FETCH_USER_COLLECTIONS:{var _userId=action.payload.userId;return _objectSpread({},state,{userCollections:_objectSpread({},state.userCollections,_defineProperty({},_userId,{collections:null,loading:!0}))})}case ABORT_FETCH_USER_COLLECTIONS:{var _userId2=action.payload.userId;return _objectSpread({},state,{userCollections:_objectSpread({},state.userCollections,_defineProperty({},_userId2,{collections:null,loading:!1}))})}case LOAD_USER_COLLECTIONS:{var _action$payload3=action.payload,collections=_action$payload3.collections,_userId3=_action$payload3.userId,_newState=_objectSpread({},state);collections.forEach(function(collection){_newState=loadCollectionIntoState({state:_newState,collection:collection})});return _objectSpread({},_newState,{userCollections:_objectSpread({},state.userCollections,_defineProperty({},_userId3,{collections:collections.map(function(collection){return collection.id}),loading:!1}))})}case ADDON_ADDED_TO_COLLECTION:{var _action$payload4=action.payload,_addonId=_action$payload4.addonId,_collectionId=_action$payload4.collectionId,_userId4=_action$payload4.userId,addonInCollections=state.addonInCollections,_collections=[];if(addonInCollections[_userId4]&&addonInCollections[_userId4][_addonId]){var existingCollections=addonInCollections[_userId4][_addonId].collections;if(existingCollections){_collections=existingCollections}}return _objectSpread({},state,{addonInCollections:_objectSpread({},state.addonInCollections,_defineProperty({},_userId4,_objectSpread({},state.addonInCollections[_userId4],_defineProperty({},_addonId,{collections:_collections.concat([_collectionId]),loading:!1})))),hasAddonBeenAdded:!0})}case ADD_ADDON_TO_COLLECTION:{var _action$payload5=action.payload,_addonId2=_action$payload5.addonId,_userId5=_action$payload5.userId,_newState2=changeAddonCollectionsLoadingFlag({addonId:_addonId2,userId:_userId5,state:state,loading:!0});return _objectSpread({},_newState2,{hasAddonBeenAdded:!1})}case ABORT_ADD_ADDON_TO_COLLECTION:{var _action$payload6=action.payload,_addonId3=_action$payload6.addonId,_userId6=_action$payload6.userId,_newState3=changeAddonCollectionsLoadingFlag({addonId:_addonId3,userId:_userId6,state:state,loading:!1});return _objectSpread({},_newState3,{hasAddonBeenAdded:!1})}case BEGIN_COLLECTION_MODIFICATION:{return _objectSpread({},state,{isCollectionBeingModified:!0})}case FINISH_COLLECTION_MODIFICATION:{return _objectSpread({},state,{isCollectionBeingModified:!1})}case UNLOAD_COLLECTION_BY_SLUG:{var _slug2=action.payload.slug,_collectionId2=state.bySlug[_slug2];if(_collectionId2){return _objectSpread({},state,{byId:_objectSpread({},state.byId,_defineProperty({},_collectionId2,void 0))})}return state}case CREATE_COLLECTION:case DELETE_COLLECTION:case UPDATE_COLLECTION:{var _userId7=action.payload.userId;return unloadUserCollections({state:state,userId:_userId7})}case REMOVE_ADDON_FROM_COLLECTION:{return _objectSpread({},state,{hasAddonBeenRemoved:!1})}case ADDON_REMOVED_FROM_COLLECTION:{return _objectSpread({},state,{hasAddonBeenRemoved:!0})}case BEGIN_EDITING_COLLECTION_DETAILS:{return _objectSpread({},state,{editingCollectionDetails:!0})}case FINISH_EDITING_COLLECTION_DETAILS:{return _objectSpread({},state,{editingCollectionDetails:!1})}// See: https://github.com/mozilla/addons-frontend/issues/7412
case connected_react_router__WEBPACK_IMPORTED_MODULE_16__["LOCATION_CHANGE"]:return _objectSpread({},state,{addonInCollections:{}});default:return state;}};/* harmony default export */ __webpack_exports__["d"] = (reducer);

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.freeze.js
var es_object_freeze = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(111);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(56);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.ends-with.js
var es_string_ends_with = __webpack_require__(432);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(113);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__(103);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.starts-with.js
var es_string_starts_with = __webpack_require__(190);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(142);

// EXTERNAL MODULE: ./node_modules/url/url.js
var url = __webpack_require__(75);
var url_default = /*#__PURE__*/__webpack_require__.n(url);

// EXTERNAL MODULE: ./node_modules/@willdurand/isomorphic-formdata/browser.js
var browser = __webpack_require__(745);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);

// EXTERNAL MODULE: ./node_modules/utf8/utf8.js
var utf8 = __webpack_require__(746);
var utf8_default = /*#__PURE__*/__webpack_require__.n(utf8);

// EXTERNAL MODULE: ./node_modules/common-tags/es/index.js + 48 modules
var es = __webpack_require__(18);

// EXTERNAL MODULE: ./src/core/client/config.js
var config = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__(78);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(85);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__(63);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(101);

// CONCATENATED MODULE: ./src/core/languages.js
function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||"[object Arguments]"===Object.prototype.toString.call(iter))return Array.from(iter)}function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i]}return arr2}}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1,source;i<arguments.length;i++){source=null!=arguments[i]?arguments[i]:{};if(i%2){ownKeys(Object(source),!0).forEach(function(key){_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}return obj}/* eslint-disable */var unfilteredLanguages={af:{English:"Afrikaans",native:"Afrikaans"},ach:{English:"Acholi",native:"Acholi"},ak:{English:"Akan",native:"Akan"},"am-et":{English:"Amharic",native:"\u12A0\u121B\u122D\u129B"},an:{English:"Aragonese",native:"aragon\xE9s"},ar:{English:"Arabic",native:"\u0639\u0631\u0628\u064A"},as:{English:"Assamese",native:"\u0985\u09B8\u09AE\u09C0\u09AF\u09BC\u09BE"},ast:{English:"Asturian",native:"Asturianu"},az:{English:"Azerbaijani",native:"Az\u0259rbaycanca"},be:{English:"Belarusian",native:"\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u043A\u0430\u044F"},bg:{English:"Bulgarian",native:"\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438"},bm:{English:"Bambara",native:"Bamanankan"},"bn-BD":{English:"Bengali (Bangladesh)",native:"\u09AC\u09BE\u0982\u09B2\u09BE (\u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6)"},"bn-IN":{English:"Bengali (India)",native:"\u09AC\u09BE\u0982\u09B2\u09BE (\u09AD\u09BE\u09B0\u09A4)"},bn:{English:"Bengali",native:"\u09AC\u09BE\u0982\u09B2\u09BE"},br:{English:"Breton",native:"Brezhoneg"},brx:{English:"Bodo",native:"\u092C\u0930'"},bs:{English:"Bosnian",native:"Bosanski"},ca:{English:"Catalan",native:"Catal\xE0"},"ca-valencia":{English:"Catalan (Valencian)",native:"Catal\xE0 (Valenci\xE0)"},cak:{English:"Kaqchikel",native:"Maya Kaqchikel"},cs:{English:"Czech",native:"\u010Ce\u0161tina"},csb:{English:"Kashubian",native:"Kasz\xEBbsczi"},cy:{English:"Welsh",native:"Cymraeg"},da:{English:"Danish",native:"Dansk"},dbg:{English:"Debug Robot",native:"\u1E12\u1E17\u0180\u016D\u0260 \u0158\u01FF\u0180\u01FF\u0167"},de:{English:"German",native:"Deutsch"},"de-AT":{English:"German (Austria)",native:"Deutsch (\xD6sterreich)"},"de-CH":{English:"German (Switzerland)",native:"Deutsch (Schweiz)"},"de-DE":{English:"German (Germany)",native:"Deutsch (Deutschland)"},dsb:{English:"Lower Sorbian",native:"Dolnoserb\u0161\u0107ina"},ee:{English:"Ewe",native:"E\u028Be"},el:{English:"Greek",native:"\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC"},"en-AU":{English:"English (Australian)",native:"English (Australian)"},"en-CA":{English:"English (Canadian)",native:"English (Canadian)"},"en-GB":{English:"English (British)",native:"English (British)"},"en-NZ":{English:"English (New Zealand)",native:"English (New Zealand)"},"en-US":{English:"English (US)",native:"English (US)"},"en-ZA":{English:"English (South African)",native:"English (South African)"},eo:{English:"Esperanto",native:"Esperanto"},es:{English:"Spanish",native:"Espa\xF1ol"},"es-AR":{English:"Spanish (Argentina)",native:"Espa\xF1ol (de Argentina)"},"es-CL":{English:"Spanish (Chile)",native:"Espa\xF1ol (de Chile)"},"es-ES":{English:"Spanish (Spain)",native:"Espa\xF1ol (de Espa\xF1a)"},"es-MX":{English:"Spanish (Mexico)",native:"Espa\xF1ol (de M\xE9xico)"},et:{English:"Estonian",native:"Eesti keel"},eu:{English:"Basque",native:"Euskara"},fa:{English:"Persian",native:"\u0641\u0627\u0631\u0633\u06CC"},"fa-IR":{English:"Persian (Iran)",native:"(\u0627\u06CC\u0631\u0627\u0646) \u0641\u0627\u0631\u0633\u06CC"},ff:{English:"Fulah",native:"Pulaar-Fulfulde"},fi:{English:"Finnish",native:"suomi"},"fj-FJ":{English:"Fijian",native:"Vosa vaka-Viti"},fr:{English:"French",native:"Fran\xE7ais"},"fur-IT":{English:"Friulian",native:"Furlan"},"fy-NL":{English:"Frisian",native:"Frysk"},ga:{English:"Irish",native:"Gaeilge"},"ga-IE":{English:"Irish",native:"Gaeilge"},gd:{English:"Gaelic (Scotland)",native:"G\xE0idhlig"},gl:{English:"Galician",native:"Galego"},gn:{English:"Guarani (Paraguay)",native:"Guaran\xCD"},gu:{English:"Gujarati",native:"\u0A97\u0AC1\u0A9C\u0AB0\u0ABE\u0AA4\u0AC0"},"gu-IN":{English:"Gujarati (India)",native:"\u0A97\u0AC1\u0A9C\u0AB0\u0ABE\u0AA4\u0AC0 (\u0AAD\u0ABE\u0AB0\u0AA4)"},ha:{English:"Hausa",native:"Hausa"},he:{English:"Hebrew",native:"\u05E2\u05D1\u05E8\u05D9\u05EA"},hi:{English:"Hindi",native:"\u0939\u093F\u0928\u094D\u0926\u0940"},"hi-IN":{English:"Hindi (India)",native:"\u0939\u093F\u0928\u094D\u0926\u0940 (\u092D\u093E\u0930\u0924)"},hr:{English:"Croatian",native:"Hrvatski"},hsb:{English:"Upper Sorbian",native:"Hornjoserbsce"},hu:{English:"Hungarian",native:"magyar"},"hy-AM":{English:"Armenian",native:"\u0540\u0561\u0575\u0565\u0580\u0565\u0576"},ia:{English:"Interlingua",native:"Interlingua"},id:{English:"Indonesian",native:"Bahasa Indonesia"},ig:{English:"Igbo",native:"Igbo"},is:{English:"Icelandic",native:"\xEDslenska"},it:{English:"Italian",native:"Italiano"},ja:{English:"Japanese",native:"\u65E5\u672C\u8A9E"},"ja-JP-mac":{English:"Japanese",native:"\u65E5\u672C\u8A9E"},ka:{English:"Georgian",native:"\u10E5\u10D0\u10E0\u10D7\u10E3\u10DA\u10D8"},kab:{English:"Kabyle",native:"Taqbaylit"},kk:{English:"Kazakh",native:"\u049A\u0430\u0437\u0430\u049B"},km:{English:"Khmer",native:"\u1781\u17D2\u1798\u17C2\u179A"},kn:{English:"Kannada",native:"\u0C95\u0CA8\u0CCD\u0CA8\u0CA1"},ko:{English:"Korean",native:"\uD55C\uAD6D\uC5B4"},kok:{English:"Konkani",native:"\u0915\u094B\u0902\u0915\u0928\u0940"},ku:{English:"Kurdish",native:"Kurd\xEE"},ks:{English:"Kashmiri",native:"\u0643\u0634\u0645\u06CC\u0631\u06CC"},la:{English:"Latin",native:"Latina"},lg:{English:"Luganda",native:"Luganda"},lij:{English:"Ligurian",native:"Ligure"},ln:{English:"Lingala",native:"Ling\xE1la"},lo:{English:"Lao",native:"\u0E9E\u0EB2\u0EAA\u0EB2\u0EA5\u0EB2\u0EA7"},lt:{English:"Lithuanian",native:"lietuvi\u0173 kalba"},lv:{English:"Latvian",native:"Latvie\u0161u"},mai:{English:"Maithili",native:"\u092E\u0948\u0925\u093F\u0932\u0940 \u09AE\u09C8\u09A5\u09BF\u09B2\u09C0"},mg:{English:"Malagasy",native:"Malagasy"},mi:{English:"Maori (Aotearoa)",native:"M\u0101ori (Aotearoa)"},mk:{English:"Macedonian",native:"\u041C\u0430\u043A\u0435\u0434\u043E\u043D\u0441\u043A\u0438"},ml:{English:"Malayalam",native:"\u0D2E\u0D32\u0D2F\u0D3E\u0D33\u0D02"},mn:{English:"Mongolian",native:"\u041C\u043E\u043D\u0433\u043E\u043B"},mr:{English:"Marathi",native:"\u092E\u0930\u093E\u0920\u0940"},ms:{English:"Malay",native:"Melayu"},mt:{English:"Maltese",native:"Malti"},my:{English:"Burmese",native:"\u1019\u103C\u1014\u103A\u1019\u102C\u1018\u102C\u101E\u102C"},"nb-NO":{English:"Norwegian (Bokm\xE5l)",native:"Norsk bokm\xE5l"},"ne-NP":{English:"Nepali",native:"\u0928\u0947\u092A\u093E\u0932\u0940"},"nn-NO":{English:"Norwegian (Nynorsk)",native:"Norsk nynorsk"},nl:{English:"Dutch",native:"Nederlands"},nr:{English:"Ndebele, South",native:"isiNdebele"},nso:{English:"Northern Sotho",native:"Sepedi"},oc:{English:"Occitan (Lengadocian)",native:"occitan (lengadocian)"},or:{English:"Oriya",native:"\u0B13\u0B21\u0B3C\u0B3F\u0B06"},pa:{English:"Punjabi",native:"\u0A2A\u0A70\u0A1C\u0A3E\u0A2C\u0A40"},"pa-IN":{English:"Punjabi (India)",native:"\u0A2A\u0A70\u0A1C\u0A3E\u0A2C\u0A40 (\u0A2D\u0A3E\u0A30\u0A24)"},pl:{English:"Polish",native:"Polski"},"pt-BR":{English:"Portuguese (Brazilian)",native:"Portugu\xEAs (do\xA0Brasil)"},"pt-PT":{English:"Portuguese (Portugal)",native:"Portugu\xEAs (Europeu)"},ro:{English:"Romanian",native:"Rom\xE2n\u0103"},rm:{English:"Romansh",native:"rumantsch"},ru:{English:"Russian",native:"\u0420\u0443\u0441\u0441\u043A\u0438\u0439"},rw:{English:"Kinyarwanda",native:"Ikinyarwanda"},sa:{English:"Sanskrit",native:"\u0938\u0902\u0938\u094D\u0915\u0943\u0924"},sat:{English:"Santali",native:"\u0938\u0902\u0924\u093E\u0932\u0940"},sah:{English:"Sakha",native:"\u0421\u0430\u0445\u0430\u043B\u044B\u044B"},si:{English:"Sinhala",native:"\u0DC3\u0DD2\u0D82\u0DC4\u0DBD"},sk:{English:"Slovak",native:"sloven\u010Dina"},sl:{English:"Slovenian",native:"Sloven\u0161\u010Dina"},son:{English:"Songhai",native:"So\u014Bay"},sq:{English:"Albanian",native:"Shqip"},sr:{English:"Serbian",native:"\u0421\u0440\u043F\u0441\u043A\u0438"},"sr-Cyrl":{English:"Serbian",native:"\u0421\u0440\u043F\u0441\u043A\u0438"},"sr-Latn":{English:"Serbian",native:"Srpski"},ss:{English:"Siswati",native:"siSwati"},st:{English:"Southern Sotho",native:"Sesotho"},"sv-SE":{English:"Swedish",native:"Svenska"},sw:{English:"Swahili",native:"Kiswahili"},ta:{English:"Tamil",native:"\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD"},"ta-IN":{English:"Tamil (India)",native:"\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD (\u0B87\u0BA8\u0BCD\u0BA4\u0BBF\u0BAF\u0BBE)"},"ta-LK":{English:"Tamil (Sri Lanka)",native:"\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD (\u0B87\u0BB2\u0B99\u0BCD\u0B95\u0BC8)"},te:{English:"Telugu",native:"\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41"},th:{English:"Thai",native:"\u0E44\u0E17\u0E22"},tl:{English:"Tagalog",native:"Tagalog"},tn:{English:"Tswana",native:"Setswana"},tr:{English:"Turkish",native:"T\xFCrk\xE7e"},trs:{English:"Triqui",native:"N\xE1nj n\xEF'\xEFn"},ts:{English:"Tsonga",native:"Xitsonga"},tsz:{English:"Pur\xE9pecha",native:"Pur\xE9pecha"},"tt-RU":{English:"Tatar",native:"Tatar\xE7a"},uk:{English:"Ukrainian",native:"\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430"},ur:{English:"Urdu",native:"\u0627\u064F\u0631\u062F\u0648"},uz:{English:"Uzbek",native:"O\u02BBzbek tili"},ve:{English:"Venda",native:"Tshiven\u1E13a"},vec:{English:"Venetan",native:"V\xE8neto"},vi:{English:"Vietnamese",native:"Ti\u1EBFng Vi\u1EC7t"},wo:{English:"Wolof",native:"Wolof"},"x-testing":{English:"Testing",native:"\u0166\u1E17\u015F\u0167\u012B\u019E\u0260"},xh:{English:"Xhosa",native:"isiXhosa"},yo:{English:"Yoruba",native:"Yor\xF9b\xE1"},"zh-CN":{English:"Chinese (Simplified)",native:"\u4E2D\u6587 (\u7B80\u4F53)"},"zh-TW":{English:"Chinese (Traditional)",native:"\u6B63\u9AD4\u4E2D\u6587 (\u7E41\u9AD4)"},zu:{English:"Zulu",native:"isiZulu"}};/* eslint-enable */var supportedLanguages=config["a" /* default */].get("langs").reduce(function(object,locale){if("undefined"!=typeof unfilteredLanguages[locale]){return _objectSpread({},object,_defineProperty({},locale,unfilteredLanguages[locale]))}return object},{});var hrefLangs=[].concat(_toConsumableArray(Object.keys(config["a" /* default */].get("hrefLangsMap"))),_toConsumableArray(Object.keys(supportedLanguages).filter(function(locale){return!config["a" /* default */].get("unsupportedHrefLangs").includes(locale)})));/* harmony default export */ var languages = (supportedLanguages);
// EXTERNAL MODULE: ./src/core/reducers/api.js
var reducers_api = __webpack_require__(36);

// EXTERNAL MODULE: ./src/core/logger.js
var logger = __webpack_require__(17);

// EXTERNAL MODULE: ./src/core/searchUtils.js
var searchUtils = __webpack_require__(251);

// EXTERNAL MODULE: ./src/core/utils/index.js + 2 modules
var utils = __webpack_require__(35);

// CONCATENATED MODULE: ./src/core/api/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DEFAULT_API_PAGE_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return makeQueryString; });
/* unused harmony export createApiError */
/* unused harmony export callApi */
/* unused harmony export fetchAddon */
/* unused harmony export startLoginUrl */
/* unused harmony export logOutFromServer */
/* unused harmony export autocomplete */
/* unused harmony export allPages */
/* unused harmony export validateLocalizedString */
function _typeof(obj){"@babel/helpers - typeof";if("function"==typeof Symbol&&"symbol"==typeof Symbol.iterator){_typeof=function(obj){return typeof obj}}else{_typeof=function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){reject(error);return}if(info.done){resolve(value)}else{Promise.resolve(value).then(_next,_throw)}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)})}}function _templateObject(){var data=_taggedTemplateLiteral(["Response from API was not JSON (was Content-Type:\n            ",")"]);_templateObject=function(){return data};return data}function _taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0)}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function api_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});keys.push.apply(keys,symbols)}return keys}function api_objectSpread(target){for(var i=1,source;i<arguments.length;i++){source=null!=arguments[i]?arguments[i]:{};if(i%2){api_ownKeys(Object(source),!0).forEach(function(key){api_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{api_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}function api_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}return obj}/* global fetch */var API_BASE="".concat(config["a" /* default */].get("apiHost")).concat(config["a" /* default */].get("apiPath"));var DEFAULT_API_PAGE_SIZE=25;function makeQueryString(query){var resolvedQuery=api_objectSpread({},query);Object.keys(resolvedQuery).forEach(function(key){var value=resolvedQuery[key];if(value===void 0||null===value||""===value){// Make sure we don't turn this into ?key= (empty string) because
// sending an empty string to the API sometimes triggers bugs.
delete resolvedQuery[key]}});return url_default.a.format({query:resolvedQuery})}function createApiError(_ref){var apiURL=_ref.apiURL,response=_ref.response,jsonResponse=_ref.jsonResponse,urlId="[unknown URL]";if(apiURL){// Strip the host since we already know that.
urlId=apiURL.replace(config["a" /* default */].get("apiHost"),"");// Strip query string params since lang will vary quite a lot.
urlId=urlId.split("?")[0]}var apiError=new Error("Error calling: ".concat(urlId," (status: ").concat(response.status,")"));// $FLOW_FIXME: turn Error into a custom ApiError class.
apiError.response={apiURL:apiURL,status:response.status,data:jsonResponse};return apiError}function callApi(_ref2){var endpoint=_ref2.endpoint,_ref2$params=_ref2.params,params=void 0===_ref2$params?{}:_ref2$params,_ref2$auth=_ref2.auth,auth=void 0===_ref2$auth?!1:_ref2$auth,_ref2$apiState=_ref2.apiState,apiState=void 0===_ref2$apiState?reducers_api["B" /* initialApiState */]:_ref2$apiState,_ref2$method=_ref2.method,method=void 0===_ref2$method?"GET":_ref2$method,body=_ref2.body,credentials=_ref2.credentials,errorHandler=_ref2.errorHandler,_ref2$_config=_ref2._config,_config=void 0===_ref2$_config?config["a" /* default */]:_ref2$_config,_ref2$version=_ref2.version,version=void 0===_ref2$version?_config.get("apiVersion"):_ref2$version,_ref2$_log=_ref2._log,_log=void 0===_ref2$_log?logger["a" /* default */]:_ref2$_log,_ref2$wrapOutgoingLin=_ref2.wrapOutgoingLinks,wrapOutgoingLinks=void 0===_ref2$wrapOutgoingLin?!0:_ref2$wrapOutgoingLin;if(!endpoint){return Promise.reject(new Error("endpoint URL cannot be falsy: \"".concat(endpoint,"\"")))}if(errorHandler){errorHandler.clear()}var apiPath="".concat(config["a" /* default */].get("apiPath")).concat(version),parsedUrl=url_default.a.parse(endpoint,!0),adjustedEndpoint=parsedUrl.pathname||"";if(!parsedUrl.host){// If it's a relative URL, add the API prefix.
var slash=!adjustedEndpoint.startsWith("/")?"/":"";adjustedEndpoint="".concat(apiPath).concat(slash).concat(adjustedEndpoint)}else if(!adjustedEndpoint.startsWith(apiPath)){// If it's an absolute URL, it must have the correct prefix.
return Promise.reject(new Error("Absolute URL \"".concat(endpoint,"\" has an unexpected prefix.")))}// Preserve the original query string if there is one.
// This might happen when we parse `next` URLs returned by the API.
var queryString=makeQueryString(api_objectSpread({},parsedUrl.query,{},params,{lang:apiState.lang,wrap_outgoing_links:wrapOutgoingLinks||null})),options={headers:{},// Always make sure the method is upper case so that the browser won't
// complain about CORS problems.
method:method.toUpperCase(),credentials:void 0,body:void 0};if(credentials){options.credentials="include"}if(body){if(body instanceof browser_default.a){options.body=body;// Let the browser sets this header, including the boundary value.
// $FLOW_IGNORE
delete options.headers["Content-type"]}else{options.body=JSON.stringify(body);options.headers["Content-type"]="application/json"}}if(auth){if(apiState.token){options.headers.authorization="Bearer ".concat(apiState.token)}}adjustedEndpoint=adjustedEndpoint.endsWith("/")?adjustedEndpoint:"".concat(adjustedEndpoint,"/");var apiURL="".concat(config["a" /* default */].get("apiHost")).concat(adjustedEndpoint).concat(queryString);if(_config.get("server")){_log.debug("Encoding `apiURL` in UTF8 before fetch().");// Workaround for https://github.com/bitinn/node-fetch/issues/245
apiURL=utf8_default.a.encode(apiURL)}return fetch(apiURL,options).then(function(response){// There isn't always a 'Content-Type' in headers, e.g., with a DELETE
// method or 5xx responses.
var contentType=response.headers.get("Content-Type");contentType=contentType&&contentType.toLowerCase();// This is a bit paranoid, but we ensure the API returns a JSON response
// (see https://github.com/mozilla/addons-frontend/issues/1701).
// If not we'll store the text response in JSON and log an error.
// If the JSON parsing fails; we log the error and return an "unknown
// error".
if("application/json"===contentType){return response.json().then(function(jsonResponse){return{response:response,jsonResponse:jsonResponse}})}return response.text().then(function(text){// eslint-disable-next-line amo/only-log-strings
_log.warn(Object(es["a" /* oneLine */])(_templateObject(),contentType||"[unknown]"),{body:text?text.substring(0,100):"[empty]",status:response.status||"[unknown]",url:response.url||"[unknown]"});// jsonResponse should be an empty object in this case. Otherwise, its
// keys could be treated as generic API errors.
return{jsonResponse:{},response:response}})}).then(function(_ref3){var response=_ref3.response,jsonResponse=_ref3.jsonResponse;if(response.ok){return jsonResponse}// If response is not ok we'll throw an error.
var apiError=createApiError({apiURL:apiURL,response:response,jsonResponse:jsonResponse});if(errorHandler){errorHandler.handle(apiError)}throw apiError},function(fetchError){// This actually handles the case when the call to fetch() is
// rejected, say, for a network connection error, etc.
if(errorHandler){errorHandler.handle(fetchError)}throw fetchError})}function fetchAddon(_ref4){var api=_ref4.api,slug=_ref4.slug,clientApp=api.clientApp,userAgentInfo=api.userAgentInfo,appVersion=userAgentInfo.browser.version;if(!appVersion){logger["a" /* default */].warn("Failed to parse appversion for client app ".concat(clientApp||"[empty]"))}return callApi({endpoint:Object(utils["a" /* addQueryParams */])("addons/addon/".concat(slug),{app:clientApp,appversion:appVersion}),auth:!0,apiState:api})}function startLoginUrl(_ref5){var _ref5$_config=_ref5._config,_config=void 0===_ref5$_config?config["a" /* default */]:_ref5$_config,location=_ref5.location,apiVersion=_config.get("apiVersion"),configName=_config.get("fxaConfig"),params={config:void 0,to:url_default.a.format(api_objectSpread({},location))};if(configName){params.config=configName}var query=makeQueryString(params);return"".concat(API_BASE).concat(apiVersion,"/accounts/login/start/").concat(query)}function logOutFromServer(_ref6){var api=_ref6.api;return callApi({auth:!0,credentials:!0,endpoint:"accounts/session",method:"DELETE",apiState:api})}function autocomplete(_ref7){var api=_ref7.api,filters=_ref7.filters,filtersWithAppVersion=Object(searchUtils["a" /* addVersionCompatibilityToFilters */])({filters:filters,userAgentInfo:api.userAgentInfo});return callApi({endpoint:"addons/autocomplete",params:api_objectSpread({app:api.clientApp},Object(searchUtils["b" /* convertFiltersToQueryParams */])(filtersWithAppVersion)),apiState:api})}var allPages=/*#__PURE__*/function(){var _ref8=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee(getNextResponse){var _ref9,_ref9$pageLimit,pageLimit,results,nextURL,count,pageSize,page,response,_args=arguments;return regeneratorRuntime.wrap(function(_context){while(1){switch(_context.prev=_context.next){case 0:_ref9=1<_args.length&&_args[1]!==void 0?_args[1]:{},_ref9$pageLimit=_ref9.pageLimit,pageLimit=void 0===_ref9$pageLimit?100:_ref9$pageLimit;results=[];count=0;pageSize=0;page=1;case 5:if(!(page<=pageLimit)){_context.next=21;break}_context.next=8;return getNextResponse(nextURL);case 8:response=_context.sent;if(!count){// Every response page returns a count for all results.
count=response.count}if(!pageSize){pageSize=response.page_size}results=results.concat(response.results);if(!response.next){_context.next=17;break}nextURL=response.next;logger["a" /* default */].debug("Fetching next page \"".concat(nextURL,"\""));_context.next=18;break;case 17:return _context.abrupt("return",{count:count,page_size:pageSize,results:results});case 18:page++;_context.next=5;break;case 21:throw new Error("Fetched too many pages (the limit is ".concat(pageLimit,")"));case 22:case"end":return _context.stop();}}},_callee)}));return function(){return _ref8.apply(this,arguments)}}();var validateLocalizedString=function(localizedString){if("object"!==_typeof(localizedString)){throw new Error("Expected an object type, got \"".concat(_typeof(localizedString),"\""))}Object.keys(localizedString).forEach(function(localeKey){if("undefined"==typeof languages[localeKey]){throw new Error("Unknown locale: \"".concat(localeKey,"\""))}})};

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ClientConfig */
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42);
/* harmony import */ var core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(25);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(10);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var common_tags__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(18);
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1,source;i<arguments.length;i++){source=null!=arguments[i]?arguments[i]:{};if(i%2){ownKeys(Object(source),!0).forEach(function(key){_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}return obj}function _templateObject(){var data=_taggedTemplateLiteral(["Key \"","\" was not found in clientConfig. Check the\n          key has been added to clientConfigKeys"]);_templateObject=function(){return data};return data}function _taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0)}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}/*
 * This module is a stand-in for the config module
 * when imported on the client.
 * When webpack builds the client-side code it exposes
 * the clientConfig config via the definePlugin as CLIENT_CONFIG.
 */var ClientConfig=function ClientConfig(objData){var _this=this;_classCallCheck(this,ClientConfig);// This Object.assign keeps the config data private.
Object.assign(this,{// eslint-disable-next-line no-prototype-builtins
has:function has(key){return objData.hasOwnProperty(key)},get:function get(key){if(_this.has(key)){return objData[key]}throw new Error(Object(common_tags__WEBPACK_IMPORTED_MODULE_10__[/* oneLine */ "a"])(_templateObject(),key))}})};/* harmony default export */ __webpack_exports__["a"] = (new ClientConfig(_objectSpread({},{"allowErrorSimulation":false,"amoCDN":"https://addons.cdn.mozilla.net","apiHost":"https://addons.mozilla.org","apiPath":"/api/","apiVersion":"v4","appName":null,"authTokenValidFor":null,"baseURL":"https://addons.mozilla.org","cookieMaxAge":2592000,"cookieName":"frontend_auth_token","cookieSecure":true,"defaultLang":"en-US","dismissedExperienceSurveyCookieName":"dismissedExperienceSurvey","enableDevTools":false,"enableFeatureDiscoTaar":false,"enableFeatureExperienceSurvey":false,"enableRequestID":true,"enableStrictMode":false,"experiments":{},"extensionWorkshopUrl":"https://extensionworkshop.com","fxaConfig":null,"hrefLangsMap":{"x-default":"en-US","en":"en-US","pt":"pt-PT"},"isDeployed":true,"isDevelopment":false,"langMap":{"bn-BD":"bn","en":"en-US","ga":"ga-IE","pt":"pt-PT","sv":"sv-SE","zh":"zh-CN"},"langs":["af","ar","ast","az","bg","bn","bs","ca","cak","cs","da","de","dsb","el","en-CA","en-GB","en-US","es","et","eu","fa","fi","fr","fy-NL","ga-IE","he","hr","hsb","hu","ia","id","it","ja","ka","kab","ko","lt","lv","mk","mn","ms","mt","nb-NO","nl","nn-NO","pa-IN","pl","pt-BR","pt-PT","ro","ru","sk","sl","sq","sv-SE","te","th","tr","uk","ur","vi","zh-CN","zh-TW"],"loggingLevel":"info","mozillaUserId":4757633,"publicSentryDsn":null,"restrictSearchResultsToAppVersion":true,"rtlLangs":["ar","fa","he","ur"],"trackingEnabled":false,"trackingId":null,"trackingSendInitPageView":true,"unsupportedHrefLangs":["ast","cak","dsb","hsb","kab"],"validClientAppUrlExceptions":[],"validClientApplications":["android","firefox"],"validLocaleUrlExceptions":[],"validTrailingSlashUrlExceptions":[]},{client:!0,server:!1})));

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export REVIEW_FLAG_REASON_SPAM */
/* unused harmony export REVIEW_FLAG_REASON_LANGUAGE */
/* unused harmony export REVIEW_FLAG_REASON_BUG_SUPPORT */
/* unused harmony export REVIEW_FLAG_REASON_OTHER */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LANDING_PAGE_EXTENSION_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LANDING_PAGE_THEME_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DOWNLOAD_FIREFOX_BASE_URL; });
var REVIEW_FLAG_REASON_SPAM="review_flag_reason_spam";var REVIEW_FLAG_REASON_LANGUAGE="review_flag_reason_language";var REVIEW_FLAG_REASON_BUG_SUPPORT="review_flag_reason_bug_support";var REVIEW_FLAG_REASON_OTHER="review_flag_reason_other";// Number of add-ons in the recommended, trending, and highest rated landing page
// sections.
var LANDING_PAGE_EXTENSION_COUNT=4;var LANDING_PAGE_THEME_COUNT=3;var DOWNLOAD_FIREFOX_BASE_URL="https://www.mozilla.org/firefox/new/";

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export operatingSystems */
/* unused harmony export paramsToFilter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addVersionCompatibilityToFilters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return convertFiltersToQueryParams; });
/* unused harmony export convertQueryParamsToFilters */
/* unused harmony export convertOSToFilterValue */
/* unused harmony export fixFiltersForAndroidThemes */
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(31);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(42);
/* harmony import */ var core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(25);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(10);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var common_tags__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(18);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(21);
/* harmony import */ var core_logger__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(17);
function _templateObject2(){var data=_taggedTemplateLiteral(["restrictSearchResultsToAppVersion config set;\n          not setting \"compatibleWithVersion\" to current application version,\n          even though it's above 57."]);_templateObject2=function(){return data};return data}function _templateObject(){var data=_taggedTemplateLiteral(["Setting \"compatibleWithVersion\" to current application\n        version (Firefox ",") so only relevant extensions are\n        displayed."]);_templateObject=function(){return data};return data}function _taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0)}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1,source;i<arguments.length;i++){source=null!=arguments[i]?arguments[i]:{};if(i%2){ownKeys(Object(source),!0).forEach(function(key){_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}return obj}var operatingSystems={Linux:"linux","Mac OS":"mac",Windows:"windows"};var paramsToFilter={app:"clientApp",appversion:"compatibleWithVersion",author:"author",category:"category",exclude_addons:"exclude_addons",guid:"guid",page:"page",// TODO: Change our filter to `pageSize`, for consistency.
page_size:"page_size",platform:"operatingSystem",q:"query",recommended:"recommended",sort:"sort",tag:"tag",type:"addonType"};function addVersionCompatibilityToFilters(){var _ref=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},_ref$config=_ref.config,config=void 0===_ref$config?config__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"]:_ref$config,filters=_ref.filters,userAgentInfo=_ref.userAgentInfo;if(!filters){throw new Error("filters are required")}if(!userAgentInfo){throw new Error("userAgentInfo is required")}var newFilters=_objectSpread({},filters);// If the browser is Firefox or Firefox for Android and we're searching for
// extensions, send the appversion param to get extensions marked as
// compatible with this version.
if("Firefox"===userAgentInfo.browser.name&&"iOS"!==userAgentInfo.os.name){var browserVersion=parseInt(userAgentInfo.browser.version,10);// We are only setting the `compatibleWithVersion` filter for browsers
// with a version of at least 57, at least for now. Find the explanation
// here: https://github.com/mozilla/addons-frontend/pull/2969#issuecomment-323551742
if(57<=browserVersion){if(config.get("restrictSearchResultsToAppVersion")){core_logger__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].debug(Object(common_tags__WEBPACK_IMPORTED_MODULE_12__[/* oneLine */ "a"])(_templateObject(),browserVersion));newFilters.compatibleWithVersion=userAgentInfo.browser.version}else{core_logger__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].warn(Object(common_tags__WEBPACK_IMPORTED_MODULE_12__[/* oneLine */ "a"])(_templateObject2()))}}}return newFilters}// We use our own keys internally for things like the user's clientApp
// and addonType, but the API and our query params use different keys.
// We also use `q` for `query` in searches (for historic reasons).
// These methods convert the query params found in location.query to
// our filter keys and back again.
function convertFiltersToQueryParams(filters){return Object.keys(paramsToFilter).reduce(function(object,key){if(filters&&"undefined"!=typeof filters[paramsToFilter[key]]&&""!==filters[paramsToFilter[key]]){return _objectSpread({},object,_defineProperty({},key,filters[paramsToFilter[key]]))}return object},{})}function convertQueryParamsToFilters(params){return Object.keys(paramsToFilter).reduce(function(object,key){var paramValue=params[key];// The param value could be an array if the param appeared on the URL
// multiple times. In that case just use the first instance.
if(Array.isArray(params[key])){core_logger__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].info("".concat(key," param was provided multiple times: ").concat(paramValue));paramValue=params[key][0]}if("undefined"!=typeof paramValue&&""!==paramValue){return _objectSpread({},object,_defineProperty({},paramsToFilter[key],paramValue))}return object},{})}function convertOSToFilterValue(name){if(name in operatingSystems){return operatingSystems[name]}core_logger__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].info("operatingSystem \"".concat(name,"\" not recognized so falling back to no OS."))}var fixFiltersForAndroidThemes=function(_ref2){var api=_ref2.api,filters=_ref2.filters,newFilters=_objectSpread({},filters);if(!newFilters.clientApp&&api.clientApp){core_logger__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].debug("No clientApp found in filters; using api.clientApp (".concat(api.clientApp,")"));newFilters.clientApp=api.clientApp}return newFilters};

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export generateId */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createUIStateMapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return mergeUIStateProps; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(25);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(50);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(53);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(11);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(14);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(10);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(15);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(70);
/* harmony import */ var core_utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(35);
/* harmony import */ var core_reducers_uiState__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(171);
function _typeof(obj){"@babel/helpers - typeof";if("function"==typeof Symbol&&"symbol"==typeof Symbol.iterator){_typeof=function(obj){return typeof obj}}else{_typeof=function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0,descriptor;i<props.length;i++){descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1;descriptor.configurable=!0;if("value"in descriptor)descriptor.writable=!0;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call)){return call}return _assertThisInitialized(self)}function _assertThisInitialized(self){if(void 0===self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)};return _getPrototypeOf(o)}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}});if(superClass)_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function(o,p){o.__proto__=p;return o};return _setPrototypeOf(o,p)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1,source;i<arguments.length;i++){source=null!=arguments[i]?arguments[i]:{};if(i%2){ownKeys(Object(source),!0).forEach(function(key){_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}return obj}var generateId=function(_ref){var fileName=_ref.fileName,id=_ref.id;invariant__WEBPACK_IMPORTED_MODULE_17___default()(fileName,"fileName is required");invariant__WEBPACK_IMPORTED_MODULE_17___default()("string"==typeof id,"id must be a string");return"".concat(Object(core_utils__WEBPACK_IMPORTED_MODULE_19__[/* normalizeFileNameId */ "h"])(fileName),"-").concat(id)};var createUIStateMapper=function(_ref2){var initialState=_ref2.initialState,extractId=_ref2.extractId,fileName=_ref2.fileName,uiStateID=_ref2.uiStateID;invariant__WEBPACK_IMPORTED_MODULE_17___default()(initialState,"initialState is required");return function mapStateToProps(state,props){var computedUIStateID;if(uiStateID){computedUIStateID=uiStateID}else{invariant__WEBPACK_IMPORTED_MODULE_17___default()(extractId,"extractId is required when uiStateID is undefined");invariant__WEBPACK_IMPORTED_MODULE_17___default()(fileName,"fileName is required when uiStateID is undefined");computedUIStateID=props.uiStateID||generateId({fileName:fileName,id:extractId(props)})}var uiState=Object(core_reducers_uiState__WEBPACK_IMPORTED_MODULE_20__[/* selectUIState */ "b"])({uiState:state.uiState,uiStateID:computedUIStateID})||initialState;return{uiState:uiState,uiStateID:computedUIStateID}}};var mergeUIStateProps=function(stateProps,dispatchProps,ownProps){var dispatch=dispatchProps.dispatch;return _objectSpread({},ownProps,{},stateProps,{},dispatchProps,{setUIState:function setUIState(change){dispatch(Object(core_reducers_uiState__WEBPACK_IMPORTED_MODULE_20__[/* setUIState */ "c"])({id:stateProps.uiStateID,change:change}))}})};/*
 * This HOC can be used to somewhat mimic the behavior of this.setState()
 * with Redux reducers/actions.
 *
 * It renders your component with a setUIState() prop that can be used
 * just like this.setState() to dispatch actions that change the internal
 * state of the component.
 *
 * It provides a uiState prop which can be used to read internal state
 * like you would read this.state.
 *
 * One key difference from this.setState() is that your component will
 * not reset its state when mounted. Instead, it uses
 * the ID returned from extractID(props) to get its state from the
 * Redux store.
 *
 * You can make the component always reset its state by configuring
 * withUIState({ ..., resetOnUnmount: true }).
 *
 * This will behave more like this.setState() but you will lose some
 * features of Redux persistence such as predictable hot reloading and
 * possibly other state replay features.
 */var withUIState=function(_ref3){var fileName=_ref3.fileName,extractId=_ref3.extractId,initialState=_ref3.initialState,_ref3$resetOnUnmount=_ref3.resetOnUnmount,resetOnUnmount=void 0===_ref3$resetOnUnmount?!1:_ref3$resetOnUnmount;invariant__WEBPACK_IMPORTED_MODULE_17___default()(fileName,"fileName is required");invariant__WEBPACK_IMPORTED_MODULE_17___default()(extractId,"extractId is required");invariant__WEBPACK_IMPORTED_MODULE_17___default()(initialState,"initialState is required");var mapStateToProps=createUIStateMapper({extractId:extractId,fileName:fileName,initialState:initialState});return function(WrappedComponent){var WithUIState=/*#__PURE__*/function(_React$Component){_inherits(WithUIState,_React$Component);function WithUIState(){_classCallCheck(this,WithUIState);return _possibleConstructorReturn(this,_getPrototypeOf(WithUIState).apply(this,arguments))}_createClass(WithUIState,[{key:"componentWillUnmount",value:function componentWillUnmount(){if(resetOnUnmount){this.props.setUIState(initialState)}}},{key:"render",value:function render(){return react__WEBPACK_IMPORTED_MODULE_16__["createElement"](WrappedComponent,this.props)}}]);return WithUIState}(react__WEBPACK_IMPORTED_MODULE_16__["Component"]);WithUIState.displayName="WithUIState";// eslint-disable-next-line react/static-property-placement
WithUIState.displayName="WithUIState(".concat(Object(core_utils__WEBPACK_IMPORTED_MODULE_19__[/* getDisplayName */ "e"])(WrappedComponent),")");return Object(react_redux__WEBPACK_IMPORTED_MODULE_18__["connect"])(mapStateToProps,void 0,mergeUIStateProps)(WithUIState)}};/* harmony default export */ __webpack_exports__["b"] = (withUIState);

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.freeze.js
var es_object_freeze = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 15 modules
var es = __webpack_require__(70);

// EXTERNAL MODULE: ./node_modules/common-tags/es/index.js + 48 modules
var common_tags_es = __webpack_require__(18);

// EXTERNAL MODULE: ./src/core/constants.js
var constants = __webpack_require__(2);

// CONCATENATED MODULE: ./src/core/actions/errors.js
function setError(){var _ref=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},error=_ref.error,id=_ref.id;if(!id){throw new Error("id cannot be empty")}if(!error){throw new Error("error cannot be empty")}return{type:constants["Bb" /* SET_ERROR */],payload:{error:error,id:id}}}function setErrorMessage(){var _ref2=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},message=_ref2.message,id=_ref2.id;if(!id){throw new Error("id cannot be empty")}if(!message){throw new Error("message cannot be empty")}return{type:constants["Cb" /* SET_ERROR_MESSAGE */],payload:{id:id,message:message}}}function clearError(id){if(!id){throw new Error("id cannot be empty")}return{type:constants["o" /* CLEAR_ERROR */],payload:{id:id}}}
// EXTERNAL MODULE: ./src/core/logger.js
var logger = __webpack_require__(17);

// EXTERNAL MODULE: ./src/core/utils/index.js + 2 modules
var utils = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-prototype-of.js
var es_object_get_prototype_of = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.set-prototype-of.js
var es_object_set_prototype_of = __webpack_require__(53);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(51);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(3);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./src/core/i18n/translate.js
var translate = __webpack_require__(80);

// EXTERNAL MODULE: ./src/ui/components/Notice/index.js
var Notice = __webpack_require__(123);

// EXTERNAL MODULE: ./src/ui/components/ErrorList/styles.scss
var styles = __webpack_require__(1926);

// CONCATENATED MODULE: ./src/ui/components/ErrorList/index.js
function _typeof(obj){"@babel/helpers - typeof";if("function"==typeof Symbol&&"symbol"==typeof Symbol.iterator){_typeof=function(obj){return typeof obj}}else{_typeof=function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0,descriptor;i<props.length;i++){descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1;descriptor.configurable=!0;if("value"in descriptor)descriptor.writable=!0;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call)){return call}return _assertThisInitialized(self)}function _assertThisInitialized(self){if(void 0===self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)};return _getPrototypeOf(o)}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}});if(superClass)_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function(o,p){o.__proto__=p;return o};return _setPrototypeOf(o,p)}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}return obj}/* global window */var ErrorList_ErrorListBase=/*#__PURE__*/function(_React$Component){_inherits(ErrorListBase,_React$Component);function ErrorListBase(){_classCallCheck(this,ErrorListBase);return _possibleConstructorReturn(this,_getPrototypeOf(ErrorListBase).apply(this,arguments))}_createClass(ErrorListBase,[{key:"render",value:function render(){var _this$props=this.props,_window=_this$props._window,code=_this$props.code,className=_this$props.className,i18n=_this$props.i18n,messages=_this$props.messages,items=[];messages.forEach(function(messageItem){var message=messageItem;if("object"===_typeof(message)){// This handles an unlikely scenario where an API error response
// contains nested objects within objects. If this happens in real
// life let's fix it or make the display prettier.
// Until then, let's just prevent it from triggering an exception.
message=JSON.stringify(message)}if(code===constants["n" /* API_ERROR_SIGNATURE_EXPIRED */]){// This API error describes exactly what happened but that isn't
// very helpful for AMO users. Let's help them figure it out.
logger["a" /* default */].debug("Detected ".concat(code,", replacing API message: ").concat(message));message=i18n.gettext("Your session has expired")}items.push(message)});if(!items.length){logger["a" /* default */].debug("No messages were passed to ErrorList, code: ".concat(code));items.push(i18n.gettext("An unexpected error occurred"))}var action,actionText;if(code===constants["n" /* API_ERROR_SIGNATURE_EXPIRED */]){// Let the user recover from signature expired errors.
action=function(){return _window.location.reload()};actionText=i18n.gettext("Reload To Continue");if(1<items.length){// There will never be more than one message but if there is, log a message
// to help someone debug the problem.
logger["a" /* default */].warn("The API unexpectedly returned multiple signature expired errors")}}return react["createElement"]("ul",{className:classnames_default()("ErrorList",className)},items.map(function(item,index){return react["createElement"]("li",{className:"ErrorList-item"// We don't have message IDs but it's safe to rely on
// array indices since they are returned from the API
// in a predictable order.
// eslint-disable-next-line react/no-array-index-key
,key:"erroritem-".concat(index)},react["createElement"](Notice["a" /* default */],{type:"error",actionOnClick:action,actionText:actionText},item))}))}}]);return ErrorListBase}(react["Component"]);ErrorList_ErrorListBase.displayName="ErrorListBase";_defineProperty(ErrorList_ErrorListBase,"propTypes",{_window:prop_types_default.a.object,code:prop_types_default.a.string,className:prop_types_default.a.string,i18n:prop_types_default.a.object.isRequired,messages:prop_types_default.a.array.isRequired});_defineProperty(ErrorList_ErrorListBase,"defaultProps",{_window:"undefined"!=typeof window?window:{}});ErrorList_ErrorListBase.__docgenInfo={description:"",methods:[],displayName:"ErrorListBase",props:{_window:{defaultValue:{value:"typeof window !== 'undefined' ? window : {}",computed:!1},type:{name:"object"},required:!1,description:""},code:{type:{name:"string"},required:!1,description:""},className:{type:{name:"string"},required:!1,description:""},i18n:{type:{name:"object"},required:!0,description:""},messages:{type:{name:"array"},required:!0,description:""}}};/* harmony default export */ var ErrorList = (Object(redux["d" /* compose */])(Object(translate["a" /* default */])())(ErrorList_ErrorListBase));if("undefined"!=typeof STORYBOOK_REACT_CLASSES){STORYBOOK_REACT_CLASSES["src/ui/components/ErrorList/index.js"]={name:"ErrorListBase",docgenInfo:ErrorList_ErrorListBase.__docgenInfo,path:"src/ui/components/ErrorList/index.js"}}
// CONCATENATED MODULE: ./src/core/errorHandler.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return errorHandler_ErrorHandler; });
/* unused harmony export withErrorHandler */
/* unused harmony export withFixedErrorHandler */
/* unused harmony export withRenderedErrorHandler */
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1,source;i<arguments.length;i++){source=null!=arguments[i]?arguments[i]:{};if(i%2){ownKeys(Object(source),!0).forEach(function(key){errorHandler_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}function errorHandler_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}return obj}function _templateObject(){var data=_taggedTemplateLiteral(["Generated error handler ID with extractId():\n            ",""]);_templateObject=function(){return data};return data}function _taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0)}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function errorHandler_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function errorHandler_defineProperties(target,props){for(var i=0,descriptor;i<props.length;i++){descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1;descriptor.configurable=!0;if("value"in descriptor)descriptor.writable=!0;Object.defineProperty(target,descriptor.key,descriptor)}}function errorHandler_createClass(Constructor,protoProps,staticProps){if(protoProps)errorHandler_defineProperties(Constructor.prototype,protoProps);if(staticProps)errorHandler_defineProperties(Constructor,staticProps);return Constructor}function generateHandlerId(){var _ref=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},_ref$name=_ref.name,name=void 0===_ref$name?"":_ref$name;return"".concat(name,"-").concat(Math.random().toString(36).substr(2,9))}/*
 * Error handling utility for components.
 *
 * This is a class that components can work with
 * to easily dispatch error actions or retrieve error
 * information from the Redux state.
 */var errorHandler_ErrorHandler=/*#__PURE__*/function(){function ErrorHandler(){var _ref2=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},id=_ref2.id,_ref2$dispatch=_ref2.dispatch,dispatch=void 0===_ref2$dispatch?null:_ref2$dispatch,_ref2$capturedError=_ref2.capturedError,capturedError=void 0===_ref2$capturedError?null:_ref2$capturedError;errorHandler_classCallCheck(this,ErrorHandler);this.id=id;this.dispatch=dispatch;this.capturedError=capturedError}errorHandler_createClass(ErrorHandler,[{key:"captureError",value:function captureError(error){this.capturedError=error}},{key:"clear",value:function clear(){var action=this.createClearingAction();this.dispatch(action)}},{key:"createClearingAction",value:function createClearingAction(){return clearError(this.id)}},{key:"hasError",value:function hasError(){return!!this.capturedError}},{key:"renderError",value:function renderError(){var _this$capturedError=this.capturedError,code=_this$capturedError.code,messages=_this$capturedError.messages;return react["createElement"](ErrorList,{messages:messages,code:code})}},{key:"renderErrorIfPresent",value:function renderErrorIfPresent(){return this.hasError()?this.renderError():null}},{key:"setDispatch",value:function setDispatch(dispatch){this.dispatch=dispatch}},{key:"createErrorAction",value:function createErrorAction(error){return setError({error:error,id:this.id})}},{key:"addMessage",value:function addMessage(message){this.dispatchAction(setErrorMessage({id:this.id,message:message}))}},{key:"handle",value:function handle(error){var action=this.createErrorAction(error);this.dispatchAction(action)}},{key:"dispatchAction",value:function dispatchAction(action){if(!this.dispatch){throw new Error("A dispatch function has not been configured")}this.dispatch(action)}}]);return ErrorHandler}();/*
 * This is a decorator that gives a component the ability to handle errors.
 *
 * The decorator will assign an ErrorHandler instance to the errorHandler
 * property.
 *
 * For convenience, you can use `withRenderedErrorHandler()` which renders the
 * error automatically at the beginning of the component's output.
 *
 * Example:
 *
 * class SomeComponent extends React.Component {
 *   static propTypes = {
 *     errorHandler: PropTypes.object.isRequired,
 *   }
 *   render() {
 *     const { errorHandler } = this.props;
 *     return (
 *       <div>
 *         {errorHandler.renderErrorIfPresent()}
 *         <div>some content</div>
 *       </div>
 *     );
 *   }
 * }
 *
 * export default compose(
 *   withErrorHandler({ name: 'SomeComponent' }),
 * )(SomeComponent);
 */function withErrorHandler(_ref3){var name=_ref3.name,id=_ref3.id,_ref3$extractId=_ref3.extractId,extractId=void 0===_ref3$extractId?null:_ref3$extractId;if(id&&extractId){throw new Error("You can define either `id` or `extractId` but not both.")}if(extractId&&"function"!=typeof extractId){throw new Error("`extractId` must be a function taking `ownProps` as unique argument.")}return function(WrappedComponent){return Object(redux["d" /* compose */])(Object(es["connect"])(function mapStateToProps(){var defaultErrorId;if(!extractId){// Each component instance gets its own error handler ID.
defaultErrorId=id;if(!defaultErrorId){defaultErrorId=generateHandlerId({name:name});logger["a" /* default */].debug("Generated error handler ID: ".concat(defaultErrorId))}}// Now that the component has been instantiated, return its state mapper
// function.
return function(state,ownProps){if(extractId){defaultErrorId="".concat(name,"-").concat(extractId(ownProps));logger["a" /* default */].debug(Object(common_tags_es["a" /* oneLine */])(_templateObject(),defaultErrorId))}var errorId=ownProps.errorHandler?ownProps.errorHandler.id:defaultErrorId;return{error:state.errors[errorId],errorId:errorId}}},void 0,function mergeProps(stateProps,dispatchProps,ownProps){var errorHandler=ownProps.errorHandler||new errorHandler_ErrorHandler({id:stateProps.errorId});errorHandler.setDispatch(dispatchProps.dispatch);if(stateProps.error){errorHandler.captureError(stateProps.error)}return _objectSpread({},ownProps,{errorHandler:errorHandler})}))(WrappedComponent)}}/*
 * This decorator works like the `withErrorHandler()` decorator but aims at
 * synchronizing both the server and client sides by using a fixed error
 * handler ID.
 *
 * The `fileName` parameter must be set to `__filename` in the component code.
 *
 * The `extractId` function is used to create a unique error handler per
 * rendered component. This function takes the component's props and must
 * return a unique string based on these props (e.g., based on the `slug`,
 * `uniqueId`, `page`, etc.).
 */var withFixedErrorHandler=function(_ref4){var fileName=_ref4.fileName,extractId=_ref4.extractId;if(!fileName){throw new Error("`fileName` parameter is required.")}if("function"!=typeof extractId){throw new Error("`extractId` is required and must be a function.")}return withErrorHandler({name:Object(utils["h" /* normalizeFileNameId */])(fileName),extractId:extractId})};/*
 * This is a decorator that automatically renders errors.
 *
 * It will render all errors at the top of the wrapped component's
 * content and it will pass an errorHandler property for the component
 * to use.
 *
 * Example:
 *
 * class SomeComponent extends React.Component {
 *   static propTypes = {
 *     // The decorator will assign an ErrorHandler instance to this.
 *     errorHandler: PropTypes.object.isRequired,
 *   }
 *   render() {
 *     // In the case of an error, the list of errors will be displayed
 *     // above this div.
 *     return <div>some content</div>;
 *   }
 * }
 *
 * export default compose(
 *   withRenderedErrorHandler({ name: 'SomeComponent' }),
 * )(SomeComponent);
 */function withRenderedErrorHandler(){var _ref5=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},name=_ref5.name,id=_ref5.id;return function(WrappedComponent){return Object(redux["d" /* compose */])(withErrorHandler({name:name,id:id}))(function(props){var errorHandler=props.errorHandler;if(errorHandler.hasError()){return react["createElement"]("div",null,errorHandler.renderError(),react["createElement"](WrappedComponent,props))}return react["createElement"](WrappedComponent,props)})}}

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* unused harmony export EXTENSIONS_BY_AUTHORS_PAGE_SIZE */
/* unused harmony export THEMES_BY_AUTHORS_PAGE_SIZE */
/* unused harmony export FETCH_ADDONS_BY_AUTHORS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOAD_ADDONS_BY_AUTHORS; });
/* unused harmony export fetchAddonsByAuthors */
/* unused harmony export loadAddonsByAuthors */
/* unused harmony export joinAuthorIdsAndAddonType */
/* unused harmony export getLoadingForAuthorIds */
/* unused harmony export getCountForAuthorIds */
/* unused harmony export getAddonsForSlug */
/* unused harmony export getAddonsForAuthorIds */
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(92);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(28);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(63);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(30);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(232);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(24);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(25);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(11);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(101);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(14);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(10);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(15);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var deepcopy__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(252);
/* harmony import */ var deepcopy__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(deepcopy__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(1);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_reducers_addons__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(64);
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1,source;i<arguments.length;i++){source=null!=arguments[i]?arguments[i]:{};if(i%2){ownKeys(Object(source),!0).forEach(function(key){_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}return obj}var initialState={byAddonId:{},byAddonSlug:{},byAuthorId:{},countFor:{},loadingFor:{}};var EXTENSIONS_BY_AUTHORS_PAGE_SIZE=10;var THEMES_BY_AUTHORS_PAGE_SIZE=12;// For further information about this notation, see:
// https://github.com/mozilla/addons-frontend/pull/3027#discussion_r137661289
var FETCH_ADDONS_BY_AUTHORS="FETCH_ADDONS_BY_AUTHORS";var LOAD_ADDONS_BY_AUTHORS="LOAD_ADDONS_BY_AUTHORS";var fetchAddonsByAuthors=function(_ref){var addonType=_ref.addonType,authorIds=_ref.authorIds,errorHandlerId=_ref.errorHandlerId,forAddonSlug=_ref.forAddonSlug,page=_ref.page,pageSize=_ref.pageSize,sort=_ref.sort;invariant__WEBPACK_IMPORTED_MODULE_21___default()(errorHandlerId,"An errorHandlerId is required");invariant__WEBPACK_IMPORTED_MODULE_21___default()(authorIds,"authorIds are required.");invariant__WEBPACK_IMPORTED_MODULE_21___default()(Array.isArray(authorIds),"The authorIds parameter must be an array.");invariant__WEBPACK_IMPORTED_MODULE_21___default()(pageSize,"pageSize is required.");return{type:FETCH_ADDONS_BY_AUTHORS,payload:{addonType:addonType,authorIds:authorIds,errorHandlerId:errorHandlerId,forAddonSlug:forAddonSlug,page:page,pageSize:pageSize,sort:sort}}};var loadAddonsByAuthors=function(_ref2){var addonType=_ref2.addonType,addons=_ref2.addons,authorIds=_ref2.authorIds,count=_ref2.count,forAddonSlug=_ref2.forAddonSlug,pageSize=_ref2.pageSize;invariant__WEBPACK_IMPORTED_MODULE_21___default()(addons,"A set of add-ons is required.");invariant__WEBPACK_IMPORTED_MODULE_21___default()(authorIds,"A list of authorIds is required.");invariant__WEBPACK_IMPORTED_MODULE_21___default()("number"==typeof count,"count is required.");invariant__WEBPACK_IMPORTED_MODULE_21___default()(pageSize,"pageSize is required.");return{type:LOAD_ADDONS_BY_AUTHORS,payload:{addonType:addonType,addons:addons,authorIds:authorIds,count:count,forAddonSlug:forAddonSlug,pageSize:pageSize}}};var joinAuthorIdsAndAddonType=function(authorIds,addonType){return authorIds.sort().join("-")+(addonType?"-".concat(addonType):"")};var getLoadingForAuthorIds=function(addonsByAuthorsState,authorIds,addonType){var key=joinAuthorIdsAndAddonType(authorIds,addonType);if(addonsByAuthorsState.loadingFor[key]===void 0){return null}return addonsByAuthorsState.loadingFor[key]};var getCountForAuthorIds=function(addonsByAuthorsState,authorIds,addonType){return addonsByAuthorsState.countFor[joinAuthorIdsAndAddonType(authorIds,addonType)]||null};var getAddonsForSlug=function(addonsByAuthorsState,slug){var ids=addonsByAuthorsState.byAddonSlug[slug];return ids?ids.map(function(id){return addonsByAuthorsState.byAddonId[id]}):null};var getAddonsForAuthorIds=function(addonsByAuthorsState,authorIds,addonType,excludeSlug){invariant__WEBPACK_IMPORTED_MODULE_21___default()(authorIds&&authorIds.length,"At least one authorId is required.");var ids=authorIds.map(function(authorId){return addonsByAuthorsState.byAuthorId[authorId]}).reduce(function(array,addonIds){if(addonIds){var _iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0;try{for(var _iterator=addonIds[Symbol.iterator](),_step,addonId;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=!0){addonId=_step.value;if(!array.includes(addonId)){array.push(addonId)}}}catch(err){_didIteratorError=!0;_iteratorError=err}finally{try{if(!_iteratorNormalCompletion&&null!=_iterator.return){_iterator.return()}}finally{if(_didIteratorError){throw _iteratorError}}}}return array},[]);return ids.length?ids.map(function(id){return addonsByAuthorsState.byAddonId[id]}).filter(function(addon){return addonType?addon.type===addonType:!0}).filter(function(addon){return addon.slug!==excludeSlug}):null};var reducer=function(){var state=0<arguments.length&&arguments[0]!==void 0?arguments[0]:initialState,action=1<arguments.length?arguments[1]:void 0;switch(action.type){case FETCH_ADDONS_BY_AUTHORS:{var newState=deepcopy__WEBPACK_IMPORTED_MODULE_20___default()(state),_action$payload=action.payload,addonType=_action$payload.addonType,authorIds=_action$payload.authorIds,forAddonSlug=_action$payload.forAddonSlug;if(forAddonSlug){newState.byAddonSlug=_objectSpread({},newState.byAddonSlug,_defineProperty({},forAddonSlug,void 0))}if(authorIds.length){// Potentially remove add-ons loaded for these authors with this add-on
// type, so that we can load new add-ons in the UI (pagination).
var addonsToRemove=getAddonsForAuthorIds(newState,authorIds,addonType);if(addonsToRemove){var _iteratorNormalCompletion2=!0,_didIteratorError2=!1,_iteratorError2=void 0;try{for(var _loop=function(){var addonToRemove=_step2.value;if(addonToRemove.authors){var _iteratorNormalCompletion3=!0,_didIteratorError3=!1,_iteratorError3=void 0;try{for(var _iterator3=addonToRemove.authors[Symbol.iterator](),_step3,author;!(_iteratorNormalCompletion3=(_step3=_iterator3.next()).done);_iteratorNormalCompletion3=!0){author=_step3.value;newState.byAuthorId[author.id]=newState.byAuthorId[author.id].filter(function(id){return id!==addonToRemove.id})}}catch(err){_didIteratorError3=!0;_iteratorError3=err}finally{try{if(!_iteratorNormalCompletion3&&null!=_iterator3.return){_iterator3.return()}}finally{if(_didIteratorError3){throw _iteratorError3}}}}},_iterator2=addonsToRemove[Symbol.iterator](),_step2;!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=!0){_loop()}}catch(err){_didIteratorError2=!0;_iteratorError2=err}finally{try{if(!_iteratorNormalCompletion2&&null!=_iterator2.return){_iterator2.return()}}finally{if(_didIteratorError2){throw _iteratorError2}}}}}var authorIdsWithAddonType=joinAuthorIdsAndAddonType(authorIds,addonType);newState.loadingFor[authorIdsWithAddonType]=!0;newState.countFor[authorIdsWithAddonType]=null;return newState}case LOAD_ADDONS_BY_AUTHORS:{var _newState=deepcopy__WEBPACK_IMPORTED_MODULE_20___default()(state),_action$payload2=action.payload,_addonType=_action$payload2.addonType,addons=_action$payload2.addons,_authorIds=_action$payload2.authorIds,count=_action$payload2.count,_forAddonSlug=_action$payload2.forAddonSlug,pageSize=_action$payload2.pageSize;if(_forAddonSlug){_newState.byAddonSlug=_objectSpread({},_newState.byAddonSlug,_defineProperty({},_forAddonSlug,addons.slice(0,+pageSize).map(function(addon){return addon.id})))}var _authorIdsWithAddonType=joinAuthorIdsAndAddonType(_authorIds,_addonType);_newState.countFor[_authorIdsWithAddonType]=count;_newState.loadingFor[_authorIdsWithAddonType]=!1;var internalAddons=addons.map(function(addon){return Object(core_reducers_addons__WEBPACK_IMPORTED_MODULE_22__[/* createInternalAddon */ "b"])(addon)}),_iteratorNormalCompletion4=!0,_didIteratorError4=!1,_iteratorError4=void 0;try{for(var _iterator4=internalAddons[Symbol.iterator](),_step4,addon;!(_iteratorNormalCompletion4=(_step4=_iterator4.next()).done);_iteratorNormalCompletion4=!0){addon=_step4.value;_newState.byAddonId[addon.id]=addon;if(addon.authors){var _iteratorNormalCompletion5=!0,_didIteratorError5=!1,_iteratorError5=void 0;try{for(var _iterator5=addon.authors[Symbol.iterator](),_step5,author;!(_iteratorNormalCompletion5=(_step5=_iterator5.next()).done);_iteratorNormalCompletion5=!0){author=_step5.value;if(!_newState.byAuthorId[author.id]){_newState.byAuthorId[author.id]=[]}if(!_newState.byAuthorId[author.id].includes(addon.id)){_newState.byAuthorId[author.id].push(addon.id)}}}catch(err){_didIteratorError5=!0;_iteratorError5=err}finally{try{if(!_iteratorNormalCompletion5&&null!=_iterator5.return){_iterator5.return()}}finally{if(_didIteratorError5){throw _iteratorError5}}}}}}catch(err){_didIteratorError4=!0;_iteratorError4=err}finally{try{if(!_iteratorNormalCompletion4&&null!=_iterator4.return){_iterator4.return()}}finally{if(_didIteratorError4){throw _iteratorError4}}}return _newState}default:return state;}};/* harmony default export */ __webpack_exports__["b"] = (reducer);

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getErrorMessage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getFileHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return removeUndefinedProps; });
/* unused harmony export getAddonJsonLinkedData */
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42);
/* harmony import */ var core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(103);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(190);
/* harmony import */ var core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var common_tags__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(18);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2);
/* harmony import */ var core_logger__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(17);
/* harmony import */ var core_imageUtils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(200);
function _templateObject(){var data=_taggedTemplateLiteral(["No file hash found for addon \"","\", installURL\n    \"","\" (as \"","\")"]);_templateObject=function(){return data};return data}function _taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0)}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var getErrorMessage=function(_ref){var i18n=_ref.i18n,error=_ref.error;invariant__WEBPACK_IMPORTED_MODULE_10___default()(i18n,"i18n is required");switch(error){case core_constants__WEBPACK_IMPORTED_MODULE_11__[/* ERROR_CORRUPT_FILE */ "C"]:return i18n.gettext("Installation aborted because the add-on appears to be corrupt.");case core_constants__WEBPACK_IMPORTED_MODULE_11__[/* INSTALL_FAILED */ "hb"]:return i18n.gettext("Installation failed. Please try again.");case core_constants__WEBPACK_IMPORTED_MODULE_11__[/* DOWNLOAD_FAILED */ "t"]:return i18n.gettext("Download failed. Please check your connection.");case core_constants__WEBPACK_IMPORTED_MODULE_11__[/* FATAL_INSTALL_ERROR */ "F"]:return i18n.gettext("An unexpected error occurred during installation.");case core_constants__WEBPACK_IMPORTED_MODULE_11__[/* FATAL_UNINSTALL_ERROR */ "G"]:return i18n.gettext("An unexpected error occurred during uninstallation.");case core_constants__WEBPACK_IMPORTED_MODULE_11__[/* FATAL_ERROR */ "E"]:default:return i18n.gettext("An unexpected error occurred.");}};var getFileHash=function(_ref2){for(var addon=_ref2.addon,installURL=_ref2.installURL,version=_ref2.version,urlKey=installURL.split("?")[0],_i=0,_Object$keys=Object.keys(version.platformFiles);_i<_Object$keys.length;_i++){var platform=_Object$keys[_i],file=version.platformFiles[platform];if(file&&file.url.startsWith(urlKey)){return file.hash}}core_logger__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].warn(Object(common_tags__WEBPACK_IMPORTED_MODULE_9__[/* oneLine */ "a"])(_templateObject(),addon.slug,installURL,urlKey))};function removeUndefinedProps(object){var newObject={};Object.keys(object).forEach(function(key){if("undefined"!=typeof object[key]){newObject[key]=object[key]}});return newObject}var getAddonJsonLinkedData=function(_ref3){var addon=_ref3.addon,currentVersion=_ref3.currentVersion,_ref3$ratingThreshold=_ref3.ratingThreshold,ratingThreshold=void 0===_ref3$ratingThreshold?3.3:_ref3$ratingThreshold,ratings=addon.ratings,aggregateRating;if(ratings&&0<ratings.count&&ratings.average>=ratingThreshold){aggregateRating={"@type":"AggregateRating",ratingCount:ratings.count,ratingValue:ratings.average}}return removeUndefinedProps({"@context":"http://schema.org","@type":"WebApplication",name:addon.name,url:addon.url,image:Object(core_imageUtils__WEBPACK_IMPORTED_MODULE_13__[/* getPreviewImage */ "b"])(addon),applicationCategory:"http://schema.org/OtherApplication",operatingSystem:"Firefox",description:addon.summary,offers:{"@type":"Offer",availability:"http://schema.org/InStock",price:0,priceCurrency:"USD"},version:currentVersion?currentVersion.version:void 0,aggregateRating:aggregateRating})};

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export GET_LANDING */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOAD_LANDING; });
/* unused harmony export initialState */
/* unused harmony export getLanding */
/* unused harmony export loadLanding */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return reducer; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_reducers_addons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(64);
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1,source;i<arguments.length;i++){source=null!=arguments[i]?arguments[i]:{};if(i%2){ownKeys(Object(source),!0).forEach(function(key){_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}return obj}var GET_LANDING="GET_LANDING";var LOAD_LANDING="LOAD_LANDING";var initialState={addonType:null,category:null,recommended:{count:0,results:[]},highlyRated:{count:0,results:[]},loading:!1,trending:{count:0,results:[]},resultsLoaded:!1};function getLanding(_ref){var addonType=_ref.addonType,category=_ref.category,errorHandlerId=_ref.errorHandlerId;invariant__WEBPACK_IMPORTED_MODULE_8___default()(addonType,"addonType is required");invariant__WEBPACK_IMPORTED_MODULE_8___default()(errorHandlerId,"errorHandlerId is required");return{type:GET_LANDING,payload:{addonType:addonType,category:category||null,errorHandlerId:errorHandlerId}}}function loadLanding(_ref2){var addonType=_ref2.addonType,recommended=_ref2.recommended,highlyRated=_ref2.highlyRated,trending=_ref2.trending;invariant__WEBPACK_IMPORTED_MODULE_8___default()(addonType,"addonType is required");invariant__WEBPACK_IMPORTED_MODULE_8___default()(recommended,"recommended is required");invariant__WEBPACK_IMPORTED_MODULE_8___default()(highlyRated,"highlyRated is required");invariant__WEBPACK_IMPORTED_MODULE_8___default()(trending,"trending is required");return{type:LOAD_LANDING,payload:{addonType:addonType,recommended:recommended,highlyRated:highlyRated,trending:trending}}}function reducer(){var state=0<arguments.length&&arguments[0]!==void 0?arguments[0]:initialState,action=1<arguments.length?arguments[1]:void 0;switch(action.type){case GET_LANDING:{var payload=action.payload;return _objectSpread({},initialState,{addonType:payload.addonType,category:payload.category||null,loading:!0,resultsLoaded:!1})}case LOAD_LANDING:{var _payload=action.payload,newState=_objectSpread({},state,{loading:!1,resultsLoaded:!0});["recommended","highlyRated","trending"].forEach(function(key){if(_payload[key]){newState[key]={count:_payload[key].count,results:_payload[key].results.map(function(addon){return Object(core_reducers_addons__WEBPACK_IMPORTED_MODULE_9__[/* createInternalAddon */ "b"])(addon)})}}});return newState}default:return state;}}

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ABORT_FETCH_RECOMMENDATIONS */
/* unused harmony export FETCH_RECOMMENDATIONS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOAD_RECOMMENDATIONS; });
/* unused harmony export OUTCOME_CURATED */
/* unused harmony export OUTCOME_RECOMMENDED */
/* unused harmony export OUTCOME_RECOMMENDED_FALLBACK */
/* unused harmony export initialState */
/* unused harmony export abortFetchRecommendations */
/* unused harmony export fetchRecommendations */
/* unused harmony export loadRecommendations */
/* unused harmony export getRecommendationsByGuid */
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_reducers_addons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(64);
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1,source;i<arguments.length;i++){source=null!=arguments[i]?arguments[i]:{};if(i%2){ownKeys(Object(source),!0).forEach(function(key){_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}return obj}var ABORT_FETCH_RECOMMENDATIONS="ABORT_FETCH_RECOMMENDATIONS";var FETCH_RECOMMENDATIONS="FETCH_RECOMMENDATIONS";var LOAD_RECOMMENDATIONS="LOAD_RECOMMENDATIONS";var OUTCOME_CURATED="curated";var OUTCOME_RECOMMENDED="recommended";var OUTCOME_RECOMMENDED_FALLBACK="recommended_fallback";var initialState={byGuid:{}};var abortFetchRecommendations=function(_ref){var guid=_ref.guid;invariant__WEBPACK_IMPORTED_MODULE_8___default()(guid,"guid is required");return{type:ABORT_FETCH_RECOMMENDATIONS,payload:{guid:guid}}};var fetchRecommendations=function(_ref2){var errorHandlerId=_ref2.errorHandlerId,guid=_ref2.guid,_ref2$recommended=_ref2.recommended,recommended=void 0===_ref2$recommended?!0:_ref2$recommended;invariant__WEBPACK_IMPORTED_MODULE_8___default()(errorHandlerId,"errorHandlerId is required");invariant__WEBPACK_IMPORTED_MODULE_8___default()(guid,"guid is required");return{type:FETCH_RECOMMENDATIONS,payload:{errorHandlerId:errorHandlerId,guid:guid,recommended:recommended}}};var loadRecommendations=function(_ref3){var addons=_ref3.addons,fallbackReason=_ref3.fallbackReason,guid=_ref3.guid,outcome=_ref3.outcome;invariant__WEBPACK_IMPORTED_MODULE_8___default()(addons,"addons is required");invariant__WEBPACK_IMPORTED_MODULE_8___default()(guid,"guid is required");invariant__WEBPACK_IMPORTED_MODULE_8___default()(outcome,"outcome is required");return{type:LOAD_RECOMMENDATIONS,payload:{addons:addons,guid:guid,outcome:outcome,fallbackReason:fallbackReason}}};var getRecommendationsByGuid=function(_ref4){var guid=_ref4.guid,state=_ref4.state;invariant__WEBPACK_IMPORTED_MODULE_8___default()(guid,"guid is required");invariant__WEBPACK_IMPORTED_MODULE_8___default()(state,"state is required");return state.byGuid[guid]||null};var reducer=function(){var state=0<arguments.length&&arguments[0]!==void 0?arguments[0]:initialState,action=1<arguments.length?arguments[1]:void 0;switch(action.type){case ABORT_FETCH_RECOMMENDATIONS:return _objectSpread({},state,{byGuid:_objectSpread({},state.byGuid,_defineProperty({},action.payload.guid,{addons:null,fallbackReason:null,loading:!1,outcome:null}))});case FETCH_RECOMMENDATIONS:return _objectSpread({},state,{byGuid:_objectSpread({},state.byGuid,_defineProperty({},action.payload.guid,{addons:null,fallbackReason:null,loading:!0,outcome:null}))});case LOAD_RECOMMENDATIONS:{var _action$payload=action.payload,fallbackReason=_action$payload.fallbackReason,_guid=_action$payload.guid,outcome=_action$payload.outcome,addons=action.payload.addons.map(function(addon){return Object(core_reducers_addons__WEBPACK_IMPORTED_MODULE_9__[/* createInternalAddon */ "b"])(addon)});return _objectSpread({},state,{byGuid:_objectSpread({},state.byGuid,_defineProperty({},_guid,{addons:addons,fallbackReason:fallbackReason,loading:!1,outcome:outcome}))})}default:return state;}};/* harmony default export */ __webpack_exports__["b"] = (reducer);

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CLOSE_INFO */
/* unused harmony export SHOW_INFO */
/* unused harmony export initialState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return showInfoDialog; });
/* unused harmony export closeInfoDialog */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return infoDialog; });
var CLOSE_INFO="CLOSE_INFO";var SHOW_INFO="SHOW_INFO";var initialState={data:null,show:!1};var showInfoDialog=function(payload){return{type:SHOW_INFO,payload:payload}};var closeInfoDialog=function(){return{type:CLOSE_INFO}};function infoDialog(){var state=0<arguments.length&&arguments[0]!==void 0?arguments[0]:initialState,action=1<arguments.length?arguments[1]:void 0;switch(action.type){case SHOW_INFO:return{show:!0,data:action.payload};case CLOSE_INFO:return initialState;default:return state;}}

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return dismissSurvey; });
/* unused harmony export showSurvey */
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__);
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1,source;i<arguments.length;i++){source=null!=arguments[i]?arguments[i]:{};if(i%2){ownKeys(Object(source),!0).forEach(function(key){_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}return obj}var DISMISS_SURVEY="DISMISS_SURVEY",SHOW_SURVEY="SHOW_SURVEY";var initialState={wasDismissed:!1};var dismissSurvey=function(){return{type:DISMISS_SURVEY}};var showSurvey=function(){return{type:SHOW_SURVEY}};var surveyReducer=function(){var state=0<arguments.length&&arguments[0]!==void 0?arguments[0]:initialState,action=1<arguments.length?arguments[1]:void 0;switch(action.type){case DISMISS_SURVEY:return _objectSpread({},state,{wasDismissed:!0});case SHOW_SURVEY:return _objectSpread({},state,{wasDismissed:!1});default:return state;}};/* harmony default export */ __webpack_exports__["a"] = (surveyReducer);

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FETCH_VERSION */
/* unused harmony export FETCH_VERSIONS */
/* unused harmony export LOAD_VERSIONS */
/* unused harmony export initialState */
/* unused harmony export defaultPlatformFiles */
/* unused harmony export createPlatformFiles */
/* unused harmony export createInternalVersion */
/* unused harmony export fetchVersion */
/* unused harmony export fetchVersions */
/* unused harmony export loadVersions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getVersionById; });
/* unused harmony export getVersionsBySlug */
/* unused harmony export getLoadingBySlug */
/* unused harmony export getVersionInfo */
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(92);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(28);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(30);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(31);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(42);
/* harmony import */ var core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(24);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(25);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(11);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(14);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(10);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(15);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(1);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var common_tags__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(18);
/* harmony import */ var amo_reducers_addonsByAuthors__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(333);
/* harmony import */ var amo_reducers_collections__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(206);
/* harmony import */ var amo_reducers_home__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(202);
/* harmony import */ var amo_reducers_landing__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(335);
/* harmony import */ var amo_reducers_recommendations__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(336);
/* harmony import */ var core_constants__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(2);
/* harmony import */ var core_logger__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(17);
/* harmony import */ var core_reducers_addons__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(64);
/* harmony import */ var core_reducers_search__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(170);
/* harmony import */ var core_utils__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(35);
/* harmony import */ var core_i18n_utils__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(340);
var _Object$freeze;function _templateObject(){var data=_taggedTemplateLiteral(["A version with id ","\n          has a file with an unknown platform: ",""]);_templateObject=function(){return data};return data}function _taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0)}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1,source;i<arguments.length;i++){source=null!=arguments[i]?arguments[i]:{};if(i%2){ownKeys(Object(source),!0).forEach(function(key){_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}return obj}var FETCH_VERSION="FETCH_VERSION";var FETCH_VERSIONS="FETCH_VERSIONS";var LOAD_VERSIONS="LOAD_VERSIONS";var initialState={byId:{},bySlug:{}};var defaultPlatformFiles=Object.freeze((_Object$freeze={},_defineProperty(_Object$freeze,core_constants__WEBPACK_IMPORTED_MODULE_26__[/* OS_ALL */ "pb"],void 0),_defineProperty(_Object$freeze,core_constants__WEBPACK_IMPORTED_MODULE_26__[/* OS_ANDROID */ "qb"],void 0),_defineProperty(_Object$freeze,core_constants__WEBPACK_IMPORTED_MODULE_26__[/* OS_LINUX */ "rb"],void 0),_defineProperty(_Object$freeze,core_constants__WEBPACK_IMPORTED_MODULE_26__[/* OS_MAC */ "sb"],void 0),_defineProperty(_Object$freeze,core_constants__WEBPACK_IMPORTED_MODULE_26__[/* OS_WINDOWS */ "tb"],void 0),_Object$freeze));var createPlatformFiles=function(version){var platformFiles=_objectSpread({},defaultPlatformFiles);if(version&&0<version.files.length){version.files.forEach(function(file){// eslint-disable-next-line no-prototype-builtins
if(!platformFiles.hasOwnProperty(file.platform)){// You wouldn't think this is needed, but Flow.
invariant__WEBPACK_IMPORTED_MODULE_19___default()(version,"version is required");core_logger__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].warn(Object(common_tags__WEBPACK_IMPORTED_MODULE_20__[/* oneLine */ "a"])(_templateObject(),version.id,file.platform))}platformFiles[file.platform]=file})}return platformFiles};var createInternalVersion=function(version){return{compatibility:version.compatibility,id:version.id,isStrictCompatibilityEnabled:!!version.is_strict_compatibility_enabled,license:version.license?{isCustom:version.license.is_custom,name:version.license.name,text:version.license.text,url:version.license.url}:null,platformFiles:createPlatformFiles(version),releaseNotes:version.release_notes,version:version.version}};var fetchVersion=function(_ref){var errorHandlerId=_ref.errorHandlerId,slug=_ref.slug,versionId=_ref.versionId;invariant__WEBPACK_IMPORTED_MODULE_19___default()(errorHandlerId,"errorHandlerId is required");invariant__WEBPACK_IMPORTED_MODULE_19___default()(slug,"slug is required");invariant__WEBPACK_IMPORTED_MODULE_19___default()(versionId,"versionId is required");return{type:FETCH_VERSION,payload:{errorHandlerId:errorHandlerId,slug:slug,versionId:versionId}}};var fetchVersions=function(_ref2){var errorHandlerId=_ref2.errorHandlerId,_ref2$page=_ref2.page,page=void 0===_ref2$page?"1":_ref2$page,slug=_ref2.slug;invariant__WEBPACK_IMPORTED_MODULE_19___default()(errorHandlerId,"errorHandlerId is required");invariant__WEBPACK_IMPORTED_MODULE_19___default()(slug,"slug is required");return{type:FETCH_VERSIONS,payload:{errorHandlerId:errorHandlerId,page:page,slug:slug}}};var loadVersions=function(){var _ref3=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},slug=_ref3.slug,versions=_ref3.versions;invariant__WEBPACK_IMPORTED_MODULE_19___default()(slug,"slug is required");invariant__WEBPACK_IMPORTED_MODULE_19___default()(versions,"versions is required");return{type:LOAD_VERSIONS,payload:{slug:slug,versions:versions}}};var getVersionById=function(_ref4){var id=_ref4.id,state=_ref4.state;invariant__WEBPACK_IMPORTED_MODULE_19___default()(id,"id is required");invariant__WEBPACK_IMPORTED_MODULE_19___default()(state,"state is required");var version=state.byId[id];return version||null};var getVersionsBySlug=function(_ref5){var slug=_ref5.slug,state=_ref5.state;invariant__WEBPACK_IMPORTED_MODULE_19___default()(slug,"slug is required");invariant__WEBPACK_IMPORTED_MODULE_19___default()(state,"state is required");var infoForSlug=state.bySlug[slug];if(infoForSlug&&infoForSlug.versionIds){return infoForSlug.versionIds.map(function(versionId){var version=getVersionById({id:versionId,state:state});invariant__WEBPACK_IMPORTED_MODULE_19___default()(version,"missing version for slug ".concat(slug," and versionId ").concat(versionId));return version})}return null};var getLoadingBySlug=function(_ref6){var slug=_ref6.slug,state=_ref6.state;invariant__WEBPACK_IMPORTED_MODULE_19___default()(slug,"slug is required");invariant__WEBPACK_IMPORTED_MODULE_19___default()(state,"state is required");var infoForSlug=state.bySlug[slug];return!!(infoForSlug&&infoForSlug.loading)};var getVersionInfo=function(_ref7){var _ref7$_findFileForPla=_ref7._findFileForPlatform,_findFileForPlatform=void 0===_ref7$_findFileForPla?core_utils__WEBPACK_IMPORTED_MODULE_30__[/* findFileForPlatform */ "d"]:_ref7$_findFileForPla,i18n=_ref7.i18n,state=_ref7.state,userAgentInfo=_ref7.userAgentInfo,versionId=_ref7.versionId,version=getVersionById({id:versionId,state:state});if(version){var file=_findFileForPlatform({platformFiles:version.platformFiles,userAgentInfo:userAgentInfo}),noMaxString=i18n.gettext("%(application)s %(minVersion)s and later"),maxAndMinString=i18n.gettext("%(application)s %(minVersion)s to %(maxVersion)s"),appInfo=Object.keys(version.compatibility).map(function(application){var _version$compatibilit=version.compatibility[application],max=_version$compatibilit.max,min=_version$compatibilit.min;if("*"===max){return i18n.sprintf(noMaxString,{application:application,minVersion:min})}return i18n.sprintf(maxAndMinString,{application:application,maxVersion:max,minVersion:min})}).join(", "),compatibilityString=i18n.sprintf(// eslint-disable-next-line max-len
// translators: This contains a comma-delimited list of applications and versions, such as "android 41 and later, firefox 42 and later"
i18n.gettext("Works with %(listOfApplicatonsAndVersions)s"),{listOfApplicatonsAndVersions:appInfo});// translators: This is application compatibility information, such as "firefox 41 and later"
return{compatibilityString:compatibilityString,created:file?file.created:null,filesize:file?Object(core_i18n_utils__WEBPACK_IMPORTED_MODULE_31__[/* formatFilesize */ "a"])({i18n:i18n,size:file.size}):null}}return null};var reducer=function(){var state=0<arguments.length&&arguments[0]!==void 0?arguments[0]:initialState,action=1<arguments.length?arguments[1]:void 0;switch(action.type){case FETCH_VERSION:case FETCH_VERSIONS:{var _slug=action.payload.slug;return _objectSpread({},state,{bySlug:_objectSpread({},state.bySlug,_defineProperty({},_slug,{versionIds:null,loading:!0}))})}case LOAD_VERSIONS:{var _action$payload=action.payload,_slug2=_action$payload.slug,versions=_action$payload.versions,newVersions={},_iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0;try{for(var _iterator=versions[Symbol.iterator](),_step,version;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=!0){version=_step.value;newVersions[version.id]=createInternalVersion(version)}}catch(err){_didIteratorError=!0;_iteratorError=err}finally{try{if(!_iteratorNormalCompletion&&null!=_iterator.return){_iterator.return()}}finally{if(_didIteratorError){throw _iteratorError}}}return _objectSpread({},state,{byId:_objectSpread({},state.byId,{},newVersions),bySlug:_objectSpread({},state.bySlug,_defineProperty({},_slug2,{versionIds:versions.map(function(version){return version.id}),loading:!1}))})}case amo_reducers_addonsByAuthors__WEBPACK_IMPORTED_MODULE_21__[/* LOAD_ADDONS_BY_AUTHORS */ "a"]:case core_reducers_addons__WEBPACK_IMPORTED_MODULE_28__[/* LOAD_ADDON_RESULTS */ "a"]:case amo_reducers_collections__WEBPACK_IMPORTED_MODULE_22__[/* LOAD_COLLECTION_ADDONS */ "a"]:case amo_reducers_collections__WEBPACK_IMPORTED_MODULE_22__[/* LOAD_CURRENT_COLLECTION */ "b"]:case amo_reducers_collections__WEBPACK_IMPORTED_MODULE_22__[/* LOAD_CURRENT_COLLECTION_PAGE */ "c"]:case amo_reducers_recommendations__WEBPACK_IMPORTED_MODULE_25__[/* LOAD_RECOMMENDATIONS */ "a"]:case core_reducers_search__WEBPACK_IMPORTED_MODULE_29__[/* SEARCH_LOADED */ "a"]:{var _action$payload2=action.payload,addons=_action$payload2.addons,addonsResponse=_action$payload2.addonsResponse,results=_action$payload2.results,items;if(results){items=results}else if(addonsResponse){items=addonsResponse.results}else{items=addons.results||addons}var _newVersions={},_iteratorNormalCompletion2=!0,_didIteratorError2=!1,_iteratorError2=void 0;try{for(var _iterator2=items[Symbol.iterator](),_step2;!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=!0){var addon=_step2.value,addonToUse=addon.addon||addon;if(addonToUse.current_version){var apiVersion=addonToUse.current_version;// Do not overwrite licence and release_notes data with nulls, which
// are omitted from some API responses.
// Discopane does not need this done, and does not get a version
// property, so we can check for that too.
if(apiVersion.version&&(!apiVersion.license||!apiVersion.release_notes)){var existingVersion=getVersionById({id:apiVersion.id,state:state});if(existingVersion){apiVersion.license=apiVersion.license||existingVersion.license;apiVersion.release_notes=apiVersion.release_notes||existingVersion.releaseNotes}}var _version=createInternalVersion(apiVersion);_newVersions[_version.id]=_version}}}catch(err){_didIteratorError2=!0;_iteratorError2=err}finally{try{if(!_iteratorNormalCompletion2&&null!=_iterator2.return){_iterator2.return()}}finally{if(_didIteratorError2){throw _iteratorError2}}}return _objectSpread({},state,{byId:_objectSpread({},state.byId,{},_newVersions)})}case amo_reducers_home__WEBPACK_IMPORTED_MODULE_23__[/* LOAD_HOME_DATA */ "a"]:{for(var _action$payload3=action.payload,collections=_action$payload3.collections,shelves=_action$payload3.shelves,_newVersions2={},_i=0,_Object$keys=Object.keys(shelves),shelf;_i<_Object$keys.length;_i++){shelf=_Object$keys[_i];if(shelves[shelf]){var _iteratorNormalCompletion4=!0,_didIteratorError4=!1,_iteratorError4=void 0;try{for(var _iterator4=shelves[shelf].results[Symbol.iterator](),_step4,_addon;!(_iteratorNormalCompletion4=(_step4=_iterator4.next()).done);_iteratorNormalCompletion4=!0){_addon=_step4.value;if(_addon.current_version){var currentVersion=_addon.current_version,_version2=createInternalVersion(currentVersion),_id=currentVersion.id,_existingVersion=getVersionById({id:_id,state:state});if(_existingVersion){_version2=_objectSpread({},_version2,{license:_existingVersion.license,releaseNotes:_existingVersion.releaseNotes})}_newVersions2[_id]=_version2}}}catch(err){_didIteratorError4=!0;_iteratorError4=err}finally{try{if(!_iteratorNormalCompletion4&&null!=_iterator4.return){_iterator4.return()}}finally{if(_didIteratorError4){throw _iteratorError4}}}}}var _iteratorNormalCompletion3=!0,_didIteratorError3=!1,_iteratorError3=void 0;try{for(var _iterator3=collections[Symbol.iterator](),_step3,collection;!(_iteratorNormalCompletion3=(_step3=_iterator3.next()).done);_iteratorNormalCompletion3=!0){collection=_step3.value;if(collection&&collection.results){var _iteratorNormalCompletion5=!0,_didIteratorError5=!1,_iteratorError5=void 0;try{for(var _iterator5=collection.results[Symbol.iterator](),_step5;!(_iteratorNormalCompletion5=(_step5=_iterator5.next()).done);_iteratorNormalCompletion5=!0){var _addon2=_step5.value,_version3=createInternalVersion(_addon2.addon.current_version);_newVersions2[_version3.id]=_version3}}catch(err){_didIteratorError5=!0;_iteratorError5=err}finally{try{if(!_iteratorNormalCompletion5&&null!=_iterator5.return){_iterator5.return()}}finally{if(_didIteratorError5){throw _iteratorError5}}}}}}catch(err){_didIteratorError3=!0;_iteratorError3=err}finally{try{if(!_iteratorNormalCompletion3&&null!=_iterator3.return){_iterator3.return()}}finally{if(_didIteratorError3){throw _iteratorError3}}}return _objectSpread({},state,{byId:_objectSpread({},state.byId,{},_newVersions2)})}case amo_reducers_landing__WEBPACK_IMPORTED_MODULE_24__[/* LOAD_LANDING */ "a"]:{for(var _action$payload4=action.payload,recommended=_action$payload4.recommended,highlyRated=_action$payload4.highlyRated,trending=_action$payload4.trending,_newVersions3={},_i2=0,_arr=[recommended,highlyRated,trending];_i2<_arr.length;_i2++){var apiResponse=_arr[_i2],_iteratorNormalCompletion6=!0,_didIteratorError6=!1,_iteratorError6=void 0;try{for(var _iterator6=apiResponse.results[Symbol.iterator](),_step6,_addon3;!(_iteratorNormalCompletion6=(_step6=_iterator6.next()).done);_iteratorNormalCompletion6=!0){_addon3=_step6.value;if(_addon3.current_version){var _version4=createInternalVersion(_addon3.current_version);_newVersions3[_version4.id]=_version4}}}catch(err){_didIteratorError6=!0;_iteratorError6=err}finally{try{if(!_iteratorNormalCompletion6&&null!=_iterator6.return){_iterator6.return()}}finally{if(_didIteratorError6){throw _iteratorError6}}}}return _objectSpread({},state,{byId:_objectSpread({},state.byId,{},_newVersions3)})}default:return state;}};/* harmony default export */ __webpack_exports__["a"] = (reducer);

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export localeToLang */
/* unused harmony export langToLocale */
/* unused harmony export normalizeLang */
/* unused harmony export normalizeLocale */
/* unused harmony export isSupportedLang */
/* unused harmony export isValidLang */
/* unused harmony export sanitizeLanguage */
/* unused harmony export isRtlLang */
/* unused harmony export getDirection */
/* unused harmony export parseAcceptLanguage */
/* unused harmony export getLangFromHeader */
/* unused harmony export getLanguage */
/* unused harmony export makeMomentLocale */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return formatFilesize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return makeI18n; });
/* unused harmony export replaceStringsWithJSX */
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(92);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(28);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(63);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(30);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(24);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(25);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(11);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(651);
/* harmony import */ var core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(56);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(44);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(101);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(14);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(131);
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(113);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(103);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(187);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(10);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(15);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(21);
/* harmony import */ var filesize__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(742);
/* harmony import */ var filesize__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(filesize__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var jed__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(331);
/* harmony import */ var jed__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(jed__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(743);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_logger__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(17);
/* harmony import */ var core_constants__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(2);
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1,source;i<arguments.length;i++){source=null!=arguments[i]?arguments[i]:{};if(i%2){ownKeys(Object(source),!0).forEach(function(key){_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}return obj}function _typeof(obj){"@babel/helpers - typeof";if("function"==typeof Symbol&&"symbol"==typeof Symbol.iterator){_typeof=function(obj){return typeof obj}}else{_typeof=function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(arr,i){if(!(Symbol.iterator in Object(arr)||"[object Arguments]"===Object.prototype.toString.call(arr))){return}var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=!0){_arr.push(_s.value);if(i&&_arr.length===i)break}}catch(err){_d=!0;_e=err}finally{try{if(!_n&&null!=_i["return"])_i["return"]()}finally{if(_d)throw _e}}return _arr}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}var defaultLang=config__WEBPACK_IMPORTED_MODULE_29__[/* default */ "a"].get("defaultLang"),langs=config__WEBPACK_IMPORTED_MODULE_29__[/* default */ "a"].get("langs"),langMap=config__WEBPACK_IMPORTED_MODULE_29__[/* default */ "a"].get("langMap"),supportedLangs=langs.concat(Object.keys(langMap)),rtlLangs=config__WEBPACK_IMPORTED_MODULE_29__[/* default */ "a"].get("rtlLangs");function localeToLang(locale){var log_=1<arguments.length&&arguments[1]!==void 0?arguments[1]:core_logger__WEBPACK_IMPORTED_MODULE_33__[/* default */ "a"],lang;if(locale&&locale.split){var parts=locale.split("_");if(1===parts.length){lang=parts[0].toLowerCase()}else if(2===parts.length){var pt2=parts[1];pt2=2<pt2.length?pt2[0].toUpperCase()+pt2.slice(1).toLowerCase():pt2.toUpperCase();lang="".concat(parts[0].toLowerCase(),"-").concat(pt2)}else if(3===parts.length){// sr_RS should be sr-RS
lang="".concat(parts[0].toLowerCase(),"-").concat(parts[2].toUpperCase())}else{log_.error("Unable to map a language from locale code [".concat(locale,"]"))}}return lang}function langToLocale(language){var log_=1<arguments.length&&arguments[1]!==void 0?arguments[1]:core_logger__WEBPACK_IMPORTED_MODULE_33__[/* default */ "a"],locale;if(language&&language.split){var parts=language.split("-");if(1===parts.length){locale=parts[0].toLowerCase()}else if(2===parts.length){var pt2=parts[1];pt2=2<pt2.length?pt2[0].toUpperCase()+pt2.slice(1).toLowerCase():pt2.toUpperCase();locale="".concat(parts[0].toLowerCase(),"_").concat(pt2)}else if(3===parts.length){// sr-Cyrl-RS should be sr_RS
locale="".concat(parts[0].toLowerCase(),"_").concat(parts[2].toUpperCase())}else{log_.error("Unable to map a locale from language code [".concat(language,"]"))}}return locale}function normalizeLang(lang){return localeToLang(langToLocale(lang))}function normalizeLocale(locale){return langToLocale(localeToLang(locale))}function isSupportedLang(lang){var _ref=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},_ref$_supportedLangs=_ref._supportedLangs,_supportedLangs=void 0===_ref$_supportedLangs?supportedLangs:_ref$_supportedLangs;return _supportedLangs.includes(lang)}function isValidLang(lang){var _ref2=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},_ref2$_langs=_ref2._langs,_langs=void 0===_ref2$_langs?langs:_ref2$_langs;return _langs.includes(lang)}function sanitizeLanguage(langOrLocale){var language=normalizeLang(langOrLocale);// Only look in the un-mapped lang list.
if(!isValidLang(language)){// eslint-disable-next-line no-prototype-builtins
language=langMap.hasOwnProperty(language)?langMap[language]:defaultLang}return language}function isRtlLang(lang){var language=sanitizeLanguage(lang);return rtlLangs.includes(language)}function getDirection(lang){return isRtlLang(lang)?core_constants__WEBPACK_IMPORTED_MODULE_34__[/* RTL */ "vb"]:core_constants__WEBPACK_IMPORTED_MODULE_34__[/* LTR */ "nb"]}function qualityCmp(a,b){if(a.quality===b.quality){return 0}if(a.quality<b.quality){return 1}return-1}/*
 * Parses the HTTP accept-language header and returns a
 * sorted array of objects. Example object:
 * { lang: 'pl', quality: 0.7 }
 */function parseAcceptLanguage(header){// pl,fr-FR;q=0.3,en-US;q=0.1
if(!header||!header.split){return[]}var rawLangs=header.split(","),langList=rawLangs.map(function(rawLang){var parts=rawLang.split(";"),q=1;if(1<parts.length&&0===parts[1].trim().indexOf("q=")){var qVal=parseFloat(parts[1].split("=")[1]);// eslint-disable-next-line no-restricted-globals
if(!1===isNaN(qVal)){q=qVal}}return{lang:parts[0].trim(),quality:q}});langList.sort(qualityCmp);return langList}/*
 * Given an accept-language header and a list of currently
 * supported languages, returns the best match normalized.
 *
 * Note: this doesn't map languages e.g. pt -> pt-PT. Use sanitizeLanguage for that.
 *
 */function getLangFromHeader(acceptLanguage){var _ref3=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},_supportedLangs=_ref3._supportedLangs,userLang;if(acceptLanguage){var langList=parseAcceptLanguage(acceptLanguage),_iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0;try{for(var _iterator=langList[Symbol.iterator](),_step,langPref;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=!0){langPref=_step.value;if(isSupportedLang(normalizeLang(langPref.lang),{_supportedLangs:_supportedLangs})){userLang=langPref.lang;break;// Match locale, even if region isn't supported
}else if(isSupportedLang(normalizeLang(langPref.lang.split("-")[0]),{_supportedLangs:_supportedLangs})){userLang=langPref.lang.split("-")[0];break}}}catch(err){_didIteratorError=!0;_iteratorError=err}finally{try{if(!_iteratorNormalCompletion&&null!=_iterator.return){_iterator.return()}}finally{if(_didIteratorError){throw _iteratorError}}}}return normalizeLang(userLang)}/*
 * Check validity of language:
 * - If invalid, fall-back to accept-language.
 * - Return object with lang and isLangFromHeader hint.
 *
 */function getLanguage(){var _ref4=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},lang=_ref4.lang,acceptLanguage=_ref4.acceptLanguage,userLang=lang,isLangFromHeader=!1;// If we don't have a supported userLang yet try accept-language.
if(!isSupportedLang(normalizeLang(userLang))&&acceptLanguage){userLang=getLangFromHeader(acceptLanguage);isLangFromHeader=!0}// sanitizeLanguage will perform the following:
// - mapping e.g. pt -> pt-PT.
// - normalization e.g: en-us -> en-US.
return{lang:sanitizeLanguage(userLang),isLangFromHeader:isLangFromHeader}}// moment uses locales like "en-gb" whereas we use "en_GB".
function makeMomentLocale(locale){return locale.replace("_","-").toLowerCase()}// Functionality based on oneLine form declandewet/common-tags https://goo.gl/4PzaJI
// If this function is changed, `babel-gettext-extractor` also needs to be
// updated.
function oneLineTranslationString(translationKey){if(translationKey&&translationKey.replace&&translationKey.trim){return translationKey.replace(/(?:\n(?:\s*))+/g," ").trim()}return translationKey}// Translates a file size in bytes into a localized user-friendly format.
var formatFilesize=function(_ref5){var _ref5$_filesize=_ref5._filesize,_filesize=void 0===_ref5$_filesize?filesize__WEBPACK_IMPORTED_MODULE_30___default.a:_ref5$_filesize,_ref5$_log=_ref5._log,_log=void 0===_ref5$_log?core_logger__WEBPACK_IMPORTED_MODULE_33__[/* default */ "a"]:_ref5$_log,i18n=_ref5.i18n,size=_ref5.size,sizeStrings={// These are the expected values for the unit of measure returned by
// filesize. Realistically we shouldn't get anything back larger than TB.
/* eslint-disable max-len */ // translators: B is an abbreviation of Bytes in English. Localize it if necessary but use a short abbreviation.
B:i18n.gettext("%(localizedSize)s B"),// translators: KB is an abbreviation of Kilobytes in English. Localize it if necessary but use a short abbreviation.
KB:i18n.gettext("%(localizedSize)s KB"),// translators: MB is an abbreviation of Megabytes in English. Localize it if necessary but use a short abbreviation.
MB:i18n.gettext("%(localizedSize)s MB"),// translators: GB is an abbreviation of Gigabytes in English. Localize it if necessary but use a short abbreviation.
GB:i18n.gettext("%(localizedSize)s GB"),// translators: TB is an abbreviation of Terabytes in English. Localize it if necessary but use a short abbreviation.
TB:i18n.gettext("%(localizedSize)s TB")/* eslint-enable max-len */},_filesize$split=_filesize(size).split(" "),_filesize$split2=_slicedToArray(_filesize$split,2),sizeNumber=_filesize$split2[0],sizeName=_filesize$split2[1];if(!sizeNumber||!sizeName){_log.error("Filesize returned sizeNumber: \"".concat(sizeNumber,"\", sizeName: \"").concat(sizeName,"\" size \"").concat(size,"\""));return i18n.formatNumber(size)}var localizedSize=i18n.formatNumber(sizeNumber),sizeString=sizeStrings[sizeName];if(!sizeString){_log.error("Filesize returned unrecognized unit: ".concat(sizeName));return localizedSize}return i18n.sprintf(sizeString,{localizedSize:localizedSize})};// Create an i18n object with a translated moment object available we can
// use for translated dates across the app.
function makeI18n(i18nData,lang){var _Jed=2<arguments.length&&arguments[2]!==void 0?arguments[2]:jed__WEBPACK_IMPORTED_MODULE_31___default.a,_ref6=3<arguments.length&&arguments[3]!==void 0?arguments[3]:{},_ref6$_Intl=_ref6._Intl,_Intl=void 0===_ref6$_Intl?"undefined"!=typeof Intl?Intl:void 0:_ref6$_Intl,i18n=new _Jed(i18nData);i18n.lang=lang;// TODO: move all of this to an I18n class that extends Jed so that we
// can type-check all the components that rely on the i18n object.
// Note: the available locales for tests are controlled in tests/setup.js
if("object"===_typeof(_Intl)&&Object.prototype.hasOwnProperty.call(_Intl,"NumberFormat")){core_logger__WEBPACK_IMPORTED_MODULE_33__[/* default */ "a"].info("Intl.NumberFormat exists");i18n.numberFormat=new _Intl.NumberFormat(lang)}else{core_logger__WEBPACK_IMPORTED_MODULE_33__[/* default */ "a"].info("Intl.NumberFormat does NOT exist")}i18n.formatNumber=function(number){if("undefined"!=typeof i18n.numberFormat){return i18n.numberFormat.format(number)}// Intl is not yet supported on FF Android though it is expected to land in 54
// See https://bugzilla.mozilla.org/show_bug.cgi?id=1215247
return number.toLocaleString(lang)};// This adds the correct moment locale for the active locale so we can get
// localised dates, times, etc.
if(i18n.options&&"function"==typeof i18n.options._momentDefineLocale){i18n.options._momentDefineLocale()}// Wrap the core Jed functionality so that we can always strip leading
// whitespace from translation keys to match the same process used in
// extraction.
i18n._dcnpgettext=i18n.dcnpgettext;i18n.dcnpgettext=function(domain,context,singularKey,pluralKey,val){return i18n._dcnpgettext(domain,context,oneLineTranslationString(singularKey),oneLineTranslationString(pluralKey),val)};var momentLocale=makeMomentLocale(i18n.lang);// We add a translated "moment" property to our `i18n` object to make
// translated date/time/etc. easy.
i18n.moment=function(){var scopedMoment=moment__WEBPACK_IMPORTED_MODULE_32___default.a.apply(void 0,arguments);// This also makes sure moment always uses the current locale.
scopedMoment.locale(momentLocale);return scopedMoment};return i18n}var getReplacementKey=function(start,end){return"".concat(start,",").concat(end)};var replaceStringsWithJSX=function(_ref7){var text=_ref7.text,replacements=_ref7.replacements;if(0===replacements.length){throw new Error("`replacements` should not be empty")}// Find placeholders in `text`. A placeholder looks like this: `%(var)s`.
var placeholders=text.match(/%\(\w+\)s/g),numberOfPlaceholders=placeholders&&placeholders.length||0,numberOfPairs=numberOfPlaceholders/2;if(0===numberOfPairs){throw new Error("No placeholder found in `text`")}if(numberOfPairs!==replacements.length){throw new Error("Expected ".concat(numberOfPairs," replacements but only got ").concat(replacements.length))}var expression=new RegExp([// Before any replacement (pair of keys).
"^(.*?)",// Add a generic regexp to match each replacement entry, possibly
// separated by some more text.
replacements.map(function(){return"%\\((\\w+)\\)s(.+?)%\\((\\w+)\\)s"}).join("(.*?)"),// After all replacements (pairs of keys).
"(.*?)$"].join("")),matches=text.match(expression),internalReplacements=replacements.reduce(function(map,replacement){var key=getReplacementKey(replacement[0],replacement[1]);if(map[key]){throw new Error("Duplicate key detected in `replacements`: ".concat(key))}return _objectSpread({},map,_defineProperty({},key,replacement[2]))},{});if(!matches){// This should not be possible anymore thanks to the other checks above.
throw new Error("`text` does not appear to be compatible with the provided replacements")}// The first entry is always the whole string (a.k.a. `text`), so let's
// remove it before processing this array.
matches.shift();var output=[];while(matches.length){var keyOrText=matches.shift();// Look-ahead to see if we found a known pair of keys.
if(internalReplacements[getReplacementKey(keyOrText,matches[1])]){var innerText=matches.shift(),secondKey=matches.shift(),key=getReplacementKey(keyOrText,secondKey),replaceFn=internalReplacements[key];output.push(replaceFn(innerText));// eslint-disable-next-line no-param-reassign
delete internalReplacements[key]}else{output.push(keyOrText)}}if(0<Object.keys(internalReplacements).length){throw new Error("Not all replacements have been used; unused keys: ".concat(Object.keys(internalReplacements).join("; ")))}return output};

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAddonStatus", function() { return getAddonStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasAddonManager", function() { return hasAddonManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasPermissionPromptsEnabled", function() { return hasPermissionPromptsEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAddon", function() { return getAddon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasAbuseReportPanelEnabled", function() { return hasAbuseReportPanelEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportAbuse", function() { return reportAbuse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uninstall", function() { return uninstall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addChangeListeners", function() { return addChangeListeners; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enable", function() { return enable; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(111);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_logger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(17);
/* harmony import */ var core_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2);
/* harmony import */ var core_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(35);
/* global window */// This is the representation of an add-on in Firefox.
function getAddonStatus(_ref){var addon=_ref.addon,type=_ref.type,isActive=addon.isActive,isEnabled=addon.isEnabled,status=core_constants__WEBPACK_IMPORTED_MODULE_9__[/* DISABLED */ "r"];if(isActive&&isEnabled){status=core_constants__WEBPACK_IMPORTED_MODULE_9__[/* ENABLED */ "v"]}else if(core_constants__WEBPACK_IMPORTED_MODULE_9__[/* ADDON_TYPE_STATIC_THEME */ "j"]!==type&&!isActive&&isEnabled){// We only use the INACTIVE status for add-ons that are not themes.
status=core_constants__WEBPACK_IMPORTED_MODULE_9__[/* INACTIVE */ "J"]}return status}function hasAddonManager(){var _ref2=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},navigator=_ref2.navigator;if("undefined"==typeof window){return!1}return"mozAddonManager"in(navigator||window.navigator)}function hasPermissionPromptsEnabled(){var _ref3=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},navigator=_ref3.navigator;if(hasAddonManager({navigator:navigator})){var _navigator=navigator||window.navigator;return _navigator.mozAddonManager.permissionPromptsEnabled}}function getAddon(guid){var _ref4=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},_ref4$_mozAddonManage=_ref4._mozAddonManager,_mozAddonManager=void 0===_ref4$_mozAddonManage?window.navigator.mozAddonManager:_ref4$_mozAddonManage;if(_mozAddonManager||module.exports.hasAddonManager()){// Resolves a promise with the addon on success.
return _mozAddonManager.getAddonByID(guid).then(function(addon){if(!addon){throw new Error("Addon not found")}core_logger__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].debug("Add-on found",addon);return addon})}return Promise.reject(new Error("Cannot check add-on status"))}function hasAbuseReportPanelEnabled(){var _mozAddonManager=0<arguments.length&&arguments[0]!==void 0?arguments[0]:window.navigator.mozAddonManager;if(_mozAddonManager||hasAddonManager()){return _mozAddonManager.abuseReportPanelEnabled||!1}return!1}function reportAbuse(addonId){var _ref5=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},_ref5$_mozAddonManage=_ref5._mozAddonManager,_mozAddonManager=void 0===_ref5$_mozAddonManage?window.navigator.mozAddonManager:_ref5$_mozAddonManage;if(hasAbuseReportPanelEnabled(_mozAddonManager)){return _mozAddonManager.reportAbuse&&_mozAddonManager.reportAbuse(addonId)}return Promise.reject(new Error("Cannot report abuse via Firefox"))}function install(_url,eventCallback){var _ref6=2<arguments.length&&arguments[2]!==void 0?arguments[2]:{},_ref6$_log=_ref6._log,_log=void 0===_ref6$_log?core_logger__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"]:_ref6$_log,_ref6$_mozAddonManage=_ref6._mozAddonManager,_mozAddonManager=void 0===_ref6$_mozAddonManage?window.navigator.mozAddonManager:_ref6$_mozAddonManage,hash=_ref6.hash,_ref6$onIgnoredReject=_ref6.onIgnoredRejection,onIgnoredRejection=void 0===_ref6$onIgnoredReject?function(){}:_ref6$onIgnoredReject,src=_ref6.src;if(src===void 0){return Promise.reject(new Error("No src for add-on install"))}var url=Object(core_utils__WEBPACK_IMPORTED_MODULE_10__[/* addQueryParams */ "a"])(_url,{src:src});return _mozAddonManager.createInstall({url:url,hash:hash}).then(function(installObj){var callback=function(e){return eventCallback(installObj,e)},_iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0;try{for(var _iterator=core_constants__WEBPACK_IMPORTED_MODULE_9__[/* INSTALL_EVENT_LIST */ "fb"][Symbol.iterator](),_step,event;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=!0){event=_step.value;_log.info("[install] Adding listener for ".concat(event));installObj.addEventListener(event,callback)}}catch(err){_didIteratorError=!0;_iteratorError=err}finally{try{if(!_iteratorNormalCompletion&&null!=_iterator.return){_iterator.return()}}finally{if(_didIteratorError){throw _iteratorError}}}return new Promise(function(resolve,reject){installObj.addEventListener("onInstallEnded",function(){return resolve()});installObj.addEventListener("onInstallFailed",function(){return reject()});_log.info("Events to handle the installation initialized.");installObj.install().catch(function(error){// The `mozAddonManager` has events we can listen to, this error occurs
// when a user cancels the installation but we are already notified via
// `onInstallCancelled`.
// See: https://github.com/mozilla/addons-frontend/issues/8668
_log.warn("Ignoring promise rejection during installation: ".concat(error));onIgnoredRejection()})})})}function uninstall(guid){var _ref7=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},_ref7$_mozAddonManage=_ref7._mozAddonManager,_mozAddonManager=void 0===_ref7$_mozAddonManage?window.navigator.mozAddonManager:_ref7$_mozAddonManage;return getAddon(guid,{_mozAddonManager:_mozAddonManager}).then(function(addon){core_logger__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].info("Requesting uninstall of ".concat(guid));return addon.uninstall()}).then(function(result){// Until bug 1268075 this will resolve with a boolean
// for success and failure.
if(!1===result){throw new Error("Uninstall failed")}})}function addChangeListeners(callback,mozAddonManager){var _ref8=2<arguments.length&&arguments[2]!==void 0?arguments[2]:{},_ref8$_log=_ref8._log,_log=void 0===_ref8$_log?core_logger__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"]:_ref8$_log;function handleChangeEvent(e){var guid=e.id,type=e.type,needsRestart=e.needsRestart;// eslint-disable-next-line amo/only-log-strings
_log.info("Event received",{type:type,id:guid,needsRestart:needsRestart});if(type===core_constants__WEBPACK_IMPORTED_MODULE_9__[/* ON_OPERATION_CANCELLED_EVENT */ "ob"]){// We need to retrieve the correct status for this add-on.
return getAddon(guid,{_mozAddonManager:mozAddonManager}).then(function(addon){var status=getAddonStatus({addon:addon});return callback({guid:guid,status:status,needsRestart:needsRestart})}).catch(function(error){// eslint-disable-next-line amo/only-log-strings
_log.error("Unexpected error after having received onOperationCancelled event",error)})}// eslint-disable-next-line no-prototype-builtins
if(core_constants__WEBPACK_IMPORTED_MODULE_9__[/* GLOBAL_EVENT_STATUS_MAP */ "I"].hasOwnProperty(type)){return callback({guid:guid,status:core_constants__WEBPACK_IMPORTED_MODULE_9__[/* GLOBAL_EVENT_STATUS_MAP */ "I"][type],needsRestart:needsRestart})}throw new Error("Unknown global event: ".concat(type))}if(mozAddonManager&&mozAddonManager.addEventListener){var _iteratorNormalCompletion2=!0,_didIteratorError2=!1,_iteratorError2=void 0;try{for(var _iterator2=core_constants__WEBPACK_IMPORTED_MODULE_9__[/* GLOBAL_EVENTS */ "H"][Symbol.iterator](),_step2,event;!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=!0){event=_step2.value;_log.info("adding event listener for \"".concat(event,"\""));mozAddonManager.addEventListener(event,handleChangeEvent)}}catch(err){_didIteratorError2=!0;_iteratorError2=err}finally{try{if(!_iteratorNormalCompletion2&&null!=_iterator2.return){_iterator2.return()}}finally{if(_didIteratorError2){throw _iteratorError2}}}mozAddonManager.addEventListener(core_constants__WEBPACK_IMPORTED_MODULE_9__[/* ON_OPERATION_CANCELLED_EVENT */ "ob"],handleChangeEvent);_log.info("Global change event listeners have been initialized")}else{_log.info("mozAddonManager.addEventListener not available")}return handleChangeEvent}function enable(guid){var _ref9=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},_ref9$_mozAddonManage=_ref9._mozAddonManager,_mozAddonManager=void 0===_ref9$_mozAddonManage?window.navigator.mozAddonManager:_ref9$_mozAddonManage;return getAddon(guid,{_mozAddonManager:_mozAddonManager}).then(function(addon){core_logger__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].info("Enable ".concat(guid));if(addon.setEnabled){return addon.setEnabled(!0)}throw new Error(core_constants__WEBPACK_IMPORTED_MODULE_9__[/* SET_ENABLE_NOT_AVAILABLE */ "Ab"])})}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(129)(module)))

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LinkBase */
/* unused harmony export mapStateToProps */
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(92);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(24);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(25);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(50);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(53);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(11);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(14);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(190);
/* harmony import */ var core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(10);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(15);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var join_url__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(747);
/* harmony import */ var join_url__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(join_url__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(3);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(47);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(70);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(1956);
/* harmony import */ var ui_components_Icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(115);
function _typeof(obj){"@babel/helpers - typeof";if("function"==typeof Symbol&&"symbol"==typeof Symbol.iterator){_typeof=function(obj){return typeof obj}}else{_typeof=function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}function _extends(){_extends=Object.assign||function(target){for(var i=1,source;i<arguments.length;i++){source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends.apply(this,arguments)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1,source;i<arguments.length;i++){source=null!=arguments[i]?arguments[i]:{};if(i%2){ownKeys(Object(source),!0).forEach(function(key){_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}function _objectWithoutProperties(source,excluded){if(null==source)return{};var target=_objectWithoutPropertiesLoose(source,excluded),key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(0<=excluded.indexOf(key))continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key]}}return target}function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var target={},sourceKeys=Object.keys(source),key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(0<=excluded.indexOf(key))continue;target[key]=source[key]}return target}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0,descriptor;i<props.length;i++){descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1;descriptor.configurable=!0;if("value"in descriptor)descriptor.writable=!0;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call)){return call}return _assertThisInitialized(self)}function _assertThisInitialized(self){if(void 0===self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)};return _getPrototypeOf(o)}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}});if(superClass)_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function(o,p){o.__proto__=p;return o};return _setPrototypeOf(o,p)}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}return obj}var LinkBase=/*#__PURE__*/function(_React$Component){_inherits(LinkBase,_React$Component);function LinkBase(){_classCallCheck(this,LinkBase);return _possibleConstructorReturn(this,_getPrototypeOf(LinkBase).apply(this,arguments))}_createClass(LinkBase,[{key:"urlPrefix",value:function urlPrefix(){var _ref=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},clientApp=_ref.clientApp,lang=_ref.lang,prependClientApp=_ref.prependClientApp,prependLang=_ref.prependLang,prefix=[];if(prependLang){prefix.push(lang)}if(prependClientApp){prefix.push(clientApp)}if(prefix.length){return"/".concat(prefix.join("/"),"/")}// If no prefixes should be applied we'll return null and pass the
// path through to an <a> tag or <Link> component.
return null}},{key:"render",value:function render(){var _this$props=this.props,clientApp=_this$props.clientApp,children=_this$props.children,dispatch=_this$props.dispatch,external=_this$props.external,externalDark=_this$props.externalDark,href=_this$props.href,lang=_this$props.lang,prependClientApp=_this$props.prependClientApp,prependLang=_this$props.prependLang,to=_this$props.to,target=_this$props.target,customProps=_objectWithoutProperties(_this$props,["clientApp","children","dispatch","external","externalDark","href","lang","prependClientApp","prependLang","to","target"]),urlPrefix=this.urlPrefix({clientApp:clientApp,lang:lang,prependClientApp:prependClientApp,prependLang:prependLang}),createLinkDest=function(urlString){return urlPrefix&&!urlString.startsWith(urlPrefix)?join_url__WEBPACK_IMPORTED_MODULE_19___default.a.pathname(urlPrefix,urlString):urlString},needsExternalIcon=externalDark||external,iconName=externalDark?"external-dark":"external";if("string"==typeof href&&"undefined"!=typeof to){throw new Error("Cannot use \"href\" prop and \"to\" prop in the same Link component")}if("undefined"!=typeof to&&("string"==typeof to&&!to.startsWith("/")||to&&to.pathname&&!to.pathname.startsWith("/"))){throw new Error("\"to\" prop cannot contain a relative path; it must start with a \"/\".")}var linkProps=_objectSpread({},customProps,{target:target,rel:"_blank"===target?"noopener noreferrer":customProps.rel});if("string"==typeof href){return react__WEBPACK_IMPORTED_MODULE_20__["createElement"]("a",_extends({},linkProps,{href:createLinkDest(href)}),children,needsExternalIcon?react__WEBPACK_IMPORTED_MODULE_20__["createElement"](ui_components_Icon__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"],{name:iconName}):null)}var linkTo=to;if("string"==typeof to){linkTo=createLinkDest(to)}else if(to&&to.pathname){linkTo=_objectSpread({},to,{pathname:createLinkDest(to.pathname)})}return react__WEBPACK_IMPORTED_MODULE_20__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_24__[/* default */ "a"],_extends({},linkProps,{to:linkTo}),children,needsExternalIcon?react__WEBPACK_IMPORTED_MODULE_20__["createElement"](ui_components_Icon__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"],{name:iconName}):null)}}]);return LinkBase}(react__WEBPACK_IMPORTED_MODULE_20__["Component"]);LinkBase.displayName="LinkBase";_defineProperty(LinkBase,"propTypes",{children:prop_types__WEBPACK_IMPORTED_MODULE_21___default.a.node,className:prop_types__WEBPACK_IMPORTED_MODULE_21___default.a.string,clientApp:prop_types__WEBPACK_IMPORTED_MODULE_21___default.a.string.isRequired,dispatch:prop_types__WEBPACK_IMPORTED_MODULE_21___default.a.func.isRequired,external:prop_types__WEBPACK_IMPORTED_MODULE_21___default.a.bool,externalDark:prop_types__WEBPACK_IMPORTED_MODULE_21___default.a.bool,href:prop_types__WEBPACK_IMPORTED_MODULE_21___default.a.string,lang:prop_types__WEBPACK_IMPORTED_MODULE_21___default.a.string.isRequired,prependClientApp:prop_types__WEBPACK_IMPORTED_MODULE_21___default.a.bool,prependLang:prop_types__WEBPACK_IMPORTED_MODULE_21___default.a.bool,target:prop_types__WEBPACK_IMPORTED_MODULE_21___default.a.string,to:prop_types__WEBPACK_IMPORTED_MODULE_21___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_21___default.a.object,prop_types__WEBPACK_IMPORTED_MODULE_21___default.a.string])});_defineProperty(LinkBase,"defaultProps",{external:!1,externalDark:!1,prependClientApp:!0,prependLang:!0});function mapStateToProps(state){return{clientApp:state.api.clientApp,lang:state.api.lang}}LinkBase.__docgenInfo={description:"",methods:[{name:"urlPrefix",docblock:null,modifiers:[],params:[{name:"{ clientApp, lang, prependClientApp, prependLang }",type:null}],returns:null}],displayName:"LinkBase",props:{external:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},externalDark:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},prependClientApp:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:""},prependLang:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:""},children:{type:{name:"node"},required:!1,description:""},className:{type:{name:"string"},required:!1,description:""},clientApp:{type:{name:"string"},required:!0,description:""},dispatch:{type:{name:"func"},required:!0,description:""},href:{type:{name:"string"},required:!1,description:""},lang:{type:{name:"string"},required:!0,description:""},target:{type:{name:"string"},required:!1,description:""},to:{type:{name:"union",value:[{name:"object"},{name:"string"}]},required:!1,description:""}}};/* harmony default export */ __webpack_exports__["a"] = (Object(redux__WEBPACK_IMPORTED_MODULE_22__[/* compose */ "d"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_23__["connect"])(mapStateToProps))(LinkBase));if("undefined"!=typeof STORYBOOK_REACT_CLASSES){STORYBOOK_REACT_CLASSES["src/amo/components/Link/index.js"]={name:"LinkBase",docgenInfo:LinkBase.__docgenInfo,path:"src/amo/components/Link/index.js"}}

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ui_components_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(115);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1945);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_7__);
function _extends(){_extends=Object.assign||function(target){for(var i=1,source;i<arguments.length;i++){source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var target=_objectWithoutPropertiesLoose(source,excluded),key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(0<=excluded.indexOf(key))continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key]}}return target}function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var target={},sourceKeys=Object.keys(source),key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(0<=excluded.indexOf(key))continue;target[key]=source[key]}return target}var _ref2=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("svg",{className:"IconRecommendedBadge-svg",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("circle",{className:"IconRecommendedBadge-shellPath",cx:"50%",cy:"50%",r:"50%"}),react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("g",{fillRule:"nonzero"},react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("path",{className:"IconRecommendedBadge-iconPath",d:"M15.449999809265137,3.999999523162842 H4.550000190734863 C4.25,3.999999523162842 4,4.219999313354492 4,4.499999523162842 V6.999999523162842 c0,1.100000023841858 0.9800000190734863,2 2.180000066757202,2 h0.05000000074505806 a3.6700000762939453,3.6700000762939453 0 0 0 3.2200000286102295,2.9600000381469727 V13.499999523162842 h1.100000023841858 V11.959999561309814 A3.6700000762939453,3.6700000762939453 0 0 0 13.770000457763672,8.999999523162842 h0.05000000074505806 C15.020000457763672,8.999999523162842 16,8.099998950958252 16,6.999999523162842 V4.499999523162842 c0,-0.2800000011920929 -0.23999999463558197,-0.5 -0.550000011920929,-0.5 zM5.099999904632568,6.999999523162842 V4.999999523162842 h1.100000023841858 v3 c-0.6100000143051147,0 -1.100000023841858,-0.44999998807907104 -1.100000023841858,-1 zm9.819999694824219,0 c0,0.550000011920929 -0.49000000953674316,1 -1.100000023841858,1 V4.999999523162842 h1.100000023841858 v2 zM11.100000381469727,13.999999523162842 H8.899999618530273 c-2.7200000286102295,0 -2.7200000286102295,2 -2.7200000286102295,2 h7.639999866485596 s0,-2 -2.7300000190734863,-2 z"}))),IconRecommendedBadge=function(_ref){var className=_ref.className,size=_ref.size,iconProps=_objectWithoutProperties(_ref,["className","size"]);return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](ui_components_Icon__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"],_extends({},iconProps,{className:classnames__WEBPACK_IMPORTED_MODULE_5___default()("IconRecommendedBadge",className,{"IconRecommendedBadge-large":"large"===size,"IconRecommendedBadge-small":"small"===size}),name:"inline-content"}),_ref2)};IconRecommendedBadge.displayName="IconRecommendedBadge";IconRecommendedBadge.__docgenInfo={description:"",methods:[],displayName:"IconRecommendedBadge",props:{alt:{required:!1,flowType:{name:"$PropertyType",elements:[{name:"IconProps"},{name:"literal",value:"'alt'"}],raw:"$PropertyType<IconProps, 'alt'>"},description:""},className:{required:!1,flowType:{name:"string"},description:""},size:{required:!0,flowType:{name:"union",raw:"'large' | 'small'",elements:[{name:"literal",value:"'large'"},{name:"literal",value:"'small'"}]},description:""}}};/* harmony default export */ __webpack_exports__["a"] = (IconRecommendedBadge);if("undefined"!=typeof STORYBOOK_REACT_CLASSES){STORYBOOK_REACT_CLASSES["src/ui/components/IconRecommendedBadge/index.js"]={name:"IconRecommendedBadge",docgenInfo:IconRecommendedBadge.__docgenInfo,path:"src/ui/components/IconRecommendedBadge/index.js"}}

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(85);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.some.js
var es_array_some = __webpack_require__(177);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(111);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(56);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(101);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__(131);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(113);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.search.js
var es_string_search = __webpack_require__(185);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.starts-with.js
var es_string_starts_with = __webpack_require__(190);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__(187);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/url/url.js
var url = __webpack_require__(75);
var url_default = /*#__PURE__*/__webpack_require__.n(url);

// EXTERNAL MODULE: ./src/core/client/config.js
var config = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/html-entities/index.js
var html_entities = __webpack_require__(737);

// EXTERNAL MODULE: ./node_modules/invariant/browser.js
var browser = __webpack_require__(1);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);

// EXTERNAL MODULE: ./node_modules/qhistory/es/index.js
var es = __webpack_require__(738);

// EXTERNAL MODULE: ./node_modules/qs/lib/index.js
var lib = __webpack_require__(248);

// EXTERNAL MODULE: ./src/core/constants.js
var constants = __webpack_require__(2);

// EXTERNAL MODULE: ./src/core/logger.js
var logger = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/dompurify/dist/purify.js
var purify = __webpack_require__(739);
var purify_default = /*#__PURE__*/__webpack_require__.n(purify);

// CONCATENATED MODULE: ./src/core/browserWindow.js
/* global window *//* harmony default export */ var browserWindow = (window);
// CONCATENATED MODULE: ./src/core/purify.js
/* harmony default export */ var core_purify = (purify_default()(browserWindow));
// EXTERNAL MODULE: ./src/core/reducers/api.js
var api = __webpack_require__(36);

// EXTERNAL MODULE: ./src/core/searchUtils.js
var searchUtils = __webpack_require__(251);

// CONCATENATED MODULE: ./src/core/utils/index.js
/* unused harmony export getClientConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return convertBoolean; });
/* unused harmony export getClientApp */
/* unused harmony export isValidClientApp */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return sanitizeHTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return nl2br; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return sanitizeUserHTML; });
/* unused harmony export isAddonAuthor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return isAllowedOrigin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addQueryParams; });
/* unused harmony export apiAddonTypeIsValid */
/* unused harmony export apiAddonType */
/* unused harmony export visibleAddonType */
/* unused harmony export removeProtocolFromURL */
/* unused harmony export isValidLocaleUrlException */
/* unused harmony export isValidClientAppUrlException */
/* unused harmony export isValidTrailingSlashUrlException */
/* unused harmony export safePromise */
/* unused harmony export trimAndAddProtocolToUrl */
/* unused harmony export addonHasVersionHistory */
/* unused harmony export decodeHtmlEntities */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return normalizeFileNameId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getDisplayName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addQueryParamsToHistory; });
/* unused harmony export userAgentOSToPlatform */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return findFileForPlatform; });
/* unused harmony export getCategoryResultsQuery */
var _userAgentOSToPlatfor;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1,source;i<arguments.length;i++){source=null!=arguments[i]?arguments[i]:{};if(i%2){ownKeys(Object(source),!0).forEach(function(key){_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}return obj}/* eslint-disable react/prop-types */function getClientConfig(_config){var clientConfig={},_iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0;try{for(var _iterator=_config.get("clientConfigKeys")[Symbol.iterator](),_step,key;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=!0){key=_step.value;clientConfig[key]=_config.get(key)}}catch(err){_didIteratorError=!0;_iteratorError=err}finally{try{if(!_iteratorNormalCompletion&&null!=_iterator.return){_iterator.return()}}finally{if(_didIteratorError){throw _iteratorError}}}return clientConfig}function convertBoolean(value){switch(value){case!0:case 1:case"1":case"true":return!0;default:return!1;}}/*
 * This is a very simplistic check of the user-agent string in order to redirect to
 * the right set of AMO data.
 *
 * More complete UA detection for compatibility will take place elsewhere.
 *
 */function getClientApp(userAgentString){// We are going to return android as the application if it's *any* android browser.
// whereas the previous behaviour was to only return 'android' for FF Android.
// This way we are showing more relevant content, and if we prompt for the user to download
// firefox we can prompt them to download Firefox for Android.
if(/android/i.test(userAgentString)){return"android"}return"firefox"}function isValidClientApp(value){var _ref=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},_ref$_config=_ref._config,_config=void 0===_ref$_config?config["a" /* default */]:_ref$_config;return _config.get("validClientApplications").includes(value)}function sanitizeHTML(text){var allowTags=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[],_purify=2<arguments.length&&arguments[2]!==void 0?arguments[2]:core_purify;// TODO: Accept tags to allow and run through dom-purify.
return{__html:_purify.sanitize(text,{ALLOWED_TAGS:allowTags})}}// Convert new lines to HTML breaks.
function nl2br(text){return(text||"").replace(/(\r\n|\r|\n)(?!<\/?(li|ul|ol)>)/g,"<br />")}/*
 * Sanitizes user inputted HTML, allowing some tags.
 *
 * This also converts new lines to breaks (<br />) as a convenience when
 * users did not write entirely in HTML.
 *
 * This is meant to display things like an add-on's description or version
 * release notes. The allowed tags are meant to match what you see in the
 * Developer Hub when you hover over the *Some HTML Supported* link under
 * the textarea field.
 */function sanitizeUserHTML(text){return sanitizeHTML(nl2br(text),["a","abbr","acronym","b","blockquote","br","code","em","i","li","ol","strong","ul"])}function isAddonAuthor(_ref2){var addon=_ref2.addon,userId=_ref2.userId;if(!addon||!addon.authors||!addon.authors.length||!userId){return!1}return addon.authors.some(function(author){return author.id===userId})}function isAllowedOrigin(urlString){var _ref3=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},_ref3$allowedOrigins=_ref3.allowedOrigins,allowedOrigins=void 0===_ref3$allowedOrigins?[config["a" /* default */].get("amoCDN")]:_ref3$allowedOrigins,parsedURL;try{parsedURL=url_default.a.parse(urlString)}catch(e){logger["a" /* default */].error("invalid urlString provided to isAllowedOrigin: ".concat(urlString));return!1}return allowedOrigins.includes("".concat(parsedURL.protocol,"//").concat(parsedURL.host))}/*
 * Returns a new URL with query params appended to `urlString`.
 *
 * `urlString` can be a relative or absolute URL.
 */function addQueryParams(urlString){var queryParams=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},urlObj=url_default.a.parse(urlString,!0);// Clear search, since query object will only be used if search
// property doesn't exist.
urlObj.search=void 0;urlObj.query=_objectSpread({},urlObj.query,{},queryParams);return url_default.a.format(urlObj)}function apiAddonTypeIsValid(addonType){return Object.prototype.hasOwnProperty.call(constants["m" /* API_ADDON_TYPES_MAPPING */],addonType)}function apiAddonType(addonType){if(!apiAddonTypeIsValid(addonType)){throw new Error("\"".concat(addonType,"\" not found in API_ADDON_TYPES_MAPPING"))}return constants["m" /* API_ADDON_TYPES_MAPPING */][addonType]}function visibleAddonType(addonType){if(!Object.prototype.hasOwnProperty.call(constants["Xb" /* VISIBLE_ADDON_TYPES_MAPPING */],addonType)){throw new Error("\"".concat(addonType,"\" not found in VISIBLE_ADDON_TYPES_MAPPING"))}return constants["Xb" /* VISIBLE_ADDON_TYPES_MAPPING */][addonType]}function removeProtocolFromURL(urlWithProtocol){browser_default()(urlWithProtocol,"urlWithProtocol is required");// `//test.com` is a valid, protocol-relative URL which we'll allow.
return urlWithProtocol.replace(/^(https?:|)\/\//,"")}function isValidLocaleUrlException(value){var _ref4=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},_ref4$_config=_ref4._config,_config=void 0===_ref4$_config?config["a" /* default */]:_ref4$_config;return _config.get("validLocaleUrlExceptions").includes(value)}function isValidClientAppUrlException(value){var _ref5=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},_ref5$_config=_ref5._config,_config=void 0===_ref5$_config?config["a" /* default */]:_ref5$_config;return _config.get("validClientAppUrlExceptions").includes(value)}function isValidTrailingSlashUrlException(value){var _ref6=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},_ref6$_config=_ref6._config,_config=void 0===_ref6$_config?config["a" /* default */]:_ref6$_config;return _config.get("validTrailingSlashUrlExceptions").includes(value)}/*
 * Make sure a callback returns a rejected promise instead of throwing an error.
 *
 * If the callback throws an error, a rejected promise will be returned
 * instead. If the callback runs without an error, its return value is not
 * altered. In other words, it may or may not return a promise and that's ok.
 */var safePromise=function(callback){return function(){try{return callback.apply(void 0,arguments)}catch(error){return Promise.reject(error)}}};function trimAndAddProtocolToUrl(urlToCheck){var urlToReturn=urlToCheck?urlToCheck.trim():null;if(urlToReturn&&!urlToReturn.match(/^https?:\/\//)){urlToReturn="http://".concat(urlToReturn)}return urlToReturn}function addonHasVersionHistory(addon){if(!addon){throw new Error("addon is required")}return![constants["i" /* ADDON_TYPE_OPENSEARCH */]].includes(addon.type)}/*
 * Decodes HTML entities into their respective symbols.
 */var decodeHtmlEntities=function(string){var entities=new html_entities["AllHtmlEntities"];return entities.decode(string)};/*
 * Return an ID for a filename.
 *
 * This will normalize the representation of a filename on both client and
 * server. The result may not be a valid filename.
 *
 * We need this because the babel polyfill for `__filename` on the client
 * returns a relative path but `__filename` on the server returns an
 * absolute path.
 */var normalizeFileNameId=function(filename){var fileId=filename;if(!fileId.startsWith("src")){fileId=fileId.replace(/^.*src/,"src")}return fileId};var getDisplayName=function(component){return component.displayName||component.name||"Component"};var addQueryParamsToHistory=function(_ref7){var history=_ref7.history,_ref7$_parse=_ref7._parse,_parse=void 0===_ref7$_parse?lib["parse"]:_ref7$_parse,_ref7$_stringify=_ref7._stringify,_stringify=void 0===_ref7$_stringify?lib["stringify"]:_ref7$_stringify;return Object(es["a" /* default */])(history,_stringify,_parse)};var userAgentOSToPlatform=(_userAgentOSToPlatfor={},_defineProperty(_userAgentOSToPlatfor,api["b" /* USER_AGENT_OS_ANDROID */].toLowerCase(),constants["qb" /* OS_ANDROID */]),_defineProperty(_userAgentOSToPlatfor,api["x" /* USER_AGENT_OS_MAC */].toLowerCase(),constants["sb" /* OS_MAC */]),_defineProperty(_userAgentOSToPlatfor,api["z" /* USER_AGENT_OS_WINDOWS */].toLowerCase(),constants["tb" /* OS_WINDOWS */]),_defineProperty(_userAgentOSToPlatfor,api["c" /* USER_AGENT_OS_BSD_DRAGONFLY */].toLowerCase(),constants["rb" /* OS_LINUX */]),_defineProperty(_userAgentOSToPlatfor,api["d" /* USER_AGENT_OS_BSD_FREEBSD */].toLowerCase(),constants["rb" /* OS_LINUX */]),_defineProperty(_userAgentOSToPlatfor,api["e" /* USER_AGENT_OS_BSD_NETBSD */].toLowerCase(),constants["rb" /* OS_LINUX */]),_defineProperty(_userAgentOSToPlatfor,api["f" /* USER_AGENT_OS_BSD_OPENBSD */].toLowerCase(),constants["rb" /* OS_LINUX */]),_defineProperty(_userAgentOSToPlatfor,api["g" /* USER_AGENT_OS_BSD_PC */].toLowerCase(),constants["rb" /* OS_LINUX */]),_defineProperty(_userAgentOSToPlatfor,api["i" /* USER_AGENT_OS_LINUX */].toLowerCase(),constants["rb" /* OS_LINUX */]),_defineProperty(_userAgentOSToPlatfor,api["j" /* USER_AGENT_OS_LINUX_ARCH */].toLowerCase(),constants["rb" /* OS_LINUX */]),_defineProperty(_userAgentOSToPlatfor,api["k" /* USER_AGENT_OS_LINUX_CENTOS */].toLowerCase(),constants["rb" /* OS_LINUX */]),_defineProperty(_userAgentOSToPlatfor,api["l" /* USER_AGENT_OS_LINUX_DEBIAN */].toLowerCase(),constants["rb" /* OS_LINUX */]),_defineProperty(_userAgentOSToPlatfor,api["m" /* USER_AGENT_OS_LINUX_FEDORA */].toLowerCase(),constants["rb" /* OS_LINUX */]),_defineProperty(_userAgentOSToPlatfor,api["n" /* USER_AGENT_OS_LINUX_GENTOO */].toLowerCase(),constants["rb" /* OS_LINUX */]),_defineProperty(_userAgentOSToPlatfor,api["o" /* USER_AGENT_OS_LINUX_GNU */].toLowerCase(),constants["rb" /* OS_LINUX */]),_defineProperty(_userAgentOSToPlatfor,api["p" /* USER_AGENT_OS_LINUX_LINPUS */].toLowerCase(),constants["rb" /* OS_LINUX */]),_defineProperty(_userAgentOSToPlatfor,api["q" /* USER_AGENT_OS_LINUX_PC */].toLowerCase(),constants["rb" /* OS_LINUX */]),_defineProperty(_userAgentOSToPlatfor,api["r" /* USER_AGENT_OS_LINUX_REDHAT */].toLowerCase(),constants["rb" /* OS_LINUX */]),_defineProperty(_userAgentOSToPlatfor,api["s" /* USER_AGENT_OS_LINUX_SLACKWARE */].toLowerCase(),constants["rb" /* OS_LINUX */]),_defineProperty(_userAgentOSToPlatfor,api["t" /* USER_AGENT_OS_LINUX_SUSE */].toLowerCase(),constants["rb" /* OS_LINUX */]),_defineProperty(_userAgentOSToPlatfor,api["u" /* USER_AGENT_OS_LINUX_UBUNTU */].toLowerCase(),constants["rb" /* OS_LINUX */]),_defineProperty(_userAgentOSToPlatfor,api["v" /* USER_AGENT_OS_LINUX_VECTOR */].toLowerCase(),constants["rb" /* OS_LINUX */]),_defineProperty(_userAgentOSToPlatfor,api["w" /* USER_AGENT_OS_LINUX_ZENWALK */].toLowerCase(),constants["rb" /* OS_LINUX */]),_defineProperty(_userAgentOSToPlatfor,api["y" /* USER_AGENT_OS_UNIX */].toLowerCase(),constants["rb" /* OS_LINUX */]),_userAgentOSToPlatfor);var findFileForPlatform=function(_ref8){var userAgentInfo=_ref8.userAgentInfo,platformFiles=_ref8.platformFiles;browser_default()(userAgentInfo,"userAgentInfo is required");browser_default()(platformFiles,"platformFiles is required");var agentOsName=userAgentInfo.os.name&&userAgentInfo.os.name.toLowerCase(),platform=agentOsName&&userAgentOSToPlatform[agentOsName];return platform&&platformFiles[platform]||platformFiles[constants["pb" /* OS_ALL */]]};var getCategoryResultsQuery=function(_ref9){var addonType=_ref9.addonType,slug=_ref9.slug;return Object(searchUtils["b" /* convertFiltersToQueryParams */])({addonType:addonType,category:slug,sort:"".concat(constants["xb" /* SEARCH_SORT_RECOMMENDED */],",").concat(constants["wb" /* SEARCH_SORT_POPULAR */])})};

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return USER_AGENT_BROWSER_FIREFOX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return USER_AGENT_OS_ANDROID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return USER_AGENT_OS_BSD_DRAGONFLY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return USER_AGENT_OS_BSD_FREEBSD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return USER_AGENT_OS_BSD_NETBSD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return USER_AGENT_OS_BSD_OPENBSD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return USER_AGENT_OS_BSD_PC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return USER_AGENT_OS_IOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return USER_AGENT_OS_LINUX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return USER_AGENT_OS_LINUX_ARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return USER_AGENT_OS_LINUX_CENTOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return USER_AGENT_OS_LINUX_DEBIAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return USER_AGENT_OS_LINUX_FEDORA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return USER_AGENT_OS_LINUX_GENTOO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return USER_AGENT_OS_LINUX_GNU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return USER_AGENT_OS_LINUX_LINPUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return USER_AGENT_OS_LINUX_PC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return USER_AGENT_OS_LINUX_REDHAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return USER_AGENT_OS_LINUX_SLACKWARE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return USER_AGENT_OS_LINUX_SUSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return USER_AGENT_OS_LINUX_UBUNTU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return USER_AGENT_OS_LINUX_VECTOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return USER_AGENT_OS_LINUX_ZENWALK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return USER_AGENT_OS_MAC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return USER_AGENT_OS_UNIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return USER_AGENT_OS_WINDOWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return initialApiState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return api; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ua_parser_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(332);
/* harmony import */ var ua_parser_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ua_parser_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var amo_reducers_users__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(201);
/* harmony import */ var core_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2);
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1,source;i<arguments.length;i++){source=null!=arguments[i]?arguments[i]:{};if(i%2){ownKeys(Object(source),!0).forEach(function(key){_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}return obj}var USER_AGENT_BROWSER_FIREFOX="Firefox";var USER_AGENT_OS_ANDROID="Android";var USER_AGENT_OS_BSD_DRAGONFLY="DragonFly";var USER_AGENT_OS_BSD_FREEBSD="FreeBSD";var USER_AGENT_OS_BSD_NETBSD="NetBSD";var USER_AGENT_OS_BSD_OPENBSD="OpenBSD";var USER_AGENT_OS_BSD_PC="PC-BSD";var USER_AGENT_OS_IOS="iOS";var USER_AGENT_OS_LINUX="Linux";var USER_AGENT_OS_LINUX_ARCH="Arch";var USER_AGENT_OS_LINUX_CENTOS="CentOS";var USER_AGENT_OS_LINUX_DEBIAN="Debian";var USER_AGENT_OS_LINUX_FEDORA="Fedora";var USER_AGENT_OS_LINUX_GENTOO="Gentoo";var USER_AGENT_OS_LINUX_GNU="GNU";var USER_AGENT_OS_LINUX_LINPUS="Linpus";var USER_AGENT_OS_LINUX_PC="PCLinuxOS";var USER_AGENT_OS_LINUX_REDHAT="RedHat";var USER_AGENT_OS_LINUX_SLACKWARE="Slackware";var USER_AGENT_OS_LINUX_SUSE="SUSE";var USER_AGENT_OS_LINUX_UBUNTU="Ubuntu";var USER_AGENT_OS_LINUX_VECTOR="VectorLinux";var USER_AGENT_OS_LINUX_ZENWALK="Zenwalk";var USER_AGENT_OS_MAC="Mac OS";var USER_AGENT_OS_UNIX="UNIX";var USER_AGENT_OS_WINDOWS="Windows";// For details, see https://github.com/faisalman/ua-parser-js
var initialApiState={clientApp:null,lang:null,requestId:null,token:null,userAgent:null,userAgentInfo:{browser:{},os:{}}};function api(){var state=0<arguments.length&&arguments[0]!==void 0?arguments[0]:initialApiState,action=1<arguments.length?arguments[1]:void 0;switch(action.type){case core_constants__WEBPACK_IMPORTED_MODULE_9__[/* SET_AUTH_TOKEN */ "yb"]:return _objectSpread({},state,{token:action.payload.token});case core_constants__WEBPACK_IMPORTED_MODULE_9__[/* SET_LANG */ "Db"]:return _objectSpread({},state,{lang:action.payload.lang});case core_constants__WEBPACK_IMPORTED_MODULE_9__[/* SET_CLIENT_APP */ "zb"]:return _objectSpread({},state,{clientApp:action.payload.clientApp});case core_constants__WEBPACK_IMPORTED_MODULE_9__[/* SET_REQUEST_ID */ "Eb"]:return _objectSpread({},state,{requestId:action.payload.requestId});case core_constants__WEBPACK_IMPORTED_MODULE_9__[/* SET_USER_AGENT */ "Fb"]:{var _UAParser=ua_parser_js__WEBPACK_IMPORTED_MODULE_7___default()(action.payload.userAgent),browser=_UAParser.browser,os=_UAParser.os;return _objectSpread({},state,{userAgent:action.payload.userAgent,userAgentInfo:{browser:browser,os:os}})}case amo_reducers_users__WEBPACK_IMPORTED_MODULE_8__[/* LOG_OUT_USER */ "a"]:return _objectSpread({},state,{token:null});default:return state;}}

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CREATE_ADDON_REVIEW */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return SHOW_EDIT_REVIEW_FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return SHOW_REPLY_TO_REVIEW_FORM; });
/* unused harmony export FETCH_GROUPED_RATINGS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return FETCH_REVIEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return FETCH_REVIEW_PERMISSIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return FETCH_REVIEWS; });
/* unused harmony export FETCH_LATEST_USER_REVIEW */
/* unused harmony export FETCH_USER_REVIEWS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return FLASH_REVIEW_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return HIDE_FLASHED_REVIEW_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return HIDE_EDIT_REVIEW_FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return HIDE_REPLY_TO_REVIEW_FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return SET_ADDON_REVIEWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return SET_GROUPED_RATINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return SET_INTERNAL_REVIEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return SET_USER_REVIEWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return SET_REVIEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return SET_LATEST_REVIEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return SET_REVIEW_PERMISSIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return SET_REVIEW_REPLY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return SET_REVIEW_WAS_FLAGGED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return SEND_REPLY_TO_REVIEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return SEND_REVIEW_FLAG; });
/* unused harmony export UPDATE_ADDON_REVIEW */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DELETE_ADDON_REVIEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BEGIN_DELETE_ADDON_REVIEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CANCEL_DELETE_ADDON_REVIEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return UNLOAD_ADDON_REVIEWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return UPDATE_RATING_COUNTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return createInternalReview; });
/* unused harmony export setReview */
/* unused harmony export setReviewReply */
/* unused harmony export fetchReview */
/* unused harmony export fetchReviews */
/* unused harmony export fetchReviewPermissions */
/* unused harmony export setReviewPermissions */
/* unused harmony export fetchGroupedRatings */
/* unused harmony export setGroupedRatings */
/* unused harmony export updateRatingCounts */
/* unused harmony export fetchLatestUserReview */
/* unused harmony export fetchUserReviews */
/* unused harmony export setUserReviews */
/* unused harmony export setInternalReview */
/* unused harmony export setAddonReviews */
/* unused harmony export sendReplyToReview */
/* unused harmony export reviewIdAction */
/* unused harmony export showEditReviewForm */
/* unused harmony export showReplyToReviewForm */
/* unused harmony export hideEditReviewForm */
/* unused harmony export hideReplyToReviewForm */
/* unused harmony export flagReview */
/* unused harmony export setReviewWasFlagged */
/* unused harmony export setLatestReview */
/* unused harmony export createAddonReview */
/* unused harmony export updateAddonReview */
/* unused harmony export ABORTED */
/* unused harmony export SAVED_RATING */
/* unused harmony export SAVED_REVIEW */
/* unused harmony export STARTED_SAVE_RATING */
/* unused harmony export STARTED_SAVE_REVIEW */
/* unused harmony export flashReviewMessage */
/* unused harmony export hideFlashedReviewMessage */
/* unused harmony export deleteAddonReview */
/* unused harmony export beginDeleteAddonReview */
/* unused harmony export cancelDeleteAddonReview */
/* unused harmony export unloadAddonReviews */
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_1__);
var CREATE_ADDON_REVIEW="CREATE_ADDON_REVIEW";var SHOW_EDIT_REVIEW_FORM="SHOW_EDIT_REVIEW_FORM";var SHOW_REPLY_TO_REVIEW_FORM="SHOW_REPLY_TO_REVIEW_FORM";var FETCH_GROUPED_RATINGS="FETCH_GROUPED_RATINGS";var FETCH_REVIEW="FETCH_REVIEW";var FETCH_REVIEW_PERMISSIONS="FETCH_REVIEW_PERMISSIONS";var FETCH_REVIEWS="FETCH_REVIEWS";var FETCH_LATEST_USER_REVIEW="FETCH_LATEST_USER_REVIEW";var FETCH_USER_REVIEWS="FETCH_USER_REVIEWS";var FLASH_REVIEW_MESSAGE="FLASH_REVIEW_MESSAGE";var HIDE_FLASHED_REVIEW_MESSAGE="HIDE_FLASHED_REVIEW_MESSAGE";var HIDE_EDIT_REVIEW_FORM="HIDE_EDIT_REVIEW_FORM";var HIDE_REPLY_TO_REVIEW_FORM="HIDE_REPLY_TO_REVIEW_FORM";var SET_ADDON_REVIEWS="SET_ADDON_REVIEWS";var SET_GROUPED_RATINGS="SET_GROUPED_RATINGS";var SET_INTERNAL_REVIEW="SET_INTERNAL_REVIEW";var SET_USER_REVIEWS="SET_USER_REVIEWS";var SET_REVIEW="SET_REVIEW";var SET_LATEST_REVIEW="SET_LATEST_REVIEW";var SET_REVIEW_PERMISSIONS="SET_REVIEW_PERMISSIONS";var SET_REVIEW_REPLY="SET_REVIEW_REPLY";var SET_REVIEW_WAS_FLAGGED="SET_REVIEW_WAS_FLAGGED";var SEND_REPLY_TO_REVIEW="SEND_REPLY_TO_REVIEW";var SEND_REVIEW_FLAG="SEND_REVIEW_FLAG";var UPDATE_ADDON_REVIEW="UPDATE_ADDON_REVIEW";var DELETE_ADDON_REVIEW="DELETE_ADDON_REVIEW";var BEGIN_DELETE_ADDON_REVIEW="BEGIN_DELETE_ADDON_REVIEW";var CANCEL_DELETE_ADDON_REVIEW="CANCEL_DELETE_ADDON_REVIEW";var UNLOAD_ADDON_REVIEWS="UNLOAD_ADDON_REVIEWS";var UPDATE_RATING_COUNTS="UPDATE_RATING_COUNTS";function createInternalReview(review){return{reviewAddon:{iconUrl:review.addon.icon_url,id:review.addon.id,name:review.addon.name,slug:review.addon.slug},body:review.body,created:review.created,id:review.id,isDeleted:review.is_deleted,isDeveloperReply:review.is_developer_reply,isLatest:review.is_latest,score:review.score||null,reply:review.reply?createInternalReview(review.reply):null,userId:review.user.id,userName:review.user.name,userUrl:review.user.url,versionId:review.version?review.version.id:null}}var setReview=function(review){invariant__WEBPACK_IMPORTED_MODULE_1___default()(review,"review is required");return{type:SET_REVIEW,payload:review}};var setReviewReply=function(){var _ref=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},originalReviewId=_ref.originalReviewId,reply=_ref.reply;if(!originalReviewId){throw new Error("The originalReviewId parameter is required")}if(!reply){throw new Error("The reply parameter is required")}return{type:SET_REVIEW_REPLY,payload:{originalReviewId:originalReviewId,reply:reply}}};function fetchReview(_ref2){var errorHandlerId=_ref2.errorHandlerId,reviewId=_ref2.reviewId;invariant__WEBPACK_IMPORTED_MODULE_1___default()(errorHandlerId,"errorHandlerId is required");invariant__WEBPACK_IMPORTED_MODULE_1___default()(reviewId,"reviewId is required");return{type:FETCH_REVIEW,payload:{errorHandlerId:errorHandlerId,reviewId:reviewId}}}function fetchReviews(_ref3){var addonSlug=_ref3.addonSlug,errorHandlerId=_ref3.errorHandlerId,_ref3$page=_ref3.page,page=void 0===_ref3$page?"1":_ref3$page,score=_ref3.score;if(!errorHandlerId){throw new Error("errorHandlerId cannot be empty")}if(!addonSlug){throw new Error("addonSlug cannot be empty")}return{type:FETCH_REVIEWS,payload:{addonSlug:addonSlug,errorHandlerId:errorHandlerId,page:page,score:score}}}function fetchReviewPermissions(_ref4){var errorHandlerId=_ref4.errorHandlerId,addonId=_ref4.addonId,userId=_ref4.userId;invariant__WEBPACK_IMPORTED_MODULE_1___default()(errorHandlerId,"errorHandlerId is required");invariant__WEBPACK_IMPORTED_MODULE_1___default()(addonId,"addonId is required");invariant__WEBPACK_IMPORTED_MODULE_1___default()(userId,"userId is required");return{type:FETCH_REVIEW_PERMISSIONS,payload:{errorHandlerId:errorHandlerId,addonId:addonId,userId:userId}}}function setReviewPermissions(_ref5){var addonId=_ref5.addonId,userId=_ref5.userId,canReplyToReviews=_ref5.canReplyToReviews;invariant__WEBPACK_IMPORTED_MODULE_1___default()(addonId,"addonId is required");invariant__WEBPACK_IMPORTED_MODULE_1___default()(userId,"userId is required");invariant__WEBPACK_IMPORTED_MODULE_1___default()("undefined"!=typeof canReplyToReviews,"canReplyToReviews is required");return{type:SET_REVIEW_PERMISSIONS,payload:{addonId:addonId,userId:userId,canReplyToReviews:canReplyToReviews}}}function fetchGroupedRatings(_ref6){var addonId=_ref6.addonId,errorHandlerId=_ref6.errorHandlerId;invariant__WEBPACK_IMPORTED_MODULE_1___default()(addonId,"addonId is required");invariant__WEBPACK_IMPORTED_MODULE_1___default()(errorHandlerId,"errorHandlerId is required");return{type:FETCH_GROUPED_RATINGS,payload:{addonId:addonId,errorHandlerId:errorHandlerId}}}function setGroupedRatings(_ref7){var addonId=_ref7.addonId,grouping=_ref7.grouping;invariant__WEBPACK_IMPORTED_MODULE_1___default()(addonId,"addonId is required");invariant__WEBPACK_IMPORTED_MODULE_1___default()(grouping,"grouping is required");return{type:SET_GROUPED_RATINGS,payload:{addonId:addonId,grouping:grouping}}}function updateRatingCounts(_ref8){var addonId=_ref8.addonId,oldReview=_ref8.oldReview,newReview=_ref8.newReview;invariant__WEBPACK_IMPORTED_MODULE_1___default()(addonId,"addonId is required");invariant__WEBPACK_IMPORTED_MODULE_1___default()(newReview,"newReview is required");return{type:UPDATE_RATING_COUNTS,payload:{addonId:addonId,oldReview:oldReview,newReview:newReview}}}function fetchLatestUserReview(_ref9){var addonId=_ref9.addonId,errorHandlerId=_ref9.errorHandlerId,userId=_ref9.userId;invariant__WEBPACK_IMPORTED_MODULE_1___default()(addonId,"addonId is required");invariant__WEBPACK_IMPORTED_MODULE_1___default()(errorHandlerId,"errorHandlerId is required");invariant__WEBPACK_IMPORTED_MODULE_1___default()(userId,"userId is required");return{type:FETCH_LATEST_USER_REVIEW,payload:{addonId:addonId,errorHandlerId:errorHandlerId,userId:userId}}}function fetchUserReviews(_ref10){var errorHandlerId=_ref10.errorHandlerId,userId=_ref10.userId,_ref10$page=_ref10.page,page=void 0===_ref10$page?"1":_ref10$page;invariant__WEBPACK_IMPORTED_MODULE_1___default()(errorHandlerId,"errorHandlerId is required");invariant__WEBPACK_IMPORTED_MODULE_1___default()(userId,"userId is required");return{type:FETCH_USER_REVIEWS,payload:{errorHandlerId:errorHandlerId,page:page,userId:userId}}}var setUserReviews=function(_ref11){var pageSize=_ref11.pageSize,reviewCount=_ref11.reviewCount,reviews=_ref11.reviews,userId=_ref11.userId;invariant__WEBPACK_IMPORTED_MODULE_1___default()(pageSize,"pageSize is required");invariant__WEBPACK_IMPORTED_MODULE_1___default()("number"==typeof reviewCount,"reviewCount is required");invariant__WEBPACK_IMPORTED_MODULE_1___default()(Array.isArray(reviews),"reviews are required and must be an array");invariant__WEBPACK_IMPORTED_MODULE_1___default()(userId,"userId is required");return{type:SET_USER_REVIEWS,payload:{pageSize:pageSize,reviewCount:reviewCount,reviews:reviews,userId:userId}}};var setInternalReview=function(review){if(!review){throw new Error("review cannot be empty")}return{type:SET_INTERNAL_REVIEW,payload:review}};var setAddonReviews=function(_ref12){var addonSlug=_ref12.addonSlug,page=_ref12.page,pageSize=_ref12.pageSize,reviewCount=_ref12.reviewCount,reviews=_ref12.reviews,score=_ref12.score;invariant__WEBPACK_IMPORTED_MODULE_1___default()(addonSlug,"addonSlug is required");invariant__WEBPACK_IMPORTED_MODULE_1___default()(page,"page is required");invariant__WEBPACK_IMPORTED_MODULE_1___default()(pageSize,"pageSize is required");invariant__WEBPACK_IMPORTED_MODULE_1___default()("number"==typeof reviewCount,"reviewCount is required");invariant__WEBPACK_IMPORTED_MODULE_1___default()(Array.isArray(reviews),"reviews is required and must be an array");invariant__WEBPACK_IMPORTED_MODULE_1___default()("undefined"!=typeof score,"score is required");return{type:SET_ADDON_REVIEWS,payload:{addonSlug:addonSlug,page:page,pageSize:pageSize,reviewCount:reviewCount,reviews:reviews,score:score}}};var sendReplyToReview=function(){var _ref13=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},errorHandlerId=_ref13.errorHandlerId,originalReviewId=_ref13.originalReviewId,body=_ref13.body,title=_ref13.title;if(!errorHandlerId){throw new Error("The errorHandlerId parameter is required")}if(!originalReviewId){throw new Error("The originalReviewId parameter is required")}if(!body){throw new Error("The body parameter is required")}return{type:SEND_REPLY_TO_REVIEW,payload:{errorHandlerId:errorHandlerId,originalReviewId:originalReviewId,body:body,title:title}}};var reviewIdAction=function(){var _ref14=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},reviewId=_ref14.reviewId,type=_ref14.type;if(!reviewId){throw new Error("The reviewId parameter is required")}return{type:type,payload:{reviewId:reviewId}}};var showEditReviewForm=function(){var _ref15=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},reviewId=_ref15.reviewId;return reviewIdAction({type:SHOW_EDIT_REVIEW_FORM,reviewId:reviewId})};var showReplyToReviewForm=function(){var _ref16=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},reviewId=_ref16.reviewId;return reviewIdAction({type:SHOW_REPLY_TO_REVIEW_FORM,reviewId:reviewId})};var hideEditReviewForm=function(){var _ref17=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},reviewId=_ref17.reviewId;return reviewIdAction({type:HIDE_EDIT_REVIEW_FORM,reviewId:reviewId})};var hideReplyToReviewForm=function(){var _ref18=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},reviewId=_ref18.reviewId;return reviewIdAction({type:HIDE_REPLY_TO_REVIEW_FORM,reviewId:reviewId})};var flagReview=function(){var _ref19=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},errorHandlerId=_ref19.errorHandlerId,note=_ref19.note,reason=_ref19.reason,reviewId=_ref19.reviewId;if(!errorHandlerId){throw new Error("The errorHandlerId parameter is required")}if(!reason){throw new Error("The reason parameter is required")}if(!reviewId){throw new Error("The reviewId parameter is required")}return{type:SEND_REVIEW_FLAG,payload:{errorHandlerId:errorHandlerId,note:note,reason:reason,reviewId:reviewId}}};var setReviewWasFlagged=function(){var _ref20=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},reason=_ref20.reason,reviewId=_ref20.reviewId;if(!reason){throw new Error("The reason parameter is required")}if(!reviewId){throw new Error("The reviewId parameter is required")}return{type:SET_REVIEW_WAS_FLAGGED,payload:{reason:reason,reviewId:reviewId}}};var setLatestReview=function(_ref21){var addonId=_ref21.addonId,review=_ref21.review,userId=_ref21.userId;invariant__WEBPACK_IMPORTED_MODULE_1___default()(addonId,"addonId is required");invariant__WEBPACK_IMPORTED_MODULE_1___default()(review!==void 0,"review is required");invariant__WEBPACK_IMPORTED_MODULE_1___default()(userId,"userId is required");return{type:SET_LATEST_REVIEW,payload:{addonId:addonId,review:review,userId:userId}}};var createAddonReview=function(_ref22){var addonId=_ref22.addonId,body=_ref22.body,errorHandlerId=_ref22.errorHandlerId,score=_ref22.score,versionId=_ref22.versionId;invariant__WEBPACK_IMPORTED_MODULE_1___default()(addonId,"addonId is required");invariant__WEBPACK_IMPORTED_MODULE_1___default()(errorHandlerId,"errorHandlerId is required");invariant__WEBPACK_IMPORTED_MODULE_1___default()(score,"score is required");invariant__WEBPACK_IMPORTED_MODULE_1___default()(versionId,"versionId is required");return{type:CREATE_ADDON_REVIEW,payload:{addonId:addonId,body:body,errorHandlerId:errorHandlerId,score:score,versionId:versionId}}};var updateAddonReview=function(_ref23){var body=_ref23.body,errorHandlerId=_ref23.errorHandlerId,score=_ref23.score,reviewId=_ref23.reviewId;invariant__WEBPACK_IMPORTED_MODULE_1___default()(errorHandlerId,"errorHandlerId is required");invariant__WEBPACK_IMPORTED_MODULE_1___default()(reviewId,"reviewId is required");return{type:UPDATE_ADDON_REVIEW,payload:{body:body,errorHandlerId:errorHandlerId,score:score,reviewId:reviewId}}};var ABORTED="aborted";var SAVED_RATING="saved-rating";var SAVED_REVIEW="saved-review";var STARTED_SAVE_RATING="started-save-rating";var STARTED_SAVE_REVIEW="started-save-review";var flashReviewMessage=function(message){invariant__WEBPACK_IMPORTED_MODULE_1___default()(message,"message is required");return{type:FLASH_REVIEW_MESSAGE,payload:{message:message}}};var hideFlashedReviewMessage=function(){return{type:HIDE_FLASHED_REVIEW_MESSAGE}};var deleteAddonReview=function(_ref24){var addonId=_ref24.addonId,errorHandlerId=_ref24.errorHandlerId,isReplyToReviewId=_ref24.isReplyToReviewId,reviewId=_ref24.reviewId;invariant__WEBPACK_IMPORTED_MODULE_1___default()(addonId,"addonId is required");invariant__WEBPACK_IMPORTED_MODULE_1___default()(errorHandlerId,"errorHandlerId is required");invariant__WEBPACK_IMPORTED_MODULE_1___default()(reviewId,"reviewId is required");return{type:DELETE_ADDON_REVIEW,payload:{addonId:addonId,errorHandlerId:errorHandlerId,isReplyToReviewId:isReplyToReviewId,reviewId:reviewId}}};var beginDeleteAddonReview=function(_ref25){var reviewId=_ref25.reviewId;return{type:BEGIN_DELETE_ADDON_REVIEW,payload:{reviewId:reviewId}}};var cancelDeleteAddonReview=function(_ref26){var reviewId=_ref26.reviewId;return{type:CANCEL_DELETE_ADDON_REVIEW,payload:{reviewId:reviewId}}};var unloadAddonReviews=function(_ref27){var addonId=_ref27.addonId,reviewId=_ref27.reviewId;return{type:UNLOAD_ADDON_REVIEWS,payload:{addonId:addonId,reviewId:reviewId}}};

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ui_components_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(115);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1941);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_3__);
var getIconNameForType=function(type){switch(type){case"experimental":return"experimental-badge";case"restart-required":return"restart";default:}return type},Badge=function(_ref){var label=_ref.label,type=_ref.type;if(type&&!["not-compatible","experimental","restart-required","requires-payment"].includes(type)){throw new Error("Invalid badge type given: \"".concat(type,"\""))}return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{className:type?"Badge Badge-".concat(type):"Badge"},type&&react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ui_components_Icon__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],{alt:label,name:getIconNameForType(type)}),label)};Badge.displayName="Badge";Badge.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{label:{required:!0,flowType:{name:"string"},description:""},type:{required:!1,flowType:{name:"union",raw:"| 'experimental'\n| 'restart-required'\n| 'not-compatible'\n| 'requires-payment'",elements:[{name:"literal",value:"'experimental'"},{name:"literal",value:"'restart-required'"},{name:"literal",value:"'not-compatible'"},{name:"literal",value:"'requires-payment'"}]},description:""}}};/* harmony default export */ __webpack_exports__["a"] = (Badge);if("undefined"!=typeof STORYBOOK_REACT_CLASSES){STORYBOOK_REACT_CLASSES["src/ui/components/Badge/index.js"]={name:"Badge",docgenInfo:Badge.__docgenInfo,path:"src/ui/components/Badge/index.js"}}

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(85);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__(92);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.to-fixed.js
var es_number_to_fixed = __webpack_require__(435);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.freeze.js
var es_object_freeze = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-prototype-of.js
var es_object_get_prototype_of = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.set-prototype-of.js
var es_object_set_prototype_of = __webpack_require__(53);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(101);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/common-tags/es/index.js + 48 modules
var es = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/invariant/browser.js
var browser = __webpack_require__(1);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(51);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(47);

// EXTERNAL MODULE: ./src/core/logger.js
var logger = __webpack_require__(17);

// EXTERNAL MODULE: ./src/core/i18n/translate.js
var translate = __webpack_require__(80);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/photon-colors/photon-colors.js
var photon_colors = __webpack_require__(472);
var photon_colors_default = /*#__PURE__*/__webpack_require__.n(photon_colors);

// EXTERNAL MODULE: ./node_modules/uuid/v4.js
var v4 = __webpack_require__(749);
var v4_default = /*#__PURE__*/__webpack_require__.n(v4);

// EXTERNAL MODULE: ./src/ui/components/Icon/index.js
var Icon = __webpack_require__(115);

// CONCATENATED MODULE: ./src/ui/components/IconStar/index.js
function _extends(){_extends=Object.assign||function(target){for(var i=1,source;i<arguments.length;i++){source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends.apply(this,arguments)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1,source;i<arguments.length;i++){source=null!=arguments[i]?arguments[i]:{};if(i%2){ownKeys(Object(source),!0).forEach(function(key){_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}return obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var target=_objectWithoutPropertiesLoose(source,excluded),key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(0<=excluded.indexOf(key))continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key]}}return target}function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var target={},sourceKeys=Object.keys(source),key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(0<=excluded.indexOf(key))continue;target[key]=source[key]}return target}var CLOSED_STYLE="closed";var DIM_CLOSED_STYLE="dimClosed";var HALF_STYLE="half";var OPEN_STYLE="open";var getSvgPath=function(starStyle){switch(starStyle){case CLOSED_STYLE:case DIM_CLOSED_STYLE:return"M154.994575,670.99995 C153.704598,671.000763 152.477615,670.442079 151.630967,669.468394 C150.784319,668.49471 150.401158,667.201652 150.580582,665.923653 L153.046749,648.259919 L141.193762,635.514481 C140.080773,634.318044 139.711733,632.608076 140.232152,631.058811 C140.752571,629.509546 142.078939,628.369589 143.688275,628.088421 L160.214424,625.130961 L168.013827,609.468577 C168.767364,607.955994 170.3113,607 172.000594,607 C173.689888,607 175.233824,607.955994 175.98736,609.468577 L183.790813,625.130961 L200.329111,628.08437 C201.934946,628.371492 203.25546,629.513805 203.771316,631.062053 C204.287172,632.610301 203.915846,634.316807 202.803377,635.51043 L190.954439,648.26397 L193.420606,665.923653 C193.652457,667.578241 192.93975,669.223573 191.574418,670.185702 C190.209085,671.147831 188.420524,671.265104 186.941351,670.489485 L172.002619,662.698806 L157.047688,670.50569 C156.413201,670.833752 155.708782,671.003331 154.994575,670.99995 Z";case HALF_STYLE:return"M1216.67559,197.013479 C1216.54115,196.628667 1216.19883,196.344304 1215.78203,196.271203 L1211.45804,195.530952 L1209.42135,191.617039 C1209.22458,191.238958 1208.8214,191 1208.38027,191 C1207.93914,191 1207.53597,191.238958 1207.33919,191.617039 L1205.30145,195.530952 L1200.98592,196.269177 C1200.56542,196.339521 1200.21894,196.624766 1200.08323,197.012329 C1199.94751,197.399891 1200.04437,197.827503 1200.33557,198.126387 L1203.43079,201.313214 L1202.78679,205.728392 C1202.72624,206.141968 1202.91235,206.553231 1203.26889,206.793722 C1203.62542,207.034213 1204.09248,207.063526 1204.47874,206.869654 L1208.37974,204.921305 L1212.28181,206.872692 C1212.66807,207.066564 1213.13512,207.037251 1213.49166,206.79676 C1213.84819,206.556269 1214.0343,206.145006 1213.97376,205.73143 L1213.3287,201.313214 L1216.42286,198.1274 C1216.71414,197.828621 1216.81115,197.401068 1216.67559,197.013479 Z";case OPEN_STYLE:default:return"M317.994575,670.99995 C316.704598,671.000763 315.477615,670.442079 314.630967,669.468394 C313.784319,668.49471 313.401158,667.201652 313.580582,665.923653 L316.046749,648.259919 L304.193762,635.514481 C303.080773,634.318044 302.711733,632.608076 303.232152,631.058811 C303.752571,629.509546 305.078939,628.369589 306.688275,628.088421 L323.214424,625.130961 L331.013827,609.468577 C331.767364,607.955994 333.3113,607 335.000594,607 C336.689888,607 338.233824,607.955994 338.98736,609.468577 L346.790813,625.130961 L363.329111,628.08437 C364.934946,628.371492 366.25546,629.513805 366.771316,631.062053 C367.287172,632.610301 366.915846,634.316807 365.803377,635.51043 L353.954439,648.26397 L356.420606,665.923653 C356.652457,667.578241 355.93975,669.223573 354.574418,670.185702 C353.209085,671.147831 351.420524,671.265104 349.941351,670.489485 L335.002619,662.698806 L320.047688,670.50569 C319.413201,670.833752 318.708782,671.003331 317.994575,670.99995 Z M314.678006,634.89463 L324.603415,645.569846 L322.578647,660.041143 L335.002619,653.56309 L347.42254,660.045194 L345.397773,645.573897 L355.323182,634.89463 L341.352288,632.39902 L335.002619,619.637378 L328.648899,632.39902 L314.678006,634.89463 Z";}};var IconStar=function(_ref){var className=_ref.className,_ref$half=_ref.half,half=void 0===_ref$half?!1:_ref$half,_ref$selected=_ref.selected,selected=void 0===_ref$selected?!1:_ref$selected,_ref$readOnly=_ref.readOnly,readOnly=void 0===_ref$readOnly?!1:_ref$readOnly,_ref$yellow=_ref.yellow,yellow=void 0===_ref$yellow?!0:_ref$yellow,iconProps=_objectWithoutProperties(_ref,["className","half","selected","readOnly","yellow"]),color=photon_colors_default.a.YELLOW_50;if(!yellow){color=photon_colors_default.a.GREY_50}var starStyle=selected?CLOSED_STYLE:OPEN_STYLE;if(readOnly){if(half){starStyle=HALF_STYLE}else if(!selected){starStyle=DIM_CLOSED_STYLE}}var defs,gProps={fill:color,fillRule:"nonzero"};switch(starStyle){case CLOSED_STYLE:case DIM_CLOSED_STYLE:gProps=_objectSpread({},gProps,{transform:"translate(-140.000000, -607.000000)",fillOpacity:starStyle===DIM_CLOSED_STYLE?.25:1});break;case HALF_STYLE:{// This id is needed in case there are multiple IconStars on 1 page.
var id="half".concat(v4_default()());defs=react["createElement"]("defs",null,react["createElement"]("linearGradient",{id:id,x1:"0",x2:"100%",y1:"0",y2:"0"},react["createElement"]("stop",{offset:"50%",stopColor:color}),react["createElement"]("stop",{offset:"50%",stopColor:color,stopOpacity:"0.25"})));gProps=_objectSpread({},gProps,{fill:"url(#".concat(id,")"),transform:"scale(3.75) translate(-1200.000000, -191.000000)"});break}case OPEN_STYLE:default:gProps=_objectSpread({},gProps,{fillOpacity:readOnly?.25:1,transform:"translate(-303.000000, -607.000000)"});break;}return react["createElement"](Icon["a" /* default */],_extends({className:classnames_default()("IconStar",className),name:"inline-content"},iconProps),react["createElement"]("svg",{viewBox:"0 0 64 64",className:"IconStar-svg",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},defs,react["createElement"]("g",gProps,react["createElement"]("path",{d:getSvgPath(starStyle)}))))};IconStar.displayName="IconStar";IconStar.__docgenInfo={description:"",methods:[],displayName:"IconStar",props:{half:{defaultValue:{value:"false",computed:!1},required:!1,flowType:{name:"boolean"},description:""},selected:{defaultValue:{value:"false",computed:!1},required:!1,flowType:{name:"boolean"},description:""},readOnly:{defaultValue:{value:"false",computed:!1},required:!1,flowType:{name:"boolean"},description:""},yellow:{defaultValue:{value:"true",computed:!1},required:!1,flowType:{name:"boolean"},description:""},alt:{required:!1,flowType:{name:"$PropertyType",elements:[{name:"IconProps"},{name:"literal",value:"'alt'"}],raw:"$PropertyType<IconProps, 'alt'>"},description:""},className:{required:!1,flowType:{name:"string"},description:""}}};/* harmony default export */ var components_IconStar = (IconStar);if("undefined"!=typeof STORYBOOK_REACT_CLASSES){STORYBOOK_REACT_CLASSES["src/ui/components/IconStar/index.js"]={name:"IconStar",docgenInfo:IconStar.__docgenInfo,path:"src/ui/components/IconStar/index.js"}}
// EXTERNAL MODULE: ./src/ui/components/Rating/styles.scss
var styles = __webpack_require__(1950);

// CONCATENATED MODULE: ./src/ui/components/Rating/index.js
/* unused harmony export RATING_STYLE_SIZE_TYPES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rating_RatingBase; });
function _typeof(obj){"@babel/helpers - typeof";if("function"==typeof Symbol&&"symbol"==typeof Symbol.iterator){_typeof=function(obj){return typeof obj}}else{_typeof=function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}function _templateObject(){var data=_taggedTemplateLiteral(["styleSize="," is not a valid\n        value; possible values: ",""]);_templateObject=function(){return data};return data}function _taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0)}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function Rating_extends(){Rating_extends=Object.assign||function(target){for(var i=1,source;i<arguments.length;i++){source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return Rating_extends.apply(this,arguments)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0,descriptor;i<props.length;i++){descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1;descriptor.configurable=!0;if("value"in descriptor)descriptor.writable=!0;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call)){return call}return _assertThisInitialized(self)}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)};return _getPrototypeOf(o)}function _assertThisInitialized(self){if(void 0===self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}});if(superClass)_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function(o,p){o.__proto__=p;return o};return _setPrototypeOf(o,p)}function Rating_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}return obj}var RATING_STYLE_SIZE_TYPES={small:"",large:""};var RATING_STYLE_SIZES=Object.keys(RATING_STYLE_SIZE_TYPES);var Rating_RatingBase=/*#__PURE__*/function(_React$Component){_inherits(RatingBase,_React$Component);function RatingBase(props){var _this;_classCallCheck(this,RatingBase);_this=_possibleConstructorReturn(this,_getPrototypeOf(RatingBase).call(this,props));Rating_defineProperty(_assertThisInitialized(_this),"onSelectRating",function(event){event.preventDefault();event.stopPropagation();var button=event.currentTarget,rating=parseInt(button.value,10);logger["a" /* default */].debug("Selected rating from form button: ".concat(rating));if(!_this.props.onSelectRating){throw new Error("onSelectRating was empty. Did you mean to set readOnly=true?")}_this.props.onSelectRating(rating)});Rating_defineProperty(_assertThisInitialized(_this),"renderTitle",function(rating,readOnly,starRating){var i18n=_this.props.i18n;if(readOnly){if(rating){return i18n.sprintf(i18n.gettext("Rated %(rating)s out of 5"),{rating:i18n.formatNumber(parseFloat(rating).toFixed(1))})}return i18n.gettext("There are no ratings yet")}browser_default()(starRating,"starRating is required when readOnly=false");if(rating){if(starRating===rating){return i18n.sprintf(i18n.gettext("Rated %(rating)s out of 5"),{rating:i18n.formatNumber(parseFloat(rating).toFixed(1))})}return i18n.sprintf(i18n.gettext("Update your rating to %(starRating)s out of 5"),{starRating:starRating})}return i18n.sprintf(i18n.gettext("Rate this add-on %(starRating)s out of 5"),{starRating:starRating})});Rating_defineProperty(_assertThisInitialized(_this),"onHoverStar",function(star){if(_this.props.readOnly){return}_this._setState({hoveringOverStar:star})});Rating_defineProperty(_assertThisInitialized(_this),"stopHovering",function(){if(_this.props.readOnly){return}_this._setState({hoveringOverStar:null})});_this.state={hoveringOverStar:null};return _this}_createClass(RatingBase,[{key:"_setState",value:function _setState(newState){var setState=this.props._setState||this.setState.bind(this);return setState(newState)}},{key:"renderRatings",value:function renderRatings(){var _this2=this,_this$props=this.props,readOnly=_this$props.readOnly,yellowStars=_this$props.yellowStars,hoveringOverStar=this.state.hoveringOverStar,rating=this.props.rating||0;return[1,2,3,4,5].map(function(thisRating){var isSelected=.25>=thisRating-rating;if(null!==hoveringOverStar){isSelected=thisRating<=hoveringOverStar}var title=_this2.renderTitle(rating,readOnly,thisRating),halfStar=.25<thisRating-rating&&.75>=thisRating-rating,props={className:classnames_default()("Rating-star","Rating-rating-".concat(thisRating),{"Rating-selected-star":isSelected,"Rating-half-star":halfStar}),key:"rating-".concat(thisRating),onClick:void 0,onMouseEnter:function onMouseEnter(){return _this2.onHoverStar(thisRating)},title:title};if(readOnly){return react["createElement"]("div",props,_this2.renderStar({half:halfStar,selected:isSelected,readOnly:readOnly,yellow:yellowStars}))}if(!_this2.isLoading()){props.onClick=_this2.onSelectRating}var id="Rating-rating-".concat(thisRating,"-title");return(// eslint-disable-next-line react/jsx-key
react["createElement"](react["Fragment"],null,react["createElement"]("button",Rating_extends({"aria-describedby":id,type:"button",value:thisRating},props),react["createElement"]("span",{id:id,className:"visually-hidden"},title),_this2.renderStar({selected:isSelected,yellow:!0}))))})}},{key:"renderStar",value:function renderStar(props){return react["createElement"](components_IconStar,props)}},{key:"isLoading",value:function isLoading(){// When rating is undefined, the rating is still loading.
// When rating is null, the rating has been loaded but it's empty.
return this.props.rating===void 0}},{key:"render",value:function render(){var _this$props2=this.props,className=_this$props2.className,rating=_this$props2.rating,readOnly=_this$props2.readOnly,styleSize=_this$props2.styleSize;if(!styleSize||!RATING_STYLE_SIZES.includes(styleSize)){throw new Error(Object(es["a" /* oneLine */])(_templateObject(),styleSize||"[empty string]",RATING_STYLE_SIZES.join(", ")))}// Wrap read only ratings with a description to maintain functionality
// for the "Average rating of developer’s add-ons" tooltip.
var description=readOnly?this.renderTitle(rating,readOnly,null):null,allClassNames=classnames_default()("Rating","Rating--".concat(styleSize),className,{"Rating--editable":!readOnly,"Rating--loading":this.isLoading()});return react["createElement"]("div",{className:allClassNames,title:description,onMouseLeave:this.stopHovering},this.renderRatings(),react["createElement"]("span",{className:"visually-hidden"},description))}}]);return RatingBase}(react["Component"]);Rating_RatingBase.displayName="RatingBase";Rating_defineProperty(Rating_RatingBase,"defaultProps",{className:"",readOnly:!1,styleSize:"large",yellowStars:!1});var Rating=Object(redux["d" /* compose */])(Object(translate["a" /* default */])())(Rating_RatingBase);/* harmony default export */ var components_Rating = __webpack_exports__["b"] = (Rating);Rating_RatingBase.__docgenInfo={description:"",methods:[{name:"_setState",docblock:null,modifiers:[],params:[{name:"newState",type:{name:"$Shape",elements:[{name:"signature",type:"object",raw:"{|\n  hoveringOverStar: number | null,\n|}",signature:{properties:[{key:"hoveringOverStar",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}}]}}],raw:"$Shape<StateType>",alias:"$Shape"}}],returns:null},{name:"onSelectRating",docblock:null,modifiers:[],params:[{name:"event",type:{name:"SyntheticEvent",elements:[{name:"HTMLButtonElement"}],raw:"SyntheticEvent<HTMLButtonElement>",alias:"SyntheticEvent"}}],returns:null},{name:"renderTitle",docblock:null,modifiers:[],params:[{name:"rating",type:{name:"number",nullable:!0}},{name:"readOnly",type:{name:"union",raw:"boolean | void",elements:[{name:"boolean"},{name:"void"}]}},{name:"starRating",type:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]}}],returns:null},{name:"onHoverStar",docblock:null,modifiers:[],params:[{name:"star",type:{name:"number"}}],returns:null},{name:"stopHovering",docblock:null,modifiers:[],params:[],returns:null},{name:"renderRatings",docblock:null,modifiers:[],params:[],returns:{type:{name:"Array",elements:[{name:"ReactNode",raw:"React.Node"}],raw:"Array<React.Node>"}}},{name:"renderStar",docblock:null,modifiers:[],params:[{name:"props",type:{name:"IconStarProps",alias:"IconStarProps"}}],returns:null},{name:"isLoading",docblock:null,modifiers:[],params:[],returns:null}],displayName:"RatingBase",props:{className:{defaultValue:{value:"''",computed:!1},required:!1,flowType:{name:"string"},description:""},readOnly:{defaultValue:{value:"false",computed:!1},required:!1,flowType:{name:"boolean"},description:""},styleSize:{defaultValue:{value:"'large'",computed:!1},required:!1,flowType:{name:"union",raw:"$Keys<typeof RATING_STYLE_SIZE_TYPES>",elements:[{name:"literal",value:"small"},{name:"literal",value:"large"}]},description:""},yellowStars:{defaultValue:{value:"false",computed:!1},required:!1,flowType:{name:"boolean"},description:""},onSelectRating:{required:!1,flowType:{name:"signature",type:"function",raw:"(rating: number) => void",signature:{arguments:[{name:"rating",type:{name:"number"}}],return:{name:"void"}}},description:""},rating:{required:!1,flowType:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},description:""},_setState:{required:!1,flowType:{name:"signature",type:"function",raw:"($Shape<StateType>) => void",signature:{arguments:[{name:"",type:{name:"$Shape",elements:[{name:"signature",type:"object",raw:"{|\n  hoveringOverStar: number | null,\n|}",signature:{properties:[{key:"hoveringOverStar",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}}]}}],raw:"$Shape<StateType>"}}],return:{name:"void"}}},description:""},i18n:{required:!0,flowType:{name:"I18nType"},description:""}}};if("undefined"!=typeof STORYBOOK_REACT_CLASSES){STORYBOOK_REACT_CLASSES["src/ui/components/Rating/index.js"]={name:"RatingBase",docgenInfo:Rating_RatingBase.__docgenInfo,path:"src/ui/components/Rating/index.js"}}

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FETCH_ADDON_INFO */
/* unused harmony export LOAD_ADDON_INFO */
/* unused harmony export FETCH_ADDON */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOAD_ADDON_RESULTS; });
/* unused harmony export initialState */
/* unused harmony export fetchAddon */
/* unused harmony export loadAddonResults */
/* unused harmony export fetchAddonInfo */
/* unused harmony export loadAddonInfo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createInternalAddon; });
/* unused harmony export getAddonByID */
/* unused harmony export getAddonBySlug */
/* unused harmony export getAddonByGUID */
/* unused harmony export isAddonLoading */
/* unused harmony export getAllAddons */
/* unused harmony export getAddonInfoBySlug */
/* unused harmony export isAddonInfoLoading */
/* unused harmony export createInternalAddonInfo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return addonsReducer; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(177);
/* harmony import */ var core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(25);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(132);
/* harmony import */ var core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(10);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var amo_actions_reviews__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(39);
/* harmony import */ var core_utils_addons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(334);
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1,source;i<arguments.length;i++){source=null!=arguments[i]?arguments[i]:{};if(i%2){ownKeys(Object(source),!0).forEach(function(key){_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}return obj}var FETCH_ADDON_INFO="FETCH_ADDON_INFO";var LOAD_ADDON_INFO="LOAD_ADDON_INFO";var FETCH_ADDON="FETCH_ADDON";var LOAD_ADDON_RESULTS="LOAD_ADDON_RESULTS";var initialState={byID:{},byGUID:{},bySlug:{},infoBySlug:{},loadingBySlug:{}};function fetchAddon(_ref){var errorHandler=_ref.errorHandler,slug=_ref.slug;if(!errorHandler){throw new Error("errorHandler cannot be empty")}if(!slug){throw new Error("slug cannot be empty")}return{type:FETCH_ADDON,payload:{errorHandlerId:errorHandler.id,slug:slug}}}function loadAddonResults(){var _ref2=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},addons=_ref2.addons;if(!addons){throw new Error("addons are required")}return{type:LOAD_ADDON_RESULTS,payload:{addons:addons}}}var fetchAddonInfo=function(_ref3){var errorHandlerId=_ref3.errorHandlerId,slug=_ref3.slug;invariant__WEBPACK_IMPORTED_MODULE_11___default()(errorHandlerId,"errorHandlerId is required");invariant__WEBPACK_IMPORTED_MODULE_11___default()(slug,"slug is required");return{type:FETCH_ADDON_INFO,payload:{errorHandlerId:errorHandlerId,slug:slug}}};var loadAddonInfo=function(){var _ref4=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},info=_ref4.info,slug=_ref4.slug;invariant__WEBPACK_IMPORTED_MODULE_11___default()(info,"info is required");invariant__WEBPACK_IMPORTED_MODULE_11___default()(slug,"slug is required");return{type:LOAD_ADDON_INFO,payload:{info:info,slug:slug}}};function createInternalAddon(apiAddon){var addon={authors:apiAddon.authors,average_daily_users:apiAddon.average_daily_users,categories:apiAddon.categories,contributions_url:apiAddon.contributions_url,created:apiAddon.created,default_locale:apiAddon.default_locale,description:apiAddon.description,edit_url:apiAddon.edit_url,guid:apiAddon.guid,has_eula:apiAddon.has_eula,has_privacy_policy:apiAddon.has_privacy_policy,homepage:apiAddon.homepage,icon_url:apiAddon.icon_url,id:apiAddon.id,is_disabled:apiAddon.is_disabled,is_experimental:apiAddon.is_experimental,is_recommended:apiAddon.is_recommended,is_source_public:apiAddon.is_source_public,last_updated:apiAddon.last_updated,latest_unlisted_version:apiAddon.latest_unlisted_version,locale_disambiguation:apiAddon.locale_disambiguation,name:apiAddon.name,previews:apiAddon.previews,public_stats:apiAddon.public_stats,ratings:apiAddon.ratings,requires_payment:apiAddon.requires_payment,review_url:apiAddon.review_url,slug:apiAddon.slug,status:apiAddon.status,summary:apiAddon.summary,support_email:apiAddon.support_email,support_url:apiAddon.support_url,tags:apiAddon.tags,target_locale:apiAddon.target_locale,type:apiAddon.type,url:apiAddon.url,weekly_downloads:apiAddon.weekly_downloads,// These are custom properties not in the API response.
currentVersionId:apiAddon.current_version?apiAddon.current_version.id:null,isRestartRequired:!1,isWebExtension:!1,isMozillaSignedExtension:!1},currentVersion=apiAddon.current_version;if(currentVersion&&currentVersion.files&&0<currentVersion.files.length){addon.isRestartRequired=currentVersion.files.some(function(file){return!!file.is_restart_required});// The following checks are a bit fragile since only one file needs
// to contain the flag. However, it is highly unlikely to create an
// add-on with mismatched file flags in the current DevHub.
addon.isWebExtension=currentVersion.files.some(function(file){return!!file.is_webextension});addon.isMozillaSignedExtension=currentVersion.files.some(function(file){return!!file.is_mozilla_signed_extension})}// Remove undefined properties entirely. This is for some legacy code
// in Discopane that relies on spreads to combine a Discopane result
// (which has a header and description) with a minimal add-on object.
// For example, the minimal add-on object does not have a description
// property so the spread should not override `description`.
addon=Object(core_utils_addons__WEBPACK_IMPORTED_MODULE_13__[/* removeUndefinedProps */ "b"])(addon);return addon}var getAddonByID=function(addons,id){return addons.byID["".concat(id)]||null};var getAddonBySlug=function(addons,slug){if("string"!=typeof slug){return null}var addonId=addons.bySlug[slug.toLowerCase()];return getAddonByID(addons,addonId)};var getAddonByGUID=function(addons,guid){var addonId=addons.byGUID[guid];return getAddonByID(addons,addonId)};var isAddonLoading=function(state,slug){if("string"!=typeof slug){return!1}return!!state.addons.loadingBySlug[slug.toLowerCase()]};var getAllAddons=function(state){var addons=state.addons.byID;// $FLOW_FIXME: see https://github.com/facebook/flow/issues/2221.
return Object.values(addons)};var getAddonInfoBySlug=function(_ref5){var slug=_ref5.slug,state=_ref5.state;invariant__WEBPACK_IMPORTED_MODULE_11___default()(slug,"slug is required");invariant__WEBPACK_IMPORTED_MODULE_11___default()(state,"state is required");var infoForSlug=state.infoBySlug[slug];return infoForSlug&&infoForSlug.info||null};var isAddonInfoLoading=function(_ref6){var slug=_ref6.slug,state=_ref6.state;invariant__WEBPACK_IMPORTED_MODULE_11___default()(slug,"slug is required");invariant__WEBPACK_IMPORTED_MODULE_11___default()(state,"state is required");var infoForSlug=state.infoBySlug[slug];return!!(infoForSlug&&infoForSlug.loading)};var createInternalAddonInfo=function(addonInfo){return{eula:addonInfo.eula,privacyPolicy:addonInfo.privacy_policy}};function addonsReducer(){var state=0<arguments.length&&arguments[0]!==void 0?arguments[0]:initialState,action=1<arguments.length?arguments[1]:void 0;switch(action.type){case FETCH_ADDON:{var _slug=action.payload.slug;return _objectSpread({},state,{loadingBySlug:_objectSpread({},state.loadingBySlug,_defineProperty({},_slug.toLowerCase(),!0))})}case LOAD_ADDON_RESULTS:{var loadedAddons=action.payload.addons,byID=_objectSpread({},state.byID),byGUID=_objectSpread({},state.byGUID),bySlug=_objectSpread({},state.bySlug),loadingBySlug=_objectSpread({},state.loadingBySlug);loadedAddons.forEach(function(loadedAddon){var addon=createInternalAddon(loadedAddon);// Flow wants hash maps with string keys.
// See: https://zhenyong.github.io/flowtype/docs/objects.html#objects-as-maps
byID["".concat(addon.id)]=addon;if(addon.slug){bySlug[addon.slug.toLowerCase()]=addon.id;loadingBySlug[addon.slug.toLowerCase()]=!1}if(addon.guid){byGUID[addon.guid]=addon.id}});return _objectSpread({},state,{byID:byID,byGUID:byGUID,bySlug:bySlug,loadingBySlug:loadingBySlug})}case amo_actions_reviews__WEBPACK_IMPORTED_MODULE_12__[/* UNLOAD_ADDON_REVIEWS */ "x"]:{var _addonId=action.payload.addonId,addon=getAddonByID(state,_addonId);if(addon){return _objectSpread({},state,{byID:_objectSpread({},state.byID,_defineProperty({},"".concat(_addonId),void 0)),byGUID:_objectSpread({},state.byGUID,_defineProperty({},addon.guid,void 0)),bySlug:_objectSpread({},state.bySlug,_defineProperty({},addon.slug.toLowerCase(),void 0)),loadingBySlug:_objectSpread({},state.loadingBySlug,_defineProperty({},addon.slug.toLowerCase(),void 0))})}return state}case amo_actions_reviews__WEBPACK_IMPORTED_MODULE_12__[/* UPDATE_RATING_COUNTS */ "y"]:{var _action$payload=action.payload,_addonId2=_action$payload.addonId,oldReview=_action$payload.oldReview,newReview=_action$payload.newReview,_addon=getAddonByID(state,_addonId2);if(!_addon){return state}var ratings=_addon.ratings,average=ratings?ratings.average:0,ratingCount=ratings?ratings.count:0,reviewCount=ratings?ratings.text_count:0,countForAverage=ratingCount;if(average&&countForAverage&&oldReview&&oldReview.score){// If average and countForAverage are defined and greater than 0,
// begin by subtracting the old rating to reset the baseline.
var countAfterRemoval=countForAverage-1;if(0==countAfterRemoval){// There are no ratings left.
average=0}else{// Expand all existing rating scores, take away the old score,
// and recalculate the average.
average=(average*countForAverage-oldReview.score)/countAfterRemoval}countForAverage=countAfterRemoval}// Expand all existing rating scores, add in the new score,
// and recalculate the average.
average=(average*countForAverage+newReview.score)/(countForAverage+1);// Adjust rating / review counts.
if(!oldReview){// A new rating / review was added.
ratingCount+=1;if(newReview.body){reviewCount+=1}}else if(!oldReview.body&&newReview.body){// A rating was converted into a review.
reviewCount+=1}return _objectSpread({},state,{byID:_objectSpread({},state.byID,_defineProperty({},_addonId2,_objectSpread({},_addon,{ratings:_objectSpread({},ratings,{average:average,// It's impossible to recalculate the bayesian_average
// (i.e. median) so we set it to the average as an
// approximation.
bayesian_average:average,count:ratingCount,text_count:reviewCount})})))})}case FETCH_ADDON_INFO:{var _slug2=action.payload.slug;return _objectSpread({},state,{infoBySlug:_objectSpread({},state.infoBySlug,_defineProperty({},_slug2,{info:void 0,loading:!0}))})}case LOAD_ADDON_INFO:{var _action$payload2=action.payload,_slug3=_action$payload2.slug,info=_action$payload2.info;return _objectSpread({},state,{infoBySlug:_objectSpread({},state.infoBySlug,_defineProperty({},_slug3,{info:createInternalAddonInfo(info),loading:!1}))})}default:return state;}}

/***/ }),

/***/ 740:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAABJpSURBVHic7Zt7jCRHfcc/Vd3z3N3Z1+3tvXw+G4PP+AH4AX6cwTjGF2EZpCQm5KFgoihESXACtsH/EIMVgYFgQqREIlHiSCZIWEkwsogNAfzkfFwMts+YM3c+39t3e3v7mNl5dXdV/fJH98z0zM7eLtzlrCipUamrqx/1+37r9/vVr6tqlIjwfznp11uA1zv9PwGvtwCvd/Jfz8Yv/4jK5Ib9d2vhJlGcrRWrBcZFJA+qgmJWwQmxvOBEPfzMfdHzcpqdlno9nOC1d6mNiP8VRN+4eeNb3VUXbx1YPbJBjRTGGciPgIJaUKZcP8GJymvsPvIT8+LuZ5uzlWmDkn9plu3Hnv2qRKdDljNOwDV35i7ytHrst2/86NiV5/+qLhXG0cpHK42nPLT2QBSCxTpLZAPqUYVqMM/hmd18578ebO7a+9wLTc9sffZeKZ+qPGeUgC0fz15eGBj4/p//xr1DG1adpyIbIIATA6Ji8IBCASDicOLQOnZVtaDMQjDHthcfjZ56/tEjpYbZ/B9/I8GpyHRGfYB47rYP3vAnQ4MDw+rQ/Ms4cXjKx9Nx1srrgEdwYrHOYGyIEQMIkW1y8ZuuyBw89srk/sN7bgG+dioynVECNNywYeJcdbSyB+sMns4kwH087aHQKAUi0ibAicXYCCsRxoRELiQ0ddat21A4ePSVD/C/hYAtn1TrxobWj2tPMd84ngLvoZVGoVBKA0JsloITh3Gmowkuoh6WUUoxOboBFOtOVa4zRoA4/+zR0nhkXJBdCOfwdQZf+SidgCc+Cg4hsX8czhmsszgxNG0dY0NK+VUYYxConKpcZ4yAQczOQ1P78mPF9WS9HIGpEyKIOARBQQxdoKUFDotzDsG160Qcw/lVvHjwJ5FYvn2qcp2xSPA7X5Ra5Brfe/Kn37IXTF4T27gzMUixGDFYF2EkxLgQIyFWDI7YBJyzWDEM5sYoZkbY+fKzBu09dKpyndFQOArMhx5+8oHKbHmKN4y/tQ1eerLDIljEpescGZ3jvIlL+d72f29GJvjyD7/Q3HuqMp1RArb/tUy5SG78+299rl70R1lbOi/u3YQIh2t7fucsFotr+QIsG0cv4IW9z7jdB1/a2yybT58Omc74x9DT94XPNpvNTzz09D/W1wydkwKf9Dq27QBFEhKwZHSWUm41T2x/NBBrbjpdofAZJ+Dyj6iM1jLmaY/IhW2Vd2Kx0upx284xIRbfy2EJMWI8wd/87s+o/OmQ57SFwtfepTaK8z6L4hqcGksCukXJ97L5c9edb275lT8tvlrewbHKXiQ1GpAEQek6EUGT4W3rtvKz/Tvsj3b+oFqtNQoKmssKJjilOCzCg6XAfKE3dD4tBFx7R/ayfK7wxFWX3Zi7ZNO1/sjABEqlGFAkwBy5TJEganJwfhevzv0Q2mBTJLTOce2oEBE2lLYwVPAp5UYxNiQwDawz8XPicBIHT3G55UsMU/NH2HdgX/3Qkf1HxJi3bLtPGu0OOWX0ANp98wNbPzbw9k2/Q6Ue0owiLBFWAqxrYlwTI3WsC2mYwyyEB5luPo/DpsAmgBOwDtetDTgOL+xgPDyfBV/j6wyeHkKrLJ7K4escns7ik8fTWbTKo5UHKCYHjrJ2bFvxSfvoWceOHb0HuPO0EXDlJ9WGoVxp/NJNNzFX1UzXdlF3s4S2TGgrRFIlslUiVyNyTQx1rGt2q7xKEZAKg3u1w7oKr9V3kA6KOt8NnWfja4KIIucP8+bxDzKUu4jzztmXPzp19P2nlQDfZDaMrp4wQRTxSvkhDlf/MwFHx4bpUW0lnegOQVyv6i9hDq1AWXoI6vEXbVKcpdI8zNOH7uW6jZ9haHAIJUx2yX+qBADgRNXNHHPBbqzEw1haOOiodD/77iKoVSOG0DUxNkhGi44vEEm/G8R1yjE50vYNcR3MB/tiDZHuke+0EODEUY9O0DDT7agt3dtIN8h27yXXHZZGVCGyTSIbELkA66KW7J3U66+lpyg99SopK1gIj5DNGBTd49PpIcBZqUcnCMw8omwbYF9vnmiDSs4b4QLzzSmMhN0vVamDdNe1waYHmuQ8zZESkISEajTNqJfHqf8BAgShGk5hicAJTiXqrrptFTraELqAcvM4TVNdvoGemEKlwPeSkQaN6txbj6Yp5daifgET8JLrXvK6CJJxq5cAcdTNTDKsudgm26ov0HaG8a8ezTPfmIrv6dXJJZKkC/16PqUlXXUJGYGdR1gDKzABHxj4xlNffuOe1168vlybvr7anLtIRG0vFUa//uH3ff67F6y6oNZLROQa8deb6nhj1XZxHZtfCGeohjMd4CtB3wKaun9Rz/fWCfH0Wks+aSDKIstogAaGPvuN3/+jalD59LnrL5ALz3tbLpfPMjN/7Nf2HHz5vffc/+vRQq1yT00d+cpjd4sRLcqJS77dbdfw5VJmIDgqzeM0zMLSoPvVS59r0iEvDXpRz9MxCWObrVHhpBrgfeqB37q+FpT/4qpLr8uuHl5PMTuMQjFUGFbjY6sK6zdOFrY///g9lYPHP7rldv82rdk6NDKQDW09/ranZwgUwUrEfHOKyDU7zauuw9IpdcNJnV9yzPuDDGVXUcgMUg+r1IJZ6lEFp0zsfE9GwIf+9h2l+dmj91/zjnflA6lQbuYIbfzt0DAV5hvHEd/wlksuKY6sLpy9/9VDX3PWem96w/n5WjTf1gBUa4hzGBtQDo5jxbQBdUmwQhNIg11EhkDOL7B5YgsqynBi7jhzx+ajfKmYWT+yBqWFufqxRBNPQsC+g8/fMDGxRtVlhuM1TTWcx/dyxPPxDWpRmVowR91WGCwVuPSKS4YEoWkq1MJ50gGPIDTDBarRbKwJaeC9oE+iDX2dX9oEBPKZQd68+p28smtv+PIru2oKnhDHDjQ3i+Oy4bHBcHLt+GBuvLGomW4TUO6WwrA/WA6OE7pm8sHhIYCViNA2iFwT5wxNFpAwGeMXBTuOWjhPwy60kS1yeP28fx8GFjm/XiIUbF51NXt27W3u3rvrBTDveerzkjTM567+uBorz9beX6lUPyyWdwDZvgQopdQ1d/o3Fod8rDM0ogVAEk8qBKaOlSjpY9tex4u/uDrxeOAaNKIyNpmwaX8Vp45LakK/1Ov8eogYyIygXYY9e162jQFz/bN3Sz39+Lb7ZBa4H7j/8rvUcM557+tLwFUfY1Sjs2iLQrUnK+eD4zSiSrx+11JVRVfZ0z4oFccB4rrvgyXPFxGyRFrk/FJD3OTgORw4st+Kdl/vBd+bksXUB/oSoPzcqPKJQglyeQaxLmKmdpjQNZbutaRsxXR6Z6XgfwFn2OX8eoa4vD/IzPFXau6XXCNoBwXKuFHlYa2LcGKpBrMx+FZ7aUfVr5wCv2io63Pefjb93HJ1fdrxvSy1eh1Ev/aLAG+ltgY4JcNai9hkAaIelrvBrLRMH2JOcn5SE0jHAD093xoBtPIImk1P+9HUUq85WUqPAg3nBOMCrBgsZjGYlZTTQcoKNCF9vmTq4/xadcYFeL52ppodWOYtfVPbBMTpORuJZ1yEc32m3H8RTehT1wVW9Qev1OKcfmbRe4j9T6FQcL7vumZ6VpraBNhMOCcOvzMvx/I907olrQkpMIvKvRqT9gm9YJe61vO+yDUZLBVzorh8eWkXpzYB9QFmRfDFgnERqvVTGk/5SVDko5RGn8xwl9GOXiem0oB737mCUWW+eZSzNp6VV0r+eCWAL/qM6gqE2gT89G4JPc1zYTXehuLpDBkvRyEzxFBujFJunKHcGMVMCd/LxZsZVmAWfTWhBT59bx/1X4nPmGsepTQ8SLE4NLnljuwf9AP93ttU7to7/ZvfeVfmX4er/on0ta5Q2Ij6elDmomg0KGb9IvlMgcHcGAPZYTJelsiF1KN5quEM9agCCrTSWIlwidNsy7ecJvQD1ntvzzd9+1w6z4kIr1V/ztVbrig+/eSPvnLNJzKbteMhMuYla7zrfK1udQX/huJgxoxMloaO7J7pIqeLAIm8bwUL5t4osmR8h1YeGS9Hzi+S9fJoW6dpPLTyyWcGCRsOGwql0TGqZnrxvN5SaRnH2QaZGvakdU/vhCdwonEQyTuueuflxQOvHvqzE8fn/rCysJAfHs02xtaWSsPjA3iewopweM+M6xKld2ns6jsyd/lZPrXqTZliLpsllymS8wt4yos3L4ihXgk5sb+6ENSjQJBw8g3Da8bXFXU5ON4G0Pb2ibBp9U2Xfe0zUdzERHETxUyJnDdIRueIXJPA1qgEJzi08BLVcKY1q94JjSU1FSZQ9EcZzI6S8wbwVY7A1KhHZaphmTCqM17cyM4n99mnvxi1O37RlNi2v4ru3fIJf8PMnujWgQk7kCsFZPJlJIJ6RaQxYytRw1ac5ePbvmT/7arb/RsXpoJvTKwfGl6iv/snBZuG38q6gfOZnjnBz58/UK8uVG293tBRFOniwIAZGhxgcs3a4ts23ew1KbNz+ns0o4UuRUif1KI5atHcImJa5dYUTZcY/RZHlVLq6jsyt2ot7xPHdWjyOAxKvi3CA9sG7SNydzy/tOX27JX5wcyj510xMTzXPJo8z7IacO7IZfjBCE898XQziBo/dVb9nVOy2zf+Uec1q5bsGm3dOi8jN6P07124+WL/wos355+beoTA1pbVht6yEsVoYQMvPnUg+uEXo/ZI0HdWONmQfH+SufYutXHtAY48+KDYk3XqStPagTeimoM89oPHqmFktj7zJfNM52rLmYbTwIvAd6671d7+EjsfiUx05YVvuT7/k2MPp4Q9SUO910QW1a5og8RT98rBXvAqSeJExe92ix+UvkWG82t47tmd1bAZffCZL5ntdEcCKpGrnR//Z6LGz8xNP9/zs5mwZij4IysRe1G7ThzqlyFALU66LazQXttdiSSezuBJjvn5Wf/o8/b7iQzecvnHD2OU47tT08dkKDu2WMb2T8fBmvLibbhJVijExRrQAgHLrAy1buIko7qzJBogiyYt+pULXolyeQ6UHNj/OGkZ+rXVlcKmfm52Zv43z5ocLdJuLu6HGLSOCUCjibfegkbEEdpmvO8IXKsNpdTSBPQBr1PnbSHFxvXSo+59eRAIbZ1iqYhYNp3zdob37aC+BPhFRPhZd83ASKYQRLX4BklCdXwUHlr7ePjorrKPcSHOWZSAjkXSiWjLrg322uWiyN2E+E5EdfmAfgwkx9A2QDsGhnPhyIWylR32ke47usCnyVdaq60j4yU1Fx0AUck+Yx9PZdD47W+WuJxB60ysCUajVBVrbPxXhNis7JIEJL2fFiLtlFrnANoG+KqzCti1SpueuEh/zy8EJ5g8a9VgefrwLcAziTCdJeUO6FbObHqXd77OetnB4iCHZuYSG890svbbwL0WKcpvw5DWtpv4/X5ydMs5Qd2TWwumPvH0cv7EK6ZiQptrOaB2ku5jegCqBDOsWj2ivKy6HjgbmABKQAHIp45FYARYPbSGmyfXjPrVcD5W55S9txhvzUy3luqMDQltg8DW0MojbESATAOZBIta6fJ42lOnycgf3k648SpXr8zW88WRAZqu1p4ZTvc8yRqdEqhGs0wMn00m43trLnHvObbT7QCmgCqdQMBLSCgBY4UJbli1djRbCafjdzmHURFWLFpiz0/iExRxGUh2nDp8fOaO1YJggceBXNKOXURAyvm1q1LHlvq3yMgAgwe3yT8pv37b2s3FbGl8DK0UWmm09pL5hM4agtLxuYiw5qyxzNR5U1cf28luYIF4359NteMD+VyJ1X5OrR8ZG0bpEYYyq9qbpFyyJU4k+YOFc/E2HeewzuA8i4oM04drpnI8qu3+pv0HUv5sEQEiIn1ISPpwUVkAc/hH7scm5Ks2qP6uztaGMr5vEzJTTyglrdA4GcKsWG94HecnwKOkV9K+IALCtZfqcwG9/fsvhiItjyldWqVaVpASUxBxIsoa64cL7NrziP3LyhSVVBtLfwvQ7fx6A5O2cwKGgDFgFCgMTTJSXK1XOYj/AGBRziXyuLjlZDXNobCiXG1uL3uAMlBPSGi1nwEGiuOszQ3rtQpyCL5ovGQwi/9vkdyv48FNtbd0xEdbPuD2h1VmgZkkV1ttLUdAWuV7HaKi4xTzxE4xk7q33/DZbiIR0SWAgySbVO9Dx8yyxHab7XnnUimtoQKExFpWT3IjaSs6GQEtQXuHv15ALSJ6r6UJSAPvJ6yjW/XTQqW1sPf9y6XWu2ySIzqmZgC75F7hnligH7DeHl1J5LiU0OkvqV4Cep3wSaPFnpTWhFas0To6wP03A+j+DFHCCnkAAAAASUVORK5CYII="

/***/ }),

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ui_components_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(115);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1917);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_7__);
function _extends(){_extends=Object.assign||function(target){for(var i=1,source;i<arguments.length;i++){source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var target=_objectWithoutPropertiesLoose(source,excluded),key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(0<=excluded.indexOf(key))continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key]}}return target}function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var target={},sourceKeys=Object.keys(source),key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(0<=excluded.indexOf(key))continue;target[key]=source[key]}return target}var _ref2=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("svg",{className:"IconXMark-svg",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("g",{className:"IconXMark-path",transform:"translate(-1.000000, -1.000000)",fill:"#0C0C0D"},react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("path",{d:"M1.293,2.707 C1.03304342,2.45592553 0.928787403,2.08412211 1.02030284,1.73449268 C1.11181828,1.38486324 1.38486324,1.11181828 1.73449268,1.02030284 C2.08412211,0.928787403 2.45592553,1.03304342 2.707,1.293 L8,6.586 L13.293,1.293 C13.5440745,1.03304342 13.9158779,0.928787403 14.2655073,1.02030284 C14.6151368,1.11181828 14.8881817,1.38486324 14.9796972,1.73449268 C15.0712126,2.08412211 14.9669566,2.45592553 14.707,2.707 L9.414,8 L14.707,13.293 C15.0859722,13.6853789 15.0805524,14.3090848 14.6948186,14.6948186 C14.3090848,15.0805524 13.6853789,15.0859722 13.293,14.707 L8,9.414 L2.707,14.707 C2.31462111,15.0859722 1.69091522,15.0805524 1.30518142,14.6948186 C0.919447626,14.3090848 0.91402779,13.6853789 1.293,13.293 L6.586,8 L1.293,2.707 Z"}))),IconXMark=function(_ref){var className=_ref.className,iconProps=_objectWithoutProperties(_ref,["className"]);return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](ui_components_Icon__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"],_extends({},iconProps,{className:classnames__WEBPACK_IMPORTED_MODULE_5___default()("IconXMark",className),name:"inline-content"}),_ref2)};IconXMark.displayName="IconXMark";IconXMark.__docgenInfo={description:"",methods:[],displayName:"IconXMark",props:{alt:{required:!1,flowType:{name:"$PropertyType",elements:[{name:"IconProps"},{name:"literal",value:"'alt'"}],raw:"$PropertyType<IconProps, 'alt'>"},description:""},className:{required:!1,flowType:{name:"string"},description:""}}};/* harmony default export */ __webpack_exports__["a"] = (IconXMark);if("undefined"!=typeof STORYBOOK_REACT_CLASSES){STORYBOOK_REACT_CLASSES["src/ui/components/IconXMark/index.js"]={name:"IconXMark",docgenInfo:IconXMark.__docgenInfo,path:"src/ui/components/IconXMark/index.js"}}

/***/ }),

/***/ 750:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecommendedBadgeBase; });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47);
/* harmony import */ var core_i18n_translate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80);
/* harmony import */ var ui_components_IconRecommendedBadge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(343);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1953);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_5__);
var RecommendedBadgeBase=function(_ref){var i18n=_ref.i18n,_ref$onClick=_ref.onClick,onClick=void 0===_ref$onClick?null:_ref$onClick,size=_ref.size,label=i18n.gettext("Recommended");return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("RecommendedBadge",{"RecommendedBadge-large":"large"===size,"RecommendedBadge-small":"small"===size})},react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a",{className:"RecommendedBadge-link",href:"https://support.mozilla.org/kb/recommended-extensions-program",onClick:onClick,rel:"noopener noreferrer",target:"_blank",title:i18n.gettext("Firefox only recommends extensions that meet our standards for security and performance.")},react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ui_components_IconRecommendedBadge__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"],{size:size}),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span",{className:"RecommendedBadge-label"},label)))};RecommendedBadgeBase.displayName="RecommendedBadgeBase";var RecommendedBadge=Object(redux__WEBPACK_IMPORTED_MODULE_2__[/* compose */ "d"])(Object(core_i18n_translate__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])())(RecommendedBadgeBase);/* unused harmony default export */ var _unused_webpack_default_export = (RecommendedBadge);RecommendedBadgeBase.__docgenInfo={description:"",methods:[],displayName:"RecommendedBadgeBase",props:{onClick:{defaultValue:{value:"null",computed:!1},required:!1,flowType:{name:"union",raw:"Function | null",elements:[{name:"Function"},{name:"null"}]},description:""},size:{required:!0,flowType:{name:"RecommendedBadgeSize"},description:""},i18n:{required:!0,flowType:{name:"I18nType"},description:""}}};if("undefined"!=typeof STORYBOOK_REACT_CLASSES){STORYBOOK_REACT_CLASSES["src/ui/components/RecommendedBadge/index.js"]={name:"RecommendedBadgeBase",docgenInfo:RecommendedBadgeBase.__docgenInfo,path:"src/ui/components/RecommendedBadge/index.js"}}

/***/ }),

/***/ 752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-prototype-of.js
var es_object_get_prototype_of = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.set-prototype-of.js
var es_object_set_prototype_of = __webpack_require__(53);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(51);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/invariant/browser.js
var invariant_browser = __webpack_require__(1);
var browser_default = /*#__PURE__*/__webpack_require__.n(invariant_browser);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 15 modules
var es = __webpack_require__(70);

// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/react-router-dom/es/withRouter.js
var withRouter = __webpack_require__(1960);

// EXTERNAL MODULE: ./src/core/utils/index.js + 2 modules
var utils = __webpack_require__(35);

// EXTERNAL MODULE: ./src/core/i18n/translate.js
var translate = __webpack_require__(80);

// EXTERNAL MODULE: ./src/ui/components/Notice/index.js
var Notice = __webpack_require__(123);

// EXTERNAL MODULE: ./src/core/components/SiteNotices/styles.scss
var styles = __webpack_require__(1928);

// CONCATENATED MODULE: ./src/core/components/SiteNotices/index.js
function _typeof(obj){"@babel/helpers - typeof";if("function"==typeof Symbol&&"symbol"==typeof Symbol.iterator){_typeof=function(obj){return typeof obj}}else{_typeof=function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0,descriptor;i<props.length;i++){descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1;descriptor.configurable=!0;if("value"in descriptor)descriptor.writable=!0;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call)){return call}return _assertThisInitialized(self)}function _assertThisInitialized(self){if(void 0===self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)};return _getPrototypeOf(o)}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}});if(superClass)_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function(o,p){o.__proto__=p;return o};return _setPrototypeOf(o,p)}// This is needed because of https://github.com/mozilla/addons-frontend/issues/8616
//
// We cannot use `sanitizeUserHTML()` on a `<span />`, which is required to
// avoid the UI glitch so we configure our own sanitize function to make sure
// it is safe to use `<span />`.
var sanitizeNoticeHTML=function(text){return Object(utils["i" /* sanitizeHTML */])(Object(utils["g" /* nl2br */])(text),["a","b","br","em","i","strong"])};var SiteNotices_SiteNoticesBase=/*#__PURE__*/function(_React$Component){_inherits(SiteNoticesBase,_React$Component);function SiteNoticesBase(){_classCallCheck(this,SiteNoticesBase);return _possibleConstructorReturn(this,_getPrototypeOf(SiteNoticesBase).apply(this,arguments))}_createClass(SiteNoticesBase,[{key:"render",value:function render(){var _this$props=this.props,i18n=_this$props.i18n,siteIsReadOnly=_this$props.siteIsReadOnly,siteNotice=_this$props.siteNotice,notices=[];if(siteNotice){notices.push(react["createElement"](Notice["a" /* default */],{className:"SiteNotices",id:"amo-site-notice",type:"warning"},react["createElement"]("span",{// eslint-disable-next-line react/no-danger
dangerouslySetInnerHTML:sanitizeNoticeHTML(siteNotice)})))}if(siteIsReadOnly){notices.push(react["createElement"](Notice["a" /* default */],{className:"SiteNotices",id:"amo-site-read-only",type:"warning"},i18n.gettext("Some features are temporarily disabled while we\n            perform website maintenance. We'll be back to full capacity\n            shortly.")))}return notices}}]);return SiteNoticesBase}(react["Component"]);SiteNotices_SiteNoticesBase.displayName="SiteNoticesBase";var SiteNotices_mapStateToProps=function(state){return{siteIsReadOnly:state.site.readOnly,siteNotice:state.site.notice}};SiteNotices_SiteNoticesBase.__docgenInfo={description:"",methods:[],displayName:"SiteNoticesBase",props:{siteIsReadOnly:{required:!0,flowType:{name:"boolean"},description:""},siteNotice:{required:!0,flowType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},i18n:{required:!0,flowType:{name:"I18nType"},description:""}}};/* harmony default export */ var SiteNotices = (Object(redux["d" /* compose */])(Object(es["connect"])(SiteNotices_mapStateToProps),Object(translate["a" /* default */])())(SiteNotices_SiteNoticesBase));if("undefined"!=typeof STORYBOOK_REACT_CLASSES){STORYBOOK_REACT_CLASSES["src/core/components/SiteNotices/index.js"]={name:"SiteNoticesBase",docgenInfo:SiteNotices_SiteNoticesBase.__docgenInfo,path:"src/core/components/SiteNotices/index.js"}}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(85);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__(92);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(56);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(101);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__(103);

// EXTERNAL MODULE: ./src/core/client/config.js
var config = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/react-cookie/es6/withCookies.js
var withCookies = __webpack_require__(1959);

// EXTERNAL MODULE: ./src/core/reducers/survey.js
var survey = __webpack_require__(338);

// EXTERNAL MODULE: ./src/core/constants.js
var constants = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.freeze.js
var es_object_freeze = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/common-tags/es/index.js + 48 modules
var common_tags_es = __webpack_require__(18);

// EXTERNAL MODULE: ./src/core/logger.js
var logger = __webpack_require__(17);

// CONCATENATED MODULE: ./src/core/tracking.js
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1,source;i<arguments.length;i++){source=null!=arguments[i]?arguments[i]:{};if(i%2){ownKeys(Object(source),!0).forEach(function(key){_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}function _templateObject(){var data=_taggedTemplateLiteral(["Do Not Track Enabled; Google Analytics not\n        loaded and tracking disabled"]);_templateObject=function(){return data};return data}function _taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0)}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function tracking_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function tracking_defineProperties(target,props){for(var i=0,descriptor;i<props.length;i++){descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1;descriptor.configurable=!0;if("value"in descriptor)descriptor.writable=!0;Object.defineProperty(target,descriptor.key,descriptor)}}function tracking_createClass(Constructor,protoProps,staticProps){if(protoProps)tracking_defineProperties(Constructor.prototype,protoProps);if(staticProps)tracking_defineProperties(Constructor,staticProps);return Constructor}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}return obj}/* global navigator, window */function isDoNotTrackEnabled(){var _ref=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},_ref$_log=_ref._log,_log=void 0===_ref$_log?logger["a" /* default */]:_ref$_log,_ref$_navigator=_ref._navigator,_navigator=void 0===_ref$_navigator?"undefined"!=typeof navigator?navigator:null:_ref$_navigator,_ref$_window=_ref._window,_window=void 0===_ref$_window?"undefined"!=typeof window?window:null:_ref$_window;if(!_navigator||!_window){return!1}// We ignore things like `msDoNotTrack` because they are for older,
// unsupported browsers and don't really respect the DNT spec. This
// covers new versions of IE/Edge, Firefox from 32+, Chrome, Safari, and
// any browsers built on these stacks (Chromium, Tor Browser, etc.).
var dnt=_navigator.doNotTrack||_window.doNotTrack;if("1"===dnt){_log.info("Do Not Track is enabled");return!0}// Known DNT values not set, so we will assume it's off.
return!1}var tracking_Tracking=/*#__PURE__*/function(){// Tracking ID
function Tracking(){var _ref2=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},_ref2$_config=_ref2._config,_config=void 0===_ref2$_config?config["a" /* default */]:_ref2$_config,_ref2$_isDoNotTrackEn=_ref2._isDoNotTrackEnabled,_isDoNotTrackEnabled=void 0===_ref2$_isDoNotTrackEn?isDoNotTrackEnabled:_ref2$_isDoNotTrackEn;tracking_classCallCheck(this,Tracking);_defineProperty(this,"_log",void 0);_defineProperty(this,"logPrefix",void 0);_defineProperty(this,"trackingEnabled",void 0);_defineProperty(this,"id",void 0);if("undefined"==typeof window){return}this._log=logger["a" /* default */];this.logPrefix="[GA]";// this gets updated below
this.id=_config.get("trackingId");if(!Object(utils["c" /* convertBoolean */])(_config.get("trackingEnabled"))){this.log("GA disabled because trackingEnabled was false");this.trackingEnabled=!1}else if(!this.id){this.log("GA Disabled because trackingId was empty");this.trackingEnabled=!1}else if(_isDoNotTrackEnabled()){this.log(Object(common_tags_es["a" /* oneLine */])(_templateObject()));this.trackingEnabled=!1}else{this.log("Google Analytics is enabled");this.trackingEnabled=!0}this.logPrefix="[GA: ".concat(this.trackingEnabled?"ON":"OFF","]");if(this.trackingEnabled){// Create a Flow typed variable for `ga`.
/* eslint-disable */ // Snippet from Google UA docs: http://bit.ly/1O6Dsdh
window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;/* eslint-enable */ga("create",this.id,"auto");ga("set","transport","beacon");if(Object(utils["c" /* convertBoolean */])(_config.get("trackingSendInitPageView"))){ga("send","pageview")}// Set a custom dimension; this allows us to tell which front-end
// (addons-frontend vs addons-server) is being used in analytics.
ga("set","dimension3","addons-frontend")}}tracking_createClass(Tracking,[{key:"log",value:function(){if(this._log){for(var _this$_log,_len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key]}// eslint-disable-next-line amo/only-log-strings
(_this$_log=this._log).info.apply(_this$_log,[this.logPrefix].concat(args))}}},{key:"_ga",value:function _ga(){if(this.trackingEnabled){var _window2;(_window2=window).ga.apply(_window2,arguments)}}/*
   * Param          Type    Required  Description
   * obj.category   String  Yes       Typically the object that
   *                                  was interacted with (e.g. button)
   * obj.action     String  Yes       The type of interaction (e.g. click)
   * obj.label      String  No        Useful for categorizing events
   *                                  (e.g. nav buttons)
   * obj.value      Number  No        Values must be non-negative.
   *                                  Useful to pass counts (e.g. 4 times)
   */},{key:"sendEvent",value:function sendEvent(){var _ref3=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},category=_ref3.category,action=_ref3.action,label=_ref3.label,value=_ref3.value;if(!category){throw new Error("sendEvent: category is required")}if(!action){throw new Error("sendEvent: action is required")}var data={hitType:"event",eventCategory:category,eventAction:action,eventLabel:label,eventValue:value};this._ga("send",data);this.log("sendEvent",JSON.stringify(data))}/*
   * Should be called when a view changes or a routing update.
   */},{key:"setPage",value:function setPage(page){if(!page){throw new Error("setPage: page is required")}this._ga("set","page",page);this.log("setPage",page)}},{key:"pageView",value:function pageView(){var data=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};// See: https://developers.google.com/analytics/devguides/collection/analyticsjs/pages#pageview_fields
this._ga("send",_objectSpread({hitType:"pageview"},data));this.log("pageView",JSON.stringify(data))}/*
   * Can be called to set a dimension which will be sent with all subsequent
   * calls to GA.
   */},{key:"setDimension",value:function setDimension(_ref4){var dimension=_ref4.dimension,value=_ref4.value;browser_default()(dimension,"A dimension is required");browser_default()(value,"A value is required");this._ga("set",dimension,value);this.log("set",{dimension:dimension,value:value})}}]);return Tracking}();function getAddonTypeForTracking(type){var _ADDON_TYPE_DICT$ADDO;return(_ADDON_TYPE_DICT$ADDO={},_defineProperty(_ADDON_TYPE_DICT$ADDO,constants["f" /* ADDON_TYPE_DICT */],constants["Nb" /* TRACKING_TYPE_EXTENSION */]),_defineProperty(_ADDON_TYPE_DICT$ADDO,constants["g" /* ADDON_TYPE_EXTENSION */],constants["Nb" /* TRACKING_TYPE_EXTENSION */]),_defineProperty(_ADDON_TYPE_DICT$ADDO,constants["h" /* ADDON_TYPE_LANG */],constants["Nb" /* TRACKING_TYPE_EXTENSION */]),_defineProperty(_ADDON_TYPE_DICT$ADDO,constants["i" /* ADDON_TYPE_OPENSEARCH */],constants["Nb" /* TRACKING_TYPE_EXTENSION */]),_defineProperty(_ADDON_TYPE_DICT$ADDO,constants["j" /* ADDON_TYPE_STATIC_THEME */],constants["Pb" /* TRACKING_TYPE_STATIC_THEME */]),_ADDON_TYPE_DICT$ADDO)[type]||constants["Ob" /* TRACKING_TYPE_INVALID */]}var getAddonEventCategory=function(type,installAction){var isThemeType=constants["j" /* ADDON_TYPE_STATIC_THEME */]===type;switch(installAction){case constants["w" /* ENABLE_ACTION */]:return isThemeType?constants["y" /* ENABLE_THEME_CATEGORY */]:constants["x" /* ENABLE_EXTENSION_CATEGORY */];case constants["X" /* INSTALL_CANCELLED_ACTION */]:return isThemeType?constants["Z" /* INSTALL_CANCELLED_THEME_CATEGORY */]:constants["Y" /* INSTALL_CANCELLED_EXTENSION_CATEGORY */];case constants["bb" /* INSTALL_DOWNLOAD_FAILED_ACTION */]:return isThemeType?constants["db" /* INSTALL_DOWNLOAD_FAILED_THEME_CATEGORY */]:constants["cb" /* INSTALL_DOWNLOAD_FAILED_EXTENSION_CATEGORY */];case constants["ib" /* INSTALL_STARTED_ACTION */]:return isThemeType?constants["kb" /* INSTALL_STARTED_THEME_CATEGORY */]:constants["jb" /* INSTALL_STARTED_EXTENSION_CATEGORY */];case constants["Sb" /* UNINSTALL_ACTION */]:return isThemeType?constants["Vb" /* UNINSTALL_THEME_CATEGORY */]:constants["Ub" /* UNINSTALL_EXTENSION_CATEGORY */];default:return isThemeType?constants["mb" /* INSTALL_THEME_CATEGORY */]:constants["gb" /* INSTALL_EXTENSION_CATEGORY */];}};/* harmony default export */ var tracking = (new tracking_Tracking);
// EXTERNAL MODULE: ./src/core/components/SurveyNotice/styles.scss
var SurveyNotice_styles = __webpack_require__(1930);

// CONCATENATED MODULE: ./src/core/components/SurveyNotice/index.js
function SurveyNotice_typeof(obj){"@babel/helpers - typeof";if("function"==typeof Symbol&&"symbol"==typeof Symbol.iterator){SurveyNotice_typeof=function(obj){return typeof obj}}else{SurveyNotice_typeof=function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return SurveyNotice_typeof(obj)}function SurveyNotice_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function SurveyNotice_defineProperties(target,props){for(var i=0,descriptor;i<props.length;i++){descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1;descriptor.configurable=!0;if("value"in descriptor)descriptor.writable=!0;Object.defineProperty(target,descriptor.key,descriptor)}}function SurveyNotice_createClass(Constructor,protoProps,staticProps){if(protoProps)SurveyNotice_defineProperties(Constructor.prototype,protoProps);if(staticProps)SurveyNotice_defineProperties(Constructor,staticProps);return Constructor}function SurveyNotice_possibleConstructorReturn(self,call){if(call&&("object"===SurveyNotice_typeof(call)||"function"==typeof call)){return call}return SurveyNotice_assertThisInitialized(self)}function SurveyNotice_getPrototypeOf(o){SurveyNotice_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)};return SurveyNotice_getPrototypeOf(o)}function SurveyNotice_assertThisInitialized(self){if(void 0===self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function SurveyNotice_inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}});if(superClass)SurveyNotice_setPrototypeOf(subClass,superClass)}function SurveyNotice_setPrototypeOf(o,p){SurveyNotice_setPrototypeOf=Object.setPrototypeOf||function(o,p){o.__proto__=p;return o};return SurveyNotice_setPrototypeOf(o,p)}function SurveyNotice_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}return obj}var SurveyNotice_SurveyNoticeBase=/*#__PURE__*/function(_React$Component){SurveyNotice_inherits(SurveyNoticeBase,_React$Component);function SurveyNoticeBase(){var _getPrototypeOf2,_this;SurveyNotice_classCallCheck(this,SurveyNoticeBase);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key]}_this=SurveyNotice_possibleConstructorReturn(this,(_getPrototypeOf2=SurveyNotice_getPrototypeOf(SurveyNoticeBase)).call.apply(_getPrototypeOf2,[this].concat(args)));SurveyNotice_defineProperty(SurveyNotice_assertThisInitialized(_this),"dismissNotice",function(){var _this$props=_this.props,_config=_this$props._config,cookies=_this$props.cookies,dispatch=_this$props.dispatch;dispatch(Object(survey["b" /* dismissSurvey */])());// Even though a dismissal action is dispatched here, also save a
// cookie to manually synchronize state. The server code will load
// the cookie and synchronize state as part of the request.
// TODO: make this synchronization more automatic.
// See https://github.com/mozilla/addons-frontend/issues/5617
cookies.set(_config.get("dismissedExperienceSurveyCookieName"),"",{// Expire 180 days from now. This value is in seconds.
maxAge:15552000,path:"/"})});SurveyNotice_defineProperty(SurveyNotice_assertThisInitialized(_this),"onDismiss",function(){_this.dismissNotice();_this.track(constants["Ib" /* SURVEY_ACTION_DISMISSED */])});SurveyNotice_defineProperty(SurveyNotice_assertThisInitialized(_this),"onClickSurveyLink",function(){_this.dismissNotice();_this.track(constants["Kb" /* SURVEY_ACTION_VISITED */])});return _this}SurveyNotice_createClass(SurveyNoticeBase,[{key:"track",value:function track(action){this.props._tracking.sendEvent({action:action,category:constants["Lb" /* SURVEY_CATEGORY */]})}},{key:"componentDidMount",value:function componentDidMount(){if(this.shouldShowNotice()){this.track(constants["Jb" /* SURVEY_ACTION_SHOWN */])}}},{key:"shouldShowNotice",value:function shouldShowNotice(){var _this$props2=this.props,_config=_this$props2._config,_supportedLangs=_this$props2._supportedLangs,siteLang=_this$props2.siteLang,wasDismissed=_this$props2.wasDismissed;return _config.get("enableFeatureExperienceSurvey")&&!wasDismissed&&_supportedLangs.includes(siteLang)}},{key:"render",value:function render(){var _this$props3=this.props,i18n=_this$props3.i18n,location=_this$props3.location;if(!this.shouldShowNotice()){return null}// Pass along a source derived from the current URL path but with
// the preceding language path removed.
var surveyUrl=Object(utils["a" /* addQueryParams */])("https://qsurvey.mozilla.com/s3/addons-mozilla-org-survey",{source:location.pathname.split("/").slice(2).join("/")});return react["createElement"](Notice["a" /* default */],{actionHref:surveyUrl,actionOnClick:this.onClickSurveyLink,actionTarget:"_blank",actionText:i18n.gettext("Take short survey"),againstGrey20:!0,className:"SurveyNotice",dismissible:!0,id:"amo-experience-survey",onDismiss:this.onDismiss,type:"generic"},i18n.gettext("Thanks for visiting this site! Please take a minute or two to tell Firefox about your experience."))}}]);return SurveyNoticeBase}(react["Component"]);SurveyNotice_SurveyNoticeBase.displayName="SurveyNoticeBase";SurveyNotice_defineProperty(SurveyNotice_SurveyNoticeBase,"defaultProps",{_config:config["a" /* default */],_supportedLangs:["de","en-US","es","fr","ja","pl","pt-BR","ru","zh-CN","zh-TW"],_tracking:tracking});var SurveyNotice_mapStateToProps=function(state){return{siteLang:state.api.lang,wasDismissed:state.survey.wasDismissed}},SurveyNotice=Object(redux["d" /* compose */])(Object(es["connect"])(SurveyNotice_mapStateToProps),Object(translate["a" /* default */])(),withCookies["a" /* default */])(SurveyNotice_SurveyNoticeBase);/* harmony default export */ var components_SurveyNotice = (SurveyNotice);SurveyNotice_SurveyNoticeBase.__docgenInfo={description:"",methods:[{name:"track",docblock:null,modifiers:[],params:[{name:"action",type:{name:"string"}}],returns:null},{name:"shouldShowNotice",docblock:null,modifiers:[],params:[],returns:null},{name:"dismissNotice",docblock:null,modifiers:[],params:[],returns:null},{name:"onDismiss",docblock:null,modifiers:[],params:[],returns:null},{name:"onClickSurveyLink",docblock:null,modifiers:[],params:[],returns:null}],displayName:"SurveyNoticeBase",props:{_config:{defaultValue:{value:"config",computed:!0},required:!1,flowType:{name:"config"},description:""},_supportedLangs:{defaultValue:{value:"[\n  'de',\n  'en-US',\n  'es',\n  'fr',\n  'ja',\n  'pl',\n  'pt-BR',\n  'ru',\n  'zh-CN',\n  'zh-TW',\n]",computed:!1},required:!1,flowType:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},description:""},_tracking:{defaultValue:{value:"tracking",computed:!0},required:!1,flowType:{name:"tracking"},description:""},location:{required:!0,flowType:{name:"ReactRouterLocationType"},description:""},cookies:{required:!0,flowType:{name:"Cookies"},description:""},dispatch:{required:!0,flowType:{name:"DispatchFunc"},description:""},i18n:{required:!0,flowType:{name:"I18nType"},description:""},siteLang:{required:!0,flowType:{name:"string"},description:""},wasDismissed:{required:!0,flowType:{name:"boolean"},description:""}}};if("undefined"!=typeof STORYBOOK_REACT_CLASSES){STORYBOOK_REACT_CLASSES["src/core/components/SurveyNotice/index.js"]={name:"SurveyNoticeBase",docgenInfo:SurveyNotice_SurveyNoticeBase.__docgenInfo,path:"src/core/components/SurveyNotice/index.js"}}
// EXTERNAL MODULE: ./src/amo/components/AppBanner/styles.scss
var AppBanner_styles = __webpack_require__(1932);

// CONCATENATED MODULE: ./src/amo/components/AppBanner/index.js
var AppBanner_ref2=/*#__PURE__*/react["createElement"](SiteNotices,null);var AppBannerBase=function(_ref){var className=_ref.className,location=_ref.location;return react["createElement"]("div",{className:classnames_default()("AppBanner",className)},AppBanner_ref2,react["createElement"](components_SurveyNotice,{location:location}))};AppBannerBase.displayName="AppBannerBase";var AppBanner=Object(withRouter["a" /* default */])(AppBannerBase);/* harmony default export */ var components_AppBanner = (AppBanner);AppBannerBase.__docgenInfo={description:"",methods:[],displayName:"AppBannerBase",props:{className:{required:!1,flowType:{name:"string"},description:""},location:{required:!0,flowType:{name:"ReactRouterLocationType"},description:""}}};if("undefined"!=typeof STORYBOOK_REACT_CLASSES){STORYBOOK_REACT_CLASSES["src/amo/components/AppBanner/index.js"]={name:"AppBannerBase",docgenInfo:AppBannerBase.__docgenInfo,path:"src/amo/components/AppBanner/index.js"}}
// EXTERNAL MODULE: ./src/amo/components/Link/index.js
var Link = __webpack_require__(342);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(113);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.search.js
var es_string_search = __webpack_require__(185);

// EXTERNAL MODULE: ./node_modules/mozilla-version-comparator/mozilla-version-comparator.js
var mozilla_version_comparator = __webpack_require__(255);
var mozilla_version_comparator_default = /*#__PURE__*/__webpack_require__.n(mozilla_version_comparator);

// EXTERNAL MODULE: ./src/core/reducers/api.js
var api = __webpack_require__(36);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(111);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(142);

// EXTERNAL MODULE: ./node_modules/url/url.js
var url = __webpack_require__(75);
var url_default = /*#__PURE__*/__webpack_require__.n(url);

// EXTERNAL MODULE: ./src/core/imageUtils.js
var imageUtils = __webpack_require__(200);

// CONCATENATED MODULE: ./src/core/actions/installations.js
function setInstallState(installation){return{type:constants["lb" /* INSTALL_STATE */],payload:installation}}var setInstallError=function(_ref){var guid=_ref.guid,error=_ref.error;browser_default()(guid,"guid is required");return{type:constants["eb" /* INSTALL_ERROR */],payload:{guid:guid,error:error}}};
// EXTERNAL MODULE: ./src/core/addonManager.js
var addonManager = __webpack_require__(341);

// EXTERNAL MODULE: ./src/core/reducers/infoDialog.js
var infoDialog = __webpack_require__(337);

// EXTERNAL MODULE: ./src/core/reducers/versions.js
var versions = __webpack_require__(339);

// EXTERNAL MODULE: ./src/core/utils/addons.js
var addons = __webpack_require__(334);

// CONCATENATED MODULE: ./src/core/installAddon.js
function installAddon_typeof(obj){"@babel/helpers - typeof";if("function"==typeof Symbol&&"symbol"==typeof Symbol.iterator){installAddon_typeof=function(obj){return typeof obj}}else{installAddon_typeof=function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return installAddon_typeof(obj)}function _extends(){_extends=Object.assign||function(target){for(var i=1,source;i<arguments.length;i++){source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var target=_objectWithoutPropertiesLoose(source,excluded),key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(0<=excluded.indexOf(key))continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key]}}return target}function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var target={},sourceKeys=Object.keys(source),key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(0<=excluded.indexOf(key))continue;target[key]=source[key]}return target}function _templateObject2(){var data=installAddon_taggedTemplateLiteral(["Add-on \"","\" not found so setting status to\n            UNINSTALLED; exact error: ",""]);_templateObject2=function(){return data};return data}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){reject(error);return}if(info.done){resolve(value)}else{Promise.resolve(value).then(_next,_throw)}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)})}}function installAddon_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function installAddon_defineProperties(target,props){for(var i=0,descriptor;i<props.length;i++){descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1;descriptor.configurable=!0;if("value"in descriptor)descriptor.writable=!0;Object.defineProperty(target,descriptor.key,descriptor)}}function installAddon_createClass(Constructor,protoProps,staticProps){if(protoProps)installAddon_defineProperties(Constructor.prototype,protoProps);if(staticProps)installAddon_defineProperties(Constructor,staticProps);return Constructor}function installAddon_possibleConstructorReturn(self,call){if(call&&("object"===installAddon_typeof(call)||"function"==typeof call)){return call}return installAddon_assertThisInitialized(self)}function installAddon_assertThisInitialized(self){if(void 0===self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function installAddon_getPrototypeOf(o){installAddon_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)};return installAddon_getPrototypeOf(o)}function installAddon_inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}});if(superClass)installAddon_setPrototypeOf(subClass,superClass)}function installAddon_setPrototypeOf(o,p){installAddon_setPrototypeOf=Object.setPrototypeOf||function(o,p){o.__proto__=p;return o};return installAddon_setPrototypeOf(o,p)}function installAddon_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});keys.push.apply(keys,symbols)}return keys}function installAddon_objectSpread(target){for(var i=1,source;i<arguments.length;i++){source=null!=arguments[i]?arguments[i]:{};if(i%2){installAddon_ownKeys(Object(source),!0).forEach(function(key){installAddon_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{installAddon_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}function installAddon_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}return obj}function installAddon_templateObject(){var data=installAddon_taggedTemplateLiteral(["No file exists for os\n      ","; platform files:"]);installAddon_templateObject=function(){return data};return data}function installAddon_taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0)}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function makeProgressHandler(_ref){var _tracking=_ref._tracking,dispatch=_ref.dispatch,guid=_ref.guid,name=_ref.name,type=_ref.type;return function(addonInstall,event){if("STATE_DOWNLOADING"===addonInstall.state){var downloadProgress=parseInt(100*addonInstall.progress/addonInstall.maxProgress,10);dispatch({type:constants["u" /* DOWNLOAD_PROGRESS */],payload:{guid:guid,downloadProgress:downloadProgress}})}else if("onDownloadEnded"===event.type){dispatch(setInstallState({guid:guid,status:constants["U" /* INSTALLING */]}))}else if("onDownloadFailed"===event.type){// See: https://github.com/mozilla/addons-frontend/issues/7985
if(event.target&&event.target.error===constants["C" /* ERROR_CORRUPT_FILE */]){dispatch(setInstallError({guid:guid,error:constants["C" /* ERROR_CORRUPT_FILE */]}))}else{dispatch(setInstallError({guid:guid,error:constants["t" /* DOWNLOAD_FAILED */]}));_tracking.sendEvent({action:getAddonTypeForTracking(type),category:getAddonEventCategory(type,constants["bb" /* INSTALL_DOWNLOAD_FAILED_ACTION */]),label:name})}}else if("onInstallCancelled"===event.type){dispatch({type:constants["W" /* INSTALL_CANCELLED */],payload:{guid:guid}});_tracking.sendEvent({action:getAddonTypeForTracking(type),category:getAddonEventCategory(type,constants["X" /* INSTALL_CANCELLED_ACTION */]),label:name})}else if("onInstallFailed"===event.type){dispatch(setInstallError({guid:guid,error:constants["hb" /* INSTALL_FAILED */]}))}}}/**
 * This is a helper to find the correct install URL for the user agent's
 * platform.
 */var findInstallURL=function(_ref2){var _ref2$_findFileForPla=_ref2._findFileForPlatform,_findFileForPlatform=void 0===_ref2$_findFileForPla?utils["d" /* findFileForPlatform */]:_ref2$_findFileForPla,_ref2$appendSource=_ref2.appendSource,appendSource=void 0===_ref2$appendSource?!0:_ref2$appendSource,defaultInstallSource=_ref2.defaultInstallSource,location=_ref2.location,platformFiles=_ref2.platformFiles,userAgentInfo=_ref2.userAgentInfo,source;if(appendSource){browser_default()(location,"The location parameter is required when appendSource is true");source=location.query.src||defaultInstallSource}var platformFile=_findFileForPlatform({platformFiles:platformFiles,userAgentInfo:userAgentInfo}),installURL=platformFile&&platformFile.url;if(!installURL){// This could happen for themes which do not have version files.
logger["a" /* default */].debug(Object(common_tags_es["a" /* oneLine */])(installAddon_templateObject(),JSON.stringify(userAgentInfo.os)),platformFiles);return}if(!source){return installURL}// Add ?src=...
var urlParts=url_default.a.parse(installURL,!0);return url_default.a.format(installAddon_objectSpread({},urlParts,{// Reset the search string so we can define a new one.
search:void 0,query:installAddon_objectSpread({},urlParts.query,{src:source})}))};var installAddon_WithInstallHelpers=/*#__PURE__*/function(_React$Component){installAddon_inherits(WithInstallHelpers,_React$Component);function WithInstallHelpers(){installAddon_classCallCheck(this,WithInstallHelpers);return installAddon_possibleConstructorReturn(this,installAddon_getPrototypeOf(WithInstallHelpers).apply(this,arguments))}installAddon_createClass(WithInstallHelpers,[{key:"componentDidMount",value:function componentDidMount(){this.setCurrentStatus()}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){var oldGuid=prevProps.addon?prevProps.addon.guid:null,newGuid=this.props.addon?this.props.addon.guid:null;if(newGuid&&newGuid!==oldGuid){this.props._log.info("Updating add-on status");this.setCurrentStatus()}}},{key:"isAddonEnabled",value:function(){var _isAddonEnabled=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee(){var _this$props,_addonManager,_log,addon,clientAddon;return regeneratorRuntime.wrap(function(_context){while(1){switch(_context.prev=_context.next){case 0:_this$props=this.props,_addonManager=_this$props._addonManager,_log=_this$props._log,addon=_this$props.addon;if(addon){_context.next=4;break}_log.debug("no addon, assuming addon is not enabled");return _context.abrupt("return",!1);case 4:_context.prev=4;_context.next=7;return _addonManager.getAddon(addon.guid);case 7:clientAddon=_context.sent;return _context.abrupt("return",clientAddon.isEnabled);case 11:_context.prev=11;_context.t0=_context["catch"](4);// eslint-disable-next-line amo/only-log-strings
_log.error("could not determine whether the add-on was enabled",_context.t0);case 14:return _context.abrupt("return",!1);case 15:case"end":return _context.stop();}}},_callee,this,[[4,11]])}));return function isAddonEnabled(){return _isAddonEnabled.apply(this,arguments)}}()},{key:"setCurrentStatus",value:function setCurrentStatus(){var _this$props2=this.props,_addonManager=_this$props2._addonManager,_log=_this$props2._log,addon=_this$props2.addon,currentVersion=_this$props2.currentVersion,defaultInstallSource=_this$props2.defaultInstallSource,dispatch=_this$props2.dispatch,location=_this$props2.location,userAgentInfo=_this$props2.userAgentInfo;if(!_addonManager.hasAddonManager()){_log.info("No addon manager, cannot set add-on status");return Promise.resolve()}if(!addon){_log.debug("no addon, aborting setCurrentStatus()");return Promise.resolve()}if(!currentVersion){_log.debug("no currentVersion, aborting setCurrentStatus()");return Promise.resolve()}var guid=addon.guid,type=addon.type,platformFiles=currentVersion.platformFiles,installURL=findInstallURL({defaultInstallSource:defaultInstallSource,location:location,platformFiles:platformFiles,userAgentInfo:userAgentInfo}),payload={guid:guid,url:installURL};_log.info("Setting add-on status");return _addonManager.getAddon(guid).then(function(clientAddon){var status=_addonManager.getAddonStatus({addon:clientAddon,type:type});dispatch(setInstallState(installAddon_objectSpread({},payload,{status:status})))},function(error){_log.info(Object(common_tags_es["a" /* oneLine */])(_templateObject2(),guid,error));dispatch(setInstallState(installAddon_objectSpread({},payload,{status:constants["Qb" /* UNINSTALLED */]})))}).catch(function(error){_log.error("Caught error from addonManager: ".concat(error));// Dispatch a generic error should the success/error functions throw.
dispatch(setInstallState({guid:guid,status:constants["z" /* ERROR */],error:constants["E" /* FATAL_ERROR */]}))})}},{key:"enable",value:function enable(){var _this=this,_ref3=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{sendTrackingEvent:!0},sendTrackingEvent=_ref3.sendTrackingEvent,_this$props3=this.props,_addonManager=_this$props3._addonManager,_log=_this$props3._log,_tracking=_this$props3._tracking,dispatch=_this$props3.dispatch,addon=_this$props3.addon;if(!addon){_log.debug("no addon found, aborting enable().");return Promise.resolve()}var guid=addon.guid,type=addon.type,name=addon.name;return _addonManager.enable(guid).then(function(){if(sendTrackingEvent){_tracking.sendEvent({action:getAddonTypeForTracking(type),category:getAddonEventCategory(type,constants["w" /* ENABLE_ACTION */]),label:name})}if(!_addonManager.hasPermissionPromptsEnabled()){_this.showInfo()}}).catch(function(err){if(err&&err.message===constants["Ab" /* SET_ENABLE_NOT_AVAILABLE */]){_log.info("addon.setEnabled not available. Unable to enable ".concat(guid))}else{// eslint-disable-next-line amo/only-log-strings
_log.error("Error while trying to enable ".concat(guid,":"),err);dispatch(setInstallState({guid:guid,status:constants["z" /* ERROR */],error:constants["E" /* FATAL_ERROR */]}))}})}},{key:"install",value:function install(){var _this2=this,_this$props4=this.props,_addonManager=_this$props4._addonManager,_log=_this$props4._log,_tracking=_this$props4._tracking,addon=_this$props4.addon,currentVersion=_this$props4.currentVersion,defaultInstallSource=_this$props4.defaultInstallSource,dispatch=_this$props4.dispatch,location=_this$props4.location,userAgentInfo=_this$props4.userAgentInfo;if(!addon){_log.debug("no addon found, aborting install().");return Promise.resolve()}if(!currentVersion){_log.debug("no currentVersion found, aborting install().");return Promise.resolve()}var guid=addon.guid,name=addon.name,type=addon.type,platformFiles=currentVersion.platformFiles;return new Promise(function(resolve){dispatch({type:constants["Hb" /* START_DOWNLOAD */],payload:{guid:guid}});_tracking.sendEvent({action:getAddonTypeForTracking(type),category:getAddonEventCategory(type,constants["ib" /* INSTALL_STARTED_ACTION */]),label:name});var installURL=findInstallURL({defaultInstallSource:defaultInstallSource,location:location,platformFiles:platformFiles,userAgentInfo:userAgentInfo});resolve(installURL)}).then(function(installURL){var hash=installURL&&Object(addons["a" /* getFileHash */])({addon:addon,installURL:installURL,version:currentVersion});return _addonManager.install(installURL,makeProgressHandler({_tracking:_tracking,dispatch:dispatch,guid:guid,name:name,type:type}),{src:defaultInstallSource,hash:hash})}).then(function(){_tracking.sendEvent({action:getAddonTypeForTracking(type),category:getAddonEventCategory(type,constants["V" /* INSTALL_ACTION */]),label:name});if(!_addonManager.hasPermissionPromptsEnabled()){_this2.showInfo()}}).catch(function(error){_log.error("Install error: ".concat(error));dispatch(setInstallError({guid:guid,error:constants["F" /* FATAL_INSTALL_ERROR */]}))})}},{key:"showInfo",value:function showInfo(){var _this$props5=this.props,addon=_this$props5.addon,dispatch=_this$props5.dispatch;browser_default()(addon,"addon is required");dispatch(Object(infoDialog["b" /* showInfoDialog */])({addonName:addon.name,imageURL:Object(imageUtils["a" /* getAddonIconUrl */])(addon)}))}},{key:"uninstall",value:function uninstall(_ref4){var guid=_ref4.guid,name=_ref4.name,type=_ref4.type,_this$props6=this.props,_addonManager=_this$props6._addonManager,_log=_this$props6._log,_tracking=_this$props6._tracking,dispatch=_this$props6.dispatch;dispatch(setInstallState({guid:guid,status:constants["Rb" /* UNINSTALLING */]}));var action=getAddonTypeForTracking(type);return _addonManager.uninstall(guid).then(function(){_tracking.sendEvent({action:action,category:getAddonEventCategory(type,constants["Sb" /* UNINSTALL_ACTION */]),label:name})}).catch(function(error){_log.error("Uninstall error: ".concat(error));dispatch(setInstallError({guid:guid,error:constants["G" /* FATAL_UNINSTALL_ERROR */]}))})}},{key:"render",value:function render(){var _this3=this,_this$props7=this.props,WrappedComponent=_this$props7.WrappedComponent,_addonManager=_this$props7._addonManager,passThroughProps=_objectWithoutProperties(_this$props7,["WrappedComponent","_addonManager"]),injectedProps={enable:function enable(){return _this3.enable.apply(_this3,arguments)},// We pass a `boolean` value here, not the function.
hasAddonManager:_addonManager.hasAddonManager(),install:function install(){return _this3.install.apply(_this3,arguments)},isAddonEnabled:function isAddonEnabled(){return _this3.isAddonEnabled.apply(_this3,arguments)},setCurrentStatus:function setCurrentStatus(){return _this3.setCurrentStatus.apply(_this3,arguments)},uninstall:function uninstall(){return _this3.uninstall.apply(_this3,arguments)}};return react["createElement"](WrappedComponent,_extends({},injectedProps,passThroughProps))}}]);return WithInstallHelpers}(react["Component"]);installAddon_WithInstallHelpers.displayName="WithInstallHelpers";installAddon_defineProperty(installAddon_WithInstallHelpers,"defaultProps",{_addonManager:addonManager,_log:logger["a" /* default */],_tracking:tracking});var withInstallHelpers=function(WrappedComponent){// eslint-disable-next-line react/static-property-placement
installAddon_WithInstallHelpers.displayName="WithInstallHelpers(".concat(Object(utils["e" /* getDisplayName */])(WrappedComponent),")");return Object(es["connect"])(function mapStateToProps(state,ownProps){var addon=ownProps.addon,defaultInstallSource=ownProps.defaultInstallSource,location=ownProps.location;browser_default()("undefined"!=typeof addon,"addon is required");browser_default()("undefined"!=typeof defaultInstallSource,"defaultInstallSource is required");browser_default()(location,"location is required");var currentVersion=ownProps.version;if(!currentVersion){currentVersion=addon&&addon.currentVersionId?Object(versions["b" /* getVersionById */])({id:addon.currentVersionId,state:state.versions}):null}return{WrappedComponent:WrappedComponent,currentVersion:currentVersion,userAgentInfo:state.api.userAgentInfo}})(installAddon_WithInstallHelpers)};installAddon_WithInstallHelpers.__docgenInfo={description:"",methods:[{name:"isAddonEnabled",docblock:null,modifiers:["async"],params:[],returns:null},{name:"setCurrentStatus",docblock:null,modifiers:[],params:[],returns:null},{name:"enable",docblock:null,modifiers:[],params:[{name:"{ sendTrackingEvent }: EnableParams",type:null}],returns:null},{name:"install",docblock:null,modifiers:[],params:[],returns:null},{name:"showInfo",docblock:null,modifiers:[],params:[],returns:null},{name:"uninstall",docblock:null,modifiers:[],params:[{name:"{ guid, name, type }: UninstallParams",type:{name:"signature",type:"object",raw:"{|\n  guid: string,\n  name: string,\n  type: string,\n|}",signature:{properties:[{key:"guid",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]},alias:"UninstallParams"}}],returns:null}],displayName:"WithInstallHelpers",props:{_addonManager:{defaultValue:{value:"addonManager",computed:!0},required:!1,flowType:{name:"addonManager"},description:""},_log:{defaultValue:{value:"log",computed:!0},required:!1,flowType:{name:"log"},description:""},_tracking:{defaultValue:{value:"tracking",computed:!0},required:!1,flowType:{name:"tracking"},description:""},addon:{required:!0,flowType:{name:"union",raw:"AddonType | null",elements:[{name:"AddonType"},{name:"null"}]},description:""},defaultInstallSource:{required:!0,flowType:{name:"string"},description:""},location:{required:!0,flowType:{name:"ReactRouterLocationType"},description:""},version:{required:!1,flowType:{name:"union",raw:"AddonVersionType | null",elements:[{name:"AddonVersionType"},{name:"null"}]},description:""},WrappedComponent:{required:!0,flowType:{name:"ReactComponentType",raw:"React.ComponentType<any>",elements:[{name:"any"}]},description:""},currentVersion:{required:!0,flowType:{name:"union",raw:"AddonVersionType | null",elements:[{name:"AddonVersionType"},{name:"null"}]},description:""},dispatch:{required:!0,flowType:{name:"DispatchFunc"},description:""},userAgentInfo:{required:!0,flowType:{name:"UserAgentInfoType"},description:""}}};if("undefined"!=typeof STORYBOOK_REACT_CLASSES){STORYBOOK_REACT_CLASSES["src/core/installAddon.js"]={name:"WithInstallHelpers",docgenInfo:installAddon_WithInstallHelpers.__docgenInfo,path:"src/core/installAddon.js"}}
// CONCATENATED MODULE: ./src/core/utils/compatibility.js
function _templateObject3(){var data=compatibility_taggedTemplateLiteral(["minVersion of \"*\" was passed to\n        isCompatibleWithUserAgent(); bad add-on version data (browserVersion:\n        ",")"]);_templateObject3=function(){return data};return data}function compatibility_templateObject2(){var data=compatibility_taggedTemplateLiteral(["maxVersion "," for add-on lower than\n      browser version ",", but add-on still marked as\n      compatible because we largely ignore maxVersion. See:\n      https://github.com/mozilla/addons-frontend/issues/2074"]);compatibility_templateObject2=function(){return data};return data}function compatibility_templateObject(){var data=compatibility_taggedTemplateLiteral(["addon guid: \"","\" is incompatible with\n        clientApp: \"","\""]);compatibility_templateObject=function(){return data};return data}function compatibility_taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0)}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}/* global window */// HACK: This is the GUID for the Facebook Container
// add-on, which has a special-cased download URL supplied.
// See: https://github.com/mozilla/addons-server/issues/7982
var FACEBOOK_CONTAINER_ADDON_GUID="@contain-facebook";var FACEBOOK_CONTAINER_DOWNLOAD_URL="https://www.mozilla.org/firefox/facebookcontainer/";function getCompatibleVersions(){var _ref=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},_ref$_log=_ref._log,_log=void 0===_ref$_log?logger["a" /* default */]:_ref$_log,addon=_ref.addon,clientApp=_ref.clientApp,currentVersion=_ref.currentVersion,maxVersion=null,minVersion=null,supportsClientApp=!1;if(currentVersion){var compatInfo=currentVersion.compatibility[clientApp];if(compatInfo){supportsClientApp=!0;maxVersion=compatInfo.max;minVersion=compatInfo.min}if(!supportsClientApp){_log.warn(Object(common_tags_es["a" /* oneLine */])(compatibility_templateObject(),addon.guid,clientApp))}}return{supportsClientApp:supportsClientApp,maxVersion:maxVersion,minVersion:minVersion}}var isFirefox=function(_ref2){var userAgentInfo=_ref2.userAgentInfo;browser_default()(userAgentInfo,"userAgentInfo is required");return"Firefox"===userAgentInfo.browser.name};var isFenix=function(userAgentInfo){// If the userAgent is false there was likely a programming error.
browser_default()(userAgentInfo,"userAgentInfo is required");var browser=userAgentInfo.browser,os=userAgentInfo.os;if(isFirefox({userAgentInfo:userAgentInfo})&&os.name===api["b" /* USER_AGENT_OS_ANDROID */]&&0<=mozilla_version_comparator_default()(browser.version,"69.0")){return!0}return!1};function isCompatibleWithUserAgent(){var _ref3=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},_ref3$_findInstallURL=_ref3._findInstallURL,_findInstallURL=void 0===_ref3$_findInstallURL?findInstallURL:_ref3$_findInstallURL,_ref3$_log=_ref3._log,_log=void 0===_ref3$_log?logger["a" /* default */]:_ref3$_log,_ref3$_window=_ref3._window,_window=void 0===_ref3$_window?"undefined"!=typeof window?window:{}:_ref3$_window,addon=_ref3.addon,currentVersion=_ref3.currentVersion,maxVersion=_ref3.maxVersion,minVersion=_ref3.minVersion,userAgentInfo=_ref3.userAgentInfo;// If the userAgent is false there was likely a programming error.
browser_default()(userAgentInfo,"userAgentInfo is required");var browser=userAgentInfo.browser,os=userAgentInfo.os;// We need a Firefox browser compatible with add-ons (Firefox for iOS does
// not currently support add-ons).
if("Firefox"===browser.name&&"iOS"===os.name){return{compatible:!1,reason:constants["M" /* INCOMPATIBLE_FIREFOX_FOR_IOS */]}}if(addon.type===constants["i" /* ADDON_TYPE_OPENSEARCH */]&&!(_window.external&&"AddSearchProvider"in _window.external)){return{compatible:!1,reason:constants["P" /* INCOMPATIBLE_NO_OPENSEARCH */]}}if(!isFirefox({userAgentInfo:userAgentInfo})){return{compatible:!1,reason:constants["O" /* INCOMPATIBLE_NOT_FIREFOX */]}}// Fenix does not support add-ons (yet?).
// See: https://github.com/mozilla-mobile/fenix/issues/1134
// See also: https://github.com/mozilla/addons-frontend/issues/7963
if(isFenix(userAgentInfo)){return{compatible:!1,reason:constants["L" /* INCOMPATIBLE_FIREFOX_FENIX */]}}// At this point we need a currentVersion in order for an extension to be
// marked as compatible.
if(!currentVersion){return{compatible:!1,reason:constants["S" /* INCOMPATIBLE_UNSUPPORTED_PLATFORM */]}}// For Android, we need to check that compatibility info exists for `android`.
if(os.name===api["b" /* USER_AGENT_OS_ANDROID */]&&!currentVersion.compatibility[constants["p" /* CLIENT_APP_ANDROID */]]){return{compatible:!1,reason:constants["K" /* INCOMPATIBLE_ANDROID_UNSUPPORTED */]}}// Do version checks, if this add-on has minimum or maximum version
// requirements.
// The mozilla-version-comparator API is quite strange; a result of
// `1` means the first argument is higher in version than the second.
//
// Being over the maxVersion, oddly, is not actually a reason to
// disable the install button or mark the add-on as incompatible
// with this version of Firefox. But we log the version mismatch
// here so it's not totally silent and a future developer isn't as
// confused by this as tofumatt was.
// See: https://github.com/mozilla/addons-frontend/issues/2074#issuecomment-286983423
if(maxVersion&&1===mozilla_version_comparator_default()(browser.version,maxVersion)){if(currentVersion.isStrictCompatibilityEnabled){return{compatible:!1,reason:constants["Q" /* INCOMPATIBLE_OVER_MAX_VERSION */]}}_log.info(Object(common_tags_es["a" /* oneLine */])(compatibility_templateObject2(),maxVersion,browser.version))}// A result of `-1` means the second argument is a lower version than the
// first.
if(minVersion&&-1===mozilla_version_comparator_default()(browser.version,minVersion)){if("*"===minVersion){_log.error(Object(common_tags_es["a" /* oneLine */])(_templateObject3(),browser.version))}// `minVersion` is always respected, regardless of
// `isStrictCompatibilityEnabled`'s value.
return{compatible:!1,reason:constants["R" /* INCOMPATIBLE_UNDER_MIN_VERSION */]}}// Even if an extension's version is marked compatible,
// we need to make sure it has a matching platform file
// to work around some bugs.
// See https://github.com/mozilla/addons-server/issues/6576
var platformFiles=currentVersion.platformFiles;if(addon.type===constants["g" /* ADDON_TYPE_EXTENSION */]&&!_findInstallURL({appendSource:!1,platformFiles:platformFiles,userAgentInfo:userAgentInfo})){return{compatible:!1,reason:constants["S" /* INCOMPATIBLE_UNSUPPORTED_PLATFORM */]}}// If we made it here we're compatible (yay!)
return{compatible:!0,reason:null}}function getClientCompatibility(){var _ref4=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},addon=_ref4.addon,clientApp=_ref4.clientApp,currentVersion=_ref4.currentVersion,userAgentInfo=_ref4.userAgentInfo,_ref4$_window=_ref4._window,_window=void 0===_ref4$_window?"undefined"!=typeof window?window:{}:_ref4$_window,_ref4$_log=_ref4._log,_log=void 0===_ref4$_log?logger["a" /* default */]:_ref4$_log,_getCompatibleVersion=getCompatibleVersions({addon:addon,clientApp:clientApp,currentVersion:currentVersion}),supportsClientApp=_getCompatibleVersion.supportsClientApp,maxVersion=_getCompatibleVersion.maxVersion,minVersion=_getCompatibleVersion.minVersion,agent=isCompatibleWithUserAgent({addon:addon,currentVersion:currentVersion,maxVersion:maxVersion,minVersion:minVersion,userAgentInfo:userAgentInfo,_window:_window}),reason;if(!supportsClientApp){reason=constants["S" /* INCOMPATIBLE_UNSUPPORTED_PLATFORM */]}else{reason=agent.reason}var downloadUrl;if(addon&&addon.guid===FACEBOOK_CONTAINER_ADDON_GUID){downloadUrl=FACEBOOK_CONTAINER_DOWNLOAD_URL}var compatible=agent.compatible&&supportsClientApp;if(compatible&&addon&&!0===addon.isRestartRequired){var browser=userAgentInfo.browser;if("Firefox"===browser.name&&0<=mozilla_version_comparator_default()(browser.version,"61.0")){compatible=!1;reason=constants["N" /* INCOMPATIBLE_NON_RESTARTLESS_ADDON */];_log.debug("add-on is incompatible because it is a non-restartless add-on")}}return{compatible:compatible,downloadUrl:downloadUrl,maxVersion:maxVersion,minVersion:minVersion,reason:reason}}var isQuantumCompatible=function(_ref5){var addon=_ref5.addon;// TODO: refactor code that inspects the real compatibility
// object and re-use that logic to accomplish this instead.
// https://github.com/mozilla/addons-frontend/issues/3814
// These checks are fragile because future mozilla-signed extensions
// may not be Quantum compatible.
return addon.isWebExtension||addon.isMozillaSignedExtension};var correctedLocationForPlatform=function(_ref6){var clientApp=_ref6.clientApp,location=_ref6.location,userAgentInfo=_ref6.userAgentInfo;// If the userAgent is false there was likely a programming error.
browser_default()(userAgentInfo,"userAgentInfo is required");var browser=userAgentInfo.browser,os=userAgentInfo.os,currentClientApp,newClientApp;if(os.name===api["h" /* USER_AGENT_OS_IOS */]){return null}if(os.name===api["b" /* USER_AGENT_OS_ANDROID */]&&browser.name===api["a" /* USER_AGENT_BROWSER_FIREFOX */]&&clientApp===constants["q" /* CLIENT_APP_FIREFOX */]){currentClientApp=constants["q" /* CLIENT_APP_FIREFOX */];newClientApp=constants["p" /* CLIENT_APP_ANDROID */]}if(os.name!==api["b" /* USER_AGENT_OS_ANDROID */]&&browser.name===api["a" /* USER_AGENT_BROWSER_FIREFOX */]&&clientApp===constants["p" /* CLIENT_APP_ANDROID */]){currentClientApp=constants["p" /* CLIENT_APP_ANDROID */];newClientApp=constants["q" /* CLIENT_APP_FIREFOX */]}return currentClientApp&&newClientApp?"".concat(location.pathname.replace(currentClientApp,newClientApp)).concat(location.search):null};
// EXTERNAL MODULE: ./src/amo/components/WrongPlatformWarning/styles.scss
var WrongPlatformWarning_styles = __webpack_require__(1934);

// CONCATENATED MODULE: ./src/amo/components/WrongPlatformWarning/index.js
function WrongPlatformWarning_typeof(obj){"@babel/helpers - typeof";if("function"==typeof Symbol&&"symbol"==typeof Symbol.iterator){WrongPlatformWarning_typeof=function(obj){return typeof obj}}else{WrongPlatformWarning_typeof=function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return WrongPlatformWarning_typeof(obj)}function WrongPlatformWarning_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function WrongPlatformWarning_defineProperties(target,props){for(var i=0,descriptor;i<props.length;i++){descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1;descriptor.configurable=!0;if("value"in descriptor)descriptor.writable=!0;Object.defineProperty(target,descriptor.key,descriptor)}}function WrongPlatformWarning_createClass(Constructor,protoProps,staticProps){if(protoProps)WrongPlatformWarning_defineProperties(Constructor.prototype,protoProps);if(staticProps)WrongPlatformWarning_defineProperties(Constructor,staticProps);return Constructor}function WrongPlatformWarning_possibleConstructorReturn(self,call){if(call&&("object"===WrongPlatformWarning_typeof(call)||"function"==typeof call)){return call}return WrongPlatformWarning_assertThisInitialized(self)}function WrongPlatformWarning_assertThisInitialized(self){if(void 0===self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function WrongPlatformWarning_getPrototypeOf(o){WrongPlatformWarning_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)};return WrongPlatformWarning_getPrototypeOf(o)}function WrongPlatformWarning_inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}});if(superClass)WrongPlatformWarning_setPrototypeOf(subClass,superClass)}function WrongPlatformWarning_setPrototypeOf(o,p){WrongPlatformWarning_setPrototypeOf=Object.setPrototypeOf||function(o,p){o.__proto__=p;return o};return WrongPlatformWarning_setPrototypeOf(o,p)}function WrongPlatformWarning_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}return obj}var FENIX_LINK_DESTINATION="https://support.mozilla.org/kb/add-compatibility-firefox-preview/";var WrongPlatformWarning_WrongPlatformWarningBase=/*#__PURE__*/function(_React$Component){WrongPlatformWarning_inherits(WrongPlatformWarningBase,_React$Component);function WrongPlatformWarningBase(){WrongPlatformWarning_classCallCheck(this,WrongPlatformWarningBase);return WrongPlatformWarning_possibleConstructorReturn(this,WrongPlatformWarning_getPrototypeOf(WrongPlatformWarningBase).apply(this,arguments))}WrongPlatformWarning_createClass(WrongPlatformWarningBase,[{key:"render",value:function render(){var _this$props=this.props,_correctedLocationForPlatform=_this$props._correctedLocationForPlatform,_isFenix=_this$props._isFenix,className=_this$props.className,clientApp=_this$props.clientApp,i18n=_this$props.i18n,location=_this$props.location,userAgentInfo=_this$props.userAgentInfo,message;if(_isFenix(userAgentInfo)){message=i18n.sprintf(this.props.fixFenixLinkMessage||i18n.gettext("To learn about add-ons compatible with Firefox for Android,\n               <a href=\"%(newLocation)s\">click here</a>."),{newLocation:FENIX_LINK_DESTINATION})}else{var newLocation=_correctedLocationForPlatform({clientApp:clientApp,location:location,userAgentInfo:userAgentInfo});if(!newLocation){return null}var fixAndroidLinkMessage=this.props.fixAndroidLinkMessage||i18n.gettext("To find add-ons compatible with Firefox on Android,\n               <a href=\"%(newLocation)s\">visit our mobile site</a>."),fixFirefoxLinkMessage=this.props.fixFirefoxLinkMessage||i18n.gettext("To find add-ons compatible with Firefox on desktop,\n               <a href=\"%(newLocation)s\">visit our desktop site</a>.");message=clientApp===constants["p" /* CLIENT_APP_ANDROID */]?i18n.sprintf(fixFirefoxLinkMessage,{newLocation:newLocation}):i18n.sprintf(fixAndroidLinkMessage,{newLocation:newLocation})}return react["createElement"]("div",{className:classnames_default()("WrongPlatformWarning",className)},react["createElement"](Notice["a" /* default */],{id:"WrongPlatformWarning-Notice",type:Notice["b" /* warningInfoType */]},react["createElement"]("span",{className:"WrongPlatformWarning-message"// eslint-disable-next-line react/no-danger
,dangerouslySetInnerHTML:Object(utils["i" /* sanitizeHTML */])(message,["a"])})))}}]);return WrongPlatformWarningBase}(react["Component"]);WrongPlatformWarning_WrongPlatformWarningBase.displayName="WrongPlatformWarningBase";WrongPlatformWarning_defineProperty(WrongPlatformWarning_WrongPlatformWarningBase,"defaultProps",{_correctedLocationForPlatform:correctedLocationForPlatform,_isFenix:isFenix});function WrongPlatformWarning_mapStateToProps(state){return{clientApp:state.api.clientApp,userAgentInfo:state.api.userAgentInfo}}var WrongPlatformWarning=Object(redux["d" /* compose */])(withRouter["a" /* default */],Object(es["connect"])(WrongPlatformWarning_mapStateToProps),Object(translate["a" /* default */])())(WrongPlatformWarning_WrongPlatformWarningBase);/* harmony default export */ var components_WrongPlatformWarning = (WrongPlatformWarning);WrongPlatformWarning_WrongPlatformWarningBase.__docgenInfo={description:"",methods:[],displayName:"WrongPlatformWarningBase",props:{_correctedLocationForPlatform:{defaultValue:{value:"correctedLocationForPlatform",computed:!0},required:!1,flowType:{name:"correctedLocationForPlatform"},description:""},_isFenix:{defaultValue:{value:"isFenix",computed:!0},required:!1,flowType:{name:"isFenix"},description:""},className:{required:!1,flowType:{name:"string"},description:""},fixAndroidLinkMessage:{required:!1,flowType:{name:"string"},description:""},fixFirefoxLinkMessage:{required:!1,flowType:{name:"string"},description:""},fixFenixLinkMessage:{required:!1,flowType:{name:"string"},description:""},clientApp:{required:!0,flowType:{name:"string"},description:""},i18n:{required:!0,flowType:{name:"I18nType"},description:""},location:{required:!0,flowType:{name:"ReactRouterLocationType"},description:""},userAgentInfo:{required:!0,flowType:{name:"UserAgentInfoType"},description:""}}};if("undefined"!=typeof STORYBOOK_REACT_CLASSES){STORYBOOK_REACT_CLASSES["src/amo/components/WrongPlatformWarning/index.js"]={name:"WrongPlatformWarningBase",docgenInfo:WrongPlatformWarning_WrongPlatformWarningBase.__docgenInfo,path:"src/amo/components/WrongPlatformWarning/index.js"}}
// EXTERNAL MODULE: ./src/amo/utils/index.js
var amo_utils = __webpack_require__(172);

// EXTERNAL MODULE: ./src/ui/components/LoadingText/styles.scss
var LoadingText_styles = __webpack_require__(1936);

// CONCATENATED MODULE: ./src/ui/components/LoadingText/index.js
function LoadingText_typeof(obj){"@babel/helpers - typeof";if("function"==typeof Symbol&&"symbol"==typeof Symbol.iterator){LoadingText_typeof=function(obj){return typeof obj}}else{LoadingText_typeof=function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return LoadingText_typeof(obj)}function LoadingText_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function LoadingText_defineProperties(target,props){for(var i=0,descriptor;i<props.length;i++){descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1;descriptor.configurable=!0;if("value"in descriptor)descriptor.writable=!0;Object.defineProperty(target,descriptor.key,descriptor)}}function LoadingText_createClass(Constructor,protoProps,staticProps){if(protoProps)LoadingText_defineProperties(Constructor.prototype,protoProps);if(staticProps)LoadingText_defineProperties(Constructor,staticProps);return Constructor}function LoadingText_possibleConstructorReturn(self,call){if(call&&("object"===LoadingText_typeof(call)||"function"==typeof call)){return call}return LoadingText_assertThisInitialized(self)}function LoadingText_assertThisInitialized(self){if(void 0===self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function LoadingText_getPrototypeOf(o){LoadingText_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)};return LoadingText_getPrototypeOf(o)}function LoadingText_inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}});if(superClass)LoadingText_setPrototypeOf(subClass,superClass)}function LoadingText_setPrototypeOf(o,p){LoadingText_setPrototypeOf=Object.setPrototypeOf||function(o,p){o.__proto__=p;return o};return LoadingText_setPrototypeOf(o,p)}function LoadingText_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}return obj}var LoadingText_LoadingText=/*#__PURE__*/function(_React$Component){LoadingText_inherits(LoadingText,_React$Component);function LoadingText(){LoadingText_classCallCheck(this,LoadingText);return LoadingText_possibleConstructorReturn(this,LoadingText_getPrototypeOf(LoadingText).apply(this,arguments))}LoadingText_createClass(LoadingText,[{key:"render",value:function render(){var _this$props=this.props,className=_this$props.className,minWidth=_this$props.minWidth,range=_this$props.range,width=_this$props.width,delayStart=Math.floor(3*Math.random())+1,finalWidth=width;// We start each animation with a slightly different delay so content
// doesn't appear to be pulsing all at once.
if("undefined"==typeof finalWidth){// Allow a minimum width so placeholders appear approximately
// the same size as content.
finalWidth=Math.floor(Math.random()*range)+minWidth}return react["createElement"]("span",{className:classnames_default()("LoadingText","LoadingText--delay-".concat(delayStart),className),style:{width:"".concat(finalWidth,"%")}})}}]);return LoadingText}(react["Component"]);LoadingText_LoadingText.displayName="LoadingText";LoadingText_defineProperty(LoadingText_LoadingText,"defaultProps",{minWidth:20,range:60});LoadingText_LoadingText.__docgenInfo={description:"",methods:[],displayName:"LoadingText",props:{minWidth:{defaultValue:{value:"20",computed:!1},required:!1,flowType:{name:"number"},description:""},range:{defaultValue:{value:"60",computed:!1},required:!1,flowType:{name:"number"},description:""},className:{required:!1,flowType:{name:"string"},description:""},width:{required:!1,flowType:{name:"number"},description:""}}};if("undefined"!=typeof STORYBOOK_REACT_CLASSES){STORYBOOK_REACT_CLASSES["src/ui/components/LoadingText/index.js"]={name:"LoadingText",docgenInfo:LoadingText_LoadingText.__docgenInfo,path:"src/ui/components/LoadingText/index.js"}}
// EXTERNAL MODULE: ./src/amo/components/HeroRecommendation/styles.scss
var HeroRecommendation_styles = __webpack_require__(1938);

// CONCATENATED MODULE: ./src/amo/components/HeroRecommendation/index.js
/* unused harmony export PRIMARY_HERO_CLICK_CATEGORY */
/* unused harmony export PRIMARY_HERO_SRC */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroRecommendation_HeroRecommendationBase; });
function HeroRecommendation_typeof(obj){"@babel/helpers - typeof";if("function"==typeof Symbol&&"symbol"==typeof Symbol.iterator){HeroRecommendation_typeof=function(obj){return typeof obj}}else{HeroRecommendation_typeof=function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return HeroRecommendation_typeof(obj)}function HeroRecommendation_extends(){HeroRecommendation_extends=Object.assign||function(target){for(var i=1,source;i<arguments.length;i++){source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return HeroRecommendation_extends.apply(this,arguments)}function HeroRecommendation_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function HeroRecommendation_defineProperties(target,props){for(var i=0,descriptor;i<props.length;i++){descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1;descriptor.configurable=!0;if("value"in descriptor)descriptor.writable=!0;Object.defineProperty(target,descriptor.key,descriptor)}}function HeroRecommendation_createClass(Constructor,protoProps,staticProps){if(protoProps)HeroRecommendation_defineProperties(Constructor.prototype,protoProps);if(staticProps)HeroRecommendation_defineProperties(Constructor,staticProps);return Constructor}function HeroRecommendation_possibleConstructorReturn(self,call){if(call&&("object"===HeroRecommendation_typeof(call)||"function"==typeof call)){return call}return HeroRecommendation_assertThisInitialized(self)}function HeroRecommendation_getPrototypeOf(o){HeroRecommendation_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)};return HeroRecommendation_getPrototypeOf(o)}function HeroRecommendation_assertThisInitialized(self){if(void 0===self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function HeroRecommendation_inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}});if(superClass)HeroRecommendation_setPrototypeOf(subClass,superClass)}function HeroRecommendation_setPrototypeOf(o,p){HeroRecommendation_setPrototypeOf=Object.setPrototypeOf||function(o,p){o.__proto__=p;return o};return HeroRecommendation_setPrototypeOf(o,p)}function HeroRecommendation_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}return obj}var PRIMARY_HERO_CLICK_CATEGORY="AMO Primary Hero Clicks";var PRIMARY_HERO_SRC="homepage-primary-hero";var HeroRecommendation_ref2=/*#__PURE__*/react["createElement"](components_AppBanner,{className:"HeroRecommendation-banner"}),HeroRecommendation_ref3=/*#__PURE__*/react["createElement"](components_WrongPlatformWarning,{className:"HeroRecommendation-WrongPlatformWarning"}),HeroRecommendation_ref4=/*#__PURE__*/react["createElement"](LoadingText_LoadingText,{width:20}),_ref5=/*#__PURE__*/react["createElement"](LoadingText_LoadingText,{width:60}),HeroRecommendation_ref6=/*#__PURE__*/react["createElement"]("div",{className:"HeroRecommendation-body"},react["createElement"](react["Fragment"],null,react["createElement"](LoadingText_LoadingText,{width:100}),react["createElement"]("br",null),react["createElement"](LoadingText_LoadingText,{width:80})));var HeroRecommendation_HeroRecommendationBase=/*#__PURE__*/function(_React$Component){HeroRecommendation_inherits(HeroRecommendationBase,_React$Component);function HeroRecommendationBase(){var _getPrototypeOf2,_this;HeroRecommendation_classCallCheck(this,HeroRecommendationBase);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key]}_this=HeroRecommendation_possibleConstructorReturn(this,(_getPrototypeOf2=HeroRecommendation_getPrototypeOf(HeroRecommendationBase)).call.apply(_getPrototypeOf2,[this].concat(args)));HeroRecommendation_defineProperty(HeroRecommendation_assertThisInitialized(_this),"makeCallToActionURL",function(){var shelfData=_this.props.shelfData;browser_default()(shelfData,"The shelfData property is required");var addon=shelfData.addon,external=shelfData.external;if(addon){return Object(amo_utils["a" /* addParamsToHeroURL */])({heroSrcCode:PRIMARY_HERO_SRC,urlString:Object(amo_utils["c" /* getAddonURL */])(addon.slug)})}browser_default()(external,"Either an addon or an external is required");return Object(amo_utils["a" /* addParamsToHeroURL */])({heroSrcCode:PRIMARY_HERO_SRC,urlString:external.homepage})});HeroRecommendation_defineProperty(HeroRecommendation_assertThisInitialized(_this),"onHeroClick",function(){var _tracking=_this.props._tracking;_tracking.sendEvent({action:_this.makeCallToActionURL(),category:PRIMARY_HERO_CLICK_CATEGORY})});return _this}HeroRecommendation_createClass(HeroRecommendationBase,[{key:"render",value:function render(){var _this$props=this.props,_checkInternalURL=_this$props._checkInternalURL,i18n=_this$props.i18n,errorHandler=_this$props.errorHandler,shelfData=_this$props.shelfData,siteIsReadOnly=_this$props.siteIsReadOnly,siteNotice=_this$props.siteNotice,_ref=shelfData||{},addon=_ref.addon,description=_ref.description,external=_ref.external,featuredImage=_ref.featuredImage,gradient=_ref.gradient,gradientsClassName,heading,link,heightClassName=siteIsReadOnly||siteNotice?"HeroRecommendation--height-with-notice":"HeroRecommendation--height-without-notice";if(shelfData){gradientsClassName="HeroRecommendation-".concat(gradient.start,"-").concat(gradient.end);logger["a" /* default */].info("className ".concat(gradientsClassName," generated from the API response. This should match a selector in styles.scss"));var linkInsides=react["createElement"]("span",null," ",i18n.gettext("Get the extension")," "),linkProps=_checkInternalURL({urlString:this.makeCallToActionURL()}).isInternal?{}:{rel:"noopener\xA0noreferrer",target:"_blank"};if(addon){heading=addon.name;link=react["createElement"](Link["a" /* default */],{className:"HeroRecommendation-link",onClick:this.onHeroClick,to:this.makeCallToActionURL()},linkInsides)}else if(external){heading=external.name;link=react["createElement"]("a",HeroRecommendation_extends({className:"HeroRecommendation-link",href:this.makeCallToActionURL(),onClick:this.onHeroClick},linkProps),linkInsides)}}else{gradientsClassName="HeroRecommendation--loading"}return react["createElement"]("section",{className:classnames_default()("HeroRecommendation",gradientsClassName,heightClassName,{"HeroRecommendation--no-image":!featuredImage})},react["createElement"]("div",{className:"HeroRecommendation-wrapper"},HeroRecommendation_ref2,HeroRecommendation_ref3,errorHandler.renderErrorIfPresent(),react["createElement"]("div",{className:"HeroRecommendation-content"},featuredImage&&react["createElement"]("div",{className:"HeroRecommendation-image-wrapper"},react["createElement"]("img",{className:"HeroRecommendation-image",alt:"",src:featuredImage})),react["createElement"]("div",{className:"HeroRecommendation-info"},react["createElement"]("div",{className:"HeroRecommendation-recommended"},shelfData?// translators: If uppercase does not work in your locale,
// change it to lowercase. This is used as a secondary heading.
i18n.gettext("RECOMMENDED"):HeroRecommendation_ref4),react["createElement"]("h2",{className:"HeroRecommendation-heading"},heading||_ref5),description?react["createElement"]("div",{className:"HeroRecommendation-body"// eslint-disable-next-line react/no-danger
,dangerouslySetInnerHTML:Object(utils["j" /* sanitizeUserHTML */])(description)}):HeroRecommendation_ref6,link))))}}]);return HeroRecommendationBase}(react["Component"]);HeroRecommendation_HeroRecommendationBase.displayName="HeroRecommendationBase";HeroRecommendation_defineProperty(HeroRecommendation_HeroRecommendationBase,"defaultProps",{_checkInternalURL:amo_utils["b" /* checkInternalURL */],_tracking:tracking});var HeroRecommendation_mapStateToProps=function(state){return{siteIsReadOnly:state.site.readOnly,siteNotice:state.site.notice}},HeroRecommendation=Object(redux["d" /* compose */])(Object(es["connect"])(HeroRecommendation_mapStateToProps),Object(translate["a" /* default */])())(HeroRecommendation_HeroRecommendationBase);/* harmony default export */ var components_HeroRecommendation = (HeroRecommendation);HeroRecommendation_HeroRecommendationBase.__docgenInfo={description:"",methods:[{name:"makeCallToActionURL",docblock:null,modifiers:[],params:[],returns:null},{name:"onHeroClick",docblock:null,modifiers:[],params:[],returns:null}],displayName:"HeroRecommendationBase",props:{_checkInternalURL:{defaultValue:{value:"checkInternalURL",computed:!0},required:!1,flowType:{name:"checkInternalURL"},description:""},_tracking:{defaultValue:{value:"tracking",computed:!0},required:!1,flowType:{name:"tracking"},description:""},errorHandler:{required:!0,flowType:{name:"ErrorHandlerType"},description:""},shelfData:{required:!1,flowType:{name:"PrimaryHeroShelfType"},description:""},siteIsReadOnly:{required:!0,flowType:{name:"boolean"},description:""},siteNotice:{required:!0,flowType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},i18n:{required:!0,flowType:{name:"I18nType"},description:""}}};if("undefined"!=typeof STORYBOOK_REACT_CLASSES){STORYBOOK_REACT_CLASSES["src/amo/components/HeroRecommendation/index.js"]={name:"HeroRecommendationBase",docgenInfo:HeroRecommendation_HeroRecommendationBase.__docgenInfo,path:"src/amo/components/HeroRecommendation/index.js"}}

/***/ }),

/***/ 755:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(756);
__webpack_require__(871);
module.exports = __webpack_require__(872);


/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(53);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(15);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(35);
function _typeof(obj){"@babel/helpers - typeof";if("function"==typeof Symbol&&"symbol"==typeof Symbol.iterator){_typeof=function(obj){return typeof obj}}else{_typeof=function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}function _extends(){_extends=Object.assign||function(target){for(var i=1,source;i<arguments.length;i++){source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends.apply(this,arguments)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0,descriptor;i<props.length;i++){descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1;descriptor.configurable=!0;if("value"in descriptor)descriptor.writable=!0;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call)){return call}return _assertThisInitialized(self)}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)};return _getPrototypeOf(o)}function _assertThisInitialized(self){if(void 0===self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}});if(superClass)_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function(o,p){o.__proto__=p;return o};return _setPrototypeOf(o,p)}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}return obj}var translate=function(){return function(WrappedComponent){var Translate=/*#__PURE__*/function(_React$Component){_inherits(Translate,_React$Component);function Translate(props,context){var _this;_classCallCheck(this,Translate);_this=_possibleConstructorReturn(this,_getPrototypeOf(Translate).call(this,props,context));_defineProperty(_assertThisInitialized(_this),"i18n",void 0);_this.i18n=context.i18n;return _this}_createClass(Translate,[{key:"render",value:function render(){return react__WEBPACK_IMPORTED_MODULE_10__["createElement"](WrappedComponent,_extends({i18n:this.i18n},this.props))}}]);return Translate}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);Translate.displayName="Translate";_defineProperty(Translate,"contextTypes",{i18n:prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.object});_defineProperty(Translate,"displayName","Translate(".concat(Object(core_utils__WEBPACK_IMPORTED_MODULE_12__[/* getDisplayName */ "e"])(WrappedComponent),")"));return Translate}};/* harmony default export */ __webpack_exports__["a"] = (translate);

/***/ }),

/***/ 806:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 872:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(81);
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_storybook_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _storybook_addon_info__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(151);
/* harmony import */ var _storybook_addon_info__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_info__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _storybook_addon_options__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(731);
/* harmony import */ var _storybook_addon_options__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_options__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var storybook_addon_rtl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(732);
/* harmony import */ var storybook_addon_rtl__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(storybook_addon_rtl__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_storybook_addon_chapters__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(467);
/* harmony import */ var react_storybook_addon_chapters__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_storybook_addon_chapters__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1535);
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_stable__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(142);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_13__);
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1,source;i<arguments.length;i++){source=null!=arguments[i]?arguments[i]:{};if(i%2){ownKeys(Object(source),!0).forEach(function(key){_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}return obj}// addon-info default settings.
Object(_storybook_addon_info__WEBPACK_IMPORTED_MODULE_8__["setDefaults"])({header:!1,inline:!0,source:!1,styles:function styles(stylesheet){return _objectSpread({},stylesheet,{infoBody:{fontSize:"12px"}})}});// Override some global-y setup options.
// See: https://www.npmjs.com/package/@storybook/addon-options
Object(_storybook_react__WEBPACK_IMPORTED_MODULE_7__["addDecorator"])(Object(_storybook_addon_options__WEBPACK_IMPORTED_MODULE_9__["withOptions"])({name:"Mozilla Addons frontend",url:"https://github.com/mozilla/addons-frontend",// Hide empty panel for now.
showAddonPanel:!0}));Object(react_storybook_addon_chapters__WEBPACK_IMPORTED_MODULE_11__["setDefaults"])({sectionOptions:{allowPropTablesToggling:!1,allowSourceToggling:!1,showSource:!1,useTheme:!1}});Object(_storybook_react__WEBPACK_IMPORTED_MODULE_7__["setAddon"])(react_storybook_addon_chapters__WEBPACK_IMPORTED_MODULE_11___default.a);function loadStories(){/* eslint-disable global-require */__webpack_require__(1683)}Object(storybook_addon_rtl__WEBPACK_IMPORTED_MODULE_10__["initializeRTL"])();Object(_storybook_react__WEBPACK_IMPORTED_MODULE_7__["configure"])(loadStories,module);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(129)(module)))

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Button; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(30);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(42);
/* harmony import */ var core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(24);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(25);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(50);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(53);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(11);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(14);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(10);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(15);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(51);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var common_tags__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(18);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var amo_components_Link__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(342);
/* harmony import */ var core_logger__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(17);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(1915);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_26__);
function _typeof(obj){"@babel/helpers - typeof";if("function"==typeof Symbol&&"symbol"==typeof Symbol.iterator){_typeof=function(obj){return typeof obj}}else{_typeof=function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}function _extends(){_extends=Object.assign||function(target){for(var i=1,source;i<arguments.length;i++){source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends.apply(this,arguments)}function _templateObject2(){var data=_taggedTemplateLiteral(["Not calling onClick() for Button link to\n            "," because it is disabled"]);_templateObject2=function(){return data};return data}function _templateObject(){var data=_taggedTemplateLiteral(["buttonType=\"","\" supplied but that is\n        not a valid button type"]);_templateObject=function(){return data};return data}function _taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0)}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1,source;i<arguments.length;i++){source=null!=arguments[i]?arguments[i]:{};if(i%2){ownKeys(Object(source),!0).forEach(function(key){_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}function _objectWithoutProperties(source,excluded){if(null==source)return{};var target=_objectWithoutPropertiesLoose(source,excluded),key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(0<=excluded.indexOf(key))continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key]}}return target}function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var target={},sourceKeys=Object.keys(source),key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(0<=excluded.indexOf(key))continue;target[key]=source[key]}return target}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0,descriptor;i<props.length;i++){descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1;descriptor.configurable=!0;if("value"in descriptor)descriptor.writable=!0;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call)){return call}return _assertThisInitialized(self)}function _assertThisInitialized(self){if(void 0===self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)};return _getPrototypeOf(o)}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}});if(superClass)_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function(o,p){o.__proto__=p;return o};return _setPrototypeOf(o,p)}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}return obj}var BUTTON_TYPES=["neutral","light","action","cancel","confirm","alert","none"],Button=/*#__PURE__*/function(_React$Component){_inherits(Button,_React$Component);function Button(){_classCallCheck(this,Button);return _possibleConstructorReturn(this,_getPrototypeOf(Button).apply(this,arguments))}_createClass(Button,[{key:"render",value:function render(){var _this$props=this.props,buttonType=_this$props.buttonType,children=_this$props.children,className=_this$props.className,href=_this$props.href,micro=_this$props.micro,puffy=_this$props.puffy,noLink=_this$props.noLink,to=_this$props.to,rest=_objectWithoutProperties(_this$props,["buttonType","children","className","href","micro","puffy","noLink","to"]),props=_objectSpread({},rest);if(!BUTTON_TYPES.includes(buttonType)){throw new Error(Object(common_tags__WEBPACK_IMPORTED_MODULE_22__[/* oneLine */ "a"])(_templateObject(),buttonType))}var getClassName=function(){for(var _len=arguments.length,classConfig=Array(_len),_key=0;_key<_len;_key++){classConfig[_key]=arguments[_key]}return classnames__WEBPACK_IMPORTED_MODULE_21___default.a.apply(void 0,["Button","Button--".concat(buttonType),className].concat(classConfig,[{"Button--disabled":props.disabled,"Button--micro":micro,"Button--puffy":puffy}]))};if(noLink){return react__WEBPACK_IMPORTED_MODULE_23__["createElement"]("span",{className:getClassName(),title:rest.title},children)}if(href||to){if(href){props.href=href;// If this button should be a link we don't want to prefix the URL.
props.prependClientApp=!1;props.prependLang=!1}else if(to){props.to=to}// Only a Link needs a disabled css class. This is because button
// is styled based on its disabled property.
props.className=getClassName({disabled:props.disabled});if(props.disabled){props.onClick=function(event){event.preventDefault();core_logger__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"].warn(Object(common_tags__WEBPACK_IMPORTED_MODULE_22__[/* oneLine */ "a"])(_templateObject2(),props.href||props.to))}}return react__WEBPACK_IMPORTED_MODULE_23__["createElement"](amo_components_Link__WEBPACK_IMPORTED_MODULE_24__[/* default */ "a"],props,children)}return react__WEBPACK_IMPORTED_MODULE_23__["createElement"]("button",_extends({className:getClassName(),type:"submit"},props),children)}}]);return Button}(react__WEBPACK_IMPORTED_MODULE_23__["Component"]);Button.displayName="Button";_defineProperty(Button,"defaultProps",{buttonType:"none",disabled:!1,micro:!1,noLink:!1,puffy:!1});Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{buttonType:{defaultValue:{value:"'none'",computed:!1},required:!1,flowType:{name:"union",raw:"| 'neutral'\n| 'light'\n| 'action'\n| 'cancel'\n| 'confirm'\n| 'alert'\n| 'none'",elements:[{name:"literal",value:"'neutral'"},{name:"literal",value:"'light'"},{name:"literal",value:"'action'"},{name:"literal",value:"'cancel'"},{name:"literal",value:"'confirm'"},{name:"literal",value:"'alert'"},{name:"literal",value:"'none'"}]},description:""},disabled:{defaultValue:{value:"false",computed:!1},required:!1,flowType:{name:"boolean"},description:""},micro:{defaultValue:{value:"false",computed:!1},required:!1,flowType:{name:"boolean"},description:""},noLink:{defaultValue:{value:"false",computed:!1},required:!1,flowType:{name:"boolean"},description:""},puffy:{defaultValue:{value:"false",computed:!1},required:!1,flowType:{name:"boolean"},description:""},children:{required:!1,flowType:{name:"ReactNode",raw:"React.Node"},description:""},className:{required:!1,flowType:{name:"string"},description:""},externalDark:{required:!1,flowType:{name:"boolean"},description:""},href:{required:!1,flowType:{name:"string"},description:""},name:{required:!1,flowType:{name:"number"},description:""},onClick:{required:!1,flowType:{name:"union",raw:"Function | null",elements:[{name:"Function"},{name:"null"}]},description:""},title:{required:!1,flowType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},to:{required:!1,flowType:{name:"union",raw:"string | Object",elements:[{name:"string"},{name:"Object"}]},description:""},target:{required:!1,flowType:{name:"string"},description:""},type:{required:!1,flowType:{name:"string"},description:""}}};if("undefined"!=typeof STORYBOOK_REACT_CLASSES){STORYBOOK_REACT_CLASSES["src/ui/components/Button/index.js"]={name:"Button",docgenInfo:Button.__docgenInfo,path:"src/ui/components/Button/index.js"}}

/***/ })

},[[755,1,2]]]);
//# sourceMappingURL=main.7d9acd7fe89b2ed6bf46.bundle.js.map