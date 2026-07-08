import { PrismaClient } from "@/lib/generated/prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.product.createMany({
    data: [
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
        imageUrl: "/placeholder.jpg",
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
        imageUrl: "/placeholder.jpg",
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
        imageUrl: "/placeholder.jpg",
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
        imageUrl: "/placeholder.jpg",
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
        imageUrl: "/placeholder.jpg",
      },
      {
        indexNumber: "No. 022",
        name: "Linen Table Runner",
        material: "Belgian linen, undyed",
        origin: "Belgium",
        description:
          "Softens with every wash; no two runners fade quite the same.",
        price: 54.0,
        category: "TEXTILES",
        imageUrl: "/placeholder.jpg",
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
        imageUrl: "/placeholder.jpg",
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
        imageUrl: "/placeholder.jpg",
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
        imageUrl: "/placeholder.jpg",
      },
      {
        indexNumber: "No. 042",
        name: "Brass Candle Holder, single taper",
        material: "Cast brass",
        origin: "Jaipur, India",
        description: "Ages into a warmer patina the more it's used.",
        price: 28.0,
        category: "HOME",
        imageUrl: "/placeholder.jpg",
      },
      {
        indexNumber: "No. 043",
        name: "Woven Seagrass Basket",
        material: "Seagrass",
        origin: "Vietnam",
        description: "Sturdy enough for firewood, soft enough for throws.",
        price: 42.0,
        category: "HOME",
        imageUrl: "/placeholder.jpg",
      },
      {
        indexNumber: "No. 044",
        name: "Hand-Carved Serving Board",
        material: "Acacia wood",
        origin: "Java, Indonesia",
        description:
          "One edge left with natural bark for texture and contrast.",
        price: 52.0,
        category: "HOME",
        imageUrl: "/placeholder.jpg",
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
        imageUrl: "/placeholder.jpg",
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
        imageUrl: "/placeholder.jpg",
      },
      {
        indexNumber: "No. 063",
        name: "Woven Plant Hanger",
        material: "Cotton macramé cord",
        origin: "Bali, Indonesia",
        description: "Hand-knotted, holds pots up to 8 inches wide.",
        price: 24.0,
        category: "GARDEN",
        imageUrl: "/placeholder.jpg",
      },
      {
        indexNumber: "No. 064",
        name: "Copper Hand Trowel",
        material: "Copper-plated steel",
        origin: "Cornwall, England",
        description:
          "Copper resists rust and, some gardeners swear, deters slugs.",
        price: 22.0,
        category: "GARDEN",
        imageUrl: "/placeholder.jpg",
      },
    ],
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
