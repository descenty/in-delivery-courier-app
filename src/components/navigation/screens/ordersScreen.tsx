import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Skeleton,
  Listbox,
  ListboxItem,
  Chip,
  Accordion,
  AccordionItem,
} from "@nextui-org/react";
import OrderCard from "../../orders/orderCard";
import { OrderDTO, OrderStatus, orderStatusColor, orderStatusText } from "../../../schemas";
import { ruDate } from "../../../utils/localDate";

const OrdersScreen = () => {
  return (
    <Card className="max-w-full w-[300px] h-[500px]">
      <CardHeader className="text-xl pl-5">Список заказов</CardHeader>
      <Divider />
      <CardBody className="flex flex-col gap-4 p-4">
        <Listbox variant="flat" aria-label="Listbox menu with sections">
          {[
            {
              id: "46a8788d-5c0f-4f68-8413-3572fb2c21f7",
              created_at: "2024-05-30T15:23:34",
              total_price: 1000,
              status: OrderStatus.READY,
              customer: {
                id: "c5144b5c-8aca-4915-a65b-4ab4bcb41213",
                name: "Кирилл",
                address: "ул. Ленина, 1",
                phone: "+7 953 333 26 09",
              },
              items: [
                {
                  id: "a29c3965-db7d-4cb0-954b-ee9fbf28925b",
                  name: "Пицца",
                  price: 500,
                  quantity: 2,
                },
                {
                  id: "983330be-06e6-47da-a7c7-f05dbd0af0cb",
                  name: "Пиво",
                  price: 100,
                  quantity: 5,
                },
              ],
              comment: "Как будете подъезжать к дому, позвоните мне, я выйду к КПП № 2",
            } as OrderDTO,
          ].map((order: OrderDTO) => (
            <ListboxItem
              key={order.id}
              className="flex flex-row items-center justify-between gap-3"
              textValue={`Заказ от ${order.created_at}`}
              // onClick={() => setModalOrder(order)}
              startContent={
                <div className="flex flex-col w-full gap-3 p-1 items-left justify-between">
                  <p className="whitespace-break-spaces text-justify w-full text-gray-300 text-base">{`Заказ от ${ruDate(
                    order.created_at
                  )}`}</p>
                  <div className="flex flex-row items-center w-full gap-4">
                    <p>{order.customer.name}</p>
                    <p className="font-bold">{order.customer.phone}</p>
                  </div>
                  <p className="whitespace-break-spaces text-justify text-gray-300 w-full text-base">
                    {order.customer.address}
                  </p>
                  <div className="flex flex-row items-center justify-between">
                    <p className="font-semibold text-[20px]">{order.total_price} ₽</p>
                    <Chip
                      radius="sm"
                      classNames={{ content: "text-white mb-[2px] text-[16px]" }}
                      color={orderStatusColor[order.status as OrderStatus]}
                    >
                      {orderStatusText[order.status as OrderStatus]}
                    </Chip>
                  </div>
                  <Accordion>
                    {/* Комментарий к заказу */}
                    <AccordionItem key="comment" title="Комментарий">
                      {order.comment}
                    </AccordionItem>
                  </Accordion>
                  <Divider />
                </div>
              }
            />
          ))}
        </Listbox>
        {/* <Skeleton className="rounded-lg w-full h-10" />
          <Skeleton className="rounded-lg w-full h-10" />
          <Skeleton className="rounded-lg w-full h-10" />
          <Skeleton className="rounded-lg w-full h-10" /> */}
      </CardBody>
      <Divider />
      <CardFooter>
        <Link isExternal showAnchorIcon href="https://github.com/nextui-org/nextui">
          Помощь
        </Link>
      </CardFooter>
    </Card>
  );
};

export default OrdersScreen;
