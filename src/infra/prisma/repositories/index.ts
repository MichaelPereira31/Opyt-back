export class BaseRepository<TInstance, TModel> {
  private model: TModel | any;
  protected include: unknown = {};

  constructor(model: TModel) {
    this.model = model;
  }

  async findAll(): Promise<TInstance[]> {
    return await this.model.findMany();
  }

  async findById(id: string): Promise<TInstance> {
    return await this.model.findUnique({
      where: { id },
    });
  }

  async create(payload: TInstance): Promise<TInstance> {
    const instance = await this.model.create({
      data: payload,
    });

    return instance;
  }

  async update(
    id: string,
    data: Partial<Omit<TInstance, 'id'>>,
  ): Promise<TInstance> {
    const instance = await this.model.update({
      where: { id },
      data,
    });

    return instance;
  }

  async delete(id: string): Promise<void> {
    await this.model.delete({
      where: { id },
    });
  }
}
