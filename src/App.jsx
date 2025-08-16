import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  Award,
  Box,
  Building2,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Home,
  Instagram,
  Layers,
  Linkedin,
  LucideHouse,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Move3D,
  Phone,
  Ruler,
  Star,
  Users,
  X
} from 'lucide-react'
import { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'

// Importando as imagens
import brasilia1 from './assets/brasilia/brasilia1.webp'
import brasilia2 from './assets/brasilia/brasilia2.jpg'
import { default as brasilia3, default as decor1, default as decor2, default as decor3 } from './assets/brasilia/brasilia3.jpg'
import lagoSul1 from './assets/lago-sul/lago-sul1.jpg'
import lagoSul2 from './assets/lago-sul/lago-sul2.jpg'
import { default as betronLogo, default as lagoSul3 } from './assets/lago-sul/lago-sul3.jpg'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const navigate = useNavigate()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleContactModal = () => setIsContactModalOpen(!isContactModalOpen)

  const handleWhatsAppContact = (message) => {
    const phoneNumber = "5562999988895"
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank')
  }

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  // Dados dos projetos
  const projects = [
    {
      id: 'residencia-lago-sul',
      title: "Residência Lago Sul",
      description: "Casa moderna com vista panorâmica para o lago",
      category: "Residencial",
      images: [lagoSul1, lagoSul2, lagoSul3, decor1, decor2, decor3],
      lotArea: "1.200 m²",
      builtArea: "580 m²",
      year: "2023",
      location: "Lago Sul, Brasília - DF",
      features: [
        "Piscina infinita",
        "Home theater",
        "Cozinha gourmet",
        "Jardim vertical",
        "Terraço com vista panorâmica"
      ],
      furnitureBrands: [
        {
          name: "Betron",
          logo: betronLogo,
          description: "Móveis planejados na sala, quartos e home office"
        }
      ]
    },
    {
      id: 'villa-contemporanea',
      title: "Villa Contemporânea",
      description: "Projeto sustentável com design inovador",
      category: "Residencial",
      images: [brasilia1, brasilia2, brasilia3, decor1, decor2, decor3],
      lotArea: "950 m²",
      builtArea: "420 m²",
      year: "2022",
      location: "Jardim Botânico, Brasília - DF",
      features: [
        "Sistema de energia solar",
        "Captação de água pluvial",
        "Pé-direito duplo",
        "Integração indoor-outdoor"
      ]
    },
    {
      id: 'mansao-de-luxo',
      title: "Mansão de Luxo",
      description: "Arquitetura de alto padrão com 800m²",
      category: "Residencial",
      images: [lagoSul3, lagoSul1, lagoSul2, decor1, decor2, decor3],
      lotArea: "2.500 m²",
      builtArea: "820 m²",
      year: "2024",
      location: "Península dos Ministros, Brasília - DF",
      features: [
        "5 suítes master",
        "Spa com sauna",
        "Quadra de tênis",
        "Jardim de inverno",
        "Garagem para 8 carros"
      ],
      furnitureBrands: [
        {
          name: "Betron",
          logo: betronLogo,
          description: "Móveis planejados em toda a residência"
        }
      ]
    }
  ]


  // Configurações de animação
  const navItem = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.16, 0.77, 0.47, 0.97] // Curva de easing personalizada
      }
    }),
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  }

  const menuVariants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2
      }
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  }

  const menuItemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  }
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      {/* Header Premium */}

      <header className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-xl border-b border-white/10 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => navigate('/')}
          >
            <motion.div whileHover={{ rotate: -5 }}>
              <LucideHouse className="h-8 w-8 text-amber-600 group-hover:text-amber-500 transition-colors duration-300" />
            </motion.div>
            <motion.span
              className="text-2xl font-serif font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300"
              whileHover={{ x: 2 }}
            >
              Ruan Braga
            </motion.span>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Badge
                variant="outline"
                className="ml-2 border-amber-600 text-amber-600 group-hover:border-amber-500 group-hover:text-amber-500 transition-colors duration-300"
              >
                Arquitetura
              </Badge>
            </motion.div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-2">
            {['home', 'about', 'portfolio', 'services', 'process', 'contact'].map((section, i) => (
              <motion.button
                key={section}
                custom={i}
                variants={navItem}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                onClick={() => scrollToSection(section)}
                className="text-gray-800 hover:text-amber-600 font-medium text-sm uppercase tracking-wider px-4 py-2 rounded-lg relative overflow-hidden"
              >
                <span className="relative z-10">
                  {section === 'home' && 'Início'}
                  {section === 'about' && 'O Studio'}
                  {section === 'portfolio' && 'Portfólio'}
                  {section === 'services' && 'Serviços'}
                  {section === 'process' && 'Processo'}
                  {section === 'contact' && 'Contato'}
                </span>
                <motion.span
                  className="absolute inset-0 bg-white/20 rounded-lg"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </motion.button>
            ))}
          </nav>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              onClick={toggleContactModal}
              className="hidden lg:flex bg-amber-600 hover:bg-amber-700 text-white rounded-lg px-6 py-2 shadow-md transition-all duration-300 hover:shadow-lg"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Contato
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-gray-800 hover:text-amber-600 hover:bg-white/20 focus:outline-none transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-white/20 shadow-lg overflow-hidden"
            >
              {/* Desktop Navigation */}
              <motion.nav
                className="hidden lg:flex space-x-2"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.1 } },
                  hidden: {}
                }}
              >
                {['home', 'about', 'portfolio', 'services', 'process', 'contact'].map((section, i) => (
                  <motion.button
                    key={section}
                    custom={i}
                    variants={{
                      hidden: { opacity: 0, y: -20 },
                      visible: (i) => ({
                        opacity: 1,
                        y: 0,
                        transition: {
                          delay: i * 0.05,
                          duration: 0.6,
                          ease: [0.16, 0.77, 0.47, 0.97]
                        }
                      }),
                      hover: {
                        scale: 1.1,
                        y: -3,
                        transition: { duration: 0.25 }
                      }
                    }}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    onClick={() => scrollToSection(section)}
                    className="text-gray-800 hover:text-amber-600 font-medium text-sm uppercase tracking-wider px-4 py-2 rounded-lg relative overflow-hidden"
                  >
                    <span className="relative z-10">
                      {section === 'home' && 'Início'}
                      {section === 'about' && 'O Studio'}
                      {section === 'portfolio' && 'Portfólio'}
                      {section === 'services' && 'Serviços'}
                      {section === 'process' && 'Processo'}
                      {section === 'contact' && 'Contato'}
                    </span>
                    <motion.span
                      className="absolute inset-0 bg-white/20 rounded-lg"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                  </motion.button>
                ))}
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Rotas */}
      <Routes>
        {/* Rota principal */}
        <Route path="/" element={
          <>
            {/* Hero Section Premium */}
            <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
              {/* Overlay escuro */}
              <div className="absolute inset-0 bg-black/30 z-0" />

              {/* Vídeo com fallback e controles de debug */}
              <div className="absolute z-0 w-full h-full">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  onError={(e) => console.error("Erro no vídeo:", e)}
                >

                  <source
                    src="/videos/vd-lago-small.mp4"
                    type="video/mp4"
                  />

                  {/* Fallback robusto */}
                  <img
                    src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                    alt="Arquitetura de Brasília"
                    className="absolute inset-0 object-cover w-full h-full"
                  />
                </video>
              </div>
              {/* Conteúdo textual (mantido igual) */}
              <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
                <Badge className="mb-6 bg-amber-600/20 text-amber-100 border-amber-400 font-light tracking-widest rounded-none px-4 py-1">
                  ARQUITETURA DE ALTO PADRÃO
                </Badge>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-tight">
                  <span className="block">Design Arquitetônico</span>
                  <span className="text-amber-400">Exclusivo</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto font-light leading-relaxed">
                  Criamos espaços que transcendem o comum, onde cada detalhe é meticulosamente planejado para
                  refletir excelência em design e funcionalidade.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={() => scrollToSection('portfolio')}
                    size="lg"
                    className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 rounded-none border border-amber-700 shadow-lg transition-all duration-300 hover:shadow-xl"
                  >
                    <Move3D className="w-5 h-5 mr-2" />
                    Explorar Projetos
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button
                    onClick={toggleContactModal}
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white/10 hover:text-white px-8 py-6 rounded-none backdrop-blur-sm transition-all duration-300 bg-black/20"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Consultoria Personalizada
                  </Button>
                </div>
              </div>

              {/* Scroll indicator */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
                <div className="w-6 h-10 border-2 border-amber-400 rounded-full flex justify-center">
                  <div className="w-1 h-2 bg-amber-400 rounded-full mt-2 animate-scroll"></div>
                </div>
              </div>
            </section>

            {/* About Section Premium */}
            <section id="about" className="py-24 bg-white">
              <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className="relative">
                    <div className="relative z-10">
                      <img
                        src={brasilia2}
                        alt="Arquitetura de Brasília"
                        className="w-full h-auto object-cover shadow-2xl"
                      />
                    </div>
                    <div className="absolute -bottom-8 -right-8 bg-white p-8 shadow-xl z-20 w-3/4">
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-amber-500 fill-current" />
                        ))}
                      </div>
                      <h3 className="font-serif text-2xl text-gray-900 mb-2">Excelência em Arquitetura</h3>
                      <p className="text-gray-600 text-sm">Prêmio de Melhor Escritório de Arquitetura 2023</p>
                    </div>
                    <div className="absolute -top-8 -left-8 bg-amber-600 text-white p-6 w-40 h-40 flex flex-col items-center justify-center text-center shadow-lg">
                      <span className="text-4xl font-bold">14+</span>
                      <span className="text-sm uppercase tracking-wider">Anos de Experiência</span>
                    </div>
                  </div>

                  <div>
                    <Badge className="mb-4 bg-amber-100 text-amber-800 border-amber-200 rounded-none px-4 py-1 font-normal">
                      O STUDIO
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                      Arquitetura que <span className="text-amber-600">Inspira</span> e <span className="text-amber-600">Transforma</span>
                    </h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      Acreditamos que a arquitetura vai além da construção de espaços -
                      criamos ambientes que elevam a qualidade de vida e refletem a essência de quem os habita.
                    </p>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      Com uma equipe multidisciplinar de arquitetos, designers e especialistas em iluminação,
                      desenvolvemos projetos únicos que harmonizam estética, funcionalidade e sustentabilidade.
                    </p>

                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div className="border-l-4 border-amber-600 pl-4 py-2">
                        <div className="text-3xl font-bold text-gray-900 mb-1">200+</div>
                        <div className="text-sm text-gray-600 uppercase tracking-wider">Projetos</div>
                      </div>
                      <div className="border-l-4 border-amber-600 pl-4 py-2">
                        <div className="text-3xl font-bold text-gray-900 mb-1">50+</div>
                        <div className="text-sm text-gray-600 uppercase tracking-wider">Prêmios</div>
                      </div>
                      <div className="border-l-4 border-amber-600 pl-4 py-2">
                        <div className="text-3xl font-bold text-gray-900 mb-1">100%</div>
                        <div className="text-sm text-gray-600 uppercase tracking-wider">Satisfação</div>
                      </div>
                      <div className="border-l-4 border-amber-600 pl-4 py-2">
                        <div className="text-3xl font-bold text-gray-900 mb-1">14+</div>
                        <div className="text-sm text-gray-600 uppercase tracking-wider">Anos</div>
                      </div>
                    </div>

                    <Button
                      onClick={toggleContactModal}
                      className="bg-gray-900 hover:bg-gray-800 text-white rounded-none px-8 py-4 shadow-md transition-all duration-300 hover:shadow-lg"
                    >
                      <Users className="w-5 h-5 mr-2" />
                      Conheça Nossa Equipe
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            {/* Portfolio Section Premium */}
            <section id="portfolio" className="py-24 bg-gray-50">
              <div className="container mx-auto px-6">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                  <Badge className="mb-4 bg-amber-100 text-amber-800 border-amber-200 rounded-none px-4 py-1 font-normal">
                    PORTFÓLIO
                  </Badge>
                  <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                    Nossos <span className="text-amber-600">Projetos</span> Premiados
                  </h2>
                  <p className="text-lg text-gray-600">
                    Cada projeto é uma narrativa única, onde contamos a história de nossos clientes através
                    de espaços que combinam beleza, funcionalidade e inovação.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.map((project, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-xl"
                      onClick={() => navigate(`/project/${project.id}`)}
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={project.images[0]}
                          alt={project.title}
                          className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-white text-gray-900 hover:bg-white rounded-none px-3 py-1 font-medium">
                            {project.category}
                          </Badge>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 p-6 w-full">
                        <h3 className="text-xl font-serif font-semibold text-white mb-1 group-hover:text-amber-300 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 text-sm mb-3">{project.description}</p>
                        <Button
                          variant="link"
                          className="text-amber-300 hover:text-amber-200 p-0 h-auto font-normal group"
                        >
                          Ver Detalhes
                          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-12">
                  <Button
                    variant="outline"
                    className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white rounded-none px-8 py-4 shadow-sm transition-all duration-300"
                  >
                    Ver Todos os Projetos
                  </Button>
                </div>
              </div>
            </section>

            {/* Services Section Premium */}
            <section id="services" className="py-24 bg-white">
              <div className="container mx-auto px-6">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                  <Badge className="mb-4 bg-amber-100 text-amber-800 border-amber-200 rounded-none px-4 py-1 font-normal">
                    SERVIÇOS
                  </Badge>
                  <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                    Soluções <span className="text-amber-600">Completas</span> em Arquitetura
                  </h2>
                  <p className="text-lg text-gray-600">
                    Oferecemos um portfólio abrangente de serviços arquitetônicos, desde a concepção
                    criativa até a execução impecável do projeto.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      icon: Home,
                      title: "Projetos Residenciais",
                      description: "Casas, apartamentos e condomínios personalizados que refletem seu estilo de vida único.",
                      features: ["Design personalizado", "Planejamento espacial", "Iluminação estratégica"]
                    },
                    {
                      icon: Building2,
                      title: "Arquitetura Comercial",
                      description: "Espaços comerciais que potencializam sua marca e otimizam a experiência do cliente.",
                      features: ["Layout funcional", "Identidade visual", "Acessibilidade"]
                    },
                    {
                      icon: Box,
                      title: "Design de Interiores",
                      description: "Ambientes internos que harmonizam estética, conforto e funcionalidade.",
                      features: ["Seleção de materiais", "Mobiliário customizado", "Paleta de cores"]
                    },
                    {
                      icon: Layers,
                      title: "Reformas e Restauro",
                      description: "Transformação de espaços com preservação de valores históricos e estruturais.",
                      features: ["Análise estrutural", "Preservação de características", "Modernização"]
                    },
                    {
                      icon: MapPin,
                      title: "Planejamento Urbano",
                      description: "Desenvolvimento de espaços urbanos sustentáveis e socialmente integrados.",
                      features: ["Estudos de impacto", "Zoneamento inteligente", "Sustentabilidade"]
                    },
                    {
                      icon: Award,
                      title: "Consultoria Especializada",
                      description: "Orientação técnica em todas as fases do projeto com expertise de mercado.",
                      features: ["Análise de viabilidade", "Gestão de projetos", "Fiscalização"]
                    }
                  ].map((service, index) => (
                    <div key={index} className="border border-gray-200 hover:border-amber-400 transition-all duration-300 group">
                      <div className="p-8">
                        <service.icon className="w-10 h-10 text-amber-600 mb-6 group-hover:scale-110 transition-transform" />
                        <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3">{service.title}</h3>
                        <p className="text-gray-600 mb-4">{service.description}</p>
                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-center text-gray-700">
                              <span className="w-1 h-1 bg-amber-600 rounded-full mr-2"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Button
                          variant="link"
                          className="text-amber-600 hover:text-amber-700 p-0 h-auto font-normal group"
                        >
                          Saiba Mais
                          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Process Section */}
            <section id="process" className="py-24 bg-gray-900 text-white">
              <div className="container mx-auto px-6">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                  <Badge className="mb-4 bg-amber-600/20 text-amber-300 border-amber-400 rounded-none px-4 py-1 font-normal">
                    NOSSO PROCESSO
                  </Badge>
                  <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                    Metodologia <span className="text-amber-400">Criativa</span> e <span className="text-amber-400">Eficiente</span>
                  </h2>
                  <p className="text-lg text-gray-300">
                    Um fluxo de trabalho cuidadosamente planejado para garantir excelência em cada etapa do projeto.
                  </p>
                </div>

                <div className="relative">
                  <div className="hidden lg:block absolute left-1/2 top-0 h-full w-0.5 bg-amber-600/30 transform -translate-x-1/2"></div>

                  <div className="space-y-16 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8">
                    {[
                      {
                        step: "01",
                        title: "Briefing e Conceito",
                        description: "Entendimento profundo das necessidades, desejos e estilo de vida do cliente para criar um conceito arquitetônico único.",
                        icon: <MessageCircle className="w-6 h-6 text-amber-400" />
                      },
                      {
                        step: "02",
                        title: "Estudo Preliminar",
                        description: "Desenvolvimento de esboços, estudos volumétricos e layout funcional, considerando aspectos técnicos e regulatórios.",
                        icon: <Ruler className="w-6 h-6 text-amber-400" />
                      },
                      {
                        step: "03",
                        title: "Projeto Legal",
                        description: "Elaboração de documentação técnica para aprovação em órgãos competentes, garantindo conformidade com normas.",
                        icon: <Award className="w-6 h-6 text-amber-400" />
                      },
                      {
                        step: "04",
                        title: "Projeto Executivo",
                        description: "Detalhamento completo do projeto com especificações técnicas para orçamento precisa e execução impecável.",
                        icon: <Move3D className="w-6 h-6 text-amber-400" />
                      },
                      {
                        step: "05",
                        title: "Acompanhamento de Obra",
                        description: "Supervisão técnica durante a execução para garantir fidelidade ao projeto e qualidade dos materiais.",
                        icon: <Building2 className="w-6 h-6 text-amber-400" />
                      },
                      {
                        step: "06",
                        title: "Entrega e Pós-Obra",
                        description: "Finalização com ajustes finos e orientações para manutenção, garantindo satisfação total do cliente.",
                        icon: <Home className="w-6 h-6 text-amber-400" />
                      }
                    ].map((item, index) => (
                      <div
                        key={index}
                        className={`relative ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left lg:mt-32'}`}
                      >
                        <div className={`hidden lg:block absolute ${index % 2 === 0 ? 'right-0' : 'left-0'} transform ${index % 2 === 0 ? 'translate-x-8' : '-translate-x-8'} top-8 w-16 h-16 rounded-full bg-amber-600 flex items-center justify-center z-10`}>
                          {item.icon}
                        </div>
                        <div className="lg:hidden mb-4 w-12 h-12 rounded-full bg-amber-600 flex items-center justify-center">
                          {item.icon}
                        </div>
                        <div className={`bg-gray-800 p-8 shadow-lg ${index % 2 === 0 ? 'lg:mr-16' : 'lg:ml-16'}`}>
                          <span className="text-amber-400 font-mono text-sm mb-2 block">Etapa {item.step}</span>
                          <h3 className="text-xl font-serif font-semibold text-white mb-3">{item.title}</h3>
                          <p className="text-gray-400">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Testimonials Section Premium */}
            <section id="testimonials" className="py-24 bg-white">
              <div className="container mx-auto px-6">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                  <Badge className="mb-4 bg-amber-100 text-amber-800 border-amber-200 rounded-none px-4 py-1 font-normal">
                    DEPOIMENTOS
                  </Badge>
                  <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                    O que <span className="text-amber-600">Nossos Clientes</span> Dizem
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      name: "Maria Fernanda Silva",
                      role: "Proprietária - Residência Lago Sul",
                      content: "O Ruan Braga transformou completamente nossa visão de lar. A atenção aos detalhes e a capacidade de traduzir nossos desejos em um espaço funcional e belo foi impressionante. Cada canto da casa conta nossa história.",
                      rating: 5,
                      image: "https://randomuser.me/api/portraits/women/68.jpg"
                    },
                    {
                      name: "Ricardo Almeida",
                      role: "CEO - Espaço Corporativo",
                      content: "Como empresário, valorizo profissionalismo e resultados. O Ruan Braga entregou ambos em nosso projeto comercial, criando um ambiente que não apenas impressiona clientes, mas também aumenta a produtividade da equipe.",
                      rating: 5,
                      image: "https://randomuser.me/api/portraits/men/32.jpg"
                    },
                    {
                      name: "Camila e Eduardo Lima",
                      role: "Casal - Apartamento Asa Sul",
                      content: "Trabalhar com o Ruan Braga foi uma experiência colaborativa incrível. Eles ouviram atentamente nossas necessidades distintas e criaram um espaço que harmoniza nossos estilos pessoais de forma surpreendente.",
                      rating: 5,
                      image: "https://randomuser.me/api/portraits/women/44.jpg"
                    }
                  ].map((testimonial, index) => (
                    <div key={index} className="border border-gray-200 p-8 hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-center mb-6">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover mr-4"
                        />
                        <div>
                          <div className="font-serif font-semibold text-gray-900">{testimonial.name}</div>
                          <div className="text-sm text-gray-500">{testimonial.role}</div>
                        </div>
                      </div>
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-amber-500 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-600 italic">"{testimonial.content}"</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Contact Section Premium */}
            <section id="contact" className="py-24 bg-gray-50">
              <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12">
                  <div>
                    <Badge className="mb-4 bg-amber-100 text-amber-800 border-amber-200 rounded-none px-4 py-1 font-normal">
                      CONTATO
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                      Vamos <span className="text-amber-600">Conversar</span> Sobre Seu Projeto
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 max-w-lg">
                      Estamos prontos para transformar sua visão em realidade. Entre em contato para agendar uma consulta ou visite nosso studio.
                    </p>

                    <div className="space-y-6 mb-12">
                      <div className="flex items-start space-x-4">
                        <div className="bg-amber-600/10 p-3 rounded-lg mt-1">
                          <Phone className="w-5 h-5 text-amber-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">Telefone</div>
                          <div className="text-gray-600">+55 (61) 99998-8895</div>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-amber-600/10 p-3 rounded-lg mt-1">
                          <Mail className="w-5 h-5 text-amber-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">E-mail</div>
                          <div className="text-gray-600">contato@ruanbragaarquitetura.com.br</div>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-amber-600/10 p-3 rounded-lg mt-1">
                          <MapPin className="w-5 h-5 text-amber-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">Studio</div>
                          <div className="text-gray-600">SHIS QI 15, Bloco F, Sala 210<br />Lago Sul, Brasília - DF</div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-4">Siga nosso trabalho</h3>
                      <div className="flex space-x-4">
                        <Button
                          variant="outline"
                          size="icon"
                          className="border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-amber-600 rounded-none w-10 h-10"
                        >
                          <Instagram className="w-5 h-5" />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          className="border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-amber-600 rounded-none w-10 h-10"
                        >
                          <Linkedin className="w-5 h-5" />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          className="border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-amber-600 rounded-none w-10 h-10"
                        >
                          <Facebook className="w-5 h-5" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  <Card className="border border-gray-200 shadow-lg rounded-none">
                    <CardHeader className="border-b border-gray-200">
                      <CardTitle className="font-serif text-2xl text-gray-900">Solicite uma Consulta</CardTitle>
                      <CardDescription>Preencha o formulário e retornaremos em até 24h.</CardDescription>
                    </CardHeader>
                    <CardContent className="p-8 space-y-6">
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="name" className="text-gray-700">Nome</Label>
                          <Input
                            id="name"
                            placeholder="Seu nome completo"
                            className="rounded-none border-gray-300 focus:border-amber-600 focus-visible:ring-0"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone" className="text-gray-700">Telefone</Label>
                          <Input
                            id="phone"
                            placeholder="(61) 99998-8895"
                            className="rounded-none border-gray-300 focus:border-amber-600 focus-visible:ring-0"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-gray-700">E-mail</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="seu@email.com"
                          className="rounded-none border-gray-300 focus:border-amber-600 focus-visible:ring-0"
                        />
                      </div>
                      <div>
                        <Label htmlFor="project-type" className="text-gray-700">Tipo de Projeto</Label>
                        <select
                          id="project-type"
                          className="flex h-10 w-full border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white focus:border-amber-600 focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50 rounded-none"
                        >
                          <option value="">Selecione...</option>
                          <option value="residencial">Residencial</option>
                          <option value="comercial">Comercial</option>
                          <option value="reforma">Reforma</option>
                          <option value="design">Design de Interiores</option>
                          <option value="outro">Outro</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="message" className="text-gray-700">Mensagem</Label>
                        <Textarea
                          id="message"
                          placeholder="Conte-nos mais sobre seu projeto..."
                          rows={5}
                          className="rounded-none border-gray-300 focus:border-amber-600 focus-visible:ring-0"
                        />
                      </div>
                      <Button
                        onClick={() => handleWhatsAppContact("Olá! Gostaria de agendar uma consulta para discutir meu projeto arquitetônico.")}
                        className="w-full bg-amber-600 hover:bg-amber-700 text-white rounded-none py-4 shadow-md transition-all duration-300 hover:shadow-lg"
                      >
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Enviar Mensagem
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            {/* Footer Premium */}
            <footer className="bg-gray-900 text-white py-16">
              <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12">
                  <div>
                    <div className="flex items-center space-x-2 mb-6">
                      <Building2 className="h-8 w-8 text-amber-400" />
                      <span className="text-2xl font-serif font-bold">Ruan Braga</span>
                    </div>
                    <p className="text-gray-400 mb-6">
                      Arquitetura que transcende o comum, criando espaços excepcionais que inspiram e elevam a qualidade de vida.
                    </p>
                    <div className="flex space-x-4">
                      <Button variant="ghost" size="icon" className="text-gray-400 hover:text-amber-400 rounded-none">
                        <Instagram className="w-5 h-5" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-gray-400 hover:text-amber-400 rounded-none">
                        <Linkedin className="w-5 h-5" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-gray-400 hover:text-amber-400 rounded-none">
                        <Facebook className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-serif font-semibold text-lg mb-6">Serviços</h3>
                    <ul className="space-y-3 text-gray-400">
                      <li className="hover:text-amber-400 transition-colors cursor-pointer">Projetos Residenciais</li>
                      <li className="hover:text-amber-400 transition-colors cursor-pointer">Arquitetura Comercial</li>
                      <li className="hover:text-amber-400 transition-colors cursor-pointer">Design de Interiores</li>
                      <li className="hover:text-amber-400 transition-colors cursor-pointer">Reformas e Restauro</li>
                      <li className="hover:text-amber-400 transition-colors cursor-pointer">Consultoria Especializada</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-serif font-semibold text-lg mb-6">Links Rápidos</h3>
                    <ul className="space-y-3 text-gray-400">
                      <li>
                        <button
                          onClick={() => scrollToSection('home')}
                          className="hover:text-amber-400 transition-colors"
                        >
                          Início
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => scrollToSection('about')}
                          className="hover:text-amber-400 transition-colors"
                        >
                          O Studio
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => scrollToSection('portfolio')}
                          className="hover:text-amber-400 transition-colors"
                        >
                          Portfólio
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => scrollToSection('process')}
                          className="hover:text-amber-400 transition-colors"
                        >
                          Processo
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => scrollToSection('contact')}
                          className="hover:text-amber-400 transition-colors"
                        >
                          Contato
                        </button>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-serif font-semibold text-lg mb-6">Newsletter</h3>
                    <p className="text-gray-400 mb-4">
                      Assine nossa newsletter para receber novidades e inspirações arquitetônicas.
                    </p>
                    <div className="flex">
                      <Input
                        placeholder="Seu e-mail"
                        className="rounded-none border-gray-700 bg-gray-800 focus:border-amber-600 focus-visible:ring-0"
                      />
                      <Button
                        variant="outline"
                        className="border-gray-700 bg-gray-800 text-white hover:bg-amber-600 hover:border-amber-600 rounded-none ml-2"
                      >
                        Assinar
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                  <p className="text-gray-500 text-sm mb-4 md:mb-0">
                    &copy; {new Date().getFullYear()} Ruan Braga Arquitetura. Todos os direitos reservados.
                  </p>
                  <div className="flex space-x-6">
                    <button className="text-gray-500 hover:text-amber-400 text-sm transition-colors">
                      Termos de Uso
                    </button>
                    <button className="text-gray-500 hover:text-amber-400 text-sm transition-colors">
                      Política de Privacidade
                    </button>
                  </div>
                </div>
              </div>
            </footer>
          </>
        } />

        {/* Rota de detalhes do projeto */}
        <Route path="/project/:id" element={
          <div className="pt-24 pb-12 bg-white">
            {projects.map((project) => (
              <div key={project.id} className="container mx-auto px-6">
                <Button
                  onClick={() => navigate(-1)}
                  variant="ghost"
                  className="mb-8 text-amber-600 hover:text-amber-700"
                >
                  <ChevronLeft className="w-5 h-5 mr-2" />
                  Voltar para Portfólio
                </Button>

                <div className="mb-12">
                  <Badge className="mb-4 bg-amber-100 text-amber-800 border-amber-200 rounded-none px-4 py-1 font-normal">
                    {project.category}
                  </Badge>
                  <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
                    {project.title}
                  </h1>
                  <p className="text-xl text-gray-600 max-w-3xl">
                    {project.description}
                  </p>
                </div>

                {/* Carrossel de imagens */}
                <div className="mb-16">
                  <Carousel
                    showArrows={true}
                    showThumbs={false}
                    showStatus={false}
                    infiniteLoop={true}
                    autoPlay={true}
                    interval={5000}
                    renderArrowPrev={(onClickHandler, hasPrev, label) =>
                      hasPrev && (
                        <button
                          type="button"
                          onClick={onClickHandler}
                          title={label}
                          className="absolute left-4 top-1/2 z-10 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                        >
                          <ChevronLeft className="w-6 h-6" />
                        </button>
                      )
                    }
                    renderArrowNext={(onClickHandler, hasNext, label) =>
                      hasNext && (
                        <button
                          type="button"
                          onClick={onClickHandler}
                          title={label}
                          className="absolute right-4 top-1/2 z-10 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                        >
                          <ChevronRight className="w-6 h-6" />
                        </button>
                      )
                    }
                  >
                    {project.images.map((image, index) => (
                      <div key={index} className="h-[600px]">
                        <img
                          src={image}
                          alt={`${project.title} - Imagem ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </Carousel>
                </div>

                {/* Detalhes do projeto */}
                <div className="grid md:grid-cols-3 gap-12 mb-16">
                  <div className="md:col-span-2">
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                      Sobre o Projeto
                    </h2>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      Este projeto exemplar localizado no coração de {project.location.split(',')[0]} representa a
                      síntese perfeita entre design contemporâneo e funcionalidade prática. Cada elemento
                      foi meticulosamente planejado para criar um espaço que não apenas impressiona visualmente,
                      mas também atende às necessidades específicas de seus ocupantes.
                    </p>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      A abordagem holística do Ruan Braga garantiu que todos os aspectos - desde a orientação
                      solar até a seleção de materiais - fossem considerados para criar um ambiente harmonioso
                      e sustentável. O resultado é um espaço que transcende tendências temporais, oferecendo
                      conforto e beleza duradouros.
                    </p>

                    <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4">
                      Destaques do Projeto
                    </h3>
                    <ul className="grid grid-cols-2 gap-4 mb-8">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-1 h-1 bg-amber-600 rounded-full mt-2 mr-2"></span>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      onClick={toggleContactModal}
                      className="bg-amber-600 hover:bg-amber-700 text-white rounded-none px-8 py-4 shadow-md transition-all duration-300 hover:shadow-lg"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Quero um Projeto Similar
                    </Button>
                  </div>

                  <div>
                    <Card className="border border-gray-200 rounded-none shadow-sm">
                      <CardHeader className="border-b border-gray-200">
                        <CardTitle className="font-serif text-xl text-gray-900">
                          Especificações Técnicas
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="space-y-6">
                          <div>
                            <div className="text-sm text-gray-500 mb-1">Localização</div>
                            <div className="text-gray-900">{project.location}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-500 mb-1">Ano de Conclusão</div>
                            <div className="text-gray-900">{project.year}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-500 mb-1">Área do Terreno</div>
                            <div className="text-gray-900">{project.lotArea}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-500 mb-1">Área Construída</div>
                            <div className="text-gray-900">{project.builtArea}</div>
                          </div>
                        </div>

                        {project.furnitureBrands && (
                          <>
                            <div className="border-t border-gray-200 mt-6 pt-6">
                              <h4 className="font-serif font-semibold text-gray-900 mb-4">
                                Marcas Parceiras
                              </h4>
                              {project.furnitureBrands.map((brand, index) => (
                                <div key={index} className="flex items-center mb-4">
                                  <img
                                    src={brand.logo}
                                    alt={brand.name}
                                    className="w-12 h-12 object-contain mr-4"
                                  />
                                  <div>
                                    <div className="font-medium text-gray-900">{brand.name}</div>
                                    <div className="text-sm text-gray-600">{brand.description}</div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Projetos relacionados */}
                <div className="mb-16">
                  <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">
                    Projetos Relacionados
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects
                      .filter(p => p.id !== project.id)
                      .slice(0, 3)
                      .map((relatedProject, index) => (
                        <div
                          key={index}
                          className="group relative overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-xl"
                          onClick={() => navigate(`/project/${relatedProject.id}`)}
                        >
                          <div className="relative overflow-hidden">
                            <img
                              src={relatedProject.images[0]}
                              alt={relatedProject.title}
                              className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                          </div>
                          <div className="absolute bottom-0 left-0 p-6 w-full">
                            <h3 className="text-xl font-serif font-semibold text-white mb-1 group-hover:text-amber-300 transition-colors">
                              {relatedProject.title}
                            </h3>
                            <p className="text-gray-300 text-sm">{relatedProject.description}</p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        } />
      </Routes>

      {/* WhatsApp Floating Button */}
      <Button
        onClick={() => handleWhatsAppContact("Olá! Gostaria de saber mais sobre os serviços de arquitetura do Ruan Braga.")}
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white rounded-full w-14 h-14 shadow-xl z-40 flex items-center justify-center"
        size="icon"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>

      {/* Contact Modal Premium */}
      {isContactModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <Card className="w-full max-w-2xl rounded-none border border-gray-200 shadow-2xl">
            <CardHeader className="border-b border-gray-200">
              <div className="flex justify-between items-center">
                <CardTitle className="font-serif text-2xl text-gray-900">Como podemos ajudar?</CardTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleContactModal}
                  className="text-gray-500 hover:text-gray-900 rounded-none"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
              <CardDescription>Escolha o melhor canal para iniciar nossa conversa</CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <Button
                onClick={() => {
                  handleWhatsAppContact("Olá! Gostaria de solicitar um orçamento para meu projeto de arquitetura.")
                  toggleContactModal()
                }}
                className="w-full bg-green-600 hover:bg-green-700 text-white rounded-none py-6 justify-start shadow-md transition-all duration-300 hover:shadow-lg"
              >
                <MessageCircle className="w-5 h-5 mr-4" />
                <div className="text-left">
                  <div className="font-medium">WhatsApp</div>
                  <div className="text-sm font-normal opacity-90">Resposta rápida</div>
                </div>
              </Button>
              <Button
                onClick={() => {
                  window.location.href = "mailto:contato@ruanbragaarquitetura.com.br?subject=Consulta Arquitetônica"
                  toggleContactModal()
                }}
                className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-none py-6 justify-start shadow-md transition-all duration-300 hover:shadow-lg"
              >
                <Mail className="w-5 h-5 mr-4" />
                <div className="text-left">
                  <div className="font-medium">E-mail</div>
                  <div className="text-sm font-normal opacity-90">Para projetos detalhados</div>
                </div>
              </Button>
              <Button
                onClick={() => {
                  handleWhatsAppContact("Olá! Gostaria de agendar uma visita ao Escritório Ruan Braga Arquitetura.")
                  toggleContactModal()
                }}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white rounded-none py-6 justify-start shadow-md transition-all duration-300 hover:shadow-lg"
              >
                <MapPin className="w-5 h-5 mr-4" />
                <div className="text-left">
                  <div className="font-medium">Visite o Studio</div>
                  <div className="text-sm font-normal opacity-90">SHIS QI 15, Bloco F, Sala 210</div>
                </div>
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}

export default App