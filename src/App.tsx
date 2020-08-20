import React, { useState, useCallback } from 'react';

import { Input } from './components/Input'

import './styles.css';

interface User {
  cep: string;
  price: number;
}

const App: React.FC = () => {
  const [user, setUser] = useState<User>({} as User);

  const handleChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.currentTarget.name]: e.currentTarget.value
    });
  }, [user]);

  return (
    <>
      <fieldset>
        <Input
          mask="cep"
          name="cep"
          placeholder="99999-999"
          onChange={handleChange}
        />
      </fieldset>
      <fieldset>
        <Input
          placeholder="9.999,99"
          prefix="R$: "
          mask="currency"
          name="price"
          onChange={handleChange}
        />
      </fieldset>
      <button
        onClick={() => console.log(user)}>Enviar</button>
    </>
  );
};

export default App;
