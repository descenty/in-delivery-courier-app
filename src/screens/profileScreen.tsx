import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";

const ProfileScreen = () => {
  return (
    <Card className="max-w-full w-[300px] h-[500px]">
      <CardHeader className="text-xl pl-5">Профиль</CardHeader>
      <Divider />
      <CardBody className="flex flex-col items-center gap-4 p-6">
        <Image isBlurred width={100} src="https://randomuser.me/api/portraits/men/12.jpg" alt="NextUI Album Cover" />
        <p className="text-yellow-500">★ 4.95</p>
        <p className="text-lg mt-[-8px]">Курьеров Курьер Курьерович</p>
        <div className="flex flex-col gap-4 w-full mt-1">
          <p className="text-gray-300">Статус: свободен</p>
          <p className="text-gray-300">Доставок за неделю: 33</p>
          <p className="text-gray-300">Заработок за неделю: 11254 ₽</p>
        </div>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link isExternal showAnchorIcon href="https://github.com/nextui-org/nextui">
          Какой-то текст
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProfileScreen;
