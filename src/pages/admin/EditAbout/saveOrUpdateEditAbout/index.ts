import { IAbout } from '@/interfaces/IAbout';
import { AxiosHttpClient } from '../../../../infra/http/axiosHttpClient';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const httpClient = new AxiosHttpClient();

export const saveOrUpdateEditAbout = async (values: IAbout): Promise<void> => {
  try {
    if (values._id) {
      await httpClient.patch({
        url: `${process.env.NEXT_PUBLIC_API_URL}/about/${values._id}`,
        body: values,
      });
      toast.success('Alterado com sucesso!');
      return Promise.resolve();
    }

    await httpClient.post({
      url: `${process.env.NEXT_PUBLIC_API_URL}/about`,
      body: values,
    });

    toast.success('Salvo com sucesso!');
    return Promise.resolve();
  } catch (error) {
    toast.error('Erro ao salvar ou alterar!');
    return Promise.reject(error); // Adicionando um valor de rejeição em caso de erro
  }
};
