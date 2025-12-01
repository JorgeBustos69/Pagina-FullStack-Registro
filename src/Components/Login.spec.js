import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "./Login";

jest.mock("./Navegacion", () => () => <div data-testid="navegacion">Navegación Mock</div>);

describe("Componente Login", () => {
  beforeEach(() => {
    window.alert = jest.fn();
  });

  test("Renderiza correctamente el título principal", () => {
    render(<Login />);
    expect(screen.getByText("Iniciar sesión")).toBeInTheDocument();
  });

  test("Muestra un mensaje de error si el correo es inválido", () => {
    render(<Login />);
    const correoInput = screen.getByPlaceholderText("ejemplo@correo.com");

    fireEvent.change(correoInput, { target: { value: "correo_invalido" } });

    expect(
      screen.getByText('El correo debe tener al menos 3 letras y contener un "@".')
    ).toBeInTheDocument();
  });

  test("Muestra alerta si se intenta enviar con campos vacíos", () => {
    render(<Login />);

    const form = screen.getByRole("form", { hidden: true }) || screen.getByText("Enviar").closest("form");

    fireEvent.submit(form);

    expect(window.alert).toHaveBeenCalledWith("Por favor, completa los campos correctamente.");
  });

  test("Muestra alerta de éxito si los datos son correctos", () => {
    render(<Login />);

    fireEvent.change(screen.getByPlaceholderText("ejemplo@correo.com"), {
      target: { value: "usuario@test.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("••••••••"), {
      target: { value: "12345678" },
    });

    fireEvent.click(screen.getByText("Enviar"));

    expect(window.alert).toHaveBeenCalledWith("✅ Inicio de sesión exitoso (simulado).");
  });
  test("Muestra error si la contraseña es demasiado corta", () => {
  render(<Login />);
  const passwordInput = screen.getByPlaceholderText("••••••••");

  fireEvent.change(passwordInput, { target: { value: "123" } });

  expect(screen.getByText("La contraseña debe tener al menos 8 caracteres.")).toBeInTheDocument();
});
test("Muestra error si el correo no contiene @", () => {
  render(<Login />);
  const correoInput = screen.getByPlaceholderText("ejemplo@correo.com");

  fireEvent.change(correoInput, { target: { value: "correoInvalido" } });

  expect(
    screen.getByText('El correo debe tener al menos 3 letras y contener un "@".')
  ).toBeInTheDocument();
});
test("El botón Enviar está deshabilitado si los campos están vacíos", () => {
  render(<Login />);
  const submitButton = screen.getByText("Enviar");
  expect(submitButton).toBeDisabled();
});

test("El botón Enviar se habilita cuando el formulario es válido", () => {
  render(<Login />);

  fireEvent.change(screen.getByPlaceholderText("ejemplo@correo.com"), {
    target: { value: "usuario@test.com" },
  });
  fireEvent.change(screen.getByPlaceholderText("••••••••"), {
    target: { value: "12345678" },
  });

  expect(screen.getByText("Enviar")).not.toBeDisabled();
});
test("Muestra en consola los datos enviados correctamente", () => {
  console.log = jest.fn(); 

  render(<Login />);
  fireEvent.change(screen.getByPlaceholderText("ejemplo@correo.com"), {
    target: { value: "usuario@test.com" },
  });
  fireEvent.change(screen.getByPlaceholderText("••••••••"), {
    target: { value: "12345678" },
  });
  fireEvent.click(screen.getByText("Enviar"));

  expect(console.log).toHaveBeenCalledWith(
    expect.objectContaining({
      correo: "usuario@test.com",
      contraseña: "12345678",
    })
  );
});




});
