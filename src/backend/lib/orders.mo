import Types "../types/orders";
import List "mo:core/List";
import Time "mo:core/Time";
import Int "mo:core/Int";
import Nat "mo:core/Nat";

module {
  public type Order = Types.Order;

  public func createOrder(
    orders : List.List<Order>,
    name : Text,
    phone : Text,
    address : Text,
    city : Text,
    state : Text,
    pincode : Text,
    quantity : Nat,
    price : Nat,
  ) : Text {
    let timestamp = Time.now();
    let orderId = "OFC-" # timestamp.toText() # "-" # orders.size().toText();
    let order : Order = {
      orderId;
      name;
      phone;
      address;
      city;
      state;
      pincode;
      quantity;
      price;
      timestamp;
    };
    orders.add(order);
    orderId;
  };

  public func getAllOrders(orders : List.List<Order>) : [Order] {
    orders.toArray();
  };

  public func countOrders(orders : List.List<Order>) : Nat {
    orders.size();
  };
};
