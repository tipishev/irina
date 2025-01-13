import { Portfolio } from "@/components/Portfolio";

const categories = [
  {
    id: "paintings",
    name: "Paintings",
    images: [
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5",
      "https://images.unsplash.com/photo-1580136579312-94651dfd596d",
      "https://images.unsplash.com/photo-1577083552431-6e5fd01988ec"
    ]
  },
  {
    id: "drawings",
    name: "Drawings",
    images: [
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f",
      "https://images.unsplash.com/photo-1513364778565-d6cf2561e7f1",
      "https://images.unsplash.com/photo-1513364788649-e22c1aaec89e"
    ]
  },
  {
    id: "ceramics",
    name: "Ceramics",
    images: [
      "https://images.unsplash.com/photo-1565193298357-c5b46b0ff2d8",
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61",
      "https://images.unsplash.com/photo-1590422749897-47c47673ba0b"
    ]
  }
];

const ArtPortfolio = () => {
  return <Portfolio title="Art Portfolio" categories={categories} />;
};

export default ArtPortfolio;