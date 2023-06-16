import { AxiosAboutRepository } from '../../../../infra/http/AxiosAboutRepository';
import { AxiosHttpClient } from '../../../../infra/http/axiosHttpClient';
import { IAbout } from '@/interfaces/IAbout';

export const saveOrUpdateEditAbout = async (about: IAbout): Promise<void> => {
  const axiosAboutRepository = new AxiosAboutRepository(new AxiosHttpClient());

  axiosAboutRepository.save(about);
};