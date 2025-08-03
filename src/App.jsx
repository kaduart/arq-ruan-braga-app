import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Label } from '@/components/ui/label.jsx'
import { 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  Award, 
  Users, 
  Calendar,
  ArrowRight,
  Menu,
  X,
  MessageCircle,
  Instagram,
  Linkedin,
  Facebook
} from 'lucide-react'
import './App.css'

// Importando as imagens
import brasilia1 from './assets/brasilia/brasilia1.webp'
import brasilia2 from './assets/brasilia/brasilia2.jpg'
import brasilia3 from './assets/brasilia/brasilia3.jpg'
import lagoSul1 from './assets/lago-sul/lago-sul1.jpg'
import lagoSul2 from './assets/lago-sul/lago-sul2.jpg'
import lagoSul3 from './assets/lago-sul/lago-sul3.jpg'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleContactModal = () => setIsContactModalOpen(!isContactModalOpen)

  const handleWhatsAppContact = (message) => {
    const phoneNumber = "5562999999999" // Número do WhatsApp
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank')
  }

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-gold" />
            <span className="text-2xl font-playfair font-bold text-navy">Arquitetura BSB</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-charcoal hover:text-gold transition-colors">Início</button>
            <button onClick={() => scrollToSection('about')} className="text-charcoal hover:text-gold transition-colors">Sobre</button>
            <button onClick={() => scrollToSection('portfolio')} className="text-charcoal hover:text-gold transition-colors">Portfólio</button>
            <button onClick={() => scrollToSection('services')} className="text-charcoal hover:text-gold transition-colors">Serviços</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-charcoal hover:text-gold transition-colors">Depoimentos</button>
            <button onClick={() => scrollToSection('contact')} className="text-charcoal hover:text-gold transition-colors">Contato</button>
          </nav>

          <Button onClick={toggleContactModal} className="hidden md:flex bg-gold hover:bg-gold/90 text-white">
            <MessageCircle className="w-4 h-4 mr-2" />
            Falar no WhatsApp
          </Button>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="flex flex-col space-y-4 p-4">
              <button onClick={() => scrollToSection('home')} className="text-left text-charcoal hover:text-gold transition-colors">Início</button>
              <button onClick={() => scrollToSection('about')} className="text-left text-charcoal hover:text-gold transition-colors">Sobre</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-left text-charcoal hover:text-gold transition-colors">Portfólio</button>
              <button onClick={() => scrollToSection('services')} className="text-left text-charcoal hover:text-gold transition-colors">Serviços</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-left text-charcoal hover:text-gold transition-colors">Depoimentos</button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-charcoal hover:text-gold transition-colors">Contato</button>
              <Button onClick={toggleContactModal} className="bg-gold hover:bg-gold/90 text-white w-full">
                <MessageCircle className="w-4 h-4 mr-2" />
                Falar no WhatsApp
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${brasilia1})` }}
        />
        <div className="absolute inset-0 hero-overlay" />
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <Badge className="mb-6 bg-gold/20 text-gold border-gold">Arquitetura de Excelência</Badge>
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 text-shadow animate-fade-in">
            Transformando
            <span className="text-gold block">Sonhos em Realidade</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in">
            Projetos arquitetônicos exclusivos e inovadores em Brasília, 
            onde cada detalhe reflete sofisticação e funcionalidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button 
              onClick={() => scrollToSection('portfolio')} 
              size="lg" 
              className="bg-gold hover:bg-gold/90 text-white px-8 py-3"
            >
              Ver Portfólio
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              onClick={toggleContactModal} 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-navy px-8 py-3"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <Badge className="mb-4 bg-gold/10 text-gold border-gold">Sobre Nós</Badge>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy mb-6">
                Excelência em Arquitetura desde 2010
              </h2>
              <p className="text-lg text-charcoal mb-6 leading-relaxed">
                Com mais de uma década de experiência em projetos residenciais e comerciais de alto padrão, 
                nossa equipe combina criatividade, inovação e técnica para criar espaços únicos que 
                refletem a personalidade e necessidades de cada cliente.
              </p>
              <p className="text-lg text-charcoal mb-8 leading-relaxed">
                Especializados em arquitetura contemporânea e sustentável, já desenvolvemos mais de 200 
                projetos em Brasília e região, sempre priorizando a qualidade, funcionalidade e beleza.
              </p>
              
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">200+</div>
                  <div className="text-sm text-charcoal">Projetos Realizados</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">15+</div>
                  <div className="text-sm text-charcoal">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">98%</div>
                  <div className="text-sm text-charcoal">Clientes Satisfeitos</div>
                </div>
              </div>

              <Button onClick={toggleContactModal} className="bg-navy hover:bg-navy/90 text-white">
                <Calendar className="w-4 h-4 mr-2" />
                Agendar Consulta
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src={brasilia2} 
                alt="Arquitetura de Brasília" 
                className="rounded-lg shadow-luxury w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
                <Award className="w-8 h-8 text-gold mb-2" />
                <div className="text-sm font-semibold text-navy">Prêmio de Excelência</div>
                <div className="text-xs text-charcoal">Arquitetura 2023</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gold/10 text-gold border-gold">Portfólio</Badge>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy mb-6">
              Projetos que Inspiram
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto">
              Conheça alguns dos nossos projetos mais emblemáticos, onde cada detalhe 
              foi pensado para criar espaços únicos e funcionais.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: lagoSul1,
                title: "Residência Lago Sul",
                description: "Casa moderna com 500m² e vista para o lago",
                category: "Residencial"
              },
              {
                image: lagoSul2,
                title: "Villa Contemporânea",
                description: "Projeto sustentável com design inovador",
                category: "Residencial"
              },
              {
                image: lagoSul3,
                title: "Mansão de Luxo",
                description: "Arquitetura de alto padrão com 800m²",
                category: "Residencial"
              },
              {
                image: brasilia3,
                title: "Edifício Comercial",
                description: "Complexo empresarial no centro de Brasília",
                category: "Comercial"
              },
              {
                image: brasilia2,
                title: "Centro Cultural",
                description: "Espaço cultural com arquitetura icônica",
                category: "Institucional"
              },
              {
                image: brasilia1,
                title: "Condomínio Premium",
                description: "Desenvolvimento residencial de luxo",
                category: "Residencial"
              }
            ].map((project, index) => (
              <Card key={index} className="group hover-lift cursor-pointer overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gold text-white">{project.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-playfair font-semibold text-navy mb-2">{project.title}</h3>
                  <p className="text-charcoal mb-4">{project.description}</p>
                  <Button variant="ghost" className="text-gold hover:text-gold/80 p-0">
                    Ver Detalhes
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gold/20 text-gold border-gold">Serviços</Badge>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Soluções Completas em Arquitetura
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Oferecemos um portfólio completo de serviços arquitetônicos, desde a concepção 
              até a execução do projeto dos seus sonhos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: "Projetos Residenciais",
                description: "Casas, apartamentos e condomínios personalizados para seu estilo de vida."
              },
              {
                icon: Award,
                title: "Arquitetura Comercial",
                description: "Escritórios, lojas e espaços comerciais que potencializam seu negócio."
              },
              {
                icon: Users,
                title: "Consultoria Especializada",
                description: "Orientação técnica e acompanhamento em todas as fases do projeto."
              },
              {
                icon: MapPin,
                title: "Planejamento Urbano",
                description: "Desenvolvimento de espaços urbanos sustentáveis e funcionais."
              },
              {
                icon: Star,
                title: "Design de Interiores",
                description: "Ambientes internos que combinam beleza, conforto e funcionalidade."
              },
              {
                icon: Calendar,
                title: "Gestão de Obras",
                description: "Acompanhamento completo da execução com qualidade garantida."
              }
            ].map((service, index) => (
              <Card key={index} className="bg-white/10 border-white/20 text-white hover-lift">
                <CardContent className="p-6 text-center">
                  <service.icon className="w-12 h-12 text-gold mx-auto mb-4" />
                  <h3 className="text-xl font-playfair font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gold/10 text-gold border-gold">Depoimentos</Badge>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy mb-6">
              O que nossos clientes dizem
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Silva",
                role: "Proprietária - Lago Sul",
                content: "Superou todas as nossas expectativas! O projeto da nossa casa ficou simplesmente perfeito.",
                rating: 5
              },
              {
                name: "João Santos",
                role: "Empresário - Asa Norte",
                content: "Profissionalismo excepcional. Entregaram o projeto comercial no prazo e com qualidade impecável.",
                rating: 5
              },
              {
                name: "Ana Costa",
                role: "Arquiteta - Asa Sul",
                content: "Parceria incrível! A expertise técnica e criatividade resultaram em um projeto único.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-gold fill-current" />
                    ))}
                  </div>
                  <p className="text-charcoal mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-navy">{testimonial.name}</div>
                    <div className="text-sm text-charcoal">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Badge className="mb-4 bg-gold/10 text-gold border-gold">Contato</Badge>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy mb-6">
                Vamos criar algo incrível juntos
              </h2>
              <p className="text-lg text-charcoal mb-8">
                Entre em contato conosco e descubra como podemos transformar 
                suas ideias em realidade através da arquitetura.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gold/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <div className="font-semibold text-navy">Telefone</div>
                    <div className="text-charcoal">(61) 99999-9999</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-gold/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <div className="font-semibold text-navy">E-mail</div>
                    <div className="text-charcoal">contato@arquiteturabsb.com.br</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-gold/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <div className="font-semibold text-navy">Endereço</div>
                    <div className="text-charcoal">SCS Quadra 02, Bloco C, Sala 1001<br />Brasília - DF</div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-navy mb-4">Siga-nos nas redes sociais</h3>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" className="border-gold text-gold hover:bg-gold hover:text-white">
                    <Instagram className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="border-gold text-gold hover:bg-gold hover:text-white">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="border-gold text-gold hover:bg-gold hover:text-white">
                    <Facebook className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            <Card className="shadow-luxury">
              <CardHeader>
                <CardTitle className="text-navy font-playfair">Solicite seu orçamento</CardTitle>
                <CardDescription>Preencha o formulário e entraremos em contato em breve.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nome</Label>
                    <Input id="name" placeholder="Seu nome completo" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefone</Label>
                    <Input id="phone" placeholder="(61) 99999-9999" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" type="email" placeholder="seu@email.com" />
                </div>
                <div>
                  <Label htmlFor="project">Tipo de Projeto</Label>
                  <Input id="project" placeholder="Ex: Casa residencial, Escritório comercial..." />
                </div>
                <div>
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea id="message" placeholder="Conte-nos mais sobre seu projeto..." rows={4} />
                </div>
                <Button 
                  onClick={() => handleWhatsAppContact("Olá! Gostaria de solicitar um orçamento para meu projeto de arquitetura.")}
                  className="w-full bg-gold hover:bg-gold/90 text-white"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Enviar via WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Building2 className="h-8 w-8 text-gold" />
                <span className="text-2xl font-playfair font-bold">Arquitetura BSB</span>
              </div>
              <p className="text-gray-400 mb-4">
                Transformando sonhos em realidade através da arquitetura de excelência.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Projetos Residenciais</li>
                <li>Arquitetura Comercial</li>
                <li>Design de Interiores</li>
                <li>Consultoria</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('about')}>Sobre</button></li>
                <li><button onClick={() => scrollToSection('portfolio')}>Portfólio</button></li>
                <li><button onClick={() => scrollToSection('services')}>Serviços</button></li>
                <li><button onClick={() => scrollToSection('contact')}>Contato</button></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contato</h3>
              <div className="space-y-2 text-gray-400">
                <div>(61) 99999-9999</div>
                <div>contato@arquiteturabsb.com.br</div>
                <div>SCS Quadra 02, Bloco C<br />Brasília - DF</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Arquitetura BSB. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <Button
        onClick={() => handleWhatsAppContact("Olá! Gostaria de saber mais sobre os serviços de arquitetura.")}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-lg z-40"
        size="icon"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-navy font-playfair">Falar no WhatsApp</CardTitle>
                <Button variant="ghost" size="icon" onClick={toggleContactModal}>
                  <X className="w-4 h-4" />
                </Button>
              </div>
              <CardDescription>Escolha uma opção para iniciar a conversa</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button 
                onClick={() => {
                  handleWhatsAppContact("Olá! Gostaria de solicitar um orçamento para meu projeto de arquitetura.")
                  toggleContactModal()
                }}
                className="w-full bg-green-500 hover:bg-green-600 text-white justify-start"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Solicitar Orçamento
              </Button>
              <Button 
                onClick={() => {
                  handleWhatsAppContact("Olá! Gostaria de agendar uma consulta para discutir meu projeto.")
                  toggleContactModal()
                }}
                className="w-full bg-green-500 hover:bg-green-600 text-white justify-start"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Agendar Consulta
              </Button>
              <Button 
                onClick={() => {
                  handleWhatsAppContact("Olá! Gostaria de saber mais sobre os serviços de arquitetura.")
                  toggleContactModal()
                }}
                className="w-full bg-green-500 hover:bg-green-600 text-white justify-start"
              >
                <Building2 className="w-4 h-4 mr-2" />
                Informações Gerais
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}

export default App

