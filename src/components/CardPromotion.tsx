import Image from "next/image"
import { Button } from "./ui/Button";

type CardPromotionProps = {
  promotionTitle: string;
  paymentPlan: string;
  monthlyPrice: string;
  fullPrice: string;
  image: string;
  width?: number;
  height?: number;
}

export default function CardPromotion({
  promotionTitle,
  paymentPlan,
  monthlyPrice,
  fullPrice,

  image,
  width,
  height
}: CardPromotionProps) {
  return (
    <div className="bg-secondary h-full flex flex-col items-center rounded-lg shadow-lg p-4">
      <p className="text-xl font-bold  text-primary">
        {promotionTitle}
      </p>
      <Image
        src={image}
        alt={promotionTitle}
        width={width || 150}
        height={height || 150}
        quality={100}
        className="object-cover object-center"
      />
      <div className="space-y-1 text-primary">
        <p className="text-lg font-bold">
          {paymentPlan}
        </p>
        <div className="flex gap-1 justify-center">
          <p className="text-base font-bold">
            R$
          </p>
          <p className="text-4xl font-bold">
            {monthlyPrice}
          </p>
        </div>

        <p className="text-lg font-bold pb-5">{`
          ou ${fullPrice} à vista
        `}</p>

        <Button variant="primary">
          Comprar agora
        </Button>
        <p className="text-sm font-normal pt-2">Compra 100% segura</p>
      </div>
  </div>
)}