/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  TO CUSTOMIZE FUNCTIONS IN MarketContextActionsGenerated.js PLEASE EDIT ../MarketContextActions.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */

import * as types from "../../actionTypes";
import MarketContextApi from "../../../api/MarketContextApi";

let actionsFunction = {

  //CRUD METHODS

  // Create marketcontext
  createMarketContext: function(marketcontext) {
    return function(dispatch) {
      return MarketContextApi
        .createMarketContext(marketcontext)
        .then(marketcontext => {
          dispatch(actionsFunction.createMarketContextSuccess(marketcontext));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  createMarketContextSuccess: function(marketcontext) {
    return { type: types.CREATE_MARKETCONTEXT_SUCCESS, payload: marketcontext };
  },


  // Delete marketcontext
  deleteMarketContext: function(id) {
    return function(dispatch) {
      return MarketContextApi
        .deleteMarketContext(id)
        .then(marketcontext => {
          dispatch(actionsFunction.deleteMarketContextSuccess(marketcontext));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  deleteMarketContextSuccess: function(marketcontext) {
    return { type: types.DELETE_MARKETCONTEXT_SUCCESS, payload: marketcontext };
  },


  // Get marketcontext
  loadMarketContext: function(id) {
    return function(dispatch) {
      return MarketContextApi
        .getOneMarketContext(id)
        .then(marketcontext => {
          dispatch(actionsFunction.loadMarketContextSuccess(marketcontext));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadMarketContextSuccess: function(marketcontext) {
    return { type: types.GET_MARKETCONTEXT_SUCCESS, payload: marketcontext };
  },

  // Load  list
  loadMarketContextList: function() {
    return function(dispatch) {
      return MarketContextApi
        .getMarketContextList()
        .then(list => {
          dispatch(actionsFunction.loadMarketContextListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadMarketContextListSuccess: function(list) {
    return { type: types.LIST_MARKETCONTEXT_SUCCESS, payload: list };
  },

	
  // Save marketcontext
  saveMarketContext: function(marketcontext) {
    return function(dispatch) {
      return MarketContextApi
        .saveMarketContext(marketcontext)
        .then(marketcontext => {
          dispatch(actionsFunction.saveMarketContextSuccess(marketcontext));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  saveMarketContextSuccess: function(marketcontext) {
    return { type: types.UPDATE_MARKETCONTEXT_SUCCESS, payload: marketcontext };
  },


};

export default actionsFunction;
