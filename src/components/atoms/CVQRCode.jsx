import Image from "next/image";

export default function CVQRCode(props) {
  return (
      <Image
        src="/qrcode.jpg"
        alt="A QR code for CV"
        height={256}
        width={256}
        quality={98}
        {...props}
      />
  )

}
