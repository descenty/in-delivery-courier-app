"use client";
import { Card } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import {
  Avatar,
  Badge,
  Button,
  Image,
  Input,
  ScrollShadow,
  Textarea,
  Tooltip,
} from "@nextui-org/react";
import { User } from "@nextui-org/user";
import { UUID } from "crypto";
import Message from "./message";
import SendIcon from "../icons/sendIcon";

interface UserDTO {
  id: UUID;
  name: string;
  avatar: string;
  messages: MessageDTO[];
}

export interface MessageDTO {
  id: UUID;
  text: string;
  sender_id: UUID;
  createdAt: Date;
}

const currentUserID = "132de8e6-6665-41d7-b2aa-860448687034";

const Chat = ({ users }: { users?: UserDTO[] }) => {
  users = [
    {
      id: "216de8e6-6665-41d7-b2aa-860448687034",
      name: "Sber",
      avatar: "https://avatars.githubusercontent.com/u/1326112?s=128&v=8",
      messages: [
        {
          id: "1d0f1a8e-2b5d-4b8c-9b2c-0b1f6a3b8d9d",
          text: "Здравствуйте,\nне дозвонился до вас.\nЯ приехал к КПП, выходите.",
          sender_id: currentUserID,
          createdAt: new Date(),
        },
        {
          id: "3c0f1a8e-2b5d-4b8c-9b2c-0b1f6a3b8d9d",
          text: "Хорошо, уже выхожу",
          sender_id: "216de8e6-6665-41d7-b2aa-860448687034",
          createdAt: new Date(),
        },
      ],
    },
  ];

  return (
    <Card className="flex flex-col gap-6 rounded-none h-[65vh] p-6 pt-3">
      <h1 className="text-xl">Чат с клиентом: Кирилл (по заказу от 30 мая 2024 г., 15:23)</h1>
      <div className="flex w-full flex-col gap-3">
        <ScrollShadow className="flex flex-col gap-3 w-full h-[300px] p-2">
          {users[0].messages.map((message) => (
            <Message
              key={message.id}
              message={message}
              sent={message.sender_id === currentUserID}
            />
          ))}
        </ScrollShadow>
        <div className="flex flex-row gap-2 items-center">
          <Input size="lg" placeholder="Сообщение" />
          <Button
            isIconOnly
            className="w-[48px] h-[48px] p-2.5"
            color="primary"
            onClick={() => alert("Отправлено")}
          >
            <SendIcon />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default Chat;
