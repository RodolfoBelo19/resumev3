import { BaseRepository } from './BaseRepository';

class UserRepository extends BaseRepository<any> {
  async save(entity: any): Promise<void> {
    if (entity.id) {
      const res = await this.httpClient.patch({
        url: `${process.env.NEXT_PUBLIC_API_URL}/users/${entity.id}`,
        body: entity,
      });

      if (res.status === 200) {
        return Promise.resolve();
      }

      return Promise.reject();
    }

    const res = await this.httpClient.post({
      url: `${process.env.NEXT_PUBLIC_API_URL}/users`,
      body: entity,
    });

    if (res.status === 201) {
      return Promise.resolve();
    }

    return Promise.reject();
  }
}

describe('UserRepository', () => {
  it('should call save method', async () => {
    const entity = { id: 1, name: 'Example Entity' };

    const repository = new UserRepository();

    repository.save = jest.fn();

    await repository.save(entity);

    expect(repository.save).toHaveBeenCalledWith(entity);
  });
});
