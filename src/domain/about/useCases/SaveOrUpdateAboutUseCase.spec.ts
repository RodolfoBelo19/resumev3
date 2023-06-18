import { AboutService } from './../services/AboutService';
import { About } from '@/domain/about/entities/About';
import { SaveOrUpdateAboutUseCase } from './SaveOrUpdateAboutUseCase';

jest.mock('./../services/AboutService');

describe('SaveOrUpdateAboutUseCase', () => {
  it('should call the save method of AboutService with the about object', async () => {
    const about: About = {
      _id: 'about_id',
      description_en: 'description_en',
      description_pt: 'description_pt',
      email: 'email',
      phone: 'phone',
      language: ['en', 'pt'],
      age: 20,
      localization: 'localization',
      user_id: 'user_id',
    };

    const mockSave = jest.fn();
    AboutService.prototype.saveOrUpdateAbout = mockSave;

    const saveOrUpdateAboutUseCase = new SaveOrUpdateAboutUseCase();

    await saveOrUpdateAboutUseCase.execute(about);

    expect(mockSave).toHaveBeenCalledTimes(1);
    expect(mockSave).toHaveBeenCalledWith(about);
  });
});