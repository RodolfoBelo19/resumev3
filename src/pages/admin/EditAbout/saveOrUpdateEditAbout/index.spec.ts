import { IAbout } from '@/interfaces/IAbout';
import { saveOrUpdateEditAbout } from '.';
import { AxiosHttpClient } from '../../../../infra/http/axiosHttpClient';
import { toast } from 'react-toastify';

jest.mock('../../../../infra/http/axiosHttpClient');
jest.mock('react-toastify');

const mockedAxiosHttpClient = new AxiosHttpClient() as jest.Mocked<AxiosHttpClient>;

describe('saveOrUpdateEditAbout', () => {
  beforeEach(() => {
    Object.defineProperty(process.env, 'NEXT_PUBLIC_API_URL', {
      value: 'https://backend-resume.vercel.app',
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should update an existing about', async () => {
    const values: IAbout = {
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

    mockedAxiosHttpClient.patch.mockResolvedValueOnce({
      url: `${process.env.NEXT_PUBLIC_API_URL}/about/${values._id}`,
      body: values,
    });

    await saveOrUpdateEditAbout(values);

    expect(toast.success).toHaveBeenCalledWith('Alterado com sucesso!');
  });
});
