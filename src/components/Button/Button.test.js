import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import {Button} from './Button';

test('button should use primary by default', async () => {
  // ARRANGE
  const buttonText="Add to cart";
  render(<button>{buttonText}</button>)
  //ACT
  const button = await screen.findByText('Add to cart');
  //ASSERT
 expect(button).toBeInTheDocument();

});

