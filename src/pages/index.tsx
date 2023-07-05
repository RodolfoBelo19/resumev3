import HomePage from "@/presentation/components/HomePage/Home";
import { NextSeo } from "next-seo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { useTranslation } from "next-i18next";

export default function Home(
  _props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { t } = useTranslation("common");

  return (
    <>
      <NextSeo
        title="Rodolfo Belo"
        description={t("description")}
        openGraph={{
          title: "Rodolfo Belo",
          description: t("description"),
          images: [
            {
              url: "https://avatars.githubusercontent.com/u/64740047?v=4",
              width: 500,
              height: 300,
              alt: "img",
              type: "image/jpeg",
            },
          ],
          siteName: t("site_name"),
        }}
      />
      <HomePage />
    </>
  );
}

export const getStaticProps: GetStaticProps<any> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common"])),
  },
});
