import { IAbout } from '@/interfaces/IAbout';
import { saveOrUpdateEditAbout } from './';
import { AxiosAboutRepository } from '../../../../infra/http/AxiosAboutRepository';

// Mocks
const mockSave = jest.fn();

jest.mock('../../../../infra/http/AxiosAboutRepository/index.ts', () => {
  const originalModule = jest.requireActual('../../../../infra/http/AxiosAboutRepository/index.ts');
  return {
    ...originalModule,
    AxiosAboutRepository: jest.fn().mockImplementation(() => ({
      save: mockSave,
    })),
  };
});

describe('saveOrUpdateEditAbout', () => {
  it('deve chamar o método save do AxiosAboutRepository com o objeto about', async () => {
    // Arrange
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

    // Act
    await saveOrUpdateEditAbout(about);

    // Assert
    expect(AxiosAboutRepository).toHaveBeenCalledTimes(1);
    expect(mockSave).toHaveBeenCalledTimes(1);
    expect(mockSave).toHaveBeenCalledWith(about);
  });
});
