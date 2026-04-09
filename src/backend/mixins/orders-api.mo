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
    // Save order locally first — always succeeds
    let orderId = OrdersLib.createOrder(orders, name, phone, address, city, state, pincode, quantity, price);
    // Retrieve the saved order to forward to Google Sheets
    let savedOrder = switch (orders.find(func(o : Types.Order) : Bool { o.orderId == orderId })) {
      case (?o) o;
      case null {
        // Should never happen — just return the orderId
        return orderId;
      };
    };
    // Fire-and-forget: notify Google Sheets asynchronously
    ignore OrdersLib.notifyGoogleSheets(savedOrder);
    orderId;
  };

  public query func getOrders() : async [Types.Order] {
    OrdersLib.getAllOrders(orders);
  };

  public query func getOrderCount() : async Nat {
    OrdersLib.countOrders(orders);
  };
};
