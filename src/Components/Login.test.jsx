import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Login from './Login'; // Asegúrate de que la ruta es correcta
import '@testing-library/jest-dom/extend-expect';

describe('Login Component', () => {
  test('should render the login form with input fields and submit button', () => {
    render(<Login />);

    // Verificar que los elementos están en el documento
    expect(screen.getByLabelText(/correo/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/contraseña/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /enviar/i })).toBeInTheDocument();
  });

  test('should show error message if email is invalid', async () => {
    render(<Login />);

    const emailInput = screen.getByLabelText(/correo/i);
    const submitButton = screen.getByRole('button', { name: /enviar/i });

    // Ingresar un correo inválido
    fireEvent.change(emailInput, { target: { value: 'a' } });
    fireEvent.blur(emailInput); // Para que se valide el campo

    // Verificar que el mensaje de error aparece
    await waitFor(() => expect(screen.getByText(/el correo debe tener al menos 3 letras/i)).toBeInTheDocument());

    // Verificar que el botón está deshabilitado
    expect(submitButton).toBeDisabled();
  });

  test('should not submit if form has invalid fields', async () => {
    render(<Login />);

    const emailInput = screen.getByLabelText(/correo/i);
    const passwordInput = screen.getByLabelText(/contraseña/i);
    const submitButton = screen.getByRole('button', { name: /enviar/i });

    // Ingresar un correo inválido
    fireEvent.change(emailInput, { target: { value: 'a' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.submit(screen.getByRole('form'));

    // Verificar que el mensaje de error aparece y el formulario no se envía
    await waitFor(() => expect(screen.getByText(/el correo debe tener al menos 3 letras/i)).toBeInTheDocument());
    expect(submitButton).toBeDisabled();
  });

  test('should submit the form if email and password are valid', async () => {
    render(<Login />);

    const emailInput = screen.getByLabelText(/correo/i);
    const passwordInput = screen.getByLabelText(/contraseña/i);
    const submitButton = screen.getByRole('button', { name: /enviar/i });

    // Ingresar un correo válido
    fireEvent.change(emailInput, { target: { value: 'test@correo.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    // Verificar que el botón ahora esté habilitado
    expect(submitButton).not.toBeDisabled();

    // Enviar el formulario
    fireEvent.click(submitButton);

    // Verificar que el mensaje de éxito de envío aparece (simulado)
    await waitFor(() => expect(window.alert).toHaveBeenCalledWith('✅ Inicio de sesión exitoso (simulado).'));
  });
});
