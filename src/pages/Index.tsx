import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

type Language = 'ru' | 'en' | 'sv';

interface IndexProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

const translations = {
  ru: {
    scheduleLink: "Посмотреть расписание и цены",
    materials: {
      title: "Материалы",
      content: "Базовые материалы (краски и бумагу) ученик приносит сам. Специальные материалы предоставляются студией."
    },
    techniques: {
      title: "Программы и техники",
      categories: {
        drawing: {
          title: "Рисунок и живопись",
          items: ["Карандаш, уголь, пастель", "Акварель, гуашь"]
        },
        sculpture: {
          title: "Скульптура",
          items: ["Глина, папье-маше"]
        },
        graphics: {
          title: "Графика",
          items: ["Тушь, перо"]
        },
        decorative: {
          title: "Декоративно-прикладное искусство",
          items: [
            "Эбру", "Монотипия", "Макраме", "Вышивка", "Акриловые заливки",
            "Декупаж", "Бисероплетение", "Гобелен", "Мозаика", "Валяние",
            "Вязание", "Квиллинг", "Роспись по стеклу", "Роспись по дереву",
            "Народные промыслы", "Объемная термомозаика", "Макетирование",
            "Линогравюра", "Ковроткачество"
          ]
        }
      }
    }
  },
  en: {
    scheduleLink: "View schedule and prices",
    materials: {
      title: "Materials",
      content: "Students bring their own basic materials (paints and paper). Special materials are provided by the studio."
    },
    techniques: {
      title: "Programs and Techniques",
      categories: {
        drawing: {
          title: "Drawing and Painting",
          items: ["Pencil, charcoal, pastel", "Watercolor, gouache"]
        },
        sculpture: {
          title: "Sculpture",
          items: ["Clay, papier-mâché"]
        },
        graphics: {
          title: "Graphics",
          items: ["Ink, pen"]
        },
        decorative: {
          title: "Decorative Arts",
          items: [
            "Ebru", "Monotype", "Macramé", "Embroidery", "Acrylic pouring",
            "Decoupage", "Beadwork", "Tapestry", "Mosaic", "Felting",
            "Knitting", "Quilling", "Glass painting", "Wood painting",
            "Folk crafts", "3D thermal mosaic", "Model making",
            "Linocut", "Carpet weaving"
          ]
        }
      }
    }
  },
  sv: {
    scheduleLink: "Se schema och priser",
    materials: {
      title: "Material",
      content: "Eleverna tar med sig grundläggande material (färger och papper). Specialmaterial tillhandahålls av studion."
    },
    techniques: {
      title: "Program och tekniker",
      categories: {
        drawing: {
          title: "Teckning och målning",
          items: ["Penna, kol, pastell", "Akvarell, gouache"]
        },
        sculpture: {
          title: "Skulptur",
          items: ["Lera, papier-maché"]
        },
        graphics: {
          title: "Grafik",
          items: ["Bläck, penna"]
        },
        decorative: {
          title: "Dekorativ konst",
          items: [
            "Ebru", "Monotypi", "Makramé", "Broderi", "Akrylgjutning",
            "Decoupage", "Pärlarbete", "Gobeläng", "Mosaik", "Tovning",
            "Stickning", "Quilling", "Glasmålning", "Trämålning",
            "Folkkonst", "3D termisk mosaik", "Modellbygge",
            "Linoleumtryck", "Mattvävning"
          ]
        }
      }
    }
  }
};

const messageOfTheDay = {
  ru: "Специальный мастер-класс ко Дню Святого Валентина! Присоединяйтесь к нашему творческому классу, где мы будем создавать уникальные подарки и украшения. Научитесь создавать романтические открытки, декоративные сердца и особенные сувениры для ваших любимых. Забронируйте место сейчас!",
  en: "Valentine's Day Special Crafts Class! Join our creative workshop where we'll be making unique gifts and decorations. Learn to create romantic cards, decorative hearts, and special keepsakes for your loved ones. Book your spot now!",
  sv: "Alla hjärtans dag specialklass! Delta i vår kreativa workshop där vi skapar unika presenter och dekorationer. Lär dig göra romantiska kort, dekorativa hjärtan och speciella minnessaker för dina nära och kära. Boka din plats nu!"
};

const Index = ({ currentLang, onLanguageChange }: IndexProps) => {
  return (
    <div className="min-h-screen">
      <Hero currentLang={currentLang} onLanguageChange={onLanguageChange} />
      <div className="container mx-auto px-4 py-12 space-y-12">
        <div className="text-center">
          <Link to="/art-schedule">
            <Button variant="default" size="lg" className="mb-8">
              {translations[currentLang].scheduleLink}
            </Button>
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-secondary">
              {translations[currentLang].materials.title}
            </h2>
            <p className="text-secondary/80">
              {translations[currentLang].materials.content}
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-secondary">
              {translations[currentLang].techniques.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.values(translations[currentLang].techniques.categories).map((category, index) => (
                <div key={index} className="space-y-4">
                  <h3 className="text-xl font-semibold text-primary">{category.title}</h3>
                  <ul className="list-disc list-inside space-y-2 text-secondary/80">
                    {category.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-lg shadow-lg p-8">
          <div className="w-full md:w-1/3 aspect-[3/4] bg-gradient-to-br from-pink-100 to-red-200 rounded-lg shadow-lg flex items-center justify-center p-6">
            <div className="text-center space-y-4">
              <div className="text-3xl font-bold text-red-600">❤️</div>
              <div className="text-xl font-semibold text-red-800">
                {currentLang === 'ru' ? 'День Святого Валентина' : 
                 currentLang === 'sv' ? 'Alla hjärtans dag' : 
                 "Valentine's Day"}
              </div>
              <div className="text-lg text-red-700">
                {currentLang === 'ru' ? 'Творческий Мастер-класс' : 
                 currentLang === 'sv' ? 'Kreativ Workshop' : 
                 'Creative Workshop'}
              </div>
            </div>
          </div>
          <p className="text-xl text-secondary italic flex-1 text-left leading-relaxed">
            {messageOfTheDay[currentLang]}
          </p>
        </div>
      </div>
      <Services currentLang={currentLang} />
    </div>
  );
};

export default Index;