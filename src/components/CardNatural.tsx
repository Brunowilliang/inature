import Image from "next/image"

type CardNaturalProps = {
  title: string;
  description: string;
  image: string;
  width?: number;
  height?: number;
}

export default function CardNatural({
  title,
  description,
  image,
  width,
  height
}: CardNaturalProps) {
  return (
    <div className="bg-secondary w-72 h-full flex flex-col items-center rounded-lg shadow-lg p-4">
      <Image
        src={image}
        alt={title}
        width={width || 150}
        height={height || 150}
        quality={100}
        className="object-cover object-center"
      />
      <h3 className="text-xl font-bold py-4">
        {title}
      </h3>
      <p className="text-base font-medium">
        {description}
      </p>
  </div>
)}