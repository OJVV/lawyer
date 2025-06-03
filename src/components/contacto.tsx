import React from "react";
import { Input, Textarea, Button, Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";

export const Contacto: React.FC = () => {
  return (
    <div>
      {/* Header Section */}
      <section className="bg-neutral-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-serif mb-4">Contacto</h1>
          <p className="max-w-2xl mx-auto text-neutral-300">
            Estoy aquí para ayudarle con sus necesidades legales. Contácteme hoy mismo para programar una consulta.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-serif mb-8 text-neutral-800 text-center">Información de Contacto</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border border-neutral-200">
                <CardBody className="flex items-start p-4">
                  <div className="bg-neutral-100 p-3 rounded-full mr-4">
                    <Icon icon="lucide:map-pin" className="text-xl text-neutral-700" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Dirección</h3>
                    <p className="text-neutral-600">Av. Principal</p>
                    <p className="text-neutral-600">Santa Rosa de Copán</p>
                  </div>
                </CardBody>
              </Card>
              
              <Card className="border border-neutral-200">
                <CardBody className="flex items-start p-4">
                  <div className="bg-neutral-100 p-3 rounded-full mr-4">
                    <Icon icon="lucide:phone" className="text-xl text-neutral-700" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Teléfono</h3>
                    <p className="text-neutral-600">+504 9778-2107 </p>
                    <p className="text-neutral-600"></p>
                  </div>
                </CardBody>
              </Card>
              
              <Card className="border border-neutral-200">
                <CardBody className="flex items-start p-4">
                  <div className="bg-neutral-100 p-3 rounded-full mr-4">
                    <Icon icon="lucide:mail" className="text-xl text-neutral-700" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-neutral-600">adrianagisselcardoza@gmail.com </p>
                   
                  </div>
                </CardBody>
              </Card>
              
              <Card className="border border-neutral-200">
                <CardBody className="flex items-start p-4">
                  <div className="bg-neutral-100 p-3 rounded-full mr-4">
                    <Icon icon="lucide:clock" className="text-xl text-neutral-700" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Horario de Atención</h3>
                    <p className="text-neutral-600">Lunes a Viernes: 8:00 - 12:00 pm. 1:00PM A 4:00PM</p>
                  </div>
                </CardBody>
              </Card>
            </div>
            
            <div className="mt-12 text-center">
              <h3 className="text-xl font-medium mb-6">Sígueme en Redes Sociales</h3>
              <div className="flex justify-center space-x-6">
                <a href="#" className="bg-neutral-100 p-4 rounded-full hover:bg-neutral-200 transition-colors">
                  <Icon icon="lucide:facebook" className="text-2xl text-neutral-700" />
                </a>
                <a href="#" className="bg-neutral-100 p-4 rounded-full hover:bg-neutral-200 transition-colors">
                  <Icon icon="lucide:instagram" className="text-2xl text-neutral-700" />
                </a>
                <a href="#" className="bg-neutral-100 p-4 rounded-full hover:bg-neutral-200 transition-colors">
                  <Icon icon="lucide:linkedin" className="text-2xl text-neutral-700" />
                </a>
                <a href="#" className="bg-neutral-100 p-4 rounded-full hover:bg-neutral-200 transition-colors">
                  <Icon icon="lucide:twitter" className="text-2xl text-neutral-700" />
                </a>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Button 
                color="primary" 
                size="lg"
                as="a"
                href="https://wa.link/4z4mtj"
                startContent={<Icon icon="lucide:phone" />}
              >
                Llamar Ahora
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};