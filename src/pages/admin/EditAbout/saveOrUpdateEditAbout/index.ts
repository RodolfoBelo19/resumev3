import { IAbout } from '@/domain/AboutRepository/IAbout';
import { AboutRepository } from '../../../../domain/AboutRepository';

export const saveOrUpdateEditAbout = async (about: IAbout): Promise<void> => {
  const aboutRepository = new AboutRepository();

  aboutRepository.save(about);
};