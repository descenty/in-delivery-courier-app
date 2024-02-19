import { Button, Card, CardBody, CardHeader, Input } from "@nextui-org/react";

const AuthForm = () => {
  return (
    <Card className="max-w-full w-[320px] h-[280px] p-2">
      <CardHeader className="flex justify-center items-center text-xl">Вход</CardHeader>
      <CardBody className="overflow-hidden flex flex-col justify-between">
        <Input
          size="lg"
          classNames={{ description: "text-sm" }}
          isRequired
          label="Email"
          placeholder="Введите ваш email"
          type="email"
          description="На почту будет отправлено письмо с кодом подтверждения."
        />
        <div className="flex gap-2 justify-end">
          <Button size="lg" fullWidth color="primary">
            Получить код
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default AuthForm;
