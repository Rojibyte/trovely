import { PrismaClient } from "@/lib/generated/prisma/client";
import slugify from "@/lib/slugify";

const prisma = new PrismaClient();

const productsData = [
  // Ceramics
  {
    indexNumber: "No. 001",
    name: "Stoneware Pitcher, hand-thrown",
    material: "Stoneware",
    origin: "Oaxaca",
    description:
      "Thrown in small batches from a single stoneware body, each pitcher carries the maker's thumbprint at the base. Holds roughly 1.5 litres, enough for a full pot of tea or a bedside carafe.",
    price: 58.0,
    category: "CERAMICS",
    imageUrls: [
      "https://images.pexels.com/photos/8622887/pexels-photo-8622887.jpeg",
      "https://images.pexels.com/photos/8622880/pexels-photo-8622880.jpeg",
      "https://images.pexels.com/photos/8622885/pexels-photo-8622885.jpeg",
    ],
  },
  {
    indexNumber: "No. 002",
    name: "Speckled Coffee Cups (set of 2)",
    material: "Stoneware, reactive glaze",
    origin: "Portugal",
    description:
      "No two cups glaze identically; the speckling is a firing effect, not a pattern.",
    price: 34.0,
    category: "CERAMICS",
    imageUrls: [
      "https://images.pexels.com/photos/4830748/pexels-photo-4830748.jpeg",
      "https://images.pexels.com/photos/4830752/pexels-photo-4830752.jpeg",
      "https://images.pexels.com/photos/4830750/pexels-photo-4830750.jpeg",
    ],
  },
  {
    indexNumber: "No. 003",
    name: "Ash-Glazed Serving Bowl",
    material: "Stoneware, wood-ash glaze",
    origin: "Shigaraki, Japan",
    description:
      "Fired in a wood kiln, so the glaze pools differently on every piece.",
    price: 72.0,
    category: "CERAMICS",
    imageUrls: [
      "https://images.pexels.com/photos/11691548/pexels-photo-11691548.jpeg",
      "https://images.pexels.com/photos/11691547/pexels-photo-11691547.jpeg",
      "https://images.pexels.com/photos/11691546/pexels-photo-11691546.jpeg",
    ],
  },
  {
    indexNumber: "No. 004",
    name: "Ridged Vase, narrow neck",
    material: "Earthenware",
    origin: "Puglia",
    description:
      "A single stem or a bare tabletop, this one prefers restraint.",
    price: 46.0,
    category: "CERAMICS",
    imageUrls: [
      "https://images.pexels.com/photos/20130605/pexels-photo-20130605.jpeg",
      "https://images.pexels.com/photos/20130584/pexels-photo-20130584.jpeg",
      "https://images.pexels.com/photos/20130582/pexels-photo-20130582.jpeg",
    ],
  },

  // Textiles
  {
    indexNumber: "No. 021",
    name: "Woven Market Tote",
    material: "Jute, natural dye",
    origin: "Oaxaca",
    description: "Undyed jute, hand-loomed on a backstrap loom.",
    price: 48.0,
    category: "TEXTILES",
    imageUrls: [
      "https://images.pexels.com/photos/6654139/pexels-photo-6654139.jpeg",
      "https://images.pexels.com/photos/6654128/pexels-photo-6654128.jpeg",
      "https://images.pexels.com/photos/6654124/pexels-photo-6654124.jpeg",
    ],
  },
  {
    indexNumber: "No. 022",
    name: "Linen Table Runner",
    material: "Belgian linen, undyed",
    origin: "Belgium",
    description: "Softens with every wash; no two runners fade quite the same.",
    price: 54.0,
    category: "TEXTILES",
    imageUrls: [
      "https://images.pexels.com/photos/6957939/pexels-photo-6957939.jpeg",
      "https://images.pexels.com/photos/6957897/pexels-photo-6957897.jpeg",
      "https://images.pexels.com/photos/6957779/pexels-photo-6957779.jpeg",
    ],
  },
  {
    indexNumber: "No. 023",
    name: "Wool Throw, raw edge",
    material: "Undyed wool",
    origin: "Andes, Peru",
    description:
      "Left unfinished at the edges on purpose, it's meant to fray a little.",
    price: 86.0,
    category: "TEXTILES",
    imageUrls: [
      "https://images.pexels.com/photos/27515153/pexels-photo-27515153.jpeg",
      "https://images.pexels.com/photos/27515156/pexels-photo-27515156.jpeg",
      "https://images.pexels.com/photos/27515152/pexels-photo-27515152.jpeg",
    ],
  },
  {
    indexNumber: "No. 024",
    name: "Cotton Napkins (set of 4)",
    material: "Handloom cotton",
    origin: "Rajasthan, India",
    description:
      "Slightly irregular hems, a mark of hand-loom weaving, not a flaw.",
    price: 32.0,
    category: "TEXTILES",
    imageUrls: [
      "https://images.pexels.com/photos/5424920/pexels-photo-5424920.jpeg",
      "https://images.pexels.com/photos/5424905/pexels-photo-5424905.jpeg",
      "https://images.pexels.com/photos/5424913/pexels-photo-5424913.jpeg",
    ],
  },

  // Home
  {
    indexNumber: "No. 041",
    name: "Olive Wood Bowl",
    material: "Solid olive wood",
    origin: "Tunisia",
    description: "Each grain pattern is unique to the tree it came from.",
    price: 36.0,
    category: "HOME",
    imageUrls: [
      "https://images.pexels.com/photos/6569019/pexels-photo-6569019.jpeg",
      "https://images.pexels.com/photos/6569304/pexels-photo-6569304.jpeg",
      "https://images.pexels.com/photos/6569148/pexels-photo-6569148.jpeg",
    ],
  },
  {
    indexNumber: "No. 042",
    name: "Brass Candle Holder, single taper",
    material: "Cast brass",
    origin: "Jaipur, India",
    description: "Ages into a warmer patina the more it's used.",
    price: 28.0,
    category: "HOME",
    imageUrls: [
      "https://images.pexels.com/photos/15380977/pexels-photo-15380977.jpeg",
      "https://images.pexels.com/photos/15380985/pexels-photo-15380985.jpeg",
    ],
  },
  {
    indexNumber: "No. 043",
    name: "Woven Seagrass Basket",
    material: "Seagrass",
    origin: "Vietnam",
    description: "Sturdy enough for firewood, soft enough for throws.",
    price: 42.0,
    category: "HOME",
    imageUrls: [
      "https://images.pexels.com/photos/6654115/pexels-photo-6654115.jpeg",
      "https://images.pexels.com/photos/13911403/pexels-photo-13911403.jpeg",
      "https://images.pexels.com/photos/6653905/pexels-photo-6653905.jpeg",
    ],
  },
  {
    indexNumber: "No. 044",
    name: "Hand-Carved Serving Board",
    material: "Acacia wood",
    origin: "Java, Indonesia",
    description: "One edge left with natural bark for texture and contrast.",
    price: 52.0,
    category: "HOME",
    imageUrls: [
      "https://images.pexels.com/photos/1765012/pexels-photo-1765012.jpeg",
      "https://images.pexels.com/photos/1765005/pexels-photo-1765005.jpeg",
    ],
  },

  // Garden
  {
    indexNumber: "No. 061",
    name: "Terracotta Planter, unglazed",
    material: "Unglazed clay",
    origin: "Puglia",
    description:
      "Porous by design, better drainage, and it weathers beautifully outdoors.",
    price: 29.0,
    category: "GARDEN",
    imageUrls: [
      "https://images.pexels.com/photos/9707251/pexels-photo-9707251.jpeg",
      "https://images.pexels.com/photos/9707237/pexels-photo-9707237.jpeg",
      "https://images.pexels.com/photos/9707247/pexels-photo-9707247.jpeg",
    ],
  },
  {
    indexNumber: "No. 062",
    name: "Cast Iron Watering Can",
    material: "Cast iron",
    origin: "Northern England",
    description:
      "Heavier than it looks; built to outlast the plants it waters.",
    price: 64.0,
    category: "GARDEN",
    imageUrls: [
      "https://images.pexels.com/photos/4594024/pexels-photo-4594024.jpeg",
      "https://images.pexels.com/photos/4622067/pexels-photo-4622067.jpeg",
      "https://images.pexels.com/photos/4750273/pexels-photo-4750273.jpeg",
    ],
  },
  {
    indexNumber: "No. 063",
    name: "Woven Plant Hanger",
    material: "Cotton macramé cord",
    origin: "Bali, Indonesia",
    description: "Hand-knotted, holds pots up to 8 inches wide.",
    price: 24.0,
    category: "GARDEN",
    imageUrls: [
      "https://images.pexels.com/photos/5825548/pexels-photo-5825548.jpeg",
      "https://images.pexels.com/photos/5825558/pexels-photo-5825558.jpeg",
      "https://images.pexels.com/photos/5825559/pexels-photo-5825559.jpeg",
    ],
  },
  {
    indexNumber: "No. 064",
    name: "Copper Hand Trowel",
    material: "Copper-plated steel",
    origin: "Cornwall, England",
    description: "Copper resists rust and, some gardeners swear, deters slugs.",
    price: 22.0,
    category: "GARDEN",
    imageUrls: [
      "https://images.pexels.com/photos/6231826/pexels-photo-6231826.jpeg",
      "https://images.pexels.com/photos/6231828/pexels-photo-6231828.jpeg",
      "https://images.pexels.com/photos/6231829/pexels-photo-6231829.jpeg",
    ],
  },
] as const;

async function main() {
  await prisma.product.createMany({
    data: productsData.map((product) => ({
      ...product,
      slug: slugify(product.name),
      imageUrls: [...product.imageUrls],
    })),
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
