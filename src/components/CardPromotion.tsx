import Image from "next/image"
import { Button } from "./ui/Button";

type CardPromotionProps = {
  promotionTitle: string;
  paymentPlan: string;
  monthlyPrice: string;
  fullPrice: string;
  bottlePrice?: string;
  image: string;
  width?: number;
  height?: number;
  onClick?: () => void;
}

export default function CardPromotion({
  promotionTitle,
  paymentPlan,
  monthlyPrice,
  fullPrice,
  bottlePrice,
  image,
  width,
  height,
  onClick
}: CardPromotionProps) {
  return (
    <div className="bg-secondary relative h-full flex flex-col items-center rounded-lg shadow-lg p-4">
      <p className="text-xl font-bold  text-primary">
        {promotionTitle}
      </p>
      <div className="relative flex items-center justify-center w-full h-full">
        <Image
          src={image}
          alt={promotionTitle}
          width={width || 250}
          height={height || 250}
          quality={100}
          className="object-cover object-center"
        />
        {bottlePrice && (
          <div className="absolute top-5 right-0 rounded-full px-3 py-2 leading-3 text-xs font-bold bg-primary bg-opacity-90 text-secondary">
            <p>
              {bottlePrice}
            </p>
            <p>
              cada frasco
            </p>
          </div>
        )}
      </div>
      <div className="-space-y-[2px] text-primary">
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

        <Button variant="primary" onClick={onClick}>
          Comprar agora
        </Button>
        <p className="text-sm font-normal pt-2">Compra 100% segura</p>
        
      </div>
  </div>
)}