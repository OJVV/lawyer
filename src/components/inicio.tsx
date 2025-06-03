import React from "react";
import { Button, Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";
import fondo from '../assets/fondo.jpeg';


interface InicioProps {
  onContactClick: () => void;
}

export const Inicio: React.FC<InicioProps> = ({ onContactClick }) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-neutral-100">
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-neutral-800 mb-4">
              Asesoría Legal<br />Profesional y Confiable
            </h1>
            <p className="text-neutral-600 mb-6 text-lg">
              Soluciones legales personalizadas para proteger sus derechos e intereses con la experiencia y dedicación que usted merece.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                color="primary" 
                size="lg"
                href="https://wa.link/4z4mtj"
                onPress={onContactClick}
                endContent={<Icon icon="lucide:arrow-right" />}
              >
                Consulta
              </Button>
             
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative rounded-lg overflow-hidden shadow-lg aspect-[4/3]">
              <img 
                src={fondo} 
                alt="Adriana Cardoza - Abogada" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-neutral-900 bg-opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif text-center mb-12 text-neutral-800">
            ¿Por qué elegir mis servicios legales?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border border-neutral-200">
              <CardBody className="flex flex-col items-center text-center p-6">
                <div className="bg-neutral-100 p-4 rounded-full mb-4">
                  <Icon icon="lucide:scale" className="text-3xl text-neutral-700" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Experiencia</h3>
                <p className="text-neutral-600">
                Experiencia en casos exitosos y soluciones legales efectivas.
                </p>
              </CardBody>
            </Card>
            
            <Card className="border border-neutral-200">
              <CardBody className="flex flex-col items-center text-center p-6">
                <div className="bg-neutral-100 p-4 rounded-full mb-4">
                  <Icon icon="lucide:users" className="text-3xl text-neutral-700" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Atención Personalizada</h3>
                <p className="text-neutral-600">
                  Cada caso recibe atención individualizada y estrategias adaptadas a sus necesidades específicas.
                </p>
              </CardBody>
            </Card>
            
            <Card className="border border-neutral-200">
              <CardBody className="flex flex-col items-center text-center p-6">
                <div className="bg-neutral-100 p-4 rounded-full mb-4">
                  <Icon icon="lucide:shield" className="text-3xl text-neutral-700" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Compromiso</h3>
                <p className="text-neutral-600">
                  Dedicación total a la defensa de sus intereses con ética profesional y transparencia.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

    

      {/* CTA Section */}
      <section className="py-16 bg-neutral-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif mb-4">
            ¿Necesita asesoría legal profesional?
          </h2>
          <p className="mb-8 max-w-2xl mx-auto text-neutral-300">
            Contáctemonos hoy mismo para una consulta inicial sin compromiso y descubra cómo podemos ayudarle con su situación legal.
          </p>
          <Button 
            color="primary" 
            size="lg"
            onPress={onContactClick}
            href="https://wa.link/4z4mtj"
            endContent={<Icon icon="lucide:arrow-right" />}
          >
            Solicitar Consulta
          </Button>
        </div>
      </section>
    </div>
  );
};