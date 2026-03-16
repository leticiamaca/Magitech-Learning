import React from "react";
import fotoMenina from "../assets/teste.png";
import logo from "../assets/LogoBranco.svg";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

const Banner = () => {
  //Navegação do Menu
  const navigate = useNavigate();

  //Centralizando os Links <li> em uma array para evitar repetição no menu, ele renderiza todos os objetos pelo map, então eu só preciso adicionar por aqui
  const navLinks = [
    { label: "Quem somos", id: "quem-somos" },
    { label: "Cursos", id: "cursos" },
    { label: "Sobre", id: "plataforma" },
  ];

  //UseState para renderizar o menu aberto ou fechado (icon)
  //está em useState(false) pois o icone deve começar fechado
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //Função responsável pela navegação entre os links: sobre, cursos etc
  //o e representa o evendo e o id, id da section para onde ele vai navegae
  const linkNavigation = (e, id) => {
    //cancelando comportamentos padroes e prevenindo bugs
    // E também é usado para controlar a animação, nesse caso como estou usando smooth com o preventDefault eu posso controlar isso
    e.preventDefault();

    //pegando o id para a navegação
    const idNavegacao = document.getElementById(id);

    //Fazendo o scrool suave quando acessar o link, técnicas de UI
    //Se o id de navegação existir, seta o scroll
    if (idNavegacao) {
      //Aqui a página rola suavemente até a seção
      idNavegacao.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);

    //Fluxo dessa função:

    // usuário abre menu

    // clica em uma seção

    // página rola

    // menu fecha automaticamente setIsMenuOpen(false)
  };

  return (
    <section className="w-full h-full overflow-hidden bg-linear-to-br from-[#4de0c525] to-black">
      {/* Navbar responsiva com efeito glass */}
      <div className="w-full backdrop-blur-md bg-white/10">
        <nav className="h-14 flex items-center justify-around px-4 sm:px-6 md:px-8  text-white relative font-bold">
          {/* div com o icone de login e o texto login */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="w-8 h-8 md:w-12 md:h-12" />
            <Link
              to="/auth"
              className="text-xs font-semibold tracking-wider opacity-90 hover:opacity-100 hidden sm:block"
            >
              LOGIN
            </Link>
          </div>

          {/* Menu no desktop */}
          <ul className="hidden md:flex items-center gap-10 lg:gap-8">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className="opacity-80 hover:opacity-100 text-xs uppercase"
              >
                <a
                  href={`#${link.id}`}
                  onClick={(e) => linkNavigation(e, link.id)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Menu mobile */}

          {/* Menu mobile button */}
          <button
            className="md:hidden flex flex-col gap-1 p-2"
            //função de abrir e fechar, toda a vez que clicar ele vai setar o modo diferente do estado atual,s e estiver fechado abre, se estiver aberto fecha (!isMenuOpen)
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span
              className={`w-5 h-0.5 bg-white transition-transform ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`w-5 h-0.5 bg-white transition-opacity ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-5 h-0.5 bg-white transition-transform ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>

          {/* Menu mobile estilo e navegacao */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 backdrop-blur-md bg-white/10 rounded-xl p-4 md:hidden">
              <ul className="flex flex-col gap-4 text-sm">
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className="opacity-80 hover:opacity-100 text-xs uppercase"
                  >
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => linkNavigation(e, link.id)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </div>

      {/* Banner  */}
      <div className="flex flex-col lg:flex-row items-center justify-around md:p-35 p-25">
        <h1 className="text-white text-2xl lg:text-7xl md:text-5xl uppercase leading-tight text-center md:text-left mb-15">
          Estude mais em{" "}
          <span className="font-bold text-teal-400">menos tempo!</span>
        </h1>

        {/* Responsividade da foto */}
        <img
          src={fotoMenina}
          alt="Estudante usando óculos VR"
          className="w-[80%] md:max-w-md lg:max-w-full h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default Banner;
