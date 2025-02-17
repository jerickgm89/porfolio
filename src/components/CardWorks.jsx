import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Link,
} from "@nextui-org/react";

export const CardWorks = ({ title, image, description, url }) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-4">
        <Link href={url} underline="none">
          <Card isBlurred className="py-2 md:py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
              <p className="text-xl font-bold">{title}</p>
            </CardHeader>
            <CardBody className="overflow-visible py-2 items-center">
              <Image
                alt="logo de proyecto"
                className="object-cover rounded-xl"
                src={image}
                width={270}
              />
            </CardBody>
            <CardFooter className="flex justify-center">
              <p className="text-center text-sm">{description}</p>
            </CardFooter>
          </Card>
        </Link>
      </div>
    </>
  );
};
