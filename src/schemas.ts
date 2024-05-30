// import UUID from 'uuid';
import { UUID } from "crypto";

export enum OrderStatus {
  COLLECTING = "collecting",
  READY = "ready",
  DELIVERING = "delivering",
  COMPLETED = "completed",
}

export type OrderStatusColor = {
  [key in OrderStatus]: "primary" | "default" | "secondary" | "success" | "warning" | "danger";
};

export const orderStatusColor: OrderStatusColor = {
  [OrderStatus.COLLECTING]: "default",
  [OrderStatus.READY]: "success",
  [OrderStatus.DELIVERING]: "secondary",
  [OrderStatus.COMPLETED]: "primary",
};

export type OrderStatusText = {
  [key in OrderStatus]: string;
};

export const orderStatusText: OrderStatusText = {
  [OrderStatus.COLLECTING]: "в сборке",
  [OrderStatus.READY]: "готов к выдаче",
  [OrderStatus.DELIVERING]: "в доставке",
  [OrderStatus.COMPLETED]: "завершен",
};

export type OrderDTO = {
  id: UUID;
  created_at: string;
  customer: {
    id: UUID;
    name: string;
    address: string;
    phone: string;
  };
  items: {
    id: UUID;
    name: string;
    price: number;
    quantity: number;
  }[];
  total_price: number;
  status: OrderStatus;
  comment: string;
};
