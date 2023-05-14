import { AxiosHttpClient } from "../../infra/http/axiosHttpClient";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const httpClient = new AxiosHttpClient();

export const saveOrUpdateResource = async (resourceName: string, values: any) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/${resourceName}${values._id ? `/${values._id}` : ''}`;
  const method = values._id ? 'patch' : 'post';

  try {
    await httpClient[method]({
      url,
      body: values,
    });
    toast.success("Salvo com sucesso!");
  } catch (error) {
    toast.error("Erro ao salvar!");
  }
};
