import { About } from '../entities/About';
import { AboutRepository } from './AboutRepository';

const mockSave = jest.fn();

jest.mock('./AboutRepository', () => {
  const { AboutRepository: OriginalAboutRepository } = jest.requireActual('./AboutRepository');
  return {
    AboutRepository: class MockAboutRepository extends OriginalAboutRepository {
      async save(about: About): Promise<void> {
        mockSave(about);
      }
    },
  };
});

describe('AboutRepository', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

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

    const aboutRepository = new AboutRepository();
    await aboutRepository.save(about);

    expect(mockSave).toHaveBeenCalledTimes(1);
    expect(mockSave).toHaveBeenCalledWith(about);
  });

  it('should throw an error if the about object is not valid', async () => {
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

    mockSave.mockImplementation(() => {
      throw new Error('Error');
    });

    const aboutRepository = new AboutRepository();

    await expect(aboutRepository.save(about)).rejects.toThrowError('Error');
    expect(mockSave).toHaveBeenCalledTimes(1);
    expect(mockSave).toHaveBeenCalledWith(about);
  });
});
