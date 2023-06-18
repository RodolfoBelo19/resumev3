import { About } from '../entities/About';
import { AboutService } from './AboutService';
import { AboutRepository } from '../repositories/AboutRepository';

jest.mock('../repositories/AboutRepository');

describe('AboutService', () => {
  it('should call the save method of AboutRepository with the about object', async () => {
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
    AboutRepository.prototype.save = mockSave;

    const aboutService = new AboutService();

    await aboutService.saveOrUpdateAbout(about);

    expect(mockSave).toHaveBeenCalledTimes(1);
    expect(mockSave).toHaveBeenCalledWith(about);
  });
});
