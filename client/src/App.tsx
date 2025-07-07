import React from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Store, 
  Smartphone, 
  Zap, 
  TrendingUp, 
  Shield, 
  Users,
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  MessageSquare
} from 'lucide-react';

export default function Landing() {
  const [location, navigate] = useLocation();
  
  // 🔧 DEBUG: Funções com console.log para debug
  const handleEntrar = () => {
    console.log('🚀 Botão ENTRAR clicado!');
    console.log('Tentando navegar para /dashboard');
    
    // Tenta várias formas de navegação
    try {
      navigate('/dashboard');
      console.log('✅ Navigate executado com sucesso');
    } catch (error) {
      console.error('❌ Erro no navigate:', error);
      
      // Fallback: redirect direto
      window.location.href = '/dashboard';
    }
  };

  const handleCriarSite = () => {
    console.log('🚀 Botão CRIAR SITE clicado!');
    console.log('Tentando navegar para /builder');
    
    try {
      navigate('/builder');
      console.log('✅ Navigate executado com sucesso');
    } catch (error) {
      console.error('❌ Erro no navigate:', error);
      
      // Fallback: redirect direto
      window.location.href = '/builder';
    }
  };

  const handleLogin = () => {
    console.log('🚀 Redirecionando para API de login');
    window.location.href = '/api/login';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* 🔧 DEBUG: Mostra localização atual */}
      <div className="fixed top-4 right-4 bg-black text-white px-4 py-2 rounded-lg z-50">
        <small>Rota atual: {location}</small>
      </div>

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-2">
                <Store className="text-white h-6 w-6" />
              </div>
              <h1 className="ml-3 text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                SiteBuilder Pro
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              {/* 🔧 TESTE 1: Botão com onClick */}
              <Button 
                variant="outline" 
                onClick={handleEntrar}
                className="hover:bg-blue-50 border-blue-200"
              >
                Entrar (onClick)
              </Button>
              
              {/* 🔧 TESTE 2: Botão com Link */}
              <Link href="/dashboard">
                <Button 
                  variant="outline"
                  className="hover:bg-blue-50 border-blue-200"
                >
                  Entrar (Link)
                </Button>
              </Link>
              
              {/* 🔧 TESTE 3: Botão com API Login */}
              <Button 
                onClick={handleLogin}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              >
                Login API
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-50 text-blue-600 border-blue-200">
              🚀 Novo: Templates de Delivery
            </Badge>
            
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
              Crie seu site de
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {" "}delivery{" "}
              </span>
              em minutos
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Templates profissionais, integração com WhatsApp e sistema de pedidos. 
              Tudo que você precisa para vender online de forma simples e eficiente.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* 🔧 TESTE 4: Botão CRIAR SITE com diferentes métodos */}
              <Button 
                size="lg" 
                onClick={handleCriarSite}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg px-8 py-6"
              >
                Criar Site Grátis (onClick)
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Link href="/builder">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg px-8 py-6"
                >
                  Criar Site Grátis (Link)
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => window.location.href = '/builder'}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-6"
              >
                Ver Demonstração (Direct)
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tudo que você precisa para vender online
            </h2>
            <p className="text-xl text-gray-600">
              Recursos profissionais sem complicação
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Templates Responsivos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Designs profissionais que se adaptam perfeitamente a qualquer dispositivo.
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Integração WhatsApp</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Receba pedidos diretamente no seu WhatsApp de forma automática.
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Configuração Rápida</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Seu site fica pronto em minutos. Sem códigos, sem complicação.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Pronto para começar?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Crie seu site profissional agora mesmo e comece a vender online hoje!
          </p>
          
          {/* 🔧 TESTE 5: Botão final com debug */}
          <Button 
            size="lg" 
            onClick={() => {
              console.log('🚀 Botão CTA clicado!');
              handleCriarSite();
            }}
            className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6"
          >
            Criar Meu Site Agora
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-2">
                <Store className="text-white h-6 w-6" />
              </div>
              <h3 className="ml-3 text-xl font-bold">SiteBuilder Pro</h3>
            </div>
            <p className="text-gray-400">
              © 2024 SiteBuilder Pro. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
