import React from "react";
import { Card, CardBody, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
import adriImg from '../assets/adri.jpg';

export const SobreMi: React.FC = () => {
  return (
    <div>
      {/* Header Section */}
      <section className="bg-neutral-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-serif mb-4">Sobre Mí</h1>
          <p className="max-w-2xl mx-auto text-neutral-300">
            Conozca más sobre mi trayectoria profesional, formación académica y compromiso con la excelencia legal.
          </p>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
            <div className="md:w-1/3">
              <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={adriImg}
                alt="Adriana Cardoza - Abogada"
                className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl md:text-3xl font-serif mb-4 text-neutral-800">
                Abg. Adriana Cardoza
              </h2>
              <p className="text-neutral-600 mb-6">
                Soy una abogada con más de 10 años de experiencia en el ámbito legal, especializada en derecho civil y familiar. Mi pasión por la justicia y el compromiso con mis clientes me han permitido construir una carrera sólida basada en la confianza, la ética profesional y los resultados.
              </p>
              <p className="text-neutral-600 mb-6">
                Mi filosofía de trabajo se centra en entender profundamente las necesidades de cada cliente para ofrecer soluciones legales personalizadas y efectivas. Creo firmemente que cada caso es único y merece una atención individualizada y una estrategia específica.
              </p>
              <p className="text-neutral-600 mb-6">
                A lo largo de mi carrera, he representado a cientos de clientes en diversos procedimientos legales, logrando resultados favorables y construyendo relaciones duraderas basadas en la confianza y el respeto mutuo.
              </p>

              <div className="flex flex-wrap gap-4 mb-6">
                {/* Se mantienen solo Miembro del Colegio de Abogados y se añaden los nuevos puntos */}
                <div className="flex items-center">
                  <Icon icon="lucide:check-circle" className="text-green-600 mr-2" />
                  <span>Miembro del Colegio de Abogados</span>
                </div>
                <div className="flex items-center">
                  <Icon icon="lucide:check-circle" className="text-green-600 mr-2" />
                  <span>Pasante de la carrera de Lenguas-Español</span>
                </div>
                <div className="flex items-center">
                  <Icon icon="lucide:check-circle" className="text-green-600 mr-2" />
                  <span>Gestión de la Calidad</span>
                </div>
                <div className="flex items-center">
                  <Icon icon="lucide:check-circle" className="text-green-600 mr-2" />
                  <span>Legislación Laboral en Honduras</span>
                </div>
                <div className="flex items-center">
                  <Icon icon="lucide:check-circle" className="text-green-600 mr-2" />
                  <span>Criminalística</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h2 className="text-2xl font-serif mb-8 text-neutral-800 flex items-center">
                <Icon icon="lucide:book-open" className="mr-2" /> Formación Académica
              </h2>

              <div className="space-y-6">
                {/* Aquí se reemplaza toda la formación académica anterior con la nueva lista de diplomados */}
                <Card className="border border-neutral-200">
                  <CardBody>
                    <h3 className="text-lg font-semibold mb-1">Pasante de la carrera de Lenguas-Español</h3>
                   
                  </CardBody>
                </Card>
                <Card className="border border-neutral-200">
                  <CardBody>
                    <h3 className="text-lg font-semibold mb-1">Diplomado en Gestión de la Calidad</h3>
  
                  </CardBody>
                </Card>
                <Card className="border border-neutral-200">
                  <CardBody>
                    <h3 className="text-lg font-semibold mb-1">Diplomado en Legislación Laboral en Honduras</h3>
                 
                  </CardBody>
                </Card>
                <Card className="border border-neutral-200">
                  <CardBody>
                    <h3 className="text-lg font-semibold mb-1">Diplomado en Inglés para la Comunicación Internacional</h3>
                 
                  </CardBody>
                </Card>
                <Card className="border border-neutral-200">
                  <CardBody>
                    <h3 className="text-lg font-semibold mb-1">Diplomado sobre la Extradición y Extradiciones en Honduras</h3>
               
                  </CardBody>
                </Card>
                <Card className="border border-neutral-200">
                  <CardBody>
                    <h3 className="text-lg font-semibold mb-1">Diplomado en Derecho Notarial</h3>
               
                  </CardBody>
                </Card>
                <Card className="border border-neutral-200">
                  <CardBody>
                    <h3 className="text-lg font-semibold mb-1">Diplomado en Criminalística</h3>
                  </CardBody>
                </Card>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-2xl font-serif mb-8 text-neutral-800 flex items-center">
                <Icon icon="lucide:briefcase" className="mr-2" /> Experiencia Profesional
              </h2>

              <div className="space-y-6">
                <Card className="border border-neutral-200">
                  <CardBody>
                    <h3 className="text-lg font-semibold mb-1">Fundadora y Abogada Principal</h3>
                    <p className="text-neutral-500 mb-2">Abg. Cardoza</p>
                    <p className="text-sm text-neutral-600 mb-3">2015 - Presente</p>
                    <p className="text-neutral-600">
                     Profesional dedicada a brindar asesoría legal de calidad.
                    </p>
                  </CardBody>
                </Card>

                <Card className="border border-neutral-200">
                  <CardBody>
                    <h3 className="text-lg font-semibold mb-1">Asociada</h3>
                    <p className="text-neutral-500 mb-2">Martínez & Asociados</p>
                    <p className="text-sm text-neutral-600 mb-3">2012 - 2015</p>
                    <p className="text-neutral-600">
                      Responsable de casos de derecho civil y familiar, representando a clientes en procedimientos judiciales y negociaciones extrajudiciales.
                    </p>
                  </CardBody>
                </Card>

                <Card className="border border-neutral-200">
                  <CardBody>
                    <h3 className="text-lg font-semibold mb-1">Abogada</h3>
                    <p className="text-neutral-500 mb-2">Despacho Legal González</p>
                    <p className="text-sm text-neutral-600 mb-3">2009 - 2012</p>
                    <p className="text-neutral-600">
                      Asistencia en casos de derecho civil, investigación legal y preparación de documentos jurídicos.
                    </p>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif text-center mb-12 text-neutral-800">
            Mis Valores Profesionales
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border border-neutral-200">
              <CardBody className="flex flex-col items-center text-center p-6">
                <div className="bg-neutral-100 p-4 rounded-full mb-4">
                  <Icon icon="lucide:shield" className="text-3xl text-neutral-700" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Integridad</h3>
                <p className="text-neutral-600">
                  Actúo con honestidad y transparencia en cada caso, manteniendo los más altos estándares éticos en mi práctica legal.
                </p>
              </CardBody>
            </Card>

            <Card className="border border-neutral-200">
              <CardBody className="flex flex-col items-center text-center p-6">
                <div className="bg-neutral-100 p-4 rounded-full mb-4">
                  <Icon icon="lucide:heart" className="text-3xl text-neutral-700" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Empatía</h3>
                <p className="text-neutral-600">
                  Entiendo que cada cliente enfrenta situaciones difíciles y me comprometo a escuchar y comprender sus necesidades específicas.
                </p>
              </CardBody>
            </Card>

            <Card className="border border-neutral-200">
              <CardBody className="flex flex-col items-center text-center p-6">
                <div className="bg-neutral-100 p-4 rounded-full mb-4">
                  <Icon icon="lucide:target" className="text-3xl text-neutral-700" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Excelencia</h3>
                <p className="text-neutral-600">
                  Busco constantemente la excelencia en mi trabajo, manteniéndome actualizada y ofreciendo soluciones legales innovadoras y efectivas.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Publications & Recognitions */}
    
    </div>
  );
};