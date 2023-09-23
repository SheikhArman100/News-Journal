import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";
import { twMerge } from "tailwind-merge";

export default async function RemoteImage({src,className,alt,sizes,priority}) {
  const buffer = await fetch(src).then(async (res) => {
    return Buffer.from(await res.arrayBuffer());
  });

  const { base64 } = await getPlaiceholder(buffer);

  return (
    <Image
      src={src}
      fill
      className={twMerge("object-fit w-full h-full",className)}
      alt={alt}
      sizes={sizes}
      placeholder="blur"
      blurDataURL={base64}
      priority={!!priority}
    />
  );
}