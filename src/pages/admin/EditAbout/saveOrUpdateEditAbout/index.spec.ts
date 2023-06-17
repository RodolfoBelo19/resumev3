import { IAbout } from '@/domain/AboutRepository/IAbout';
import { saveOrUpdateEditAbout } from './';
import { AboutRepository } from '../../../../domain/AboutRepository';

const mockSave = jest.fn();

jest.mock('../../../../domain/AboutRepository', () => {
  const originalModule = jest.requireActual('../../../../domain/AboutRepository');
  return {
    ...originalModule,
    AboutRepository: jest.fn().mockImplementation(() => ({
      save: mockSave,
    })),
  };
});

describe('saveOrUpdateEditAbout', () => {
  it('should call the save method of AboutRepository with the about object', async () => {
    const about: IAbout = {
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

    await saveOrUpdateEditAbout(about);

    expect(AboutRepository).toHaveBeenCalledTimes(1);
    expect(mockSave).toHaveBeenCalledTimes(1);
    expect(mockSave).toHaveBeenCalledWith(about);
  });

  it('should throw an error if the about object is not valid', async () => {
    const about: IAbout = {
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

    mockSave.mockImplementation(() => {
      throw new Error('Error');
    });

    await expect(saveOrUpdateEditAbout(about)).rejects.toThrowError('Error');

    expect(AboutRepository).toHaveBeenCalledTimes(2);
    expect(mockSave).toHaveBeenCalledTimes(2);
    expect(mockSave).toHaveBeenCalledWith(about);
  });
});
