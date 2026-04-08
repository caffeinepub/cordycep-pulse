import Types "types/orders";
import OrdersApi "mixins/orders-api";
import List "mo:core/List";

actor {
  let orders = List.empty<Types.Order>();

  include OrdersApi(orders);
};
