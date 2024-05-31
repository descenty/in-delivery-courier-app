import { Card, CardHeader, CardBody, CardFooter, Divider, Link, User } from "@nextui-org/react";
import ChatLayout from "../../chat/chatLayout";

const ChatScreen = () => {
  return (
    <>
      <Card className="max-w-full w-[300px] h-[500px]">
        <CardHeader className="text-xl pl-5">Чат</CardHeader>
        <Divider />
        <CardBody className="flex flex-col gap-4">
          {/* <User
          className="justify-start"
          name="Михаил"
          description={
            <Link href="tel:+71234567890" size="sm" isExternal>
              +7 (123) 456-78-90
            </Link>
          }
          avatarProps={{
            src: "https://randomuser.me/api/portraits/men/7.jpg",
          }}
        /> */}
          <User
            className="justify-start"
            name="Кирилл"
            description={
              <Link href="tel:+71234567890" size="sm" isExternal>
                +7 (123) 456-78-90
              </Link>
            }
            avatarProps={{
              src: "https://randomuser.me/api/portraits/men/33.jpg",
            }}
          />{" "}
          {/* <User
          className="justify-start"
          name="Руслан"
          description={
            <Link href="tel:+71234567890" size="sm" isExternal>
              +7 (123) 456-78-90
            </Link>
          }
          avatarProps={{
            src: "https://randomuser.me/api/portraits/men/20.jpg",
          }}
        />{" "}
        <User
          className="justify-start"
          name="Дарья (специалист поддержки)"
          description={
            <Link href="tel:+71234567890" size="sm" isExternal>
              +7 (098) 765-43-21
            </Link>
          }
          avatarProps={{
            src: "https://randomuser.me/api/portraits/women/43.jpg",
          }}
        /> */}
        </CardBody>
        <Divider />
        <CardFooter>
          <Link isExternal showAnchorIcon href="https://github.com/nextui-org/nextui">
            Помощь
          </Link>
        </CardFooter>
      </Card>
      <ChatLayout />
    </>
  );
};

export default ChatScreen;
