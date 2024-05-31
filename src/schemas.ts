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
    image: string;
  }[];
  total_price: number;
  status: OrderStatus;
  comment: string;
};

export const testOrder: OrderDTO = {
  id: "46a8788d-5c0f-4f68-8413-3572fb2c21f7",
  created_at: "2024-05-30T15:23:34",
  total_price: 1050,
  status: OrderStatus.READY,
  customer: {
    id: "c5144b5c-8aca-4915-a65b-4ab4bcb41213",
    name: "Кирилл",
    address: "г Москва, пр-кт Вернадского, д 78 стр 4",
    phone: "+7 953 333 26 09",
  },
  items: [
    {
      id: "a29c3965-db7d-4cb0-954b-ee9fbf28925b",
      name: "Клубничный джем",
      price: 240,
      quantity: 3,
      image: "https://storage.yandexcloud.net/in-delivery/products/73a39463-c3d4-4b3b-b8d8-04e26a6952a5.png",
    },
    {
      id: "583330be-06e6-47da-a7c7-f05dbd0af0cb",
      name: "Свежее филе лосося",
      price: 500,
      quantity: 1,
      image: "https://storage.yandexcloud.net/in-delivery/products/7611f218-524d-4147-8d6a-6b5a0671d51e.png",
    },
    {
      id: "983330be-06e6-45da-a7c7-f05dbd0af0cb",
      name: "Манго-ананасовый смузи",
      price: 500,
      quantity: 2,
      image: "https://storage.yandexcloud.net/in-delivery/products/a1bff7b2-5a02-413b-be92-1e274452ccb0.png",
    },
    {
      id: "983340be-06e6-47da-a7c7-f05dbd0af0cb",
      name: "Молоко",
      price: 70,
      quantity: 1,
      image: "https://storage.yandexcloud.net/in-delivery/products/a2affaca-52cf-49d2-88b5-b720460770a1.png",
    },
  ],
  comment: "Как будете подъезжать к дому, позвоните мне, я выйду к КПП № 2",
};
