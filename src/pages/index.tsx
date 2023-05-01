import HomePage from "@/presentation/components/HomePage/Home";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Rodolfo Belo"
        description="Olá, Seja bem vindo! Este é meu currículo profissional, caso tenha interesse em saber mais sobre mim, por favor entre em contato"
        openGraph={{
          title: 'Rodolfo Belo',
          description: 'Olá, Seja bem vindo! Este é meu currículo profissional, caso tenha interesse em saber mais sobre mim, por favor entre em contato',
          images: [
            {
              url: 'https://avatars.githubusercontent.com/u/64740047?v=4',
              width: 500,
              height: 300,
              alt: 'img',
              type: 'image/jpeg',
            },
          ],
          siteName: 'Portfólio',
        }}
      />
      <HomePage />
    </>
  );
}
