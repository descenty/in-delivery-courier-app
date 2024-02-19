import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Skeleton } from "@nextui-org/react";

const OrdersScreen = () => {
  return (
    <Card className="max-w-full w-[300px] h-[500px]">
      <CardHeader className="text-xl pl-5">Список заказов</CardHeader>
      <Divider />
      <CardBody className="flex flex-col gap-4 p-4">
        <Skeleton className="rounded-lg w-full h-10" />
        <Skeleton className="rounded-lg w-full h-10" />
        <Skeleton className="rounded-lg w-full h-10" />
        <Skeleton className="rounded-lg w-full h-10" />
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

export default OrdersScreen;
