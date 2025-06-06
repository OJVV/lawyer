import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Card, CardBody, Avatar, Divider, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@heroui/react";
import { Icon } from "@iconify/react";
import { Inicio } from "./components/inicio";
import { Servicios } from "./components/servicios";
import { SobreMi } from "./components/sobre-mi";
import { Contacto } from "./components/contacto";

export default function App() {
  const [activeSection, setActiveSection] = React.useState("inicio");
  // 1. Añade un estado para controlar si el menú está abierto
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleNavigation = (section: string) => {
    setActiveSection(section);
    window.history.pushState({}, "", `#${section}`);
    // 3. Cierra el menú después de la navegación
    setIsMenuOpen(false);
  };

  React.useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setActiveSection(hash);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50">
      <Navbar 
        className="bg-white border-b border-neutral-200" 
        maxWidth="xl"
        // 2. Controla el estado de apertura/cierre del menú
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen} // Esto actualiza isMenuOpen cuando el usuario usa el toggle
      >
        <NavbarMenuToggle className="sm:hidden" aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
        <NavbarBrand>
          <p className="font-serif text-xl font-semibold text-neutral-800">
            Adriana Cardoza
          </p>
          <p className="text-xs text-neutral-500 ml-2 hidden sm:block">Abogada</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem isActive={activeSection === "inicio"}>
            <Link 
              color={activeSection === "inicio" ? "primary" : "foreground"} 
              href="#inicio"
              onClick={() => handleNavigation("inicio")}
            >
              Inicio
            </Link>
          </NavbarItem>
          <NavbarItem isActive={activeSection === "servicios"}>
            <Link 
              color={activeSection === "servicios" ? "primary" : "foreground"} 
              href="#servicios"
              onClick={() => handleNavigation("servicios")}
            >
              Servicios
            </Link>
          </NavbarItem>
          <NavbarItem isActive={activeSection === "sobre-mi"}>
            <Link 
              color={activeSection === "sobre-mi" ? "primary" : "foreground"} 
              href="#sobre-mi"
              onClick={() => handleNavigation("sobre-mi")}
            >
              Sobre Mí
            </Link>
          </NavbarItem>
          <NavbarItem isActive={activeSection === "contacto"}>
            <Link 
              color={activeSection === "contacto" ? "primary" : "foreground"} 
              href="#contacto"
              onClick={() => handleNavigation("contacto")}
            >
              Contacto
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button 
              as={Link} 
              color="primary" 
              variant="flat" 
              href="https://wa.link/4z4mtj"
              onClick={() => {
                handleNavigation("contacto");
                setIsMenuOpen(false); // Asegúrate de cerrar el menú si se abre desde el botón de consulta
              }}
              startContent={<Icon icon="lucide:phone" />}
            >
              Consulta
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          <NavbarMenuItem>
            <Link 
              color={activeSection === "inicio" ? "primary" : "foreground"} 
              href="#inicio"
              onClick={() => handleNavigation("inicio")}
              className="w-full"
              size="lg"
            >
              Inicio
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link 
              color={activeSection === "servicios" ? "primary" : "foreground"} 
              href="#servicios"
              onClick={() => handleNavigation("servicios")}
              className="w-full"
              size="lg"
            >
              Servicios
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link 
              color={activeSection === "sobre-mi" ? "primary" : "foreground"} 
              href="#sobre-mi"
              onClick={() => handleNavigation("sobre-mi")}
              className="w-full"
              size="lg"
            >
              Sobre Mí
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link 
              color={activeSection === "contacto" ? "primary" : "foreground"} 
              href="#contacto"
              onClick={() => handleNavigation("contacto")}
              className="w-full"
              size="lg"
            >
              Contacto
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>

      <main className="flex-grow">
        {activeSection === "inicio" && <Inicio onContactClick={() => handleNavigation("contacto")} />}
        {activeSection === "servicios" && <Servicios />}
        {activeSection === "sobre-mi" && <SobreMi />}
        {activeSection === "contacto" && <Contacto />}
      </main>

      <footer className="bg-neutral-800 text-neutral-300 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-serif mb-4 text-white">Adriana Cardoza</h3>
              <p className="text-sm mb-2">Asesora jurídica con perspectiva innovadora.</p>
            </div>
            <div>
              <h3 className="text-lg font-serif mb-4 text-white">Contacto</h3>
              <p className="text-sm flex items-center mb-2">
                <Icon icon="lucide:map-pin" className="mr-2" /> Av. Principal Santa Rosa de Copán
              </p>
              <p className="text-sm flex items-center mb-2">
                <Icon icon="lucide:phone" className="mr-2" /> +504 9778-2107 
              </p>
              <p className="text-sm flex items-center">
                <Icon icon="lucide:mail" className="mr-2" /> adrianagisselcardoza@gmail.com
              </p>
            </div>
            <div>
              <h3 className="text-lg font-serif mb-4 text-white">Horario</h3>
              <p className="text-sm mb-2">Lunes a Viernes: 8:00 - 12:00pm, 1:00 - 4:00pm</p>
              <div className="flex mt-4 space-x-3">
                <Link href="#" aria-label="Facebook">
                  <Icon icon="lucide:facebook" className="text-xl" />
                </Link>
                <Link href="#" aria-label="Instagram">
                  <Icon icon="lucide:instagram" className="text-xl" />
                </Link>
                <Link href="#" aria-label="LinkedIn">
                  <Icon icon="lucide:linkedin" className="text-xl" />
                </Link>
              </div>
            </div>
          </div>
          <Divider className="my-6 bg-neutral-700" />
          <p className="text-center text-xs">
            © {new Date().getFullYear()} Adriana Cardoza. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}