const About = () => {
    return (
      <section id="about" className="flex flex-col items-center px-4 py-10">
        <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-5xl gap-6">
          <img
            src="/static/images/Head_Vegeta.png"
            alt="logo"
            className="h-60 md:h-[600px] w-auto"
          />
          <div className="text-white text-lg md:text-3xl gap-4 flex flex-col">
            <p className="text-[--primary-color1] font-bold">
              ¡Escucha bien!
            </p>
            <p>
              Hoy no es un día cualquiera. Hoy celebramos el nacimiento de un guerrero digno de respeto.
            </p>
            <p>
              <span className="text-[--secondary-color1] font-bold">¡Feliz cumpleaños, Luis!</span> Como el príncipe de todos los Saiyajin, es mi deber recordarte que un verdadero guerrero no teme al paso del tiempo, porque con cada año que pasa, se vuelve más fuerte. Así que no te atrevas a quedarte atrás, o tendré que enseñarte el poder de un verdadero Saiyajin.
            </p>
            <p>
              ¡Disfruta tu día, pero recuerda mantener tu <span className="text-[--secondary-color1] font-bold">espíritu combativo</span> y tu <span className="text-[--secondary-color1] font-bold">ki</span> en alto! 🌌💥
            </p>
            <p>
              ¡Ahora, ve y demuestra que eres más que un simple terrícola!
            </p>
          </div>
        </div>
      </section>

    );
  };
  
  export default About;