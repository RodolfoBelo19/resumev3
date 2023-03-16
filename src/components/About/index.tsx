export const About = () => {
  return (
    <div className="mx-auto max-w-7xl md:py-12 py-5 px-2 sm:px-6 lg:px-8">
      <div className="bg-zinc-900 bg-opacity-70 p-5 rounded-md md:flex gap-20">
        <div className="md:w-1/2 w-full">
          <h1 className="text-2xl">Sobre</h1>
          <p className="mt-5">
            Experiência e interesse em stacks baseadas em JavaScript, PHP e
            OutSystems. Teve a experiência de trabalhar com frameworks, tais
            como Laravel, Angular, React e Vue.js. Tem facilidade em trabalhar
            em equipe e é movido por novos desafios. Um profissional disposto a
            aprender novas tecnologias, além de prezar pela evolução do time.
          </p>
        </div>
        <div className="md:w-1/2 w-full mt-12 md:mt-0">
          <h1 className="text-2xl">Informações</h1>
          <div className="mt-5">
            <div className="flex gap-2 my-2">
              <strong>
                <span>Idade:</span>
              </strong>
              <span>27</span>
            </div>
            <div className="flex gap-2 my-2">
              <strong>
                <span>Email:</span>
              </strong>
              <span>rodolfo.silva.belo@gmail.com</span>
            </div>
            <div className="flex gap-2 my-2">
              <strong>
                <span>Telefone:</span>
              </strong>
              <span>21 99792-9884</span>
            </div>
            <div className="flex gap-2 my-2">
              <strong>
                <span>Localização:</span>
              </strong>
              <span>Rio de Janeiro, Brasil</span>
            </div>
            <div className="flex gap-2 my-2">
              <strong>
                <span>Linguagem:</span>
              </strong>
              <span>Português (Nativo), English (Mid level)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
