export type PlantType = {
  title: string;
  price: number;
  selected: boolean;
  description: string;
  packetImage: string;
  one: string;
  two: string;
  coverImage: string;
  head: string;
  badge: string;
};

export let plants: Array<PlantType> = [
  {
    title: "White Daisy",
    price: 100,
    selected: false,
    description:
      "With their white petals and yellow centers, white daisies symbolize innocence and the other classic daisy traits, such as babies, motherhood, hope, and new beginnings.",
    packetImage: "/images/Daisy/daisyPacket.svg",
    one: "/images/Daisy/daisy1.svg",
    two: "/images/Daisy/daisy2.svg",
    coverImage: "/images/Daisy/daisy3.pdf",
    head: "/images/Daisy/daisyHead.svg",
    badge: "/images/Daisy/daisyBade.svg",
  },
  {
    title: "Red Tulip",
    price: 90,
    selected: false,
    description:
      "Red Tulips are a genus of spring-blooming perennial herbaceous bulbiferous geophytes. Red tulips symbolize eternal love, undying love, perfect love, true love.",
    packetImage: "/images/redTulips/redTulipPacket.svg",
    one: "/images/redTulips/tulip1.svg",
    two: "/images/redTulips/tulip2.svg",
    coverImage: "/images/redTulips/tulip3.svg",
    head: "/images/redTulips/tulipHead.svg",
    badge: "/images/redTulips/tulipBadge.svg",
  },
  {
    title: "Cactus",
    price: 130,
    selected: false,
    description:
      "Cactuses are type of desert plant that has thick, leafless stems covered in prickly spines or sharp spikes, some cacti are able to store hundreds of gallons of water. Cactus originates from the Greek name Kaktos.",
    packetImage: "/images/Cactus/cactusPacket.svg",
    one: "/images/Cactus/cactus1.svg",
    two: "/images/Cactus/cactus2.svg",
    coverImage: "/images/Cactus/cactus3.svg",
    head: "/images/Cactus/cactusHead.svg",
    badge: "/images/Cactus/cactusBadge.svg",
  },
];
