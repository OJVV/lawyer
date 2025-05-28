import React from "react";
import { Card, CardBody, CardHeader, Accordion, AccordionItem } from "@heroui/react";
import { Icon } from "@iconify/react";

export const Servicios: React.FC = () => {
  const servicios = [
    {
      id: "derecho-civil",
      title: "Derecho Civil",
      icon: "lucide:file-text",
      description: "Asesoría y representación en asuntos civiles, incluyendo contratos, obligaciones, responsabilidad civil y derechos reales.",
      items: [
        "Contratos civiles y mercantiles",
        "Arrendamientos",
        "Compraventa de bienes inmuebles",
        "Responsabilidad civil",
        "Reclamaciones por daños y perjuicios"
      ]
    },
    {
      id: "derecho-familiar",
      title: "Derecho Familiar",
      icon: "lucide:users",
      description: "Asistencia legal en todos los asuntos relacionados con el derecho de familia, desde divorcios hasta adopciones y custodia de menores.",
      items: [
        "Divorcios",
        "Pensiones alimenticias",
        "Custodia y régimen de visitas",
        "Adopciones",
        "Sucesiones y testamentos"
      ]
    },
    {
      id: "derecho-laboral",
      title: "Derecho Laboral",
      icon: "lucide:briefcase",
      description: "Representación tanto de empleadores como de trabajadores en conflictos laborales, despidos, indemnizaciones y negociaciones.",
      items: [
        "Despidos injustificados",
        "Indemnizaciones laborales",
        "Contratos de trabajo",
        "Negociación colectiva",
        "Seguridad social"
      ]
    },
    {
      id: "derecho-mercantil",
      title: "Derecho Mercantil",
      icon: "lucide:building",
      description: "Asesoramiento legal para empresas y emprendedores en constitución de sociedades, contratos mercantiles y propiedad intelectual.",
      items: [
        "Constitución de sociedades",
        "Contratos mercantiles",
        "Propiedad intelectual",
        "Fusiones y adquisiciones",
        "Asesoría empresarial"
      ]
    }
  ];

  const preguntas = [
    {
      pregunta: "¿Cuánto cuesta una consulta inicial?",
      respuesta: "La primera consulta es gratuita. Durante esta sesión, evaluaremos su caso y le proporcionaremos información sobre cómo podemos ayudarle y los costos asociados."
    },
    {
      pregunta: "¿Cuánto tiempo toma resolver un caso?",
      respuesta: "El tiempo varía dependiendo de la complejidad del caso. Algunos asuntos pueden resolverse en semanas, mientras que otros pueden tomar meses. Durante nuestra consulta inicial, le proporcionaremos un estimado basado en su situación específica."
    },
    {
      pregunta: "¿Trabajan con honorarios contingentes?",
      respuesta: "En ciertos tipos de casos, como reclamaciones por daños personales, podemos trabajar con honorarios contingentes. Esto significa que solo cobramos si ganamos su caso. Para otros tipos de casos, trabajamos con tarifas fijas o por hora."
    },
    {
      pregunta: "¿Puedo programar una consulta fuera del horario regular?",
      respuesta: "Entendemos que muchos clientes tienen horarios ocupados. Podemos hacer arreglos para consultas fuera del horario regular según sea necesario. Por favor, contáctenos para discutir sus necesidades específicas."
    },
    {
      pregunta: "¿Qué documentos debo llevar a mi primera consulta?",
      respuesta: "Es útil traer cualquier documento relacionado con su caso, como contratos, correspondencia, informes médicos, o cualquier otro documento relevante. Esto nos ayudará a entender mejor su situación y proporcionarle el mejor asesoramiento posible."
    }
  ];

  return (
    <div>
      {/* Header Section */}
      <section className="bg-neutral-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-serif mb-4">Nuestros Servicios Legales</h1>
          <p className="max-w-2xl mx-auto text-neutral-300">
            Ofrecemos una amplia gama de servicios legales para satisfacer sus necesidades. Nuestro compromiso es brindarle la mejor asesoría legal con un enfoque personalizado.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicios.map((servicio) => (
              <Card key={servicio.id} className="border border-neutral-200">
                <CardHeader className="flex gap-3">
                  <div className="bg-neutral-100 p-3 rounded-full">
                    <Icon icon={servicio.icon} className="text-2xl text-neutral-700" />
                  </div>
                  <div className="flex flex-col">
                    <h2 className="text-xl font-semibold">{servicio.title}</h2>
                  </div>
                </CardHeader>
                <CardBody>
                  <p className="text-neutral-600 mb-4">{servicio.description}</p>
                  <ul className="space-y-2">
                    {servicio.items.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <Icon icon="lucide:check" className="text-green-600 mt-1 mr-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif text-center mb-12 text-neutral-800">
            Nuestro Proceso
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {[
                {
                  step: 1,
                  title: "Consulta Inicial",
                  description: "Evaluamos su caso y discutimos las posibles estrategias legales."
                },
                {
                  step: 2,
                  title: "Análisis y Estrategia",
                  description: "Desarrollamos un plan de acción personalizado para su situación específica."
                },
                {
                  step: 3,
                  title: "Representación Legal",
                  description: "Implementamos la estrategia y le representamos en todos los procedimientos necesarios."
                },
                {
                  step: 4,
                  title: "Resolución",
                  description: "Trabajamos para lograr la mejor resolución posible para su caso."
                }
              ].map((item, index, array) => (
                <div key={item.step} className="flex mb-8 last:mb-0">
                  <div className="flex flex-col items-center mr-4">
                    <div className="bg-neutral-800 text-white rounded-full w-10 h-10 flex items-center justify-center font-semibold">
                      {item.step}
                    </div>
                    {index < array.length - 1 && (
                      <div className="h-full w-0.5 bg-neutral-300 my-2"></div>
                    )}
                  </div>
                  <div className="pt-1">
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-neutral-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif text-center mb-12 text-neutral-800">
            Preguntas Frecuentes
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <Accordion variant="bordered">
              {preguntas.map((item, index) => (
                <AccordionItem key={index} title={item.pregunta}>
                  <p className="text-neutral-600">{item.respuesta}</p>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
};