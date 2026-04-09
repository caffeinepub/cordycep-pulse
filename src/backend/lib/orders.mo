import Types "../types/orders";
import List "mo:core/List";
import Time "mo:core/Time";
import Int "mo:core/Int";
import Nat "mo:core/Nat";
import Text "mo:core/Text";

module {
  public type Order = Types.Order;

  let GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwVlvAHI3mgC_9dr5cor4OhtsmYd1a70VVjeAriV3NqCLie-6YqloOstihf8hHiL8aRUw/exec";

  // IC management canister actor type for HTTP outcalls
  type HttpHeader = { name : Text; value : Text };
  type HttpMethod = { #get; #head; #post };
  type TransformContext = {
    function : shared query ({ response : HttpResponse; context : Blob }) -> async HttpResponse;
    context : Blob;
  };
  type HttpRequest = {
    url : Text;
    max_response_bytes : ?Nat64;
    method : HttpMethod;
    headers : [HttpHeader];
    body : ?Blob;
    transform : ?TransformContext;
    is_replicated : ?Bool;
  };
  type HttpResponse = {
    status : Nat;
    headers : [HttpHeader];
    body : Blob;
  };

  let ic = actor "aaaaa-aa" : actor {
    http_request : HttpRequest -> async HttpResponse;
  };

  // Build ISO-8601-like timestamp string from nanoseconds Int
  func timestampToText(ts : Int) : Text {
    // ts is nanoseconds; convert to seconds
    let secs : Int = ts / 1_000_000_000;
    // Simple numeric representation — Apps Script accepts epoch seconds as string
    secs.toText() # "s"
  };

  // Build the JSON body for the Google Apps Script POST
  func buildJsonBody(order : Order) : Text {
    let q = "\"";
    let fields : [Text] = [
      q # "orderId" # q # ":" # q # order.orderId # q,
      q # "name" # q # ":" # q # order.name # q,
      q # "phone" # q # ":" # q # order.phone # q,
      q # "address" # q # ":" # q # order.address # q,
      q # "pincode" # q # ":" # q # order.pincode # q,
      q # "quantity" # q # ":" # order.quantity.toText(),
      q # "price" # q # ":" # order.price.toText(),
      q # "timestamp" # q # ":" # q # timestampToText(order.timestamp) # q,
    ];
    "{" # fields.values().join(", ") # "}"
  };

  // Fire-and-forget HTTP POST to Google Apps Script webhook
  public func notifyGoogleSheets(order : Order) : async () {
    let jsonBody = buildJsonBody(order);
    let bodyBlob = jsonBody.encodeUtf8();
    let request : HttpRequest = {
      url = GOOGLE_APPS_SCRIPT_URL;
      max_response_bytes = ?2000;
      method = #post;
      headers = [
        { name = "Content-Type"; value = "application/json" },
      ];
      body = ?bodyBlob;
      transform = null;
      is_replicated = ?false;
    };
    try {
      // Attach cycles for the HTTP outcall (400 billion is typical)
      ignore await (with cycles = 400_000_000_000) ic.http_request(request);
    } catch (_) {
      // Best-effort: swallow errors so order save is unaffected
    };
  };

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
