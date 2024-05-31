import {
  Avatar,
  Badge,
  Button,
  Chip,
  Listbox,
  ListboxItem,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@nextui-org/react";
import { ruDate } from "../../utils/localDate";
import { OrderDTO, OrderStatus, orderStatusColor, orderStatusText } from "../../schemas";

const OrderModal = ({ modalOrder }: { modalOrder: OrderDTO }) => {
  return (
    <Modal
      //   isOpen={modalOrder ? true : false}
      isOpen={true}
      //   onClose={() => setModalOrder(null)}
      scrollBehavior="inside"
      placement="center"
      className="max-h-[90vh] overflow-hidden"
      classNames={{
        closeButton: "absolute top-4 right-4 bg-gray-200 hover:bg-gray-300 transition-colors duration-2",
      }}
    >
      <ModalContent>
        <ModalHeader className="text-xl">Заказ от {ruDate(modalOrder.created_at)}</ModalHeader>
        <ModalBody className="pb-4 pt-0 flex flex-col gap-4">
          <div className="flex flex-col w-full gap-[1em]">
            <p>
              Адрес доставки: <b>{modalOrder.customer.address}</b>
            </p>
            <div className="flex flex-row items-center w-full gap-4">
              <p>{modalOrder.customer.name}</p>
              <p className="font-bold">{modalOrder.customer.phone}</p>
            </div>
            <p>
              Сумма заказа: <b>{modalOrder.total_price} ₽</b>
            </p>
            <Chip color={orderStatusColor[modalOrder.status as OrderStatus]}>
              {orderStatusText[modalOrder.status as OrderStatus]}
            </Chip>
          </div>
          <h4 className="text-lg font-semibold">Продукты</h4>
          <Listbox variant="flat" aria-label="Listbox menu with sections">
            {modalOrder.items.map((orderProduct) => (
              <ListboxItem
                key={orderProduct.id}
                className="flex flex-row items-center gap-3"
                textValue={orderProduct.name}
                startContent={
                  <Badge content={orderProduct.quantity} color="primary">
                    <Avatar src={orderProduct.image!} alt="product image" />
                  </Badge>
                }
                // onClick={() => setModalProduct(orderProduct.product)}
              >
                <div className="flex flex-col gap-0">
                  <p className="whitespace-break-spaces text-base text-gray-400">{orderProduct.name}</p>
                  <p className="font-semibold text-[16px]  text-white">
                    {orderProduct.price * orderProduct.quantity} ₽
                  </p>
                </div>
              </ListboxItem>
            ))}
          </Listbox>
          <Button color="secondary">Всё в наличии, начать доставку</Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default OrderModal;
