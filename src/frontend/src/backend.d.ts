import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Order {
    city: string;
    name: string;
    orderId: string;
    state: string;
    address: string;
    timestamp: bigint;
    quantity: bigint;
    phone: string;
    pincode: string;
    price: bigint;
}
export interface backendInterface {
    getOrderCount(): Promise<bigint>;
    getOrders(): Promise<Array<Order>>;
    submitOrder(name: string, phone: string, address: string, city: string, state: string, pincode: string, quantity: bigint, price: bigint): Promise<string>;
}
