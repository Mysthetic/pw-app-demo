import { render, screen, fireEvent } from '@testing-library/react';
import FormPage from './FormPage';
import { describe, it, expect, vi, beforeEach } from 'vitest';

//Mock useNavigate จาก react-router-dom
vi.mock('react-router-dom', () => ({
  useNavigate: () => vi.fn(),
}));

describe('FormPage', () => {
  //Mock alert ทุกรอบก่อนทดสอบ
  beforeEach(() => {
    vi.spyOn(window, 'alert').mockImplementation(() => {});
  });

  it('should show alert when name is empty', () => {
    render(<FormPage />);
    const button = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(button);
    expect(window.alert).toHaveBeenCalledWith('Please enter your name.');
  });

  it('should allow submission when name is entered', async () => {
    render(<FormPage />);
    const input = screen.getByLabelText(/name/i);
    const button = screen.getByRole('button', { name: /submit/i });

    fireEvent.change(input, { target: { value: 'John' } });
    fireEvent.click(button);

    //ตรวจสอบว่า alert ถูกเรียก
    expect(window.alert).not.toHaveBeenCalledWith('Please enter your name.');
  });
});
