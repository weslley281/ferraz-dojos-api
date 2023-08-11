import { CreateDojoUseCase } from './CreateDojoUseCase';
import { DojoRepositoryMock } from './DojoRepositoryMock';

describe('CreateDojoUseCase', () => {
  it('should be able to create a new dojo', async () => {
    const dojoRepository = new DojoRepositoryMock();
    const createDojoUseCase = new CreateDojoUseCase(dojoRepository);

    const createDojoData = {
      dojo: "Quebra Dentes",
      email: "quebradentes@gmail.com",
      phone: "(65)999123456",
      paid_out: true,
      id_dojo: "der5fv4d524sfdf4v58dsf485",
      country: "Brasil",
      state: "Mato Grosso",
      city: "Várzea Grande",
      address_line1: "rua sei la",
      address_line2: "casa 00",
      password: "123456"
    };

    const createdDojo = await createDojoUseCase.execute(createDojoData);

    expect(createdDojo).toBeDefined();
    // Add more expectations based on your business logic
  });
});
