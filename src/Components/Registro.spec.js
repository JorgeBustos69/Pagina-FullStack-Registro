import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Registro from "./Registro";
jest.mock("./Navegacion", () => () => <div data-testid="navegacion">Navegación Mock</div>);

describe("Componente Registro", () => {
  test("Renderiza correctamente el título principal", () => {
    render(<Registro />);
    expect(screen.getByText("Crear cuenta nueva 🍰")).toBeInTheDocument();
  });
  test("Muestra un error si la contraseña es demasiado corta", () => {
    render(<Registro />);
    const passwordInput = screen.getByPlaceholderText("contraseñacienporcientosegura");
    const confirmarInput = screen.getByPlaceholderText("Repite tu contraseña");
    const submitButton = screen.getByText("Enviar");
    fireEvent.change(passwordInput, { target: { value: "123" } });
    fireEvent.change(confirmarInput, { target: { value: "123" } });
    fireEvent.click(submitButton);
expect(
  screen.getAllByText("La contraseña debe tener mínimo 8 caracteres.")[0]
).toBeInTheDocument();
  });
  test("Muestra un mensaje de éxito si el formulario está correcto", () => {
    window.alert = jest.fn();
    render(<Registro />);
    fireEvent.change(screen.getByPlaceholderText("Diego Rafael"), { target: { value: "Juan" } });
    fireEvent.change(screen.getByPlaceholderText("Flores Valdenegro"), { target: { value: "Pérez" } });
    fireEvent.change(screen.getByPlaceholderText("Padre Hurtado"), { target: { value: "Calle 123" } });
    fireEvent.change(screen.getByPlaceholderText("DiegoF@gmail.com"), { target: { value: "correo@test.com" } });
    fireEvent.change(screen.getByPlaceholderText("contraseñacienporcientosegura"), { target: { value: "12345678" } });
    fireEvent.change(screen.getByPlaceholderText("Repite tu contraseña"), { target: { value: "12345678" } });
    fireEvent.change(screen.getByPlaceholderText("28"), { target: { value: "25" } });

    fireEvent.click(screen.getByText("Enviar"));

    expect(window.alert).toHaveBeenCalledWith("✅ Cuenta creada con éxito!");
  });
});
