import Types "../types/orders";
import OrdersLib "../lib/orders";
import List "mo:core/List";

mixin (orders : List.List<Types.Order>) {
  public func submitOrder(
    name : Text,
    phone : Text,
    address : Text,
    city : Text,
    state : Text,
    pincode : Text,
    quantity : Nat,
    price : Nat,
  ) : async Text {
    OrdersLib.createOrder(orders, name, phone, address, city, state, pincode, quantity, price);
  };

  public query func getOrders() : async [Types.Order] {
    OrdersLib.getAllOrders(orders);
  };

  public query func getOrderCount() : async Nat {
    OrdersLib.countOrders(orders);
  };
};
