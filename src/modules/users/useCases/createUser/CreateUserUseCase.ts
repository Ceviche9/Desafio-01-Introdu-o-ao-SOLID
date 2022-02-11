import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const userALreadyExists = this.usersRepository.findByEmail(email);

    if (userALreadyExists) {
      throw new Error("User already exists");
    }

    return this.usersRepository.create({ name, email });
  }
}

export { CreateUserUseCase };
