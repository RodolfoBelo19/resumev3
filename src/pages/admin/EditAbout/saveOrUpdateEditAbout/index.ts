import { IAbout } from '@/interfaces/IAbout';
import { AxiosHttpClient } from "@/infra/http/axiosHttpClient";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const httpClient = new AxiosHttpClient();

export const saveOrUpdateEditAbout = async (values: IAbout) => {
  if (values._id) {
    await httpClient.patch({
      url: `${process.env.NEXT_PUBLIC_API_URL}/about/${values._id}`,
      body: values,
    }).then((response) => {
      toast.success("Alterado com sucesso!")
    }).catch((error) => {
      toast.error("Erro ao alterar!")
    });
    return;
  }

  httpClient.post({
    url: "${process.env.NEXT_PUBLIC_API_URL}/about",
    body: values,
  });
};