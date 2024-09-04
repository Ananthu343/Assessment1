import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';
import { StateContext } from '../context/mainContext';

// Mock the StateContext for testing
jest.mock('../context/mainContext', () => ({
  StateContext: React.createContext({
    bookNow: jest.fn(),
  }),
}));

const mockBookNow = jest.fn();

describe('Button component', () => {
  beforeEach(() => {
    StateContext.displayName = 'MockStateContext'; // Improve test readability
    mockBookNow.mockReset(); // Reset mock function before each test
  });

  // Test for "scheduled" status
  it('renders countdown for scheduled button', () => {
    const mockDate = new Date();
    render(
      <Button status="scheduled" date={mockDate} index={0} />,
    );
    const countdownElement = screen.getByTestId('countdown'); 
    expect(countdownElement).toBeInTheDocument();
  });

  // Test for "join" status
  it('renders "Join now" button with icon for join status', () => {
    render(<Button status="join" index={1} />);
    const joinButton = screen.getByText('Join now');
    const joinIcon = screen.getByRole('img', { name: /join/i }); 
    expect(joinButton).toBeInTheDocument();
    expect(joinIcon).toBeInTheDocument();
  });

  // Test for "book" status and modal opening
  it('renders "Book now" button and opens modal on click for book status', () => {
    render(<Button status="book" index={2} />);
    const bookButton = screen.getByText('Book now');
    fireEvent.click(bookButton);
    expect(bookButton).toBeInTheDocument();
    expect(screen.getByText('BookingConfirmation')).toBeInTheDocument(); 
  });

  // Test for disabled button with "Book now" text
  it('renders disabled button for other statuses', () => {
    render(<Button status="unknown" index={3} />);
    const disabledButton = screen.getByText('Book now');
    expect(disabledButton).toBeDisabled();
  });

  // Test for modal closing with handleModal
  it('closes modal on clicking modal close button', () => {
    render(<Button status="book" index={4} />);
    const bookButton = screen.getByText('Book now');
    fireEvent.click(bookButton);
    const closeButton = screen.getByRole('button', { name: /close/i }); 
    fireEvent.click(closeButton);
    expect(screen.queryByText('BookingConfirmation')).toBeNull(); // Verify modal is gone
  });

  // Test for bookNow function call on booking confirmation
  it('calls bookNow function on confirmation button click', () => {
    render(<Button status="book" index={5} />);
    const bookButton = screen.getByText('Book now');
    fireEvent.click(bookButton);
    const confirmButton = screen.getByRole('button', { name: /confirm/i });
    fireEvent.click(confirmButton);
    expect(mockBookNow).toHaveBeenCalledTimes(1);
    expect(mockBookNow).toHaveBeenCalledWith(5); // Verify index passed to bookNow
  });
});