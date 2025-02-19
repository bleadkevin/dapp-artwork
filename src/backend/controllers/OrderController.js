import { v4 as uuid } from "uuid";
import { Response } from "miragejs";
import { formatDate, requiresAuth } from "../utils/authUtils.js";

/**
 * All the routes related to order are present here.
 * These are private routes.
 * Client needs to add "authorization" header with JWT token in it to access it.
 * */

/**
 * This handler handles getting items to user's order.
 * send GET Request at /api/user/order
 * */

export const getOrderItemsHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  const userOrders = schema.usersfindBy({ _id: userId }).orders;
  return new Response(200, {}, { orders: userOrders });
};

export const addItemToOrdersHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);
   catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};
