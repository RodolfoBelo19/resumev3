import 'react-toastify/dist/ReactToastify.css';

import { toast } from 'react-toastify';

import { IAbout } from '@/domain/about/IAbout';
import { IAboutRepository } from '@/domain/about/IAboutRepository';

import { AxiosHttpClient } from '../axiosHttpClient';

export class AxiosAboutRepository implements IAboutRepository {
  constructor(private readonly httpClient: AxiosHttpClient) { }

  async save(about: IAbout): Promise<void> {
    if (about._id) {
      const res = await this.httpClient.patch({
        url: `${process.env.NEXT_PUBLIC_API_URL}/about/${about._id}`,
        body: about,
      });

      if (res.status === 200) {
        toast.success('Editado com sucesso!');
        return Promise.resolve();
      }

      toast.error('Erro ao editar!');
      return Promise.resolve();
    }

    const res = await this.httpClient.post({
      url: `${process.env.NEXT_PUBLIC_API_URL}/about`,
      body: about,
    });

    if (res.status === 201) {
      toast.success('Salvo com sucesso!');
      return Promise.resolve();
    }

    toast.error('Erro ao salvar!');
    return Promise.resolve();
  }
}
