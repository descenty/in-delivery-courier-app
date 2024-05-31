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
import { OrderDTO, OrderStatus, orderStatusColor, orderStatusText, testOrder } from "../../../schemas";
import { ruDate } from "../../../utils/localDate";
import OrderModal from "../../orders/orderModal";

const OrdersScreen = () => {
  return (
    <>
      <Card className="max-w-full w-[300px] h-[500px]">
        <CardHeader className="text-xl pl-5">Список заказов</CardHeader>
        <Divider />
        <CardBody className="flex flex-col gap-4 p-4">
          <Listbox variant="flat" aria-label="Listbox menu with sections">
            {[testOrder].map((order: OrderDTO) => (
              <ListboxItem
                key={order.id}
                className="flex flex-row items-center justify-between gap-3 bg-[#1f1f22]"
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
      {/* <OrderModal modalOrder={testOrder} /> */}
    </>
  );
};

export default OrdersScreen;
