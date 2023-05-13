import { AxiosHttpClient } from "@/infra/http/axiosHttpClient";
import { IAbout } from "../IAbout";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const httpClient = new AxiosHttpClient();

export const saveOrUpdateEditAbout = async (values: IAbout) => {
  if (values._id) {
    await httpClient.patch({
      url: `http://localhost:3010/about/${values._id}`,
      body: values,
    }).then((response) => {
      toast.success("Alterado com sucesso!")
    }).catch((error) => {
      toast.error("Erro ao alterar!")
    });
    return;
  }

  httpClient.post({
    url: "http://localhost:3010/about",
    body: values,
  });
};